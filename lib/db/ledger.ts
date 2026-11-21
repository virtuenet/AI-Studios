/**
 * Drizzle/Postgres implementation of the LedgerStore interface.
 *
 * Usage:
 *   import { drizzle } from 'drizzle-orm/node-postgres';
 *   import { Pool } from 'pg';
 *   import * as schema from './schema';
 *
 *   const pool = new Pool({ connectionString: process.env.DATABASE_URL });
 *   const db = drizzle(pool, { schema });
 *   const ledger = createDrizzleLedgerStore(db);
 */

import { eq, sql } from 'drizzle-orm';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import type { LedgerStore } from '../../packages/studio/src/client/creditLedger';
import type { CreditLedgerEntry } from '../../packages/studio/src/client/dataModel';
import * as schema from './schema';

export { type LedgerStore };

/** Map a Drizzle row to the data-model type. */
function toEntry(row: typeof schema.creditLedger.$inferSelect): CreditLedgerEntry {
  return {
    id: row.id,
    orgId: row.orgId,
    delta: row.delta,
    reason: row.reason,
    reference: row.reference,
    createdAt: row.createdAt.toISOString(),
  };
}

export function createDrizzleLedgerStore(
  db: NodePgDatabase<typeof schema>,
): LedgerStore {
  return {
    async getBalance(orgId: string): Promise<number> {
      const result = await db
        .select({ total: sql<number>`COALESCE(SUM(${schema.creditLedger.delta}), 0)` })
        .from(schema.creditLedger)
        .where(eq(schema.creditLedger.orgId, orgId));
      return Number(result[0]?.total ?? 0);
    },

    async append(entry: Omit<CreditLedgerEntry, 'id'>): Promise<CreditLedgerEntry> {
      const full: CreditLedgerEntry = {
        ...entry,
        id: `ledger-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      };
      await db.insert(schema.creditLedger).values({
        id: full.id,
        orgId: full.orgId,
        delta: full.delta,
        reason: full.reason,
        reference: full.reference,
        createdAt: new Date(full.createdAt),
      });
      return full;
    },

    async entries(orgId: string, limit = 100): Promise<CreditLedgerEntry[]> {
      const rows = await db
        .select()
        .from(schema.creditLedger)
        .where(eq(schema.creditLedger.orgId, orgId))
        .orderBy(sql`created_at DESC`)
        .limit(limit);
      return rows.map(toEntry);
    },
  };
}
