/**
 * Structured, JSON-line logging for server routes. Avoid logging credentials,
 * prompts, or full upstream bodies — metadata only.
 */
import crypto from 'crypto';

export function getRequestId(request) {
  return request?.headers?.get?.('x-request-id') || crypto.randomUUID();
}

export function logEvent(event) {
  const line = JSON.stringify({ ts: new Date().toISOString(), ...event });
  if (event.level === 'error') console.error(line);
  else console.log(line);
}

export function logProxy({ name, request, status, startedAt, requestId, error }) {
  logEvent({
    level: error ? 'error' : 'info',
    kind: 'proxy',
    name,
    requestId,
    method: request?.method,
    path: (() => {
      try {
        return new URL(request.url).pathname;
      } catch {
        return undefined;
      }
    })(),
    status,
    durationMs: startedAt ? Date.now() - startedAt : undefined,
    error: error ? String(error.message || error).slice(0, 300) : undefined,
  });
}
