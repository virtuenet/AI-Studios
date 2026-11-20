#!/usr/bin/env node
/**
 * Model catalog snapshot/drift gate.
 *
 *   node scripts/sync-models.js            # verify catalog matches docs/models-snapshot.json
 *   node scripts/sync-models.js --write    # regenerate the snapshot (intentional changes)
 *   node scripts/sync-models.js --fetch    # additionally compare with Muapi's openapi.json
 *
 * The committed snapshot makes catalog changes reviewable in PRs: adding or
 * renaming a model requires regenerating the snapshot, so accidental edits and
 * upstream drift are visible instead of silent.
 */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const SNAPSHOT_PATH = path.resolve(__dirname, '../docs/models-snapshot.json');
const CATEGORIES = [
  't2iModels', 't2vModels', 'i2iModels', 'i2vModels', 'v2vModels',
  'lipsyncModels', 'recastModels', 'motionControlModels', 'audioModels',
];

async function loadModels() {
  const result = await esbuild.build({
    entryPoints: [path.resolve(__dirname, '../packages/studio/src/models.js')],
    bundle: true,
    platform: 'node',
    format: 'esm',
    write: false,
    logLevel: 'silent',
  });
  return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
}

function summarize(models) {
  const snapshot = {};
  for (const category of CATEGORIES) {
    const list = models[category] || [];
    snapshot[category] = list
      .map((model) => ({ id: model.id, endpoint: model.endpoint || model.id }))
      .sort((a, b) => a.id.localeCompare(b.id));
  }
  return snapshot;
}

async function fetchUpstreamSpec() {
  const response = await fetch('https://api.muapi.ai/openapi.json', {
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

/**
 * Generate docs/models-openapi.json from the upstream OpenAPI document.
 * This is the OpenAPI-driven half of the catalog pipeline: it records every
 * /api/v1/<endpoint> route plus its method/summary/input names so catalog
 * generation and drift review have a machine-readable source.
 */
async function writeOpenApiCatalog() {
  const spec = await fetchUpstreamSpec();
  const models = {};
  for (const [path, operations] of Object.entries(spec.paths || {})) {
    const endpoint = path.match(/^\/api\/v1\/([^/]+)$/)?.[1];
    if (!endpoint) continue;
    for (const [method, operation] of Object.entries(operations || {})) {
      if (!['get', 'post', 'put', 'patch', 'delete'].includes(method)) continue;
      const schema =
        operation?.requestBody?.content?.['application/json']?.schema ||
        operation?.parameters?.[0]?.schema;
      const inputNames = Object.keys(schema?.properties || {}).sort();
      models[endpoint] = {
        method,
        summary: operation?.summary || operation?.description?.slice(0, 120) || undefined,
        inputs: inputNames,
      };
      break;
    }
  }
  const outPath = path.resolve(__dirname, '../docs/models-openapi.json');
  fs.writeFileSync(
    outPath,
    JSON.stringify({ generatedAt: new Date().toISOString(), endpoints: models }, null, 2) + '\n'
  );
  console.log(`Wrote ${outPath} (${Object.keys(models).length} endpoints).`);
}

async function fetchUpstreamEndpoints() {
  try {
    const response = await fetch('https://api.muapi.ai/openapi.json', {
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const spec = await response.json();
    return new Set(
      Object.keys(spec.paths || {})
        .map((p) => p.match(/^\/api\/v1\/([^/]+)$/)?.[1])
        .filter(Boolean)
    );
  } catch (error) {
    console.warn(`[models] could not fetch upstream openapi (${error.message}); skipping upstream diff`);
    return null;
  }
}

async function main() {
  const args = process.argv.slice(2);
  const models = await loadModels();
  const current = summarize(models);

  if (args.includes('--write-openapi')) {
    await writeOpenApiCatalog();
    return;
  }

  if (args.includes('--write')) {
    fs.mkdirSync(path.dirname(SNAPSHOT_PATH), { recursive: true });
    fs.writeFileSync(
      SNAPSHOT_PATH,
      JSON.stringify({ generatedAt: new Date().toISOString(), categories: current }, null, 2) + '\n'
    );
    const count = Object.values(current).reduce((n, list) => n + list.length, 0);
    console.log(`Wrote ${SNAPSHOT_PATH} (${count} models).`);
    return;
  }

  const snapshot = JSON.parse(fs.readFileSync(SNAPSHOT_PATH, 'utf8')).categories;
  const problems = [];
  for (const category of CATEGORIES) {
    const before = new Map((snapshot[category] || []).map((m) => [m.id, m.endpoint]));
    const after = new Map((current[category] || []).map((m) => [m.id, m.endpoint]));

    for (const [id, endpoint] of after) {
      if (!before.has(id)) problems.push(`+ ${category}: ${id}`);
      else if (before.get(id) !== endpoint) problems.push(`~ ${category}: ${id} endpoint ${before.get(id)} -> ${endpoint}`);
    }
    for (const id of before.keys()) {
      if (!after.has(id)) problems.push(`- ${category}: ${id}`);
    }
  }

  if (problems.length > 0) {
    console.error(`Model catalog differs from the committed snapshot (${problems.length} changes):`);
    for (const line of problems.slice(0, 40)) console.error(`  ${line}`);
    console.error('Review the changes, then run: npm run sync:models -- --write');
    process.exit(1);
  }
  console.log('Model catalog matches docs/models-snapshot.json.');

  if (args.includes('--fetch')) {
    const upstream = await fetchUpstreamEndpoints();
    if (upstream) {
      const catalogEndpoints = new Set(
        Object.values(current).flat().map((m) => m.endpoint)
      );
      const missingUpstream = [...catalogEndpoints].filter((e) => !upstream.has(e));
      const notInCatalog = [...upstream].filter((e) => !catalogEndpoints.has(e));
      console.log(`Upstream endpoints: ${upstream.size}; catalog endpoints: ${catalogEndpoints.size}.`);
      if (missingUpstream.length) {
        console.log(`Catalog endpoints not in upstream (${missingUpstream.length}): ${missingUpstream.slice(0, 10).join(', ')}`);
      }
      if (notInCatalog.length) {
        console.log(`Upstream endpoints not in catalog (${notInCatalog.length}): ${notInCatalog.slice(0, 10).join(', ')}`);
      }
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
