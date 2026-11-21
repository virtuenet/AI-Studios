/**
 * Managed generation endpoint (Phase 1 + Phase 2 rate limiting).
 *
 * Replaces the raw Muapi proxy for SaaS deployments. The server holds the
 * Muapi key, reserves credits, enqueues a job, and returns a job ID.
 * Per-org rate limits prevent abuse.
 *
 * Swap the in-memory stores for Drizzle/Postgres and BullMQ/Redis in production.
 */

import { NextResponse, type NextRequest } from 'next/server';
import { requireManagedAuth } from '@/lib/auth';
import { CreditLedger } from '@/packages/studio/src/client/creditLedger';
import { sqliteLedgerStore, sqliteJobStore } from '@/lib/db/sqlite';
import { checkRateLimit, rateLimitKey } from '@/lib/rateLimit';
import type { GenerationRequest } from '@/packages/studio/src/client/transport';

export const runtime = 'nodejs';

// In production, these are created once from a Drizzle db / Redis connection.
const ledger = new CreditLedger(sqliteLedgerStore);
const jobStore = sqliteJobStore;

// Plan-based rate limits (generations per minute per org)
const PLAN_RATE_LIMITS: Record<string, { rate: number; burst: number }> = {
  free: { rate: 3, burst: 5 },
  starter: { rate: 10, burst: 15 },
  pro: { rate: 30, burst: 45 },
  business: { rate: 60, burst: 90 },
  enterprise: { rate: 120, burst: 180 },
};

export async function POST(request: NextRequest): Promise<NextResponse> {
  const auth = await requireManagedAuth(request);
  if (auth instanceof NextResponse) return auth;

  // Per-org rate limit (default to free plan limits)
  const planLimit = PLAN_RATE_LIMITS.free!;
  const rateLimit = checkRateLimit(rateLimitKey(request, auth.orgId), {
    rate: planLimit.rate,
    windowMs: 60_000,
    burst: planLimit.burst,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: 'Rate limit exceeded' },
      {
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil(rateLimit.resetMs / 1000)),
          'X-RateLimit-Remaining': String(rateLimit.remaining),
        },
      },
    );
  }

  let body: GenerationRequest;
  try {
    body = (await request.json()) as GenerationRequest;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!body.model?.id) {
    return NextResponse.json({ error: 'model.id is required' }, { status: 400 });
  }

  // 1. Estimate cost (stub — replace with model price book lookup)
  const estimatedCost = 1;

  // 2. Reserve credits
  const reference = `gen-${Date.now()}-${body.model.id}`;
  try {
    await ledger.reserve(auth.orgId, estimatedCost, reference);
  } catch (error) {
    if (
      error instanceof Error &&
      error.name === 'InsufficientCreditsError'
    ) {
      return NextResponse.json(
        { error: 'Insufficient credits' },
        { status: 402 },
      );
    }
    throw error;
  }

  // 3. Enqueue the job
  const job = await jobStore.enqueue({
    type: 'image',
    payload: body as unknown as Record<string, unknown>,
    orgId: auth.orgId,
  });

  // 4. Return the job ID
  return NextResponse.json({
    jobId: job.id,
    status: job.status,
    estimatedCost,
    rateLimit: { remaining: rateLimit.remaining },
  });
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const auth = await requireManagedAuth(request);
  if (auth instanceof NextResponse) return auth;

  const { searchParams } = new URL(request.url);
  const jobId = searchParams.get('jobId');

  if (jobId) {
    const job = await jobStore.get(jobId);
    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }
    if (job.orgId !== auth.orgId) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
    return NextResponse.json({
      jobId: job.id,
      status: job.status,
      result: job.result,
      error: job.error,
    });
  }

  const jobs = await jobStore.listByOrg(auth.orgId, 50);
  return NextResponse.json({
    jobs: jobs.map((job) => ({
      jobId: job.id,
      type: job.type,
      status: job.status,
      createdAt: job.createdAt,
    })),
  });
}
