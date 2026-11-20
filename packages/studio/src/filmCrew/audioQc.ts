/**
 * Lightweight audio QC, adapted from ai-film-crew's sound-mix discipline.
 * Pure sample analysis so it can run in the browser or tests without ffmpeg.
 *
 * Input: Float32Array channels in [-1, 1].
 */
export type AudioIssue = 'clipping' | 'too_quiet' | 'dc_offset' | 'too_short' | 'empty_audio';

export interface AudioQcResult {
  peakDb: number;
  rmsDb: number;
  clippingSamples: number;
  dcOffset: number;
  durationSeconds: number;
  issues: AudioIssue[];
}

export interface AudioFileLike {
  arrayBuffer(): Promise<ArrayBuffer>;
}

interface AudioContextLike {
  decodeAudioData(buffer: ArrayBuffer): Promise<AudioBuffer>;
  close?(): Promise<void>;
}

type AudioContextCtor = new () => AudioContextLike;

export function analyzeAudio(
  channels: ArrayLike<number> | ArrayLike<number>[] | null,
  sampleRate: number
): AudioQcResult {
  const list: ArrayLike<number>[] = Array.isArray(channels)
    ? (channels as ArrayLike<number>[])
    : channels
      ? [channels as ArrayLike<number>]
      : [];
  let peak = 0;
  let sumSquares = 0;
  let count = 0;
  let clippingSamples = 0;
  let dcSum = 0;

  for (const channel of list) {
    if (!channel || typeof channel.length !== 'number') continue;
    for (let i = 0; i < channel.length; i += 1) {
      const sample = channel[i];
      if (typeof sample !== 'number') continue;
      const abs = Math.abs(sample);
      if (abs > peak) peak = abs;
      if (abs >= 0.999) clippingSamples += 1;
      sumSquares += sample * sample;
      dcSum += sample;
      count += 1;
    }
  }

  if (count === 0) {
    return {
      peakDb: -Infinity,
      rmsDb: -Infinity,
      clippingSamples: 0,
      dcOffset: 0,
      durationSeconds: 0,
      issues: ['empty_audio'],
    };
  }

  const rms = Math.sqrt(sumSquares / count);
  const toDb = (value: number) => (value > 0 ? 20 * Math.log10(value) : -Infinity);
  const durationSeconds = (list[0]?.length || 0) / sampleRate;
  const dcOffset = dcSum / count;

  const issues: AudioIssue[] = [];
  if (clippingSamples > 0) issues.push('clipping');
  if (rms < 0.01) issues.push('too_quiet');
  if (Math.abs(dcOffset) > 0.01) issues.push('dc_offset');
  if (durationSeconds < 0.5) issues.push('too_short');

  return {
    peakDb: toDb(peak),
    rmsDb: toDb(rms),
    clippingSamples,
    dcOffset,
    durationSeconds,
    issues,
  };
}

const HINTS: Record<AudioIssue, string> = {
  clipping: 'Waveform clips — lower the master before uploading.',
  too_quiet: 'Track is very quiet — normalize or re-export.',
  dc_offset: 'DC offset present — apply a high-pass filter.',
  too_short: 'Audio is under 0.5 s — check the export.',
  empty_audio: 'No audio samples decoded.',
};

export function audioQcHints(result: Pick<AudioQcResult, 'issues'> | null | undefined): string[] {
  return (result?.issues || []).map((issue) => HINTS[issue]).filter(Boolean);
}

/**
 * Decode and analyze an audio File before upload. Returns null when Web Audio
 * is unavailable or decoding fails (never blocks generation).
 */
export async function analyzeAudioFile(
  file: AudioFileLike | null | undefined,
  { AudioContextImpl }: { AudioContextImpl?: AudioContextCtor | null } = {}
): Promise<AudioQcResult | null> {
  const Ctor = AudioContextImpl || (typeof AudioContext !== 'undefined' ? AudioContext : null);
  if (!Ctor || !file?.arrayBuffer) return null;
  let context: AudioContextLike | undefined;
  try {
    const buffer = await file.arrayBuffer();
    context = new Ctor();
    const decoded = await context.decodeAudioData(buffer);
    const channels: Float32Array[] = [];
    for (let i = 0; i < decoded.numberOfChannels; i += 1) {
      channels.push(decoded.getChannelData(i));
    }
    return analyzeAudio(channels, decoded.sampleRate);
  } catch {
    return null;
  } finally {
    try { await context?.close?.(); } catch { /* ignore */ }
  }
}
