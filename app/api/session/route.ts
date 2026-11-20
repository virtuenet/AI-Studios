import { NextResponse, type NextRequest } from 'next/server';
import { validateApiKey } from '@/app/shell/apiKeyValidation.mjs';
import {
  buildClearSessionCookie,
  buildSessionCookie,
  readApiKeyFromRequest,
} from '@/lib/session';

/**
 * Same-origin guard: reject cross-site writes. Combined with
 * SameSite=Strict cookies this blocks CSRF on session creation/deletion.
 */
function isSameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return true; // same-origin fetches from the app include Origin; CLI/curl may omit
  try {
    const originUrl = new URL(origin);
    const host = request.headers.get('host');
    return originUrl.host === host;
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const apiKey = readApiKeyFromRequest(request);
  return NextResponse.json({ hasSession: Boolean(apiKey) });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: 'Cross-origin session request rejected' }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const result = validateApiKey(String((body as { apiKey?: unknown })?.apiKey ?? ''));
  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const response = NextResponse.json({ ok: true });
  response.headers.set('Set-Cookie', buildSessionCookie(result.value));
  return response;
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: 'Cross-origin session request rejected' }, { status: 403 });
  }
  const response = NextResponse.json({ ok: true });
  response.headers.set('Set-Cookie', buildClearSessionCookie());
  return response;
}
