/**
 * Lightweight error reporting utility.
 *
 * Captures client-side crashes and failed generations, keeps an in-memory +
 * sessionStorage ring buffer, and forwards to a configurable HTTP endpoint.
 *
 * Configuration (checked in this order):
 *   1. `window.__AI_STUDIOS_ERROR_ENDPOINT__` (runtime override)
 *   2. `NEXT_PUBLIC_ERROR_ENDPOINT` baked in at build time
 *   3. Disabled — console only
 *
 * The payload format is intentionally vendor-neutral so it can be pointed at
 * Sentry's envelope proxy, a custom collector, or a serverless function.
 */

const MAX_BUFFER = 50;
const STORAGE_KEY = 'ai_studios_error_buffer_v1';

/** @type {Array<Object>} */
let buffer = [];

function getEndpoint() {
  if (typeof window === 'undefined') return null;
  if (typeof window.__AI_STUDIOS_ERROR_ENDPOINT__ === 'string') {
    return window.__AI_STUDIOS_ERROR_ENDPOINT__;
  }
  // Inlined by Next.js at build time; undefined when not configured.
  if (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_ERROR_ENDPOINT) {
    return process.env.NEXT_PUBLIC_ERROR_ENDPOINT;
  }
  return null;
}

function hydrateBuffer() {
  if (typeof window === 'undefined' || buffer.length > 0) return;
  try {
    const stored = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '[]');
    if (Array.isArray(stored)) buffer = stored.slice(-MAX_BUFFER);
  } catch {
    // Corrupt storage — start fresh.
  }
}

function persistBuffer() {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(buffer.slice(-MAX_BUFFER)));
  } catch {
    // Storage may be unavailable (private mode / quota) — buffering is best-effort.
  }
}

/**
 * Report an error to the buffer and, when configured, to the remote endpoint.
 *
 * @param {Object} report
 * @param {string} report.source   Where the error originated (e.g. "studio", "api", "boundary")
 * @param {Error|string} report.error
 * @param {Object} [report.context] Extra structured data (studio id, model id, request id…)
 * @returns {Promise<boolean>} true when the report was accepted by the endpoint
 */
export async function reportError({ source = 'unknown', error, context = {} }) {
  const message = error instanceof Error ? error.message : String(error);
  const stack = error instanceof Error ? error.stack : undefined;

  const entry = {
    id: `err-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    timestamp: new Date().toISOString(),
    source,
    message,
    stack,
    context,
    url: typeof window !== 'undefined' ? window.location?.href : undefined,
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
  };

  hydrateBuffer();
  buffer = [...buffer, entry].slice(-MAX_BUFFER);
  persistBuffer();

  if (typeof console !== 'undefined') {
    console.error(`[AI Studios] ${source}:`, message, context);
  }

  const endpoint = getEndpoint();
  if (!endpoint) return false;

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
      keepalive: true,
    });
    return res.ok;
  } catch {
    // Network failures must never throw from error handling.
    return false;
  }
}

/** Return a copy of the current error buffer (most recent last). */
export function getErrorBuffer() {
  hydrateBuffer();
  return [...buffer];
}

/** Clear the in-memory + session buffer. */
export function clearErrorBuffer() {
  buffer = [];
  if (typeof window !== 'undefined') {
    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }
}
