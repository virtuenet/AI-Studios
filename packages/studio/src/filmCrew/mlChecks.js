/**
 * Pluggable server-side ML checks (product size, face identity), adapted from
 * ai-film-crew. The heavy models (DINO/SAM/SFace) do not belong in the browser,
 * so the app calls an optional external QC service when configured via
 * NEXT_PUBLIC_FILM_CREW_ML_ENDPOINT (or window.__FILM_CREW_ML_ENDPOINT__).
 */
export function getMlEndpoint() {
  if (typeof window !== 'undefined' && typeof window.__FILM_CREW_ML_ENDPOINT__ === 'string') {
    return window.__FILM_CREW_ML_ENDPOINT__;
  }
  if (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_FILM_CREW_ML_ENDPOINT) {
    return process.env.NEXT_PUBLIC_FILM_CREW_ML_ENDPOINT;
  }
  return null;
}

export async function runMlChecks(
  { imageUrl, prompt = '', productSizeMm = null },
  { endpoint = getMlEndpoint(), fetchImpl = fetch, signal } = {}
) {
  if (!endpoint) return { enabled: false, ok: false, checks: [] };
  try {
    const response = await fetchImpl(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageUrl, prompt, productSizeMm }),
      signal,
    });
    if (!response.ok) {
      return { enabled: true, ok: false, error: `HTTP ${response.status}`, checks: [] };
    }
    const data = await response.json();
    return { enabled: true, ok: true, checks: data?.checks || [], raw: data };
  } catch (error) {
    return { enabled: true, ok: false, error: error?.message || 'ML QC unavailable', checks: [] };
  }
}
