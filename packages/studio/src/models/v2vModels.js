// Extracted from models.js — v2vModels catalog.
import { SEEDANCE_25_ASPECT_RATIO_INPUT, SEEDANCE_15_EXTEND_INPUTS, WAN_AUDIO_INPUT, WAN_NEGATIVE_PROMPT_INPUT, WAN_22_RESOLUTION_INPUT, WAN_27_RESOLUTION_INPUT, HAPPY_HORSE_EDIT_INPUTS, KLING_MOTION_INPUTS, KLING_3_MOTION_INPUTS, KLING_O1_EDIT_INPUTS, KLING_O1_PRO_EDIT_INPUTS } from './sharedInputs.js';

export const v2vModels = [
  {
    "id": "video-watermark-remover",
    "name": "AI Video Watermark Remover",
    "endpoint": "video-watermark-remover",
    "family": "tools",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "Remove watermarks, logos, captions, and unwanted text from videos.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "kling-v2.6-std-motion-control",
    "name": "Kling 2.6 Standard Motion Control",
    "endpoint": "kling-v2.6-std-motion-control",
    "family": "kling",
    "videoField": "video_url",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": KLING_MOTION_INPUTS,
    "promptRequired": true,
    "description": "Kling v2.6 Pro Motion Control allows precise control over camera movement, subject motion, and scene dynamics during video generation.",
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3.0-std-motion-control",
    "name": "Kling 3.0 Standard Motion Control",
    "endpoint": "kling-v3.0-std-motion-control",
    "family": "kling",
    "videoField": "video_url",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": KLING_3_MOTION_INPUTS,
    "description": "Kling V3.0 Standard Motion Control allows for precise control over the camera and subject movement in generated videos.",
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3.0-pro-motion-control",
    "name": "Kling 3.0 Pro Motion Control",
    "endpoint": "kling-v3.0-pro-motion-control",
    "family": "kling",
    "videoField": "video_url",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": KLING_3_MOTION_INPUTS,
    "description": "Kling V3.0 Pro Motion Control provides the highest level of detail and control for video generation.",
    "provider": "kling",
    "provider_name": "Kling AI"
  }
,
  {
    "id": "ai-video-face-swap",
    "name": "AI Video Face Swap",
    "endpoint": "ai-video-face-swap",
    "family": "tools",
    "videoField": "video_url",
    "imageField": "image_url",
    "hasPrompt": false,
    "description": "Replace faces in videos with stunning realism.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "mmaudio-v2-video-to-video",
    "name": "MMAudio v2",
    "endpoint": "mmaudio-v2/video-to-video",
    "family": "mmaudio",
    "videoField": "video_url",
    "hasPrompt": true,
    "description": "MMAudio-v2 generates high-quality, synchronized audio from video or text inputs.",
    "provider": "mmaudio",
    "provider_name": "MMAudio"
  },
  {
    "id": "runway-aleph-v2v",
    "name": "Runway Aleph",
    "endpoint": "runway-aleph-v2v",
    "family": "runway",
    "videoField": "video_url",
    "hasPrompt": true,
    "description": "Transform any input video into a new visual style or scene while preserving motion and structure.",
    "provider": "runway",
    "provider_name": "RunwayML"
  },

  {
    "id": "ai-dance-effects",
    "name": "AI Dance Effects",
    "endpoint": "ai-dance-effects",
    "family": "effects",
    "videoField": "video_url",
    "imageField": "image_url",
    "hasPrompt": true,
    "description": "Bring your characters and worlds to life with AI Dance Effects — a creative video effect that adds playful, dynamic, and cinematic motion to your generations.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "ai-video-upscaler",
    "name": "AI Video Upscaler",
    "endpoint": "ai-video-upscaler",
    "family": "tools",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "The AI Video Upscaler is a powerful tool designed to enhance the resolution and quality of videos.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "wan2.2-edit-video",
    "name": "Wan2.2 Edit Video",
    "endpoint": "wan2.2-edit-video",
    "family": "wan2.2",
    "videoField": "video_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "resolution": WAN_22_RESOLUTION_INPUT
    },
    "description": "Easily modify existing videos using simple text commands.",
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "heygen-video-translate",
    "name": "HeyGen Video Translate",
    "endpoint": "heygen-video-translate",
    "family": "tools",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "Convert any video into 175+ languages with synchronized voice translation, AI-voice cloning, and accurate lip sync. Input videos can be up to 120 seconds long.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "topaz-video-upscale",
    "name": "Topaz Video Upscale",
    "endpoint": "topaz-video-upscale",
    "family": "topaz",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "The AI Video Upscaler is a powerful tool designed to enhance the resolution and quality of videos.",
    "provider": "topaz",
    "provider_name": "Topaz Labs"
  },
  {
    "id": "ai-video-upscaler-pro",
    "name": "AI Video Upscaler Pro",
    "endpoint": "ai-video-upscaler-pro",
    "family": "tools",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "The AI Video Upscaler is a powerful tool designed to enhance the resolution and quality of videos.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "remix-video",
    "name": "Remix Video",
    "endpoint": "remix-video",
    "family": "tools",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "Transform and resize your videos effortlessly with remix video tool.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "kling-o1-video-edit",
    "name": "Kling O1 Pro Edit",
    "endpoint": "kling-o1-video-edit",
    "family": "kling-o1",
    "videoField": "video_url",
    "imageField": "images_list",
    "maxImages": 4,
    "hasPrompt": true,
    "promptRequired": true,
    "required": [
      "prompt",
      "images_list",
      "video_url"
    ],
    "inputs": KLING_O1_PRO_EDIT_INPUTS,
    "description": "Kling O1 Video Edit lets you send an existing video clip plus an instruction/prompt to edit or transform the clip while preserving temporal coherence and subject identity.",
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-o1-video-edit-fast",
    "name": "Kling O1 Pro Edit Fast",
    "endpoint": "kling-o1-video-edit-fast",
    "family": "kling-o1",
    "videoField": "video_url",
    "imageField": "images_list",
    "maxImages": 4,
    "hasPrompt": true,
    "promptRequired": true,
    "required": [
      "prompt",
      "images_list",
      "video_url"
    ],
    "inputs": KLING_O1_PRO_EDIT_INPUTS,
    "description": "Video Edit Fast is the lightweight, high-speed editing mode of Kling O1.",
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-o1-standard-video-edit",
    "name": "Kling O1 Standard Edit",
    "endpoint": "kling-o1-standard-video-edit",
    "family": "kling-o1",
    "videoField": "video_url",
    "imageField": "images_list",
    "maxImages": 4,
    "hasPrompt": true,
    "promptRequired": true,
    "required": [
      "prompt",
      "images_list",
      "video_url"
    ],
    "inputs": KLING_O1_EDIT_INPUTS,
    "description": "Kling O1 Standard Video-to-Video Edit modifies an existing video while preserving its original structure, motion, and realism.",
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "wan2.2-spicy-video-extend",
    "name": "Wan2.2 Spicy Video Extend",
    "endpoint": "wan2.2-spicy-video-extend",
    "family": "wan2.2",
    "videoField": "video_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "resolution": WAN_22_RESOLUTION_INPUT,
      "duration": {
        "type": "integer", "title": "Duration", "name": "duration",
        "enum": [5, 8], "default": 5
      }
    },
    "description": "Wan-2.2-spicy Video Extend continues an existing video by generating new frames that match the original style but add stronger motion, bolder effects, and spicier dramatics.",
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "seedance-v1.5-pro-video-extend",
    "name": "Seedance v1.5 Pro Video Extend",
    "endpoint": "seedance-v1.5-pro-video-extend",
    "family": "seedance-v1.5-pro",
    "videoField": "video_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": SEEDANCE_15_EXTEND_INPUTS,
    "description": "Seedance v1.5 Pro Video Extend continues an existing video by generating additional frames that match the original scene’s style, lighting, motion, and mood.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-v1.5-pro-video-extend-fast",
    "name": "Seedance v1.5 Pro Video Extend Fast",
    "endpoint": "seedance-v1.5-pro-video-extend-fast",
    "family": "seedance-v1.5-pro",
    "videoField": "video_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      ...SEEDANCE_15_EXTEND_INPUTS,
      "resolution": { ...SEEDANCE_15_EXTEND_INPUTS.resolution, "enum": ["720p", "1080p"] }
    },
    "description": "Seedance v1.5 Pro Video Extend Fast quickly extends an existing video by generating a short continuation that matches the original style, motion, and lighting.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "add-video-watermark",
    "name": "Add Video Watermark",
    "endpoint": "add-video-watermark",
    "family": "watermark",
    "videoField": "video_url",
    "imageField": "watermark_image_url",
    "hasPrompt": false,
    "description": "Add custom watermark to videos with adjustable position, opacity, and size.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "seedance-2-watermark-remover",
    "name": "Seedance 2 Watermark Remover",
    "endpoint": "seedance-2.0-watermark-remover",
    "family": "sd-v2.0",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "🎉 FREE for a limited time — Remove SD 2.0 watermarks from videos using LaMa AI inpainting.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "ai-captions",
    "name": "AI Captions",
    "endpoint": "ai-captions",
    "family": "tools",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "Add AI-generated animated captions to any video using Vadoo's caption engine.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "ltx-2.3-video-extend",
    "name": "LTX 2.3 Extend",
    "endpoint": "ltx-2.3-video-extend",
    "family": "ltx2.3",
    "videoField": "video_url",
    "hasPrompt": true,
    "inputs": {
      "duration": {
        "title": "Extend duration",
        "name": "duration",
        "type": "integer",
        "enum": Array.from({ length: 20 }, (_, index) => index + 1),
        "default": 5
      }
    },
    "description": "LTX-2.3 Video Extend seamlessly continues an existing video clip by generating additional frames that match the original motion, style, and scene composition.",
    "provider": "lightricks",
    "provider_name": "Lightricks"
  },
  {
    "id": "seedance-2-video-watermark-remover-pro",
    "name": "Seedance 2 Video Watermark Remover Pro",
    "endpoint": "seedance-2-video-watermark-remover-pro",
    "family": "sd-v2.0",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "SD 2 Video Watermark Remover Pro uses the SD 2 AI model to remove watermarks, logos, and overlaid text from videos with high accuracy.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "pixverse-v6-extend",
    "name": "PixVerse V6 Extend",
    "endpoint": "pixverse-v6-extend",
    "family": "pixverse-v6",
    "videoField": "video_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "resolution": {
        "type": "string", "title": "Resolution", "name": "resolution",
        "enum": ["360p", "540p", "720p", "1080p"], "default": "720p"
      },
      "duration": {
        "type": "integer", "title": "Duration", "name": "duration",
        "enum": Array.from({ length: 15 }, (_, index) => index + 1), "default": 5
      },
      "generate_audio_switch": {
        "type": "boolean", "title": "Generate audio", "name": "generate_audio_switch",
        "default": false
      },
      "negative_prompt": {
        "type": "string", "title": "Negative prompt", "name": "negative_prompt"
      },
      "style": {
        "type": "string", "title": "Style", "name": "style",
        "enum": ["anime", "3d_animation", "clay", "comic", "cyberpunk"]
      }
    },
    "description": "Extend any existing video with new frames using PixVerse V6.",
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "wan2.7-video-extend",
    "name": "Wan 2.7 Extend",
    "endpoint": "wan2.7-video-extend",
    "family": "wan2.7",
    "videoField": "video_url",
    "audioField": "audio_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "audio_url": WAN_AUDIO_INPUT,
      "negative_prompt": WAN_NEGATIVE_PROMPT_INPUT,
      "resolution": WAN_27_RESOLUTION_INPUT,
      "duration": {
        "type": "integer", "title": "Duration", "name": "duration",
        "minValue": 5, "maxValue": 15, "default": 5
      }
    },
    "description": "Extend existing videos seamlessly with Wan 2.7.",
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.7-video-edit",
    "name": "Wan 2.7 Edit",
    "endpoint": "wan2.7-video-edit",
    "family": "wan2.7",
    "videoField": "video_url",
    "imageField": "images_list",
    "maxImages": 3,
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "negative_prompt": WAN_NEGATIVE_PROMPT_INPUT,
      "resolution": WAN_27_RESOLUTION_INPUT,
      "duration": {
        "type": "integer", "title": "Duration", "name": "duration",
        "description": "Use 0 to match the source video length, up to 10 seconds.",
        "minValue": 0, "maxValue": 10, "default": 0
      },
      "audio_setting": {
        "type": "string", "title": "Audio", "name": "audio_setting",
        "description": "Follow the prompt or keep the source audio.",
        "enum": ["auto", "origin"], "default": "auto"
      }
    },
    "description": "Perform prompt-driven video editing with multi-image reference support.",
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "happy-horse-1-video-edit-1080p",
    "name": "HappyHorse 1.0 Edit 1080P",
    "endpoint": "happy-horse-1-video-edit-1080p",
    "fixedParameters": { "resolution": "1080p" },
    "family": "happy-horse-1",
    "videoField": "video_url",
    "imageField": "images_list",
    "maxImages": 5,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": HAPPY_HORSE_EDIT_INPUTS,
    "description": "Happy Horse 1.0 Video Edit (1080p) - modify an input video at 1080p using a natural-language instruction with optional reference images.",
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "happy-horse-1-video-edit-720p",
    "name": "HappyHorse 1.0 Edit 720P",
    "endpoint": "happy-horse-1-video-edit-720p",
    "fixedParameters": { "resolution": "720p" },
    "family": "happy-horse-1",
    "videoField": "video_url",
    "imageField": "images_list",
    "maxImages": 5,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": HAPPY_HORSE_EDIT_INPUTS,
    "description": "Happy Horse 1.0 Video Edit (720p) - modify an input video at 720p using a natural-language instruction with optional reference images.",
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "happy-horse-1.1-video-edit-1080p",
    "name": "Happy Horse 1.1 Video Edit 1080P",
    "endpoint": "happy-horse-1.1-video-edit-1080p",
    "fixedParameters": { "resolution": "1080p" },
    "family": "happy-horse-1.1",
    "videoField": "video_url",
    "imageField": "images_list",
    "maxImages": 5,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": HAPPY_HORSE_EDIT_INPUTS,
    "description": "Happy Horse 1.1 Video Edit (1080p) — modify an input video using natural-language instructions with optional reference images.",
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "happy-horse-1.1-video-edit-720p",
    "name": "Happy Horse 1.1 Video Edit 720P",
    "endpoint": "happy-horse-1.1-video-edit-720p",
    "fixedParameters": { "resolution": "720p" },
    "family": "happy-horse-1.1",
    "videoField": "video_url",
    "imageField": "images_list",
    "maxImages": 5,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": HAPPY_HORSE_EDIT_INPUTS,
    "description": "Happy Horse 1.1 Video Edit (720p) — modify an input video using natural-language instructions with optional reference images.",
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "gemini-omni-video-edit",
    "name": "Gemini Omni Video Edit",
    "endpoint": "gemini-omni-video-edit",
    "family": "gemini-omni",
    "videoField": "video_url",
    "imageField": "image_urls",
    "maxImages": 7,
    "hasPrompt": true,
    "promptRequired": true,
    "description": "Gemini Omni Video Edit — natively multimodal video-to-video editing.",
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "video-background-remover",
    "name": "Video Background Remover",
    "endpoint": "video-background-remover",
    "family": "tools",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "Video Background Remover automatically removes the background from any video, producing a clean cutout of the subject with a transparent or solid-color backdrop.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "kling-v2.6-pro-motion-control",
    "name": "Kling 2.6 Pro Motion Control",
    "endpoint": "kling-v2.6-pro-motion-control",
    "family": "kling-v2.6",
    "videoField": "video_url",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": KLING_MOTION_INPUTS,
    "promptRequired": true,
    "description": "Kling v2.6 Pro Motion Control allows precise control over camera movement, subject motion, and scene dynamics during video generation.",
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "infinitetalk-video-to-video",
    "name": "InfiniteTalk",
    "endpoint": "infinitetalk-video-to-video",
    "family": "infinite-talk",
    "videoField": "video_url",
    "audioField": "audio_url",
    "hasPrompt": true,
    "required": [
      "video_url",
      "audio_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          ""
        ],
        "description": "The prompt to generate the video",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/infinite-input-video.mp4"
        ],
        "description": "URL of the input video.",
        "field": "video",
        "type": "string",
        "title": "Video URL",
        "name": "video_url"
      },
      "audio_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/infinite-video-audio.wav"
        ],
        "description": "The URL for uploading audio files.",
        "field": "audio",
        "type": "string",
        "title": "Audio URL",
        "name": "audio_url"
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
      }
    },
    "description": "InfiniteTalk Video-to-Video enhances or transforms existing videos by syncing the subject\u2019s lip movements and facial expressions with new dialogue or speech. Instead of starting from a still image, you provide a video clip, and the model seamlessly reanimates the speaker\u2019s mouth and expressions to match the script.",
    "provider": "infinite-talk",
    "provider_name": "Infinite Talk"
  },
  {
    "id": "wan2.2-animate",
    "name": "Wan2.2 Animate",
    "endpoint": "wan2.2-animate",
    "family": "wan2.2",
    "videoField": "video_url",
    "imageField": "image_url",
    "hasPrompt": true,
    "required": [
      "image_url",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          ""
        ],
        "description": "Optional prompt for generating video.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/wan2.2-animate-image.jpg"
        ],
        "description": "URL of the input image.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
      },
      "video_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/wan2.2-animate-in.mp4"
        ],
        "description": "URL of the input video.",
        "field": "video",
        "type": "string",
        "title": "Video URL",
        "name": "video_url"
      },
      "mode": {
        "configurable": true,
        "enum": [
          "animate",
          "replace"
        ],
        "title": "Mode",
        "name": "mode",
        "type": "string",
        "description": "Animate Mode: animate the character in input image with movements from the input video. Replace Mode: replace the character in input video with the character in input image.",
        "default": "animate"
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
      }
    },
    "description": "Wan2.2 Animate is a video-to-video model for animating a character or replacing a character in existing video clips. It replicates holistic movement and facial expressions from a reference video or pose while preserving the target character\u2019s appearance. You upload both an image (for the character) and a video containing motion/expression, and the model generates a video where the character in your image moves like the reference. Supports 480p or 720p, up to 120 seconds",
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "volcengine-video-to-video-lip-sync",
    "name": "Volcengine Lipsync",
    "endpoint": "volcengine-video-to-video-lip-sync",
    "family": "volcengine-lipsync",
    "videoField": "video_url",
    "audioField": "audio_url",
    "hasPrompt": false,
    "required": [
      "mode",
      "video_url",
      "audio_url"
    ],
    "inputs": {
      "mode": {
        "enum": [
          "lite",
          "basic"
        ],
        "type": "string",
        "title": "Mode",
        "name": "mode",
        "description": "Service mode. 'lite' is for single-person frontal videos with faster processing. 'basic' is for single-person complex scenes, supporting scene segmentation and speaker identification.",
        "default": "lite"
      },
      "video_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/muapi/data/volcengine-lipsync-video.mp4"
        ],
        "description": "Video URL. Supported resolution: 360p-1080p. Videos above 1080p are compressed to 1080p; below 360p is not supported. Supported formats: MOV, MP4, HDR. Max file size: 500MB.",
        "field": "video",
        "type": "string",
        "title": "Video URL",
        "name": "video_url"
      },
      "audio_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/muapi/data/volcengine-lipsync-audio.mp3"
        ],
        "description": "Target pure vocal audio URL used to drive the video's lip movements. Max file size: 10MB.",
        "field": "audio",
        "type": "string",
        "title": "Audio URL",
        "name": "audio_url"
      },
      "separate_vocal": {
        "type": "boolean",
        "title": "Separate Vocal",
        "name": "separate_vocal",
        "description": "Enable vocal separation to suppress background noise.",
        "default": false
      },
      "open_scenedet": {
        "type": "boolean",
        "title": "Scene Detection",
        "name": "open_scenedet",
        "description": "Enable scene segmentation and speaker identification. Only supported in Basic mode.",
        "default": false
      },
      "align_audio": {
        "type": "boolean",
        "title": "Align Audio (Loop Video)",
        "name": "align_audio",
        "description": "Supported in Lite mode. Whether to loop the video when the audio is longer than the video.",
        "default": true
      },
      "align_audio_reverse": {
        "type": "boolean",
        "title": "Align Audio Reverse",
        "name": "align_audio_reverse",
        "description": "Supported in Lite mode. Whether to loop the video in reverse (backward). Requires align_audio to be true.",
        "default": false
      },
      "templ_start_seconds": {
        "type": "int",
        "title": "Template Start Seconds",
        "name": "templ_start_seconds",
        "description": "Supported in Lite mode. Start time of the template video, in seconds.",
        "default": 0,
        "minValue": 0,
        "maxValue": 60,
        "step": 1
      }
    },
    "description": "Drive a video's lip movements to match a target audio track, producing a lip-synced video output.",
    "provider": "volcengine-lipsync",
    "provider_name": "Volcengine Lipsync"
  },
  {
    "id": "seedance-2.5-video-edit",
    "name": "Seedance 2.5 Video Edit",
    "endpoint": "seedance-2.5-video-edit",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "images_list",
    "imageOptional": true,
    "audioField": "audios_list",
    "maxImages": 30,
    "maxAudios": 10,
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "edit",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "Change the lighting to golden hour and add light fog to the environment."
        ],
        "description": "Instructions for the edit \u2014 lighting, style, weather, environment, or specific elements to change. Automatically prefixed with \"Edit the input video.\"",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-edit-in.mp4"
        ],
        "description": "URL of the video to edit. Videos longer than 30s are trimmed to 30s.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs guiding subject identity or style. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs guiding audio generation. Up to 10 files.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Audio",
        "name": "audios_list",
        "maxItems": 10
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
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate new audio. If false, the input video's original audio is preserved.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Edit edits an input video from a natural-language prompt. The reference video drives subject identity, composition, and motion while the model rewrites lighting, style, weather, environment, or specific elements as instructed.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-video-edit-480p",
    "name": "Seedance 2.5 Video Edit 480p",
    "endpoint": "seedance-2.5-video-edit-480p",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "images_list",
    "imageOptional": true,
    "audioField": "audios_list",
    "maxImages": 30,
    "maxAudios": 10,
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "edit",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "Change the lighting to golden hour and add light fog to the environment."
        ],
        "description": "Instructions for the edit \u2014 lighting, style, weather, environment, or specific elements to change. Automatically prefixed with \"Edit the input video.\"",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-edit-in.mp4"
        ],
        "description": "URL of the video to edit. Videos longer than 30s are trimmed to 30s.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs guiding subject identity or style. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs guiding audio generation. Up to 10 files.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Audio",
        "name": "audios_list",
        "maxItems": 10
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
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate new audio. If false, the input video's original audio is preserved.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Edit 480p edits an input video from a natural-language prompt. The reference video drives subject identity, composition, and motion while the model rewrites lighting, style, weather, environment, or specific elements as instructed.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-video-edit-1080p",
    "name": "Seedance 2.5 Video Edit 1080p",
    "endpoint": "seedance-2.5-video-edit-1080p",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "images_list",
    "imageOptional": true,
    "audioField": "audios_list",
    "maxImages": 30,
    "maxAudios": 10,
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "edit",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "Change the lighting to golden hour and add light fog to the environment."
        ],
        "description": "Instructions for the edit \u2014 lighting, style, weather, environment, or specific elements to change. Automatically prefixed with \"Edit the input video.\"",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-edit-in.mp4"
        ],
        "description": "URL of the video to edit. Videos longer than 30s are trimmed to 30s.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs guiding subject identity or style. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs guiding audio generation. Up to 10 files.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Audio",
        "name": "audios_list",
        "maxItems": 10
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
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate new audio. If false, the input video's original audio is preserved.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Edit 1080p edits an input video from a natural-language prompt. The reference video drives subject identity, composition, and motion while the model rewrites lighting, style, weather, environment, or specific elements as instructed.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-video-edit-4k",
    "name": "Seedance 2.5 Video Edit 4K",
    "endpoint": "seedance-2.5-video-edit-4k",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "images_list",
    "imageOptional": true,
    "audioField": "audios_list",
    "maxImages": 30,
    "maxAudios": 10,
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "edit",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "Change the lighting to golden hour and add light fog to the environment."
        ],
        "description": "Instructions for the edit \u2014 lighting, style, weather, environment, or specific elements to change. Automatically prefixed with \"Edit the input video.\"",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-edit-in.mp4"
        ],
        "description": "URL of the video to edit. Videos longer than 30s are trimmed to 30s.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs guiding subject identity or style. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs guiding audio generation. Up to 10 files.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Audio",
        "name": "audios_list",
        "maxItems": 10
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
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate new audio. If false, the input video's original audio is preserved.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Edit 4K edits an input video from a natural-language prompt. The reference video drives subject identity, composition, and motion while the model rewrites lighting, style, weather, environment, or specific elements as instructed.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-video-extend",
    "name": "Seedance 2.5 Video Extend",
    "endpoint": "seedance-2.5-video-extend",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "last_image",
    "imageOptional": true,
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "extend",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "The car keeps driving down the coastal road as the sun sets, camera slowly pulling back."
        ],
        "description": "Desired cinematic continuation \u2014 action, camera movement, lighting, mood.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-extend-in.mp4"
        ],
        "description": "URL of the video to extend. Generation continues from its last frame.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "last_image": {
        "examples": [],
        "description": "Optional target frame URL. When set, the continuation interpolates from the input video's final frame toward this image.",
        "type": "string",
        "title": "Last Image",
        "name": "last_image",
        "field": "image"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Length of the extension clip in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate synchronized audio for the new segment.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Extend extends an input video with a new cinematic continuation generated from its last frame and a natural-language prompt.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-video-extend-480p",
    "name": "Seedance 2.5 Video Extend 480p",
    "endpoint": "seedance-2.5-video-extend-480p",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "last_image",
    "imageOptional": true,
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "extend",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "The car keeps driving down the coastal road as the sun sets, camera slowly pulling back."
        ],
        "description": "Desired cinematic continuation \u2014 action, camera movement, lighting, mood.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-extend-in.mp4"
        ],
        "description": "URL of the video to extend. Generation continues from its last frame.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "last_image": {
        "examples": [],
        "description": "Optional target frame URL. When set, the continuation interpolates from the input video's final frame toward this image.",
        "type": "string",
        "title": "Last Image",
        "name": "last_image",
        "field": "image"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Length of the extension clip in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate synchronized audio for the new segment.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Extend 480p extends an input video with a new cinematic continuation generated from its last frame and a natural-language prompt.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-video-extend-1080p",
    "name": "Seedance 2.5 Video Extend 1080p",
    "endpoint": "seedance-2.5-video-extend-1080p",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "last_image",
    "imageOptional": true,
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "extend",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "The car keeps driving down the coastal road as the sun sets, camera slowly pulling back."
        ],
        "description": "Desired cinematic continuation \u2014 action, camera movement, lighting, mood.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-extend-in.mp4"
        ],
        "description": "URL of the video to extend. Generation continues from its last frame.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "last_image": {
        "examples": [],
        "description": "Optional target frame URL. When set, the continuation interpolates from the input video's final frame toward this image.",
        "type": "string",
        "title": "Last Image",
        "name": "last_image",
        "field": "image"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Length of the extension clip in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate synchronized audio for the new segment.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Extend 1080p extends an input video with a new cinematic continuation generated from its last frame and a natural-language prompt.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-video-extend-4k",
    "name": "Seedance 2.5 Video Extend 4K",
    "endpoint": "seedance-2.5-video-extend-4k",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "last_image",
    "imageOptional": true,
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "extend",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "The car keeps driving down the coastal road as the sun sets, camera slowly pulling back."
        ],
        "description": "Desired cinematic continuation \u2014 action, camera movement, lighting, mood.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-extend-in.mp4"
        ],
        "description": "URL of the video to extend. Generation continues from its last frame.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "last_image": {
        "examples": [],
        "description": "Optional target frame URL. When set, the continuation interpolates from the input video's final frame toward this image.",
        "type": "string",
        "title": "Last Image",
        "name": "last_image",
        "field": "image"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Length of the extension clip in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate synchronized audio for the new segment.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Extend 4K extends an input video with a new cinematic continuation generated from its last frame and a natural-language prompt.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-video-edit",
    "name": "Seedance 2.5 Intl Video Edit",
    "endpoint": "seedance-2.5-intl-video-edit",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "images_list",
    "imageOptional": true,
    "audioField": "audios_list",
    "maxImages": 30,
    "maxAudios": 10,
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "edit",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "Change the lighting to golden hour and add light fog to the environment."
        ],
        "description": "Instructions for the edit \u2014 lighting, style, weather, environment, or specific elements to change. Automatically prefixed with \"Edit the input video.\"",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-edit-in.mp4"
        ],
        "description": "URL of the video to edit. Videos longer than 30s are trimmed to 30s.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs guiding subject identity or style. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs guiding audio generation. Up to 10 files.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Audio",
        "name": "audios_list",
        "maxItems": 10
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
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate new audio. If false, the input video's original audio is preserved.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Edit edits an input video from a natural-language prompt. The reference video drives subject identity, composition, and motion while the model rewrites lighting, style, weather, environment, or specific elements as instructed. This international-region endpoint is served via a Dreamina-hosted deployment of the same Seedance 2.5 model, for traffic outside mainland China.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-video-edit",
    "name": "Seedance 2.5 Spicy Video Edit",
    "endpoint": "seedance-2.5-spicy-video-edit",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "images_list",
    "imageOptional": true,
    "audioField": "audios_list",
    "maxImages": 30,
    "maxAudios": 10,
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "edit",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "Change the lighting to golden hour and add light fog to the environment."
        ],
        "description": "Instructions for the edit \u2014 lighting, style, weather, environment, or specific elements to change. Automatically prefixed with \"Edit the input video.\"",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-edit-in.mp4"
        ],
        "description": "URL of the video to edit. Videos longer than 30s are trimmed to 30s.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs guiding subject identity or style. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs guiding audio generation. Up to 10 files.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Audio",
        "name": "audios_list",
        "maxItems": 10
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
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate new audio. If false, the input video's original audio is preserved.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Edit edits an input video from a natural-language prompt. The reference video drives subject identity, composition, and motion while the model rewrites lighting, style, weather, environment, or specific elements as instructed. This Spicy endpoint is the relaxed-moderation sibling of the standard tier, with lighter content-safety filtering and bolder, higher-contrast output.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-video-edit-480p",
    "name": "Seedance 2.5 Intl Video Edit 480p",
    "endpoint": "seedance-2.5-intl-video-edit-480p",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "images_list",
    "imageOptional": true,
    "audioField": "audios_list",
    "maxImages": 30,
    "maxAudios": 10,
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "edit",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "Change the lighting to golden hour and add light fog to the environment."
        ],
        "description": "Instructions for the edit \u2014 lighting, style, weather, environment, or specific elements to change. Automatically prefixed with \"Edit the input video.\"",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-edit-in.mp4"
        ],
        "description": "URL of the video to edit. Videos longer than 30s are trimmed to 30s.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs guiding subject identity or style. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs guiding audio generation. Up to 10 files.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Audio",
        "name": "audios_list",
        "maxItems": 10
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
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate new audio. If false, the input video's original audio is preserved.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Edit 480p edits an input video from a natural-language prompt. The reference video drives subject identity, composition, and motion while the model rewrites lighting, style, weather, environment, or specific elements as instructed. This international-region endpoint is served via a Dreamina-hosted deployment of the same Seedance 2.5 model, for traffic outside mainland China.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-video-edit-480p",
    "name": "Seedance 2.5 Spicy Video Edit 480p",
    "endpoint": "seedance-2.5-spicy-video-edit-480p",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "images_list",
    "imageOptional": true,
    "audioField": "audios_list",
    "maxImages": 30,
    "maxAudios": 10,
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "edit",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "Change the lighting to golden hour and add light fog to the environment."
        ],
        "description": "Instructions for the edit \u2014 lighting, style, weather, environment, or specific elements to change. Automatically prefixed with \"Edit the input video.\"",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-edit-in.mp4"
        ],
        "description": "URL of the video to edit. Videos longer than 30s are trimmed to 30s.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs guiding subject identity or style. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs guiding audio generation. Up to 10 files.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Audio",
        "name": "audios_list",
        "maxItems": 10
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
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate new audio. If false, the input video's original audio is preserved.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Edit 480p edits an input video from a natural-language prompt. The reference video drives subject identity, composition, and motion while the model rewrites lighting, style, weather, environment, or specific elements as instructed. This Spicy endpoint is the relaxed-moderation sibling of the standard tier, with lighter content-safety filtering and bolder, higher-contrast output.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-video-edit-1080p",
    "name": "Seedance 2.5 Intl Video Edit 1080p",
    "endpoint": "seedance-2.5-intl-video-edit-1080p",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "images_list",
    "imageOptional": true,
    "audioField": "audios_list",
    "maxImages": 30,
    "maxAudios": 10,
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "edit",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "Change the lighting to golden hour and add light fog to the environment."
        ],
        "description": "Instructions for the edit \u2014 lighting, style, weather, environment, or specific elements to change. Automatically prefixed with \"Edit the input video.\"",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-edit-in.mp4"
        ],
        "description": "URL of the video to edit. Videos longer than 30s are trimmed to 30s.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs guiding subject identity or style. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs guiding audio generation. Up to 10 files.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Audio",
        "name": "audios_list",
        "maxItems": 10
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
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate new audio. If false, the input video's original audio is preserved.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Edit 1080p edits an input video from a natural-language prompt. The reference video drives subject identity, composition, and motion while the model rewrites lighting, style, weather, environment, or specific elements as instructed. This international-region endpoint is served via a Dreamina-hosted deployment of the same Seedance 2.5 model, for traffic outside mainland China.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-video-edit-1080p",
    "name": "Seedance 2.5 Spicy Video Edit 1080p",
    "endpoint": "seedance-2.5-spicy-video-edit-1080p",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "images_list",
    "imageOptional": true,
    "audioField": "audios_list",
    "maxImages": 30,
    "maxAudios": 10,
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "edit",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "Change the lighting to golden hour and add light fog to the environment."
        ],
        "description": "Instructions for the edit \u2014 lighting, style, weather, environment, or specific elements to change. Automatically prefixed with \"Edit the input video.\"",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-edit-in.mp4"
        ],
        "description": "URL of the video to edit. Videos longer than 30s are trimmed to 30s.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs guiding subject identity or style. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs guiding audio generation. Up to 10 files.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Audio",
        "name": "audios_list",
        "maxItems": 10
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
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate new audio. If false, the input video's original audio is preserved.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Edit 1080p edits an input video from a natural-language prompt. The reference video drives subject identity, composition, and motion while the model rewrites lighting, style, weather, environment, or specific elements as instructed. This Spicy endpoint is the relaxed-moderation sibling of the standard tier, with lighter content-safety filtering and bolder, higher-contrast output.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-video-edit-4k",
    "name": "Seedance 2.5 Intl Video Edit 4K",
    "endpoint": "seedance-2.5-intl-video-edit-4k",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "images_list",
    "imageOptional": true,
    "audioField": "audios_list",
    "maxImages": 30,
    "maxAudios": 10,
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "edit",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "Change the lighting to golden hour and add light fog to the environment."
        ],
        "description": "Instructions for the edit \u2014 lighting, style, weather, environment, or specific elements to change. Automatically prefixed with \"Edit the input video.\"",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-edit-in.mp4"
        ],
        "description": "URL of the video to edit. Videos longer than 30s are trimmed to 30s.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs guiding subject identity or style. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs guiding audio generation. Up to 10 files.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Audio",
        "name": "audios_list",
        "maxItems": 10
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
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate new audio. If false, the input video's original audio is preserved.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Edit 4K edits an input video from a natural-language prompt. The reference video drives subject identity, composition, and motion while the model rewrites lighting, style, weather, environment, or specific elements as instructed. This international-region endpoint is served via a Dreamina-hosted deployment of the same Seedance 2.5 model, for traffic outside mainland China.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-video-edit-4k",
    "name": "Seedance 2.5 Spicy Video Edit 4K",
    "endpoint": "seedance-2.5-spicy-video-edit-4k",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "images_list",
    "imageOptional": true,
    "audioField": "audios_list",
    "maxImages": 30,
    "maxAudios": 10,
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "edit",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "Change the lighting to golden hour and add light fog to the environment."
        ],
        "description": "Instructions for the edit \u2014 lighting, style, weather, environment, or specific elements to change. Automatically prefixed with \"Edit the input video.\"",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-edit-in.mp4"
        ],
        "description": "URL of the video to edit. Videos longer than 30s are trimmed to 30s.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs guiding subject identity or style. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs guiding audio generation. Up to 10 files.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Audio",
        "name": "audios_list",
        "maxItems": 10
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
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate new audio. If false, the input video's original audio is preserved.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Edit 4K edits an input video from a natural-language prompt. The reference video drives subject identity, composition, and motion while the model rewrites lighting, style, weather, environment, or specific elements as instructed. This Spicy endpoint is the relaxed-moderation sibling of the standard tier, with lighter content-safety filtering and bolder, higher-contrast output.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-video-extend",
    "name": "Seedance 2.5 Intl Video Extend",
    "endpoint": "seedance-2.5-intl-video-extend",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "last_image",
    "imageOptional": true,
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "extend",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "The car keeps driving down the coastal road as the sun sets, camera slowly pulling back."
        ],
        "description": "Desired cinematic continuation \u2014 action, camera movement, lighting, mood.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-extend-in.mp4"
        ],
        "description": "URL of the video to extend. Generation continues from its last frame.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "last_image": {
        "examples": [],
        "description": "Optional target frame URL. When set, the continuation interpolates from the input video's final frame toward this image.",
        "type": "string",
        "title": "Last Image",
        "name": "last_image",
        "field": "image"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Length of the extension clip in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate synchronized audio for the new segment.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Extend extends an input video with a new cinematic continuation generated from its last frame and a natural-language prompt. This international-region endpoint is served via a Dreamina-hosted deployment of the same Seedance 2.5 model, for traffic outside mainland China.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-video-extend",
    "name": "Seedance 2.5 Spicy Video Extend",
    "endpoint": "seedance-2.5-spicy-video-extend",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "last_image",
    "imageOptional": true,
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "extend",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "The car keeps driving down the coastal road as the sun sets, camera slowly pulling back."
        ],
        "description": "Desired cinematic continuation \u2014 action, camera movement, lighting, mood.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-extend-in.mp4"
        ],
        "description": "URL of the video to extend. Generation continues from its last frame.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "last_image": {
        "examples": [],
        "description": "Optional target frame URL. When set, the continuation interpolates from the input video's final frame toward this image.",
        "type": "string",
        "title": "Last Image",
        "name": "last_image",
        "field": "image"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Length of the extension clip in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate synchronized audio for the new segment.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Extend extends an input video with a new cinematic continuation generated from its last frame and a natural-language prompt. This Spicy endpoint is the relaxed-moderation sibling of the standard tier, with lighter content-safety filtering and bolder, higher-contrast output.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-video-extend-480p",
    "name": "Seedance 2.5 Intl Video Extend 480p",
    "endpoint": "seedance-2.5-intl-video-extend-480p",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "last_image",
    "imageOptional": true,
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "extend",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "The car keeps driving down the coastal road as the sun sets, camera slowly pulling back."
        ],
        "description": "Desired cinematic continuation \u2014 action, camera movement, lighting, mood.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-extend-in.mp4"
        ],
        "description": "URL of the video to extend. Generation continues from its last frame.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "last_image": {
        "examples": [],
        "description": "Optional target frame URL. When set, the continuation interpolates from the input video's final frame toward this image.",
        "type": "string",
        "title": "Last Image",
        "name": "last_image",
        "field": "image"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Length of the extension clip in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate synchronized audio for the new segment.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Extend 480p extends an input video with a new cinematic continuation generated from its last frame and a natural-language prompt. This international-region endpoint is served via a Dreamina-hosted deployment of the same Seedance 2.5 model, for traffic outside mainland China.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-video-extend-480p",
    "name": "Seedance 2.5 Spicy Video Extend 480p",
    "endpoint": "seedance-2.5-spicy-video-extend-480p",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "last_image",
    "imageOptional": true,
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "extend",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "The car keeps driving down the coastal road as the sun sets, camera slowly pulling back."
        ],
        "description": "Desired cinematic continuation \u2014 action, camera movement, lighting, mood.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-extend-in.mp4"
        ],
        "description": "URL of the video to extend. Generation continues from its last frame.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "last_image": {
        "examples": [],
        "description": "Optional target frame URL. When set, the continuation interpolates from the input video's final frame toward this image.",
        "type": "string",
        "title": "Last Image",
        "name": "last_image",
        "field": "image"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Length of the extension clip in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate synchronized audio for the new segment.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Extend 480p extends an input video with a new cinematic continuation generated from its last frame and a natural-language prompt. This Spicy endpoint is the relaxed-moderation sibling of the standard tier, with lighter content-safety filtering and bolder, higher-contrast output.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-video-extend-1080p",
    "name": "Seedance 2.5 Intl Video Extend 1080p",
    "endpoint": "seedance-2.5-intl-video-extend-1080p",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "last_image",
    "imageOptional": true,
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "extend",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "The car keeps driving down the coastal road as the sun sets, camera slowly pulling back."
        ],
        "description": "Desired cinematic continuation \u2014 action, camera movement, lighting, mood.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-extend-in.mp4"
        ],
        "description": "URL of the video to extend. Generation continues from its last frame.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "last_image": {
        "examples": [],
        "description": "Optional target frame URL. When set, the continuation interpolates from the input video's final frame toward this image.",
        "type": "string",
        "title": "Last Image",
        "name": "last_image",
        "field": "image"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Length of the extension clip in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate synchronized audio for the new segment.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Extend 1080p extends an input video with a new cinematic continuation generated from its last frame and a natural-language prompt. This international-region endpoint is served via a Dreamina-hosted deployment of the same Seedance 2.5 model, for traffic outside mainland China.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-video-extend-1080p",
    "name": "Seedance 2.5 Spicy Video Extend 1080p",
    "endpoint": "seedance-2.5-spicy-video-extend-1080p",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "last_image",
    "imageOptional": true,
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "extend",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "The car keeps driving down the coastal road as the sun sets, camera slowly pulling back."
        ],
        "description": "Desired cinematic continuation \u2014 action, camera movement, lighting, mood.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-extend-in.mp4"
        ],
        "description": "URL of the video to extend. Generation continues from its last frame.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "last_image": {
        "examples": [],
        "description": "Optional target frame URL. When set, the continuation interpolates from the input video's final frame toward this image.",
        "type": "string",
        "title": "Last Image",
        "name": "last_image",
        "field": "image"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Length of the extension clip in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate synchronized audio for the new segment.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Extend 1080p extends an input video with a new cinematic continuation generated from its last frame and a natural-language prompt. This Spicy endpoint is the relaxed-moderation sibling of the standard tier, with lighter content-safety filtering and bolder, higher-contrast output.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-video-extend-4k",
    "name": "Seedance 2.5 Intl Video Extend 4K",
    "endpoint": "seedance-2.5-intl-video-extend-4k",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "last_image",
    "imageOptional": true,
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "extend",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "The car keeps driving down the coastal road as the sun sets, camera slowly pulling back."
        ],
        "description": "Desired cinematic continuation \u2014 action, camera movement, lighting, mood.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-extend-in.mp4"
        ],
        "description": "URL of the video to extend. Generation continues from its last frame.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "last_image": {
        "examples": [],
        "description": "Optional target frame URL. When set, the continuation interpolates from the input video's final frame toward this image.",
        "type": "string",
        "title": "Last Image",
        "name": "last_image",
        "field": "image"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Length of the extension clip in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate synchronized audio for the new segment.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Extend 4K extends an input video with a new cinematic continuation generated from its last frame and a natural-language prompt. This international-region endpoint is served via a Dreamina-hosted deployment of the same Seedance 2.5 model, for traffic outside mainland China.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-video-extend-4k",
    "name": "Seedance 2.5 Spicy Video Extend 4K",
    "endpoint": "seedance-2.5-spicy-video-extend-4k",
    "family": "seedance-2.5",
    "videoField": "video_url",
    "imageField": "last_image",
    "imageOptional": true,
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "extend",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "The car keeps driving down the coastal road as the sun sets, camera slowly pulling back."
        ],
        "description": "Desired cinematic continuation \u2014 action, camera movement, lighting, mood.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://cdn.muapi.ai/assets/seedance-2.5-video-extend-in.mp4"
        ],
        "description": "URL of the video to extend. Generation continues from its last frame.",
        "type": "string",
        "title": "Video Url",
        "name": "video_url",
        "field": "video"
      },
      "last_image": {
        "examples": [],
        "description": "Optional target frame URL. When set, the continuation interpolates from the input video's final frame toward this image.",
        "type": "string",
        "title": "Last Image",
        "name": "last_image",
        "field": "image"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Length of the extension clip in seconds.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate synchronized audio for the new segment.",
        "default": true
      },
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
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT
    },
    "description": "Seedance 2.5 Video Extend 4K extends an input video with a new cinematic continuation generated from its last frame and a natural-language prompt. This Spicy endpoint is the relaxed-moderation sibling of the standard tier, with lighter content-safety filtering and bolder, higher-contrast output.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "flux-3-video-extend",
    "name": "FLUX 3 Video Extend",
    "endpoint": "flux-3-video-extend",
    "family": "flux-3",
    "videoField": "video_url",
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "extend",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "The camera pulls back to reveal a sunrise breaking over the skyline, birds taking flight."
        ],
        "description": "Text prompt describing how the video should continue.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/flux-3-video.mp4"
        ],
        "description": "URL of the source video to extend. Must be under 50 MB and under 15 seconds.",
        "field": "video",
        "type": "string",
        "title": "Video URL",
        "name": "video_url"
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
        "description": "Length of the extension in seconds.",
        "default": 5,
        "minValue": 5,
        "maxValue": 20,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate synchronized native audio for the extended video.",
        "default": true
      }
    },
    "description": "FLUX 3 Video Extend continues an existing video clip with prompt-guided motion, scene development, and camera movement \u2014 with optional native synchronized audio \u2014 using Black Forest Labs' unified image/video/audio architecture. Source clips must be under 50 MB and under 15 seconds.",
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-3-video-upscaler",
    "name": "FLUX Video Upscale",
    "endpoint": "flux-3-video-upscaler",
    "family": "flux-3",
    "videoField": "video_url",
    "hasPrompt": true,
    "operation": "upscale",
    "required": [
      "video_url"
    ],
    "inputs": {
      "video_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/flux-3-video.mp4"
        ],
        "description": "URL of the source video to upscale.",
        "field": "video",
        "type": "string",
        "title": "Video URL",
        "name": "video_url"
      },
      "prompt": {
        "examples": [
          "Sharpen fine detail and preserve natural film grain."
        ],
        "description": "Optional text prompt describing the desired enhancement direction, detail style, or visual refinement.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "upscale_factor": {
        "title": "Upscale Factor",
        "name": "upscale_factor",
        "type": "number",
        "description": "Multiplier controlling output resolution scaling.",
        "default": 2,
        "minValue": 1,
        "maxValue": 4,
        "step": 0.5
      },
      "creativity": {
        "enum": [
          0,
          1
        ],
        "title": "Creativity",
        "name": "creativity",
        "type": "int",
        "description": "0 = Precise (higher fidelity to source), 1 = Creative (more reconstruction, higher pricing tier).",
        "default": 0
      }
    },
    "description": "FLUX 3 Video Upscaler raises FLUX 3 (or any) video output beyond its native resolution, preserving motion coherence and native audio sync while sharpening detail \u2014 useful since FLUX 3 Video launches capped at 720p ahead of a planned 1080p+ rollout.",
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-3-video-extend-draft",
    "name": "FLUX 3 Video Extend Draft",
    "endpoint": "flux-3-video-extend-draft",
    "family": "flux-3",
    "videoField": "video_url",
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "extend",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "The camera pulls back to reveal a sunrise breaking over the skyline, birds taking flight."
        ],
        "description": "Describe the next action, scene development, camera movement, mood, lighting, and visual continuity.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/flux-3-video.mp4"
        ],
        "description": "URL of the source video to extend. Must be under 50 MB and under 15 seconds.",
        "field": "video",
        "type": "string",
        "title": "Video URL",
        "name": "video_url"
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
        "description": "Aspect ratio of the output video."
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Draft extension length in seconds.",
        "default": 5,
        "minValue": 5,
        "maxValue": 20,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate synchronized native audio for the draft extension.",
        "default": true
      }
    },
    "description": "FLUX 3 Video Extend Draft is a fast, lower-cost draft mode for testing continuity, camera movement, and visual consistency before extending a clip with FLUX 3 Video Extend.",
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "gemini-omni-flash-1-1-edit",
    "name": "Gemini Omni 1.1 Flash Edit",
    "endpoint": "gemini-omni-flash-1-1-edit",
    "family": "gemini-omni",
    "videoField": "video_url",
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "edit",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "A simple instruction describing the edit.",
        "examples": [
          "Make this video anime. Keep everything else the same."
        ]
      },
      "video_url": {
        "field": "video",
        "type": "string",
        "title": "Source Video",
        "name": "video_url",
        "description": "URL of the video to edit."
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
        "description": "Output resolution. Billed per second of source video (rounded up, min 3s / max 10s billed): $0.048/s at 360p, $0.16/s at 720p, $0.24/s at 1080p, $0.48/s at 4K.",
        "default": "720p"
      }
    },
    "description": "Gemini Omni 1.1 Flash Video Edit \u2014 restyle or edit a source video with a single text instruction, powered by Gemini Omni's natively multimodal any-to-any model.",
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "gemini-omni-flash-1-2-edit",
    "name": "Gemini Omni 1.2 Flash Edit",
    "endpoint": "gemini-omni-flash-1-2-edit",
    "family": "gemini-omni",
    "videoField": "video_url",
    "hasPrompt": true,
    "promptRequired": true,
    "operation": "edit",
    "required": [
      "prompt",
      "video_url"
    ],
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the scene, action, camera movement, and sound.",
        "examples": [
          "Make this video anime. Keep everything else the same."
        ]
      },
      "video_url": {
        "field": "video",
        "type": "string",
        "title": "Source Video",
        "name": "video_url",
        "description": "URL of the video to edit (MP4 recommended, max 15 seconds)."
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
      }
    },
    "description": "Gemini Omni 1.2 Flash \u2014 edit an existing video with a simple text instruction, optionally guided by reference images. Output length follows the source video (max 15s).",
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "depth-anything",
    "name": "Depth Anything V2",
    "endpoint": "depth-anything",
    "family": "video",
    "videoField": "video_url",
    "imageField": "image_url",
    "imageOptional": true,
    "hasPrompt": false,
    "inputs": {
      "video_url": {
        "type": "string",
        "title": "Video URL",
        "field": "video",
        "name": "video_url",
        "description": "The URL of the driving video to extract a per-frame depth map from. Provide exactly one of video_url or image_url.",
        "examples": [
          "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        ]
      },
      "image_url": {
        "type": "string",
        "title": "Image URL",
        "field": "image",
        "name": "image_url",
        "description": "The URL of a single image to generate a depth map from. Provide exactly one of video_url or image_url.",
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedream-5.0-edit.jpg"
        ]
      }
    },
    "description": "Extract a per-frame depth map from a video or image using Depth Anything V2, for use as a motion/structure control signal in AI video generation.",
    "provider": "video",
    "provider_name": "Video"
  },
  {
    "id": "runway-act-two-v2v",
    "name": "Runway Act Two V2V",
    "endpoint": "runway-act-two-v2v",
    "family": "runway",
    "videoField": "video_url",
    "hasPrompt": false,
    "inputs": {
      "video_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/videos/186/949545949165/ae612a72-578f-4eb2-a33c-9deea0017b28.mp4"
        ],
        "description": "URL of the input video. An video of your character. In the output, the character will use the reference video performance in its original static environment.",
        "field": "video",
        "type": "string",
        "title": "Video URL",
        "name": "video_url"
      },
      "reference_video_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/videos/186/703170005884/a024ec71-10b5-4d41-ab84-2055fb3f14b3.mp4"
        ],
        "description": "A video URL pointing to a video of a person performing in the manner that you would like your character to perform.",
        "field": "video",
        "type": "string",
        "title": "Reference Video URL",
        "name": "reference_video_url"
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
      }
    },
    "provider": "runway",
    "description": "Take an existing character video and sync it with the motion from a reference video. This lets you update facial expressions, head turns, and speech gestures while keeping the original look and style. It’s perfect for reshooting performances, dubbing, or animating characters without re-rendering visuals.",
    "image_url": "https://d3adwkbyhxyrtq.cloudfront.net/muapi/homepage/runway-act-two-v2v.avif"
  },
  {
    "id": "luma-flash-reframe",
    "name": "Luma Flash Reframe",
    "endpoint": "luma-flash-reframe",
    "family": "luma",
    "imageField": "image_url",
    "videoField": "video_url",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": false,
    "inputs": {
      "prompt": {
        "examples": [
          ""
        ],
        "description": "Optional prompt for reframing.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "video_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/videos/186/251774920487/6cc08197-125a-42f4-96cc-9c2440f69c18.mp4"
        ],
        "description": "URL of the input video to reframe.",
        "field": "video",
        "type": "string",
        "title": "Video URL",
        "name": "video_url"
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
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output image.",
        "default": "1:1"
      },
      "image_url": {
        "examples": [
          null
        ],
        "description": "Optional URL of the first frame image for reframing.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
      }
    },
    "provider": "luma",
    "provider_name": "KIE_AI",
    "description": "Transform and resize your videos effortlessly with Ray 2 Flash Reframe. This tool intelligently expands or adjusts your video’s aspect ratio—adding visually consistent content to the sides, top, or bottom—without altering the original subject.",
    "example_url": "https://d3adwkbyhxyrtq.cloudfront.net/aivideo/videos/186/396136358051/luma-reframe.mp4",
    "image_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/luma-reframe.avif"
  },
  {
    "id": "seedance-2-video-edit",
    "name": "Seedance 2 Video Edit",
    "endpoint": "seedance-v2.0-video-edit",
    "family": "sd-v2.0",
    "imageField": "images_list",
    "videoField": "video_urls",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Replace the running man with @image1. Preserve the exact running motion, speed, and camera shake. Ensure the armor glows dynamically with the environment lighting and reflects passing car lights. Maintain realistic foot contact with the ground and motion blur consistency."
        ],
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video edit."
      },
      "video_urls": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-video-edit-in.avif"
        ],
        "description": "Upload up to 1 video URL. (Max size: 10MB, Max duration: 15s)",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Video URLs",
        "name": "video_urls",
        "maxItems": 1
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-video-edit.jpg"
        ],
        "description": "Upload up to 9 image URLs.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 9
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
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Quality",
        "name": "quality",
        "type": "string",
        "default": "basic"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Output video duration in seconds (4–15).",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "PI_API",
    "description": "SD 2.0 Video Edit modifies existing videos based on text prompts and optional reference images.",
    "example_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-video-edit.mp4",
    "image_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-video-edit.avif"
  },


  {
    "id": "happy-horse-1-video-edit",
    "name": "Happy Horse 1 Video Edit",
    "endpoint": "happy-horse-1-video-edit",
    "family": "happy-horse-1",
    "imageField": "images_list",
    "videoField": "video_url",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Edit instruction describing the change to apply to the video.",
        "examples": [
          "Replace the horse with @image1 and transform the kitchen environment to match @image2 while preserving the original running path and camera movement. Add larger fire bursts, exploding soup pots, flying vegetables, steam clouds, and frantic comedic reactions from the raccoon chef."
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
      "video_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-1080p.mp4"
        ],
        "description": "Source video URL. MP4/MOV (H.264 recommended), 3-60s, <=100 MB, longer side <=2160px, shorter >=320px, frame rate >8 fps.",
        "field": "video",
        "type": "string",
        "title": "Video URL",
        "name": "video_url"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-video-edit-720p-1.jpg",
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-video-edit-720p-2.jpg"
        ],
        "description": "Optional 0-5 reference image URLs to guide the edit.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 5
      },
      "audio_setting": {
        "enum": [
          "auto",
          "origin"
        ],
        "type": "string",
        "title": "Audio Setting",
        "name": "audio_setting",
        "description": "Audio strategy: 'auto' lets the model decide, 'origin' preserves source audio.",
        "default": "auto"
      },
      "seed": {
        "type": "int",
        "title": "Seed",
        "name": "seed",
        "description": "Optional random seed for reproducibility (0-2147483647).",
        "default": 0,
        "minValue": 0,
        "maxValue": 2147483647,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "KINOVI",
    "description": "Happy Horse 1.0 Video Edit - modify an input video using a natural-language instruction with optional reference images. Selectable output resolution (720p/1080p) - price scales with the resolution chosen.",
    "example_url": "https://cdn.muapi.ai/assets/f2d805a3-e08b-478c-92cc-9a9e9c0cee92.avif",
    "image_url": "https://cdn.muapi.ai/assets/f2d805a3-e08b-478c-92cc-9a9e9c0cee92.avif"
  },
  {
    "id": "happy-horse-1.1-video-edit",
    "name": "Happy Horse 1.1 Video Edit",
    "endpoint": "happy-horse-1.1-video-edit",
    "family": "happy-horse-1.1",
    "imageField": "images_list",
    "videoField": "video_url",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Edit instruction describing the change to apply to the video.",
        "examples": [
          "Replace the horse with @image1 and replace the shopping cart with @image2 while preserving the original high-speed motion and camera movement."
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
      "video_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-720p.mp4"
        ],
        "description": "Source video URL. MP4/MOV (H.264 recommended), 3-60s, <=100 MB, longer side <=2160px, shorter >=320px, frame rate >8 fps.",
        "field": "video",
        "type": "string",
        "title": "Video URL",
        "name": "video_url"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-video-edit-1080p-1.jpg",
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-video-edit-1080p-2.jpg"
        ],
        "description": "Optional 0-5 reference image URLs to guide the edit.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 5
      },
      "audio_setting": {
        "enum": [
          "auto",
          "origin"
        ],
        "type": "string",
        "title": "Audio Setting",
        "name": "audio_setting",
        "description": "Audio strategy: 'auto' lets the model decide, 'origin' preserves source audio.",
        "default": "auto"
      },
      "seed": {
        "type": "int",
        "title": "Seed",
        "name": "seed",
        "description": "Optional random seed for reproducibility (0-2147483647).",
        "default": 0,
        "minValue": 0,
        "maxValue": 2147483647,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "KINOVI",
    "description": "Happy Horse 1.1 Video Edit — modify an input video using natural-language instructions with optional reference images. Selectable output resolution (720p/1080p) — price scales with the resolution chosen.",
    "example_url": "https://cdn.muapi.ai/assets/5da8b3c4-56db-4b80-8187-36b02ae584d9.avif",
    "image_url": "https://cdn.muapi.ai/assets/5da8b3c4-56db-4b80-8187-36b02ae584d9.avif"
  },


  {
    "id": "topaz-upscale-video-creative",
    "name": "Topaz Upscale Video Creative",
    "endpoint": "topaz-upscale-video-creative",
    "family": "topaz-2-video-creative",
    "videoField": "video_url",
    "hasPrompt": true,
    "promptRequired": false,
    "inputs": {
      "video_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/topaz-upscaler-in.mp4"
        ],
        "description": "Input video to upscale.",
        "field": "video",
        "type": "string",
        "title": "Video URL",
        "name": "video_url"
      },
      "prompt": {
        "description": "Optional text prompt to guide creative detail (limits input to 450 frames when set).",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "creativity": {
        "description": "Creative detail strength (0-1).",
        "type": "number",
        "title": "Creativity",
        "name": "creativity",
        "default": 0.5
      },
      "realism": {
        "description": "Realism strength (0-1).",
        "type": "number",
        "title": "Realism",
        "name": "realism"
      },
      "sharp": {
        "description": "Sharpening amount (0-1).",
        "type": "number",
        "title": "Sharp",
        "name": "sharp"
      },
      "upscale_factor": {
        "description": "Factor to upscale the video by.",
        "type": "number",
        "title": "Upscale Factor",
        "name": "upscale_factor",
        "default": 2
      },
      "target_fps": {
        "description": "Target output frame rate.",
        "type": "int",
        "title": "Target FPS",
        "name": "target_fps",
        "minValue": 16,
        "maxValue": 60,
        "step": 1
      },
      "H264_output": {
        "description": "Encode output using H.264 instead of the default codec.",
        "type": "boolean",
        "title": "H264 Output",
        "name": "H264_output",
        "default": false
      }
    },
    "provider": "topaz",
    "provider_name": "FAL_AI",
    "description": "Upscale a video with Topaz's Astra 2 creative diffusion model, generating new plausible detail while enlarging up to 4x and up to 4K.",
    "example_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/topaz-upscaler.mp4",
    "image_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/topaz-upscaler.avif"
  },
  {
    "id": "topaz-upscale-video-generative",
    "name": "Topaz Upscale Video Generative",
    "endpoint": "topaz-upscale-video-generative",
    "family": "topaz-2-video-generative",
    "videoField": "video_url",
    "hasPrompt": false,
    "inputs": {
      "video_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/topaz-upscaler-in.mp4"
        ],
        "description": "Input video to upscale.",
        "field": "video",
        "type": "string",
        "title": "Video URL",
        "name": "video_url"
      },
      "model": {
        "description": "Topaz Starlight generative upscale model variant.",
        "type": "string",
        "title": "Model",
        "name": "model",
        "enum": [
          "Starlight Precise 2.6",
          "Starlight HQ",
          "Starlight Mini",
          "Starlight Sharp",
          "Starlight Fast 2"
        ],
        "default": "Starlight Precise 2.6"
      },
      "upscale_factor": {
        "description": "Factor to upscale the video by.",
        "type": "number",
        "title": "Upscale Factor",
        "name": "upscale_factor",
        "default": 2
      },
      "target_fps": {
        "description": "Target output frame rate.",
        "type": "int",
        "title": "Target FPS",
        "name": "target_fps",
        "minValue": 16,
        "maxValue": 60,
        "step": 1
      },
      "softness": {
        "description": "Softness level, Starlight Precise 2.6 only (1-5).",
        "type": "int",
        "title": "Softness",
        "name": "softness",
        "minValue": 1,
        "maxValue": 5,
        "step": 1
      },
      "H264_output": {
        "description": "Encode output using H.264 instead of the default codec.",
        "type": "boolean",
        "title": "H264 Output",
        "name": "H264_output",
        "default": false
      }
    },
    "provider": "topaz",
    "provider_name": "FAL_AI",
    "description": "Upscale a video with Topaz's Starlight generative models, reconstructing clean, temporally consistent detail for heavily degraded or low-resolution footage.",
    "example_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/topaz-upscaler.mp4",
    "image_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/topaz-upscaler.avif"
  },
  {
    "id": "topaz-upscale-video-precision",
    "name": "Topaz Upscale Video Precision",
    "endpoint": "topaz-upscale-video-precision",
    "family": "topaz-2-video-precision",
    "videoField": "video_url",
    "hasPrompt": false,
    "inputs": {
      "video_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/topaz-upscaler-in.mp4"
        ],
        "description": "Input video to upscale.",
        "field": "video",
        "type": "string",
        "title": "Video URL",
        "name": "video_url"
      },
      "model": {
        "description": "Topaz precision upscale model variant (Proteus/Iris/Dione/Artemis/Gaia/Rhea/Theia families).",
        "type": "string",
        "title": "Model",
        "name": "model",
        "enum": [
          "Proteus",
          "Proteus Natural",
          "Iris",
          "Iris Low Quality",
          "Dione DV",
          "Dione TV",
          "Dione Robust",
          "Dione Dehalo",
          "Dione Robust Dehalo",
          "Artemis High Quality",
          "Artemis Medium Quality",
          "Artemis Low Quality",
          "Artemis Strong Halo",
          "Artemis Medium Halo",
          "Artemis Aliasing & Moire",
          "Gaia HQ",
          "Gaia CG",
          "Gaia 2",
          "Rhea",
          "Theia Fine Tune Detail",
          "Theia Fine Tune Fidelity"
        ],
        "default": "Proteus"
      },
      "upscale_factor": {
        "description": "Factor to upscale the video by.",
        "type": "number",
        "title": "Upscale Factor",
        "name": "upscale_factor",
        "default": 2
      },
      "target_fps": {
        "description": "Target output frame rate.",
        "type": "int",
        "title": "Target FPS",
        "name": "target_fps",
        "minValue": 16,
        "maxValue": 60,
        "step": 1
      },
      "compression": {
        "description": "Compression-artifact reduction amount (0-1).",
        "type": "number",
        "title": "Compression",
        "name": "compression"
      },
      "noise": {
        "description": "Noise reduction amount (0-1).",
        "type": "number",
        "title": "Noise",
        "name": "noise"
      },
      "halo": {
        "description": "Halo/ringing reduction amount (0-1).",
        "type": "number",
        "title": "Halo",
        "name": "halo"
      },
      "grain": {
        "description": "Film-grain amount to add back (0-0.1).",
        "type": "number",
        "title": "Grain",
        "name": "grain"
      },
      "recover_detail": {
        "description": "Detail recovery amount (0-1).",
        "type": "number",
        "title": "Recover Detail",
        "name": "recover_detail"
      },
      "H264_output": {
        "description": "Encode output using H.264 instead of the default codec.",
        "type": "boolean",
        "title": "H264 Output",
        "name": "H264_output",
        "default": false
      }
    },
    "provider": "topaz",
    "provider_name": "FAL_AI",
    "description": "Upscale a video faithfully with Topaz's precision model library (Proteus, Artemis, Iris, Dione, Gaia, Rhea, Theia), tuned for clean broadcast/CGI/animation sources.",
    "example_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/topaz-upscaler.mp4",
    "image_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/topaz-upscaler.avif"
  }
