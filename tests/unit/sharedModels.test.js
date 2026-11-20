import { describe, it, expect } from 'vitest';
import { t2iModels, i2iModels, t2vModels, lipsyncModels, v2vModels } from '../../packages/studio/src/models';
import { SHARED_MODEL_IDS } from '../../packages/studio/src/models/sharedModels';

describe('shared model definitions', () => {
  it('exposes the five cross-category IDs', () => {
    expect(SHARED_MODEL_IDS).toHaveLength(5);
  });

  it('shares one object instance for each duplicate ID', () => {
    const all = [...t2iModels, ...t2vModels, ...i2iModels, ...v2vModels, ...lipsyncModels];
    for (const id of SHARED_MODEL_IDS) {
      const occurrences = all.filter((m) => m.id === id);
      expect(occurrences.length, id).toBeGreaterThan(1);
      const first = occurrences[0];
      for (const occurrence of occurrences) {
        expect(occurrence, `${id} should be the same reference`).toBe(first);
      }
    }
  });

  it('keeps unique instances for normal models', () => {
    const ids = new Set();
    for (const model of t2iModels) {
      if (SHARED_MODEL_IDS.includes(model.id)) continue;
      expect(ids.has(model.id)).toBe(false);
      ids.add(model.id);
    }
  });
});
