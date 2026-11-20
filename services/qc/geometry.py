"""Pure geometry/identity math for the QC service (unit-tested without models)."""

PUPIL_DISTANCE_MM = 63.0
# Face width is about 2.2x the pupil distance; used only when YuNet landmarks
# are missing (profile/covered eyes).
FACE_WIDTH_TO_PUPILS = PUPIL_DISTANCE_MM / 140.0
DEFAULT_SIZE_TOLERANCE = 0.2
DEFAULT_IDENTITY_THRESHOLD = 0.52


def fallback_pupil_distance_px(face_width_px: float) -> float:
    """Estimate the pupil distance from a detected face-box width."""
    return float(face_width_px) * FACE_WIDTH_TO_PUPILS


def product_width_mm(
    pupil_distance_px: float,
    product_width_px: float,
    ipd_mm: float = PUPIL_DISTANCE_MM,
) -> float:
    """Convert product pixels to millimetres using the holder's eyes as a ruler."""
    if pupil_distance_px <= 0:
        raise ValueError("pupil_distance_px must be positive")
    return float(product_width_px) * (ipd_mm / float(pupil_distance_px))


def size_verdict(
    measured_mm: float,
    real_mm: float,
    tolerance: float = DEFAULT_SIZE_TOLERANCE,
) -> dict:
    if real_mm <= 0:
        raise ValueError("real_mm must be positive")
    ratio = measured_mm / real_mm
    passed = abs(1 - ratio) <= tolerance
    return {
        "pass": passed,
        "measured_mm": round(measured_mm, 1),
        "real_mm": round(real_mm, 1),
        "ratio": round(ratio, 3),
        "tolerance": tolerance,
        "name": "product-size",
    }


def unit_vector(values) -> list[float]:
    norm = sum(float(value) * float(value) for value in values) ** 0.5
    if norm == 0:
        return [0.0 for _ in values]
    return [float(value) / norm for value in values]


def cosine_similarity(vec_a: list[float], vec_b: list[float]) -> float:
    if len(vec_a) != len(vec_b) or not vec_a:
        raise ValueError("vectors must be non-empty and the same length")
    dot = sum(a * b for a, b in zip(vec_a, vec_b))
    norm_a = sum(a * a for a in vec_a) ** 0.5
    norm_b = sum(b * b for b in vec_b) ** 0.5
    if norm_a == 0 or norm_b == 0:
        return 0.0
    return dot / (norm_a * norm_b)


def identity_verdict(
    score: float,
    threshold: float = DEFAULT_IDENTITY_THRESHOLD,
) -> dict:
    return {
        "pass": score >= threshold,
        "score": round(float(score), 3),
        "threshold": threshold,
        "name": "face-identity",
    }
