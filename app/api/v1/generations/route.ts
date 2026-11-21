/**
 * Managed generation endpoint (Phase 1).
 *
 * Replaces the raw Muapi proxy for SaaS deployments. The server holds the
 * Muapi key, reserves credits, enqueues a job, and returns a job ID that
 * the client polls. The worker (a separate process or Inngest function)
 * processes the job, calls Muapi, and updates the job store.
 *
 * This is a stub — the implementation requires:
 *   - a job store (Postgres/Redis)
 *   - a credit ledger
 *   - a server-held Muapi key
 *   - org/user context from the session
 */

import { NextResponse, type NextRequest } from 'next/server';

export const runtime = 'nodejs';

export async function POST(request: NextRequest): Promise<NextResponse> {
  // TODO: authenticate the session, extract orgId and userId
  // TODO: validate the generation request
  // TODO: estimate cost from the model price book
  // TODO: reserve credits in the ledger
  // TODO: enqueue the job
  // TODO: return the job ID

  return NextResponse.json(
    { error: 'Managed generation is not yet implemented' },
    { status: 501 },
  );
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const jobId = searchParams.get('jobId');

  // TODO: fetch job status from the store

  return NextResponse.json(
    { error: 'Managed generation is not yet implemented' },
    { status: 501 },
  );
}
