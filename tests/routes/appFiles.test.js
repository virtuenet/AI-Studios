// @vitest-environment node
import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const read = (file) => fs.readFileSync(path.join(ROOT, file), 'utf8');

describe('App Router resilience files', () => {
  it('provides a branded route error boundary', () => {
    const src = read('app/error.js');
    expect(src).toContain("'use client'");
    expect(src).toContain('reset()');
    expect(src).toContain('Try again');
  });

  it('provides a global error fallback with html/body', () => {
    const src = read('app/global-error.js');
    expect(src).toContain('<html');
    expect(src).toContain('<body');
    expect(src).toContain('reset()');
  });

  it('provides a 404 page and loading state', () => {
    expect(read('app/not-found.js')).toContain('/studio/image');
    expect(read('app/loading.js')).toContain('Loading');
  });

  it('exposes a health endpoint', () => {
    const src = read('app/api/health/route.ts');
    expect(src).toContain('export async function GET');
    expect(src).toContain('Cache-Control');
  });
});
