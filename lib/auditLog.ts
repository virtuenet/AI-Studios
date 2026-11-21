/**
 * Audit log service using the Drizzle schema.
 *
 * Every state-changing operation in the control plane records an audit event.
 * The log is append-only and queried by org admins and for compliance.
 */

import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import * as schema from './db/schema';

export interface AuditEvent {
  orgId: string;
  userId: string;
  action: string;
  resource: string;
  resourceId: string;
  metadata?: Record<string, unknown> | undefined;
}

/**
 * Create an audit log service backed by the Drizzle schema.
 * The in-memory version (for tests) is a simple array.
 */
export function createAuditLog(db: NodePgDatabase<typeof schema>) {
  return {
    async record(event: AuditEvent): Promise<void> {
      await db.insert(schema.auditLog).values({
        id: `audit-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        orgId: event.orgId,
        userId: event.userId,
        action: event.action,
        resource: event.resource,
        resourceId: event.resourceId,
        metadata: event.metadata ?? null,
        createdAt: new Date(),
      });
    },

    async query(orgId: string, limit = 100): Promise<AuditEvent[]> {
      const rows = await db
        .select()
        .from(schema.auditLog)
        .where(eq(schema.auditLog.orgId, orgId))
        .limit(limit);

      return rows.map((row) => ({
        orgId: row.orgId,
        userId: row.userId,
        action: row.action,
        resource: row.resource,
        resourceId: row.resourceId,
        metadata: row.metadata as Record<string, unknown> | undefined,
      }));
    },
  };
}

/** In-memory audit log for tests and single-process development. */
export function createMemoryAuditLog() {
  const events: Array<AuditEvent & { id: string; createdAt: string }> = [];

  return {
    async record(event: AuditEvent): Promise<void> {
      events.push({
        ...event,
        id: `audit-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        createdAt: new Date().toISOString(),
      });
    },

    async query(orgId: string, limit = 100) {
      return events
        .filter((e) => e.orgId === orgId)
        .slice(-limit)
        .map(({ id, createdAt, ...rest }) => rest);
    },
  };
}
