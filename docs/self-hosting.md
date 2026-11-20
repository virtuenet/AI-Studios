# Self-Hosting Guide

## What runs in `docker compose`

`docker-compose.yml` starts **only the Next.js app** (`ai-studios`) on
`http://localhost:3001`. It serves:

- All studios (Image, Video, Audio, Cinema, Layers, Lip Sync, …) — these call
  Muapi cloud APIs with the user's API key.
- Workflows / Agents / Design Agent **UI**, which proxy to Muapi-hosted
  backends at `https://api.muapi.ai`.
- `/api/health`, `/api/session`, upload proxying, and PWA assets.

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
