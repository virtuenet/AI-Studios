# AI Studios: Technical Documentation & Context

> **Last updated:** 2026-11-19
> **Version:** 2.0.0
> **Architecture:** Next.js 15 + React 19 + npm workspaces monorepo

This document is the authoritative knowledge base for AI Studios. It covers architecture, components, API integration, testing, and contribution guidelines.

## 1. Project Vision & Overview

**AI Studios** is a free, open-source AI media generation studio — an alternative to paid platforms like Midjourney, Runway, Kling, and Luma.

- **Core goal:** unrestricted access to 579 AI models across 17 studios through one self-hostable interface.
- **Current state:** v2.0.0 — Image, Video, Audio, Lip Sync, Cinema, Layers, Motion Control, Vibe Motion, Body Swap, Marketing, Workflow, Agent, Design Agent, AI Influencer, Apps, and MCP/CLI studios. Desktop app for macOS, Windows, and Linux.
- **Stack:** Next.js 15 (App Router), React 19, Tailwind CSS v3, npm workspaces, Electron 33.
- **Primary branch:** `main`

## 2. Architecture & File Structure

```
AI-Studios/
├── app/                              # Next.js App Router
│   ├── studio/[[...slug]]/page.js    # Studio route (renders StandaloneShell)
│   ├── zh|ja|ko|es|fr/               # Locale route trees (additive wrappers)
│   ├── agents/                       # Agent create/edit/chat pages
│   ├── workflow/[id]/                # Workflow builder pages
│   └── api/                          # Proxy routes (muapi, workflow, agents, uploads)
│
├── components/
│   ├── StandaloneShell.js            # Tab nav, API key, language switcher, error isolation
│   ├── ApiKeyModal.jsx               # API key modal (focus-trapped, validated)
│   └── ThemeToggle.jsx               # Light/dark toggle
│
├── packages/studio/                  # Shared React component library
│   └── src/
│       ├── index.js                  # Memoized exports of all 17 studios
│       ├── models.js                 # Barrel + lookup helpers (arrays split out)
│       ├── models/                   # Per-category catalogs (tree-shakeable)
│       │   ├── t2iModels.js  t2vModels.js  i2iModels.js  i2vModels.js
│       │   ├── v2vModels.js  lipsyncModels.js  recastModels.js
│       │   ├── motionControlModels.js  audioModels.js
│       │   └── sharedInputs.js
│       ├── muapi.js                  # API client (submit+poll, SSE streaming, retry)
│       ├── modelCapabilities.ts      # Media capability detection (TypeScript)
│       ├── imageSizing.ts            # Image size helpers (TypeScript)
│       ├── persistKey.ts             # Scoped localStorage keys (TypeScript)
│       ├── i18nUtils.ts              # Locale copy resolver (TypeScript)
│       ├── types/models.d.ts         # Core type definitions
│       ├── utils/
│       │   ├── generationLifecycle.js
│       │   └── errorReporter.js      # Buffered error reporting + endpoint forwarding
│       ├── components/               # 17 studio components + shared controls
│       │   ├── StudioErrorBoundary.jsx
│       │   ├── ImageStudio.jsx  VideoStudio.jsx  LayersStudio.jsx …
│       │   └── prompt/PromptComposer.jsx
│       └── messages/                 # i18n bundles (en, zh per studio namespace)
│
├── packages/Vibe-Workflow/           # Submodule — workflow builder
├── packages/Open-Poe-AI/             # Submodule — AI agents
├── packages/Open-AI-Design-Agent/    # Submodule — design agent
│
├── electron/                         # Electron desktop app
│   ├── main.js                       # Main process (loads dist/index.html)
│   ├── preload.js                    # Context bridge
│   └── lib/                          # sd.cpp + Wan2GP local inference
│
├── src/                              # Electron SPA (React, Vite)
│   ├── main.jsx                      # React entry
│   ├── StudioApp.jsx                 # Tab shell reusing packages/studio
│   └── style.css                     # Tailwind entry + resets
│
├── lib/                              # Shared host utilities
│   ├── locales.js                    # Locale registry (en, zh, ja, ko, es, fr)
│   ├── historyDom.mjs                # XSS-safe history DOM helpers
│   ├── localModels.js                # Frontend local-model catalog
│   └── uploadProxyTarget.js          # Upload proxy validation
│
├── messages/{en,zh,ja,ko,es,fr}/common.json   # Shell translations
│
├── public/
│   ├── manifest.json                 # PWA manifest
│   └── sw.js                         # Service worker (caching + offline queue)
│
├── tests/
│   ├── unit/                         # Vitest: models, muapi, retry, streaming, locales, errors
│   ├── components/                   # React Testing Library studio smoke tests
│   ├── accessibility/                # axe-core audits + structural checks
│   ├── e2e/                          # Playwright smoke tests
│   └── *.test.js                     # Electron Node.js tests
│
├── .github/workflows/
│   ├── ci.yml                        # Lint, unit, electron, e2e, build
│   └── release.yml                   # Desktop installers on tag
│
├── Dockerfile                        # Multi-stage, non-root, healthcheck
├── docker-compose.yml
├── playwright.config.js              # Dedicated E2E port (3100)
└── vitest.config.js
```

## 3. Key Components & Logic

### `StandaloneShell.js`
- 17 studios in 4 navigation categories (Images, Video, Audio, Agents & Automation)
- API key storage in `localStorage` (`muapi_key`) + cookie sync for server routes
- Balance polling every 30s
- Language switcher (en/zh/ja/ko/es/fr) using the locale registry
- Global drag-and-drop for media files
- Per-studio `StudioErrorBoundary` isolation
- Global generation notifications (success/error) with tab switching
- Skip-to-content link and ARIA landmarks

