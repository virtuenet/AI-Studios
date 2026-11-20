# Self-Hosting Guide

## What runs in `docker compose`

`docker-compose.yml` starts the Next.js app (`ai-studios`) on
`http://localhost:3001`. With `--profile qc` it also starts the optional ML QC
service (`qc`, FastAPI + OpenCV) on the compose network. The app serves:

- All studios (Image, Video, Audio, Cinema, Layers, Lip Sync, …) — these call
  Muapi cloud APIs with the user's API key.
- Workflows / Agents / Design Agent **UI**, which proxy to Muapi-hosted
  backends at `https://api.muapi.ai`.
- `/api/health`, `/api/session`, `/api/qc`, upload proxying, and PWA assets.

## ML QC service (optional)

The film-crew product-size and face-identity checks run in `services/qc`, a
FastAPI service using YuNet face detection and SFace embeddings. Models are
SHA-verified and baked into the image at build time; no model weights reach the
browser.

```bash
# with the bundled compose profile
ML_QC_URL=http://qc:8001 docker compose --profile qc up -d --build

# or standalone
cd services/qc
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8001
```

Set `ML_QC_URL` on the app to enable the ML panel (`GET /api/qc` reports
`enabled: true`). Leave it empty to hide the checks. See
`docs/film-crew-qa.md` for thresholds, limits and tests.

## Workflows, Agents, and Design Agent backends

Those studios have Python servers inside their git submodules:

| Studio | Backend source | Standalone docs |
|--------|----------------|-----------------|
| Workflows | `packages/Vibe-Workflow/server` | `packages/Vibe-Workflow/README.md` |
| Agents | `packages/Open-Poe-AI/server` | `packages/Open-Poe-AI/README.md` |
| Design Agent | `packages/Open-AI-Design-Agent/server` | `packages/Open-AI-Design-Agent/README.md` |

The app's proxy routes currently target `api.muapi.ai`. To run fully
self-hosted, deploy those servers (each has a Dockerfile) and point the proxy
routes at them (currently `app/api/{workflow,agents}/**/route.js`). This is not
wired by default — without a Muapi account those three studios will not
function in a self-hosted deployment.

## Required environment

| Variable | Required | Purpose |
|----------|----------|---------|
| `SESSION_SECRET` | Production | 32+ chars; encrypts the HttpOnly session cookie used by server-rendered agent pages. Without it, a process-local secret is used and sessions reset on restart. |
| `UPLOAD_PROXY_ALLOWED_HOSTS` | Optional | Comma-separated extra hosts allowed for server-side upload proxying (S3 hosts are built in). |
| `NEXT_PUBLIC_ERROR_ENDPOINT` | Optional | Receives buffered client error reports. |
| `NEXT_PUBLIC_WEB_VITALS_ENDPOINT` | Optional | Receives Core Web Vitals beacons. |
| `NEXT_PUBLIC_MUAPI_STREAMING` | Optional | Set to `1` once the Muapi API exposes SSE endpoints. |
| `ML_QC_URL` | Optional | Base URL of the QC service (e.g. `http://qc:8001`). Enables product-size and face-identity checks; empty hides them. |
| `QC_IDENTITY_THRESHOLD` | Optional | SFace cosine threshold (default `0.52`). Calibrate on judged stills. |
| `QC_SIZE_TOLERANCE` | Optional | Allowed product-size ratio error (default `0.2` = ±20%). |
| `QC_MODELS_DIR` | Optional | Where YuNet/SFace models are cached (default `~/.cache/ai-studios-qc`). |
| `QC_ALLOW_PRIVATE_URLS` | Optional | Set to `1` to let the QC fetcher read images from private/internal hosts. Off by default (SSRF protection). |
| `APPLE_ID` / `APPLE_APP_SPECIFIC_PASSWORD` / `APPLE_TEAM_ID` / `CSC_LINK` / `CSC_KEY_PASSWORD` | Optional | Desktop signing/notarization (see `docs/release-signing.md`). |

## Health & observability

- `GET /api/health` returns `{status, version, commit, upstream, timestamp}` and
  `503` when the upstream is unreachable. Use it for uptime checks
  (the `Uptime check` workflow reads the `HEALTHCHECK_URL` repo variable).
- Proxy routes emit JSON-line logs with a propagated `x-request-id`.
- Client errors are buffered/deduped and can be forwarded to your collector.

## Security notes

- API keys are stored in the browser for direct proxy calls; server pages use
  an encrypted, `HttpOnly`, `SameSite=Strict` cookie (`SESSION_SECRET`).
- Upload proxying blocks private/loopback targets and executable file types.
- See `SECURITY.md` for the full model.
