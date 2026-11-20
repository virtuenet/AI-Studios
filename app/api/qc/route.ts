import { NextResponse, type NextRequest } from 'next/server';

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

const CHECKS = ['product-size', 'face-identity'] as const;
type QcCheck = (typeof CHECKS)[number];
const CHECK_SET = new Set<string>(CHECKS);
const TIMEOUT_MS = 25_000;

interface QcRequestBody {
  check?: unknown;
  imageUrl?: unknown;
  referenceUrl?: unknown;
  productSizeMm?: unknown;
  prompt?: unknown;
}

function noStore(body: unknown, status = 200): NextResponse {
  return NextResponse.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });
}

function isHttpUrl(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

export async function GET(): Promise<NextResponse> {
  return noStore({
    enabled: Boolean(process.env.ML_QC_URL),
    checks: [...CHECKS],
  });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const baseUrl = process.env.ML_QC_URL;
  if (!baseUrl) {
    return noStore({ error: 'ML QC service is not configured' }, 503);
  }

  let body: QcRequestBody;
  try {
    body = (await request.json()) as QcRequestBody;
  } catch {
    return noStore({ error: 'Invalid JSON body' }, 400);
  }

  const check = body?.check;
  if (typeof check !== 'string' || !CHECK_SET.has(check)) {
    return noStore({ error: `check must be one of: ${CHECKS.join(', ')}` }, 400);
  }

  const imageUrl = typeof body?.imageUrl === 'string' ? body.imageUrl.trim() : '';
  if (!isHttpUrl(imageUrl)) {
    return noStore({ error: 'imageUrl must be an http(s) URL' }, 400);
  }

  let payload: Record<string, unknown>;
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
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  // Defence in depth for the self-hosted service. Health checks stay public.
  if (process.env.QC_API_TOKEN) {
    headers.Authorization = `Bearer ${process.env.QC_API_TOKEN}`;
  }

  try {
    const response = await fetch(`${String(baseUrl).replace(/\/+$/, '')}/qc/${check}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const text = await response.text();

    let data: unknown;
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      return noStore({ error: 'ML QC returned invalid JSON' }, 502);
    }

    if (!response.ok) {
      const detail =
        data && typeof data === 'object' && typeof (data as { detail?: unknown }).detail === 'string'
          ? (data as { detail: string }).detail
          : `ML QC HTTP ${response.status}`;
      return noStore({ error: detail }, 502);
    }

    // Normalize the single-verdict service response into the list shape the
    // studio renders, while keeping the raw verdict for debugging.
    return noStore({ checks: [data], raw: data });
  } catch (error) {
    const detail =
      error instanceof Error && error.name === 'AbortError'
        ? 'ML QC timed out'
        : error instanceof Error
          ? error.message
          : 'ML QC request failed';
    return noStore({ error: detail }, 502);
  } finally {
    clearTimeout(timer);
  }
}
