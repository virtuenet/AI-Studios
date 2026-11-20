"""Opt-in integration test for the real YuNet + SFace models.

Run with:
    QC_MODEL_TESTS=1 python -m pytest tests/test_models_integration.py -q

It downloads the models from the OpenCV Zoo and two public OpenCV sample
images. The default suite stays offline and fast; this test is the proof that
the production path uses real face models, not a stub.
"""
import os
import urllib.request

import cv2
import numpy as np
import pytest
from fastapi.testclient import TestClient

import main
from models import get_models

pytestmark = pytest.mark.skipif(
    os.environ.get("QC_MODEL_TESTS") != "1",
    reason="set QC_MODEL_TESTS=1 to download and exercise the real models",
)

SAMPLES = "https://raw.githubusercontent.com/opencv/opencv/4.x/samples/data/"


def load(name):
    data = urllib.request.urlopen(SAMPLES + name, timeout=60).read()
    image = cv2.imdecode(np.frombuffer(data, np.uint8), cv2.IMREAD_COLOR)
    assert image is not None
    return image


def largest(models, image):
    faces = models.detect(image)
    assert faces, "expected at least one face"
    return max(faces, key=lambda face: face.area)


def test_real_models_recognize_the_same_face_and_reject_another():
    models = get_models()
    lena = load("lena.jpg")
    messi = load("messi5.jpg")

    lena_face = largest(models, lena)
    assert lena_face.eye_distance_px > 0
    assert lena_face.eye_distance_px > lena_face.box[2] * 0.28

    same = models.similarity(lena, lena_face, lena, lena_face)
    assert same > 0.99

    other = models.similarity(lena, lena_face, messi, largest(models, messi))
    assert other < same - 0.1
    assert other < 0.52


def test_real_product_measurement_uses_yunet_eyes_and_contour(monkeypatch):
    models = get_models()
    lena = load("lena.jpg")
    face = largest(models, lena)
    x, y, w, h = (int(value) for value in face.box)
    margin = 40
    crop = lena[max(0, y - margin):y + h + margin, max(0, x - margin):x + w + margin]

    canvas = np.zeros((crop.shape[0] + 320, crop.shape[1] + 420, 3), dtype=np.uint8)
    canvas[:crop.shape[0], :crop.shape[1]] = crop
    product_width = 160
    right, bottom = canvas.shape[1] - 30, canvas.shape[0] - 30
    cv2.rectangle(
        canvas,
        (right - product_width, bottom - 180),
        (right, bottom),
        (255, 255, 255),
        -1,
    )

    detected = max(models.detect(canvas), key=lambda item: item.area)
    expected_mm = product_width / detected.eye_distance_px * 63.0
    monkeypatch.setattr(main, "_fetch_image", lambda url: canvas)
    client = TestClient(main.app)

    passing = client.post(
        "/qc/product-size",
        json={"image_url": "https://cdn/shot.png", "product_size_mm": [round(expected_mm, 1)]},
    ).json()
    assert passing["pass"] is True, passing
    assert passing["method"] == "yunet-eyes"
    assert abs(passing["measured_mm"] - expected_mm) / expected_mm < 0.15

    failing = client.post(
        "/qc/product-size",
        json={"image_url": "https://cdn/shot.png", "product_size_mm": [round(expected_mm * 2, 1)]},
    ).json()
    assert failing["pass"] is False
