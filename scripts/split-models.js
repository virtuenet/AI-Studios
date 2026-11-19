#!/usr/bin/env node
/**
 * Split packages/studio/src/models.js into per-category modules under
 * packages/studio/src/models/ so bundlers can tree-shake unused categories.
 *
 * The script is idempotent only in the sense that it expects the *original*
 * monolithic layout (arrays declared inline). Once split, models.js is a
 * barrel + helpers module and this script should not be re-run.
 *
 * Usage: node scripts/split-models.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const MODELS_PATH = path.join(ROOT, 'packages/studio/src/models.js');
const OUT_DIR = path.join(ROOT, 'packages/studio/src/models');

const CATEGORIES = [
  't2iModels',
  't2vModels',
  'i2iModels',
  'i2vModels',
  'v2vModels',
  'lipsyncModels',
  'recastModels',
  'motionControlModels',
  'audioModels',
];

const source = fs.readFileSync(MODELS_PATH, 'utf8');
const lines = source.split('\n');

// ── Locate arrays ────────────────────────────────────────────
const blocks = [];
for (const name of CATEGORIES) {
  const start = lines.findIndex((l) => l.startsWith(`export const ${name} = [`));
  if (start === -1) throw new Error(`Array not found: ${name}`);
  let end = -1;
  for (let i = start + 1; i < lines.length; i++) {
    if (lines[i].trim() === '];') {
      end = i;
      break;
    }
  }
  if (end === -1) throw new Error(`Closing bracket not found for ${name}`);
  blocks.push({ name, start, end });
}

// ── Header: shared input constants (before first array) ─────
const firstArrayStart = blocks[0].start;
const headerLines = lines.slice(0, firstArrayStart);

const constNames = headerLines
  .map((l) => l.match(/^const ([A-Z0-9_]+) =/))
  .filter(Boolean)
  .map((m) => m[1]);

if (constNames.length === 0) throw new Error('No shared input constants found in header');

// sharedInputs.js: strip the two import blocks, export the constants.
let headerBody = headerLines.join('\n');
// Remove imports (lines starting with "import" and their multi-line blocks).
headerBody = headerBody
  .replace(/^import[\s\S]*?from\s+["'][^"']+["'];\n/gm, '')
  .replace(/^import[\s\S]*?from\s+["'][^"']+["']\n/gm, '')
  .trim();
headerBody = headerBody.replace(/^const ([A-Z0-9_]+) =/gm, 'export const $1 =');

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(
  path.join(OUT_DIR, 'sharedInputs.js'),
  `// Shared model input schema fragments, extracted from models.js.\n// Used by the per-category model files in this directory.\n\n${headerBody}\n`,
  'utf8'
);

// ── Write category files ─────────────────────────────────────
for (const { name, start, end } of blocks) {
  const body = lines.slice(start, end + 1).join('\n');
  const used = constNames.filter((n) => new RegExp(`\\b${n}\\b`).test(body));
  const importLine = used.length
    ? `import { ${used.join(', ')} } from './sharedInputs.js';\n\n`
    : '';
  fs.writeFileSync(
    path.join(OUT_DIR, `${name}.js`),
    `// Extracted from models.js — ${name} catalog.\n${importLine}${body}\n`,
    'utf8'
  );
}

// ── Rewrite models.js (helpers + barrel) ────────────────────
const arrayLineSet = new Set();
for (const { start, end } of blocks) {
  for (let i = start; i <= end; i++) arrayLineSet.add(i);
}

// Keep the original import block (lines 0..8) for helper functions.
const importBlock = lines.slice(0, 9).join('\n');

const remainder = lines
  .map((line, i) => ({ line, i }))
  .filter(({ i }) => i >= firstArrayStart && !arrayLineSet.has(i))
  .map(({ line }) => line)
  .join('\n');

const barrelImports = CATEGORIES
  .map((name) => `import { ${name} } from './models/${name}.js';`)
  .join('\n');

const newModels = `${importBlock}
${barrelImports}

// Re-export the arrays so existing imports from './models.js' keep working.
export { ${CATEGORIES.join(', ')} };

${remainder}
`;

fs.writeFileSync(MODELS_PATH, newModels, 'utf8');

console.log(`Split ${CATEGORIES.length} model arrays into ${OUT_DIR}`);
console.log(`Shared input constants: ${constNames.length}`);
for (const { name, start, end } of blocks) {
  console.log(`  ${name}: ${end - start + 1} lines`);
}
