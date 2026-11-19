# AI Studios: Technical Documentation & Context

> **Last updated:** 2026-11-19
> **Version:** 2.0.0
> **Architecture:** Next.js 15 + React 19 + npm workspaces monorepo

This document is the authoritative knowledge base for AI Studios. It covers architecture, components, API integration, testing, and contribution guidelines.

## 1. Project Vision & Overview

**AI Studios** is a free, open-source AI media generation studio — an alternative to paid platforms like Midjourney, Runway, Kling, and Luma.

- **Core goal:** unrestricted access to 579 AI models across 17 studios through one self-hostable interface.
- **Current state:** v2.0.0 — Image, Video, Audio, Lip Sync, Cinema, Layers, Motion Control, Vibe Motion, Body Swap, Marketing, Workflow, Agent, Design Agent, AI Influencer, Apps, and MCP/CLI studios. Desktop app for macOS, Windows, and Linux.
- **Stack:** Next.js 16 (App Router, Turbopack), React 19.2, Tailwind CSS v3, npm workspaces, Electron 33.
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
│       ├── modelParameters.ts        # Supplemental param normalization (TypeScript)
│       ├── imageInputContracts.ts    # Per-model image input contracts (TypeScript)
│       ├── videoToolCapabilities.ts  # Video tool options + payloads (TypeScript)
│       ├── types/models.d.ts         # Core type definitions
│       ├── utils/
│       │   ├── generationLifecycle.js
│       │   └── errorReporter.js      # Buffered error reporting + endpoint forwarding
│       ├── components/               # 17 studio components + shared controls
│       │   ├── StudioErrorBoundary.jsx
│       │   ├── ImageStudio.jsx  VideoStudio.jsx  LayersStudio.jsx …
│       │   └── prompt/PromptComposer.jsx
│       └── messages/                 # i18n bundles (en, zh, ja, ko, es, fr)
│           └── studioCopy.js         # Namespace registry with per-key fallback
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
│   ├── ci.yml                        # Lint, typecheck, coverage, electron, e2e, build, budgets
│   ├── release.yml                   # Desktop installers on tag
│   ├── e2e-nightly.yml               # Chromium/Firefox/WebKit nightly
│   └── update-submodules.yml         # Weekly submodule sync PR
├── eslint.config.mjs                 # Flat ESLint config (next/core-web-vitals)
├── tsconfig.json                     # TypeScript check (tsc --noEmit)
├── SECURITY.md / CODEOWNERS / .github templates
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
- **Studio copy:** `packages/studio/src/messages/{en,zh,ja,ko,es,fr}/<studio>.json` (15 namespaces × 6 locales), resolved by `messages/studioCopy.js` with per-key fallback. Generated by `scripts/translate-studio-messages.js`; placeholders are validated by tests. Manual translation review is recommended before marketing translations as final.
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

## 7. Accessibility

Automated: axe-core (WCAG 2.0/2.1 A/AA tags) on key components, color-contrast
rule with fixes, keyboard/focus checks, skip link, `h1` + `main` landmarks.
Manual screen-reader verification has a tracked checklist in
`docs/accessibility-manual-checklist.md` (VoiceOver + NVDA) — the remaining
external qualification for accessibility.

## 8. Testing

| Suite | Command | Count |
|-------|---------|-------|
| Unit (Vitest) | `npm run test:unit` | 223 across 16 files (coverage-gated) |
| Components (RTL) | `npm run test:components` | included above |
| Accessibility (axe-core) | included above | 15 |
| Electron (Node) | `npm test` | 77 |
| E2E (Playwright) | `npm run test:e2e` | 11 (production server; 1 live-generation skipped without key) |
| Typecheck | `npm run typecheck` | `tsc --noEmit` |
| Lint | `npm run lint` | ESLint flat config, 0 errors enforced |
| Model catalog | `npm run validate:models` | 624 models |
| Bundle budget | `npm run check:bundle` | 6 MB JS ceiling |

Coverage includes: model catalog integrity, muapi submit/poll + retry + SSE streaming, error reporter, locales, studio render smoke tests, axe-core audits, keyboard/focus checks, PWA endpoints, security headers.

## 8b. Security Operations

- Upload proxy validation is covered by `tests/unit/uploadProxyTarget.test.js`
  (HTTPS-only, loopback/private/link-local blocking, S3 host patterns, blocked
  file types, API-key extraction).
- Production dependencies are audited; `next@16.4.6` + patched axios/form-data/
  follow-redirects/sharp. Only third-party submodule-nested moderate advisories
  remain (owner-managed).
- Error reporting dedupes identical crashes within 5s and rate-limits to 10/min.
- Session-only API keys supported alongside localStorage persistence.

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

- Continue the TypeScript migration (9 modules converted; tsc enforces the set)
- Professional review of machine-generated ja/ko/es/fr studio translations
  (automated completeness/placeholder gates are in place)
- Server-side SSE streaming once the Muapi API exposes stream endpoints
  (client, Retry-After handling, and AbortController support are ready)
- Manual screen-reader pass (checklist in docs/accessibility-manual-checklist.md)
- Code signing/notarization for desktop installers (auto-update is wired)
