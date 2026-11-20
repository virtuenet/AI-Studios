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

`tests/unit/filmCrew.test.js` covers grading, prompt anchors, multi-person
eyeline detection, clipping/quiet/healthy/empty audio, cast/scene continuity,
and the ML client. `services/qc/tests` covers the service geometry, request
validation and endpoints, plus an opt-in real-model test.

## Server-side ML QC (`services/qc`)

The heavy checks run in a small FastAPI service, not in the browser:

| Check | How it works |
|-------|--------------|
| `product-size` | **YuNet** finds the holder's face and its eye landmarks. The eye distance (adult average 63 mm) is the ruler; the largest contour outside the face approximates the product's short side. The measured width is compared with the real width supplied by the user (default ±20%). |
| `face-identity` | **YuNet** aligns both faces and **SFace** (Apache 2.0 face-recognition embedding) compares them with cosine similarity. Default threshold `0.52`; calibrate it on your own judged stills. |

Both models are downloaded once from the OpenCV Zoo, SHA-256 verified, and
cached (`QC_MODELS_DIR`, default `~/.cache/ai-studios-qc`). The Docker image
bakes them in at build time. The browser never downloads model weights.

### Run it

```bash
cd services/qc
python3 -m venv .venv && . .venv/bin/activate
pip install -r requirements-dev.txt
uvicorn main:app --host 0.0.0.0 --port 8001
```

Then point the app at it:

```bash
ML_QC_URL=http://127.0.0.1:8001 npm run dev
```

`GET /api/qc` reports whether the service is configured; the QC dialog only
shows the ML panel when it is. `POST /api/qc` validates the request and proxies
to `/qc/product-size` or `/qc/face-identity`; the service URL stays server-side.
Set `NEXT_PUBLIC_FILM_CREW_ML_ENDPOINT` (or
`window.__FILM_CREW_ML_ENDPOINT__`) only if you need to bypass the proxy.

### Docker

```bash
ML_QC_URL=http://qc:8001 docker compose --profile qc up -d --build
```

The `qc` profile exposes the service only on the compose network and sets
`QC_IDENTITY_THRESHOLD` / `QC_SIZE_TOLERANCE` from the environment.

### Limits

No face in frame (an insert) gives no scale; a product held well in front of the
eyes reads up to ~15% big; a face turned past ~60 degrees gives no usable eye
distance. The product contour is a heuristic, not a segmentation model, so
glass and thin objects are less reliable. Scores screen a take; they never
replace the human review.

### Tests

```bash
cd services/qc
python -m pytest tests -q                    # geometry + API (offline)
QC_MODEL_TESTS=1 python -m pytest tests -q   # also downloads and runs YuNet/SFace
```

CI runs the full suite including the real-model test, and caches the models
between runs.

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

### ML client (`mlChecks.js`)
`checkMlAvailability()` hides the ML panel unless `/api/qc` reports the service
is enabled. `runMlChecks()` posts the selected check and renders PASS/FAIL rows
with the measured size or similarity score. No unconfigured external endpoint
is contacted.
