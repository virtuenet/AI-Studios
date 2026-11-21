/**
 * Team management API (Phase 2).
 *
 * CRUD for organization memberships. In production, backed by the Drizzle
 * memberships table. For development, uses an in-memory store.
 */

import { NextResponse, type NextRequest } from 'next/server';
import { requireManagedAuth } from '@/lib/auth';

export const runtime = 'nodejs';

interface Member {
  userId: string;
  orgId: string;
  role: 'owner' | 'admin' | 'member';
  email?: string | undefined;
  invitedAt: string;
  acceptedAt?: string;
}

// In-memory store (swap for Drizzle)
const memberships = new Map<string, Member[]>();

function memberKey(orgId: string): string {
  return `members:${orgId}`;
}

function getMembers(orgId: string): Member[] {
  const key = memberKey(orgId);
  if (!memberships.has(key)) memberships.set(key, []);
  return memberships.get(key)!;
}

/** GET /api/v1/teams — list members */
export async function GET(request: NextRequest): Promise<NextResponse> {
  const auth = await requireManagedAuth(request);
  if (auth instanceof NextResponse) return auth;

  const members = getMembers(auth.orgId);
  return NextResponse.json({ members });
}

/** POST /api/v1/teams — invite a member */
export async function POST(request: NextRequest): Promise<NextResponse> {
  const auth = await requireManagedAuth(request);
  if (auth instanceof NextResponse) return auth;

  // Only owners and admins can invite
  const orgMembers = getMembers(auth.orgId);
  const caller = orgMembers.find((m) => m.userId === auth.userId);
  if (!caller || (caller.role !== 'owner' && caller.role !== 'admin')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  let body: { userId?: string; email?: string; role?: string };
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!body.userId && !body.email) {
    return NextResponse.json({ error: 'userId or email required' }, { status: 400 });
  }

  const role = (['owner', 'admin', 'member'].includes(body.role || '') ? body.role : 'member') as Member['role'];

  const newMember: Member = {
    userId: body.userId || `pending-${Date.now()}`,
    orgId: auth.orgId,
    role,
    email: body.email,
    invitedAt: new Date().toISOString(),
  };

  // Check for duplicates
  const existing = orgMembers.find((m) => m.userId === newMember.userId);
  if (existing) {
    return NextResponse.json({ error: 'Member already exists' }, { status: 409 });
  }

  orgMembers.push(newMember);
  return NextResponse.json({ member: newMember }, { status: 201 });
}

/** DELETE /api/v1/teams — remove a member */
export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const auth = await requireManagedAuth(request);
  if (auth instanceof NextResponse) return auth;

  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  if (!userId) {
    return NextResponse.json({ error: 'userId required' }, { status: 400 });
  }

  const orgMembers = getMembers(auth.orgId);
  const caller = orgMembers.find((m) => m.userId === auth.userId);
  if (!caller || (caller.role !== 'owner' && caller.role !== 'admin')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // Owners cannot be removed
  const target = orgMembers.find((m) => m.userId === userId);
  if (target?.role === 'owner') {
    return NextResponse.json({ error: 'Cannot remove the owner' }, { status: 403 });
  }

  const idx = orgMembers.findIndex((m) => m.userId === userId);
  if (idx === -1) {
    return NextResponse.json({ error: 'Member not found' }, { status: 404 });
  }

  orgMembers.splice(idx, 1);
  return NextResponse.json({ removed: true });
}
