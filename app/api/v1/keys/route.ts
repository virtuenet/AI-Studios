/**
 * API key management (Phase 3).
 *
 * CRUD for org-scoped API keys. Keys are hashed before storage and only
 * returned once at creation time. In production, backed by the Drizzle
 * api_keys table.
 */

import { NextResponse, type NextRequest } from 'next/server';
import { requireManagedAuth } from '@/lib/auth';

export const runtime = 'nodejs';

interface StoredKey {
  id: string;
  orgId: string;
  name: string;
  prefix: string;
  hash: string;
  scopes: string[];
  lastUsedAt?: string;
  createdAt: string;
}

// In-memory store (swap for Drizzle)
const keys = new Map<string, StoredKey[]>();

function orgKeys(orgId: string): StoredKey[] {
  const k = `keys:${orgId}`;
  if (!keys.has(k)) keys.set(k, []);
  return keys.get(k)!;
}

function hashKey(raw: string): string {
  // In production, use crypto.createHash('sha256').update(raw).digest('hex')
  let hash = 0;
  for (let i = 0; i < raw.length; i++) {
    hash = ((hash << 5) - hash + raw.charCodeAt(i)) | 0;
  }
  return `sk-${Math.abs(hash).toString(36)}`;
}

/** GET /api/v1/keys — list keys (prefix only, never the full key) */
export async function GET(request: NextRequest): Promise<NextResponse> {
  const auth = await requireManagedAuth(request);
  if (auth instanceof NextResponse) return auth;

  const list = orgKeys(auth.orgId).map((k) => ({
    id: k.id,
    name: k.name,
    prefix: k.prefix,
    scopes: k.scopes,
    lastUsedAt: k.lastUsedAt,
    createdAt: k.createdAt,
  }));

  return NextResponse.json({ keys: list });
}

/** POST /api/v1/keys — create a new API key (returns full key once) */
export async function POST(request: NextRequest): Promise<NextResponse> {
  const auth = await requireManagedAuth(request);
  if (auth instanceof NextResponse) return auth;

  let body: { name?: string; scopes?: string[] };
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const name = body.name || 'Unnamed key';
  const scopes = Array.isArray(body.scopes) ? body.scopes : ['generations:write'];

  const rawKey = `ais-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
  const prefix = rawKey.slice(0, 8);

  const stored: StoredKey = {
    id: `key-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    orgId: auth.orgId,
    name,
    prefix,
    hash: hashKey(rawKey),
    scopes,
    createdAt: new Date().toISOString(),
  };

  orgKeys(auth.orgId).push(stored);

  // Return the full key ONLY at creation time
  return NextResponse.json(
    {
      key: {
        id: stored.id,
        name: stored.name,
        prefix: stored.prefix,
        scopes: stored.scopes,
        createdAt: stored.createdAt,
      },
      apiKey: rawKey,
    },
    { status: 201 },
  );
}

/** DELETE /api/v1/keys — revoke a key */
export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const auth = await requireManagedAuth(request);
  if (auth instanceof NextResponse) return auth;

  const { searchParams } = new URL(request.url);
  const keyId = searchParams.get('keyId');
  if (!keyId) {
    return NextResponse.json({ error: 'keyId required' }, { status: 400 });
  }

  const list = orgKeys(auth.orgId);
  const idx = list.findIndex((k) => k.id === keyId);
  if (idx === -1) {
    return NextResponse.json({ error: 'Key not found' }, { status: 404 });
  }

  list.splice(idx, 1);
  return NextResponse.json({ revoked: true });
}
