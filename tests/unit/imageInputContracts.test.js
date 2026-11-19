import { describe, it, expect } from 'vitest';
import {
  normalizePrimaryImageUrls,
  getImageInputContract,
  getAuxiliaryImageInputs,
  getImageInputValidationError,
  buildImageInputPayload,
} from '../../packages/studio/src/imageInputContracts';

describe('imageInputContracts', () => {
  it('normalizes primary image URLs', () => {
    expect(normalizePrimaryImageUrls(['a.png', '', null, 'b.png'], null)).toEqual(['a.png', 'b.png']);
    expect(normalizePrimaryImageUrls([], 'single.png')).toEqual(['single.png']);
    expect(normalizePrimaryImageUrls([], '   ')).toEqual([]);
    expect(normalizePrimaryImageUrls()).toEqual([]);
  });

  it('requires prompts for t2i by default and images for i2i', () => {
    const t2i = getImageInputContract({ id: 'any' }, 't2i');
    expect(t2i.promptRequired).toBe(true);
    expect(t2i.primaryImageRequired).toBe(false);

    const i2i = getImageInputContract({ id: 'any' }, 'i2i');
    expect(i2i.primaryImageRequired).toBe(true);
    expect(i2i.promptRequired).toBe(false);
    expect(i2i.promptPlaceholder).toContain('optional');
  });

  it('applies per-model overrides', () => {
    const contract = getImageInputContract({ id: 'flux-pulid' }, 't2i');
    expect(contract.primaryImageRequired).toBe(true);
    expect(contract.promptRequired).toBe(true);

    const product = getImageInputContract({ id: 'ai-product-shot' }, 'i2i');
    expect(product.promptField).toBe('scene_description');
    expect(product.promptRequired).toBe(true);
  });

  it('adds the swap-face auxiliary input when swapField is set', () => {
    const inputs = getAuxiliaryImageInputs({ id: 'x', swapField: 'face_image_url' }, 'i2i');
    expect(inputs[0]).toMatchObject({ field: 'face_image_url', required: true });
  });

  it('validates required images, prompts and auxiliary inputs', () => {
    expect(
      getImageInputValidationError({ id: 'flux-pulid' }, 't2i', { primaryImageUrls: [] })
    ).toMatch(/upload a reference image/i);

    expect(
      getImageInputValidationError({ id: 'any' }, 't2i', { prompt: '   ' })
    ).toMatch(/enter a prompt/i);

    expect(
      getImageInputValidationError({ id: 'ai-product-shot' }, 'i2i', {
        prompt: '',
        primaryImageUrls: ['p.png'],
      })
    ).toMatch(/scene description/i);

    expect(
      getImageInputValidationError({ id: 'gpt4o-edit' }, 'i2i', {
        prompt: 'edit',
        primaryImageUrls: ['p.png'],
        auxiliaryImageUrls: {},
      })
    ).toMatch(/mask image/i);

    expect(
      getImageInputValidationError({ id: 'gpt4o-edit' }, 'i2i', {
        prompt: 'edit',
        primaryImageUrls: ['p.png'],
        auxiliaryImageUrls: { mask_image_url: 'm.png' },
      })
    ).toBeNull();
  });

  it('builds payloads with prompt and auxiliary fields', () => {
    expect(
      buildImageInputPayload({ id: 'ai-product-shot' }, 'i2i', {
        prompt: 'on a table',
        scene_description: 'ignored',
      })
    ).toEqual({ scene_description: 'on a table' });

    expect(
      buildImageInputPayload({ id: 'gpt4o-edit' }, 'i2i', {
        prompt: 'edit',
        mask_image_url: 'm.png',
        unrelated: 'x',
      })
    ).toEqual({ prompt: 'edit', mask_image_url: 'm.png' });
  });
});
