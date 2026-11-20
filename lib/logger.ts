/**
 * Structured, JSON-line logging for server routes. Avoid logging credentials,
 * prompts, or full upstream bodies — metadata only.
 */
import crypto from 'crypto';

interface RequestLike {
  method?: string;
  url?: string;
  headers?: { get(name: string): string | null };
}

export function getRequestId(request: RequestLike | null | undefined): string {
  return request?.headers?.get?.('x-request-id') || crypto.randomUUID();
}

export function logEvent(event: Record<string, unknown> & { level?: string }): void {
  const line = JSON.stringify({ ts: new Date().toISOString(), ...event });
  if (event.level === 'error') console.error(line);
  else console.log(line);
}

export function logProxy({
  name,
  request,
  status,
  startedAt,
  requestId,
  error,
}: {
  name: string;
  request?: RequestLike;
  status?: number;
  startedAt?: number;
  requestId?: string;
  error?: unknown;
}): void {
  logEvent({
    level: error ? 'error' : 'info',
    kind: 'proxy',
    name,
    requestId,
    method: request?.method,
    path: (() => {
      try {
        return request?.url ? new URL(request.url).pathname : undefined;
      } catch {
        return undefined;
      }
    })(),
    status,
    durationMs: startedAt ? Date.now() - startedAt : undefined,
    error: error
      ? String(error instanceof Error ? error.message : error).slice(0, 300)
      : undefined,
  });
}
