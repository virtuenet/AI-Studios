import { describe, it, expect, afterAll, beforeAll } from 'vitest';
import Database from 'better-sqlite3';
import { CreditLedger } from '../../packages/studio/src/client/creditLedger';

const TEST_DB = '.data/test-persistence.db';
let sqlite;

// Create a standalone SQLite instance for this test file only
function createTestStores() {
  const { mkdirSync } = require('fs');
  const { dirname } = require('path');
  mkdirSync(dirname(TEST_DB), { recursive: true });

  sqlite = new Database(TEST_DB);
  sqlite.pragma('journal_mode = WAL');
  sqlite.exec('CREATE TABLE IF NOT EXISTS credit_ledger (id TEXT PRIMARY KEY, org_id TEXT NOT NULL, delta INTEGER NOT NULL, reason TEXT NOT NULL, reference TEXT NOT NULL, created_at TEXT NOT NULL DEFAULT (datetime(\'now\')))');
  sqlite.exec('CREATE TABLE IF NOT EXISTS generations (id TEXT PRIMARY KEY, org_id TEXT NOT NULL, user_id TEXT NOT NULL, model_id TEXT NOT NULL, status TEXT NOT NULL DEFAULT \'queued\', estimated_cost INTEGER NOT NULL DEFAULT 0, idempotency_key TEXT NOT NULL UNIQUE, created_at TEXT NOT NULL DEFAULT (datetime(\'now\')), completed_at TEXT)');

  const ledgerStore = {
    async getBalance(orgId) {
      const row = sqlite.prepare('SELECT COALESCE(SUM(delta), 0) as total FROM credit_ledger WHERE org_id = ?').get(orgId);
      return row.total;
    },
    async append(entry) {
      const full = { ...entry, id: `ledger-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` };
      sqlite.prepare('INSERT INTO credit_ledger (id, org_id, delta, reason, reference, created_at) VALUES (?, ?, ?, ?, ?, ?)').run(full.id, full.orgId, full.delta, full.reason, full.reference, full.createdAt);
      return full;
    },
    async entries(orgId, limit = 100) {
      return sqlite.prepare('SELECT * FROM credit_ledger WHERE org_id = ? ORDER BY created_at DESC LIMIT ?').all(orgId, limit);
    },
  };

  const jobStore = {
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
      const rows = sqlite.prepare('SELECT * FROM generations WHERE org_id = ? ORDER BY created_at DESC LIMIT ?').all(orgId, limit);
      return rows.map(row => ({ id: row.id, type: 'image', status: row.status, payload: {}, orgId: row.org_id, createdAt: row.created_at, updatedAt: row.created_at }));
    },
  };

  return { ledgerStore, jobStore };
}

describe('SQLite persistence (isolated)', () => {
  beforeAll(() => {
    try { require('fs').unlinkSync(TEST_DB); } catch {}
  });

  afterAll(() => {
    if (sqlite) sqlite.close();
  });

  it('credit ledger persists and survives re-reads', async () => {
    const { ledgerStore } = createTestStores();
    const ledger = new CreditLedger(ledgerStore);

    await ledger.credit('org-persist', 100, 'subscription_credit', 'sub-1');
    expect(await ledger.getBalance('org-persist')).toBe(100);

    await ledger.reserve('org-persist', 30, 'gen-1');
    expect(await ledger.getBalance('org-persist')).toBe(70);

    await ledger.credit('org-persist', 50, 'credit_pack_purchase', 'pack-1');
    expect(await ledger.getBalance('org-persist')).toBe(120);
  });

  it('job store persists enqueued and updated jobs', async () => {
    const { jobStore } = createTestStores();
    const job = await jobStore.enqueue({ type: 'image', payload: {}, orgId: 'org-persist' });
    const retrieved = await jobStore.get(job.id);
    expect(retrieved).not.toBeNull();
    expect(retrieved.status).toBe('queued');

    await jobStore.update(job.id, { status: 'completed' });
    expect((await jobStore.get(job.id)).status).toBe('completed');
  });

  it('isolates data between organizations', async () => {
    const { ledgerStore } = createTestStores();
    const ledger = new CreditLedger(ledgerStore);
    await ledger.credit('org-a', 50, 'subscription_credit', 'iso-a');
    await ledger.credit('org-b', 200, 'subscription_credit', 'iso-b');
    expect(await ledger.getBalance('org-a')).toBe(50);
    expect(await ledger.getBalance('org-b')).toBe(200);
  });
});
