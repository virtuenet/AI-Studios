/**
 * API key management (Phase 3).
 *
 * CRUD for org-scoped API keys. Keys are hashed before storage and only
 * returned once at creation time. Backed by the SQLite api_keys table.
 */

import { NextResponse, type NextRequest } from 'next/server';
import { requireManagedAuth } from '@/lib/auth';
import Database from 'better-sqlite3';

export const runtime = 'nodejs';

const DB_PATH = process.env.SQLITE_PATH || '.data/ai-studios.db';
function getDb() { return new Database(DB_PATH); }

function hashKey(raw: string): string {
  let hash = 0;
  for (let i = 0; i < raw.length; i++) hash = ((hash << 5) - hash + raw.charCodeAt(i)) | 0;
  return `sk-${Math.abs(hash).toString(36)}`;
}

/** GET /api/v1/keys — list keys (prefix only, never the full key) */
export async function GET(request: NextRequest): Promise<NextResponse> {
  const auth = await requireManagedAuth(request);
  if (auth instanceof NextResponse) return auth;

  const db = getDb();
  try {
    const keys = db.prepare(
      'SELECT id, name, prefix, scopes, last_used_at, created_at FROM api_keys WHERE org_id = ? ORDER BY created_at DESC'
    ).all(auth.orgId);
    return NextResponse.json({ keys });
  } finally { db.close(); }
}

/** POST /api/v1/keys — create a new API key (returns full key once) */
export async function POST(request: NextRequest): Promise<NextResponse> {
  const auth = await requireManagedAuth(request);
  if (auth instanceof NextResponse) return auth;

  let body: { name?: string; scopes?: string[] };
  try { body = (await request.json()) as Record<string, unknown>; } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const name = body.name || 'Unnamed key';
  const scopes = Array.isArray(body.scopes) ? body.scopes : ['generations:write'];
  const rawKey = `ais-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
  const prefix = rawKey.slice(0, 8);
  const id = `key-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  const db = getDb();
  try {
    db.prepare(
      'INSERT INTO api_keys (id, org_id, name, prefix, hash, scopes, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
    ).run(id, auth.orgId, name, prefix, hashKey(rawKey), JSON.stringify(scopes), new Date().toISOString());

    return NextResponse.json({
      key: { id, name, prefix, scopes, createdAt: new Date().toISOString() },
      apiKey: rawKey,
    }, { status: 201 });
  } finally { db.close(); }
}

/** DELETE /api/v1/keys — revoke a key */
export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const auth = await requireManagedAuth(request);
  if (auth instanceof NextResponse) return auth;

  const { searchParams } = new URL(request.url);
  const keyId = searchParams.get('keyId');
  if (!keyId) return NextResponse.json({ error: 'keyId required' }, { status: 400 });

  const db = getDb();
  try {
    const result = db.prepare(
      'DELETE FROM api_keys WHERE id = ? AND org_id = ?'
    ).run(keyId, auth.orgId);
    if (result.changes === 0) {
      return NextResponse.json({ error: 'Key not found' }, { status: 404 });
    }
    return NextResponse.json({ revoked: true });
  } finally { db.close(); }
}
