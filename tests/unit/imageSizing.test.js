import { describe, it, expect } from 'vitest';
import {
  T2I_DIMENSION_RATIOS,
  getImageSizeCapability,
  resolveImageDimensions,
  getAspectRatioOptions,
  buildImageSizePayload,
} from '../../packages/studio/src/imageSizing';

const aspectModel = {
  inputs: {
    aspect_ratio: { type: 'string', enum: ['1:1', '16:9'] },
    width: { type: 'int', default: 1024, minValue: 128, maxValue: 2048, step: 64 },
    height: { type: 'int', default: 1024, minValue: 128, maxValue: 2048, step: 64 },
  },
};

const dimensionModel = {
  inputs: {
    width: { type: 'int', default: 1024, minValue: 512, maxValue: 1536, step: 64 },
    height: { type: 'int', default: 1024, minValue: 512, maxValue: 1536, step: 64 },
  },
};

describe('imageSizing', () => {
  it('prefers enum aspect_ratio capability over dimensions', () => {
    const capability = getImageSizeCapability(aspectModel);
    expect(capability.type).toBe('aspect_ratio');
    expect(capability.input.enum).toEqual(['1:1', '16:9']);
  });

  it('detects dimension capability when no aspect enum exists', () => {
    const capability = getImageSizeCapability(dimensionModel);
    expect(capability.type).toBe('dimensions');
  });

  it('returns none for unknown models', () => {
    expect(getImageSizeCapability({ inputs: {} }).type).toBe('none');
    expect(getImageSizeCapability(null).type).toBe('none');
  });

  it('resolves dimensions that respect min/max and step', () => {
    const dimensions = resolveImageDimensions(dimensionModel, '16:9');
    expect(dimensions).toBeTruthy();
    expect(dimensions.width % 64).toBe(0);
    expect(dimensions.height % 64).toBe(0);
    expect(dimensions.width).toBeLessThanOrEqual(1536);
    expect(dimensions.height).toBeLessThanOrEqual(1536);
  });

  it('returns null for invalid aspect ratios', () => {
    expect(resolveImageDimensions(dimensionModel, 'nope')).toBeNull();
    expect(resolveImageDimensions(aspectModel, '16:9')).toBeNull();
  });

  it('lists aspect ratio options for both capability types', () => {
    expect(getAspectRatioOptions(aspectModel, T2I_DIMENSION_RATIOS)).toEqual(['1:1', '16:9']);
    const options = getAspectRatioOptions(dimensionModel, T2I_DIMENSION_RATIOS);
    expect(options.length).toBeGreaterThan(0);
    for (const ratio of options) {
      expect(resolveImageDimensions(dimensionModel, ratio)).toBeTruthy();
    }
    expect(getAspectRatioOptions({ inputs: {} }, T2I_DIMENSION_RATIOS)).toEqual([]);
  });

  it('builds aspect_ratio or dimension payloads', () => {
    expect(buildImageSizePayload(aspectModel, '16:9')).toEqual({ aspect_ratio: '16:9' });
    expect(buildImageSizePayload(aspectModel, '4:3')).toEqual({});
    const payload = buildImageSizePayload(dimensionModel, '1:1');
    expect(payload.width).toBeGreaterThan(0);
    expect(payload.height).toBeGreaterThan(0);
  });
});
