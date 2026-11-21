/**
 * SaaS authentication middleware.
 *
 * BYOK mode (default): passes the x-api-key header through unchanged.
 * Managed mode: validates a JWT session cookie or Authorization header,
 * extracts orgId and userId, and attaches them to the request context.
 *
 * Set AUTH_MODE=managed and AUTH_JWT_SECRET to enable managed auth.
 * The JWT is issued by Clerk, Auth.js, WorkOS, or a custom provider —
 * this middleware only validates and extracts claims.
 */

import { NextResponse, type NextRequest } from 'next/server';

export interface AuthContext {
  mode: 'byok' | 'managed';
  orgId?: string;
  userId?: string;
  apiKey?: string | undefined;
}

function getAuthMode(): 'byok' | 'managed' {
  return process.env.AUTH_MODE === 'managed' ? 'managed' : 'byok';
}

/**
 * Validate a JWT and extract claims. Replace with your provider's validation
 * (Clerk: auth(), Auth.js: getToken(), WorkOS: validateSession()).
 */
async function validateManagedSession(
  _request: NextRequest,
): Promise<{ orgId: string; userId: string } | null> {
  // TODO: implement real JWT validation against your auth provider.
  // For now, accept a development header for local testing.
  const devOrg = _request.headers.get('x-dev-org-id');
  const devUser = _request.headers.get('x-dev-user-id');
  if (process.env.NODE_ENV !== 'production' && devOrg && devUser) {
    return { orgId: devOrg, userId: devUser };
  }
  return null;
}

export async function getAuthContext(
  request: NextRequest,
): Promise<AuthContext> {
  const mode = getAuthMode();

  if (mode === 'byok') {
    const apiKey = request.headers.get('x-api-key') || undefined;
    return { mode: 'byok', apiKey };
  }

  const session = await validateManagedSession(request);
  if (!session) {
    return { mode: 'managed' };
  }

  return {
    mode: 'managed',
    orgId: session.orgId,
    userId: session.userId,
  };
}

/**
 * Require an authenticated managed session. Returns a 401 response if missing.
 */
export async function requireManagedAuth(
  request: NextRequest,
): Promise<{ orgId: string; userId: string } | NextResponse> {
  const ctx = await getAuthContext(request);
  if (ctx.mode !== 'managed' || !ctx.orgId || !ctx.userId) {
    return NextResponse.json(
      { error: 'Authentication required' },
      { status: 401 },
    );
  }
  return { orgId: ctx.orgId, userId: ctx.userId };
}
