// @vitest-environment node
import { describe, it, expect, vi, afterEach } from 'vitest';
import { GET, POST } from '../../app/api/qc/route';

const originalUrl = process.env.ML_QC_URL;

function jsonRequest(body) {
  return new Request('http://localhost/api/qc', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}

describe('/api/qc', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    if (originalUrl === undefined) delete process.env.ML_QC_URL;
    else process.env.ML_QC_URL = originalUrl;
  });

  it('reports disabled when no service is configured', async () => {
    delete process.env.ML_QC_URL;
    const response = await GET();
    const body = await response.json();
    expect(response.status).toBe(200);
    expect(body.enabled).toBe(false);
    expect(body.checks).toEqual(['product-size', 'face-identity']);
    expect(response.headers.get('cache-control')).toBe('no-store');
  });

  it('reports enabled when ML_QC_URL is set', async () => {
    process.env.ML_QC_URL = 'http://qc:8001';
    const body = await (await GET()).json();
    expect(body.enabled).toBe(true);
  });

  it('returns 503 when the service is not configured', async () => {
    delete process.env.ML_QC_URL;
    const response = await POST(
      jsonRequest({ check: 'product-size', imageUrl: 'https://cdn/x.png', productSizeMm: 48 })
    );
    expect(response.status).toBe(503);
    expect((await response.json()).error).toMatch(/not configured/);
  });

  it('rejects malformed requests', async () => {
    process.env.ML_QC_URL = 'http://qc:8001';

    const invalidJson = await POST(jsonRequest('{bad'));
    expect(invalidJson.status).toBe(400);

    const unknownCheck = await POST(
      jsonRequest({ check: 'nope', imageUrl: 'https://cdn/x.png' })
    );
    expect(unknownCheck.status).toBe(400);

    const badImage = await POST(
      jsonRequest({ check: 'product-size', imageUrl: 'file:///etc/passwd', productSizeMm: 48 })
    );
    expect(badImage.status).toBe(400);

    const noSize = await POST(
      jsonRequest({ check: 'product-size', imageUrl: 'https://cdn/x.png' })
    );
    expect(noSize.status).toBe(400);

    const noReference = await POST(
      jsonRequest({ check: 'face-identity', imageUrl: 'https://cdn/x.png' })
    );
    expect(noReference.status).toBe(400);
  });

  it('proxies product-size with the service payload contract', async () => {
    process.env.ML_QC_URL = 'http://qc:8001/';
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ pass: true, name: 'product-size', ratio: 1.0 }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    );
    vi.stubGlobal('fetch', fetchMock);

    const response = await POST(
      jsonRequest({ check: 'product-size', imageUrl: 'https://cdn/x.png', productSizeMm: 48 })
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.checks).toHaveLength(1);
    expect(body.checks[0].pass).toBe(true);
    expect(fetchMock).toHaveBeenCalledOnce();
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe('http://qc:8001/qc/product-size');
    expect(JSON.parse(init.body)).toEqual({
      image_url: 'https://cdn/x.png',
      product_size_mm: [48],
    });
  });

  it('proxies face-identity with the reference URL', async () => {
    process.env.ML_QC_URL = 'http://qc:8001';
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ pass: false, name: 'face-identity', score: 0.4 }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    );
    vi.stubGlobal('fetch', fetchMock);

    const response = await POST(
      jsonRequest({
        check: 'face-identity',
        imageUrl: 'https://cdn/shot.png',
        referenceUrl: 'https://cdn/ref.png',
      })
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.checks[0].pass).toBe(false);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe('http://qc:8001/qc/face-identity');
    expect(JSON.parse(init.body)).toEqual({
      image_url: 'https://cdn/shot.png',
      reference_url: 'https://cdn/ref.png',
    });
  });

  it('surfaces upstream failures as 502', async () => {
    process.env.ML_QC_URL = 'http://qc:8001';
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ detail: 'no face detected' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        })
      )
    );

    const response = await POST(
      jsonRequest({ check: 'face-identity', imageUrl: 'https://cdn/x.png', referenceUrl: 'https://cdn/r.png' })
    );
    expect(response.status).toBe(502);
    expect((await response.json()).error).toBe('no face detected');
  });

  it('reports transport failures without leaking an exception', async () => {
    process.env.ML_QC_URL = 'http://qc:8001';
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('connect ECONNREFUSED')));

    const response = await POST(
      jsonRequest({ check: 'product-size', imageUrl: 'https://cdn/x.png', productSizeMm: 48 })
    );
    expect(response.status).toBe(502);
    expect((await response.json()).error).toMatch(/ECONNREFUSED/);
  });
});
