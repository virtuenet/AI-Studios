import {
  pgTable,
  text,
  timestamp,
  integer,
  jsonb,
  index,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

// ── Tenancy ──────────────────────────────────────────────────────

export const organizations = pgTable('organizations', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  planId: text('plan_id').notNull().default('free'),
  stripeCustomerId: text('stripe_customer_id'),
  billingEmail: text('billing_email'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const memberships = pgTable('memberships', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  orgId: text('org_id').notNull().references(() => organizations.id),
  role: text('role', { enum: ['owner', 'admin', 'member'] }).notNull().default('member'),
  invitedAt: timestamp('invited_at'),
  acceptedAt: timestamp('accepted_at'),
}, (table) => ({
  userOrgIdx: uniqueIndex('memberships_user_org_idx').on(table.userId, table.orgId),
  orgIdx: index('memberships_org_idx').on(table.orgId),
}));

// ── Credit ledger ────────────────────────────────────────────────

export const creditLedger = pgTable('credit_ledger', {
  id: text('id').primaryKey(),
  orgId: text('org_id').notNull().references(() => organizations.id),
  delta: integer('delta').notNull(),
  reason: text('reason', {
    enum: [
      'subscription_credit',
      'credit_pack_purchase',
      'generation_reserve',
      'generation_settle',
      'generation_refund',
      'admin_adjustment',
    ],
  }).notNull(),
  reference: text('reference').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
}, (table) => ({
  orgIdx: index('ledger_org_idx').on(table.orgId),
  referenceIdx: index('ledger_reference_idx').on(table.reference),
}));

// ── Generations ──────────────────────────────────────────────────

export const generations = pgTable('generations', {
  id: text('id').primaryKey(),
  orgId: text('org_id').notNull().references(() => organizations.id),
  userId: text('user_id').notNull(),
  modelId: text('model_id').notNull(),
  status: text('status', {
    enum: ['queued', 'processing', 'completed', 'failed', 'cancelled'],
  }).notNull().default('queued'),
  providerJobId: text('provider_job_id'),
  estimatedCost: integer('estimated_cost').notNull().default(0),
  actualCost: integer('actual_cost'),
  idempotencyKey: text('idempotency_key').notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  completedAt: timestamp('completed_at'),
}, (table) => ({
  orgIdx: index('generations_org_idx').on(table.orgId),
  idempotencyIdx: uniqueIndex('generations_idempotency_idx').on(table.idempotencyKey),
}));

// ── Assets ───────────────────────────────────────────────────────

export const assets = pgTable('assets', {
  id: text('id').primaryKey(),
  orgId: text('org_id').notNull().references(() => organizations.id),
  projectId: text('project_id'),
  generationId: text('generation_id').references(() => generations.id),
  kind: text('kind', { enum: ['image', 'video', 'audio'] }).notNull(),
  storageKey: text('storage_key').notNull(),
  url: text('url').notNull(),
  filename: text('filename'),
  width: integer('width'),
  height: integer('height'),
  durationSeconds: integer('duration_seconds'),
  sizeBytes: integer('size_bytes'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
}, (table) => ({
  orgIdx: index('assets_org_idx').on(table.orgId),
}));

// ── Projects ─────────────────────────────────────────────────────

export const projects = pgTable('projects', {
  id: text('id').primaryKey(),
  orgId: text('org_id').notNull().references(() => organizations.id),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}, (table) => ({
  orgIdx: index('projects_org_idx').on(table.orgId),
}));

// ── API keys ─────────────────────────────────────────────────────

export const apiKeys = pgTable('api_keys', {
  id: text('id').primaryKey(),
  orgId: text('org_id').notNull().references(() => organizations.id),
  name: text('name').notNull(),
  prefix: text('prefix').notNull(),
  hash: text('hash').notNull(),
  scopes: jsonb('scopes').notNull().default('[]'),
  lastUsedAt: timestamp('last_used_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
}, (table) => ({
  orgIdx: index('api_keys_org_idx').on(table.orgId),
  hashIdx: uniqueIndex('api_keys_hash_idx').on(table.hash),
}));

// ── Audit log ────────────────────────────────────────────────────

export const auditLog = pgTable('audit_log', {
  id: text('id').primaryKey(),
  orgId: text('org_id').notNull().references(() => organizations.id),
  userId: text('user_id').notNull(),
  action: text('action').notNull(),
  resource: text('resource').notNull(),
  resourceId: text('resource_id').notNull(),
  metadata: jsonb('metadata'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
}, (table) => ({
  orgIdx: index('audit_org_idx').on(table.orgId),
}));
