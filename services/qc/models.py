"""Local face models for the QC service.

Neither model is trained here: both come from the OpenCV Zoo and are verified
against a pinned SHA-256 before use.
- YuNet (MIT) finds faces and its five landmarks give the eye distance.
- SFace (Apache 2.0) turns an aligned face into a 128-d embedding used for
  face-identity comparison.

Models download once into QC_MODELS_DIR (default ~/.cache/ai-studios-qc) or are
baked into the Docker image at build time, so requests never wait on the
network.
"""
from __future__ import annotations

import hashlib
import os
import threading
import urllib.request
from dataclasses import dataclass
from functools import lru_cache
from pathlib import Path

import cv2
import numpy as np

from geometry import unit_vector

ZOO = "https://github.com/opencv/opencv_zoo/raw/47534e27c9851bb1128ccc0102f1145e27f23f98/models/"
CACHE = Path(os.environ.get("QC_MODELS_DIR", Path.home() / ".cache" / "ai-studios-qc"))
MODEL_FILES = {
    "yunet": (
        ZOO + "face_detection_yunet/face_detection_yunet_2023mar.onnx",
        "8f2383e4dd3cfbb4553ea8718107fc0423210dc964f9f4280604804ed2552fa4",
    ),
    "sface": (
        ZOO + "face_recognition_sface/face_recognition_sface_2021dec.onnx",
        "0ba9fbfa01b5270c96627c4ef784da859931e02f04419c829e83484087c34e79",
    ),
}
MAX_DETECTION_SIDE = 1920


@dataclass
class DetectedFace:
    box: tuple[float, float, float, float]
    eye_distance_px: float
    row: np.ndarray

    @property
    def area(self) -> float:
        return self.box[2] * self.box[3]


def model_path(name: str) -> Path:
    """Absolute path to a model, downloading and verifying it once if needed."""
    url, expected_sha = MODEL_FILES[name]
    path = CACHE / Path(url).name
    if path.exists() and hashlib.sha256(path.read_bytes()).hexdigest() == expected_sha:
        return path
    CACHE.mkdir(parents=True, exist_ok=True)
    request = urllib.request.Request(url, headers={"User-Agent": "ai-studios-qc/1.0"})
    with urllib.request.urlopen(request, timeout=120) as response:
        data = response.read()
    actual = hashlib.sha256(data).hexdigest()
    if actual != expected_sha:
        raise RuntimeError(f"checksum mismatch for {url}")
    path.write_bytes(data)
    return path


class FaceModels:
    """Thread-safe YuNet detection + SFace embedding."""

    def __init__(self) -> None:
        self.detector = cv2.FaceDetectorYN.create(str(model_path("yunet")), "", (320, 320), 0.6)
        self.recognizer = cv2.FaceRecognizerSF.create(str(model_path("sface")), "")
        self._lock = threading.Lock()

    def detect(self, image: np.ndarray) -> list[DetectedFace]:
        height, width = image.shape[:2]
        scale = min(1.0, MAX_DETECTION_SIDE / max(height, width))
        small = (
            cv2.resize(image, None, fx=scale, fy=scale)
            if scale < 1
            else image
        )
        with self._lock:
            self.detector.setInputSize((small.shape[1], small.shape[0]))
            _, rows = self.detector.detect(small)
        if rows is None:
            return []
        faces = []
        for row in rows:
            coords = np.asarray(row, dtype=np.float32).copy()
            coords[:14] /= scale
            x, y, box_w, box_h = (float(value) for value in coords[:4])
            eye_distance = float(
                np.hypot(coords[4] - coords[6], coords[5] - coords[7])
            )
            faces.append(
                DetectedFace(
                    box=(x, y, box_w, box_h),
                    eye_distance_px=eye_distance,
                    row=coords,
                )
            )
        return faces

    def embedding(self, image: np.ndarray, face: DetectedFace) -> np.ndarray:
        with self._lock:
            aligned = self.recognizer.alignCrop(image, face.row)
            feature = self.recognizer.feature(aligned)
        return np.asarray(unit_vector(feature.ravel().tolist()), dtype=np.float32)

    def similarity(
        self,
        image: np.ndarray,
        face: DetectedFace,
        reference: np.ndarray,
        reference_face: DetectedFace,
    ) -> float:
        left = self.embedding(image, face)
        right = self.embedding(reference, reference_face)
        return float(np.dot(left, right))


@lru_cache(maxsize=1)
def get_models() -> FaceModels:
    return FaceModels()
