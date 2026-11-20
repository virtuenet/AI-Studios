// @vitest-environment node
import { describe, it, expect, vi, afterEach } from 'vitest';
import { getRequestId, logEvent, logProxy } from '../../lib/logger';

describe('structured logger', () => {
  afterEach(() => vi.restoreAllMocks());

  it('uses an incoming request id or generates one', () => {
    expect(getRequestId({ headers: { get: () => 'req-123' } })).toBe('req-123');
    expect(getRequestId({ headers: { get: () => null } })).toMatch(/[0-9a-f-]{8,}/);
  });

  it('emits a single JSON line', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    logEvent({ kind: 'test', value: 1 });
    expect(spy).toHaveBeenCalledTimes(1);
    const parsed = JSON.parse(spy.mock.calls[0][0]);
    expect(parsed.kind).toBe('test');
    expect(parsed.ts).toBeTruthy();
  });

  it('logs proxy metadata without credentials or bodies', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const request = new Request('http://localhost/api/workflow/x', {
      headers: { 'x-api-key': 'secret-key', 'x-request-id': 'req-9' },
    });
    logProxy({ name: 'workflow.get', request, status: 200, startedAt: Date.now() - 5, requestId: 'req-9' });

    const line = spy.mock.calls[0][0];
    expect(line).not.toContain('secret-key');
    const parsed = JSON.parse(line);
    expect(parsed).toMatchObject({ kind: 'proxy', name: 'workflow.get', status: 200, requestId: 'req-9' });
    expect(parsed.durationMs).toBeGreaterThanOrEqual(0);
  });

  it('logs errors at error level with a truncated message', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    logProxy({
      name: 'x',
      request: new Request('http://localhost/x'),
      status: 500,
      error: new Error('x'.repeat(1000)),
      requestId: 'r',
    });
    const parsed = JSON.parse(spy.mock.calls[0][0]);
    expect(parsed.level).toBe('error');
    expect(parsed.error.length).toBeLessThanOrEqual(300);
  });
});
