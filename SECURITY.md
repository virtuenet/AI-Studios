# Security Policy

## Reporting a vulnerability

Please **do not** open a public issue for security problems. Report them privately
via GitHub Security Advisories ("Report a vulnerability" on the Security tab) or
email the maintainers listed in `CODEOWNERS`.

Include: affected version/commit, reproduction steps, impact, and any suggested
fix. We aim to acknowledge reports within 72 hours and ship a fix or mitigation
within 30 days for critical issues.

## Supported versions

| Version | Supported |
|---------|-----------|
| 2.x     | ✅ |
| < 2.0   | ❌ |

## Security model (self-hosted)

- API keys are stored in the browser (localStorage by default; session-only
  storage is available in the API-key dialog). They are only sent to Muapi and
  same-origin proxy routes.
- Server-side upload proxying validates destination hosts (HTTPS-only, blocks
  loopback/private/link-local IPs and IP literals), enforces S3 host patterns,
  and blocks executable/script file types (`lib/uploadProxyTarget.js`).
- CSP and hardening headers are set in `middleware.js`. Avoid weakening them.
- Electron enables `contextIsolation`, disables `nodeIntegration`, and loads
  only local files.

## Dependency hygiene

`npm audit --omit=dev` is expected to be clean for first-party dependencies.
Vulnerabilities nested inside third-party git submodules are the submodule
owners' responsibility until synced.
