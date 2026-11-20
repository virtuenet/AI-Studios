"""AI Studios ML QC service.

Real, local checks:
- product-size: YuNet finds the holder's face and its eye landmarks give the
  scale ruler (adult pupils are ~63 mm apart). The largest contour outside the
  face approximates the product's short side. The measured width is compared
  with the real width supplied by the user.
- face-identity: YuNet aligns both faces and SFace (a real face-recognition
  embedding model) compares them with cosine similarity. The threshold is
  configurable because it should be calibrated on judged stills.

Models are downloaded once from the OpenCV Zoo, SHA-256 verified and cached.
Nothing is sent to a third party at request time.

Limits: no face in frame (an insert shot) gives no scale; a product held well
in front of the eyes reads up to ~15% big; a face turned past ~60 degrees gives
no usable eye distance. The contour finder is a heuristic, not a segmentation
model, so glass/thin objects are less reliable. Scores screen a take; they never
replace the human review.
"""
from __future__ import annotations

import ipaddress
import os
import socket
import urllib.request
from typing import Optional
from urllib.parse import urlparse

import cv2
import numpy as np
from fastapi import Depends, FastAPI, Header, HTTPException
from pydantic import BaseModel, Field, field_validator

from geometry import (
    DEFAULT_IDENTITY_THRESHOLD,
    DEFAULT_SIZE_TOLERANCE,
    fallback_pupil_distance_px,
    identity_verdict,
    product_width_mm,
    size_verdict,
)
from models import DetectedFace, FaceModels, get_models

app = FastAPI(title="AI Studios QC", version="1.0.0")

IDENTITY_THRESHOLD = float(
    os.environ.get("QC_IDENTITY_THRESHOLD", str(DEFAULT_IDENTITY_THRESHOLD))
)
SIZE_TOLERANCE = float(os.environ.get("QC_SIZE_TOLERANCE", str(DEFAULT_SIZE_TOLERANCE)))
MAX_IMAGE_BYTES = 20 * 1024 * 1024
MIN_EYE_TO_FACE_RATIO = 0.28
ALLOW_PRIVATE_URLS = os.environ.get("QC_ALLOW_PRIVATE_URLS") == "1"


class ProductSizeRequest(BaseModel):
    image_url: str
    product_size_mm: list[float] = Field(min_length=1)

    @field_validator("product_size_mm")
    @classmethod
    def positive_size(cls, value: list[float]) -> list[float]:
        if value[0] <= 0:
            raise ValueError("product_size_mm must be positive")
        return value


class IdentityRequest(BaseModel):
    image_url: str
    reference_url: str


def _ensure_public_url(url: str) -> None:
    """Reject file/private/loopback targets so the fetcher cannot be used as an SSRF probe."""
    parsed = urlparse(url)
    if parsed.scheme not in ("http", "https") or not parsed.hostname:
        raise HTTPException(status_code=400, detail="image URL must be http(s)")
    if ALLOW_PRIVATE_URLS:
        return
    port = parsed.port or (443 if parsed.scheme == "https" else 80)
    try:
        addresses = socket.getaddrinfo(
            parsed.hostname, port, type=socket.SOCK_STREAM
        )
    except OSError as exc:
        raise HTTPException(
            status_code=400, detail=f"could not resolve image host: {exc}"
        ) from exc
    for info in addresses:
        address = ipaddress.ip_address(info[4][0])
        if not address.is_global:
            raise HTTPException(
                status_code=400, detail="image URL must resolve to a public address"
            )


def _fetch_image(url: str) -> np.ndarray:
    _ensure_public_url(url)
    try:
        request = urllib.request.Request(url, headers={"User-Agent": "ai-studios-qc/1.0"})
        with urllib.request.urlopen(request, timeout=15) as response:
            data = response.read(MAX_IMAGE_BYTES + 1)
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=400, detail=f"image download failed: {exc}") from exc
    if len(data) > MAX_IMAGE_BYTES:
        raise HTTPException(status_code=400, detail="image is larger than 20 MB")
    image = cv2.imdecode(np.frombuffer(data, np.uint8), cv2.IMREAD_COLOR)
    if image is None:
        raise HTTPException(status_code=400, detail="could not decode image")
    return image


