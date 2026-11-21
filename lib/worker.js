/**
 * Generation worker (Phase 4).
 *
 * Consumes queued jobs from the SQLite job store, calls the Muapi API
 * with the server-held key, updates job status, and settles credits.
 *
 * In production with BullMQ/Redis, this becomes a BullMQ worker processor.
 * With SQLite, it polls for queued jobs.
 */

const { sqliteLedgerStore, sqliteJobStore, closeDatabase } = require('../lib/db/sqlite');
const { CreditLedger } = require('../packages/studio/src/client/creditLedger');

const ledger = new CreditLedger(sqliteLedgerStore);
const MUAPI_KEY = process.env.MUAPI_API_KEY || '';
const MUAPI_BASE = process.env.MUAPI_BASE || 'https://api.muapi.ai';
const POLL_INTERVAL_MS = 2000;
const MAX_CONCURRENT = 2;

let running = true;

async function processJob(job) {
  const startTime = Date.now();
  console.log(`[worker] processing job ${job.id} (type=${job.type}, org=${job.orgId})`);

  try {
    await sqliteJobStore.update(job.id, { status: 'processing' });

    // Call Muapi with the server-held key
    let result;
    if (MUAPI_KEY) {
      const response = await fetch(`${MUAPI_BASE}/api/v1/predictions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': MUAPI_KEY,
        },
        body: JSON.stringify({
          model: (job.payload?.model?.id) || 'flux-2-klein-4b',
          prompt: job.payload?.prompt || 'a test generation',
          ...job.payload,
        }),
      });

      if (!response.ok) {
        const errBody = await response.text().catch(() => '');
        throw new Error(`Muapi ${response.status}: ${errBody.slice(0, 200)}`);
      }

      const submitData = await response.json();
      const requestId = submitData.request_id || submitData.id;

      // Poll for the result
      result = await pollMuapiResult(requestId);
    } else {
      // No Muapi key configured — simulate a successful generation
      console.log('[worker] MUAPI_KEY not set — simulating generation');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      result = {
        status: 'completed',
        url: 'https://cdn.muapi.ai/generated.png',
        outputs: ['https://cdn.muapi.ai/generated.png'],
      };
    }

    await sqliteJobStore.update(job.id, {
      status: 'completed',
      result: {
        id: job.id,
        status: 'completed',
        url: result.url || result.outputs?.[0],
        outputs: result.outputs,
        requestId: result.request_id,
      },
    });

    // Settle the credit reservation
    const reference = `gen-${Date.now()}-${(job.payload?.model?.id) || 'unknown'}`;
    await ledger.settle(job.orgId, 1, 1, reference);

    const duration = Date.now() - startTime;
    console.log(`[worker] job ${job.id} completed in ${duration}ms`);
  } catch (error) {
    console.error(`[worker] job ${job.id} failed:`, error.message);
    await sqliteJobStore.update(job.id, {
      status: 'failed',
      error: error.message,
    });

    // Refund reserved credits
    const reference = `gen-${Date.now()}-${(job.payload?.model?.id) || 'unknown'}`;
    try { await ledger.refund(job.orgId, 1, reference); } catch {}
  }
}

async function pollMuapiResult(requestId, maxAttempts = 300, interval = 2000) {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    await new Promise((resolve) => setTimeout(resolve, interval));

    const response = await fetch(
      `${MUAPI_BASE}/api/v1/predictions/${requestId}/result`,
      { headers: { 'x-api-key': MUAPI_KEY } }
    );

    if (!response.ok) {
      if (response.status >= 500 && attempt < maxAttempts - 1) continue;
      throw new Error(`Muapi poll ${response.status}`);
    }

    const result = await response.json();
    if (result.status === 'completed' || result.status === 'succeeded') {
      return result;
    }
    if (result.status === 'failed' || result.status === 'error') {
      throw new Error(result.error || 'Generation failed');
    }
  }
  throw new Error('Generation timed out');
}

async function processNextBatch() {
  // In SQLite mode, we query for queued jobs directly.
  // In BullMQ mode, the worker receives jobs via Redis.
  try {
    const orgIds = sqliteJobStore.listByOrg ? [''] : []; // We need a different query approach
    // Since listByOrg requires an orgId, use a raw SQL query for all queued jobs
    const sqlite = require('better-sqlite3')(process.env.SQLITE_PATH || '.data/ai-studios.db');
    const rows = sqlite.prepare(
      "SELECT * FROM generations WHERE status = 'queued' ORDER BY created_at ASC LIMIT ?"
    ).all(MAX_CONCURRENT);
    sqlite.close();

    for (const row of rows) {
      if (!running) break;
      await processJob({
        id: row.id,
        type: 'image',
        status: row.status,
        payload: {},
        orgId: row.org_id,
        createdAt: row.created_at,
        updatedAt: row.created_at,
      });
    }
  } catch (error) {
    if (running) console.error('[worker] poll error:', error.message);
  }
}

async function main() {
  console.log('[worker] AI Studios generation worker starting');
  console.log(`[worker] MUAPI_KEY ${MUAPI_KEY ? 'configured' : 'NOT SET — jobs will be simulated'}`);
  console.log(`[worker] poll interval ${POLL_INTERVAL_MS}ms, max concurrent ${MAX_CONCURRENT}`);

  // Graceful shutdown
  process.on('SIGTERM', () => { running = false; });
  process.on('SIGINT', () => { running = false; });

  while (running) {
    await processNextBatch();
    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
  }

  console.log('[worker] shutting down');
  closeDatabase();
  process.exit(0);
}

main().catch((error) => {
  console.error('[worker] fatal error:', error);
  closeDatabase();
  process.exit(1);
});
