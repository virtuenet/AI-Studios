"""Calibrate the SFace identity threshold on folders of judged faces.

Usage:
    python calibrate.py --same path/to/same --other path/to/other
    python calibrate.py --same "cast/ana/*.png" --other "cast/other/*.png"

Every image contributes the largest detected face. Same-person scores are all
pairs within the `--same` inputs; different-person scores are each same image
against each `--other` image. The threshold is the midpoint between the lowest
same score and the highest different score. If the ranges overlap, the model
cannot separate those samples and the script exits 1.

The result is a starting point, not a guarantee: review borderline pairs.
"""
from __future__ import annotations

import argparse
import glob
import sys
from pathlib import Path

import cv2
import numpy as np

from geometry import DEFAULT_IDENTITY_THRESHOLD, separating_threshold
from models import FaceModels, get_models

IMAGE_SUFFIXES = {".png", ".jpg", ".jpeg", ".webp"}


def expand(pattern: str) -> list[Path]:
    path = Path(pattern)
    if path.is_dir():
        return sorted(item for item in path.iterdir() if item.suffix.lower() in IMAGE_SUFFIXES)
    return sorted(Path(item) for item in glob.glob(pattern))


def embedding(model: FaceModels, path: Path) -> np.ndarray | None:
    image = cv2.imread(str(path))
    if image is None:
        print(f"warning: could not read {path}", file=sys.stderr)
        return None
    faces = model.detect(image)
    if not faces:
        print(f"warning: no face in {path}", file=sys.stderr)
        return None
    face = max(faces, key=lambda item: item.area)
    return model.embedding(image, face)


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Calibrate the SFace identity threshold.")
    parser.add_argument("--same", action="append", default=[], help="Folder/glob of the same person")
    parser.add_argument("--other", action="append", default=[], help="Folder/glob of other people")
    args = parser.parse_args(argv)

    if not args.same or not args.other:
        parser.error("--same and --other are required")

    model = get_models()
    same_vectors = [vector for pattern in args.same for path in expand(pattern) if (vector := embedding(model, path)) is not None]
    other_vectors = [vector for pattern in args.other for path in expand(pattern) if (vector := embedding(model, path)) is not None]

    if len(same_vectors) < 2 or not other_vectors:
        print("need at least two same-person images and one other-person image", file=sys.stderr)
        return 1

    same_scores = [
        float(np.dot(same_vectors[i], same_vectors[j]))
        for i in range(len(same_vectors))
        for j in range(i + 1, len(same_vectors))
    ]
    other_scores = [
        float(np.dot(same_vector, other_vector))
        for same_vector in same_vectors
        for other_vector in other_vectors
    ]

    print(f"same pairs: {len(same_scores)}  range {min(same_scores):.3f}..{max(same_scores):.3f}")
    print(f"other pairs: {len(other_scores)}  range {min(other_scores):.3f}..{max(other_scores):.3f}")

    threshold, gap = separating_threshold(same_scores, other_scores)
    if threshold is None:
        print(
            f"cannot separate these samples (gap {gap if gap is None else round(gap, 3)}); "
            f"keeping default {DEFAULT_IDENTITY_THRESHOLD}",
            file=sys.stderr,
        )
        return 1

    print(f"threshold: {threshold:.3f} (gap {gap:.3f})")
    print(f"set QC_IDENTITY_THRESHOLD={threshold:.3f}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
