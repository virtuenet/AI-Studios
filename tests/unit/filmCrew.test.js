import { describe, it, expect, vi } from 'vitest';
import { gradeChecklist, questionsFor } from '../../packages/studio/src/filmCrew/qaChecklist';
import { lintShotPrompt } from '../../packages/studio/src/filmCrew/promptQa';
import { analyzeAudio, audioQcHints } from '../../packages/studio/src/filmCrew/audioQc';

describe('film crew QA modules', () => {
  describe('blind review checklist', () => {
    it('passes when every answer matches', () => {
      const questions = questionsFor('image');
      const answers = Object.fromEntries(questions.map((q) => [q.id, q.pass]));
      const result = gradeChecklist('image', answers);
      expect(result.passed).toBe(true);
      expect(result.answered).toBe(questions.length);
    });

    it('fails on a wrong or unanswered question', () => {
      const result = gradeChecklist('image', { fingers: 'six' });
      expect(result.passed).toBe(false);
      expect(result.failedIds).toContain('fingers');
      expect(result.failedIds).toContain('text');
    });

    it('provides audio questions', () => {
      expect(questionsFor('audio').length).toBeGreaterThan(0);
    });
  });

  describe('shot prompt QA', () => {
    it('flags missing camera/light/set anchors', () => {
      const result = lintShotPrompt('a woman holding a bottle');
      expect(result.passed).toBe(false);
      expect(result.hints.length).toBeGreaterThan(0);
      expect(result.score).toBeLessThan(100);
    });

    it('passes a fully anchored two-hander with product scale', () => {
      const result = lintShotPrompt(
        '85mm close-up of two people in a bright office, wearing navy suits, looking at each other, window light from camera left, holding a 48 mm skincare bottle'
      );
      expect(result.passed).toBe(true);
      expect(result.score).toBe(100);
    });

    it('adds an eyeline check for multiple people', () => {
      const result = lintShotPrompt('two women talking in a cafe, close-up, window light, wearing coats');
      expect(result.checks.some((c) => c.id === 'eyeline' && !c.pass)).toBe(true);
    });
  });

  describe('audio QC', () => {
    it('detects clipping and loudness', () => {
      const samples = new Float32Array([1, -1, 0.5, -0.5]);
      const result = analyzeAudio([samples], 48000);
      expect(result.clippingSamples).toBe(2);
      expect(result.issues).toContain('clipping');
      expect(audioQcHints(result).join(' ')).toMatch(/clip/i);
    });

    it('detects quiet audio', () => {
      const samples = new Float32Array(48000).fill(0.001);
      const result = analyzeAudio([samples], 48000);
      expect(result.issues).toContain('too_quiet');
      expect(result.durationSeconds).toBeCloseTo(1);
    });

    it('passes a healthy signal', () => {
      const samples = new Float32Array(48000).map((_, i) => Math.sin(i / 10) * 0.3);
      const result = analyzeAudio([samples], 48000);
      expect(result.issues).toEqual([]);
      expect(result.peakDb).toBeLessThan(0);
    });

    it('handles empty input', () => {
      expect(analyzeAudio([], 48000).issues).toEqual(['empty_audio']);
    });
  });
});

import {
  createCastMember,
  upsertCastMember,
  removeCastMember,
  applyCastToPrompt,
  collectCastReferences,
  loadCast,
  saveCast,
} from '../../packages/studio/src/filmCrew/castLibrary';
import { composeScenePrompt, sceneSetSummary, EMPTY_SCENE } from '../../packages/studio/src/filmCrew/sceneSet';
import { runMlChecks } from '../../packages/studio/src/filmCrew/mlChecks';
import { analyzeAudioFile } from '../../packages/studio/src/filmCrew/audioQc';

describe('cast library', () => {
  it('creates, updates and removes members without duplicates', () => {
    const ana = createCastMember({ name: 'Ana', description: 'short dark hair', referenceUrls: ['a.png', 'a.png'] });
    expect(ana.referenceUrls).toEqual(['a.png']);
    let list = upsertCastMember([], ana);
    const updated = { ...ana, description: 'bob haircut' };
    list = upsertCastMember(list, updated);
    expect(list).toHaveLength(1);
    expect(list[0].description).toBe('bob haircut');
    expect(removeCastMember(list, ana.id)).toEqual([]);
  });

  it('composes cast descriptions and collects capped references', () => {
    const cast = [
      createCastMember({ name: 'Ana', description: 'red coat', referenceUrls: ['a.png'] }),
      createCastMember({ name: 'Jo', referenceUrls: ['b.png', 'c.png'] }),
    ];
    const prompt = applyCastToPrompt('a wide shot', cast);
    expect(prompt).toContain('Cast (keep identical across shots)');
    expect(prompt).toContain('Ana: red coat');
    expect(collectCastReferences(cast, 2)).toEqual(['a.png', 'b.png']);
  });

  it('round-trips through storage', () => {
    const storage = { value: null, getItem() { return this.value; }, setItem(_k, v) { this.value = v; } };
    const cast = [createCastMember({ name: 'Ana' })];
    saveCast(cast, storage);
    expect(loadCast(storage)[0].name).toBe('Ana');
    storage.value = '{bad';
    expect(loadCast(storage)).toEqual([]);
  });
});

describe('scene set', () => {
  it('composes a continuity prompt and summary', () => {
    const scene = { ...EMPTY_SCENE, location: 'loft', lightDirection: 'window left', camera: 'medium shot' };
    const prompt = composeScenePrompt(scene, 'Ana lifts the bottle');
    expect(prompt).toContain('Ana lifts the bottle');
    expect(prompt).toContain('Light direction: window left');
    expect(sceneSetSummary(scene)).toHaveLength(3);
  });

  it('returns empty string when nothing is set', () => {
    expect(composeScenePrompt(EMPTY_SCENE, '')).toBe('');
  });
});

describe('ML checks client', () => {
  it('is disabled without an endpoint', async () => {
    const result = await runMlChecks({ imageUrl: 'x.png' }, { endpoint: null });
    expect(result.enabled).toBe(false);
  });

  it('posts and returns checks', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ checks: [{ id: 'face', pass: true }] }) });
    const result = await runMlChecks({ imageUrl: 'x.png', prompt: 'p' }, { endpoint: 'https://qc', fetchImpl });
    expect(result.ok).toBe(true);
    expect(result.checks[0].id).toBe('face');
    expect(fetchImpl.mock.calls[0][0]).toBe('https://qc');
  });

  it('reports transport failures without throwing', async () => {
    const fetchImpl = vi.fn().mockRejectedValue(new Error('down'));
    const result = await runMlChecks({ imageUrl: 'x.png' }, { endpoint: 'https://qc', fetchImpl });
    expect(result.ok).toBe(false);
    expect(result.error).toBe('down');
  });
});

describe('analyzeAudioFile', () => {
  it('decodes and analyzes through Web Audio', async () => {
    class MockContext {
      async decodeAudioData() {
        return {
          numberOfChannels: 1,
          sampleRate: 48000,
          getChannelData: () => new Float32Array([0.5, -0.5, 0.25, -0.25]),
        };
      }
      async close() {}
    }
    const file = { arrayBuffer: async () => new ArrayBuffer(8) };
    const result = await analyzeAudioFile(file, { AudioContextImpl: MockContext });
    expect(result.peakDb).toBeLessThan(0);
    expect(result.durationSeconds).toBeGreaterThan(0);
  });

  it('returns null without Web Audio', async () => {
    expect(await analyzeAudioFile({ arrayBuffer: async () => new ArrayBuffer(8) }, { AudioContextImpl: null })).toBeNull();
  });
});
