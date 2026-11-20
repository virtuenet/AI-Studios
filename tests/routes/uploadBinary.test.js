// @vitest-environment node
import { describe, it, expect, vi, afterEach } from 'vitest';
import { POST } from '../../app/api/upload-binary/route';

function formRequest(fields, headers = {}) {
  const form = new FormData();
  for (const [key, value] of Object.entries(fields)) form.append(key, value);
  return new Request('http://localhost/api/upload-binary', {
    method: 'POST',
    headers: { 'x-api-key': 'key-123', ...headers },
    body: form,
  });
}

const SAFE_TARGET = 'https://my-bucket.s3.us-east-1.amazonaws.com/key.png';

describe('upload-binary proxy', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('requires an API key', async () => {
    const response = await POST(new Request('http://localhost/api/upload-binary', { method: 'POST', body: new FormData() }));
    expect(response.status).toBe(401);
  });

  it('requires a target URL', async () => {
    expect((await POST(formRequest({ key: 'k.png' }))).status).toBe(400);
  });

  it('rejects SSRF targets', async () => {
    const response = await POST(formRequest({ 'x-proxy-target-url': 'https://127.0.0.1/a.png', key: 'k.png' }));
    expect(response.status).toBe(400);
    expect((await response.json()).reason).toBe('host_not_allowed');
  });

  it('rejects blocked file types', async () => {
    const file = new File(['<script>'], 'evil.html', { type: 'text/html' });
    const response = await POST(formRequest({ 'x-proxy-target-url': SAFE_TARGET, file, key: 'evil.html' }));
    expect(response.status).toBe(400);
    expect((await response.json()).reason).toBe('blocked_file_type');
  });

  it('forwards safe uploads and returns 204', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 204 }));
    vi.stubGlobal('fetch', fetchMock);

    const file = new File(['image-bytes'], 'photo.png', { type: 'image/png' });
    const response = await POST(formRequest({ 'x-proxy-target-url': SAFE_TARGET, file, key: 'photo.png' }));

    expect(response.status).toBe(204);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][0]).toBe(SAFE_TARGET);
  });
});
