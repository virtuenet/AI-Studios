import { describe, it, expect } from 'vitest';
import {
  getVideoToolPresentation,
  resolveVideoUploadTransition,
  getVideoToolOptionDefinitions,
  getDefaultVideoToolOptions,
  serializeVideoToolOptions,
  buildVideoToolPayload,
  isContinuationSourceModel,
  getContinuationConfig,
  getCompatibleContinuationSources,
} from '../../packages/studio/src/videoToolCapabilities';
import { v2vModels, t2vModels } from '../../packages/studio/src/models';

const watermark = v2vModels.find((m) => m.id === 'video-watermark-remover');
const upscaler = v2vModels.find((m) => m.id === 'ai-video-upscaler');
const extend = t2vModels.find((m) => m.id === 'seedance-2-extend');

const configurableModel = {
  id: 'test-tool',
  name: 'Test Tool',
  hasPrompt: true,
  promptRequired: true,
  inputs: {
    prompt: { type: 'string' },
    video_url: { type: 'string' },
    seed: { type: 'int', configurable: true, default: 7 },
    mode: { type: 'string', configurable: true, enum: ['a', 'b'], default: 'a' },
    empty: { type: 'string', configurable: true },
  },
  payloadDefaults: { fixed: 'value' },
};

describe('videoToolCapabilities', () => {
  it('returns a safe presentation for missing models', () => {
    const presentation = getVideoToolPresentation(null);
    expect(presentation.showPrompt).toBe(false);
    expect(presentation.actionLabel).toBeTruthy();
    expect(presentation.summary).toContain('Upload');
  });

  it('derives prompt requirements from the model', () => {
    const presentation = getVideoToolPresentation(configurableModel);
    expect(presentation.showPrompt).toBe(true);
    expect(presentation.promptRequired).toBe(true);
    expect(presentation.promptPlaceholder).not.toContain('optional');

    const optional = getVideoToolPresentation({ ...configurableModel, promptRequired: false });
    expect(optional.promptRequired).toBe(false);
    expect(optional.promptPlaceholder).toContain('optional');
  });

  it('builds upload transitions', () => {
    expect(resolveVideoUploadTransition({ mode: 'i2v', currentModel: null, defaultModel: watermark }))
      .toMatchObject({ mode: 'v2v', model: watermark, clearImage: true });
    expect(resolveVideoUploadTransition({ mode: 'v2v', currentModel: watermark, defaultModel: upscaler }))
      .toMatchObject({ model: watermark, clearImage: false });
  });

  it('extracts configurable option definitions and defaults', () => {
    const defs = getVideoToolOptionDefinitions(configurableModel);
    expect(defs.map((d) => d.key)).toEqual(['seed', 'mode', 'empty']);
    expect(getDefaultVideoToolOptions(configurableModel)).toEqual({ seed: 7, mode: 'a' });
    expect(getVideoToolOptionDefinitions(null)).toEqual([]);
  });

  it('serializes options, trimming strings and dropping empties', () => {
    expect(
      serializeVideoToolOptions(configurableModel, { seed: 3, mode: '  b  ', empty: '   ' })
    ).toEqual({ seed: 3, mode: 'b' });
  });

  it('builds payloads with video field, image field, prompt and options', () => {
    const payload = buildVideoToolPayload(
      { ...configurableModel, videoField: 'video_files', imageField: 'image_url' },
      {
        video_url: 'v.mp4',
        image_url: 'i.png',
        prompt: 'improve',
        options: { seed: 1 },
      }
    );
    expect(payload).toEqual({
      video_files: 'v.mp4',
      fixed: 'value',
      image_url: 'i.png',
      prompt: 'improve',
      seed: 1,
    });
  });

  it('defaults the video field to video_url', () => {
    expect(buildVideoToolPayload(configurableModel, { video_url: 'v.mp4' })).toMatchObject({
      video_url: 'v.mp4',
    });
  });

  it('resolves continuation configs for known extend models', () => {
    expect(extend).toBeTruthy();
    const config = getContinuationConfig(extend);
    expect(config).toBeTruthy();
    expect(config.family).toBe('seedance');
    expect(Array.isArray(config.sourceModelIds)).toBe(true);
    expect(typeof config.sourceLabel).toBe('string');
    expect(getContinuationConfig('not-a-model')).toBeNull();
  });

  it('identifies continuation sources', () => {
    expect(isContinuationSourceModel(extend, extend?.id)).toBe(true);
    expect(isContinuationSourceModel('seedance-2-extend', 'seedance-2-extend')).toBe(true);
    expect(isContinuationSourceModel({ id: 'other' }, 'seedance-2-extend')).toBe(false);
  });

  it('filters compatible continuation sources from history', () => {
    const sources = getCompatibleContinuationSources(extend, [
      { request_id: '1', model: extend?.id, url: 'a.mp4' },
      { request_id: '2', model: 'other', url: 'b.mp4' },
    ]);
    expect(Array.isArray(sources)).toBe(true);
    expect(sources.some((s) => s.request_id === '1')).toBe(true);
  });
});
