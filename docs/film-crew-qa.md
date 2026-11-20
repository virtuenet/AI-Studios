# Film-Crew QA (adapted from ai-film-crew)

Inspired by [Maksim-Burtsev/ai-film-crew](https://github.com/Maksim-Burtsev/ai-film-crew)
(MIT): catch defects at the cheap step with factual checks instead of asking a
model "does this look right?".

Implemented in `packages/studio/src/filmCrew/`:

## Blind review (`qaChecklist.js` + `ReviewChecklistModal.jsx`)

- Fixed-answer question bank for image / video / audio (fingers, limbs, text,
  product scale, cast identity, set continuity, clipping, hum, clicks, diction).
- `gradeChecklist(type, answers)` returns PASS/FAIL; any wrong or unanswered
  item fails ("can't tell" fails too).
- UI: the **QC** button on each generated image opens the checklist and shows a
  pre-flight prompt audit.

## Shot prompt QA (`promptQa.js`)

`lintShotPrompt(prompt)` scores camera/lens language, lighting direction,
wardrobe, set/location, eyeline for multi-person shots, and real product size
(e.g. `48 mm`). Missing anchors are returned as actionable hints (also rendered
inside the QC dialog).

## Audio QC (`audioQc.js`)

`analyzeAudio(channels, sampleRate)` is a pure Float32 analyzer: peak/RMS dB,
clipping samples, DC offset, duration, and issue codes (`clipping`, `too_quiet`,
`dc_offset`, `too_short`, `empty_audio`) with human hints via `audioQcHints()`.
Runs in the browser or tests without ffmpeg.

## Tests

`tests/unit/filmCrew.test.js` — 10 tests covering grading, prompt anchors,
multi-person eyeline detection, clipping/quiet/healthy/empty audio.
