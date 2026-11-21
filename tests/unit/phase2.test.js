import { describe, it, expect } from 'vitest';
import { checkRateLimit } from '../../lib/rateLimit';
import { createMemoryJobStore } from '../../packages/studio/src/client/jobQueue';
import { createMemoryLedgerStore, CreditLedger } from '../../packages/studio/src/client/creditLedger';

describe('Phase 2 — per-org rate limiting', () => {
  it('enforces different rate limits for different orgs', () => {
    for (let i = 0; i < 3; i++) {
      expect(checkRateLimit('org:orgA', { rate: 3, burst: 3 }).allowed).toBe(true);
    }
    expect(checkRateLimit('org:orgA', { rate: 3, burst: 3 }).allowed).toBe(false);
    for (let i = 0; i < 10; i++) {
      expect(checkRateLimit('org:orgB', { rate: 10, burst: 10 }).allowed).toBe(true);
    }
    expect(checkRateLimit('org:orgB', { rate: 10, burst: 10 }).allowed).toBe(false);
  });
});

describe('Phase 2 — usage dashboard data', () => {
  it('aggregates job counts by status and type', async () => {
    const store = createMemoryJobStore();
    await store.enqueue({ type: 'image', payload: {}, orgId: 'org1' });
    await store.enqueue({ type: 'image', payload: {}, orgId: 'org1' });
    await store.enqueue({ type: 'video', payload: {}, orgId: 'org1' });
    const job1 = await store.enqueue({ type: 'image', payload: {}, orgId: 'org1' });
    await store.update(job1.id, { status: 'completed' });
    const jobs = await store.listByOrg('org1', 100);
    const completed = jobs.filter(function(j) { return j.status === 'completed'; }).length;
    const queued = jobs.filter(function(j) { return j.status === 'queued'; }).length;
    const byType = {};
    jobs.forEach(function(job) { byType[job.type] = (byType[job.type] || 0) + 1; });
    expect(jobs.length).toBe(4);
    expect(completed).toBe(1);
    expect(queued).toBe(3);
    expect(byType.image).toBe(3);
    expect(byType.video).toBe(1);
  });
});

describe('Phase 2 — credit ledger balance tracking', () => {
  it('tracks balance after multiple reserve/settle cycles', async () => {
    const store = createMemoryLedgerStore();
    const ledger = new CreditLedger(store);
    await ledger.credit('org1', 100, 'subscription_credit', 'sub');
    await ledger.reserve('org1', 20, 'gen-1');
    await ledger.settle('org1', 20, 15, 'gen-1');
    await ledger.reserve('org1', 30, 'gen-2');
    await ledger.settle('org1', 30, 30, 'gen-2');
    expect(await ledger.getBalance('org1')).toBe(55);
  });
});
