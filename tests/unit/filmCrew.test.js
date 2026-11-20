import { describe, it, expect } from 'vitest';
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
