import { NextResponse } from 'next/server';

/**
 * Server-side QC proxy.
 *
 * The ML checks (face detection, product measurement, face-identity comparison)
 * run in the optional Python service under services/qc. Keeping the call
 * server-side means the browser never needs the models and the service URL can
 * stay private. When ML_QC_URL is unset the endpoint reports itself disabled so
 * the studio can hide the ML controls.
 */

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const CHECKS = new Set(['product-size', 'face-identity']);
const TIMEOUT_MS = 25_000;

function noStore(body, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });
}

function isHttpUrl(value) {
  if (typeof value !== 'string') return false;
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

export async function GET() {
  return noStore({
    enabled: Boolean(process.env.ML_QC_URL),
    checks: [...CHECKS],
  });
}

export async function POST(request) {
  const baseUrl = process.env.ML_QC_URL;
  if (!baseUrl) {
    return noStore({ error: 'ML QC service is not configured' }, 503);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return noStore({ error: 'Invalid JSON body' }, 400);
  }

  const check = body?.check;
  if (!CHECKS.has(check)) {
    return noStore({ error: `check must be one of: ${[...CHECKS].join(', ')}` }, 400);
  }

  const imageUrl = typeof body?.imageUrl === 'string' ? body.imageUrl.trim() : '';
  if (!isHttpUrl(imageUrl)) {
    return noStore({ error: 'imageUrl must be an http(s) URL' }, 400);
  }

  let payload;
  if (check === 'product-size') {
    const productSizeMm = Number(body?.productSizeMm);
    if (!Number.isFinite(productSizeMm) || productSizeMm <= 0) {
      return noStore({ error: 'productSizeMm must be a positive number' }, 400);
    }
    payload = { image_url: imageUrl, product_size_mm: [productSizeMm] };
  } else {
    const referenceUrl = typeof body?.referenceUrl === 'string' ? body.referenceUrl.trim() : '';
    if (!isHttpUrl(referenceUrl)) {
      return noStore({ error: 'referenceUrl must be an http(s) URL' }, 400);
    }
    payload = { image_url: imageUrl, reference_url: referenceUrl };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(`${String(baseUrl).replace(/\/+$/, '')}/qc/${check}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const text = await response.text();

    let data;
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      return noStore({ error: 'ML QC returned invalid JSON' }, 502);
    }

    if (!response.ok) {
      const detail =
        typeof data?.detail === 'string' ? data.detail : `ML QC HTTP ${response.status}`;
      return noStore({ error: detail }, 502);
    }

    // Normalize the single-verdict service response into the list shape the
    // studio renders, while keeping the raw verdict for debugging.
    return noStore({ checks: [data], raw: data });
  } catch (error) {
    const detail =
      error?.name === 'AbortError'
        ? 'ML QC timed out'
        : error?.message || 'ML QC request failed';
    return noStore({ error: detail }, 502);
  } finally {
    clearTimeout(timer);
  }
}
