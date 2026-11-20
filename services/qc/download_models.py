"""Pre-download and SHA-verify the YuNet and SFace models.

Used by the Docker build so containers start without a runtime download. The
service itself also downloads lazily when a check is first used.
"""
from models import MODEL_FILES, model_path

for model_name in MODEL_FILES:
    print(model_path(model_name))
