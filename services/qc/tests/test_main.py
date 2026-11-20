import numpy as np
import pytest
from fastapi import HTTPException
from fastapi.testclient import TestClient

import main
from models import DetectedFace

client = TestClient(main.app)
FACE = DetectedFace(
    box=(100.0, 80.0, 140.0, 140.0),
    eye_distance_px=63.0,
    row=np.zeros(15, dtype=np.float32),
)


class FakeModels:
    def __init__(self, faces, score=0.9):
        self.faces = list(faces)
        self.score = score

    def detect(self, image):
        return list(self.faces)

    def similarity(self, image, face, reference, reference_face):
        return self.score


def use_models(monkeypatch, faces=(FACE,), score=0.9):
    monkeypatch.setattr(main, "get_models", lambda: FakeModels(faces, score))


def product_image():
    image = np.zeros((400, 400, 3), dtype=np.uint8)
    # A 60 px wide product below and to the right of the face box.
    image[240:360, 300:360] = 255
    return image


def test_health_lists_the_real_checks():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {
        "status": "ok",
        "checks": ["product-size", "face-identity"],
        "models": "lazy",
    }


def test_product_size_measures_by_the_eyes(monkeypatch):
    use_models(monkeypatch)
    monkeypatch.setattr(main, "_fetch_image", lambda url: product_image())

    response = client.post(
        "/qc/product-size",
        json={"image_url": "https://cdn/x.png", "product_size_mm": [64]},
    )
    body = response.json()

    assert response.status_code == 200
    assert body["pass"] is True
    assert body["method"] == "yunet-eyes"
    assert body["eye_distance_px"] == 63.0
    assert 55 <= body["measured_mm"] <= 70
    assert body["real_mm"] == 64.0


def test_product_size_fails_a_wrong_real_size(monkeypatch):
    use_models(monkeypatch)
    monkeypatch.setattr(main, "_fetch_image", lambda url: product_image())

    body = client.post(
        "/qc/product-size",
        json={"image_url": "https://cdn/x.png", "product_size_mm": [100]},
    ).json()
    assert body["pass"] is False
    assert body["ratio"] < 0.8


def test_product_size_falls_back_to_face_width_without_eyes(monkeypatch):
    face = DetectedFace(box=(100.0, 80.0, 140.0, 140.0), eye_distance_px=0.0, row=FACE.row)
    use_models(monkeypatch, faces=(face,))
    monkeypatch.setattr(main, "_fetch_image", lambda url: product_image())

    body = client.post(
        "/qc/product-size",
        json={"image_url": "https://cdn/x.png", "product_size_mm": [64]},
    ).json()
    assert body["method"] == "face-width-fallback"
    assert body["eye_distance_px"] == pytest.approx(63.0, abs=0.5)
    assert body["pass"] is True


def test_product_size_rejects_a_turned_face(monkeypatch):
    face = DetectedFace(box=(100.0, 80.0, 140.0, 140.0), eye_distance_px=20.0, row=FACE.row)
    use_models(monkeypatch, faces=(face,))
    monkeypatch.setattr(main, "_fetch_image", lambda url: product_image())

    body = client.post(
        "/qc/product-size",
        json={"image_url": "https://cdn/x.png", "product_size_mm": [64]},
    ).json()
    assert body["pass"] is False
    assert "turned" in body["detail"]


def test_product_size_reports_missing_face_or_product(monkeypatch):
    use_models(monkeypatch, faces=())
    monkeypatch.setattr(main, "_fetch_image", lambda url: product_image())
    body = client.post(
        "/qc/product-size",
        json={"image_url": "https://cdn/x.png", "product_size_mm": [64]},
    ).json()
    assert body["pass"] is False
    assert "no face" in body["detail"]

    use_models(monkeypatch)
    monkeypatch.setattr(main, "_fetch_image", lambda url: np.zeros((400, 400, 3), dtype=np.uint8))
    body = client.post(
        "/qc/product-size",
        json={"image_url": "https://cdn/x.png", "product_size_mm": [64]},
    ).json()
    assert body["pass"] is False
    assert "no product contour" in body["detail"]


def test_face_identity_uses_sface_similarity(monkeypatch):
    use_models(monkeypatch, score=0.88)
    monkeypatch.setattr(main, "_fetch_image", lambda url: np.zeros((100, 100, 3), dtype=np.uint8))
    body = client.post(
        "/qc/face-identity",
        json={"image_url": "https://cdn/shot.png", "reference_url": "https://cdn/ref.png"},
    ).json()
    assert body["pass"] is True
    assert body["score"] == 0.88
    assert body["method"] == "sface"

    use_models(monkeypatch, score=0.2)
    body = client.post(
        "/qc/face-identity",
        json={"image_url": "https://cdn/shot.png", "reference_url": "https://cdn/ref.png"},
    ).json()
    assert body["pass"] is False


def test_face_identity_reports_missing_face(monkeypatch):
    use_models(monkeypatch, faces=())
    monkeypatch.setattr(main, "_fetch_image", lambda url: np.zeros((100, 100, 3), dtype=np.uint8))
    body = client.post(
        "/qc/face-identity",
        json={"image_url": "https://cdn/shot.png", "reference_url": "https://cdn/ref.png"},
    ).json()
    assert body["pass"] is False
    assert "face not found" in body["detail"]


def test_request_validation_and_non_http_urls(monkeypatch):
    use_models(monkeypatch)
    empty = client.post(
        "/qc/product-size",
        json={"image_url": "https://cdn/x.png", "product_size_mm": []},
    )
    assert empty.status_code == 422

    negative = client.post(
        "/qc/product-size",
        json={"image_url": "https://cdn/x.png", "product_size_mm": [-1]},
    )
    assert negative.status_code == 422

    file_url = client.post(
        "/qc/product-size",
        json={"image_url": "file:///etc/passwd", "product_size_mm": [64]},
    )
    assert file_url.status_code == 400
    assert "http(s)" in file_url.json()["detail"]


def test_image_fetcher_blocks_private_and_loopback_targets(monkeypatch):
    with pytest.raises(HTTPException) as loopback:
        main._ensure_public_url("http://127.0.0.1/secret.png")
    assert loopback.value.status_code == 400

    with pytest.raises(HTTPException) as localhost:
        main._ensure_public_url("http://localhost/secret.png")
    assert localhost.value.status_code == 400

    with pytest.raises(HTTPException) as file_scheme:
        main._ensure_public_url("file:///etc/passwd")
    assert file_scheme.value.status_code == 400

    monkeypatch.setattr(
        main.socket,
        "getaddrinfo",
        lambda *args, **kwargs: [(2, 1, 6, "", ("93.184.216.34", 443))],
    )
    main._ensure_public_url("https://cdn.example/x.png")

    monkeypatch.setattr(
        main.socket,
        "getaddrinfo",
        lambda *args, **kwargs: [(2, 1, 6, "", ("10.0.0.5", 443))],
    )
    with pytest.raises(HTTPException) as private:
        main._ensure_public_url("https://internal.example/x.png")
    assert private.value.status_code == 400
