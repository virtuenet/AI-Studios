/**
 * Client for the server-side ML QC service (services/qc).
 *
 * The checks themselves (OpenCV face detection, product measurement and
 * face-identity comparison) run on the server. The browser only talks to the
 * Next.js proxy at /api/qc, so no model weights are ever shipped to clients.
 * An explicit endpoint override is still supported for self-hosted setups:
 * NEXT_PUBLIC_FILM_CREW_ML_ENDPOINT or window.__FILM_CREW_ML_ENDPOINT__.
 */
export const DEFAULT_ML_ENDPOINT = '/api/qc';

export type MlCheckName = 'product-size' | 'face-identity';

export interface MlCheck {
  id?: string;
  name?: string;
  pass?: boolean;
  detail?: string;
  measured_mm?: number;
  real_mm?: number;
  ratio?: number;
  score?: number;
  threshold?: number;
  [key: string]: unknown;
}

export interface MlAvailability {
  enabled: boolean;
  error: string | null;
}

export interface MlResult {
  enabled: boolean;
  ok: boolean;
  checks: MlCheck[];
  error?: string;
  raw?: unknown;
}

export interface MlCheckInput {
  check?: MlCheckName;
  imageUrl?: string | undefined;
  referenceUrl?: string | null;
  productSizeMm?: number | null;
  prompt?: string;
}

interface MlClientOptions {
  endpoint?: string | null;
  fetchImpl?: typeof fetch;
  signal?: AbortSignal;
}

export function getMlEndpoint(): string {
  if (typeof window !== 'undefined' && typeof window.__FILM_CREW_ML_ENDPOINT__ === 'string') {
    return window.__FILM_CREW_ML_ENDPOINT__;
  }
  if (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_FILM_CREW_ML_ENDPOINT) {
    return process.env.NEXT_PUBLIC_FILM_CREW_ML_ENDPOINT;
  }
  return DEFAULT_ML_ENDPOINT;
}

/**
 * Ask the proxy whether a QC service is configured. Never throws: an
 * unreachable service simply hides the ML controls.
 */
export async function checkMlAvailability({
  endpoint = getMlEndpoint(),
  fetchImpl = fetch,
  signal,
}: MlClientOptions = {}): Promise<MlAvailability> {
  if (!endpoint) return { enabled: false, error: null };
  try {
    const response = await fetchImpl(endpoint, { signal: signal ?? null, headers: { Accept: 'application/json' } });
    if (!response.ok) return { enabled: false, error: `HTTP ${response.status}` };
    const data = (await response.json()) as { enabled?: unknown };
    return { enabled: Boolean(data?.enabled), error: null };
  } catch (error) {
    return {
      enabled: false,
      error: error instanceof Error ? error.message : 'ML QC unavailable',
    };
  }
}

export async function runMlChecks(
  {
    check = 'product-size',
    imageUrl,
    referenceUrl = null,
    productSizeMm = null,
    prompt = '',
  }: MlCheckInput = {},
  { endpoint = getMlEndpoint(), fetchImpl = fetch, signal }: MlClientOptions = {}
): Promise<MlResult> {
  if (!endpoint) return { enabled: false, ok: false, checks: [] };
  try {
    const response = await fetchImpl(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ check, imageUrl, referenceUrl, productSizeMm, prompt }),
      signal: signal ?? null,
    });
    if (!response.ok) {
      let detail = `HTTP ${response.status}`;
      try {
        const body = (await response.json()) as { error?: unknown };
        if (typeof body?.error === 'string') detail = body.error;
      } catch {
        // Keep the status-based message.
      }
      return { enabled: true, ok: false, error: detail, checks: [] };
    }
    const data = (await response.json()) as { checks?: unknown };
    const checks = Array.isArray(data?.checks)
      ? (data.checks as MlCheck[])
      : data
        ? [data as MlCheck]
        : [];
    return { enabled: true, ok: true, checks, raw: data };
  } catch (error) {
    return {
      enabled: true,
      ok: false,
      error: error instanceof Error ? error.message : 'ML QC unavailable',
      checks: [],
    };
  }
}
