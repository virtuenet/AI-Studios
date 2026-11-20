import pytest
from geometry import (
    PUPIL_DISTANCE_MM,
    cosine_similarity,
    fallback_pupil_distance_px,
    identity_verdict,
    product_width_mm,
    size_verdict,
    unit_vector,
)


def test_eye_ruler_and_product_size():
    # 63 px between the eyes == the adult average; a 48 px product is 48 mm.
    assert product_width_mm(PUPIL_DISTANCE_MM, 48) == pytest.approx(48.0)
    assert product_width_mm(126, 48) == pytest.approx(24.0)  # twice as far away
    assert fallback_pupil_distance_px(140) == pytest.approx(PUPIL_DISTANCE_MM)
    with pytest.raises(ValueError):
        product_width_mm(0, 10)


def test_size_verdict_tolerance_and_failures():
    assert size_verdict(48, 48)["pass"] is True
    assert size_verdict(52, 48)["pass"] is True   # 1.083x, within 20%
    assert size_verdict(58, 48)["pass"] is False  # 1.208x
    with pytest.raises(ValueError):
        size_verdict(48, 0)


def test_unit_vector_and_cosine_identity():
    assert unit_vector([3, 4]) == pytest.approx([0.6, 0.8])
    assert unit_vector([0, 0]) == [0.0, 0.0]
    assert cosine_similarity([1, 0], [1, 0]) == pytest.approx(1.0)
    assert cosine_similarity([1, 0], [0, 1]) == pytest.approx(0.0)
    assert cosine_similarity([1, 0], [0, 0]) == 0.0
    assert identity_verdict(0.9)["pass"] is True
    assert identity_verdict(0.4)["pass"] is False
    assert identity_verdict(0.52)["pass"] is True  # threshold is inclusive
    with pytest.raises(ValueError):
        cosine_similarity([1], [1, 2])
