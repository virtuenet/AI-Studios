import { describe, it, expect, beforeEach, vi } from 'vitest';

// Minimal localStorage for persistKey tests
const store = new Map();
Object.defineProperty(globalThis, 'localStorage', {
  value: {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
    clear: () => store.clear(),
  },
  writable: true,
  configurable: true,
});

import { scopedPersistKey, migrateLegacyPersistKey } from '../../packages/studio/src/persistKey';
import {
  getSupplementalModelInputs,
  createModelParameterValues,
  mergeModelParameterValues,
  buildSupplementalInputPayload,
} from '../../packages/studio/src/modelParameters';

describe('persistKey', () => {
  beforeEach(() => store.clear());

  it('returns the base key when no identity is provided', () => {
    expect(scopedPersistKey('history')).toBe('history');
    expect(scopedPersistKey('history', null)).toBe('history');
  });

  it('scopes keys deterministically per API key', () => {
    const a = scopedPersistKey('history', 'key-a');
    const b = scopedPersistKey('history', 'key-a');
    const c = scopedPersistKey('history', 'key-b');
    expect(a).toBe(b);
    expect(a).not.toBe(c);
    expect(a.startsWith('history:')).toBe(true);
    expect(a).not.toContain('key-a');
  });

  it('migrates a legacy key once and clears it', () => {
    store.set('history', 'legacy-data');
    const scoped = scopedPersistKey('history', 'key-a');
    migrateLegacyPersistKey('history', scoped);
    expect(store.get(scoped)).toBe('legacy-data');
    expect(store.has('history')).toBe(false);

    // second migration must not overwrite the scoped value
    store.set('history', 'new-legacy');
    migrateLegacyPersistKey('history', scoped);
    expect(store.get(scoped)).toBe('legacy-data');
  });

  it('no-ops when base and scoped keys match or legacy data is absent', () => {
    migrateLegacyPersistKey('history', 'history');
    expect(store.size).toBe(0);
    migrateLegacyPersistKey('missing', 'missing:1');
    expect(store.size).toBe(0);
  });
});

const model = {
  inputs: {
    prompt: { type: 'string' },
    aspect_ratio: { type: 'string', enum: ['1:1'] },
    image_url: { type: 'string', field: 'image' },
    seed: { type: 'int', default: 42, minValue: 0, maxValue: 100, step: 1 },
    enhance: { type: 'boolean', default: true, configurable: true },
    negative_prompt: { type: 'string', default: '' },
    tags: { type: 'array', maxItems: 2, items: { type: 'string' } },
    lora: {
      type: 'object',
      required: ['path'],
      properties: { path: { type: 'string' }, scale: { type: 'number', default: 1 } },
    },
    quality: { type: 'string', enum: ['basic', 'high'], default: 'basic', configurable: true },
  },
};

describe('modelParameters', () => {
  it('excludes common and media inputs from supplemental list', () => {
    const keys = getSupplementalModelInputs(model).map((i) => i.key);
    expect(keys).not.toContain('prompt');
    expect(keys).not.toContain('aspect_ratio');
    expect(keys).not.toContain('image_url');
    expect(keys).toEqual(expect.arrayContaining(['seed', 'enhance', 'negative_prompt', 'tags', 'lora']));
  });

  it('creates defaults for every supplemental input', () => {
    const values = createModelParameterValues(model);
    expect(values.seed).toBe(42);
    expect(values.enhance).toBe(true);
    expect(values.negative_prompt).toBe('');
    expect(values.tags).toEqual([]);
  });

  it('merges previous values and clamps numbers', () => {
    const merged = mergeModelParameterValues(model, { seed: 1000, quality: 'nope' });
    expect(merged.seed).toBe(100);
    expect(merged.quality).toBe('basic');
  });

  it('builds payloads, omitting empty values', () => {
    const payload = buildSupplementalInputPayload(model, {
      seed: 10,
      enhance: false,
      negative_prompt: '',
      tags: [],
      lora: { path: 'https://x/lora.safetensors', scale: 0.5 },
    });
    expect(payload).toEqual({
      seed: 10,
      enhance: false,
      lora: { path: 'https://x/lora.safetensors', scale: 0.5 },
    });
  });

  it('skips incomplete objects and unknown fields', () => {
    const payload = buildSupplementalInputPayload(model, { lora: { scale: 1 }, unknown: 'x' });
    expect(payload).toEqual({});
  });

  it('normalizes arrays and drops empties', () => {
    const values = createModelParameterValues(model, { tags: ['a', 'b', 'c'] });
    expect(values.tags).toEqual(['a', 'b']);
  });
});
