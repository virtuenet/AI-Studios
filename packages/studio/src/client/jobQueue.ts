/**
 * In-memory job queue for the SaaS control plane.
 *
 * In production this is backed by BullMQ/Redis or Inngest/Trigger.dev.
 * The interface is intentionally simple so the swap is mechanical.
 *
 * Flow:
 *   1. enqueue(job)      → returns jobId
 *   2. worker processes   → calls handler(job)
 *   3. handler updates    → store.update(jobId, status, result)
 *   4. client polls       → store.get(jobId)
 */

import type { GenerationResult } from './transport';

export type JobStatus = GenerationResult['status'];

export interface Job<T = Record<string, unknown>> {
  id: string;
  type: string;
  status: JobStatus;
  payload: T;
  result?: GenerationResult;
  error?: string;
  orgId: string;
  createdAt: string;
  updatedAt: string;
}

export interface JobStore {
  enqueue<T>(job: Omit<Job<T>, 'id' | 'status' | 'createdAt' | 'updatedAt'>): Promise<Job<T>>;
  get<T>(jobId: string): Promise<Job<T> | null>;
  update<T>(jobId: string, update: Partial<Pick<Job<T>, 'status' | 'result' | 'error'>>): Promise<Job<T>>;
  listByOrg(orgId: string, limit?: number): Promise<Job[]>;
}

/** In-memory store for tests and single-process development. */
export function createMemoryJobStore(): JobStore {
  const jobs = new Map<string, Job>();

  return {
    async enqueue<T>(input: Omit<Job<T>, 'id' | 'status' | 'createdAt' | 'updatedAt'>): Promise<Job<T>> {
      const job: Job<T> = {
        ...input,
        id: `job-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        status: 'queued',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      jobs.set(job.id, job as Job);
      return job;
    },

    async get<T>(jobId: string): Promise<Job<T> | null> {
      return (jobs.get(jobId) as Job<T> | undefined) || null;
    },

    async update<T>(jobId: string, update: Partial<Pick<Job<T>, 'status' | 'result' | 'error'>>): Promise<Job<T>> {
      const existing = jobs.get(jobId);
      if (!existing) throw new Error(`Job ${jobId} not found`);
      const updated = { ...existing, ...update, updatedAt: new Date().toISOString() } as Job<T>;
      jobs.set(jobId, updated as Job);
      return updated;
    },

    async listByOrg(orgId: string, limit = 50): Promise<Job[]> {
      return Array.from(jobs.values())
        .filter((job) => job.orgId === orgId)
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .slice(0, limit);
    },
  };
}

export type JobHandler<T = Record<string, unknown>> = (job: Job<T>) => Promise<GenerationResult>;

/**
 * Simple worker that processes jobs sequentially.
 * In production, replace with a BullMQ worker or Trigger.dev task.
 */
export function createWorker<T>(
  store: JobStore,
  handler: JobHandler<T>,
  { pollIntervalMs = 1000 }: { pollIntervalMs?: number } = {},
): { start: () => void; stop: () => void } {
  let running = false;
  let timer: ReturnType<typeof setInterval> | null = null;

  async function processNext(): Promise<void> {
    // In a real implementation, use BLPOP or a webhook to avoid polling.
    // For the in-memory store, we'd need a different approach.
    // This is a placeholder that demonstrates the interface.
  }

  return {
    start() {
      running = true;
      timer = setInterval(processNext, pollIntervalMs);
    },
    stop() {
      running = false;
      if (timer) clearInterval(timer);
      timer = null;
    },
  };
}
