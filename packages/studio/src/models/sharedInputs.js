// Shared model input schema fragments, extracted from models.js.
// Used by the per-category model files in this directory.

// Synced from the canonical Muapi schema_data.json catalog.

// Verified against https://api.muapi.ai/openapi.json on 2026-09-09.
// Seedance 2.5 shares common inputs across its Standard, Intl and Spicy routes.
// Spicy T2V/I2V routes additionally support native resolution and audio
// generation controls.
export const SEEDANCE_25_ASPECT_RATIO_INPUT = Object.freeze({
  enum: Object.freeze(["adaptive", "16:9", "9:16", "1:1", "4:3", "3:4", "21:9", "9:21"]),
  type: "string",
  title: "Aspect Ratio",
  name: "aspect_ratio",
  description: "Aspect ratio of the output video.",
  default: "16:9",
});
export const SEEDANCE_25_RESOLUTION_INPUT = Object.freeze({
  enum: Object.freeze(["480p", "720p", "1080p", "4K"]),
  type: "string",
  title: "Resolution",
  name: "resolution",
  description: "Output video resolution.",
  default: "1080p",
});
export const SEEDANCE_HIGH_BITRATE_INPUT = Object.freeze({
  type: "boolean",
  title: "High Bitrate",
  name: "high_bitrate",
  description: "Enable high bitrate mode for better visual fidelity. Produces larger files.",
  default: false,
});
export const SEEDANCE_GENERATE_AUDIO_INPUT = Object.freeze({
  type: "boolean",
  title: "Generate Audio",
  name: "generate_audio",
  description: "Whether to generate audio for the video.",
  default: true,
});
export const SEEDANCE_15_EXTEND_INPUTS = Object.freeze({
  resolution: {
    type: "string", title: "Resolution", name: "resolution",
    enum: ["480p", "720p"], default: "720p",
  },
  duration: {
    type: "int", title: "Duration", name: "duration",
    default: 5, minValue: 4, maxValue: 12, step: 1,
  },
  generate_audio: SEEDANCE_GENERATE_AUDIO_INPUT,
  camera_fixed: {
    type: "boolean", title: "Camera Fixed", name: "camera_fixed",
    description: "Keep the camera still.", default: false,
  },
});
export const SEEDANCE_25_SEED_INPUT = Object.freeze({
  type: "int",
  title: "Seed",
  name: "seed",
  description: "Random seed for reproducible generation. Use -1 for random.",
  minValue: -1,
  maxValue: 4294967295,
});
export const GROK_ASPECT_RATIO_INPUT = Object.freeze({
  type: "string", title: "Aspect Ratio", name: "aspect_ratio",
  enum: Object.freeze(["9:16", "16:9", "2:3", "3:2", "1:1"]),
  default: "2:3",
});
export const GROK_RESOLUTION_INPUT = Object.freeze({
  type: "string", title: "Resolution", name: "resolution",
  enum: Object.freeze(["480p", "720p"]), default: "480p",
});
export const GROK_DURATION_INPUT = Object.freeze({
  type: "int", title: "Duration", name: "duration",
  default: 6, minValue: 6, maxValue: 30, step: 1,
});
export const GROK_IMAGE_INPUT = Object.freeze({
  type: "array", title: "Image URLs", name: "images_list",
  items: Object.freeze({ type: "string" }), minItems: 1, maxItems: 7,
});
export const GROK_STYLE_INPUT = Object.freeze({
  type: "string", title: "Style", name: "mode", configurable: true,
  enum: Object.freeze(["normal", "fun", "spicy"]), default: "normal",
});
export const MINIMAX_H3_OPEN_SEED_INPUT = Object.freeze({
  type: "integer",
  title: "Seed",
  name: "seed",
  description: "Random seed. Use -1 for random.",
  default: -1,
});

// Wan inputs verified against https://api.muapi.ai/openapi.json on 2026-09-09.
export const WAN_AUDIO_INPUT = Object.freeze({
  type: "string", field: "audio", title: "Guiding audio", name: "audio_url",
  description: "Audio to guide the video.",
});
export const WAN_NEGATIVE_PROMPT_INPUT = Object.freeze({
  type: "string", title: "Negative prompt", name: "negative_prompt",
  description: "What to leave out of the video.",
});
export const WAN_22_RESOLUTION_INPUT = Object.freeze({
  type: "string", title: "Resolution", name: "resolution",
  enum: Object.freeze(["480p", "720p"]), default: "480p",
});
export const WAN_27_RESOLUTION_INPUT = Object.freeze({
  type: "string", title: "Resolution", name: "resolution",
  enum: Object.freeze(["720p", "1080p"]), default: "720p",
});

