import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import Database from 'better-sqlite3';
import { CreditLedger } from '../../packages/studio/src/client/creditLedger';

const TEST_DB = '.data/test-control-plane.db';

function createStores() {
  const { mkdirSync } = require('fs');
  const { dirname } = require('path');
  mkdirSync(dirname(TEST_DB), { recursive: true });
  const sqlite = new Database(TEST_DB);
  sqlite.pragma('journal_mode = WAL');
  sqlite.exec('CREATE TABLE IF NOT EXISTS credit_ledger (id TEXT PRIMARY KEY, org_id TEXT NOT NULL, delta INTEGER NOT NULL, reason TEXT NOT NULL, reference TEXT NOT NULL, created_at TEXT NOT NULL DEFAULT (datetime(\'now\')))');
  sqlite.exec('CREATE TABLE IF NOT EXISTS generations (id TEXT PRIMARY KEY, org_id TEXT NOT NULL, user_id TEXT NOT NULL, model_id TEXT NOT NULL, status TEXT NOT NULL DEFAULT \'queued\', estimated_cost INTEGER NOT NULL DEFAULT 0, idempotency_key TEXT NOT NULL UNIQUE, created_at TEXT NOT NULL DEFAULT (datetime(\'now\')), completed_at TEXT)');

  return {
    sqlite,
    ledgerStore: {
      async getBalance(orgId) {
        return sqlite.prepare('SELECT COALESCE(SUM(delta), 0) as total FROM credit_ledger WHERE org_id = ?').get(orgId).total;
      },
      async append(entry) {
        const full = { ...entry, id: `ledger-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` };
        sqlite.prepare('INSERT INTO credit_ledger (id, org_id, delta, reason, reference, created_at) VALUES (?, ?, ?, ?, ?, ?)').run(full.id, full.orgId, full.delta, full.reason, full.reference, full.createdAt);
        return full;
      },
      async entries(orgId, limit = 100) {
        return sqlite.prepare('SELECT * FROM credit_ledger WHERE org_id = ? ORDER BY created_at DESC LIMIT ?').all(orgId, limit);
      },
    },
    jobStore: {
      async enqueue(input) {
        const job = { ...input, id: `job-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, status: 'queued', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
        sqlite.prepare('INSERT INTO generations (id, org_id, user_id, model_id, status, idempotency_key, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)').run(job.id, job.orgId, 'system', 'test-model', job.status, job.id, job.createdAt);
        return job;
      },
      async get(jobId) {
        const row = sqlite.prepare('SELECT * FROM generations WHERE id = ?').get(jobId);
        if (!row) return null;
        return { id: row.id, type: 'image', status: row.status, payload: {}, orgId: row.org_id, createdAt: row.created_at, updatedAt: row.created_at };
      },
      async update(jobId, update) {
        if (update.status) sqlite.prepare('UPDATE generations SET status = ?, completed_at = ? WHERE id = ?').run(update.status, update.status === 'completed' || update.status === 'failed' ? new Date().toISOString() : null, jobId);
        return this.get(jobId);
      },
      async listByOrg(orgId, limit = 50) {
        return sqlite.prepare('SELECT * FROM generations WHERE org_id = ? ORDER BY created_at DESC LIMIT ?').all(orgId, limit).map(row => ({ id: row.id, type: 'image', status: row.status, payload: {}, orgId: row.org_id, createdAt: row.created_at, updatedAt: row.created_at }));
      },
    },
  };
}

describe('SQLite control plane — end-to-end generation flow', () => {
  beforeAll(() => { try { require('fs').unlinkSync(TEST_DB); } catch {} });

  it('reserves credits, enqueues a job, completes it, and settles', async () => {
    const { ledgerStore, jobStore } = createStores();
    const ledger = new CreditLedger(ledgerStore);
    const orgId = 'org-e2e-test';

    // 1. Grant credits
    await ledger.credit(orgId, 50, 'subscription_credit', 'sub-e2e');
    expect(await ledger.getBalance(orgId)).toBe(50);

    // 2. Reserve credits for a generation
    await ledger.reserve(orgId, 3, 'gen-e2e-1');
    expect(await ledger.getBalance(orgId)).toBe(47);

    // 3. Enqueue the job
    const job = await jobStore.enqueue({ type: 'image', payload: { model: { id: 'test' } }, orgId });
    expect(job.status).toBe('queued');

    // 4. Worker picks it up and processes
    await jobStore.update(job.id, { status: 'processing' });
    const processing = await jobStore.get(job.id);
    expect(processing.status).toBe('processing');

    // 5. Worker completes it
    await jobStore.update(job.id, { status: 'completed', result: { id: job.id, status: 'completed', url: 'https://cdn/generated.png' } });
    const completed = await jobStore.get(job.id);
    expect(completed.status).toBe('completed');

    // 6. Settle credits
    const { refund } = await ledger.settle(orgId, 3, 2, 'gen-e2e-1');
    expect(refund).not.toBeNull();
    expect(refund.delta).toBe(1);
    expect(await ledger.getBalance(orgId)).toBe(48); // 47 + 1 refund = 48
  });

  it('refunds credits on job failure', async () => {
    const { ledgerStore, jobStore } = createStores();
    const ledger = new CreditLedger(ledgerStore);
    const orgId = 'org-fail-test';

    await ledger.credit(orgId, 20, 'subscription_credit', 'sub-fail');
    await ledger.reserve(orgId, 5, 'gen-fail-1');
    expect(await ledger.getBalance(orgId)).toBe(15);

    const job = await jobStore.enqueue({ type: 'image', payload: {}, orgId });
    await jobStore.update(job.id, { status: 'failed', error: 'Provider error' });

    // Refund
    await ledger.refund(orgId, 5, 'gen-fail-1');
    expect(await ledger.getBalance(orgId)).toBe(20);
  });
});
