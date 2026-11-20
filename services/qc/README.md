# AI Studios QC service

FastAPI service behind `POST /api/qc` in the Next app. It runs two real,
local checks:

| Check | Model | Method |
|-------|-------|--------|
| `product-size` | YuNet | face eye-landmark distance as the mm ruler + product contour |
| `face-identity` | YuNet + SFace | aligned face embeddings, cosine similarity |

Models come from the OpenCV Zoo, are pinned by SHA-256, and are baked into the
Docker image. No model weights reach the browser.

## Run

```bash
cd services/qc
python3 -m venv .venv && . .venv/bin/activate
pip install -r requirements-dev.lock
uvicorn main:app --host 0.0.0.0 --port 8001
```

Then set `ML_QC_URL=http://127.0.0.1:8001` on the app. Optional:

| Variable | Default | Purpose |
|----------|---------|---------|
| `QC_API_TOKEN` | unset | Require `Authorization: Bearer <token>` on `/qc/*` |
| `QC_IDENTITY_THRESHOLD` | `0.52` | SFace cosine threshold |
| `QC_SIZE_TOLERANCE` | `0.2` | Allowed product-size ratio error |
| `QC_MODELS_DIR` | `~/.cache/ai-studios-qc` | Model cache |
| `QC_ALLOW_PRIVATE_URLS` | off | Allow internal image hosts (SSRF guard off) |

## Tests

```bash
python -m pytest tests -q                    # offline geometry/API/security
QC_MODEL_TESTS=1 python -m pytest tests -q   # + real YuNet/SFace integration
```

## Calibrate face identity

```bash
python calibrate.py --same path/to/same-person --other path/to/other-people
```

The script prints the separating threshold and the `QC_IDENTITY_THRESHOLD` value
to set. It exits 1 when the samples overlap and cannot be separated.

## Docker

```bash
docker build -t ai-studios-qc services/qc
docker run --rm -p 8001:8001 -e QC_API_TOKEN=change-me ai-studios-qc
```

The image installs `requirements.lock`, runs as UID 10001, and bakes the two
models into `/models`.
