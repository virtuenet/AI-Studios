#!/usr/bin/env node
/**
 * Fails the build when compiled JavaScript exceeds the configured budget.
 * Keeps accidental dependency growth visible in CI.
 */
const fs = require('fs');
const path = require('path');

const BUDGETS = [
  { dir: '.next/static', label: 'Next.js static JS', maxKB: 6144 },
  { dir: 'dist/assets', label: 'Electron SPA JS', maxKB: 6144 },
];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith('.js')) out.push(full);
  }
  return out;
}

let failed = false;
for (const budget of BUDGETS) {
  const files = walk(budget.dir);
  if (files.length === 0) {
    console.log(`- ${budget.label}: no build output found (${budget.dir}) — skipped`);
    continue;
  }
  const bytes = files.reduce((sum, file) => sum + fs.statSync(file).size, 0);
  const kb = Math.round(bytes / 1024);
  const ok = kb <= budget.maxKB;
  console.log(`${ok ? '✓' : '✗'} ${budget.label}: ${kb} KB / ${budget.maxKB} KB budget (${files.length} files)`);
  if (!ok) failed = true;
}

if (failed) {
  console.error('Bundle size budget exceeded.');
  process.exit(1);
}
