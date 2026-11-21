/**
 * Generation worker entry point (Phase 4).
 *
 * Consumes jobs from BullMQ/Redis, calls Muapi with the server-held key,
 * updates job status in Postgres, and settles the credit ledger.
 *
 * In development, this is a polling loop against the in-memory job store.
 * In production, swap to BullMQ worker with Redis.
 */

const { createMemoryJobStore } = require('../packages/studio/src/client/jobQueue');
const { createMemoryLedgerStore, CreditLedger } = require('../packages/studio/src/client/creditLedger');

const jobStore = createMemoryJobStore();
const ledger = new CreditLedger(createMemoryLedgerStore());

const MUAPI_KEY = process.env.MUAPI_API_KEY || '';
const MUAPI_BASE = 'https://api.muapi.ai';
const POLL_INTERVAL_MS = 2000;

async function processJob(job) {
  console.log(`[worker] processing job ${job.id} (type=${job.type}, org=${job.orgId})`);

  try {
    await jobStore.update(job.id, { status: 'processing' });

    // TODO: call Muapi with the server-held key
    // const response = await fetch(`${MUAPI_BASE}/api/v1/predictions`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json', 'x-api-key': MUAPI_KEY },
    //   body: JSON.stringify(job.payload),
    // });

    // Simulate processing
    const result = {
      id: job.id,
      status: 'completed',
      url: 'https://cdn.muapi.ai/generated.png',
    };

    await jobStore.update(job.id, { status: 'completed', result });

    // Settle the credit reservation
    const reference = `gen-${Date.now()}-${job.payload.model?.id || 'unknown'}`;
    await ledger.settle(job.orgId, 1, 1, reference);

    console.log(`[worker] job ${job.id} completed`);
  } catch (error) {
    console.error(`[worker] job ${job.id} failed:`, error.message);
    await jobStore.update(job.id, { status: 'failed', error: error.message });

    // Refund reserved credits
    const reference = `gen-${Date.now()}-${job.payload.model?.id || 'unknown'}`;
    await ledger.refund(job.orgId, 1, reference);
  }
}

async function main() {
  console.log('[worker] starting generation worker');
  console.log(`[worker] MUAPI_KEY ${MUAPI_KEY ? 'configured' : 'NOT SET — jobs will be simulated'}`);

  // In production, this is a BullMQ worker:
  //   const worker = new Worker('generations', processJob, { connection: redis });
  // For development, poll the in-memory store.

  while (true) {
    // The in-memory store doesn't support "get next queued job" efficiently.
    // In production, BullMQ's BLPOP handles this.
    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
  }
}

main().catch((error) => {
  console.error('[worker] fatal error:', error);
  process.exit(1);
});
