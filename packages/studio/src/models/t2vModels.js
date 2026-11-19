// Extracted from models.js — t2vModels catalog.
import { SEEDANCE_25_ASPECT_RATIO_INPUT, SEEDANCE_25_RESOLUTION_INPUT, SEEDANCE_HIGH_BITRATE_INPUT, SEEDANCE_GENERATE_AUDIO_INPUT, SEEDANCE_25_SEED_INPUT, GROK_ASPECT_RATIO_INPUT, GROK_RESOLUTION_INPUT, GROK_DURATION_INPUT, GROK_STYLE_INPUT, MINIMAX_H3_OPEN_SEED_INPUT, WAN_AUDIO_INPUT, KLING_AUDIO_INPUT, KLING_SOUND_INPUT, VIDU_Q2_MUSIC_INPUT, VIDU_Q2_MUSIC_RULES, PIXVERSE_45_DURATION_RULES, PIXVERSE_55_DURATION_RULES, PIXVERSE_55_SETTINGS, LTX_GENERATE_AUDIO_INPUT } from './sharedInputs.js';

export const t2vModels = [
  {
    "id": "seedance-lite-t2v",
    "name": "Seedance 1.0 Lite",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "9:21"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 3,
        "maxValue": 12,
        "step": 1
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "480p"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-pro-t2v",
    "name": "Seedance 1.0 Pro",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 3,
        "maxValue": 12,
        "step": 1
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "480p"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-pro-t2v-fast",
    "name": "Seedance 1.0 Pro Fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 2,
        "maxValue": 12,
        "step": 1
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "480p"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-v1.5-pro-t2v",
    "name": "Seedance 1.5 Pro",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 4,
        "maxValue": 12,
        "step": 1
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "720p"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-v1.5-pro-t2v-fast",
    "name": "Seedance v1.5 Pro Fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 4,
        "maxValue": 12,
        "step": 1
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "720p"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-v2.0-t2v",
    "name": "Seedance 2.0",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          5,
          10,
          15
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 5
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Quality",
        "name": "quality",
        "type": "string",
        "description": "Quality of the generated video.",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-v2.0-extend",
    "name": "Seedance 2.0 Extend",
    "requiresRequestId": true,
    "inputs": {
      "request_id": {
        "type": "string",
        "title": "Request ID",
        "name": "request_id",
        "description": "Request ID of the original Seedance 2.0 video generation.",
        "placeholder": "abcdefg-123-456-789-a1b2c3d4e5f6"
      },
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional prompt to guide the extension. Reference images with @image2…@image9, videos with @video1…@video3 (the source video's last frame is always @image1)."
      },
      "images_list": {
        "type": "array",
        "title": "Reference Images",
        "name": "images_list",
        "description": "Up to 8 additional reference image URLs. Each Nth image maps to @image(N+1) in the prompt.",
        "maxItems": 8
      },
      "video_files": {
        "type": "array",
        "title": "Reference Videos",
        "name": "video_files",
        "description": "Up to 3 reference video clip URLs (MP4, max 15s each). Each Nth video maps to @videoN in the prompt.",
        "maxItems": 3
      },
      "duration": {
        "enum": [
          5,
          10,
          15
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video extension in seconds",
        "default": 5
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Quality",
        "name": "quality",
        "type": "string",
        "description": "Quality of the generated video.",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "kling-v2.1-master-t2v",
    "fixedParameters": { resolution: "1080p" },
    "name": "Kling 2.1 Master",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v2.5-turbo-pro-t2v",
    "name": "Kling 2.5 Turbo Pro",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "9:16"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v2.6-pro-t2v",
    "name": "Kling 2.6 Pro",
    "inputs": {
      "sound": KLING_SOUND_INPUT,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          5,
          10
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-o1-text-to-video",
    "name": "Kling O1 Pro",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          5,
          10
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3.0-pro-text-to-video",
    "fixedParameters": { resolution: "1080p" },
    "name": "Kling 3.0 Pro",
    "inputs": {
      "generate_audio": KLING_AUDIO_INPUT,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "The aspect ratio of the generated video",
        "default": "16:9"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3.0-standard-text-to-video",
    "fixedParameters": { resolution: "720p" },
    "name": "Kling 3.0 Standard",
    "inputs": {
      "generate_audio": KLING_AUDIO_INPUT,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "The aspect ratio of the generated video",
        "default": "16:9"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "veo3-text-to-video",
    "name": "Veo 3",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired video content."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "veo3-fast-text-to-video",
    "name": "Veo 3 Fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired video content."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "veo3.1-text-to-video",
    "name": "Veo 3.1",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          8
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 8
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p",
          "4k"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "1080p"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "veo3.1-fast-text-to-video",
    "name": "Veo 3.1 Fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          8
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 8
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p",
          "4k"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "1080p"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "veo3.1-lite-text-to-video",
    "name": "Veo 3.1 Lite",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          8
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 8
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p",
          "4k"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "1080p"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "runway-text-to-video",
    "name": "Runway Gen-3",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to be used to generate a video"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          5,
          8
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration in seconds. If 8-second video is selected, 1080p resolution cannot be used.",
        "default": 5
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video. If 1080p is selected, 8-second video cannot be generated.",
        "default": "720p"
      }
    },
    "provider": "runway",
    "provider_name": "RunwayML"
  },
  {
    "id": "wan2.1-text-to-video",
    "name": "Wan 2.1",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      },
      "resolution": {
        "enum": [
          "480p",
          "720p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "480p"
      },
      "quality": {
        "enum": [
          "medium",
          "high"
        ],
        "title": "Quality",
        "name": "quality",
        "type": "string",
        "description": "The quality of the generated video.",
        "default": "medium"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.2-text-to-video",
    "name": "Wan 2.2",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5,
        "minValue": 5,
        "maxValue": 8,
        "step": 3
      },
      "resolution": {
        "enum": [
          "480p",
          "720p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "480p"
      },
      "quality": {
        "enum": [
          "medium",
          "high"
        ],
        "title": "Quality",
        "name": "quality",
        "type": "string",
        "description": "The quality of the generated video.",
        "default": "medium"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.2-5b-fast-t2v",
    "name": "Wan 2.2 Fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "580p",
          "720p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "480p"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.5-text-to-video",
    "name": "Wan 2.5",
    "inputs": {
      "audio_url": WAN_AUDIO_INPUT,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "480p"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.5-text-to-video-fast",
    "name": "Wan 2.5 Fast",
    "inputs": {
      "audio_url": WAN_AUDIO_INPUT,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "720p"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.6-text-to-video",
    "name": "Wan 2.6",
    "inputs": {
      "shot_type": {
        "type": "string", "title": "Shots", "name": "shot_type",
        "enum": ["single", "multi"], "default": "single"
      },
      "audio_url": WAN_AUDIO_INPUT,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          5,
          10,
          15
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 5
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "720p"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "hunyuan-text-to-video",
    "name": "Hunyuan",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      }
    },
    "provider": "hunyuan",
    "provider_name": "Hunyuan"
  },
  {
    "id": "hunyuan-fast-text-to-video",
    "name": "Hunyuan Fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      }
    },
    "provider": "hunyuan",
    "provider_name": "Hunyuan"
  },
  {
    "id": "pixverse-v4.5-t2v",
    "name": "PixVerse V4.5",
    "commonParameterRules": PIXVERSE_45_DURATION_RULES,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          5,
          8
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds. 8s not supported for 1080p resolution.",
        "default": 5
      },
      "resolution": {
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "enum_dependencies": {
          "duration": {
            "8": [
              "360p",
              "540p",
              "720p"
            ]
          }
        },
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "720p"
      }
    },
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "pixverse-v5-t2v",
    "name": "PixVerse V5",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 5,
        "maxValue": 8,
        "step": 3
      },
      "resolution": {
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "720p"
      }
    },
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "pixverse-v5.5-t2v",
    "name": "PixVerse V5.5",
    "commonParameterRules": PIXVERSE_55_DURATION_RULES,
    "inputs": {
      ...PIXVERSE_55_SETTINGS,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          5,
          8,
          10
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5
      },
      "resolution": {
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "enum_dependencies": {
          "duration": {
            "10": [
              "360p",
              "540p",
              "720p"
            ]
          }
        },
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "360p"
      }
    },
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "minimax-hailuo-02-standard-t2v",
    "name": "MiniMax Hailuo 02 Standard",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "duration": {
        "enum": [
          6,
          10
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 6
      },
      "resolution": {
        "enum": [
          "768P"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "768P"
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "minimax-hailuo-02-pro-t2v",
    "name": "MiniMax Hailuo 02 Pro",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "duration": {
        "enum": [
          6
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 6
      },
      "resolution": {
        "enum": [
          "1080P"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "1080P"
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "minimax-hailuo-2.3-pro-t2v",
    "name": "MiniMax Hailuo 2.3 Pro",
    // Hailuo 2.3 supports 1080p only at 6s; MuAPI fixes the duration on this route.
    // https://platform.minimax.io/docs/api-reference/video-generation-t2v
    "fixedParameters": { "duration": 6 },
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "resolution": {
        "enum": [
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "1080p"
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "minimax-hailuo-2.3-standard-t2v",
    "name": "MiniMax Hailuo 2.3 Standard",
    // https://muapi.ai/zh/playground/minimax-hailuo-2.3-standard-t2v
    "fixedParameters": { "resolution": "768p" },
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "duration": {
        "enum": [
          6,
          10
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 6
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "openai-sora",
    "name": "Sora",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "480p"
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "openai-sora-2-text-to-video",
    "name": "Sora 2",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          4,
          8,
          12,
          16,
          20
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 8
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "openai-sora-2-pro-text-to-video",
    "name": "Sora 2 Pro",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          4,
          8,
          12,
          16,
          20
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 8
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "720p"
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "vidu-v2.0-t2v",
    "name": "Vidu 2.0",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video"
      },
      "aspect_ratio": {
        "enum": [
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "9:16"
      },
      "duration": {
        "enum": [
          4
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 4
      },
      "resolution": {
        "enum": [
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "1080p"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "ovi-text-to-video",
    "name": "Ovi",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      }
    },
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "grok-imagine-text-to-video",
    "name": "Grok Imagine",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "aspect_ratio": { ...GROK_ASPECT_RATIO_INPUT, default: "1:1" },
      "mode": GROK_STYLE_INPUT,
      "resolution": GROK_RESOLUTION_INPUT,
      "duration": GROK_DURATION_INPUT
    },
    "provider": "grok",
    "provider_name": "xAI"
  },
  {
    "id": "ltx-2-pro-text-to-video",
    "name": "LTX 2 Pro",
    "inputs": {
      "generate_audio": LTX_GENERATE_AUDIO_INPUT,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "duration": {
        "enum": [
          6,
          8,
          10
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 6
      }
    },
    "provider": "lightricks",
    "provider_name": "Lightricks"
  },
  {
    "id": "ltx-2-fast-text-to-video",
    "name": "LTX 2 Fast",
    "inputs": {
      "generate_audio": LTX_GENERATE_AUDIO_INPUT,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "duration": {
        "enum": [
          6,
          8,
          10,
          12,
          14,
          16,
          18,
          20
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 6
      }
    },
    "provider": "lightricks",
    "provider_name": "Lightricks"
  },
  {
    "id": "ltx-2-19b-text-to-video",
    "name": "LTX 2 19B",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "The aspect ratio of the generated video",
        "default": "16:9"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 5,
        "maxValue": 20,
        "step": 1
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "720p"
      }
    },
    "provider": "lightricks",
    "provider_name": "Lightricks"
  }
,
  {
    "id": "veo3.1-extend-video",
    "name": "Veo 3.1 Extend",
    "requiresRequestId": true,
    "endpoint": "veo3.1-extend-video",
    "inputs": {
      "request_id": {
        "examples": [
          ""
        ],
        "description": "Request ID of the original video generation. Must be a valid Id returned from the video generation interface.",
        "format": "text",
        "type": "string",
        "title": "Request Id",
        "name": "request_id",
        "placeholder": "abcdefg-123-456-789-a1b2c3d4e5f6"
      },
      "prompt": {
        "examples": [
          ""
        ],
        "description": "Text prompt describing the video.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "veo3.1-4k-video",
    "name": "Veo 3.1 4K",
    "requiresRequestId": true,
    "endpoint": "veo3.1-4k-video",
    "inputs": {
      "request_id": {
        "examples": [
          ""
        ],
        "description": "Request ID of the original video generation. Must be a valid Id returned from the video generation interface.",
        "format": "text",
        "type": "string",
        "title": "Request Id",
        "name": "request_id",
        "placeholder": "a8a09145bde3fb496ecd00ce4777a295"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "seedance-2-t2v",
    "name": "Seedance 2 T2V",
    "endpoint": "seedance-v2.0-t2v",
    "inputs": {
      "prompt": {
        "examples": [
          "A determined penguin straps itself into a homemade rocket sled on an icy mountain. The rocket ignites with a massive burst and launches the penguin across the frozen landscape at insane speed, blasting through snowdrifts and leaving a fiery trail behind."
        ],
        "type": "string",
        "title": "Prompt",
        "description": "Text prompt describing the video. To use a fictional character, reference it inline with @character:<id> (the request_id from a completed Seedance 2 Character generation). Multiple characters are supported. Example: '@character:ab539e5f walks on the beach at sunset'."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4"
        ],
        "title": "Aspect Ratio",
        "type": "string",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          5,
          10,
          15
        ],
        "title": "Duration",
        "type": "integer",
        "default": 5
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Quality",
        "type": "string",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-extend",
    "name": "Seedance 2 Extend",
    "requiresRequestId": true,
    "endpoint": "seedance-v2.0-extend",
    "inputs": {
      "request_id": {
        "examples": [
          "cab9517f-1818-4910-8d66-292701c78c2d"
        ],
        "description": "Request ID of the original Seedance 2.0 video generation.",
        "format": "text",
        "type": "string",
        "title": "Request Id",
        "name": "request_id",
        "placeholder": "abcdefg-123-456-789-a1b2c3d4e5f6"
      },
      "prompt": {
        "examples": [
          ""
        ],
        "description": "Optional prompt to guide the extension. Reference additional images with @image2…@image9, videos with @video1…@video3, and audio with @audio1…@audio3 — the source video's last frame is always @image1.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "Up to 8 additional reference image URLs (JPEG/PNG/WebP). Each Nth image corresponds to @image(N+1) in the prompt (the source video's last frame is @image1).",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 8
      },
      "video_files": {
        "examples": [],
        "description": "Up to 3 reference video clip URLs (MP4, max 15s each). Each Nth video corresponds to @videoN in the prompt.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Video Reference URLs",
        "name": "video_files",
        "maxItems": 3
      },
      "audio_files": {
        "examples": [],
        "description": "Up to 3 reference audio clip URLs (MP3/WAV, total max 15s). Each Nth audio corresponds to @audioN in the prompt.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Audio Reference URLs",
        "name": "audio_files",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9",
        "description": "Output video aspect ratio (only used when reference images/videos/audio are provided)."
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Length of the extension clip in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Quality",
        "type": "string",
        "name": "quality",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "ltx-2.3-text-to-video",
    "name": "LTX 2.3",
    "endpoint": "ltx-2.3-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A high-speed train suddenly bursts through the wall of a quiet apartment building and races straight through the living rooms and hallways. Furniture flies everywhere as the train blasts through multiple floors before exiting the other side of the building."
        ],
        "description": "Text prompt describing the video.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Duration of the generated video in seconds.",
        "default": 5,
        "minValue": 5,
        "maxValue": 20,
        "step": 1
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the generated video.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "720p"
      },
      "seed": {
        "title": "Seed",
        "name": "seed",
        "type": "int",
        "description": "Random seed. -1 for random.",
        "default": -1
      }
    },
    "provider": "lightricks",
    "provider_name": "Lightricks"
  },

  {
    "id": "seedance-2-new-t2v",
    "name": "Seedance 2 New T2V",
    "endpoint": "seedance-2.0-new-t2v",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the video to generate.",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "type": "string",
        "title": "Quality",
        "name": "quality",
        "description": "high = standard model (slower, better quality); basic = fast model.",
        "default": "basic"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds (4–15).",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "grok-imagine-extend",
    "name": "Grok Imagine Extend",
    "requiresRequestId": true,
    "promptRequired": true,
    "endpoint": "grok-imagine-extend",
    "inputs": {
      "request_id": {
        "examples": [
          ""
        ],
        "description": "Request ID of the original video generation. Must be a valid ID returned from a previous Grok Imagine video generation.",
        "format": "text",
        "type": "string",
        "title": "Request Id",
        "name": "request_id",
        "placeholder": "abcdefg-123-456-789-a1b2c3d4e5f6"
      },
      "prompt": {
        "examples": [
          "Continue the scene with the camera slowly panning right to reveal a vast ocean horizon, golden sunset light reflecting on the water."
        ],
        "description": "Text prompt describing how to continue the video.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "extend_times": {
        "enum": [
          6,
          10
        ],
        "title": "Extend Duration",
        "name": "extend_times",
        "type": "integer",
        "description": "Duration in seconds to extend the video.",
        "default": 6
      },
      "resolution": GROK_RESOLUTION_INPUT
    },
    "provider": "grok",
    "provider_name": "xAI"
  },
  {
    "id": "pixverse-v6-t2v",
    "name": "PixVerse V6",
    "endpoint": "pixverse-v6-t2v",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the video to generate.",
        "examples": [
          "A young woman sprints through a dense futuristic city street when gravity suddenly shifts sideways. Cars slide across buildings, streetlights bend, and debris floats mid-air. She jumps between tilted surfaces while the camera dynamically rotates with the changing gravity, creating a disorienting chase sequence with intense motion blur and sparks flying."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16",
          "2:3",
          "3:2",
          "21:9"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Output video resolution.",
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 1,
        "maxValue": 15,
        "step": 1
      },
      "generate_audio_switch": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio_switch",
        "description": "Enable AI-generated audio for the video.",
        "default": false
      }
    },
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "wan2.7-text-to-video",
    "name": "Wan2.7",
    "endpoint": "wan2.7-text-to-video",
    "family": "wan2.7",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description",
        "examples": [
          "A cinematic video..."
        ]
      },
      "audio_url": {
        "type": "string",
        "title": "Audio URL",
        "name": "audio_url",
        "description": "Audio file to guide generation",
        "field": "audio",
        "examples": []
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "The aspect ratio of the generated video.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Output resolution",
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "Video duration in seconds (2-15).",
        "default": 5,
        "minValue": 2,
        "maxValue": 15,
        "step": 1
      },
      "negative_prompt": {
        "examples": [],
        "type": "string",
        "title": "Negative Prompt",
        "name": "negative_prompt",
        "description": "What not to generate"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "seedance-2-t2v-480p",
    "name": "Seedance 2 T2V 480P",
    "endpoint": "seedance-2.0-t2v-480p",
    "inputs": {
      "prompt": {
        "examples": [
          "A determined penguin straps itself into a homemade rocket sled on an icy mountain. The rocket ignites with a massive burst and launches the penguin across the frozen landscape at insane speed, blasting through snowdrifts and leaving a fiery trail behind."
        ],
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video. To use a fictional character, reference it inline with @character:<id> (the request_id from a completed Seedance 2 Character generation). Multiple characters are supported. Example: '@character:ab539e5f walks on the beach at sunset'."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Quality",
        "name": "quality",
        "type": "string",
        "description": "high=$0.15/sec, basic=$0.12/sec",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-text-to-video",
    "name": "Seedance 2",
    "endpoint": "seedance-2-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the video to generate. Use @character:<id> to anchor the video to a Seedance 2 character — automatically switches to image-to-video mode.",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": SEEDANCE_HIGH_BITRATE_INPUT
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-text-to-video-fast",
    "name": "Seedance 2.0 Fast",
    "endpoint": "seedance-2-text-to-video-fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the video to generate. Use @character:<id> to anchor the video to a Seedance 2 character — automatically switches to image-to-video mode.",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": SEEDANCE_HIGH_BITRATE_INPUT
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-text-to-video",
    "name": "Seedance 2 VIP",
    "endpoint": "seedance-2-vip-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the video to generate. Use @character:<id> to anchor the video to a Seedance 2 character — automatically switches to image-to-video mode. Use @omni-character:<char_id> for a trained Kinovi character.",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-text-to-video-fast",
    "name": "Seedance 2 VIP Text to Video Fast",
    "endpoint": "seedance-2-vip-text-to-video-fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the video to generate. Use @character:<id> to anchor the video to a Seedance 2 character — automatically switches to image-to-video mode. Use @omni-character:<char_id> for a trained Kinovi character.",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "happy-horse-1-text-to-video-1080p",
    "name": "HappyHorse 1.0 1080P",
    "endpoint": "happy-horse-1-text-to-video-1080p",
    "fixedParameters": { "resolution": "1080p" },
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired video content.",
        "examples": [
          "A horse hosting a live cooking show confidently flips a pancake into the air, but the pancake catches fire and triggers a chain reaction of explosions throughout the kitchen. Pots launch into the air, flames burst from ovens, and the horse continues cooking like nothing is wrong."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "happy-horse-1-text-to-video-720p",
    "name": "HappyHorse 1.0 720P",
    "endpoint": "happy-horse-1-text-to-video-720p",
    "fixedParameters": { "resolution": "720p" },
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired video content.",
        "examples": [
          "Inside a crowded airplane cabin, a horse wearing a pilot uniform suddenly realizes the plane is flying upside down. Passengers and luggage slam into the ceiling while drink carts roll wildly through the aisle. The horse panics and runs toward the cockpit as turbulence shakes the entire plane violently."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "veo-4-text-to-video",
    "name": "Veo 4",
    "endpoint": "veo-4-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired video content.",
        "examples": [
          "A cinematic aerial shot of a city at dusk, golden hour lighting, slow dolly forward."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 8,
        "minValue": 5,
        "maxValue": 30,
        "step": 1
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "seedance-2-vip-text-to-video-1080p",
    "name": "Seedance 2 VIP Text to Video 1080P",
    "endpoint": "sd-2-vip-text-to-video-1080p",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the video to generate.",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": SEEDANCE_HIGH_BITRATE_INPUT
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-text-to-video-fast-1080p",
    "name": "Seedance 2 VIP Text to Video Fast 1080P",
    "endpoint": "sd-2-vip-text-to-video-fast-1080p",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the video to generate.",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": SEEDANCE_HIGH_BITRATE_INPUT
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "kling-v3.0-4k-text-to-video",
    "fixedParameters": { resolution: "4K" },
    "name": "Kling 3.0 4K",
    "endpoint": "kling-v3.0-4k-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A close-up view of a mechanical watch lying open on a dark surface. As the video plays, the internal gears begin turning smoothly, tiny springs flex and release, and the balance wheel oscillates rhythmically. Light reflections glide across polished metal parts while the camera slowly pans sideways, revealing the layered precision of the mechanism. Studio lighting, macro detail, clean background, calm and satisfying motion."
        ],
        "description": "Text prompt describing the video.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "The aspect ratio of the generated video"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      },
      "generate_audio": KLING_AUDIO_INPUT
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "vidu-q3-pro-text-to-video",
    "name": "Vidu Q3 Pro",
    "endpoint": "vidu-q3-pro-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "The whale crashes downward through the street, releasing an enormous wave of water that floods the city instantly. Cars flip and streetlights bend while the camera dives through the rushing floodwater beside the whale."
        ],
        "description": "Text prompt describing the video.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "resolution": {
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "1:1"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5,
        "minValue": 1,
        "maxValue": 16,
        "step": 1
      },
      "audio": {
        "type": "boolean",
        "title": "Audio",
        "name": "audio",
        "description": "Whether to generate audio for the video.",
        "default": false
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q3-turbo-text-to-video",
    "name": "Vidu Q3 Turbo",
    "endpoint": "vidu-q3-turbo-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A tiny astronaut standing on a kitchen countertop beside giant cooking equipment, dramatic cinematic scale contrast"
        ],
        "description": "Text prompt describing the video.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "resolution": {
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "1:1"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5,
        "minValue": 1,
        "maxValue": 16,
        "step": 1
      },
      "audio": {
        "type": "boolean",
        "title": "Audio",
        "name": "audio",
        "description": "Whether to generate audio for the video.",
        "default": false
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q2-pro-text-to-video",
    "name": "Vidu Q2 Pro",
    "endpoint": "vidu-q2-pro-text-to-video",
    "commonParameterRules": VIDU_Q2_MUSIC_RULES,
    "inputs": {
      "prompt": {
        "examples": [
          "A lone astronaut walks slowly across a cracked Martian plain at dusk, her boots kicking up rust-coloured dust. The camera tracks beside her in a slow dolly as twin moons rise over distant mesas, soft volumetric light spilling across her visor."
        ],
        "description": "Text prompt describing the video.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5,
        "minValue": 2,
        "maxValue": 8,
        "step": 1
      },
      "bgm": VIDU_Q2_MUSIC_INPUT,
      "movement_amplitude": {
        "enum": [
          "auto",
          "small",
          "medium",
          "large"
        ],
        "title": "Movement Amplitude",
        "name": "movement_amplitude",
        "type": "string",
        "description": "The movement amplitude of objects in the frame.",
        "default": "auto"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q2-turbo-text-to-video",
    "name": "Vidu Q2 Turbo",
    "endpoint": "vidu-q2-turbo-text-to-video",
    "commonParameterRules": VIDU_Q2_MUSIC_RULES,
    "inputs": {
      "prompt": {
        "examples": [
          "A skateboarder carves down a sunlit Tokyo backstreet at golden hour. The camera follows in a smooth tracking shot as neon signs flicker on."
        ],
        "description": "Text prompt describing the video.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated video.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5,
        "minValue": 2,
        "maxValue": 8,
        "step": 1
      },
      "bgm": VIDU_Q2_MUSIC_INPUT,
      "movement_amplitude": {
        "enum": [
          "auto",
          "small",
          "medium",
          "large"
        ],
        "title": "Movement Amplitude",
        "name": "movement_amplitude",
        "type": "string",
        "description": "The movement amplitude of objects in the frame.",
        "default": "auto"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "seedance-2-vip-extend",
    "name": "Seedance 2 VIP Extend",
    "requiresRequestId": true,
    "endpoint": "sd-2-vip-extend",
    "inputs": {
      "request_id": {
        "examples": [
          "cab9517f-1818-4910-8d66-292701c78c2d"
        ],
        "description": "Request ID of the original Seedance 2.0 video generation.",
        "format": "text",
        "type": "string",
        "title": "Request Id",
        "name": "request_id",
        "placeholder": "abcdefg-123-456-789-a1b2c3d4e5f6"
      },
      "prompt": {
        "examples": [
          ""
        ],
        "description": "Optional prompt to guide the extension. Reference additional images with @image2…@image9, videos with @video1…@video3, and audio with @audio1…@audio3 — the source video's last frame is always @image1.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "Up to 8 additional reference image URLs (JPEG/PNG/WebP). Each Nth image corresponds to @image(N+1) in the prompt (the source video's last frame is @image1).",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 8
      },
      "video_files": {
        "examples": [],
        "description": "Up to 3 reference video clip URLs (MP4, max 15s each). Each Nth video corresponds to @videoN in the prompt.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Video Reference URLs",
        "name": "video_files",
        "maxItems": 3
      },
      "audio_files": {
        "examples": [],
        "description": "Up to 3 reference audio clip URLs (MP3/WAV, total max 15s). Each Nth audio corresponds to @audioN in the prompt.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Audio Reference URLs",
        "name": "audio_files",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9",
        "description": "Output video aspect ratio (only used when reference images/videos/audio are provided)."
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Length of the extension clip in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Quality",
        "type": "string",
        "name": "quality",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-extend-1080p",
    "name": "Seedance 2 VIP Extend 1080P",
    "requiresRequestId": true,
    "endpoint": "sd-2-vip-extend-1080p",
    "inputs": {
      "request_id": {
        "examples": [
          "cab9517f-1818-4910-8d66-292701c78c2d"
        ],
        "description": "Request ID of the original Seedance 2.0 video generation.",
        "format": "text",
        "type": "string",
        "title": "Request Id",
        "name": "request_id",
        "placeholder": "abcdefg-123-456-789-a1b2c3d4e5f6"
      },
      "prompt": {
        "examples": [
          ""
        ],
        "description": "Optional prompt to guide the extension. Reference additional images with @image2…@image9, videos with @video1…@video3, and audio with @audio1…@audio3 — the source video's last frame is always @image1.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "Up to 8 additional reference image URLs (JPEG/PNG/WebP). Each Nth image corresponds to @image(N+1) in the prompt (the source video's last frame is @image1).",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 8
      },
      "video_files": {
        "examples": [],
        "description": "Up to 3 reference video clip URLs (MP4, max 15s each). Each Nth video corresponds to @videoN in the prompt.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Video Reference URLs",
        "name": "video_files",
        "maxItems": 3
      },
      "audio_files": {
        "examples": [],
        "description": "Up to 3 reference audio clip URLs (MP3/WAV, total max 15s). Each Nth audio corresponds to @audioN in the prompt.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Audio Reference URLs",
        "name": "audio_files",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9",
        "description": "Output video aspect ratio (only used when reference images/videos/audio are provided)."
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Length of the extension clip in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Quality",
        "type": "string",
        "name": "quality",
        "default": "high"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "kling-v3.0-omni-standard-text-to-video",
    "fixedParameters": { resolution: "720p" },
    "name": "Kling 3.0 Omni Standard",
    "endpoint": "kling-v3.0-omni-standard-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A cyberpunk samurai crouched on a rooftop edge during a thunderstorm, glowing katana in hand. The samurai instantly launches forward across rooftops at extreme speed. Rain sprays behind each landing while he slices through neon signs and wall-runs across skyscrapers. The camera whips aggressively around every movement."
        ],
        "description": "Text prompt. Reference images via <<<image_N>>> (1-indexed). If omitted, <<<image_1>>> is auto-prepended.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "9:16",
          "16:9",
          "1:1"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9",
        "description": "Aspect ratio of the output video."
      },
      "duration": {
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Duration of the generated video in seconds.",
        "default": 5
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "When enabled, generate native audio with the video (adds to cost).",
        "default": false
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3.0-omni-pro-text-to-video",
    "fixedParameters": { resolution: "1080p" },
    "name": "Kling 3.0 Omni Pro",
    "endpoint": "kling-v3.0-omni-pro-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A destroyed city street with broken buildings, smoke, and rubble everywhere. A colossal hand descends from the clouds and begins rebuilding the city like toy blocks. Buildings rise from rubble, roads reconnect, and cars reassemble in reverse. The camera moves through the reconstruction as the hand reshapes the world."
        ],
        "description": "Text prompt. Reference images via <<<image_N>>> (1-indexed). If omitted, <<<image_1>>> is auto-prepended.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "9:16",
          "16:9",
          "1:1"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9",
        "description": "Aspect ratio of the output video."
      },
      "duration": {
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Duration of the generated video in seconds.",
        "default": 5
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "When enabled, generate native audio with the video (adds to cost).",
        "default": false
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3.0-omni-4k-text-to-video",
    "fixedParameters": { resolution: "4K" },
    "name": "Kling 3.0 Omni 4K",
    "endpoint": "kling-v3.0-omni-4k-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A destroyed city street with broken buildings, smoke, and rubble everywhere. A colossal hand descends from the clouds and begins rebuilding the city like toy blocks. Buildings rise from rubble, roads reconnect, and cars reassemble in reverse. The camera moves through the reconstruction as the hand reshapes the world."
        ],
        "description": "Text prompt. Reference images via <<<image_N>>> (1-indexed). If omitted, <<<image_1>>> is auto-prepended.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "9:16",
          "16:9",
          "1:1"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9",
        "description": "Aspect ratio of the output video."
      },
      "duration": {
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Duration of the generated video in seconds.",
        "default": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "gemini-omni-text-to-video",
    "name": "Gemini Omni Flash",
    "endpoint": "gemini-omni-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired video content. Gemini Omni supports rich multimodal prompts including scene composition, camera direction, dialogue, and ambient audio cues.",
        "examples": [
          "A clock begins ticking louder and rapidly grows larger, breaking through the table and floor. Its gears spin violently as the hands rotate uncontrollably. Walls crack apart as the giant clock expands until it fills the entire apartment."
        ]
      },
      "duration": {
        "enum": [
          4,
          6,
          8,
          10
        ],
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Duration of the generated video in seconds.",
        "default": 8
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p",
          "4k"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Output video resolution. 720p and 1080p are the same price; 4K costs more.",
        "default": "1080p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "audio_ids": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Audio IDs",
        "name": "audio_ids",
        "description": "Up to 3 voice profile IDs returned by the Gemini Omni Audio endpoint.",
        "maxItems": 3
      },
      "seed": {
        "type": "int",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed (0–2147483647). Fix for reproducibility; results may still vary due to model stochasticity.",
        "minValue": 0,
        "maxValue": 2147483647,
        "default": 0
      },
      "character_ids": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Character IDs",
        "name": "character_ids",
        "description": "Up to 3 character IDs from Gemini Omni Character to feature in the video.",
        "maxItems": 3
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "kling-v3-turbo-standard-text-to-video",
    "fixedParameters": { resolution: "720p" },
    "name": "Kling 3.0 Turbo Standard",
    "endpoint": "kling-v3-turbo-standard-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the video to generate.",
        "examples": [
          "The biker accelerates instantly as the city folds into impossible geometric shapes around him. Roads twist vertically and buildings rotate through the air. Sparks fly during aggressive drifts while the camera tracks tightly behind."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9",
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "The aspect ratio of the generated video."
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "Duration of the generated video in seconds (3–15).",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3-turbo-pro-text-to-video",
    "fixedParameters": { resolution: "1080p" },
    "name": "Kling 3.0 Turbo Pro",
    "endpoint": "kling-v3-turbo-pro-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the video to generate.",
        "examples": [
          "A player slams the ball through the hoop and the court instantly erupts into lava. Shockwaves crack the arena floor while flaming debris blasts upward into the crowd. The camera swings dramatically around the impact."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9",
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "The aspect ratio of the generated video."
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "Duration of the generated video in seconds (3–15).",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },

    {
    "id": "seedance-2.5-text-to-video",
    "name": "Seedance 2.5",
    "endpoint": "seedance-2.5-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A cinematic tracking shot through a city park after rain, soft cloudy light, wet pavement reflections, smooth camera movement."
        ],
        "description": "Text prompt describing the video scene and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT,
      "seed": {
        "type": "int",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed for reproducible generation. Use -1 for random.",
        "minValue": -1,
        "maxValue": 4294967295,
        "examples": [
          42
        ]
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
    {
    "id": "seedance-2.5-text-to-video-480p",
    "name": "Seedance 2.5 480p",
    "endpoint": "seedance-2.5-text-to-video-480p",
    "inputs": {
      "prompt": {
        "examples": [
          "A cinematic tracking shot through a city park after rain, soft cloudy light, wet pavement reflections, smooth camera movement."
        ],
        "description": "Text prompt describing the video scene and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT,
      "seed": {
        "type": "int",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed for reproducible generation. Use -1 for random.",
        "minValue": -1,
        "maxValue": 4294967295,
        "examples": [
          42
        ]
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-mini-text-to-video",
    "name": "Seedance 2.0 Mini",
    "endpoint": "seedance-2-mini-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A golden retriever running through a sunlit meadow, slow motion, vibrant summer colors, wide angle shot."
        ],
        "description": "Text prompt describing the video scene and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "Output video resolution.",
        "default": "720p"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate AI audio synchronized with the video.",
        "default": true
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "happy-horse-1.1-text-to-video-1080p",
    "name": "HappyHorse 1.1 1080P",
    "endpoint": "happy-horse-1.1-text-to-video-1080p",
    "fixedParameters": { "resolution": "1080p" },
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired video content.",
        "examples": [
          "A horse hosting a live cooking show confidently flips a pancake into the air, but the pancake catches fire and triggers a chain reaction of explosions throughout the kitchen."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "happy-horse-1.1-text-to-video-720p",
    "name": "HappyHorse 1.1 720P",
    "endpoint": "happy-horse-1.1-text-to-video-720p",
    "fixedParameters": { "resolution": "720p" },
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired video content.",
        "examples": [
          "A horse hosting a live cooking show confidently flips a pancake into the air, but the pancake catches fire and triggers a chain reaction of explosions throughout the kitchen."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "seedance-2-mini-omni-reference",
    "name": "Seedance 2 Mini Omni Reference",
    "endpoint": "seedance-2-mini-omni-reference",
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The character walks forward confidently in a sunny meadow, camera follows from behind."
        ],
        "description": "Text prompt. Reference images with @image1..@image9, videos with @video1..@video3, audio with @audio1..@audio3.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v1.5-pro-i2v.jpg"
        ],
        "description": "Up to 9 reference images (JPEG/PNG/WebP). Referenced in prompt via @image1..@image9.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 9
      },
      "video_files": {
        "examples": [
          ""
        ],
        "description": "Up to 3 reference video clips (MP4, total max 15s). Referenced in prompt via @video1..@video3.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Videos",
        "name": "video_files",
        "maxItems": 3
      },
      "audio_files": {
        "examples": [
          ""
        ],
        "description": "Up to 3 reference audio files (MP3/WAV, total max 15s). Referenced in prompt via @audio1..@audio3.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Audio",
        "name": "audio_files",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "Output video resolution.",
        "default": "720p"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate AI audio synchronized with the video.",
        "default": true
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-text-to-video-4k",
    "name": "Seedance 2 VIP Text to Video 4K",
    "endpoint": "sd-2-vip-text-to-video-4k",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the video to generate.",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": SEEDANCE_HIGH_BITRATE_INPUT
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
    {
    "id": "seedance-2.5-spicy-text-to-video",
    "name": "Seedance 2.5 Spicy",
    "endpoint": "seedance-2.5-spicy-text-to-video",
    "inputs": {
      "resolution": SEEDANCE_25_RESOLUTION_INPUT,
      "generate_audio": SEEDANCE_GENERATE_AUDIO_INPUT,
      "prompt": {
        "examples": [
          "A high-contrast, adrenaline-fueled chase through a rain-soaked neon megacity at night, sparks and shattering glass in slow motion, aggressive handheld camera energy, exaggerated color grading, 4K cinematic quality."
        ],
        "description": "Text prompt describing the video scene and motion. Spicy mode favors bolder, higher-contrast, more expressive results.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT,
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      },
      "seed": SEEDANCE_25_SEED_INPUT
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-spicy-text-to-video",
    "name": "Seedance 2 Spicy",
    "endpoint": "seedance-2-spicy-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the video to generate. Use @character:<id> to anchor the video to a Seedance 2 character — automatically switches to image-to-video mode. Use @omni-character:<char_id> for a trained Kinovi character.",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-spicy-text-to-video-fast",
    "name": "Seedance 2 Spicy Text to Video Fast",
    "endpoint": "seedance-2-spicy-text-to-video-fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the video to generate. Use @character:<id> to anchor the video to a Seedance 2 character — automatically switches to image-to-video mode. Use @omni-character:<char_id> for a trained Kinovi character.",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-mini-spicy-text-to-video",
    "name": "Seedance 2 Mini Spicy",
    "endpoint": "seedance-2-mini-spicy-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A golden retriever running through a sunlit meadow, slow motion, vibrant summer colors, wide angle shot."
        ],
        "description": "Text prompt describing the video scene and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "Output video resolution.",
        "default": "720p"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate AI audio synchronized with the video.",
        "default": true
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "minimax-h3-text-to-video",
    "name": "MiniMax H3",
    "endpoint": "minimax-h3-text-to-video",
    "family": "minimax-h3",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video to generate."
      },
      "aspect_ratio": {
        "enum": ["21:9", "16:9", "4:3", "1:1", "3:4", "9:16"],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "default": "16:9"
      },
      "resolution": {
        "enum": ["2k"],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "default": "2k"
      },
      "duration": {
        "enum": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        "type": "integer",
        "title": "Duration",
        "name": "duration",
        "default": 5
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "minimax-h3-open-text-to-video",
    "name": "MiniMax H3 Base FL2VA",
    "endpoint": "minimax-h3-open-text-to-video",
    "family": "minimax-h3",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video to generate."
      },
      "aspect_ratio": {
        "enum": ["16:9", "9:16", "1:1", "4:3", "3:4", "21:9", "9:21"],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "default": "16:9"
      },
      "resolution": {
        "enum": ["480p", "768p"],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "default": "480p"
      },
      "duration": {
        "enum": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        "type": "integer",
        "title": "Duration",
        "name": "duration",
        "default": 5
      },
      "seed": MINIMAX_H3_OPEN_SEED_INPUT
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "flux-3-text-to-video",
    "name": "FLUX 3",
    "endpoint": "flux-3-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A drone shot glides over a bioluminescent forest at night, fireflies drifting between glowing trees, gentle mist rolling across the forest floor, cinematic color grading."
        ],
        "description": "Text prompt describing the video scene and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "Output video resolution.",
        "default": "720p"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 5,
        "maxValue": 20,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate synchronized native audio for the video.",
        "default": true
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "wan3.0-text-to-video",
    "name": "Wan 3.0",
    "endpoint": "wan3.0-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the video you want to create.",
        "examples": [
          "A cinematic aerial shot of mist moving through a mountain valley at sunrise."
        ]
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Output video resolution.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "adaptive",
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video frame dimensions.",
        "default": "16:9"
      },
      "duration": {
        "type": "integer",
        "title": "Duration",
        "name": "duration",
        "description": "Video length in seconds.",
        "default": 5,
        "minValue": 2,
        "maxValue": 30
      },
      "thinking_mode": {
        "type": "boolean",
        "title": "Thinking Mode",
        "name": "thinking_mode",
        "description": "Enable deep-thinking mode for complex prompts.",
        "default": false
      },
      "enable_audio": {
        "type": "boolean",
        "title": "Enable Audio",
        "name": "enable_audio",
        "description": "Include a generated audio track with the video.",
        "default": true
      },
      "seed": {
        "type": "integer",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed for reproducibility. Use -1 for a random seed.",
        "default": -1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan3.0-spicy-text-to-video",
    "name": "Wan 3.0 Spicy",
    "endpoint": "wan3.0-spicy-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the bold, high-motion video you want to create.",
        "examples": [
          "A dramatic cinematic scene with bold camera movement through a neon-lit city at night."
        ]
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Output video resolution.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "adaptive",
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video frame dimensions.",
        "default": "16:9"
      },
      "duration": {
        "type": "integer",
        "title": "Duration",
        "name": "duration",
        "description": "Video length in seconds.",
        "default": 5,
        "minValue": 2,
        "maxValue": 30
      },
      "thinking_mode": {
        "type": "boolean",
        "title": "Thinking Mode",
        "name": "thinking_mode",
        "description": "Enable deep-thinking mode for complex prompts.",
        "default": false
      },
      "enable_audio": {
        "type": "boolean",
        "title": "Enable Audio",
        "name": "enable_audio",
        "description": "Include a generated audio track with the video.",
        "default": true
      },
      "seed": {
        "type": "integer",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed for reproducibility. Use -1 for a random seed.",
        "default": -1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "seedance-2.5-text-to-video-1080p",
    "name": "Seedance 2.5 1080p",
    "endpoint": "seedance-2.5-text-to-video-1080p",
    "inputs": {
      "prompt": {
        "examples": [
          "A cinematic tracking shot through a city park after rain, soft cloudy light, wet pavement reflections, smooth camera movement."
        ],
        "description": "Text prompt describing the video scene and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT,
      "seed": {
        "type": "int",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed for reproducible generation. Use -1 for random.",
        "minValue": -1,
        "maxValue": 4294967295,
        "examples": [
          42
        ]
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-text-to-video-4k",
    "name": "Seedance 2.5 4K",
    "endpoint": "seedance-2.5-text-to-video-4k",
    "inputs": {
      "prompt": {
        "examples": [
          "A cinematic tracking shot through a city park after rain, soft cloudy light, wet pavement reflections, smooth camera movement."
        ],
        "description": "Text prompt describing the video scene and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT,
      "seed": {
        "type": "int",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed for reproducible generation. Use -1 for random.",
        "minValue": -1,
        "maxValue": 4294967295,
        "examples": [
          42
        ]
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-text-to-video",
    "name": "Seedance 2.5 Intl",
    "endpoint": "seedance-2.5-intl-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A cinematic tracking shot through a city park after rain, soft cloudy light, wet pavement reflections, smooth camera movement."
        ],
        "description": "Text prompt describing the video scene and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT,
      "seed": {
        "type": "int",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed for reproducible generation. Use -1 for random.",
        "minValue": -1,
        "maxValue": 4294967295,
        "examples": [
          42
        ]
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-text-to-video-480p",
    "name": "Seedance 2.5 Intl 480p",
    "endpoint": "seedance-2.5-intl-text-to-video-480p",
    "inputs": {
      "prompt": {
        "examples": [
          "A cinematic tracking shot through a city park after rain, soft cloudy light, wet pavement reflections, smooth camera movement."
        ],
        "description": "Text prompt describing the video scene and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT,
      "seed": {
        "type": "int",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed for reproducible generation. Use -1 for random.",
        "minValue": -1,
        "maxValue": 4294967295,
        "examples": [
          42
        ]
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-text-to-video-480p",
    "name": "Seedance 2.5 Spicy 480p",
    "endpoint": "seedance-2.5-spicy-text-to-video-480p",
    "inputs": {
      "prompt": {
        "examples": [
          "A cinematic tracking shot through a city park after rain, soft cloudy light, wet pavement reflections, smooth camera movement."
        ],
        "description": "Text prompt describing the video scene and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT,
      "seed": {
        "type": "int",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed for reproducible generation. Use -1 for random.",
        "minValue": -1,
        "maxValue": 4294967295,
        "examples": [
          42
        ]
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-text-to-video-1080p",
    "name": "Seedance 2.5 Intl 1080p",
    "endpoint": "seedance-2.5-intl-text-to-video-1080p",
    "inputs": {
      "prompt": {
        "examples": [
          "A cinematic tracking shot through a city park after rain, soft cloudy light, wet pavement reflections, smooth camera movement."
        ],
        "description": "Text prompt describing the video scene and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT,
      "seed": {
        "type": "int",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed for reproducible generation. Use -1 for random.",
        "minValue": -1,
        "maxValue": 4294967295,
        "examples": [
          42
        ]
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-text-to-video-1080p",
    "name": "Seedance 2.5 Spicy 1080p",
    "endpoint": "seedance-2.5-spicy-text-to-video-1080p",
    "inputs": {
      "prompt": {
        "examples": [
          "A cinematic tracking shot through a city park after rain, soft cloudy light, wet pavement reflections, smooth camera movement."
        ],
        "description": "Text prompt describing the video scene and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT,
      "seed": {
        "type": "int",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed for reproducible generation. Use -1 for random.",
        "minValue": -1,
        "maxValue": 4294967295,
        "examples": [
          42
        ]
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-text-to-video-4k",
    "name": "Seedance 2.5 Intl 4K",
    "endpoint": "seedance-2.5-intl-text-to-video-4k",
    "inputs": {
      "prompt": {
        "examples": [
          "A cinematic tracking shot through a city park after rain, soft cloudy light, wet pavement reflections, smooth camera movement."
        ],
        "description": "Text prompt describing the video scene and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT,
      "seed": {
        "type": "int",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed for reproducible generation. Use -1 for random.",
        "minValue": -1,
        "maxValue": 4294967295,
        "examples": [
          42
        ]
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-text-to-video-4k",
    "name": "Seedance 2.5 Spicy 4K",
    "endpoint": "seedance-2.5-spicy-text-to-video-4k",
    "inputs": {
      "prompt": {
        "examples": [
          "A cinematic tracking shot through a city park after rain, soft cloudy light, wet pavement reflections, smooth camera movement."
        ],
        "description": "Text prompt describing the video scene and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT,
      "seed": {
        "type": "int",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed for reproducible generation. Use -1 for random.",
        "minValue": -1,
        "maxValue": 4294967295,
        "examples": [
          42
        ]
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "minimax-h3-text-to-video-lora",
    "name": "MiniMax H3 Text to Video LoRA",
    "endpoint": "minimax-h3-text-to-video-lora",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the video scene, action, camera movement, and soundtrack.",
        "examples": [
          "A cinematic ocean wave at sunrise, highly detailed"
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "9:21"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "768p"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Output video resolution. 768p is native canvas, 480p is faster.",
        "default": "480p"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Output video duration in seconds.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      },
      "seed": {
        "type": "int",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed (-1 for random)",
        "default": -1,
        "minValue": -1,
        "maxValue": 2147483647
      },
      "loras": {
        "type": "array",
        "title": "LoRAs",
        "name": "loras",
        "items": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string",
              "title": "LoRA Path / Model ID",
              "name": "path",
              "description": "Civitai model ID or HuggingFace URL/path."
            },
            "scale": {
              "type": "number",
              "title": "Scale",
              "name": "scale",
              "minValue": 0,
              "maxValue": 4,
              "step": 0.01,
              "default": 1,
              "description": "Weight / strength scale of the LoRA."
            }
          }
        },
        "description": "List of LoRAs to apply (maximum 3).",
        "maxItems": 3
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "ltx-2.5-text-to-video",
    "name": "LTX 2.5",
    "endpoint": "ltx-2.5-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A cinematic ocean wave crashing onto golden sand at sunrise, highly detailed photorealistic 4k."
        ],
        "description": "The positive prompt for the generation.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated media in seconds.",
        "default": 5,
        "minValue": 5,
        "maxValue": 20,
        "step": 1
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the video.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p",
          "2k",
          "4k"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "Video resolution.",
        "default": "720p"
      },
      "seed": {
        "title": "Seed",
        "name": "seed",
        "type": "int",
        "description": "The random seed to use for the generation. -1 means random.",
        "default": -1
      }
    },
    "provider": "lightricks",
    "provider_name": "Lightricks"
  },
  {
    "id": "wan3.0-prime-text-to-video",
    "name": "Wan 3.0 Prime",
    "endpoint": "wan3.0-prime-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the video you want to create.",
        "examples": [
          "A cinematic aerial shot of mist moving through a mountain valley at sunrise."
        ]
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Output video resolution.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "adaptive",
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video frame dimensions.",
        "default": "16:9"
      },
      "duration": {
        "type": "integer",
        "title": "Duration",
        "name": "duration",
        "description": "Video length in seconds.",
        "default": 5,
        "minValue": 2,
        "maxValue": 30
      },
      "thinking_mode": {
        "type": "boolean",
        "title": "Thinking Mode",
        "name": "thinking_mode",
        "description": "Enable deep-thinking mode for complex prompts.",
        "default": false
      },
      "enable_audio": {
        "type": "boolean",
        "title": "Enable Audio",
        "name": "enable_audio",
        "description": "Include a generated audio track with the video.",
        "default": true
      },
      "seed": {
        "type": "integer",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed for reproducibility. Use -1 for a random seed.",
        "default": -1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "flux-3-text-to-video-draft",
    "name": "FLUX 3 Text to Video Draft",
    "endpoint": "flux-3-text-to-video-draft",
    "inputs": {
      "prompt": {
        "examples": [
          "A drone shot glides over a bioluminescent forest at night, fireflies drifting between glowing trees."
        ],
        "description": "Describe the subject, action, environment, camera movement, timing, mood, lighting, and visual style.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "9:16"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 5,
        "maxValue": 20,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate synchronized native audio for the video.",
        "default": true
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "gemini-omni-flash-1-1-text-to-video",
    "name": "Gemini Omni 1.1 Flash",
    "endpoint": "gemini-omni-flash-1-1-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired video content \u2014 visuals, camera direction, dialogue, and ambient audio cues.",
        "examples": [
          "A street musician plays a violin on a rainy Paris evening, raindrops tap the cobblestones, a slow melancholic melody, distant caf\u00e9 chatter."
        ]
      },
      "image_urls": {
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "image_urls",
        "description": "Up to 7 reference images used as auxiliary conditioning (not a starting keyframe). Each counts as 1 quota unit against the shared 7-unit total with video and character_ids.",
        "maxItems": 7
      },
      "video_url": {
        "field": "video",
        "type": "string",
        "title": "Reference Video",
        "name": "video_url",
        "description": "A reference video clip, max 100MB / 30s. Counts as 2 quota units."
      },
      "trim_start": {
        "type": "number",
        "title": "Video Trim Start (s)",
        "name": "trim_start",
        "description": "Start time, in seconds, of the reference video window.",
        "default": 0
      },
      "trim_end": {
        "type": "number",
        "title": "Video Trim End (s)",
        "name": "trim_end",
        "description": "End time, in seconds, of the reference video window. Window must not exceed 10 seconds.",
        "default": 10
      },
      "audio_ids": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Audio IDs",
        "name": "audio_ids",
        "description": "Up to 3 voice profile IDs from the Gemini Omni Audio endpoint. Each counts as 1 quota unit.",
        "maxItems": 3
      },
      "character_ids": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Character IDs",
        "name": "character_ids",
        "description": "Up to 3 character IDs from Gemini Omni Character. Each counts as 1 quota unit.",
        "maxItems": 3
      },
      "duration": {
        "enum": [
          4,
          6,
          8,
          10
        ],
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Duration of the generated video in seconds. Ignored when a reference video is provided \u2014 output duration is then determined by the model.",
        "default": 8
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p",
          "4k"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Output resolution. Billed per second of output: $0.10/s at 720p, $0.15/s at 1080p, $0.30/s at 4K.",
        "default": "720p"
      },
      "seed": {
        "type": "int",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed (0\u20132147483647). Fix for reproducibility; results may still vary due to model stochasticity.",
        "minValue": 0,
        "maxValue": 2147483647,
        "default": 0
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "gemini-omni-flash-1-2-text-to-video",
    "name": "Gemini Omni 1.2 Flash",
    "endpoint": "gemini-omni-flash-1-2-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the scene, action, camera movement, and sound.",
        "examples": [
          "A cat plays piano in a jazz bar, one continuous shot, soft live jazz"
        ]
      },
      "duration": {
        "type": "integer",
        "title": "Duration",
        "name": "duration",
        "description": "Video length in seconds (3-15).",
        "minimum": 3,
        "maximum": 15,
        "default": 8
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "auto"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output aspect ratio. `auto` follows the reference image and is treated as 16:9 when none is provided.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "360p",
          "720p",
          "1080p",
          "4k"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Output resolution. Output priced per second of generated video: $0.023/s at 360p, $0.07/s at 720p, $0.105/s at 1080p, $0.21/s at 4K.",
        "default": "720p"
      },
      "seed": {
        "type": "integer",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed (10000-99999). Omit for a random seed.",
        "minimum": 10000,
        "maximum": 99999
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "openai-sora-2-pro-storyboard",
    "name": "OpenAI Sora 2 Pro Storyboard",
    "endpoint": "openai-sora-2-pro-storyboard",
    "family": "sora",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": false,
    "inputs": {
      "shots": {
        "examples": [
          {
            "scene": "A quiet street at dawn, cobblestone path glistening from overnight rain, street lamps just going off, soft ambient light.",
            "duration": 1.2
          }
        ],
        "title": "Shots",
        "name": "shots",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "scene": {
              "type": "string",
              "format": "text",
              "title": "Scene",
              "name": "scene",
              "description": "Scene description/prompt."
            },
            "duration": {
              "type": "number",
              "name": "duration",
              "title": "Duration",
              "description": "Duration in seconds.",
              "minValue": 0,
              "maxValue": 10,
              "step": 0.01,
              "default": 1
            }
          }
        },
        "description": "Array of scene objects defining the storyboard sequence. Each scene contains a duration and description.",
        "maxItems": 30
      },
      "duration": {
        "enum": [
          10,
          15,
          25
        ],
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "The duration of the generated video in seconds",
        "default": 10
      },
      "images_list": {
        "examples": [],
        "description": "Upload or provide image urls.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 1
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "9:16"
      }
    },
    "provider": "openai",
    "provider_name": "KIE_AI",
    "description": "Sora 2 Pro enables creators to structure video narratives by chaining multiple scenes through storyboard “cards.” Each card defines a segment of the video—setting, characters, actions, timing—and the model stitches them into a cohesive multi-scene video. This gives you more control over pacing, transitions, and storytelling flow.",
    "example_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/sora-2-pro-i2v.mp4",
    "image_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/sora-2-pro-i2v.avif"
  },
  {
    "id": "happy-horse-1-text-to-video",
    "name": "Happy Horse 1 Text to Video",
    "endpoint": "happy-horse-1-text-to-video",
    "family": "happy-horse-1",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired video content.",
        "examples": [
          "Inside a crowded airplane cabin, a horse wearing a pilot uniform suddenly realizes the plane is flying upside down. Passengers and luggage slam into the ceiling while drink carts roll wildly through the aisle. The horse panics and runs toward the cockpit as turbulence shakes the entire plane violently."
        ]
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Output resolution. Price scales with resolution: 720p is cheaper, 1080p is more expensive.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "KINOVI",
    "description": "Happy Horse 1.0 Text to Video — generate expressive, stylized video clips from text prompts. Selectable output resolution (720p/1080p) — price scales with the resolution chosen.",
    "example_url": "https://cdn.muapi.ai/assets/dae1fa68-52a2-4627-8364-762202f8601b.avif",
    "image_url": "https://cdn.muapi.ai/assets/dae1fa68-52a2-4627-8364-762202f8601b.avif"
  },
  {
    "id": "happy-horse-1.1-text-to-video",
    "name": "Happy Horse 1.1 Text to Video",
    "endpoint": "happy-horse-1.1-text-to-video",
    "family": "happy-horse-1.1",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired video content.",
        "examples": [
          "A horse hosting a live cooking show confidently flips a pancake into the air, but the pancake catches fire and triggers a chain reaction of explosions throughout the kitchen."
        ]
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Output resolution. Price scales with resolution: 720p is cheaper, 1080p is more expensive.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output video aspect ratio.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "KINOVI",
    "description": "Happy Horse 1.1 Text to Video — generate expressive video clips from text prompts with vivid character motion. Selectable output resolution (720p/1080p) — price scales with the resolution chosen.",
    "example_url": "https://cdn.muapi.ai/assets/860030ab-d3e8-41a7-8d2f-4e16308e0bc1.avif",
    "image_url": "https://cdn.muapi.ai/assets/860030ab-d3e8-41a7-8d2f-4e16308e0bc1.avif"
  },
  {
    "id": "minimax-h3-max-text-to-video",
    "name": "MiniMax H3 Max Text to Video",
    "endpoint": "minimax-h3-max-text-to-video",
    "family": "minimax-h3-max",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the video scene, action, camera movement, and style.",
        "examples": [
          "A cinematic tracking shot of a silver sports car driving through a rain-soaked city at night."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "768p",
          "1080p"
        ],
        "default": "768p",
        "description": "Output resolution. 1080p applies latent refinement from a 768p source."
      },
      "duration": {
        "type": "integer",
        "title": "Duration",
        "name": "duration",
        "enum": [
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 5,
        "description": "Output duration in seconds."
      },
      "prompt_expansion_mode": {
        "type": "string",
        "title": "Prompt Expansion Mode",
        "name": "prompt_expansion_mode",
        "enum": [
          "disabled",
          "balanced",
          "quality"
        ],
        "default": "balanced",
        "description": "Prompt rewriting effort. 'quality' can add up to ~30s of processing."
      }
    },
    "provider": "minimax",
    "provider_name": "MINIMAX",
    "description": "MiniMax H3 Max Text to Video creates high-fidelity video up to 1080p from a written prompt through the Muapi API.",
    "example_url": "https://cdn.muapi.ai/assets/image_download_28.avif",
    "image_url": "https://cdn.muapi.ai/assets/image_download_28.avif"
  },
  {
    "id": "minimax-h3-max-turbo-text-to-video",
    "name": "MiniMax H3 Max Turbo Text to Video",
    "endpoint": "minimax-h3-max-turbo-text-to-video",
    "family": "minimax-h3-max",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the video scene, action, camera movement, and style.",
        "examples": [
          "A cinematic tracking shot of a silver sports car driving through a rain-soaked city at night."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "768p",
          "1080p"
        ],
        "default": "768p"
      },
      "duration": {
        "type": "integer",
        "title": "Duration",
        "name": "duration",
        "enum": [
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 5,
        "description": "Output duration in seconds."
      },
      "prompt_expansion_mode": {
        "type": "string",
        "title": "Prompt Expansion Mode",
        "name": "prompt_expansion_mode",
        "enum": [
          "disabled",
          "balanced",
          "quality"
        ],
        "default": "balanced",
        "description": "Prompt rewriting effort level."
      }
    },
    "provider": "minimax",
    "provider_name": "MINIMAX",
    "description": "MiniMax H3 Max Turbo Text to Video is a faster, lower-cost H3 Max mode that creates video up to 1080p from a written prompt through the Muapi API.",
    "example_url": "https://cdn.muapi.ai/assets/image_download_28.avif",
    "image_url": "https://cdn.muapi.ai/assets/image_download_28.avif"
  },
  {
    "id": "seedance-2-mini-spicy-omni-reference",
    "name": "Seedance 2 Mini Spicy Omni Reference",
    "endpoint": "seedance-2-mini-spicy-omni-reference",
    "family": "seedance-2.0-mini",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The character walks forward confidently in a sunny meadow, camera follows from behind."
        ],
        "description": "Text prompt. Reference images with @image1..@image9, videos with @video1..@video3, audio with @audio1..@audio3.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v1.5-pro-i2v.jpg"
        ],
        "description": "Up to 9 reference images (JPEG/PNG/WebP). Referenced in prompt via @image1..@image9.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 9
      },
      "video_files": {
        "examples": [
          ""
        ],
        "description": "Up to 3 reference video clips (MP4, total max 15s). Referenced in prompt via @video1..@video3.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Videos",
        "name": "video_files",
        "maxItems": 3
      },
      "audio_files": {
        "examples": [
          ""
        ],
        "description": "Up to 3 reference audio files (MP3/WAV, total max 15s). Referenced in prompt via @audio1..@audio3.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Audio",
        "name": "audio_files",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output video.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "Output video resolution.",
        "default": "720p"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Video duration in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate AI audio synchronized with the video.",
        "default": true
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "KIE_AI",
    "description": "Seedance 2 Mini Spicy Omni Reference generates video from a text prompt with optional image, video, and audio references. Cost-efficient mini-tier model for reference-driven workflows, with reduced content-safety filtering for more creative freedom.",
    "example_url": "https://cdn.muapi.ai/assets/2d77df89-9492-4c7d-b434-7684d0ce3bb8.avif",
    "image_url": "https://cdn.muapi.ai/assets/2d77df89-9492-4c7d-b434-7684d0ce3bb8.avif"
  }
,
{
  "id": "motion-graphics",
  "name": "Motion Graphics",
  "endpoint": "motion-graphics",
  "family": "motion-graphics",
  "description": "Generate animated motion graphics videos from a text prompt using AI-generated React/Remotion code rendered on Modal.",
  "inputs": {
    "prompt": {
      "type": "string",
      "title": "Prompt",
      "name": "prompt",
      "description": "Describe the motion graphics animation to generate.",
      "examples": [
        "Animated sales dashboard with bar charts and rising numbers",
        "Kinetic typography logo reveal with glowing particles"
      ]
    },
    "category": {
      "enum": [
        "auto",
        "infographics",
        "text-animation",
        "social-media",
        "presentation",
        "logo",
        "product",
        "3d",
        "slideshow",
        "showcase",
        "reel"
      ],
      "type": "string",
      "title": "Category",
      "name": "category",
      "description": "Animation category. Use 'auto' to let AI detect the best style, or pick a category for optimised results. Use 'slideshow', 'showcase', or 'reel' when providing images/videos.",
      "default": "auto"
    },
    "images_list": {
      "examples": [
        "https://cdn.muapi.ai/uploads/photo1.jpg"
      ],
      "description": "Optional images to incorporate into the animation (up to 6). Required for slideshow, showcase, and reel categories.",
      "field": "images_list",
      "type": "array",
      "items": {
        "type": "string"
      },
      "title": "Images",
      "name": "images_list",
      "maxItems": 6
    },
    "video_files": {
      "examples": [
        "https://cdn.muapi.ai/uploads/clip.mp4"
      ],
      "description": "Optional video clips to use as background or showcase footage (up to 2).",
      "field": "videos_list",
      "type": "array",
      "items": {
        "type": "string"
      },
      "title": "Video Clips",
      "name": "video_files",
      "maxItems": 2
    },
    "aspect_ratio": {
      "enum": [
        "16:9",
        "9:16",
        "1:1"
      ],
      "type": "string",
      "title": "Aspect Ratio",
      "name": "aspect_ratio",
      "description": "Output canvas aspect ratio.",
      "default": "16:9"
    },
    "duration_seconds": {
      "type": "int",
      "title": "Duration (seconds)",
      "name": "duration_seconds",
      "description": "Length of the animation in seconds (5–30).",
      "default": 6,
      "minValue": 5,
      "maxValue": 30,
      "step": 1
    }
  },
  "required": [
    "prompt"
  ],
  "hasPrompt": true,
  "promptRequired": true,
  "imageField": "images_list",
  "maxImages": 6,
  "videoField": "video_files",
  "maxVideos": 2,
  "provider": "muapi",
  "provider_name": "MODAL",
  "example_url": "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg",
  "image_url": "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
},
{
  "id": "seedance-2.1-text-to-video",
  "name": "Text to Video",
  "endpoint": "seedance-2.1-text-to-video",
  "family": "seedance-2.1",
  "description": "Seedance 2.1 Text-to-Video generates high-quality cinematic videos directly from text prompts. The model excels at complex scene composition, smooth temporal flow, and accurate prompt interpretation — producing vivid motion sequences up to 1080p with enhanced realism over the previous generation.",
  "inputs": {
    "prompt": {
      "examples": [
        "A colossal floating city drifts above luminous clouds at dusk, golden energy streams flowing between its towers, cinematic wide shot with subtle camera push, epic atmospheric lighting."
      ],
      "description": "Text prompt describing the video scene and motion.",
      "type": "string",
      "title": "Prompt",
      "name": "prompt"
    },
    "aspect_ratio": {
      "enum": [
        "16:9",
        "9:16",
        "1:1",
        "3:4",
        "4:3",
        "21:9"
      ],
      "title": "Aspect Ratio",
      "name": "aspect_ratio",
      "type": "string",
      "description": "Aspect ratio of the output video.",
      "default": "16:9"
    },
    "resolution": {
      "enum": [
        "480p",
        "720p",
        "1080p"
      ],
      "title": "Resolution",
      "name": "resolution",
      "type": "string",
      "description": "Output video resolution.",
      "default": "720p"
    },
    "duration": {
      "title": "Duration",
      "name": "duration",
      "type": "int",
      "description": "The duration of the generated video in seconds.",
      "default": 5,
      "minValue": 4,
      "maxValue": 12,
      "step": 1
    },
    "generate_audio": {
      "type": "boolean",
      "title": "Generate Audio",
      "name": "generate_audio",
      "description": "Whether to generate audio for the video.",
      "default": true
    },
    "camera_fixed": {
      "type": "boolean",
      "title": "Camera Fixed",
      "name": "camera_fixed",
      "description": "Whether to fix the camera position.",
      "default": false
    }
  },
  "required": [
    "prompt"
  ],
  "hasPrompt": true,
  "promptRequired": true,
  "provider": "bytedance",
  "provider_name": "WAVESPEED_AI",
  "example_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v1.5-pro-t2v.mp4",
  "image_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v1.5-pro-t2v.avif"
},
{
  "id": "grok-imagine-video-1-5-text-to-video",
  "name": "Grok Imagine Video 1.5 Text to Video",
  "endpoint": "grok-imagine-video-1-5-text-to-video",
  "family": "grok-imagine-video-1-5",
  "description": "Generate videos with Grok Imagine Video 1.5 (xAI) from a text prompt, with native audio, up to 15 seconds.",
  "inputs": {
    "prompt": {
      "type": "string",
      "title": "Prompt",
      "name": "prompt",
      "description": "Text description of the video.",
      "examples": [
        "A dog running on a sunny beach, cinematic slow motion."
      ]
    },
    "aspect_ratio": {
      "enum": [
        "16:9",
        "9:16",
        "1:1",
        "4:3",
        "3:4",
        "3:2",
        "2:3",
        "21:9",
        "5:2"
      ],
      "type": "string",
      "title": "Aspect Ratio",
      "name": "aspect_ratio",
      "description": "Aspect ratio of the video.",
      "default": "16:9"
    },
    "resolution": {
      "enum": [
        "480p",
        "720p",
        "1080p"
      ],
      "type": "string",
      "title": "Resolution",
      "name": "resolution",
      "description": "Output resolution. 1080p is generated by upscaling 720p.",
      "default": "480p"
    },
    "duration": {
      "type": "int",
      "title": "Duration (seconds)",
      "name": "duration",
      "description": "Video duration in seconds.",
      "default": 8,
      "minValue": 1,
      "maxValue": 15,
      "step": 1
    },
    "generate_audio": {
      "type": "boolean",
      "title": "Generate Audio",
      "name": "generate_audio",
      "description": "Generate a native audio track. Turn off for a silent video.",
      "default": true
    }
  },
  "required": [
    "prompt"
  ],
  "hasPrompt": true,
  "promptRequired": true,
  "provider": "grok",
  "provider_name": "SEEGEN",
  "example_url": "https://cdn.muapi.ai/assets/grok-imagine-video-1-5-text-to-video.mp4",
  "image_url": "https://cdn.muapi.ai/assets/grok-imagine-video-1-5-text-to-video.avif"
},
{
  "id": "grok-imagine-video-1-5-lite-text-to-video",
  "name": "Grok Imagine Video 1.5 Lite Text to Video",
  "endpoint": "grok-imagine-video-1-5-lite-text-to-video",
  "family": "grok-imagine-video-1-5",
  "description": "Generate videos with Grok Imagine Video 1.5 Lite (xAI) from a text prompt, with native audio, up to 15 seconds.",
  "inputs": {
    "prompt": {
      "type": "string",
      "title": "Prompt",
      "name": "prompt",
      "description": "Text description of the video.",
      "examples": [
        "A dog running on a sunny beach, cinematic slow motion."
      ]
    },
    "aspect_ratio": {
      "enum": [
        "16:9",
        "9:16",
        "1:1",
        "4:3",
        "3:4",
        "3:2",
        "2:3",
        "21:9",
        "5:2"
      ],
      "type": "string",
      "title": "Aspect Ratio",
      "name": "aspect_ratio",
      "description": "Aspect ratio of the video.",
      "default": "16:9"
    },
    "resolution": {
      "enum": [
        "480p",
        "720p",
        "1080p"
      ],
      "type": "string",
      "title": "Resolution",
      "name": "resolution",
      "description": "Output resolution. 1080p is generated by upscaling 720p.",
      "default": "480p"
    },
    "duration": {
      "type": "int",
      "title": "Duration (seconds)",
      "name": "duration",
      "description": "Video duration in seconds.",
      "default": 8,
      "minValue": 1,
      "maxValue": 15,
      "step": 1
    },
    "generate_audio": {
      "type": "boolean",
      "title": "Generate Audio",
      "name": "generate_audio",
      "description": "Generate a native audio track. Turn off for a silent video.",
      "default": true
    }
  },
  "required": [
    "prompt"
  ],
  "hasPrompt": true,
  "promptRequired": true,
  "provider": "grok",
  "provider_name": "SEEGEN",
  "example_url": "https://cdn.muapi.ai/assets/grok-imagine-video-1-5-lite-text-to-video.mp4",
  "image_url": "https://cdn.muapi.ai/assets/grok-imagine-video-1-5-lite-text-to-video.avif"
},
{
  "id": "kling-4.0-text-to-video",
  "name": "Kling 4.0 Text to Video",
  "endpoint": "kling-4.0-text-to-video",
  "family": "kling-4",
  "description": "Kling 4.0 Text-to-Video generates 3-30 second clips at 720p/1080p with native audio from a text prompt.",
  "inputs": {
    "prompt": {
      "type": "string",
      "title": "Prompt",
      "name": "prompt",
      "description": "Video description (max 8000 chars).",
      "examples": [
        "A lone astronaut walks across a red desert at sunrise, dust drifting past the camera, cinematic wide shot with wind and distant thunder"
      ]
    },
    "duration": {
      "title": "Duration",
      "name": "duration",
      "type": "int",
      "description": "Video length in seconds (3-30).",
      "default": 5,
      "minValue": 3,
      "maxValue": 30,
      "step": 1
    },
    "resolution": {
      "enum": [
        "720p",
        "1080p"
      ],
      "title": "Resolution",
      "name": "resolution",
      "type": "string",
      "description": "Output resolution.",
      "default": "720p"
    },
    "aspect_ratio": {
      "enum": [
        "16:9",
        "9:16",
        "1:1",
        "21:9"
      ],
      "title": "Aspect Ratio",
      "name": "aspect_ratio",
      "type": "string",
      "description": "Output aspect ratio.",
      "default": "16:9"
    }
  },
  "required": [
    "prompt"
  ],
  "hasPrompt": true,
  "promptRequired": true,
  "provider": "kling",
  "provider_name": "kie",
  "example_url": "https://cdn.muapi.ai/assets/kling-v3.0-omni-pro-text-to-video.mp4",
  "image_url": "https://cdn.muapi.ai/assets/kling-v3.0-omni-pro-text-to-video.avif"
},
{
  "id": "pixverse-v6-max-text-to-video",
  "name": "PixVerse V6 Max Text to Video",
  "endpoint": "pixverse-v6-max-text-to-video",
  "family": "pixverse-v6-max",
  "description": "Generate cinematic videos from text with PixVerse V6 Max: up to 15 seconds at up to 1080p, stronger prompt following and camera control, and optional native audio.",
  "inputs": {
    "prompt": {
      "type": "string",
      "title": "Prompt",
      "name": "prompt",
      "description": "Text description of the video (max 5000 characters).",
      "examples": [
        "A young woman sprints through a dense futuristic city street when gravity suddenly shifts sideways. Cars slide across buildings, streetlights bend, and debris floats mid-air. She jumps between tilted surfaces while the camera dynamically rotates with the changing gravity, creating a disorienting chase sequence with intense motion blur and sparks flying."
      ]
    },
    "aspect_ratio": {
      "enum": [
        "16:9",
        "4:3",
        "1:1",
        "3:4",
        "9:16",
        "2:3",
        "3:2",
        "21:9"
      ],
      "type": "string",
      "title": "Aspect Ratio",
      "name": "aspect_ratio",
      "description": "Output video aspect ratio.",
      "default": "16:9"
    },
    "resolution": {
      "enum": [
        "360p",
        "540p",
        "720p",
        "1080p"
      ],
      "type": "string",
      "title": "Resolution",
      "name": "resolution",
      "description": "Output video resolution.",
      "default": "720p"
    },
    "duration": {
      "type": "int",
      "title": "Duration (seconds)",
      "name": "duration",
      "description": "Video duration in seconds (1-15).",
      "default": 5,
      "minValue": 1,
      "maxValue": 15,
      "step": 1
    },
    "generate_audio_switch": {
      "type": "boolean",
      "title": "Generate Audio",
      "name": "generate_audio_switch",
      "description": "Generate native audio synchronized with the video.",
      "default": false
    },
    "seed": {
      "type": "int",
      "title": "Seed",
      "name": "seed",
      "description": "Random seed (0-2147483647) for reproducibility. Leave empty for a random seed.",
      "minValue": 0,
      "maxValue": 2147483647
    }
  },
  "required": [
    "prompt"
  ],
  "hasPrompt": true,
  "promptRequired": true,
  "provider": "pixverse",
  "provider_name": "KIE_AI",
  "example_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/pixverse-v6-t2v.mp4",
  "image_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/pixverse-v6-t2v.avif"
},
{
  "id": "kling-4.0-flash-text-to-video",
  "name": "Kling 4.0 Flash Text to Video",
  "endpoint": "kling-4.0-flash-text-to-video",
  "family": "kling-4-flash",
  "description": "Kling 4.0 Flash Text-to-Video generates fast, low-cost 3-20 second 720p clips with native audio from a text prompt.",
  "inputs": {
    "prompt": {
      "type": "string",
      "title": "Prompt",
      "name": "prompt",
      "description": "Video description (max 8000 chars).",
      "examples": [
        "A lone astronaut walks across a red desert at sunrise, dust drifting past the camera, cinematic wide shot with wind and distant thunder"
      ]
    },
    "duration": {
      "title": "Duration",
      "name": "duration",
      "type": "int",
      "description": "Video length in seconds (3-20).",
      "default": 5,
      "minValue": 3,
      "maxValue": 20,
      "step": 1
    },
    "resolution": {
      "enum": [
        "720p"
      ],
      "title": "Resolution",
      "name": "resolution",
      "type": "string",
      "description": "Output resolution (Kling 4.0 Flash is 720p only).",
      "default": "720p"
    },
    "aspect_ratio": {
      "enum": [
        "16:9",
        "9:16",
        "1:1",
        "21:9"
      ],
      "title": "Aspect Ratio",
      "name": "aspect_ratio",
      "type": "string",
      "description": "Output aspect ratio.",
      "default": "16:9"
    }
  },
  "required": [
    "prompt"
  ],
  "hasPrompt": true,
  "promptRequired": true,
  "provider": "kling",
  "provider_name": "kie",
  "example_url": "https://cdn.muapi.ai/assets/kling-v3.0-omni-pro-text-to-video.mp4",
  "image_url": "https://cdn.muapi.ai/assets/kling-v3.0-omni-pro-text-to-video.avif"
},
  {
    "id": "minimax-h3-max-spicy-text-to-video",
    "name": "MiniMax H3 Max Spicy Text to Video",
    "endpoint": "minimax-h3-max-spicy-text-to-video",
    "family": "minimax-h3-max",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the video scene, action, camera movement, and style.",
        "examples": [
          "A cinematic tracking shot of a silver sports car driving through a rain-soaked city at night."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "768p"
        ],
        "default": "768p",
        "description": "Output resolution. 1080p applies latent refinement from a 768p source."
      },
      "duration": {
        "type": "integer",
        "title": "Duration",
        "name": "duration",
        "enum": [
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 5,
        "description": "Output duration in seconds."
      }
    },
    "provider": "minimax",
    "provider_name": "MINIMAX",
    "description": "MiniMax H3 Max Spicy Text to Video is the relaxed-moderation tier of MiniMax H3 Max, generating video from text with native audio at 480p or 768p through the Muapi API.",
    "example_url": "https://cdn.muapi.ai/assets/image_download_28.avif",
    "image_url": "https://cdn.muapi.ai/assets/image_download_28.avif"
  },
  {
    "id": "minimax-h3-max-turbo-spicy-text-to-video",
    "name": "MiniMax H3 Max Turbo Spicy Text to Video",
    "endpoint": "minimax-h3-max-turbo-spicy-text-to-video",
    "family": "minimax-h3-max",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the video scene, action, camera movement, and style.",
        "examples": [
          "A cinematic tracking shot of a silver sports car driving through a rain-soaked city at night."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "768p"
        ],
        "default": "768p"
      },
      "duration": {
        "type": "integer",
        "title": "Duration",
        "name": "duration",
        "enum": [
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 5,
        "description": "Output duration in seconds."
      }
    },
    "provider": "minimax",
    "provider_name": "MINIMAX",
    "description": "MiniMax H3 Max Turbo Spicy Text to Video is the relaxed-moderation tier of MiniMax H3 Max Turbo, generating video from text at low cost at 480p or 768p through the Muapi API.",
    "example_url": "https://cdn.muapi.ai/assets/image_download_28.avif",
    "image_url": "https://cdn.muapi.ai/assets/image_download_28.avif"
  }
];
