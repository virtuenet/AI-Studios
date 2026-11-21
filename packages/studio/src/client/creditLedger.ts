/**
 * Credit ledger — append-only double-entry accounting.
 *
 * This is a pure TypeScript implementation with an in-memory store for tests.
 * In production, the store interface is implemented by a Drizzle/Postgres
 * repository. The ledger is never mutable: every operation is an append.
 *
 * Pattern:
 *   1. reserve(orgId, amount, reference) — holds credits for a generation
 *   2. settle(orgId, amount, reference)  — confirms the actual cost
 *   3. refund(orgId, amount, reference)  — returns reserved credits on failure
 */

import type { CreditLedgerEntry, LedgerReason } from './dataModel';

// ── Store interface (swap for Postgres) ────────────────────────────

export interface LedgerStore {
  getBalance(orgId: string): Promise<number>;
  append(entry: Omit<CreditLedgerEntry, 'id'>): Promise<CreditLedgerEntry>;
  entries(orgId: string, limit?: number): Promise<CreditLedgerEntry[]>;
}

// ── In-memory store (tests / single-process dev) ──────────────────

export function createMemoryLedgerStore(): LedgerStore {
  const entries: CreditLedgerEntry[] = [];

  return {
    async getBalance(orgId: string): Promise<number> {
      return entries
        .filter((entry) => entry.orgId === orgId)
        .reduce((sum, entry) => sum + entry.delta, 0);
    },

    async append(
      entry: Omit<CreditLedgerEntry, 'id'>,
    ): Promise<CreditLedgerEntry> {
      const full: CreditLedgerEntry = {
        ...entry,
        id: `ledger-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      };
      entries.push(full);
      return full;
    },

    async entries(
      orgId: string,
      limit = 100,
    ): Promise<CreditLedgerEntry[]> {
      return entries
        .filter((entry) => entry.orgId === orgId)
        .slice(-limit);
    },
  };
}

// ── Credit operations ─────────────────────────────────────────────

export class CreditLedger {
  constructor(private store: LedgerStore) {}

  /** Grant subscription or purchase credits. */
  async credit(
    orgId: string,
    amount: number,
    reason: LedgerReason,
    reference: string,
  ): Promise<CreditLedgerEntry> {
    if (amount <= 0) throw new Error('credit amount must be positive');
    return this.store.append({
      orgId,
      delta: amount,
      reason,
      reference,
      createdAt: new Date().toISOString(),
    });
  }

  /** Reserve credits before a generation. Fails if balance is insufficient. */
  async reserve(
    orgId: string,
    amount: number,
    reference: string,
  ): Promise<CreditLedgerEntry> {
    if (amount <= 0) throw new Error('reserve amount must be positive');
    const balance = await this.store.getBalance(orgId);
    if (balance < amount) {
      throw new InsufficientCreditsError(orgId, balance, amount);
    }
    return this.store.append({
      orgId,
      delta: -amount,
      reason: 'generation_reserve',
      reference,
      createdAt: new Date().toISOString(),
    });
  }

  /** Settle the actual cost after generation completes. */
  async settle(
    orgId: string,
    reservedAmount: number,
    actualAmount: number,
    reference: string,
  ): Promise<{ refund: CreditLedgerEntry | null; settle: CreditLedgerEntry }> {
    // Return the over-reserved amount
    const overReserved = reservedAmount - actualAmount;
    const refund =
      overReserved > 0
        ? await this.store.append({
            orgId,
            delta: overReserved,
            reason: 'generation_refund',
            reference,
            createdAt: new Date().toISOString(),
          })
        : null;

    // If actual exceeds reserved, charge the difference
    if (actualAmount > reservedAmount) {
      await this.store.append({
        orgId,
        delta: -(actualAmount - reservedAmount),
        reason: 'generation_settle',
        reference,
        createdAt: new Date().toISOString(),
      });
    }

    const settleEntry = await this.store.append({
      orgId,
      delta: 0, // net effect already applied; this is the audit record
      reason: 'generation_settle',
      reference,
      createdAt: new Date().toISOString(),
    });

    return { refund, settle: settleEntry };
  }

  /** Refund a failed generation. */
  async refund(
    orgId: string,
    amount: number,
    reference: string,
  ): Promise<CreditLedgerEntry> {
    if (amount <= 0) throw new Error('refund amount must be positive');
    return this.store.append({
      orgId,
      delta: amount,
      reason: 'generation_refund',
      reference,
      createdAt: new Date().toISOString(),
    });
  }

  async getBalance(orgId: string): Promise<number> {
    return this.store.getBalance(orgId);
  }
}

export class InsufficientCreditsError extends Error {
  constructor(
    public orgId: string,
    public balance: number,
    public required: number,
  ) {
    super(`Insufficient credits: have ${balance}, need ${required}`);
    this.name = 'InsufficientCreditsError';
  }
}