### Model catalog (split for tree-shaking)
- `models.js` is a small barrel + lookup helpers (249 lines)
- Arrays live in `models/*.js` — 9 categories, 579 models total:
  - t2i 83 · t2v 111 · i2i 88 · i2v 184 · v2v 75 · lipsync 15 · recast 3 · motion control 2 · audio 18
- `sharedInputs.js` holds the 35 shared input-schema fragments
- Regenerate with `node scripts/split-models.js` (only for the original monolithic layout)

### `muapi.js`
- Base URL: `/api` (browser proxy) or `https://api.muapi.ai` (SSR/Electron)
- Submit → poll lifecycle, 2s interval
- `fetchWithRetry()`: exponential backoff on 429/502/503 + network errors
- **Streaming (opt-in):** `streamGeneration()` consumes SSE, `setStreamingEnabled(true)` or `NEXT_PUBLIC_MUAPI_STREAMING=1`; automatically falls back to submit+poll when the endpoint is unavailable
- XHR-based `uploadFile()` with progress
- 401/403 dispatch `muapi:auth-required`

### Error isolation & monitoring
- `StudioErrorBoundary` catches render errors per studio; fallback UI with retry
- `utils/errorReporter.js`: 50-entry ring buffer (sessionStorage), optional POST to `NEXT_PUBLIC_ERROR_ENDPOINT` / `window.__AI_STUDIOS_ERROR_ENDPOINT__`
- Generation failures are reported through the same pipeline

### PWA
- `public/manifest.json`: icons, shortcuts (Image/Video/LipSync), screenshots
- `public/sw.js`: cache-first static assets, stale-while-revalidate balance, generation result cache, IndexedDB offline generation queue, 100-item history pruning
- Registered from the root layout; theme color served via `viewport` export

## 4. Localization

- **Locales:** en (default, unprefixed), zh (`/zh`), ja (`/ja`), ko (`/ko`), es (`/es`), fr (`/fr`)
- **Shell copy:** `messages/<locale>/common.json`; registry in `lib/locales.js`
- **Studio copy:** `packages/studio/src/messages/{en,zh}/<studio>.json`, resolved by `i18nUtils.resolveCopy`; non-zh locales currently fall back to English studio strings (shell fully translated)
- Adding a locale: add `messages/<code>/common.json`, register in `lib/locales.js`, add `app/<code>/page.js` + `app/<code>/studio/[[...slug]]/page.js`

## 5. API Integration

1. `POST /api/v1/{endpoint}` with `x-api-key`
2. `GET /api/v1/predictions/{request_id}/result` until `completed`/`succeeded`/`failed`
3. Output URL normalization from `outputs[0]`, `url`, or `output.url`

File uploads: `POST /api/v1/upload_file` (multipart) → hosted URL passed as `image_url`/`images_list`.

## 6. Desktop app (Electron)

- `electron/main.js` loads the Vite-built React SPA in `dist/`
- `src/StudioApp.jsx` renders the same `packages/studio` components as the web app (studio subpath imports keep host-only bundles out)
- Local inference: sd.cpp (bundled) + Wan2GP (local folder or remote MCP)
- Targets: macOS DMG (x64/arm64), Windows NSIS, Linux AppImage/DEB
- Release workflow builds/publishes installers on tag push

## 7. Security

- Middleware: `X-Content-Type-Options`, `X-Frame-Options: DENY`, `X-XSS-Protection`, `Referrer-Policy`, CSP
- API key only sent to same-origin/proxied requests; cookie used for server-side proxies
- File uploads validated by `lib/uploadProxyTarget.js` (host allowlist, SSRF guards, blocked types)
- History rendering uses safe DOM APIs (`lib/historyDom.mjs`) — no `innerHTML` with user data

## 8. Testing

| Suite | Command | Count |
|-------|---------|-------|
| Unit (Vitest) | `npm run test:unit` | 149 across 9 files |
| Components (RTL) | `npm run test:components` | included above |
| Accessibility (axe-core) | included above | 12 |
| Electron (Node) | `npm test` | 77 |
| E2E (Playwright) | `npx playwright test --project=chromium` | 11 (1 live-generation skipped without key) |

Coverage includes: model catalog integrity, muapi submit/poll + retry + SSE streaming, error reporter, locales, studio render smoke tests, axe-core audits, keyboard/focus checks, PWA endpoints, security headers.

## 9. Docker

- Multi-stage build: deps → builder → runner
- `npm ci` when lockfile present; `npm prune --omit=dev`
- Runs as non-root `nextjs` user; `HEALTHCHECK` on `/studio/image`
- `docker compose up --build` → http://localhost:3001

## 10. Known Gotchas

- Model IDs can intentionally appear in multiple categories (e.g. `flux-pulid`); the test suite tracks known exceptions.
- Some enum defaults are not present in their enum list (upstream data quality); tests warn instead of fail.
- `uploadFile` uses XHR (progress reporting), unlike other fetch-based calls.
- Vite/Electron SPA imports studios via package subpaths (`studio/ImageStudio`) to avoid pulling Workflow/Agent/DesignAgent dependencies.
- E2E uses port 3100 (`E2E_PORT`) so a stale dev server on :3000 is never reused.

## 11. Contributing

See `CONTRIBUTING.md`. Quick version:

```bash
git clone --recurse-submodules <repo>
cd AI-Studios
npm run setup
npm run dev                 # web
npm run electron:dev        # desktop
npm run test:vitest         # unit + a11y + components
npm test                    # electron
```

## 12. Roadmap

- Full TypeScript migration (5 core modules converted; incremental)
- Studio-level translations for ja/ko/es/fr (shell complete)
- Server-side SSE streaming once the Muapi API exposes stream endpoints (client ready)
