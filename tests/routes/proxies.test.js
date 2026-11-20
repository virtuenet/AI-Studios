// @vitest-environment node
import { describe, it, expect, vi, afterEach } from 'vitest';
import { GET as agentsGET } from '../../app/api/agents/[[...path]]/route';
import { GET as workflowGET } from '../../app/api/workflow/[[...path]]/route';

function req(url) {
  return new Request(url, { headers: { 'x-api-key': 'key-123' } });
}

describe('proxy routes', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('forwards agent requests to Muapi with the API key', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ items: [] }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    );
    vi.stubGlobal('fetch', fetchMock);

    const response = await agentsGET(req('http://localhost/api/agents/templates/agents'), {
      params: Promise.resolve({ path: ['templates', 'agents'] }),
    });

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ items: [] });
    const [url, options] = fetchMock.mock.calls[0];
    expect(url).toContain('api.muapi.ai/agents/templates/agents');
    expect(options.headers.get('x-api-key')).toBe('key-123');
    expect(options.headers.get('cookie')).toBeNull();
  });

  it('forwards workflow requests and propagates upstream status', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ error: 'nope' }), { status: 404, headers: { 'Content-Type': 'application/json' } })
    ));

    const response = await workflowGET(req('http://localhost/api/workflow/get-template-workflows'), {
      params: Promise.resolve({ path: ['get-template-workflows'] }),
    });

    expect(response.status).toBe(404);
    expect(await response.json()).toEqual({ error: 'nope' });
  });

  it('returns 500 when the upstream throws', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('down')));
    const response = await workflowGET(req('http://localhost/api/workflow/x'), {
      params: Promise.resolve({ path: ['x'] }),
    });
    expect(response.status).toBe(500);
  });
});
