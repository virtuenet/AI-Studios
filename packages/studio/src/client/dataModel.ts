/**
 * SaaS data model types (Phase 1).
 *
 * These are plain TypeScript interfaces that define the control-plane entities.
 * They have no runtime dependency — they are the contract that a Postgres
 * schema, a REST API, and a React context all share. An actual implementation
 * adds Drizzle/Prisma models and Zod validators that satisfy these shapes.
 *
 * Every entity that holds user data includes `orgId` for tenant isolation.
 */

// ── Identity & tenancy ──────────────────────────────────────────────

export interface Organization {
  id: string;
  name: string;
  slug: string;
  planId: string;
  stripeCustomerId?: string;
  billingEmail?: string;
  createdAt: string;
}

export interface Membership {
  userId: string;
  orgId: string;
  role: 'owner' | 'admin' | 'member';
  invitedAt?: string;
  acceptedAt?: string;
}

// ── Plans & entitlements ────────────────────────────────────────────

export interface Plan {
  id: string;
  name: string;
  monthlyCredits: number;
  maxSeats: number;
  features: string[];
}

export interface Entitlement {
  orgId: string;
  feature: string;
  limit: number; // 0 = disabled, -1 = unlimited
}

export type FeatureName =
  | 'maxConcurrency'
  | 'maxVideoDurationSeconds'
  | 'enable4K'
  | 'enableQC'
  | 'storageBytes'
  | 'apiAccess'
  | 'sso'
  | 'auditLog';

// ── Credit ledger ───────────────────────────────────────────────────

export type LedgerReason =
  | 'subscription_credit'
  | 'credit_pack_purchase'
  | 'generation_reserve'
  | 'generation_settle'
  | 'generation_refund'
  | 'admin_adjustment';

export interface CreditLedgerEntry {
  id: string;
  orgId: string;
  delta: number; // positive = credit, negative = debit
  reason: LedgerReason;
  reference: string; // e.g. generationId, stripeInvoiceId
  createdAt: string;
}

// ── Generations ─────────────────────────────────────────────────────

export type GenerationStatus =
  | 'queued'
  | 'processing'
  | 'completed'
  | 'failed'
  | 'cancelled';

export interface Generation {
  id: string;
  orgId: string;
  userId: string;
  modelId: string;
  status: GenerationStatus;
  providerJobId?: string;
  estimatedCost: number;
  actualCost?: number;
  idempotencyKey: string;
  createdAt: string;
  completedAt?: string;
}

// ── Assets ──────────────────────────────────────────────────────────

export interface Asset {
  id: string;
  orgId: string;
  projectId?: string;
  generationId?: string;
  kind: 'image' | 'video' | 'audio';
  storageKey: string;
  url: string;
  filename?: string;
  width?: number;
  height?: number;
  durationSeconds?: number;
  sizeBytes?: number;
  createdAt: string;
}

// ── Projects ────────────────────────────────────────────────────────

export interface Project {
  id: string;
  orgId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

// ── API keys ────────────────────────────────────────────────────────

export interface ApiKey {
  id: string;
  orgId: string;
  name: string;
  prefix: string; // first 8 chars of the key for display
  scopes: string[];
  lastUsedAt?: string;
  createdAt: string;
}

// ── Audit log ───────────────────────────────────────────────────────

export interface AuditEvent {
  id: string;
  orgId: string;
  userId: string;
  action: string;
  resource: string;
  resourceId: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
}