,
{
  "id": "ai-clipping",
  "name": "AI Clipping",
  "endpoint": "ai-clipping",
  "family": "video",
  "description": "Convert long-form videos into engaging short clips using AI clipping.",
  "inputs": {
    "video_url": {
      "type": "string",
      "title": "Video URL",
      "field": "video",
      "name": "video_url",
      "description": "The URL of the video to be clipped.",
      "examples": [
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
      ]
    },
    "num_highlights": {
      "title": "Number of Highlights",
      "name": "num_highlights",
      "type": "int",
      "description": "Number of highlights to extract from the video.",
      "default": 3,
      "minValue": 1,
      "maxValue": 60,
      "step": 1
    },
    "aspect_ratio": {
      "type": "string",
      "title": "Aspect Ratio",
      "enum": [
        "9:16",
        "16:9",
        "1:1",
        "4:5",
        "4:3",
        "3:4"
      ],
      "default": "9:16",
      "name": "aspect_ratio",
      "description": "The aspect ratio for the resulting clips.",
      "examples": [
        "9:16"
      ]
    },
    "return_coordinates_only": {
      "type": "boolean",
      "title": "Return Coordinates Only",
      "default": false,
      "name": "return_coordinates_only",
      "description": "Whether to return only the coordinates instead of processed clips.",
      "examples": [
        false
      ]
    }
  },
  "required": [
    "video_url"
  ],
  "hasPrompt": false,
  "promptRequired": false,
  "videoField": "video_url",
  "provider": "muapi",
  "provider_name": "VADOO_AI",
  "example_url": "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "image_url": "https://muapi.ai/blog/clipping.jpg"
},
{
  "id": "video-combiner",
  "name": "Video Combiner",
  "endpoint": "video-combiner",
  "family": "video-tools",
  "description": "Combine multiple short video clips (5s, 10s, etc.) into a single seamless full-length video. Upload your clips in order and choose the final output aspect ratio. 'Auto' preserves the aspect ratio of your first clip.",
  "inputs": {
    "videos_list": {
      "examples": [
        "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-i2v.mp4"
      ],
      "description": "Upload the video clips you want to combine, in order. Each clip can be 5–60 seconds.",
      "field": "videos_list",
      "type": "array",
      "items": {
        "type": "string"
      },
      "title": "Video Clips",
      "name": "videos_list",
      "maxItems": 20
    },
    "aspect_ratio": {
      "enum": [
        "auto",
        "16:9",
        "9:16",
        "1:1",
        "4:3",
        "3:4",
        "21:9",
        "9:21"
      ],
      "title": "Aspect Ratio",
      "name": "aspect_ratio",
      "type": "string",
      "default": "auto",
      "description": "Output aspect ratio. 'auto' uses the aspect ratio of the first uploaded clip."
    }
  },
  "required": [
    "videos_list"
  ],
  "hasPrompt": false,
  "promptRequired": false,
  "videoField": "videos_list",
  "maxVideos": 20,
  "provider": "muapi",
  "provider_name": "INTERNAL",
  "example_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-i2v.mp4",
  "image_url": "https://d3adwkbyhxyrtq.cloudfront.net/muapi/homepage/ai-video-effects.avif"
},
{
  "id": "autocrop",
  "name": "Autocrop",
  "endpoint": "autocrop",
  "family": "video",
  "description": "Automatically crop and reframe a specific video segment to your chosen aspect ratio using AI subject tracking.",
  "inputs": {
    "video_url": {
      "type": "string",
      "title": "Video URL",
      "field": "video",
      "name": "video_url",
      "description": "The URL of the source video to crop.",
      "examples": [
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
      ]
    },
    "start_time": {
      "type": "int",
      "title": "Start Time (seconds)",
      "name": "start_time",
      "description": "Start time of the segment to crop in seconds.",
      "default": 0,
      "minValue": 0,
      "maxValue": 86400,
      "step": 1
    },
    "end_time": {
      "type": "int",
      "title": "End Time (seconds)",
      "name": "end_time",
      "description": "End time of the segment to crop in seconds.",
      "default": 60,
      "minValue": 1,
      "maxValue": 86400,
      "step": 1
    },
    "aspect_ratio": {
      "type": "string",
      "title": "Aspect Ratio",
      "enum": [
        "9:16",
        "16:9",
        "1:1",
        "4:5",
        "4:3",
        "3:4"
      ],
      "default": "9:16",
      "name": "aspect_ratio",
      "description": "The aspect ratio for the resulting clip.",
      "examples": [
        "9:16"
      ]
    }
  },
  "required": [
    "video_url",
    "start_time",
    "end_time"
  ],
  "hasPrompt": false,
  "promptRequired": false,
  "videoField": "video_url",
  "provider": "muapi",
  "provider_name": "VADOO_AI",
  "example_url": "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "image_url": "https://muapi.ai/blog/clipping.jpg"
}
];
