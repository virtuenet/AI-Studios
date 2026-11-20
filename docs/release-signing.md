# Desktop Release Signing

Release workflow: `.github/workflows/release.yml` (trigger on `v*` tags or
manual dispatch). Installers are uploaded to a draft GitHub Release; SBOM
(`sbom.cdx.json`) is attached.

## Current state

Builds are **unsigned by default**. macOS Gatekeeper and Windows SmartScreen
will warn users until signing credentials are configured. `electron-updater`
is wired for packaged builds using the GitHub publish config in `package.json`.

## Enabling macOS signing + notarization

Add these repository secrets:

| Secret | Value |
|--------|-------|
| `CSC_LINK` | base64 `.p12` Developer ID Application certificate |
| `CSC_KEY_PASSWORD` | password for the `.p12` |
| `APPLE_ID` | Apple ID email |
| `APPLE_APP_SPECIFIC_PASSWORD` | app-specific password |
| `APPLE_TEAM_ID` | Apple Developer Team ID |

The workflow already passes them to electron-builder and enables identity
auto-discovery when `CSC_LINK` is present. `build/entitlements.mac.plist`
contains the JIT/network entitlements required by Electron.

## Enabling Windows signing

Provide `CSC_LINK`/`CSC_KEY_PASSWORD` for a Windows code-signing certificate
(electron-builder uses the same variables).

## Verifying a release

1. Tag `vX.Y.Z` (release-please opens version/changelog PRs first).
2. Wait for the release workflow; download the draft artifacts.
3. Verify `codesign --verify --deep --strict` (macOS) and SmartScreen
   reputation after a few installs (Windows).
4. Publish the draft release; updater clients pick it up automatically.
