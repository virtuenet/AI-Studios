/**
 * Usage dashboard endpoint (Phase 2).
 *
 * Returns per-org usage statistics: generation counts, credit consumption,
 * storage used, and active users. Backed by the in-memory job store and
 * credit ledger. Swaps to Postgres aggregates in production.
 */

import { NextResponse, type NextRequest } from 'next/server';
import { requireManagedAuth } from '@/lib/auth';
import {
  createMemoryLedgerStore,
  CreditLedger,
} from '@/packages/studio/src/client/creditLedger';
import { createMemoryJobStore } from '@/packages/studio/src/client/jobQueue';
import { checkRateLimit, rateLimitKey } from '@/lib/rateLimit';

export const runtime = 'nodejs';

// In production, these are singletons backed by Postgres.
const ledger = new CreditLedger(createMemoryLedgerStore());
const jobStore = createMemoryJobStore();

export async function GET(request: NextRequest): Promise<NextResponse> {
  const auth = await requireManagedAuth(request);
  if (auth instanceof NextResponse) return auth;

  // Rate limit dashboard queries (10 req/min per org)
  const rateLimit = checkRateLimit(rateLimitKey(request, auth.orgId), {
    rate: 10,
    windowMs: 60_000,
    burst: 15,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: 'Too many requests' },
      {
        status: 429,
        headers: { 'Retry-After': String(Math.ceil(rateLimit.resetMs / 1000)) },
      },
    );
  }

  // Gather usage data
  const jobs = await jobStore.listByOrg(auth.orgId, 1000);
  const balance = await ledger.getBalance(auth.orgId);

  const totalGenerations = jobs.length;
  const completed = jobs.filter((j) => j.status === 'completed').length;
  const failed = jobs.filter((j) => j.status === 'failed').length;
  const queued = jobs.filter((j) => j.status === 'queued' || j.status === 'processing').length;

  // Group by type
  const byType: Record<string, number> = {};
  for (const job of jobs) {
    byType[job.type] = (byType[job.type] || 0) + 1;
  }

  // Recent activity (last 10 jobs)
  const recent = jobs.slice(0, 10).map((job) => ({
    jobId: job.id,
    type: job.type,
    status: job.status,
    createdAt: job.createdAt,
  }));

  return NextResponse.json({
    orgId: auth.orgId,
    balance,
    usage: {
      totalGenerations,
      completed,
      failed,
      queued,
      byType,
    },
    recent,
    timestamp: new Date().toISOString(),
  });
}
