#!/usr/bin/env node
/**
 * Validates the model catalog: unique ids, required fields, endpoint shape,
 * and minimum category sizes. Complements the Vitest catalog suite so CI can
 * fail fast without booting the test runner.
 */
const path = require('path');
const esbuild = require('esbuild');

async function loadModels() {
  // Bundle the ESM catalog (extensionless internal imports) for Node.
  const result = await esbuild.build({
    entryPoints: [path.resolve(__dirname, '../packages/studio/src/models.ts')],
    bundle: true,
    platform: 'node',
    format: 'esm',
    write: false,
    logLevel: 'silent',
  });
  const code = result.outputFiles[0].text;
  return import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
}

async function main() {
  const mod = await loadModels();
  const categories = [
    ['t2iModels', 70],
    ['t2vModels', 85],
    ['i2iModels', 70],
    ['i2vModels', 120],
    ['v2vModels', 35],
    ['lipsyncModels', 9],
    ['recastModels', 3],
    ['audioModels', 15],
  ];

  const errors = [];
  const seen = new Set();
  // Models intentionally exposed in multiple modes (t2i+i2i, lipsync+v2v).
  const ALLOWED_DUPLICATES = new Set([
    'flux-pulid',
    'flux-redux',
    'qwen-text-to-image-2512',
    'infinitetalk-video-to-video',
    'volcengine-video-to-video-lip-sync',
  ]);

  for (const [name, minimum] of categories) {
    const models = mod[name];
    if (!Array.isArray(models)) {
      errors.push(`${name}: missing export`);
      continue;
    }
    if (models.length < minimum) errors.push(`${name}: ${models.length} < required ${minimum}`);
    for (const model of models) {
      if (!model.id || typeof model.id !== 'string') errors.push(`${name}: model missing id`);
      if (!model.name) errors.push(`${model.id}: missing name`);
      if (model.endpoint && /^\/|\/$/.test(model.endpoint)) {
        errors.push(`${model.id}: endpoint must not start/end with a slash`);
      }
      if (seen.has(model.id) && !ALLOWED_DUPLICATES.has(model.id)) {
        errors.push(`${model.id}: duplicate id across categories`);
      }
      seen.add(model.id);
    }
  }

  if (errors.length) {
    console.error(`Model validation failed (${errors.length}):`);
    for (const error of errors.slice(0, 40)) console.error(`  - ${error}`);
    process.exit(1);
  }
  console.log(`Model catalog OK — ${seen.size} unique models across ${categories.length} categories.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
