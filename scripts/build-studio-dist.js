#!/usr/bin/env node
/**
 * Build packages/studio/dist with esbuild (CJS, no bundling) instead of Babel.
 * JSON message bundles are copied alongside so studioCopy.js resolves them.
 */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const ROOT = path.resolve(__dirname, '../packages/studio');
const SRC = path.join(ROOT, 'src');
const OUT = path.join(ROOT, 'dist');

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(js|jsx|ts|tsx)$/.test(entry.name)) out.push(full);
  }
  return out;
}

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(src, dest);
    else fs.copyFileSync(src, dest);
  }
}

async function main() {
  const entryPoints = walk(SRC);
  fs.rmSync(OUT, { recursive: true, force: true });
  await esbuild.build({
    entryPoints,
    outdir: OUT,
    outbase: SRC,
    bundle: false,
    format: 'cjs',
    platform: 'node',
    target: ['node18'],
    jsx: 'automatic',
    loader: { '.js': 'jsx', '.jsx': 'jsx', '.ts': 'ts', '.tsx': 'tsx' },
    logLevel: 'warning',
  });
  copyDir(path.join(SRC, 'messages'), path.join(OUT, 'messages'));
  console.log(`Built ${entryPoints.length} files to packages/studio/dist`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
