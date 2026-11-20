# Implementation Status — 12 Recommendations

> Date: 2026-11-21 | Project: AI Studios
> All 12 recommendations implemented; verified locally and in CI.

| # | Recommendation | Status | Evidence |
|---|----------------|--------|----------|
| 1 | Session/cookie hardening | ✅ | `lib/session.ts` (AES-256-GCM, HttpOnly, SameSite=Strict), `/api/session`, agent pages use `readApiKeyFromCookieStore`; JS cookie writes removed; 6 session + 6 route tests |
| 2 | Route-level error/loading/404 | ✅ | `app/error.js`, `app/global-error.js`, `app/not-found.js`, `app/loading.js` + structural tests |
| 3 | Server route tests | ✅ | `tests/routes/`: middleware (headers, locale, rewrites, request id), session, health, upload-binary (401/SSRF/file-type/204), agent/workflow proxies, `/api/qc` (health/validation/proxy/502) — 30 tests |
| 4 | Shared generation hooks | ✅ | `useGeneration` (abort/cancel) used by ImageStudio (Cancel button), `usePersistentObject` used by AudioStudio; 6 hook tests |
| 5 | TS strictness ladder + compiler rules | ✅ | `strictNullChecks` + `noImplicitAny` clean; **React Compiler + exhaustive-deps rules are errors**; **zero suppressions** (`eslint-suppressions.json` is `{}`); incremental TS migration (studio film-crew/hooks/utils + typed model aggregator, server `lib/`, middleware, health/session/QC routes); `strict: true` + `exactOptionalPropertyTypes` + `noUncheckedIndexedAccess`; catalog data stays JS behind `ModelDefinition` contracts; `tsc --noEmit` + CI `--max-warnings 0` |
| 6 | Model catalog sync/drift | ✅ | `scripts/sync-models.js`, `docs/models-snapshot.json` (624 unique models), CI `check:models-sync`, `--fetch` against OpenAPI (899 upstream endpoints) |
| 7 | Mocked generation E2E | ✅ | generation (generate/cancel/locale) **and upload** (`setInputFiles` + mocked `upload_file`, picker confirm, i2i generate); zero API key, service workers blocked |
| 8 | Visual + interaction tests | ✅ | platform-agnostic Playwright baselines (dialog/sidebar); ApiKeyModal interaction + a11y label fix; ServiceWorkerUpdater tests |
| 9 | Perf/UX polish | ✅ | Web Vitals reporting (`components/WebVitals.jsx`), preconnect/dns-prefetch, 88 `<img>` tags lazy/async, `content-visibility` history cards, cancel + offline-queue banners/clear |
| 10 | Health & observability | ✅ | `/api/health`, request IDs, structured JSON proxy logs, uptime workflow (`HEALTHCHECK_URL`) |
| 11 | Release & supply chain | ✅ | release-please config/workflow, CodeQL, gitleaks, SBOM upload, Node 20/22 matrix, Playwright + Next caches, macOS entitlements/signing docs, auto-update |
| 12 | Self-hosting documentation | ✅ | `docs/self-hosting.md` (Workflows/Agents backend caveat, optional QC service), README links, env reference |
| + | Optional film-crew features | ✅ | Cast library, scene/set builder, upload-time audio QC, and a **real server-side ML QC service** (`services/qc`: YuNet + SFace, product size by eye distance, face identity by embeddings); Next proxy `/api/qc`; Python tests + opt-in real-model test in CI |

## Verification

```
Vitest:      325 passed (33 files)
QC service:  17 pytest tests (geometry/API/model integration/SSRF/auth) + real YuNet+SFace integration test
Electron:     77 passed
E2E:          18 passed, 1 skipped (live key, mocked QC flow)
Typecheck:    tsc --noEmit clean (strict + exactOptionalPropertyTypes + noUncheckedIndexedAccess)
Lint:         0 problems (zero suppressions, --max-warnings 0)
Model sync:   catalog matches snapshot (624 unique models)
Builds:       Next production build; studio dist 98 files; Vite/Electron build; QC Docker image
```

## P1–P6 hardening (2026-11-21)

| Area | Evidence |
|------|----------|
| TypeScript | film-crew modules/UI, hooks, utils, `lib/` (session, upload proxy, logger, locales, local models), middleware, health/session/QC routes, typed `models.ts` aggregator; 36 TS files |
| Model contract | `types/models.d.ts` exports `ModelDefinition`/`ModelInput`; catalog data stays JS; `validate:models` + snapshot sync pass |
| QC security | optional `QC_API_TOKEN` bearer auth (tested 401/200), SSRF guard, non-root Docker UID 10001, pinned `python:3.12.13-slim` digest |
| QC reproducibility | `requirements.lock` / `requirements-dev.lock`; verified on Python 3.12; CI builds the image and checks baked models + non-root user |
| QC calibration | `services/qc/calibrate.py` + `separating_threshold` tests |
| QC UI tests | mocked Playwright product-size PASS flow; axe audits for `CrewPanel` and `ReviewChecklistModal`; coverage thresholds 75/64/78/79 |
| Dependency housekeeping | release v2.1.0; all original Dependabot PRs handled; `main` has 0 open PRs; TS 7 / Electron 45 / Electron Builder 26 / Tailwind 4 / MSW 3 / Babel 8 majors deferred with rationale |

## External/manual items

- `SESSION_SECRET` must be set in production (fallback is process-local).
- Desktop signing/notarization requires certificate secrets (documented).
- Manual screen-reader pass and professional translation review remain tracked.
- Workflows/Agents studios require Muapi-hosted backends unless the submodule
  servers are deployed and proxy routes are repointed (documented).