def _models() -> FaceModels:
    try:
        return get_models()
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(
            status_code=503, detail=f"face models unavailable: {exc}"
        ) from exc


def _require_qc_token(authorization: Optional[str] = Header(default=None)) -> None:
    """Optional bearer-token auth for /qc/* when QC_API_TOKEN is configured."""
    token = os.environ.get("QC_API_TOKEN", "").strip()
    if not token:
        return
    if authorization != f"Bearer {token}":
        raise HTTPException(
            status_code=401,
            detail="invalid QC token",
            headers={"WWW-Authenticate": "Bearer"},
        )


def _faces(image: np.ndarray) -> list[DetectedFace]:
    try:
        return _models().detect(image)
    except HTTPException:
        raise
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=503, detail=f"face detection failed: {exc}") from exc


def _largest_face(faces: list[DetectedFace]) -> DetectedFace | None:
    return max(faces, key=lambda face: face.area) if faces else None


def _product_width_px(image: np.ndarray, face_box) -> float:
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)
    edges = cv2.dilate(cv2.Canny(blurred, 40, 120), None, iterations=2)
    contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    fx, fy, fw, fh = face_box
    height, width = gray.shape
    best = None
    for contour in contours:
        x, y, w, h = cv2.boundingRect(contour)
        if w < width * 0.03 or h < height * 0.03:
            continue
        if x < fx + fw and x + w > fx and y < fy + fh and y + h > fy:
            continue  # overlaps the face
        if y < height * 0.25:
            continue  # the product is usually held lower than the eyes
        area = w * h
        if best is None or area > best[0]:
            best = (area, w)
    return float(best[1]) if best else 0.0


@app.get("/health")
def health():
    return {
        "status": "ok",
        "checks": ["product-size", "face-identity"],
        "models": "lazy",
    }


@app.post("/qc/product-size")
def qc_product_size(request: ProductSizeRequest, _: None = Depends(_require_qc_token)):
    image = _fetch_image(request.image_url)
    face = _largest_face(_faces(image))
    if face is None:
        return {
            "pass": False,
            "name": "product-size",
            "detail": "no face detected (insert shots cannot be measured)",
        }

    face_width = face.box[2]
    eye_distance = face.eye_distance_px
    method = "yunet-eyes"
    if eye_distance <= 0:
        eye_distance = fallback_pupil_distance_px(face_width)
        method = "face-width-fallback"
    elif eye_distance < face_width * MIN_EYE_TO_FACE_RATIO:
        return {
            "pass": False,
            "name": "product-size",
            "detail": "face is turned or eyes are obscured; no reliable eye-distance ruler",
        }

    product_px = _product_width_px(image, face.box)
    if product_px <= 0:
        return {
            "pass": False,
            "name": "product-size",
            "detail": "no product contour found outside the face",
        }

    measured = product_width_mm(eye_distance, product_px)
    verdict = size_verdict(measured, float(request.product_size_mm[0]), SIZE_TOLERANCE)
    verdict.update(
        {
            "method": method,
            "face_width_px": round(face_width, 1),
            "eye_distance_px": round(eye_distance, 1),
            "product_width_px": round(product_px, 1),
        }
    )
    return verdict


@app.post("/qc/face-identity")
def qc_face_identity(request: IdentityRequest, _: None = Depends(_require_qc_token)):
    image = _fetch_image(request.image_url)
    reference = _fetch_image(request.reference_url)
    face = _largest_face(_faces(image))
    ref_face = _largest_face(_faces(reference))
    if face is None or ref_face is None:
        return {
            "pass": False,
            "name": "face-identity",
            "detail": "face not found in one of the images",
        }

    try:
        score = _models().similarity(image, face, reference, ref_face)
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=503, detail=f"face comparison failed: {exc}") from exc

    verdict = identity_verdict(score, IDENTITY_THRESHOLD)
    verdict["method"] = "sface"
    return verdict
