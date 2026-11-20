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

## Optional features (implemented)

### Cast library (`castLibrary.js` + `CrewPanel` → Cast tab)
Named characters with a continuity description and reference-image URLs,
persisted in localStorage. Applying a shot appends a "Cast (keep identical
across shots)" prompt block and merges the reference images into multi-image
models (respecting each model's max items).

### Scene/set builder (`sceneSet.js` + `CrewPanel` → Scene tab)
Structured location, time of day, wardrobe, props, light direction, camera,
lens and eyeline. Applying composes a continuity prompt prefix and persists the
set for the next shot.

### Upload-time audio QC (`analyzeAudioFile`)
Audio Studio and Lip Sync decode uploads with Web Audio and show a non-blocking
toast when clipping, excessive quiet, DC offset or too-short duration is found.

### Pluggable ML checks (`mlChecks.js`)
Configure `NEXT_PUBLIC_FILM_CREW_ML_ENDPOINT` (or
`window.__FILM_CREW_ML_ENDPOINT__`) to call an external QC service for
product-size/face-identity checks. The QC dialog shows a "Run" button and
renders PASS/FAIL rows; without an endpoint it is hidden (no 1 GB model
downloads in the browser).
