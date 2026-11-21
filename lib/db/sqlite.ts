/**
 * SQLite database for the SaaS control plane.
 *
 * Uses better-sqlite3 for synchronous, in-process persistence that survives
 * restarts. In production, swap to Postgres via the same Drizzle schema.
 *
 * Database file: .data/ai-studios.db (gitignored)
 */

import Database from 'better-sqlite3';
import { mkdirSync } from 'fs';
import { dirname } from 'path';
import type { LedgerStore } from '../../packages/studio/src/client/creditLedger';
import type { CreditLedgerEntry } from '../../packages/studio/src/client/dataModel';
import type { JobStore, Job } from '../../packages/studio/src/client/jobQueue';

type JobStatus = 'queued' | 'processing' | 'completed' | 'failed' | 'cancelled';

const DB_PATH = process.env.SQLITE_PATH || '.data/ai-studios.db';
mkdirSync(dirname(DB_PATH), { recursive: true });

const sqlite = new Database(DB_PATH);
sqlite.pragma('journal_mode = WAL');
sqlite.pragma('foreign_keys = ON');

// ── Auto-migrate ────────────────────────────────────────────────

const MIGRATIONS = [
  `CREATE TABLE IF NOT EXISTS organizations (
    id TEXT PRIMARY KEY, name TEXT NOT NULL, slug TEXT NOT NULL UNIQUE,
    plan_id TEXT NOT NULL DEFAULT 'free', stripe_customer_id TEXT,
    billing_email TEXT, created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`,
  `CREATE TABLE IF NOT EXISTS credit_ledger (
    id TEXT PRIMARY KEY, org_id TEXT NOT NULL,
    delta INTEGER NOT NULL,
    reason TEXT NOT NULL,
    reference TEXT NOT NULL, created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`,
  `CREATE INDEX IF NOT EXISTS idx_ledger_org ON credit_ledger(org_id)`,
  `CREATE TABLE IF NOT EXISTS generations (
    id TEXT PRIMARY KEY, org_id TEXT NOT NULL,
    user_id TEXT NOT NULL, model_id TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'queued',
    provider_job_id TEXT, estimated_cost INTEGER NOT NULL DEFAULT 0,
    actual_cost INTEGER, idempotency_key TEXT NOT NULL UNIQUE,
    created_at TEXT NOT NULL DEFAULT (datetime('now')), completed_at TEXT
  )`,
  `CREATE INDEX IF NOT EXISTS idx_generations_org ON generations(org_id)`,
  `CREATE TABLE IF NOT EXISTS memberships (
    id TEXT PRIMARY KEY, user_id TEXT NOT NULL, org_id TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'member',
    invited_at TEXT, accepted_at TEXT,
    UNIQUE(user_id, org_id)
  )`,
  `CREATE TABLE IF NOT EXISTS api_keys (
    id TEXT PRIMARY KEY, org_id TEXT NOT NULL,
    name TEXT NOT NULL, prefix TEXT NOT NULL, hash TEXT NOT NULL,
    scopes TEXT NOT NULL DEFAULT '[]', last_used_at TEXT, created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`,
  `CREATE TABLE IF NOT EXISTS audit_log (
    id TEXT PRIMARY KEY, org_id TEXT NOT NULL,
    user_id TEXT NOT NULL, action TEXT NOT NULL,
    resource TEXT NOT NULL, resource_id TEXT NOT NULL,
    metadata TEXT, created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`,
];

for (const migration of MIGRATIONS) {
  sqlite.exec(migration);
}

console.log(`[db] SQLite ready at ${DB_PATH}`);

// ── SQLite LedgerStore ───────────────────────────────────────────

export const sqliteLedgerStore: LedgerStore = {
  async getBalance(orgId: string): Promise<number> {
    const row = sqlite.prepare(
      'SELECT COALESCE(SUM(delta), 0) as total FROM credit_ledger WHERE org_id = ?'
    ).get(orgId) as { total: number };
    return row.total;
  },

  async append(entry: Omit<CreditLedgerEntry, 'id'>): Promise<CreditLedgerEntry> {
    const full: CreditLedgerEntry = {
      ...entry,
      id: `ledger-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    };
    sqlite.prepare(
      'INSERT INTO credit_ledger (id, org_id, delta, reason, reference, created_at) VALUES (?, ?, ?, ?, ?, ?)'
    ).run(full.id, full.orgId, full.delta, full.reason, full.reference, full.createdAt);
    return full;
  },

  async entries(orgId: string, limit = 100): Promise<CreditLedgerEntry[]> {
    return sqlite.prepare(
      'SELECT * FROM credit_ledger WHERE org_id = ? ORDER BY created_at DESC LIMIT ?'
    ).all(orgId, limit) as CreditLedgerEntry[];
  },
};

// ── SQLite JobStore ──────────────────────────────────────────────

export const sqliteJobStore: JobStore = {
  async enqueue<T>(input: Omit<Job<T>, 'id' | 'status' | 'createdAt' | 'updatedAt'>): Promise<Job<T>> {
    const job: Job<T> = {
      ...input,
      id: `job-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      status: 'queued' as JobStatus,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    sqlite.prepare(
      'INSERT INTO generations (id, org_id, user_id, model_id, status, idempotency_key, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
    ).run(job.id, job.orgId, 'system', ((input.payload as Record<string,unknown>)?.['model'] as Record<string,unknown>)?.['id'] as string || 'unknown', job.status, job.id, job.createdAt);
    return job;
  },

  async get<T>(jobId: string): Promise<Job<T> | null> {
    const row = sqlite.prepare('SELECT * FROM generations WHERE id = ?').get(jobId) as Record<string, unknown> | undefined;
    if (!row) return null;
    return {
      id: row.id as string, type: 'image', status: row.status as JobStatus,
      payload: {} as T, orgId: row.org_id as string,
      createdAt: row.created_at as string, updatedAt: row.created_at as string,
    };
  },

  async update<T>(jobId: string, update: Partial<Pick<Job<T>, 'status' | 'result' | 'error'>>): Promise<Job<T>> {
    if (update.status) {
      sqlite.prepare('UPDATE generations SET status = ?, completed_at = ? WHERE id = ?').run(
        update.status,
        update.status === 'completed' || update.status === 'failed' ? new Date().toISOString() : null,
        jobId
      );
    }
    return (await this.get(jobId))!;
  },

  async listByOrg(orgId: string, limit = 50): Promise<Job[]> {
    const rows = sqlite.prepare(
      'SELECT * FROM generations WHERE org_id = ? ORDER BY created_at DESC LIMIT ?'
    ).all(orgId, limit) as Record<string, unknown>[];
    return rows.map((row) => ({
      id: row.id as string, type: 'image', status: row.status as JobStatus,
      payload: {}, orgId: row.org_id as string,
      createdAt: row.created_at as string, updatedAt: row.created_at as string,
    }));
  },
};

export function closeDatabase(): void {
  sqlite.close();
}
