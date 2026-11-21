/**
 * Team management API (Phase 2).
 *
 * CRUD for organization memberships. Backed by the SQLite memberships table.
 * Swap to Postgres/Drizzle when DATABASE_URL is set.
 */

import { NextResponse, type NextRequest } from 'next/server';
import { requireManagedAuth } from '@/lib/auth';
import Database from 'better-sqlite3';

export const runtime = 'nodejs';

const DB_PATH = process.env.SQLITE_PATH || '.data/ai-studios.db';
function getDb() { return new Database(DB_PATH); }

/** GET /api/v1/teams — list members */
export async function GET(request: NextRequest): Promise<NextResponse> {
  const auth = await requireManagedAuth(request);
  if (auth instanceof NextResponse) return auth;

  const db = getDb();
  try {
    const members = db.prepare(
      'SELECT user_id, org_id, role, invited_at, accepted_at FROM memberships WHERE org_id = ?'
    ).all(auth.orgId);
    return NextResponse.json({ members });
  } finally { db.close(); }
}

/** POST /api/v1/teams — invite a member */
export async function POST(request: NextRequest): Promise<NextResponse> {
  const auth = await requireManagedAuth(request);
  if (auth instanceof NextResponse) return auth;

  const db = getDb();
  try {
    // Only owners and admins can invite
    const caller = db.prepare(
      'SELECT role FROM memberships WHERE org_id = ? AND user_id = ?'
    ).get(auth.orgId, auth.userId) as { role: string } | undefined;
    if (!caller || (caller.role !== 'owner' && caller.role !== 'admin')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    let body: { userId?: string; email?: string; role?: string };
    try { body = (await request.json()) as Record<string, unknown>; } catch {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    const userId = body.userId || `pending-${Date.now()}`;
    const role = ['owner', 'admin', 'member'].includes(body.role || '') ? body.role! : 'member';

    // Check for duplicates
    const existing = db.prepare(
      'SELECT 1 FROM memberships WHERE org_id = ? AND user_id = ?'
    ).get(auth.orgId, userId);
    if (existing) {
      return NextResponse.json({ error: 'Member already exists' }, { status: 409 });
    }

    const id = `mem-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const invitedAt = new Date().toISOString();
    db.prepare(
      'INSERT INTO memberships (id, user_id, org_id, role, invited_at) VALUES (?, ?, ?, ?, ?)'
    ).run(id, userId, auth.orgId, role, invitedAt);

    return NextResponse.json({
      member: { userId, orgId: auth.orgId, role, invitedAt },
    }, { status: 201 });
  } finally { db.close(); }
}

/** DELETE /api/v1/teams — remove a member */
export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const auth = await requireManagedAuth(request);
  if (auth instanceof NextResponse) return auth;

  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 });

  const db = getDb();
  try {
    const caller = db.prepare(
      'SELECT role FROM memberships WHERE org_id = ? AND user_id = ?'
    ).get(auth.orgId, auth.userId) as { role: string } | undefined;
    if (!caller || (caller.role !== 'owner' && caller.role !== 'admin')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const target = db.prepare(
      'SELECT role FROM memberships WHERE org_id = ? AND user_id = ?'
    ).get(auth.orgId, userId) as { role: string } | undefined;
    if (target?.role === 'owner') {
      return NextResponse.json({ error: 'Cannot remove the owner' }, { status: 403 });
    }

    const result = db.prepare(
      'DELETE FROM memberships WHERE org_id = ? AND user_id = ?'
    ).run(auth.orgId, userId);
    if (result.changes === 0) {
      return NextResponse.json({ error: 'Member not found' }, { status: 404 });
    }

    return NextResponse.json({ removed: true });
  } finally { db.close(); }
}
