#!/usr/bin/env node
/**
 * Runs Tailwind's CLI without relying on node_modules/.bin being on PATH
 * (workspace hoisting differs across npm versions/platforms).
 */
const path = require('path');
const { spawnSync } = require('child_process');

const studio = path.resolve(__dirname, '../packages/studio');
const args = [
  '-i', path.join(studio, 'src/tailwind.css'),
  '-o', path.join(studio, 'dist/tailwind.css'),
  '--minify',
];

let cli;
try {
  cli = require.resolve('tailwindcss/lib/cli.js');
} catch {
  cli = require.resolve('tailwindcss/lib/cli.js', { paths: [studio] });
}

const result = spawnSync(process.execPath, [cli, ...args], { stdio: 'inherit', cwd: studio });
process.exit(result.status ?? 1);
