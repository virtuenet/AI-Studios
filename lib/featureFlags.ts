/**
 * Feature flags and remote configuration.
 *
 * Every flag defaults to a compile-time value that the self-hosted deployment
 * and CI use without configuration. In a managed SaaS deployment the same
 * values can be overridden at runtime via environment variables, and a future
 * remote-config provider can replace the env reads with a fetch to a config
 * service without changing any call site.
 */

/** Feature flag name → default value. Add new flags here. */
const FLAGS: Record<string, boolean> = {
  /** Enable the server-side ML QC panel in the review dialog. */
  ML_QC_ENABLED: false,

  /** Enable managed-credits billing (SaaS) vs BYOK mode. */
  MANAGED_BILLING: false,

  /** Enable team workspaces and shared projects. */
  WORKSPACES_ENABLED: false,

  /** Enable the public API (api key management, docs). */
  PUBLIC_API_ENABLED: false,

  /** Enable SSO / SAML authentication. */
  SSO_ENABLED: false,

  /** Enable the App Marketplace. */
  APP_MARKETPLACE_ENABLED: false,
} as const;

export type FeatureFlagName = keyof typeof FLAGS;

/**
 * Read a feature flag. Checks in order:
 * 1. `NEXT_PUBLIC_FEATURE_<NAME>` environment variable (build-time).
 * 2. Default value from the FLAGS table.
 *
 * Call sites that need runtime overrides can pass a custom reader (e.g. a
 * React Context or a fetch to a remote-config endpoint).
 */
export function isFeatureEnabled(
  name: FeatureFlagName,
  reader?: (name: string) => boolean | undefined,
): boolean {
  if (reader) {
    const override = reader(name);
    if (override !== undefined) return override;
  }
  // Build-time override via NEXT_PUBLIC_FEATURE_* env vars.
  if (typeof process !== 'undefined') {
    const envValue = process.env[`NEXT_PUBLIC_FEATURE_${name}`];
    if (envValue !== undefined) return envValue !== 'false' && envValue !== '0';
  }
  return FLAGS[name] ?? false;
}

/** Return all feature flags and their resolved values. */
export function getAllFeatures(
  reader?: (name: string) => boolean | undefined,
): Record<string, boolean> {
  return Object.fromEntries(
    Object.keys(FLAGS).map((name) => [name, isFeatureEnabled(name as FeatureFlagName, reader)]),
  );
}