// Happy Horse inputs verified against https://api.muapi.ai/openapi.json on 2026-09-09.
export const HAPPY_HORSE_SEED_INPUT = Object.freeze({
  type: "int", title: "Seed", name: "seed",
  description: "Optional seed for repeatable results.",
  minValue: 0, maxValue: 2147483647, step: 1,
});
export const HAPPY_HORSE_EDIT_INPUTS = Object.freeze({
  prompt: { type: "string", title: "Prompt", name: "prompt" },
  video_url: { type: "string", title: "Source video", name: "video_url" },
  images_list: {
    type: "array", items: { type: "string" }, title: "Reference images",
    name: "images_list", maxItems: 5,
  },
  audio_setting: {
    type: "string", title: "Audio", name: "audio_setting",
    enum: ["auto", "origin"], default: "auto",
  },
  seed: HAPPY_HORSE_SEED_INPUT,
});

// Kling inputs verified against https://api.muapi.ai/openapi.json on 2026-09-09.
// Output sizes are recorded only for documented routes;
// resolution selects an endpoint and is not a native request parameter.
export const KLING_ASPECT_RATIO_INPUT = Object.freeze({
  type: "string", title: "Aspect Ratio", name: "aspect_ratio",
  enum: Object.freeze(["16:9", "9:16", "1:1"]), default: "16:9",
});
export const KLING_AUDIO_INPUT = Object.freeze({
  type: "boolean", title: "Generate audio", name: "generate_audio", default: true,
});
export const KLING_SOUND_INPUT = Object.freeze({
  type: "boolean", title: "Generate audio", name: "sound", default: true,
});
export const KLING_KEEP_SOUND_INPUT = Object.freeze({
  type: "boolean", title: "Keep original sound", name: "keep_original_sound",
  default: true,
});
export const KLING_MOTION_INPUTS = Object.freeze({
  prompt: { type: "string", title: "Prompt", name: "prompt" },
  image_url: { type: "string", field: "image", title: "Character image", name: "image_url" },
  video_url: { type: "string", field: "video", title: "Motion video", name: "video_url" },
  character_orientation: {
    type: "string", title: "Character orientation", name: "character_orientation",
    enum: ["image", "video"], default: "image",
  },
});
export const KLING_3_MOTION_INPUTS = Object.freeze({
  ...KLING_MOTION_INPUTS,
  keep_original_sound: KLING_KEEP_SOUND_INPUT,
});
export const KLING_O1_EDIT_INPUTS = Object.freeze({
  prompt: { type: "string", title: "Prompt", name: "prompt" },
  video_url: { type: "string", field: "video", title: "Source video", name: "video_url" },
  images_list: {
    type: "array", items: { type: "string" }, title: "Reference images",
    name: "images_list", maxItems: 4,
  },
  keep_original_sound: KLING_KEEP_SOUND_INPUT,
});
export const KLING_O1_PRO_EDIT_INPUTS = Object.freeze({
  ...KLING_O1_EDIT_INPUTS,
  aspect_ratio: KLING_ASPECT_RATIO_INPUT,
});
export const KLING_OMNI_REFERENCE_INPUT = Object.freeze({
  type: "array", items: { type: "string" }, title: "Reference images",
  name: "images_list", minItems: 1, maxItems: 4,
});

export const VIDU_REFERENCE_INPUT = Object.freeze({
  type: "array", items: { type: "string" }, title: "Reference images",
  name: "images_list", minItems: 1,
});
export const VIDU_Q2_MUSIC_INPUT = Object.freeze({
  type: "boolean", title: "Background music", name: "bgm", default: false,
  description: "Sets duration to 4 seconds.", descriptionKey: "musicDuration",
});
// Q2 music requires four seconds only on the regular text/image routes.
export const VIDU_Q2_MUSIC_RULES = Object.freeze([
  { when: { bgm: [true] }, options: { durations: [4] } },
]);
export const VIDU_2_FORMAT_RULES = Object.freeze([
  { when: { resolution: ["360p", "720p"] }, options: { aspectRatios: ["16:9"] } },
  { when: { resolution: ["1080p"] }, options: { aspectRatios: ["1:1"] } },
]);

// PixVerse 4.5 supports five seconds at 1080p; 5.5 also supports eight.
export const PIXVERSE_45_DURATION_RULES = Object.freeze([
  { when: { resolution: ["1080p"] }, options: { durations: [5] } },
]);
export const PIXVERSE_55_DURATION_RULES = Object.freeze([
  { when: { resolution: ["1080p"] }, options: { durations: [5, 8] } },
]);
export const PIXVERSE_55_SETTINGS = Object.freeze({
  style: {
    type: "string", title: "Style", name: "style",
    enum: ["none", "anime", "3d_animation", "clay", "comic", "cyberpunk"], default: "none",
  },
  thinking: {
    type: "string", title: "Prompt enhancement", name: "thinking",
    enum: ["auto", "enabled", "disabled"], default: "auto",
    description: "Let the model refine your description.",
  },
  audio: {
    type: "boolean", title: "Generate audio", name: "audio", default: false,
  },
  multi_clip: {
    type: "boolean", title: "Multiple shots", name: "multi_clip", default: false,
    description: "Use several shots with camera changes.",
  },
});

export const LTX_GENERATE_AUDIO_INPUT = Object.freeze({
  type: "boolean", title: "Generate Audio", name: "generate_audio",
  description: "Whether to generate audio.", default: true,
});
