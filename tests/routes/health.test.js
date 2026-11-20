// @vitest-environment node
import { describe, it, expect, vi, afterEach } from 'vitest';
import { GET } from '../../app/api/health/route';

describe('/api/health', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('reports ok when the upstream is reachable', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(null, { status: 200 })));
    const response = await GET();
    const body = await response.json();
    expect(response.status).toBe(200);
    expect(body.status).toBe('ok');
    expect(body.upstream).toBe('reachable');
    expect(body.timestamp).toBeTruthy();
  });

  it('reports degraded when the upstream is down', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('down')));
    const response = await GET();
    const body = await response.json();
    expect(response.status).toBe(503);
    expect(body.status).toBe('degraded');
    expect(body.upstream).toBe('unreachable');
  });

  it('disables caching', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(null, { status: 200 })));
    const response = await GET();
    expect(response.headers.get('cache-control')).toBe('no-store');
  });
});
