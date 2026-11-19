// Extracted from models.js — i2vModels catalog.
import { SEEDANCE_25_ASPECT_RATIO_INPUT, SEEDANCE_25_RESOLUTION_INPUT, SEEDANCE_HIGH_BITRATE_INPUT, SEEDANCE_GENERATE_AUDIO_INPUT, SEEDANCE_25_SEED_INPUT, GROK_ASPECT_RATIO_INPUT, GROK_RESOLUTION_INPUT, GROK_DURATION_INPUT, GROK_IMAGE_INPUT, GROK_STYLE_INPUT, MINIMAX_H3_OPEN_SEED_INPUT, WAN_AUDIO_INPUT, HAPPY_HORSE_SEED_INPUT, KLING_AUDIO_INPUT, KLING_SOUND_INPUT, KLING_KEEP_SOUND_INPUT, KLING_OMNI_REFERENCE_INPUT, VIDU_REFERENCE_INPUT, VIDU_Q2_MUSIC_INPUT, VIDU_Q2_MUSIC_RULES, VIDU_2_FORMAT_RULES, PIXVERSE_45_DURATION_RULES, PIXVERSE_55_DURATION_RULES, PIXVERSE_55_SETTINGS, LTX_GENERATE_AUDIO_INPUT } from './sharedInputs.js';

export const i2vModels = [
  {
    "id": "ai-video-effects",
    "name": "AI Video Effects",
    "endpoint": "generate_wan_ai_effects",
    "family": "effects",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to insert into the predefined prompt template for the selected effect.",
        "examples": [
          "a cute kitten"
        ]
      },
      "name": {
        "type": "string",
        "title": "Effect Type",
        "name": "name",
        "description": "The type of effect to apply to the video.",
        "enum": [
          "360 Rotation",
          "Abandoned Places",
          "Angry",
          "Animal Documentary",
          "Assassin It",
          "Baby It",
          "Boxing",
          "Bride It",
          "Cakeify",
          "Cartoon Jaw Drop",
          "Cats",
          "Crush It",
          "Crying",
          "Cyberpunk 2077",
          "Deflate It",
          "Disney Princess It",
          "Dogs",
          "Eye Close-Up",
          "Fantasy Landscapes",
          "Film Noir",
          "Fire",
          "Glamor",
          "Goblin",
          "Gun Reveal",
          "Hug Jesus",
          "Hulk Transformation",
          "Inflate It",
          "Jungle It",
          "Jumpscare",
          "Kamehameha",
          "Kiss Cam",
          "Kissing",
          "Lego",
          "Laughing",
          "Little Planet",
          "Live Wallpaper",
          "Looping Pixel Art",
          "Melt It",
          "Mona Lisa It",
          "Museum It",
          "Muscle Show Off",
          "Orc",
          "Pixar",
          "Pirate Captain",
          "POV Driving",
          "Princess It",
          "Puppy it",
          "Robotic Face Reveal",
          "Samurai It",
          "Sharingan Eyes",
          "Skyrim Fus-Ro-Dah",
          "Snow White It",
          "Squish It",
          "Steamboat Willie",
          "Super Saiyan Transformation",
          "Tsunami",
          "Ultra Wide",
          "VHS Footage",
          "VIP It",
          "Warrior It",
          "Wind Blast",
          "Younger Self Selfie",
          "Zen It",
          "Zoom Call"
        ],
        "default": "Cakeify"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "480p"
      },
      "quality": {
        "type": "string",
        "title": "Quality",
        "name": "quality",
        "description": "The quality of the generated video.",
        "enum": [
          "medium",
          "high"
        ],
        "default": "medium"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          5,
          10
        ],
        "default": 5
      }
    },
    "provider": "muapi",
    "provider_name": "MuapiApp"
  },
  {
    "id": "motion-controls",
    "name": "Motion Controls",
    "endpoint": "generate_wan_ai_effects",
    "family": "effects",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to insert into the predefined prompt template for the selected effect.",
        "examples": [
          "a blueberry person"
        ]
      },
      "name": {
        "type": "string",
        "title": "Effect Type",
        "name": "name",
        "description": "The type of effect to apply to the video.",
        "enum": [
          "360 Orbit",
          "Arc Shot",
          "Car Chase",
          "Car Mount Cam",
          "Crash Zoom In",
          "Crash Zoom Out",
          "Crane Down",
          "Crane Overhead",
          "Crane Punch-In",
          "Crane Up",
          "Dirty Lens",
          "Dolly In",
          "Dolly Left",
          "Dolly Out",
          "Dolly Right",
          "Dolly Zoom In",
          "Dolly Zoom Out",
          "Dutch Angle",
          "Fast Dolly Zoom In",
          "Fast Dolly Zoom Out",
          "Fisheye Lens",
          "Focus Shift",
          "FPV Drone Cam",
          "Handheld Cam",
          "Head Tracking",
          "Hero Run",
          "Human Timelapse",
          "Landscape Timelapse",
          "Lazy Susan",
          "Lens Crac",
          "Lens Flare",
          "Matrix Shot",
          "Motion Blur",
          "Object POV",
          "Overhead",
          "Rap Video Cam",
          "Robotic Cam",
          "Snorricam",
          "Tilt Down",
          "Tilt Up",
          "Whip Pan",
          "Wiggle",
          "Zoom In",
          "Zoom In Through Object",
          "Zoom Into Mouth",
          "Zoom Out",
          "Zoom Out Through Object"
        ],
        "default": "360 Orbit"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "480p"
      },
      "quality": {
        "type": "string",
        "title": "Quality",
        "name": "quality",
        "description": "The quality of the generated video.",
        "enum": [
          "medium",
          "high"
        ],
        "default": "medium"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          5,
          10
        ],
        "default": 5
      }
    },
    "provider": "muapi",
    "provider_name": "MuapiApp"
  },
  {
    "id": "vfx",
    "name": "VFX",
    "endpoint": "generate_wan_ai_effects",
    "family": "effects",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to insert into the predefined prompt template for the selected effect.",
        "examples": [
          "a Mercedes bench car"
        ]
      },
      "name": {
        "type": "string",
        "title": "Effect Type",
        "name": "name",
        "description": "The type of effect to apply to the video.",
        "enum": [
          "Building Explosion",
          "Car Explosion",
          "Decay Time-Lapse",
          "Disintegration",
          "Electricity",
          "Flying",
          "Huge Explosion",
          "Levitate",
          "Tornado"
        ],
        "default": "Car Explosion"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "480p"
      },
      "quality": {
        "type": "string",
        "title": "Quality",
        "name": "quality",
        "description": "The quality of the generated video.",
        "enum": [
          "medium",
          "high"
        ],
        "default": "medium"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          5,
          10
        ],
        "default": 5
      }
    },
    "provider": "muapi",
    "provider_name": "MuapiApp"
  },
  {
    "id": "veo3-image-to-video",
    "name": "Veo 3",
    "endpoint": "veo3-image-to-video",
    "family": "veo",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired video content.",
        "examples": [
          "On a neon-lit street corner, a hyped street performer with a mic shouts: 'Yo! Big drop today! VEO3 just launched on muapi!' A crowd cheers as holograms of videos burst into the air and the muapi logo spins above."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "veo3-fast-image-to-video",
    "name": "Veo 3 Fast",
    "endpoint": "veo3-fast-image-to-video",
    "family": "veo",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired video content.",
        "examples": [
          "A spaceship hovers over Earth. A digital billboard beams out: 'MuAPI is broadcasting creativity across the galaxy.' A robot host floats in zero gravity holding a prompt card: 'Let’s turn this into a story.' Suddenly, video panels fly around the ship with generated content."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "runway-image-to-video",
    "name": "Runway Image To Video",
    "endpoint": "runway-image-to-video",
    "family": "runway",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to be used to generate a video",
        "examples": [
          "The camera smoothly zooms in on the sleek, futuristic race car as it speeds through a neon-lit urban tunnel at twilight, its glossy white surface reflecting the vibrant pink and blue lights streaking past. The precise detailing of the car’s aerodynamic curves and glowing accents is highlighted as droplets of water spray from the spinning tires, adding a palpable sense of motion and intensity. The driver’s black helmet, contrasted against the car’s gleaming body, remains sharply in focus, emphasizing the thrilling high-speed chase through the city. The blurred cityscape and illuminated digital billboards in the background create a high-tech, cyberpunk atmosphere, intensifying the scene’s adrenaline and futuristic vibe."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video. If 1080p is selected, 8-second video cannot be generated.",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration in seconds. If 8-second video is selected, 1080p resolution cannot be used.",
        "enum": [
          5,
          8
        ],
        "default": 5
      }
    },
    "provider": "runway",
    "provider_name": "RunwayML"
  },
  {
    "id": "wan2.1-image-to-video",
    "name": "Wan2.1 Image To Video",
    "endpoint": "wan2.1-image-to-video",
    "family": "wan2.1",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "Animate the girl in the painting to blink and look around while her hair moves gently in the wind."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "480p"
      },
      "quality": {
        "type": "string",
        "title": "Quality",
        "name": "quality",
        "description": "The quality of the generated video.",
        "enum": [
          "medium",
          "high"
        ],
        "default": "medium"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },

  {
    "id": "hunyuan-image-to-video",
    "name": "Hunyuan Image To Video",
    "endpoint": "hunyuan-image-to-video",
    "family": "hunyuan",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "The camera begins with a slow, deliberate zoom out from the figure standing on the rain-soaked rooftop, revealing the sleek, armored silhouette clutching a glowing katana that pulses with ominous red light. The deep blues and purples of the wet cityscape set a moody, cyberpunk atmosphere, with neon signs in vibrant pinks, blues, and oranges casting reflections on the glistening surfaces below. The mist and rain softly blur the distant buildings and streetlights, emphasizing the isolation of the lone warrior framed against the sprawling urban expanse. As the camera pulls back, the subtle hum of the futuristic city grows louder, immersing the viewer in a world of tension and anticipation, where danger lurks in the glowing depths of the rain-drenched streets."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      }
    },
    "provider": "hunyuan",
    "provider_name": "Hunyuan"
  },
  {
    "id": "kling-v2.1-master-i2v",
    "fixedParameters": { resolution: "1080p" },
    "name": "Kling v2.1 Master I2V",
    "endpoint": "kling-v2.1-master-i2v",
    "family": "kling-v2.1",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "Animates wind effects, camera panning, and subtle movements like blinking or background motion, transforming the image into a compelling cinematic shot."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
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
    "id": "kling-v2.1-standard-i2v",
    "fixedParameters": { resolution: "720p" },
    "name": "Kling 2.1 Standard",
    "endpoint": "kling-v2.1-standard-i2v",
    "family": "kling-v2.1",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "A female explorer stands at the edge of a cliff overlooking a dense jungle, her hair and cape rustling gently in the wind as the dramatic sunset casts warm, golden hues across the sky and landscape, capturing a moment of awe and adventure."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
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
    "id": "kling-v2.1-pro-i2v",
    "fixedParameters": { resolution: "1080p" },
    "name": "Kling 2.1 Pro",
    "endpoint": "kling-v2.1-pro-i2v",
    "family": "kling-v2.1",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "A cyberpunk woman with neon tattoos stands in a rainy alley as glowing signs reflect vividly in puddles around her. Her coat flutters slightly in the breeze, and she makes subtle head movements, capturing the moody, futuristic atmosphere without any scene changes."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
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
    "id": "wan2.2-image-to-video",
    "name": "Wan2.2 Image To Video",
    "endpoint": "wan2.2-image-to-video",
    "family": "wan2.2",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "A close-up video of a young woman smiling gently in the rain, with raindrops glistening on her face and eyelashes. The camera focuses on the delicate details of her expression and the shimmering water droplets, while soft light softly reflects off her skin, emphasizing the rainy atmosphere."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "480p"
      },
      "quality": {
        "type": "string",
        "title": "Quality",
        "name": "quality",
        "description": "The quality of the generated video.",
        "enum": [
          "medium",
          "high"
        ],
        "default": "medium"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds.",
        "default": 5,
        "minValue": 5,
        "maxValue": 8,
        "step": 3
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "runway-act-two-i2v",
    "name": "Runway Act-Two",
    "endpoint": "runway-act-two-i2v",
    "family": "runway",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9"
        ],
        "default": "16:9"
      }
    },
    "provider": "runway",
    "provider_name": "Runway"
  },
  {
    "id": "pixverse-v4.5-i2v",
    "name": "Pixverse v4.5 I2V",
    "endpoint": "pixverse-v4.5-i2v",
    "family": "pixverse-v4.5",
    "imageField": "images_list",
    "lastImageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "commonParameterRules": PIXVERSE_45_DURATION_RULES,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "A cat dressed in a sharp business suit stands confidently on a TED Talk stage, delivering an engaging lecture on quantum physics. The audience is filled with attentive dogs wearing glasses, reacting thoughtfully to the presentation. The video features dramatic camera zooms that highlight the cat speaker’s expressions and the intrigued faces of the canine audience, maintaining the setting and characters without altering the scene."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
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
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds. 8s not supported for 1080p resolution.",
        "enum": [
          5,
          8
        ],
        "default": 5
      }
    },
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "vidu-v2.0-i2v",
    "name": "Vidu v2.0 I2V",
    "endpoint": "vidu-v2.0-i2v",
    "commonParameterRules": VIDU_2_FORMAT_RULES,
    "family": "vidu-v2",
    "imageField": "images_list",
    "lastImageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "A baby dragon wearing a tiny cape attempts to fly, wobbling uncertainly in the air with playful flaps of its wings, set against a bright and cheerful background. Light, upbeat music plays throughout, capturing the dragon's joyful effort. The video ends with the baby dragon gently crashing in a cute and harmless tumble, smiling and unfazed."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video. 16:9 for 360p/720p, 1:1 for 1080p are supported.",
        "enum": [
          "16:9",
          "1:1"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "360p",
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds.",
        "enum": [
          4
        ],
        "default": 4
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q1-reference",
    "name": "Vidu Q1 Reference",
    "endpoint": "vidu-q1-reference",
    "family": "vidu-q1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 7,
    "inputs": {
      "images_list": VIDU_REFERENCE_INPUT,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired video content.",
        "examples": [
          "Animate the character walking through the foggy forest at dawn, swinging the sword gracefully. Add cinematic camera pan and soft ambient lighting."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "1:1"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "minimax-hailuo-02-standard-i2v",
    "name": "Minimax Hailuo 02 Standard I2V",
    "endpoint": "minimax-hailuo-02-standard-i2v",
    "family": "minimax-2",
    "imageField": "image_url",
    "lastImageField": "end_image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "Animate her looking out at the horizon as gentle waves crash, with her hair moving in the wind. Light, smooth motion, perfect for social clips."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          6,
          10
        ],
        "default": 6
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "512P",
          "768P"
        ],
        "default": "512P"
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "minimax-hailuo-02-pro-i2v",
    "name": "Minimax Hailuo 02 Pro I2V",
    "endpoint": "minimax-hailuo-02-pro-i2v",
    "family": "minimax-2",
    "imageField": "image_url",
    "lastImageField": "end_image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "Transform this still image into a dramatic cinematic sequence: the scholar walks slowly through an ancient library where shelves tower endlessly into the shadows. The lantern’s flame flickers, casting moving patterns across scrolls and statues. Dust motes dance in golden light as the camera glides smoothly behind him, then pans upward to reveal an infinite expanse of glowing constellations painted across the ceiling that begin to shimmer and move as if alive."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          6
        ],
        "default": 6
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "1080P"
        ],
        "default": "1080P"
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "video-effects",
    "name": "Video Effects",
    "endpoint": "video-effects",
    "family": "effects",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "name": {
        "type": "string",
        "title": "Effect Name",
        "name": "name",
        "description": "The type of effect to apply to the video.",
        "enum": [
          "Balloon Flyaway",
          "Blow Kiss",
          "Body Shake",
          "Break Glass",
          "Carry Me",
          "Cartoon Doll",
          "Cheek Kiss",
          "Child Memory",
          "Couple Arrival",
          "Fairy Me",
          "Fashion Stride",
          "Fisherman",
          "Flower Receive",
          "Flying",
          "French Kiss",
          "Gender Swap",
          "Golden Epoch",
          "Hair Swap",
          "Hugging",
          "Jiggle Up",
          "Kissing Pro",
          "Live Memory",
          "Love Drop",
          "Melt",
          "Minecraft",
          "Muscling",
          "Nap Me 360p",
          "Paperman",
          "Pilot",
          "Pinch",
          "Pixel Me",
          "Romantic Lift",
          "Sexy Me",
          "Slice Therapy",
          "Soul Depart",
          "Split Stance Human",
          "Squid Game",
          "Toy Me",
          "Walk Forward",
          "Zoom In Fast",
          "Zoom Out"
        ],
        "default": "Balloon Flyaway"
      }
    },
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "seedance-lite-i2v",
    "name": "Seedance Lite I2V",
    "endpoint": "seedance-lite-i2v",
    "family": "bytedance",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "A lively dog is running swiftly across a sunlit park, with green trees softly blurred in the background to emphasize quick motion, capturing the energetic and joyful movement during the day."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "480p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 3,
        "maxValue": 12,
        "step": 1
      },
      "camera_fixed": {
        "type": "boolean",
        "title": "Camera Fixed",
        "name": "camera_fixed",
        "description": "Whether to fix the camera position",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-pro-i2v",
    "name": "Seedance Pro I2V",
    "endpoint": "seedance-pro-i2v",
    "family": "bytedance",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "A slow cinematic pan following a knight riding through a dense, foggy forest at dawn, with dramatic lighting casting long shadows and soft rays filtering through the misty trees, emphasizing the mysterious and atmospheric mood."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "480p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 3,
        "maxValue": 12,
        "step": 1
      },
      "camera_fixed": {
        "type": "boolean",
        "title": "Camera Fixed",
        "name": "camera_fixed",
        "description": "Whether to fix the camera position",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "pixverse-v5-i2v",
    "name": "Pixverse v5 I2V",
    "endpoint": "pixverse-v5-i2v",
    "family": "pixverse-v5",
    "imageField": "images_list",
    "lastImageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "Animate the glowing stag slowly walking forward, fireflies drifting in the air, soft mist rolling across the clearing, camera gently circling around for a magical cinematic motion."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 5,
        "maxValue": 8,
        "step": 3
      }
    },
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "seedance-lite-reference-video",
    "name": "Seedance 1.0 Lite Reference",
    "endpoint": "seedance-lite-reference-to-video",
    "family": "bytedance",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 4,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "The businessman walks towards the sports car on the rooftop, places his hand on the hood, and gazes at the glowing skyline as the camera circles around dramatically, capturing the neon-lit atmosphere in ultra-realism."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "480p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 3,
        "maxValue": 12,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "wan2.1-reference-video",
    "name": "Wan2.1 Reference Video",
    "endpoint": "wan2.1-reference-video",
    "family": "wan2.1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 5,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "The motorcycle driving through the neon tunnel, reflections glowing on its body, dynamic tracking shot, cinematic product ad style."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "480p"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "kling-v2.5-turbo-pro-i2v",
    "name": "Kling v2.5 Turbo Pro I2V",
    "endpoint": "kling-v2.5-turbo-pro-i2v",
    "family": "kling-v2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "aspectRatioMode": "inherited",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "Animate subtle cloak movement, glowing energy pulsing from the staff, storm clouds rolling above, camera orbiting slightly to add depth and atmosphere."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
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
    "id": "wan2.5-image-to-video",
    "name": "Wan2.5 Image To Video",
    "endpoint": "wan2.5-image-to-video",
    "family": "wan2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "aspectRatioMode": "inherited",
    "inputs": {
      "audio_url": WAN_AUDIO_INPUT,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "Animate the scene: camera slowly dollies forward toward the robot, neon city lights begin to flicker, soft reflections shift across the dome glass, twilight deepens into night with subtle ambient glow. The robot raises its head and speaks in a clear futuristic voice: ‘WAN 2.5 is now available on the MuAPI app.’"
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "480p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.5-image-to-video-fast",
    "name": "Wan2.5 Image To Video Fast",
    "endpoint": "wan2.5-image-to-video-fast",
    "family": "wan2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "aspectRatioMode": "inherited",
    "inputs": {
      "audio_url": WAN_AUDIO_INPUT,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "The camera slowly pulls back from the portrait, revealing the rooftop garden swaying in the breeze, clouds drifting across the orange-pink sky. The city lights begin to flicker on in the distance as the sun sets. She gazes at the horizon and softly says: “Every ending feels like the start of something new.” Natural ambient sounds of wind and faint city life in the background."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "openai-sora-2-image-to-video",
    "name": "Sora 2",
    "endpoint": "openai-sora-2-image-to-video",
    "family": "sora",
    "imageField": "images_list",
    "maxImages": 1,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "Camera pans along the platform as the bullet train doors open, passengers step forward with rolling suitcases. Footsteps and soft chatter fill the air. A female announcer says: ‘Train number 2245 to Tokyo is now departing from platform 3.’ Wheels screech lightly as the train starts moving."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          4,
          8,
          12,
          16,
          20
        ],
        "default": 8
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "ovi-image-to-video",
    "name": "Ovi Image To Video",
    "endpoint": "ovi-image-to-video",
    "family": "ovi",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "Camera: static medium shot. The scientist speaks: <S>We have discovered life beyond Earth.<E> <AUDCAP>Soft electronic hum, distant Beep of instruments<ENDAUDCAP>"
        ]
      }
    },
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "openai-sora-2-pro-image-to-video",
    "name": "Sora 2 Pro",
    "endpoint": "openai-sora-2-pro-image-to-video",
    "family": "sora",
    "imageField": "images_list",
    "maxImages": 1,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "Scene: Submerged coral clearing, soft light filtering from above.\nCharacters: Tiny jellyfish with monocle and top hat, hosting tea for small seahorses.\nAction: Jellyfish floats and pours tea → bubbles rise slowly; seahorses sip → tiny octopus clumsily serves cake.\nCamera: Wide underwater → tracking floating jellyfish → macro on bubbles.\nLook & Lighting: Aqua-blue palette; subtle caustics on sand; shimmering reflections on water surfaces.\nMotion/Physics: Water currents gently sway characters; bubbles rise naturally; floating cakes wobble lightly.\nAudio: Bubbling water + faint harp melody; line: “Tea, my dear friends, before it drifts away.”"
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds.",
        "enum": [
          4,
          8,
          12,
          16,
          20
        ],
        "default": 8
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "leonardoai-motion-2.0",
    "name": "Motion 2.0",
    "endpoint": "leonardoai-motion-2.0",
    "family": "leonardoai",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "A diver swimming through a coral reef, colorful fish darting around, sunlight filtering through the water, slow-motion effect."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      }
    },
    "provider": "leonardoai",
    "provider_name": "Leonardo AI"
  },
  {
    "id": "veo3.1-image-to-video",
    "name": "Veo 3.1",
    "endpoint": "veo3.1-image-to-video",
    "family": "veo3.1",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "Scene: Giant floating library orbiting in zero-gravity space.\nCharacters: Astronaut-librarian flipping glowing pages suspended midair.\nAction: Camera rotates 360° around drifting books → zooms through a floating page into a nebula outside window.\nCamera: Orbit + push-through transition.\nLighting: Cool cosmic ambient with warm page glows; rim lighting on suit.\nMotion: Slow rotational drift; pages react with fluid inertia.\nAudio: Ethereal synth pads + book rustle in vacuum hush.\nMood: Awe, wonder, intellectual calm.\nLine: “Wow veo3.1 launched in Muapiapp. Let's go!”"
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          8
        ],
        "default": 8
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "720p",
          "1080p",
          "4k"
        ],
        "default": "1080p"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "veo3.1-fast-image-to-video",
    "name": "Veo 3.1 Fast",
    "endpoint": "veo3.1-fast-image-to-video",
    "family": "veo3.1",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "Scene: Lantern festival by the river at night.\nCharacters: Young boy with his grandmother.\nAction: Camera starts behind them → tracks one lantern downstream → lift to sky full of lights.\nLighting: Warm candlelight vs cool night reflections.\nAudio: Gentle music, water flow.\nDialogue:\nGrandmother: “Every lantern carries a wish.”\nBoy: “Then mine’s for you to stay forever.”\nGrandmother (smiling): “I’ll be right there, glowing among them.”"
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          8
        ],
        "default": 8
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "720p",
          "1080p",
          "4k"
        ],
        "default": "1080p"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "veo3.1-lite-image-to-video",
    "name": "Veo 3.1 Lite",
    "endpoint": "veo3.1-lite-image-to-video",
    "family": "veo3.1",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          8
        ],
        "default": 8
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "720p",
          "1080p",
          "4k"
        ],
        "default": "1080p"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "veo3.1-reference-to-video",
    "name": "Veo 3.1 Reference",
    "endpoint": "veo3.1-reference-to-video",
    "family": "veo3.1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 3,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "A small robotic fox exploring a sun-drenched enchanted forest. The fox hops across a sparkling stream, pauses on mossy rocks, and looks curiously at glowing fireflies. Cinematic camera pans follow the fox from behind, then orbit slightly to reveal sunbeams filtering through the canopy. Warm dappled lighting with volumetric light rays and soft particle effects. Gentle ambient forest sounds and faint magical chimes. Dialogue: ‘Everything shines differently under the forest light…’"
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "720p",
          "1080p",
          "4k"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          8
        ],
        "default": 8
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate audio.",
        "default": true
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "seedance-pro-i2v-fast",
    "name": "Seedance Pro I2V Fast",
    "endpoint": "seedance-pro-i2v-fast",
    "family": "bytedance",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "The cyberpunk samurai turns slowly toward the camera, raindrops gliding off his glowing armor, neon lights reflecting on wet metal, camera pans around him in a slow 360°, subtle lightning flashes illuminate the skyline."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "480p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 2,
        "maxValue": 12,
        "step": 1
      },
      "camera_fixed": {
        "type": "boolean",
        "title": "Camera Fixed",
        "name": "camera_fixed",
        "description": "Whether to fix the camera position",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "ltx-2-pro-image-to-video",
    "name": "LTX 2 Pro",
    "endpoint": "ltx-2-pro-image-to-video",
    "family": "ltx",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "An ancient stone portal deep in an enchanted forest, glowing runes, beams of sunlight breaking through the canopy, cinematic tracking shot, warm colour grading."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          6,
          8,
          10
        ],
        "default": 6
      },
      "generate_audio": LTX_GENERATE_AUDIO_INPUT
    },
    "provider": "lightricks",
    "provider_name": "Lightricks"
  },
  {
    "id": "ltx-2-fast-image-to-video",
    "name": "LTX 2 Fast",
    "endpoint": "ltx-2-fast-image-to-video",
    "family": "ltx",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "Image of two explorers standing atop a dune. Now the viewpoint shifts: camera slowly dollies backward while sun rises behind them, sand drifts around feet, warm golden light, soft wind in audio."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
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
        "default": 6
      },
      "generate_audio": LTX_GENERATE_AUDIO_INPUT
    },
    "provider": "lightricks",
    "provider_name": "Lightricks"
  },
  {
    "id": "vidu-q2-reference",
    "name": "Vidu Q2 Reference",
    "endpoint": "vidu-q2-reference",
    "family": "vidu-q2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 7,
    "inputs": {
      "images_list": VIDU_REFERENCE_INPUT,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "The female explorer walks slowly across the alien terrain, crystals glimmering around her. The camera glides beside her as light from twin suns scatters across her reflective suit. Wind stirs the mist as she looks up toward the horizon, where a colossal planet looms above — evoking awe and wonder."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 2,
        "maxValue": 8,
        "step": 1
      },
      "movement_amplitude": {
        "type": "string",
        "title": "Movement Amplitude",
        "name": "movement_amplitude",
        "description": "The movement amplitude of objects in the frame.",
        "enum": [
          "auto",
          "small",
          "medium",
          "large"
        ],
        "default": "auto"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q2-turbo-start-end-video",
    "name": "Vidu Q2 Turbo Start End",
    "endpoint": "vidu-q2-turbo-start-end-video",
    "family": "vidu-q2",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "The camera begins behind the traveler standing amid the misty ancient ruins. Leaves swirl in the air as golden light flickers. A surge of energy surrounds the traveler — ruins start to dissolve into bright particles. The environment morphs into a neon-lit futuristic city as the traveler continues walking forward, entering the new world."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 2,
        "maxValue": 8,
        "step": 1
      },
      "bgm": {
        "type": "boolean",
        "title": "Bgm",
        "name": "bgm",
        "description": "The background music for generating the output.",
        "default": true
      },
      "movement_amplitude": {
        "type": "string",
        "title": "Movement Amplitude",
        "name": "movement_amplitude",
        "description": "The movement amplitude of objects in the frame.",
        "enum": [
          "auto",
          "small",
          "medium",
          "large"
        ],
        "default": "auto"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q2-pro-start-end-video",
    "name": "Vidu Q2 Pro Start End",
    "endpoint": "vidu-q2-pro-start-end-video",
    "family": "vidu-q2",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "Camera begins behind the cabin as snowflakes drift through pale dawn light. Warm sunlight pierces the mist — the snow slowly melts, trees turn green, and the ground blossoms with flowers. The air brightens into a spring sunrise as birds take flight over the cabin, symbolizing rebirth and renewal."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "540p",
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 1,
        "maxValue": 8,
        "step": 1
      },
      "bgm": {
        "type": "boolean",
        "title": "Bgm",
        "name": "bgm",
        "description": "The background music for generating the output.",
        "default": true
      },
      "movement_amplitude": {
        "type": "string",
        "title": "Movement Amplitude",
        "name": "movement_amplitude",
        "description": "The movement amplitude of objects in the frame.",
        "enum": [
          "auto",
          "small",
          "medium",
          "large"
        ],
        "default": "auto"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "minimax-hailuo-2.3-pro-i2v",
    "name": "Minimax Hailuo 2.3 Pro I2V",
    "endpoint": "minimax-hailuo-2.3-pro-i2v",
    "family": "minimax-2.3",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "fixedParameters": { "duration": 6 },
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "The camera slowly moves around the woman as the wind gently sways the tall grass. Her hair flows with the breeze, sunlight flickering through passing clouds. The atmosphere feels calm, nostalgic, and cinematic."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "1080p"
        ],
        "default": "1080p"
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "minimax-hailuo-2.3-standard-i2v",
    "name": "Minimax Hailuo 2.3 Standard I2V",
    "endpoint": "minimax-hailuo-2.3-standard-i2v",
    "family": "minimax-2.3",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "fixedParameters": { "resolution": "768p" },
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "Camera slowly moves forward over the lake surface as light wind ripples the water. The clouds drift across the mountains, and sunlight flickers on the waves, creating a peaceful cinematic mood."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          6,
          10
        ],
        "default": 6
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "minimax-hailuo-2.3-fast",
    "name": "MiniMax Hailuo 2.3 Fast",
    "endpoint": "minimax-hailuo-2.3-fast",
    "family": "minimax-2.3",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "fixedParameters": { "resolution": "768p" },
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "The camera gently moves around the woman as snowflakes drift through the air. Her expression shifts slightly as the wind brushes her hair. The background lights shimmer softly, creating a calm cinematic mood."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          6,
          10
        ],
        "default": 6
      },
      "go_fast": {
        "type": "boolean",
        "title": "Go Fast",
        "name": "go_fast",
        "description": "Prioritize faster video generation speed with a moderate trade-off in visual quality.",
        "default": true
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "kling-v2.5-turbo-std-i2v",
    "name": "Kling 2.5 Turbo Standard",
    "endpoint": "kling-v2.5-turbo-std-i2v",
    "family": "kling-v2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "aspectRatioMode": "inherited",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "Animate subtle cloak movement, glowing energy pulsing from the staff, storm clouds rolling above, camera orbiting slightly to add depth and atmosphere."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
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
    "id": "grok-imagine-image-to-video",
    "name": "Grok Imagine Image To Video",
    "endpoint": "grok-imagine-image-to-video",
    "family": "grok",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "images_list": GROK_IMAGE_INPUT,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "Camera glides through vines toward temple entrance, mist disperses as sunlight pierces canopy, birds fly off, subtle dust motes in the air, adventure-style cinematic score."
        ]
      },
      "aspect_ratio": { ...GROK_ASPECT_RATIO_INPUT, descriptionKey: "singleImageFormat" },
      "mode": { ...GROK_STYLE_INPUT, enum: ["normal", "fun"] },
      "resolution": GROK_RESOLUTION_INPUT,
      "duration": GROK_DURATION_INPUT
    },
    "provider": "grok",
    "provider_name": "xAI"
  },
  {
    "id": "kling-o1-image-to-video",
    "name": "Kling O1 Pro",
    "endpoint": "kling-o1-image-to-video",
    "family": "kling-o1",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "A gentle dolly forward toward the cabin as morning light intensifies, mist lifts in streaks, subtle water ripples, birds take flight, warm golden hour soundscape."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          5,
          10
        ],
        "default": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-o1-reference-to-video",
    "name": "Kling O1 Pro Reference",
    "endpoint": "kling-o1-reference-to-video",
    "family": "kling-o1",
    "imageField": "images_list",
    "videoField": "video_url",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 7,
    "required": ["prompt", "images_list"],
    "inputs": {
      "images_list": {
        type: "array", items: { type: "string" }, title: "Reference images",
        name: "images_list", maxItems: 7,
      },
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "Cinematic orbit camera move around the pilot in a futuristic hangar, holographic lights flickering, armor reflections shifting, soft mechanical ambience."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 3,
        "maxValue": 10,
        "step": 1
      },
      "keep_original_sound": KLING_KEEP_SOUND_INPUT
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v2.6-pro-i2v",
    "name": "Kling v2.6 Pro I2V",
    "endpoint": "kling-v2.6-pro-i2v",
    "family": "kling-v2.6",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "aspectRatioMode": "inherited",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "Slow cinematic orbit around the floating obsidian throne, holographic runes pulsing gently, drifting quartz shards rotating with soft parallax, molten crystal canyon glowing brighter with movement, and subtle particle storms rising toward the cosmic vortex; maintain original lighting, style, and atmosphere."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds.",
        "enum": [
          5,
          10
        ],
        "default": 5
      },
      "sound": KLING_SOUND_INPUT
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "pixverse-v5.5-i2v",
    "name": "Pixverse v5.5 I2V",
    "endpoint": "pixverse-v5.5-i2v",
    "family": "pixverse-v5.5",
    "imageField": "images_list",
    "lastImageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "commonParameterRules": PIXVERSE_55_DURATION_RULES,
    "inputs": {
      ...PIXVERSE_55_SETTINGS,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "Slow upward camera glide along the staircase, lanterns gently swaying, stardust drifting in soft spirals, nebula clouds subtly shifting, and the cosmic gateway pulsing with rhythmic light; maintain original colors, composition, and celestial atmosphere with smooth cinematic motion."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
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
        "default": "360p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds.",
        "enum": [
          5,
          8,
          10
        ],
        "default": 5
      }
    },
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "wan2.2-spicy-image-to-video",
    "name": "Wan2.2 Spicy Image To Video",
    "endpoint": "wan2.2-spicy-image-to-video",
    "family": "wan2.2",
    "imageField": "image_url",
    "hasPrompt": true,
    "aspectRatioMode": "inherited",
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "Animate the scene with intense fiery motion—lava cracking and flowing down the phoenix wings, embers drifting upward, volcanic smoke swirling dramatically, floating stones shifting with parallax depth; camera performs a slow power-shot push-in toward the phoenix statue while preserving the glowing, high-contrast cinematic atmosphere."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "480p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          5,
          8
        ],
        "default": 5
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.6-image-to-video",
    "name": "Wan2.6 Image To Video",
    "endpoint": "wan2.6-image-to-video",
    "family": "wan2.6",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "aspectRatioMode": "inherited",
    "inputs": {
      "audio_url": WAN_AUDIO_INPUT,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "Add slow cinematic camera movement circling the floating lighthouse, orbiting symbol rings rotating gently with parallax depth, ocean waves shimmering and moving naturally, clouds drifting and lightning flashing subtly in the distance, and the lighthouse beam pulsing softly while preserving the original lighting and dramatic mood."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          5,
          10,
          15
        ],
        "default": 5
      },
      "shot_type": {
        "type": "string",
        "title": "Shot Type",
        "name": "shot_type",
        "description": "The type of shot to generate.",
        "enum": [
          "single",
          "multi"
        ],
        "default": "single"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "kling-o1-standard-image-to-video",
    "name": "Kling O1 Standard",
    "endpoint": "kling-o1-standard-image-to-video",
    "family": "kling-o1",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "aspectRatioMode": "inherited",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "Add gentle camera drift forward with slight parallax depth, waterfalls flowing softly, clouds slowly moving beneath the island, birds gliding naturally through the scene, and sunlight shifting subtly while maintaining the calm cinematic mood and original lighting."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          5,
          10
        ],
        "default": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-o1-standard-reference-to-video",
    "name": "Kling O1 Standard Reference",
    "endpoint": "kling-o1-standard-reference-to-video",
    "family": "kling-o1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 7,
    "required": ["prompt", "images_list"],
    "inputs": {
      "images_list": {
        type: "array", items: { type: "string" }, title: "Reference images",
        name: "images_list", minItems: 1, maxItems: 7,
      },
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the video",
        "examples": [
          "Blend the reference scenes into a single cinematic shot with gentle forward camera movement, soft parallax depth between the bridge and forest valley, fog drifting slowly above the river, leaves swaying lightly in the breeze, and sunlight shifting subtly while maintaining a calm, realistic atmosphere."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          5,
          10
        ],
        "default": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "seedance-v1.5-pro-i2v",
    "name": "Seedance v1.5 Pro I2V",
    "endpoint": "seedance-v1.5-pro-i2v",
    "family": "seedance-v1.5-pro",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "aspectRatioMode": "inherited",
    "parameterNotice": "Aspect ratio is inherited from the input image.",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "Add a slow cinematic orbit around the floating archive, gentle parallax between cloud layers and spires, flowing data streams pulsing softly, fog drifting naturally, and sky colors deepening slightly while preserving the original lighting, scale, and cinematic mood."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 4,
        "maxValue": 12,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate audio",
        "default": true
      },
      "camera_fixed": {
        "type": "boolean",
        "title": "Camera Fixed",
        "name": "camera_fixed",
        "description": "Whether to fix the camera position",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-v1.5-pro-i2v-fast",
    "name": "Seedance v1.5 Pro I2V Fast",
    "endpoint": "seedance-v1.5-pro-i2v-fast",
    "family": "seedance-v1.5-pro",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "aspectRatioMode": "inherited",
    "parameterNotice": "Aspect ratio is inherited from the input image.",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "Add gentle forward camera movement toward the floating observatory, subtle parallax between clouds and structure, soft cloud drift below, interior window lights glowing steadily, and sunlight rays shifting slightly while keeping motion smooth, minimal, and fast."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 4,
        "maxValue": 12,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio",
        "description": "Whether to generate audio",
        "default": true
      },
      "camera_fixed": {
        "type": "boolean",
        "title": "Camera Fixed",
        "name": "camera_fixed",
        "description": "Whether to fix the camera position",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "ltx-2-19b-image-to-video",
    "name": "LTX 2 19B",
    "endpoint": "ltx-2-19b-image-to-video",
    "family": "ltx",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "Animate the scene so the camera slowly pushes toward the billboard, the text characters on the woman’s face subtly scrolling and re-forming, rain falling continuously, reflections on the wet road shifting as car headlights flicker, pedestrians making small natural movements while the city lights pulse softly; maintain realistic motion, urban mood, and cinematic pacing."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The resolution of the generated video.",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "default": 5,
        "minValue": 5,
        "maxValue": 20,
        "step": 1
      }
    },
    "provider": "lightricks",
    "provider_name": "Lightricks"
  },
  {
    "id": "kling-v3.0-omni-standard-image-to-video",
    "fixedParameters": { resolution: "720p" },
    "name": "Kling v3.0 Omni Standard Image To Video",
    "endpoint": "kling-v3.0-omni-standard-image-to-video",
    "family": "kling-v3.0-omni",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 4,
    "inputs": {
      "images_list": KLING_OMNI_REFERENCE_INPUT,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "During an intense basketball game, gravity suddenly breaks apart. Players begin running sideways across the arena walls while the court folds upward into impossible angles. The basketball floats briefly before being slammed through the hoop as the camera rotates dynamically with the shifting gravity."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "9:16",
          "16:9",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "Duration of the generated video in seconds.",
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
    "id": "kling-v3.0-omni-pro-image-to-video",
    "fixedParameters": { resolution: "1080p" },
    "name": "Kling v3.0 Omni Pro Image To Video",
    "endpoint": "kling-v3.0-omni-pro-image-to-video",
    "family": "kling-v3.0-omni",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 4,
    "inputs": {
      "images_list": KLING_OMNI_REFERENCE_INPUT,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "A high-speed train races forward nonstop while the environment transforms every few seconds—from snowy mountains to neon cyberpunk city to volcanic wasteland. Sparks fly from the tracks as the camera stays tightly locked alongside the speeding train during each violent world transition."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "9:16",
          "16:9",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "Duration of the generated video in seconds.",
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
    "id": "kling-v3.0-omni-4k-image-to-video",
    "fixedParameters": { resolution: "4K" },
    "name": "Kling v3.0 Omni 4K Image To Video",
    "endpoint": "kling-v3.0-omni-4k-image-to-video",
    "family": "kling-v3.0-omni",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 4,
    "inputs": {
      "images_list": KLING_OMNI_REFERENCE_INPUT,
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "A cat in @image1 wakes up and walks towards the camera in slow motion."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "9:16",
          "16:9",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "Duration of the generated video in seconds.",
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
        "default": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3.0-pro-image-to-video",
    "fixedParameters": { resolution: "1080p" },
    "name": "Kling v3.0 Pro Image To Video",
    "endpoint": "kling-v3.0-pro-image-to-video",
    "family": "kling-v3.0",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "aspectRatioMode": "inherited",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "The camera begins on the railway station platform beside a stationary train as morning sunlight filters through the roof. Passengers make small natural movements while the train doors are open. The camera moves forward and enters the train, transitioning smoothly into a window-seat point of view. As the doors close, the train starts moving. The view shifts fully to the window, showing the city passing by outside with gentle motion blur, buildings and trees sliding past. Sunlight reflects on the glass, faint interior reflections appear, and the ride feels calm and realistic with smooth, cinematic motion."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
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
    "id": "kling-v3.0-standard-image-to-video",
    "fixedParameters": { resolution: "720p" },
    "name": "Kling v3.0 Standard Image To Video",
    "endpoint": "kling-v3.0-standard-image-to-video",
    "family": "kling-v3.0",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "aspectRatioMode": "inherited",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "The hamster begins on the left side of the tabletop and quickly runs across the surface toward the right. Its tiny legs move rapidly, body bouncing slightly with natural motion. As it runs, the sunflower seeds blur slightly beneath it. The hamster slows near the bowl, stops, and stands upright to grab a seed. The camera remains fixed, depth of field stays shallow, and lighting remains soft and consistent for a realistic, cute result."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
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
    "id": "seedance-v2.0-i2v",
    "name": "Seedance 2.0 I2V",
    "endpoint": "seedance-v2.0-i2v",
    "family": "seedance-v2.0",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 5,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to guide video generation from the image."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output video.",
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "description": "The duration of the generated video in seconds",
        "enum": [
          5,
          10,
          15
        ],
        "default": 5
      },
      "quality": {
        "type": "string",
        "title": "Quality",
        "name": "quality",
        "description": "Quality of the generated video.",
        "enum": [
          "high",
          "basic"
        ],
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  }
,
  {
    "id": "seedance-2-i2v",
    "name": "Seedance 2 I2V",
    "endpoint": "seedance-v2.0-i2v",
    "family": "sd-v2.0",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The lightbulb suddenly rockets across the room like a missile, smashing through curtains while water spins violently inside. The fish darts through swirling currents as the bulb ricochets off walls and finally bursts into floating droplets."
        ],
        "type": "string",
        "title": "Prompt",
        "description": "Text prompt describing the video animation. Reference uploaded images using @image1, @image2, … @imageN (1-based, matching images_list order). To use a fictional character, reference it with @character:<id> (request_id from a completed Seedance 2 Character generation) — characters are automatically appended to images_list. Multiple characters are supported. Example: '@character:ab539e5f walks through a garden' or 'The cat in @image1 meets @character:ab539e5f'."
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-i2v.jpg"
        ],
        "description": "Upload up to 9 image URLs. Reference them in the prompt using @image1, @image2, … @image9. The aspect ratio of the reference image takes precedence over the aspect_ratio parameter.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 9
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
    "id": "ltx-2.3-image-to-video",
    "name": "LTX 2.3",
    "endpoint": "ltx-2.3-image-to-video",
    "family": "ltx2.3",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The snail accelerates unexpectedly, smashing through trees while the miniature city erupts into chaos. Flying cars zip around the shell trying to stabilize the city as neon signs flicker and sparks fly from collapsing towers."
        ],
        "description": "Text prompt describing the video.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/ltx-2.3-image-to-video.png"
        ],
        "description": "URL of the input image.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
    "id": "seedance-2-new-first-last",
    "name": "Seedance 2 New First Last",
    "endpoint": "seedance-2.0-new-first-last",
    "family": "sd-v2.0",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description guiding the video content between frames.",
        "examples": [
          "A smooth cinematic transition between two scenes."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 image = first frame anchor; 2 images = first and last frame.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Frame Images",
        "name": "images_list",
        "maxItems": 2
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
        "description": "high = standard model; basic = fast model.",
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
    "id": "seedance-2-omni-reference",
    "name": "Seedance 2 Omni Reference",
    "endpoint": "seedance-2.0-omni-reference",
    "family": "sd-v2.0",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "@image1 is the main character reference. A person walking on the beach at sunset, cinematic lighting"
        ],
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video description. Use @image1…@image9 to reference images, @video1…@video3 for videos, @audio1…@audio3 for audio. To use a character sheet, reference it with @character:<request_id> (from a completed Seedance 2 Character generation). To use a trained Omni Reference character, reference it with @omni-character:<character_id> where character_id is the value returned by Omni Reference Train Character (e.g. char_1775422630065_4vbana). Both methods can be combined in the same prompt. Multiple characters are supported. Example: '@omni-character:char_1775422630065_4vbana walking through a neon-lit city at night'."
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-omni-reference.png"
        ],
        "description": "Up to 9 reference image URLs (JPEG/PNG/WebP). Each Nth image corresponds to @imageN in the prompt.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 9
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
        "description": "Output video aspect ratio."
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Quality",
        "name": "quality",
        "type": "string",
        "default": "high",
        "description": "Generation quality. 'high' uses the standard model ($0.30/sec output + $0.09/sec per input video second). 'basic' uses the fast model (~2x speed, $0.21/sec output + $0.063/sec per input video second). Video reference inputs incur an additional 30% surcharge based on their combined duration."
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
    "id": "pixverse-v6-i2v",
    "name": "Pixverse v6 I2V",
    "endpoint": "pixverse-v6-i2v",
    "family": "pixverse-v6",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired video motion and content.",
        "examples": [
          "Cracks spread across the statue as it suddenly comes to life. Stone pieces fall off while glowing energy emerges from inside. The statue pulls itself free from the sand and takes a heavy step forward, shaking the ground as dust rises into the air."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/pixverse-v6-i2v.mp4"
        ],
        "description": "Upload or provide the input image to animate.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URL",
        "name": "images_list",
        "maxItems": 1
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
      "thinking_type": {
        "enum": [
          "auto",
          "enabled",
          "disabled"
        ],
        "type": "string",
        "title": "Prompt Optimization",
        "name": "thinking_type",
        "description": "Controls prompt enhancement. 'enabled' rewrites the prompt, 'disabled' uses it as-is, 'auto' lets the model decide.",
        "default": "auto"
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
    "id": "pixverse-v6-transition",
    "name": "PixVerse V6 Transition",
    "endpoint": "pixverse-v6-transition",
    "family": "pixverse-v6",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "endImageRequired": true,
    "hasPrompt": true,
    "promptRequired": true,
    "aspectRatioMode": "inherited",
    "parameterNotice": "Start and end frames are required. Aspect ratio is determined by the input frames.",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the transition or video content.",
        "examples": [
          "Water suddenly bursts through the walls and windows, flooding the room violently. Furniture lifts and begins floating as currents swirl. Fish appear and swim through the space while light rays ripple through the water. The camera drifts with the flow."
        ]
      },
      "image_url": {
        "type": "string",
        "title": "Starting Image",
        "name": "image_url",
        "description": "Upload starting image.",
        "field": "image",
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/pixverse-v6-transition.jpg"
        ]
      },
      "last_image": {
        "type": "string",
        "title": "Ending Image",
        "name": "last_image",
        "description": "Upload ending image.",
        "field": "image",
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/pixverse-v6-transition-1.jpg"
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
        "description": "Output video orientation.",
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
        "description": "Video output quality.",
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Total length of the video.",
        "default": 5,
        "minValue": 1,
        "maxValue": 15,
        "step": 1
      },
      "thinking_type": {
        "type": "boolean",
        "title": "Enhanced Thinking",
        "name": "thinking_type",
        "description": "Enable enhanced thinking for more complex transitions.",
        "default": false
      },
      "style": {
        "enum": [
          "anime",
          "3d_animation",
          "clay",
          "comic",
          "cyberpunk"
        ],
        "type": "string",
        "title": "Style",
        "name": "style",
        "description": "Visual style of the generation."
      },
      "negative_prompt": {
        "type": "string",
        "title": "Negative Prompt",
        "name": "negative_prompt",
        "description": "What to avoid in the generation."
      },
      "generate_audio_switch": {
        "type": "boolean",
        "title": "Generate Audio",
        "name": "generate_audio_switch",
        "description": "Whether to generate background audio for the video.",
        "default": false
      }
    },
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "wan2.7-image-to-video",
    "name": "Wan2.7",
    "endpoint": "wan2.7-image-to-video",
    "family": "wan2.7",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "aspectRatioMode": "inherited",
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [],
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description"
      },
      "image_url": {
        "examples": [],
        "type": "string",
        "title": "Image Url",
        "name": "image_url",
        "description": "First frame image",
        "field": "image"
      },
      "last_image": {
        "examples": [],
        "type": "string",
        "title": "Last Image",
        "name": "last_image",
        "description": "Last frame image (optional)",
        "field": "image"
      },
      "audio_url": {
        "examples": [],
        "type": "string",
        "title": "Audio URL",
        "name": "audio_url",
        "description": "Audio file to guide generation",
        "field": "audio"
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
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
    "id": "wan2.7-reference-to-video",
    "name": "Wan 2.7 Reference",
    "endpoint": "wan2.7-reference-to-video",
    "family": "wan2.7",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired motion and scene.",
        "examples": [
          "A person walking in the rain..."
        ]
      },
      "images_list": {
        "examples": [],
        "description": "Array of reference image URLs (jpg/png). Max 4 items.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 4
      },
      "videos_list": {
        "examples": [],
        "description": "Array of reference video URLs (mp4/mov). Max 4 items.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Videos",
        "name": "videos_list",
        "maxItems": 4
      },
      "image_url": {
        "examples": [],
        "type": "string",
        "title": "Image Url",
        "name": "image_url",
        "description": "URL to a single reference image.",
        "field": "image"
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
        "description": "Video duration in seconds (2-10).",
        "default": 5,
        "minValue": 2,
        "maxValue": 10
      },
      "negative_prompt": {
        "type": "string",
        "title": "Negative Prompt",
        "name": "negative_prompt",
        "description": "What not to generate",
        "examples": [
          "blurry, low quality, distorted"
        ]
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "seedance-2-i2v-480p",
    "name": "Seedance 2 I2V 480P",
    "endpoint": "seedance-2.0-i2v-480p",
    "family": "sd-v2.0",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The lightbulb suddenly rockets across the room like a missile, smashing through curtains while water spins violently inside. The fish darts through swirling currents as the bulb ricochets off walls and finally bursts into floating droplets."
        ],
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video animation. Reference uploaded images using @image1, @image2, … @imageN (1-based, matching images_list order). To use a fictional character, reference it with @character:<id> (request_id from a completed Seedance 2 Character generation) — characters are automatically appended to images_list. Multiple characters are supported."
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-i2v.jpg"
        ],
        "description": "Upload up to 9 image URLs. Reference them in the prompt using @image1, @image2, … @image9.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 9
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
    "id": "seedance-2-omni-reference-480p",
    "name": "Seedance 2 Omni Reference 480P",
    "endpoint": "seedance-2.0-omni-reference-480p",
    "family": "sd-v2.0",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "@image1 is the main character reference. A person walking on the beach at sunset, cinematic lighting"
        ],
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video description. Use @image1…@image9 to reference images, @video1…@video3 for videos, @audio1…@audio3 for audio. To use a fictional character, reference it with @character:<id> (request_id from a completed Seedance 2 Character generation) — characters are automatically appended to images_list. Multiple characters are supported."
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-omni-reference.png"
        ],
        "description": "Up to 9 reference image URLs (JPEG/PNG/WebP). Each Nth image corresponds to @imageN in the prompt.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 9
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
          "16:9",
          "9:16",
          "4:3",
          "3:4"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9",
        "description": "Output video aspect ratio."
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Quality",
        "name": "quality",
        "type": "string",
        "default": "basic",
        "description": "Generation quality. 'high' uses the standard model ($0.24/sec output + $0.072/sec per input video second). 'basic' uses the fast model ($0.18/sec output + $0.054/sec per input video second). Video reference inputs incur an additional 30% surcharge based on their combined duration."
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds (8–15).",
        "default": 8,
        "minValue": 8,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-image-to-video",
    "name": "Seedance 2",
    "endpoint": "seedance-2-image-to-video",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description guiding the video animation. Use @character:<id> to reference a completed Seedance 2 Character generation.",
        "examples": [
          "The person walks forward with a smile."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 image uses it as the start frame (first_last_frames mode). 2–9 images switches to omni_reference mode — reference them in your prompt with @image1, @image2, etc.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 9
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
    "id": "seedance-2-image-to-video-fast",
    "name": "Seedance 2 Image to Video Fast",
    "endpoint": "seedance-2-image-to-video-fast",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description guiding the video animation. Use @character:<id> to reference a completed Seedance 2 Character generation.",
        "examples": [
          "The person walks forward with a smile."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 image uses it as the start frame (first_last_frames mode). 2–9 images switches to omni_reference mode — reference them in your prompt with @image1, @image2, etc.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 9
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
    "id": "seedance-2-first-last-frame",
    "name": "Seedance 2 First Last Frame",
    "endpoint": "seedance-2-first-last-frame",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description guiding the transition between frames.",
        "examples": [
          "Two people having a street interview, the interviewer holds a microphone."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 image = first frame only; 2 images = first and last frame. Use 'adaptive' aspect ratio to match the reference image geometry.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Frame Images",
        "name": "images_list",
        "maxItems": 2
      },
      "aspect_ratio": {
        "enum": [
          "adaptive",
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
        "description": "Output video aspect ratio. 'adaptive' matches the reference image (recommended); concrete ratios may crop or pad.",
        "default": "adaptive"
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
    "id": "seedance-2-first-last-frame-fast",
    "name": "Seedance 2 First Last Frame Fast",
    "endpoint": "seedance-2-first-last-frame-fast",
    "family": "sd-2",
    "imageField": "images_list",
    "lastImageField": "images_list",
    "endImageRequired": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description guiding the transition between frames.",
        "examples": [
          "Two people having a street interview, the interviewer holds a microphone."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 image = first frame only; 2 images = first and last frame. Use 'adaptive' aspect ratio to match the reference image geometry.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Frame Images",
        "name": "images_list",
        "maxItems": 2
      },
      "aspect_ratio": {
        "enum": [
          "adaptive",
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
        "description": "Output video aspect ratio. 'adaptive' matches the reference image (recommended); concrete ratios may crop or pad.",
        "default": "adaptive"
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
    "id": "seedance-2-omni-reference-no-video",
    "name": "Seedance 2 Omni Reference No Video",
    "endpoint": "seedance-2-omni-reference-no-video",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video description. Use @image1…@image9 to reference images and @audio1…@audio3 for audio. To use a character sheet, reference it with @character:<request_id> (from a completed Seedance 2 Character generation). To use a trained Omni Reference character, reference it with @omni-character:<character_id> where character_id is the value returned by Omni Reference Train Character (e.g. char_1775422630065_4vbana). Both methods can be combined in the same prompt. Multiple characters are supported. Example: '@omni-character:char_1775422630065_4vbana walking through a neon-lit city at night'.",
        "examples": [
          "@image1 is the main character. The person walks along a city street at sunset, cinematic lighting."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "Up to 9 reference image URLs (JPEG/PNG/WebP). Each Nth image corresponds to @imageN in the prompt.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "minItems": 1,
        "maxItems": 9
      },
      "audio_files": {
        "examples": [],
        "description": "Up to 3 reference audio files (MP3/WAV, total max 15s). Each Nth audio corresponds to @audioN in the prompt.",
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
        "default": "16:9",
        "description": "Output video aspect ratio."
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
    "id": "seedance-2-omni-reference-no-video-fast",
    "name": "Seedance 2 Omni Reference No Video Fast",
    "endpoint": "seedance-2-omni-reference-no-video-fast",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video description. Use @image1…@image9 to reference images and @audio1…@audio3 for audio. To use a character sheet, reference it with @character:<request_id> (from a completed Seedance 2 Character generation). To use a trained Omni Reference character, reference it with @omni-character:<character_id> where character_id is the value returned by Omni Reference Train Character (e.g. char_1775422630065_4vbana). Both methods can be combined in the same prompt. Multiple characters are supported. Example: '@omni-character:char_1775422630065_4vbana walking through a neon-lit city at night'.",
        "examples": [
          "@image1 is the main character. The person walks along a city street at sunset, cinematic lighting."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "Up to 9 reference image URLs (JPEG/PNG/WebP). Each Nth image corresponds to @imageN in the prompt.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "minItems": 1,
        "maxItems": 9
      },
      "audio_files": {
        "examples": [],
        "description": "Up to 3 reference audio files (MP3/WAV, total max 15s). Each Nth audio corresponds to @audioN in the prompt.",
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
        "default": "16:9",
        "description": "Output video aspect ratio."
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
    "id": "seedance-2-vip-image-to-video",
    "name": "Seedance 2 VIP",
    "endpoint": "seedance-2-vip-image-to-video",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description guiding the video animation. Use @character:<id> to reference a completed Seedance 2 Character generation. Use @omni-character:<char_id> for a trained Kinovi character.",
        "examples": [
          "The person walks forward with a smile."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 or 2 images used as start frame (and optional end frame). Provide 1 image to animate from it, or 2 images for a start-to-end transition.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 2
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
    "id": "seedance-2-vip-image-to-video-fast",
    "name": "Seedance 2 VIP Image to Video Fast",
    "endpoint": "seedance-2-vip-image-to-video-fast",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description guiding the video animation. Use @character:<id> to reference a completed Seedance 2 Character generation. Use @omni-character:<char_id> for a trained Kinovi character.",
        "examples": [
          "The person walks forward with a smile."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 or 2 images used as start frame (and optional end frame).",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 2
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
    "id": "seedance-2-vip-first-last-frame",
    "name": "Seedance 2 VIP First Last Frame",
    "endpoint": "seedance-2-vip-first-last-frame",
    "family": "sd-2",
    "imageField": "images_list",
    "lastImageField": "images_list",
    "endImageRequired": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description guiding the transition between frames.",
        "examples": [
          "Two people having a street interview, the interviewer holds a microphone."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 image = first frame only; 2 images = first and last frame. Use 'adaptive' aspect ratio to match the reference image geometry.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Frame Images",
        "name": "images_list",
        "maxItems": 2
      },
      "aspect_ratio": {
        "enum": [
          "adaptive",
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
        "description": "Output video aspect ratio. 'adaptive' matches the reference image (recommended); concrete ratios may crop or pad.",
        "default": "adaptive"
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
    "id": "seedance-2-vip-first-last-frame-fast",
    "name": "Seedance 2 VIP First Last Frame Fast",
    "endpoint": "seedance-2-vip-first-last-frame-fast",
    "family": "sd-2",
    "imageField": "images_list",
    "lastImageField": "images_list",
    "endImageRequired": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description guiding the transition between frames.",
        "examples": [
          "Two people having a street interview, the interviewer holds a microphone."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 image = first frame only; 2 images = first and last frame. Use 'adaptive' aspect ratio to match the reference image geometry.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Frame Images",
        "name": "images_list",
        "maxItems": 2
      },
      "aspect_ratio": {
        "enum": [
          "adaptive",
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
        "description": "Output video aspect ratio. 'adaptive' matches the reference image (recommended); concrete ratios may crop or pad.",
        "default": "adaptive"
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
    "id": "seedance-2-vip-omni-reference",
    "name": "Seedance 2 VIP Omni Reference",
    "endpoint": "seedance-2-vip-omni-reference",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video description. Use @image1…@image9 to reference images, @video1…@video3 for videos, and @audio1…@audio3 for audio. Use @character:<request_id> for a Seedance 2 character sheet or @omni-character:<char_id> for a trained Kinovi character. Multiple characters are supported.",
        "examples": [
          "@image1 is the main character. The person walks along a city street at sunset, cinematic lighting."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "Up to 9 reference image URLs (JPEG/PNG/WebP). Each Nth image corresponds to @imageN in the prompt.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 9
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
        "description": "Up to 3 reference audio files (MP3/WAV, total max 15s). Each Nth audio corresponds to @audioN in the prompt.",
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
    "id": "seedance-2-vip-omni-reference-fast",
    "name": "Seedance 2 VIP Omni Reference Fast",
    "endpoint": "seedance-2-vip-omni-reference-fast",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video description. Use @image1…@image9 to reference images, @video1…@video3 for videos, and @audio1…@audio3 for audio. Use @character:<request_id> for a Seedance 2 character sheet or @omni-character:<char_id> for a trained Kinovi character. Multiple characters are supported.",
        "examples": [
          "@image1 is the main character. The person walks along a city street at sunset, cinematic lighting."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "Up to 9 reference image URLs (JPEG/PNG/WebP). Each Nth image corresponds to @imageN in the prompt.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 9
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
        "description": "Up to 3 reference audio files (MP3/WAV, total max 15s). Each Nth audio corresponds to @audioN in the prompt.",
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
    "id": "happy-horse-1-image-to-video-1080p",
    "name": "Happy Horse 1 Image to Video 1080P",
    "endpoint": "happy-horse-1-image-to-video-1080p",
    "fixedParameters": { "resolution": "1080p" },
    "family": "happy-horse-1",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional text description guiding the motion.",
        "examples": [
          "A tiny horse wearing boxing gloves stands in front of a massive battle robot in the middle of a city street. The horse suddenly charges fearlessly and punches the robot so hard that cars flip over and nearby windows shatter from the impact shockwave."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-image-to-video-1080p.jpg"
        ],
        "description": "Upload or provide the image to animate.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image",
        "name": "images_list",
        "maxItems": 1
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
    "id": "happy-horse-1-image-to-video-720p",
    "name": "Happy Horse 1 Image to Video 720P",
    "endpoint": "happy-horse-1-image-to-video-720p",
    "fixedParameters": { "resolution": "720p" },
    "family": "happy-horse-1",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional text description guiding the motion.",
        "examples": [
          "The motorcycle suddenly accelerates uncontrollably through traffic while the horse struggles to stay balanced. Cars swerve out of the way, sparks scrape across the road during sharp turns, and the camera tracks inches away from the speeding bike."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-image-to-video-720p.jpg"
        ],
        "description": "Upload or provide the image to animate.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image",
        "name": "images_list",
        "maxItems": 1
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
    "id": "veo-4-image-to-video",
    "name": "Veo 4",
    "endpoint": "veo-4-image-to-video",
    "family": "veo-4",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "Upload or provide the image to animate.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image",
        "name": "images_list",
        "maxItems": 1
      },
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional text description guiding the motion and camera movement.",
        "examples": [
          "Camera slowly pans left, parallax depth, cinematic lighting."
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
    "id": "seedance-2-vip-image-to-video-1080p",
    "name": "Seedance 2 VIP Image to Video 1080P",
    "endpoint": "sd-2-vip-image-to-video-1080p",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-i2v.jpg"
        ],
        "description": "Upload or provide the start frame image.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image",
        "name": "images_list",
        "maxItems": 1
      },
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional text description guiding the video motion.",
        "examples": [
          "Slow cinematic pan, dramatic lighting shift."
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
    "id": "seedance-2-vip-image-to-video-fast-1080p",
    "name": "Seedance 2 VIP Image to Video Fast 1080P",
    "endpoint": "sd-2-vip-image-to-video-fast-1080p",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-i2v.jpg"
        ],
        "description": "Upload or provide the start frame image.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image",
        "name": "images_list",
        "maxItems": 1
      },
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional text description guiding the video motion.",
        "examples": [
          "Slow cinematic pan, dramatic lighting shift."
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
    "id": "seedance-2-vip-omni-reference-1080p",
    "name": "Seedance 2 VIP Omni Reference 1080P",
    "endpoint": "sd-2-vip-omni-reference-1080p",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video description. Use @image1…@image9 to reference images, @video1…@video3 for videos, and @audio1…@audio3 for audio. Use @character:<request_id> for a Seedance 2 character sheet or @omni-character:<char_id> for a trained Kinovi character. Multiple characters are supported.",
        "examples": [
          "@image1 is the main character. The person walks along a city street at sunset, cinematic lighting."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "Up to 9 reference image URLs (JPEG/PNG/WebP). Each Nth image corresponds to @imageN in the prompt.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 9
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
        "description": "Up to 3 reference audio files (MP3/WAV, total max 15s). Each Nth audio corresponds to @audioN in the prompt.",
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
    "id": "seedance-2-vip-omni-reference-fast-1080p",
    "name": "Seedance 2 VIP Omni Reference Fast 1080P",
    "endpoint": "sd-2-vip-omni-reference-fast-1080p",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video description. Use @image1…@image9 to reference images, @video1…@video3 for videos, and @audio1…@audio3 for audio. Use @character:<request_id> for a Seedance 2 character sheet or @omni-character:<char_id> for a trained Kinovi character. Multiple characters are supported.",
        "examples": [
          "@image1 is the main character. The person walks along a city street at sunset, cinematic lighting."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "Up to 9 reference image URLs (JPEG/PNG/WebP). Each Nth image corresponds to @imageN in the prompt.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 9
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
        "description": "Up to 3 reference audio files (MP3/WAV, total max 15s). Each Nth audio corresponds to @audioN in the prompt.",
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
    "id": "seedance-2-vip-first-last-frame-1080p",
    "name": "Seedance 2 VIP First Last Frame 1080P",
    "endpoint": "sd-2-vip-first-last-frame-1080p",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description guiding the transition between frames.",
        "examples": [
          "Two people having a street interview, the interviewer holds a microphone."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 image = first frame only; 2 images = first and last frame. Use 'adaptive' aspect ratio to match the reference image geometry.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Frame Images",
        "name": "images_list",
        "maxItems": 2
      },
      "aspect_ratio": {
        "enum": [
          "adaptive",
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
        "description": "Output video aspect ratio. 'adaptive' matches the reference image (recommended); concrete ratios may crop or pad.",
        "default": "adaptive"
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
    "id": "kling-v3.0-4k-image-to-video",
    "fixedParameters": { resolution: "4K" },
    "name": "Kling v3.0 4K",
    "endpoint": "kling-v3.0-4k-image-to-video",
    "family": "kling-v3.0",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "aspectRatioMode": "inherited",
    "inputs": {
      "prompt": {
        "examples": [
          "The camera begins on the railway station platform beside a stationary train as morning sunlight filters through the roof. Passengers make small natural movements while the train doors are open. The camera moves forward and enters the train, transitioning smoothly into a window-seat point of view. As the doors close, the train starts moving. The view shifts fully to the window, showing the city passing by outside with gentle motion blur, buildings and trees sliding past. Sunlight reflects on the glass, faint interior reflections appear, and the ride feels calm and realistic with smooth, cinematic motion."
        ],
        "description": "Text prompt describing the video.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/kling-v3.0-pro-image-to-video1.jpg"
        ],
        "description": "URL of the input image used to generate video.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
      },
      "last_image": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/kling-v3.0-pro-image-to-video2.jpg"
        ],
        "description": "URL of the input last image.",
        "field": "image",
        "type": "string",
        "title": "Last Image",
        "name": "last_image"
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
    "id": "vidu-q3-pro-image-to-video",
    "name": "Vidu Q3 Pro",
    "endpoint": "vidu-q3-pro-image-to-video",
    "family": "vidu-q3-pro",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The floating train suddenly accelerates violently through the sky while sections of the track collapse behind it. Sparks explode beneath the wheels as the camera races alongside the train through tight gaps between skyscrapers. Pieces of the city break apart during the chase."
        ],
        "description": "Text prompt describing the motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/vidu-q3-pro-image-to-video.jpg"
        ],
        "description": "URL of the starting frame image.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
    "id": "vidu-q3-pro-first-last-frames",
    "name": "Vidu Q3 Pro First Last Frames",
    "endpoint": "vidu-q3-pro-first-last-frames",
    "family": "vidu-q3-pro",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The frozen bird begins cracking from within as glowing orange light shines through the ice. Steam bursts outward while flames ignite across the wings. The sculpture violently shatters apart and transforms into a blazing phoenix that launches upward through fire and smoke."
        ],
        "description": "Text prompt describing the transition.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/vidu-q3-pro-first-last-frames-1.jpg"
        ],
        "description": "URL of the starting (first) frame image.",
        "field": "image",
        "type": "string",
        "title": "First Image URL",
        "name": "image_url"
      },
      "last_image": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/vidu-q3-pro-first-last-frames-2.jpg"
        ],
        "description": "URL of the ending (last) frame image.",
        "field": "image",
        "type": "string",
        "title": "Last Image URL",
        "name": "last_image"
      },
      "resolution": {
        "enum": [
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
    "id": "vidu-q3-turbo-image-to-video",
    "name": "Vidu Q3 Turbo",
    "endpoint": "vidu-q3-turbo-image-to-video",
    "family": "vidu-q3-turbo",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The shark crashes through moving traffic, flipping cars into the air while water bursts across the highway. The camera races alongside the destruction as vehicles spin and explode behind the creature."
        ],
        "description": "Text prompt describing the motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/vidu-q3-turbo-image-to-video.jpg"
        ],
        "description": "URL of the starting frame image.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
    "id": "vidu-q3-turbo-first-last-frames",
    "name": "Vidu Q3 Turbo First Last Frames",
    "endpoint": "vidu-q3-turbo-first-last-frames",
    "family": "vidu-q3-turbo",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Dark smoke begins leaking from the woman’s body and rapidly expands outward. Her form dissolves into swirling vapor while glowing eyes emerge from the smoke cloud. The alley fills with violent rotating smoke as the camera circles aggressively around the transformation."
        ],
        "description": "Text prompt describing the transition.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/vidu-q3-turbo-first-last-frames-1.jpg"
        ],
        "description": "URL of the starting (first) frame image.",
        "field": "image",
        "type": "string",
        "title": "First Image URL",
        "name": "image_url"
      },
      "last_image": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/vidu-q3-turbo-first-last-frames-2.jpg"
        ],
        "description": "URL of the ending (last) frame image.",
        "field": "image",
        "type": "string",
        "title": "Last Image URL",
        "name": "last_image"
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
    "id": "vidu-q4-image-to-video",
    "name": "Vidu Q4",
    "endpoint": "vidu-q4-image-to-video",
    "family": "vidu-q4",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": false,
    "inputs": {
      "prompt": {
        "examples": [
          "The astronaut waves and the camera slowly moves up."
        ],
        "description": "Text description of the motion and scene. Optional.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/vidu-q3-pro-image-to-video.jpg"
        ],
        "description": "First-frame image URL. The video inherits this image's aspect ratio.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
      },
      "resolution": {
        "enum": [
          "540p",
          "720p",
          "1080p",
          "2k",
          "4k"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "Output resolution.",
        "default": "720p"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Video length in seconds (3-16).",
        "default": 5,
        "minValue": 3,
        "maxValue": 16,
        "step": 1
      },
      "audio": {
        "type": "boolean",
        "title": "Audio",
        "name": "audio",
        "description": "Generate synchronized audio (dialogue and sound effects).",
        "default": true
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q4-reference-to-video",
    "name": "Vidu Q4 Reference",
    "endpoint": "vidu-q4-reference-to-video",
    "family": "vidu-q4",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 15,
    "inputs": {
      "images_list": {
        "examples": [],
        "description": "Reference image URLs (1 to 15).",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Image URLs",
        "name": "images_list",
        "maxItems": 15
      },
      "prompt": {
        "examples": [
          "In the scene of reference image 1, the person in reference image 2 turns to the person in reference image 3 and says: \"What are you doing?\""
        ],
        "description": "Describe the video; refer to inputs by order, e.g. reference image 2.",
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
          "3:4"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Output aspect ratio.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "540p",
          "720p",
          "1080p",
          "2k",
          "4k"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "Output resolution.",
        "default": "720p"
      },
      "duration": {
        "title": "Duration",
        "name": "duration",
        "type": "int",
        "description": "Video length in seconds (3-16).",
        "default": 5,
        "minValue": 3,
        "maxValue": 16,
        "step": 1
      },
      "audio": {
        "type": "boolean",
        "title": "Audio",
        "name": "audio",
        "description": "Generate synchronized audio (dialogue and sound effects).",
        "default": true
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q2-pro-image-to-video",
    "name": "Vidu Q2 Pro",
    "endpoint": "vidu-q2-pro-image-to-video",
    "commonParameterRules": VIDU_Q2_MUSIC_RULES,
    "family": "vidu-q2",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The subject turns toward the camera as warm sunlight drifts across their face. The camera pushes in slowly while wind moves through their hair."
        ],
        "description": "Text prompt describing the motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/vidu-q2-turbo-1.jpg"
        ],
        "description": "URL of the starting frame image.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
        "description": "Aspect ratio of the output video. Match this to your source image to avoid cropping.",
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
    "id": "vidu-q2-turbo-image-to-video",
    "name": "Vidu Q2 Turbo",
    "endpoint": "vidu-q2-turbo-image-to-video",
    "commonParameterRules": VIDU_Q2_MUSIC_RULES,
    "family": "vidu-q2",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The subject smiles softly as the camera slowly orbits around them. Warm rim light catches the edges of their hair."
        ],
        "description": "Text prompt describing the motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/vidu-q2-turbo-1.jpg"
        ],
        "description": "URL of the starting frame image.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
        "description": "Aspect ratio of the output video. Match this to your source image to avoid cropping.",
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
    "id": "happy-horse-1-reference-to-video-1080p",
    "name": "HappyHorse 1.0 Reference 1080P",
    "endpoint": "happy-horse-1-reference-to-video-1080p",
    "fixedParameters": { "resolution": "1080p" },
    "family": "happy-horse-1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired video. Up to 5,000 non-Chinese (or 2,500 Chinese) characters.",
        "examples": [
          "Place @image1 inside @image2 running across countertops while giant cooking disasters happen everywhere. Exploding soup pots, flying vegetables, and fire bursts create chaos as the tiny horse desperately escapes through the oversized kitchen."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-1080p-1.jpg",
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-1080p-2.jpg"
        ],
        "description": "1-9 reference image URLs. JPEG/PNG/WEBP, >=400px shortest side, <=10 MB each.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "minItems": 1,
        "maxItems": 9
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
      },
      "seed": HAPPY_HORSE_SEED_INPUT
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "happy-horse-1-reference-to-video-720p",
    "name": "HappyHorse 1.0 Reference 720P",
    "endpoint": "happy-horse-1-reference-to-video-720p",
    "fixedParameters": { "resolution": "720p" },
    "family": "happy-horse-1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired video. Up to 5,000 non-Chinese (or 2,500 Chinese) characters.",
        "examples": [
          "Use @image1 riding inside @image2 at extreme speed through a massive supermarket. The rocket cart blasts through aisles, launches over checkout counters, and sends products exploding everywhere while the camera chases closely behind through the chaos."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-720p-1.jpg",
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-720p-2.jpg"
        ],
        "description": "1-9 reference image URLs. JPEG/PNG/WEBP, >=400px shortest side, <=10 MB each.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "minItems": 1,
        "maxItems": 9
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
      },
      "seed": HAPPY_HORSE_SEED_INPUT
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "gemini-omni-image-to-video",
    "name": "Gemini Omni",
    "endpoint": "gemini-omni-image-to-video",
    "family": "gemini-omni",
    "imageField": "image_urls",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired motion and scene. Gemini Omni supports rich multimodal prompts including camera direction, dialogue, and ambient audio cues.",
        "examples": [
          "The suitcase opens by itself and tiny landscapes start unfolding out of it—mountains, forests, oceans, entire cities. Each world expands outward onto the platform, growing larger and larger while miniature weather systems form above them."
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
        "description": "Upload 1–7 reference images for the video. Maximum 20 MB each.",
        "examples": [
          "https://cdn.muapi.ai/assets/gemini-omni-image-to-video.jpg"
        ],
        "maxItems": 7
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
    "id": "grok-imagine-video-1-5-preview",
    "name": "Grok Imagine Video 1.5 Preview",
    "endpoint": "grok-imagine-video-1-5-preview",
    "family": "video-generation",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description for video generation.",
        "examples": [
          "The whale suddenly begins swimming through the apartment as if the room is underwater. Furniture crashes into walls, water bursts outward, and the whale breaks through multiple rooms while the camera follows beside it."
        ]
      },
      "images_list": GROK_IMAGE_INPUT,
      "aspect_ratio": {
        "enum": [
          "auto",
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "3:2",
          "2:3"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio for the generated video. Use 'auto' to match the input image.",
        "default": "auto"
      },
      "resolution": GROK_RESOLUTION_INPUT,
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds.",
        "default": 8,
        "minValue": 1,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "grok",
    "provider_name": "xAI"
  },
  {
    "id": "kling-v3-turbo-standard-image-to-video",
    "fixedParameters": { resolution: "720p" },
    "name": "Kling v3 Turbo Standard",
    "endpoint": "kling-v3-turbo-standard-image-to-video",
    "family": "kling-v3.0",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "aspectRatioMode": "inherited",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "The kitchen explodes into chaos as soup erupts upward, giant vegetables crash across the counter, and flames burst from the stove. The tiny astronaut sprints between falling objects while the camera follows inches behind."
        ]
      },
      "image_url": {
        "type": "string",
        "title": "Image URL",
        "name": "image_url",
        "description": "URL of the input image used to generate video.",
        "field": "image",
        "examples": [
          "https://cdn.muapi.ai/assets/kling-v3-turbo-standard-image-to-video.jpg"
        ]
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
    "id": "kling-v3-turbo-pro-image-to-video",
    "fixedParameters": { resolution: "1080p" },
    "name": "Kling v3 Turbo Pro",
    "endpoint": "kling-v3-turbo-pro-image-to-video",
    "family": "kling-v3.0",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "aspectRatioMode": "inherited",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video.",
        "examples": [
          "Cracks spread rapidly through the ice before it explodes outward in massive shards. The titan awakens violently, roaring as it tears itself free and sends snowstorms spiraling outward. The camera circles aggressively during the awakening."
        ]
      },
      "image_url": {
        "type": "string",
        "title": "Image URL",
        "name": "image_url",
        "description": "URL of the input image used to generate video.",
        "field": "image",
        "examples": [
          "https://cdn.muapi.ai/assets/kling-v3-turbo-pro-image-to-video.jpg"
        ]
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
    "id": "seedance-2.5-image-to-video",
    "name": "Seedance 2.5",
    "endpoint": "seedance-2.5-image-to-video",
    "family": "seedance-2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Animate the park scene with gentle wind moving the trees, subtle water ripples, and a slow cinematic push forward."
        ],
        "description": "Text prompt describing the desired motion and style.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "URL of the input image to animate into video.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-mini-image-to-video",
    "name": "Seedance 2 Mini",
    "endpoint": "seedance-2-mini-image-to-video",
    "family": "seedance-2.0-mini",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "examples": [
          "A slow cinematic push toward a subject on a sunlit rooftop, gentle breeze in the hair."
        ],
        "description": "Text prompt guiding the video animation.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v1.5-pro-i2v.jpg"
        ],
        "description": "1 image = start frame. 2-9 images = reference images; reference them in your prompt with @image1, @image2, etc.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 9
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
    "id": "happy-horse-1.1-image-to-video-1080p",
    "name": "Happy Horse 1.1 Image to Video 1080P",
    "endpoint": "happy-horse-1.1-image-to-video-1080p",
    "fixedParameters": { "resolution": "1080p" },
    "family": "happy-horse-1.1",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional text description guiding the motion.",
        "examples": [
          "A tiny horse wearing boxing gloves stands in front of a massive battle robot. The horse suddenly charges fearlessly and punches the robot so hard that cars flip over."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-image-to-video-1080p.jpg"
        ],
        "description": "Upload or provide the image to animate.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image",
        "name": "images_list",
        "maxItems": 1
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
    "id": "happy-horse-1.1-image-to-video-720p",
    "name": "Happy Horse 1.1 Image to Video 720P",
    "endpoint": "happy-horse-1.1-image-to-video-720p",
    "fixedParameters": { "resolution": "720p" },
    "family": "happy-horse-1.1",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional text description guiding the motion.",
        "examples": [
          "A tiny horse wearing boxing gloves stands in front of a massive battle robot. The horse suddenly charges fearlessly and punches the robot so hard that cars flip over."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-image-to-video-1080p.jpg"
        ],
        "description": "Upload or provide the image to animate.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image",
        "name": "images_list",
        "maxItems": 1
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
    "id": "happy-horse-1.1-reference-to-video-1080p",
    "name": "HappyHorse 1.1 Reference 1080P",
    "endpoint": "happy-horse-1.1-reference-to-video-1080p",
    "fixedParameters": { "resolution": "1080p" },
    "family": "happy-horse-1.1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired video. Up to 5,000 characters.",
        "examples": [
          "Place @image1 inside @image2 running across countertops while giant cooking disasters happen everywhere. Exploding soup pots, flying vegetables, and fire bursts create chaos."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-1080p-1.jpg",
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-1080p-2.jpg"
        ],
        "description": "1-9 reference image URLs. JPEG/PNG/WEBP, >=400px shortest side, <=10 MB each.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "minItems": 1,
        "maxItems": 9
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
      },
      "seed": HAPPY_HORSE_SEED_INPUT
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "happy-horse-1.1-reference-to-video-720p",
    "name": "HappyHorse 1.1 Reference 720P",
    "endpoint": "happy-horse-1.1-reference-to-video-720p",
    "fixedParameters": { "resolution": "720p" },
    "family": "happy-horse-1.1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired video. Up to 5,000 characters.",
        "examples": [
          "Place @image1 inside @image2 running across countertops while giant cooking disasters happen everywhere. Exploding soup pots, flying vegetables, and fire bursts create chaos."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-1080p-1.jpg",
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-1080p-2.jpg"
        ],
        "description": "1-9 reference image URLs. JPEG/PNG/WEBP, >=400px shortest side, <=10 MB each.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "minItems": 1,
        "maxItems": 9
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
      },
      "seed": HAPPY_HORSE_SEED_INPUT
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "seedance-2-vip-image-to-video-4k",
    "name": "Seedance 2 VIP Image to Video 4K",
    "endpoint": "sd-2-vip-image-to-video-4k",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-i2v.jpg"
        ],
        "description": "Upload or provide the start frame image.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image",
        "name": "images_list",
        "maxItems": 1
      },
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional text description guiding the video motion.",
        "examples": [
          "Slow cinematic pan, dramatic lighting shift."
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
    "id": "seedance-2-vip-first-last-frame-4k",
    "name": "Seedance 2 VIP First Last Frame 4K",
    "endpoint": "sd-2-vip-first-last-frame-4k",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description guiding the transition between frames.",
        "examples": [
          "Two people having a street interview, the interviewer holds a microphone."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 image = first frame only; 2 images = first and last frame. Use ‘adaptive’ aspect ratio to match the reference image geometry.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Frame Images",
        "name": "images_list",
        "maxItems": 2
      },
      "aspect_ratio": {
        "enum": [
          "adaptive",
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
        "description": "Output video aspect ratio. ‘adaptive’ matches the reference image (recommended); concrete ratios may crop or pad.",
        "default": "adaptive"
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
    "id": "seedance-2-vip-omni-reference-4k",
    "name": "Seedance 2 VIP Omni Reference 4K",
    "endpoint": "sd-2-vip-omni-reference-4k",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video description. Use @image1…@image9 to reference images, @video1…@video3 for videos, and @audio1…@audio3 for audio. Use @character:<request_id> for a Seedance 2 character sheet or @omni-character:<char_id> for a trained Kinovi character. Multiple characters are supported.",
        "examples": [
          "@image1 is the main character. The person walks along a city street at sunset, cinematic lighting."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "Up to 9 reference image URLs (JPEG/PNG/WebP). Each Nth image corresponds to @imageN in the prompt.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 9
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
        "description": "Up to 3 reference audio files (MP3/WAV, total max 15s). Each Nth audio corresponds to @audioN in the prompt.",
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
    "id": "seedance-2.5-spicy-image-to-video",
    "name": "Seedance 2.5 Spicy",
    "endpoint": "seedance-2.5-spicy-image-to-video",
    "family": "seedance-2.5",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "resolution": SEEDANCE_25_RESOLUTION_INPUT,
      "generate_audio": SEEDANCE_GENERATE_AUDIO_INPUT,
      "prompt": {
        "examples": [
          "Bold, high-energy dolly forward through a neon-drenched alley at night, sparks flying off a passing train, exaggerated lighting contrast, dramatic camera shake, photorealistic 4K quality."
        ],
        "description": "Text prompt describing the video motion and style. Spicy mode favors bolder, higher-contrast, more expressive results.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v1.5-pro-i2v.jpg"
        ],
        "description": "URL of the input image to animate into video.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
      "high_bitrate": {
        "type": "boolean",
        "title": "High Bitrate",
        "name": "high_bitrate",
        "description": "Enable high bitrate mode for better visual fidelity. Produces larger files.",
        "default": false
      },
      "aspect_ratio": SEEDANCE_25_ASPECT_RATIO_INPUT,
      "seed": SEEDANCE_25_SEED_INPUT
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
    {
    "id": "seedance-2.5-image-to-video-480p",
    "name": "Seedance 2.5 Image to Video 480p",
    "endpoint": "seedance-2.5-image-to-video-480p",
    "family": "seedance-2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Animate the park scene with gentle wind moving the trees, subtle water ripples, and a slow cinematic push forward."
        ],
        "description": "Text prompt describing the desired motion and style.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "URL of the input image to animate into video.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
    {
    "id": "seedance-2.5-first-last-frame",
    "name": "Seedance 2.5 First & Last Frame",
    "endpoint": "seedance-2.5-first-last-frame",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a smooth transition from a cloudy sky to a quiet riverside park path, with natural camera movement and realistic lighting."
        ],
        "description": "Text prompt describing the transition and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://samplelib.com/jpeg/sample-clouds-400x300.jpg",
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "Exactly 2 images: [first_frame, last_frame].",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "First and Last Frame Images",
        "name": "images_list",
        "maxItems": 2
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
    {
    "id": "seedance-2.5-first-last-frame-480p",
    "name": "Seedance 2.5 First Last Frame 480p",
    "endpoint": "seedance-2.5-first-last-frame-480p",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a smooth transition from a cloudy sky to a quiet riverside park path, with natural camera movement and realistic lighting."
        ],
        "description": "Text prompt describing the transition and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://samplelib.com/jpeg/sample-clouds-400x300.jpg",
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "Exactly 2 images: [first_frame, last_frame].",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "First and Last Frame Images",
        "name": "images_list",
        "maxItems": 2
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
    {
    "id": "seedance-2.5-omni-reference",
    "name": "Seedance 2.5 Omni Reference",
    "endpoint": "seedance-2.5-omni-reference",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a calm cinematic park sequence. Use the images for environment style, the video clips for camera motion and street rhythm, and the audio as mood reference."
        ],
        "description": "Text prompt describing the desired video, referencing the provided images, video clips, and audio as environment, motion, and mood cues.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "videos_list": {
        "examples": [],
        "description": "Reference video URLs. Up to 10 clips.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Videos",
        "name": "videos_list",
        "maxItems": 10
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs. Up to 10 files.",
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
      "omni_reference_task_type": {
        "enum": [
          "auto",
          "reference",
          "edit",
          "extend"
        ],
        "title": "Omni Reference Task Type",
        "name": "omni_reference_task_type",
        "type": "string",
        "description": "Hint for the omni-reference subtask type, so ratio/duration constraint mismatches are caught at submission time instead of failing asynchronously. auto lets the model infer the type from the prompt; reference has no special ratio/duration constraints; edit and extend both require ratio=adaptive (edit additionally requires duration=-1). The model still re-derives the actual task type from the prompt during processing, so a mismatch can still surface as an async error.",
        "default": "auto"
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
    "id": "seedance-2.5-omni-reference-480p",
    "name": "Seedance 2.5 Omni Reference 480p",
    "endpoint": "seedance-2.5-omni-reference-480p",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a calm cinematic park sequence. Use the images for environment style, the video clips for camera motion and street rhythm, and the audio as mood reference."
        ],
        "description": "Text prompt describing the desired video, referencing the provided images, video clips, and audio as environment, motion, and mood cues.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "videos_list": {
        "examples": [],
        "description": "Reference video URLs. Up to 10 clips.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Videos",
        "name": "videos_list",
        "maxItems": 10
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs. Up to 10 files.",
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
      "omni_reference_task_type": {
        "enum": [
          "auto",
          "reference",
          "edit",
          "extend"
        ],
        "title": "Omni Reference Task Type",
        "name": "omni_reference_task_type",
        "type": "string",
        "description": "Hint for the omni-reference subtask type, so ratio/duration constraint mismatches are caught at submission time instead of failing asynchronously. auto lets the model infer the type from the prompt; reference has no special ratio/duration constraints; edit and extend both require ratio=adaptive (edit additionally requires duration=-1). The model still re-derives the actual task type from the prompt during processing, so a mismatch can still surface as an async error.",
        "default": "auto"
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
    "id": "seedance-2-spicy-image-to-video",
    "name": "Seedance 2 Spicy",
    "endpoint": "seedance-2-spicy-image-to-video",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description guiding the video animation. Use @character:<id> to reference a completed Seedance 2 Character generation. Use @omni-character:<char_id> for a trained Kinovi character.",
        "examples": [
          "The person walks forward with a smile."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 or 2 images used as start frame (and optional end frame). Provide 1 image to animate from it, or 2 images for a start-to-end transition.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 2
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
    "id": "seedance-2-spicy-image-to-video-fast",
    "name": "Seedance 2 Spicy Image to Video Fast",
    "endpoint": "seedance-2-spicy-image-to-video-fast",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description guiding the video animation. Use @character:<id> to reference a completed Seedance 2 Character generation. Use @omni-character:<char_id> for a trained Kinovi character.",
        "examples": [
          "The person walks forward with a smile."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 or 2 images used as start frame (and optional end frame).",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 2
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
    "id": "seedance-2-mini-spicy-image-to-video",
    "name": "Seedance 2 Mini Spicy",
    "endpoint": "seedance-2-mini-spicy-image-to-video",
    "family": "seedance-2.0-mini",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "examples": [
          "A slow cinematic push toward a subject on a sunlit rooftop, gentle breeze in the hair."
        ],
        "description": "Text prompt guiding the video animation.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v1.5-pro-i2v.jpg"
        ],
        "description": "1 image = start frame. 2-9 images = reference images; reference them in your prompt with @image1, @image2, etc.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 9
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
    "id": "minimax-h3-image-to-video",
    "name": "MiniMax H3 Image to Video",
    "endpoint": "minimax-h3-image-to-video",
    "family": "minimax-h3",
    "imageField": "image_url",
    "lastImageField": "last_image_url",
    "aspectRatioMode": "inherited",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Motion prompt describing the desired video."
      },
      "image_url": {
        "type": "string",
        "field": "image",
        "title": "Image URL",
        "name": "image_url"
      },
      "last_image_url": {
        "type": "string",
        "field": "image",
        "title": "Last Image URL",
        "name": "last_image_url"
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
    "id": "minimax-h3-reference-to-video",
    "name": "MiniMax H3 Reference",
    "endpoint": "minimax-h3-reference-to-video",
    "family": "minimax-h3",
    "imageField": "reference_images",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Prompt describing the desired video."
      },
      "reference_images": {
        "type": "array",
        "field": "image",
        "title": "Reference Images",
        "name": "reference_images",
        "maxItems": 9,
        "items": {"type": "string"}
      },
      "reference_videos": {
        "type": "array",
        "field": "video",
        "title": "Reference Videos",
        "name": "reference_videos",
        "maxItems": 3,
        "items": {"type": "string"}
      },
      "reference_audios": {
        "type": "array",
        "field": "audio",
        "title": "Reference Audio",
        "name": "reference_audios",
        "maxItems": 3,
        "items": {"type": "string"}
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
    "id": "minimax-h3-open-image-to-video",
    "name": "MiniMax H3 Open Image to Video",
    "endpoint": "minimax-h3-open-image-to-video",
    "family": "minimax-h3",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "aspectRatioMode": "inherited",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Motion prompt describing the desired video."
      },
      "image_url": {
        "type": "string",
        "field": "image",
        "title": "First Frame Image URL",
        "name": "image_url"
      },
      "last_image": {
        "type": "string",
        "field": "image",
        "title": "Last Frame Image URL",
        "name": "last_image"
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
    "id": "minimax-h3-open-reference-to-video",
    "name": "MiniMax H3 Base Ref2VA",
    "endpoint": "minimax-h3-open-reference-to-video",
    "family": "minimax-h3",
    "imageField": "images_list",
    "maxImages": 9,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Prompt describing the desired video."
      },
      "images_list": {
        "type": "array",
        "field": "images_list",
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 9,
        "items": {"type": "string"}
      },
      "videos_list": {
        "type": "array",
        "field": "videos_list",
        "title": "Reference Videos",
        "name": "videos_list",
        "maxItems": 3,
        "items": {"type": "string"}
      },
      "audios_list": {
        "type": "array",
        "field": "audios_list",
        "title": "Reference Audio",
        "name": "audios_list",
        "maxItems": 3,
        "items": {"type": "string"}
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
    "id": "flux-3-image-to-video",
    "name": "FLUX 3",
    "endpoint": "flux-3-image-to-video",
    "family": "flux-3",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
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
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "Start frame image to animate into video.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
    "id": "wan3.0-image-to-video",
    "name": "Wan 3.0",
    "endpoint": "wan3.0-image-to-video",
    "family": "wan3.0",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the motion and scene you want to create.",
        "examples": [
          "The camera slowly pushes in as a breeze moves through the subject's hair."
        ]
      },
      "image_url": {
        "type": "string",
        "title": "Image URL",
        "name": "image_url",
        "description": "Source image to animate.",
        "field": "image",
        "examples": []
      },
      "last_image": {
        "type": "string",
        "title": "Last Frame Image URL",
        "name": "last_image",
        "description": "Optional end-frame image to guide how the video should end.",
        "field": "image",
        "examples": []
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
    "id": "wan3.0-spicy-image-to-video",
    "name": "Wan 3.0 Spicy",
    "endpoint": "wan3.0-spicy-image-to-video",
    "family": "wan3.0-spicy",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the bold, high-motion scene you want to create with the Spicy variant.",
        "examples": [
          "The camera pushes through the storm as dramatic light and high-energy motion build around the subject."
        ]
      },
      "image_url": {
        "type": "string",
        "title": "Image URL",
        "name": "image_url",
        "description": "Source image to animate.",
        "field": "image",
        "examples": []
      },
      "last_image": {
        "type": "string",
        "title": "Last Frame Image URL",
        "name": "last_image",
        "description": "Optional end-frame image to guide how the video should end.",
        "field": "image",
        "examples": []
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
    "id": "seedance-2.5-image-to-video-1080p",
    "name": "Seedance 2.5 Image to Video 1080p",
    "endpoint": "seedance-2.5-image-to-video-1080p",
    "family": "seedance-2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Animate the park scene with gentle wind moving the trees, subtle water ripples, and a slow cinematic push forward."
        ],
        "description": "Text prompt describing the desired motion and style.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "URL of the input image to animate into video.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-image-to-video-4k",
    "name": "Seedance 2.5 Image to Video 4K",
    "endpoint": "seedance-2.5-image-to-video-4k",
    "family": "seedance-2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Animate the park scene with gentle wind moving the trees, subtle water ripples, and a slow cinematic push forward."
        ],
        "description": "Text prompt describing the desired motion and style.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "URL of the input image to animate into video.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-first-last-frame-1080p",
    "name": "Seedance 2.5 First Last Frame 1080p",
    "endpoint": "seedance-2.5-first-last-frame-1080p",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a smooth transition from a cloudy sky to a quiet riverside park path, with natural camera movement and realistic lighting."
        ],
        "description": "Text prompt describing the transition and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://samplelib.com/jpeg/sample-clouds-400x300.jpg",
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "Exactly 2 images: [first_frame, last_frame].",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "First and Last Frame Images",
        "name": "images_list",
        "maxItems": 2
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-first-last-frame-4k",
    "name": "Seedance 2.5 First Last Frame 4K",
    "endpoint": "seedance-2.5-first-last-frame-4k",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a smooth transition from a cloudy sky to a quiet riverside park path, with natural camera movement and realistic lighting."
        ],
        "description": "Text prompt describing the transition and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://samplelib.com/jpeg/sample-clouds-400x300.jpg",
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "Exactly 2 images: [first_frame, last_frame].",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "First and Last Frame Images",
        "name": "images_list",
        "maxItems": 2
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-omni-reference-1080p",
    "name": "Seedance 2.5 Omni Reference 1080p",
    "endpoint": "seedance-2.5-omni-reference-1080p",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a calm cinematic park sequence. Use the images for environment style, the video clips for camera motion and street rhythm, and the audio as mood reference."
        ],
        "description": "Text prompt describing the desired video, referencing the provided images, video clips, and audio as environment, motion, and mood cues.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "videos_list": {
        "examples": [],
        "description": "Reference video URLs. Up to 10 clips.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Videos",
        "name": "videos_list",
        "maxItems": 10
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs. Up to 10 files.",
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
      "omni_reference_task_type": {
        "enum": [
          "auto",
          "reference",
          "edit",
          "extend"
        ],
        "title": "Omni Reference Task Type",
        "name": "omni_reference_task_type",
        "type": "string",
        "description": "Hint for the omni-reference subtask type, so ratio/duration constraint mismatches are caught at submission time instead of failing asynchronously. auto lets the model infer the type from the prompt; reference has no special ratio/duration constraints; edit and extend both require ratio=adaptive (edit additionally requires duration=-1). The model still re-derives the actual task type from the prompt during processing, so a mismatch can still surface as an async error.",
        "default": "auto"
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
    "id": "seedance-2.5-omni-reference-4k",
    "name": "Seedance 2.5 Omni Reference 4K",
    "endpoint": "seedance-2.5-omni-reference-4k",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a calm cinematic park sequence. Use the images for environment style, the video clips for camera motion and street rhythm, and the audio as mood reference."
        ],
        "description": "Text prompt describing the desired video, referencing the provided images, video clips, and audio as environment, motion, and mood cues.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "videos_list": {
        "examples": [],
        "description": "Reference video URLs. Up to 10 clips.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Videos",
        "name": "videos_list",
        "maxItems": 10
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs. Up to 10 files.",
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
      "omni_reference_task_type": {
        "enum": [
          "auto",
          "reference",
          "edit",
          "extend"
        ],
        "title": "Omni Reference Task Type",
        "name": "omni_reference_task_type",
        "type": "string",
        "description": "Hint for the omni-reference subtask type, so ratio/duration constraint mismatches are caught at submission time instead of failing asynchronously. auto lets the model infer the type from the prompt; reference has no special ratio/duration constraints; edit and extend both require ratio=adaptive (edit additionally requires duration=-1). The model still re-derives the actual task type from the prompt during processing, so a mismatch can still surface as an async error.",
        "default": "auto"
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
    "id": "seedance-2.5-intl-image-to-video",
    "name": "Seedance 2.5 Intl",
    "endpoint": "seedance-2.5-intl-image-to-video",
    "family": "seedance-2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Animate the park scene with gentle wind moving the trees, subtle water ripples, and a slow cinematic push forward."
        ],
        "description": "Text prompt describing the desired motion and style.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "URL of the input image to animate into video.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-image-to-video-480p",
    "name": "Seedance 2.5 Intl Image to Video 480p",
    "endpoint": "seedance-2.5-intl-image-to-video-480p",
    "family": "seedance-2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Animate the park scene with gentle wind moving the trees, subtle water ripples, and a slow cinematic push forward."
        ],
        "description": "Text prompt describing the desired motion and style.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "URL of the input image to animate into video.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-image-to-video-480p",
    "name": "Seedance 2.5 Spicy Image to Video 480p",
    "endpoint": "seedance-2.5-spicy-image-to-video-480p",
    "family": "seedance-2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Animate the park scene with gentle wind moving the trees, subtle water ripples, and a slow cinematic push forward."
        ],
        "description": "Text prompt describing the desired motion and style.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "URL of the input image to animate into video.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-image-to-video-1080p",
    "name": "Seedance 2.5 Intl Image to Video 1080p",
    "endpoint": "seedance-2.5-intl-image-to-video-1080p",
    "family": "seedance-2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Animate the park scene with gentle wind moving the trees, subtle water ripples, and a slow cinematic push forward."
        ],
        "description": "Text prompt describing the desired motion and style.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "URL of the input image to animate into video.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-image-to-video-1080p",
    "name": "Seedance 2.5 Spicy Image to Video 1080p",
    "endpoint": "seedance-2.5-spicy-image-to-video-1080p",
    "family": "seedance-2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Animate the park scene with gentle wind moving the trees, subtle water ripples, and a slow cinematic push forward."
        ],
        "description": "Text prompt describing the desired motion and style.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "URL of the input image to animate into video.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-image-to-video-4k",
    "name": "Seedance 2.5 Intl Image to Video 4K",
    "endpoint": "seedance-2.5-intl-image-to-video-4k",
    "family": "seedance-2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Animate the park scene with gentle wind moving the trees, subtle water ripples, and a slow cinematic push forward."
        ],
        "description": "Text prompt describing the desired motion and style.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "URL of the input image to animate into video.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-image-to-video-4k",
    "name": "Seedance 2.5 Spicy Image to Video 4K",
    "endpoint": "seedance-2.5-spicy-image-to-video-4k",
    "family": "seedance-2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Animate the park scene with gentle wind moving the trees, subtle water ripples, and a slow cinematic push forward."
        ],
        "description": "Text prompt describing the desired motion and style.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "URL of the input image to animate into video.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-first-last-frame",
    "name": "Seedance 2.5 Intl First Last Frame",
    "endpoint": "seedance-2.5-intl-first-last-frame",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a smooth transition from a cloudy sky to a quiet riverside park path, with natural camera movement and realistic lighting."
        ],
        "description": "Text prompt describing the transition and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://samplelib.com/jpeg/sample-clouds-400x300.jpg",
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "Exactly 2 images: [first_frame, last_frame].",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "First and Last Frame Images",
        "name": "images_list",
        "maxItems": 2
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-first-last-frame",
    "name": "Seedance 2.5 Spicy First Last Frame",
    "endpoint": "seedance-2.5-spicy-first-last-frame",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a smooth transition from a cloudy sky to a quiet riverside park path, with natural camera movement and realistic lighting."
        ],
        "description": "Text prompt describing the transition and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://samplelib.com/jpeg/sample-clouds-400x300.jpg",
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "Exactly 2 images: [first_frame, last_frame].",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "First and Last Frame Images",
        "name": "images_list",
        "maxItems": 2
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-first-last-frame-480p",
    "name": "Seedance 2.5 Intl First Last Frame 480p",
    "endpoint": "seedance-2.5-intl-first-last-frame-480p",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a smooth transition from a cloudy sky to a quiet riverside park path, with natural camera movement and realistic lighting."
        ],
        "description": "Text prompt describing the transition and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://samplelib.com/jpeg/sample-clouds-400x300.jpg",
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "Exactly 2 images: [first_frame, last_frame].",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "First and Last Frame Images",
        "name": "images_list",
        "maxItems": 2
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-first-last-frame-480p",
    "name": "Seedance 2.5 Spicy First Last Frame 480p",
    "endpoint": "seedance-2.5-spicy-first-last-frame-480p",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a smooth transition from a cloudy sky to a quiet riverside park path, with natural camera movement and realistic lighting."
        ],
        "description": "Text prompt describing the transition and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://samplelib.com/jpeg/sample-clouds-400x300.jpg",
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "Exactly 2 images: [first_frame, last_frame].",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "First and Last Frame Images",
        "name": "images_list",
        "maxItems": 2
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-first-last-frame-1080p",
    "name": "Seedance 2.5 Intl First Last Frame 1080p",
    "endpoint": "seedance-2.5-intl-first-last-frame-1080p",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a smooth transition from a cloudy sky to a quiet riverside park path, with natural camera movement and realistic lighting."
        ],
        "description": "Text prompt describing the transition and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://samplelib.com/jpeg/sample-clouds-400x300.jpg",
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "Exactly 2 images: [first_frame, last_frame].",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "First and Last Frame Images",
        "name": "images_list",
        "maxItems": 2
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-first-last-frame-1080p",
    "name": "Seedance 2.5 Spicy First Last Frame 1080p",
    "endpoint": "seedance-2.5-spicy-first-last-frame-1080p",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a smooth transition from a cloudy sky to a quiet riverside park path, with natural camera movement and realistic lighting."
        ],
        "description": "Text prompt describing the transition and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://samplelib.com/jpeg/sample-clouds-400x300.jpg",
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "Exactly 2 images: [first_frame, last_frame].",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "First and Last Frame Images",
        "name": "images_list",
        "maxItems": 2
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-first-last-frame-4k",
    "name": "Seedance 2.5 Intl First Last Frame 4K",
    "endpoint": "seedance-2.5-intl-first-last-frame-4k",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a smooth transition from a cloudy sky to a quiet riverside park path, with natural camera movement and realistic lighting."
        ],
        "description": "Text prompt describing the transition and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://samplelib.com/jpeg/sample-clouds-400x300.jpg",
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "Exactly 2 images: [first_frame, last_frame].",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "First and Last Frame Images",
        "name": "images_list",
        "maxItems": 2
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-first-last-frame-4k",
    "name": "Seedance 2.5 Spicy First Last Frame 4K",
    "endpoint": "seedance-2.5-spicy-first-last-frame-4k",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a smooth transition from a cloudy sky to a quiet riverside park path, with natural camera movement and realistic lighting."
        ],
        "description": "Text prompt describing the transition and motion.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://samplelib.com/jpeg/sample-clouds-400x300.jpg",
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "Exactly 2 images: [first_frame, last_frame].",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "First and Last Frame Images",
        "name": "images_list",
        "maxItems": 2
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
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-intl-omni-reference",
    "name": "Seedance 2.5 Intl Omni Reference",
    "endpoint": "seedance-2.5-intl-omni-reference",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a calm cinematic park sequence. Use the images for environment style, the video clips for camera motion and street rhythm, and the audio as mood reference."
        ],
        "description": "Text prompt describing the desired video, referencing the provided images, video clips, and audio as environment, motion, and mood cues.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "videos_list": {
        "examples": [],
        "description": "Reference video URLs. Up to 10 clips.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Videos",
        "name": "videos_list",
        "maxItems": 10
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs. Up to 10 files.",
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
      "omni_reference_task_type": {
        "enum": [
          "auto",
          "reference",
          "edit",
          "extend"
        ],
        "title": "Omni Reference Task Type",
        "name": "omni_reference_task_type",
        "type": "string",
        "description": "Hint for the omni-reference subtask type, so ratio/duration constraint mismatches are caught at submission time instead of failing asynchronously. auto lets the model infer the type from the prompt; reference has no special ratio/duration constraints; edit and extend both require ratio=adaptive (edit additionally requires duration=-1). The model still re-derives the actual task type from the prompt during processing, so a mismatch can still surface as an async error.",
        "default": "auto"
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
    "id": "seedance-2.5-spicy-omni-reference",
    "name": "Seedance 2.5 Spicy Omni Reference",
    "endpoint": "seedance-2.5-spicy-omni-reference",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a calm cinematic park sequence. Use the images for environment style, the video clips for camera motion and street rhythm, and the audio as mood reference."
        ],
        "description": "Text prompt describing the desired video, referencing the provided images, video clips, and audio as environment, motion, and mood cues.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "videos_list": {
        "examples": [],
        "description": "Reference video URLs. Up to 10 clips.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Videos",
        "name": "videos_list",
        "maxItems": 10
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs. Up to 10 files.",
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
      "omni_reference_task_type": {
        "enum": [
          "auto",
          "reference",
          "edit",
          "extend"
        ],
        "title": "Omni Reference Task Type",
        "name": "omni_reference_task_type",
        "type": "string",
        "description": "Hint for the omni-reference subtask type, so ratio/duration constraint mismatches are caught at submission time instead of failing asynchronously. auto lets the model infer the type from the prompt; reference has no special ratio/duration constraints; edit and extend both require ratio=adaptive (edit additionally requires duration=-1). The model still re-derives the actual task type from the prompt during processing, so a mismatch can still surface as an async error.",
        "default": "auto"
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
    "id": "seedance-2.5-intl-omni-reference-480p",
    "name": "Seedance 2.5 Intl Omni Reference 480p",
    "endpoint": "seedance-2.5-intl-omni-reference-480p",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a calm cinematic park sequence. Use the images for environment style, the video clips for camera motion and street rhythm, and the audio as mood reference."
        ],
        "description": "Text prompt describing the desired video, referencing the provided images, video clips, and audio as environment, motion, and mood cues.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "videos_list": {
        "examples": [],
        "description": "Reference video URLs. Up to 10 clips.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Videos",
        "name": "videos_list",
        "maxItems": 10
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs. Up to 10 files.",
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
      "omni_reference_task_type": {
        "enum": [
          "auto",
          "reference",
          "edit",
          "extend"
        ],
        "title": "Omni Reference Task Type",
        "name": "omni_reference_task_type",
        "type": "string",
        "description": "Hint for the omni-reference subtask type, so ratio/duration constraint mismatches are caught at submission time instead of failing asynchronously. auto lets the model infer the type from the prompt; reference has no special ratio/duration constraints; edit and extend both require ratio=adaptive (edit additionally requires duration=-1). The model still re-derives the actual task type from the prompt during processing, so a mismatch can still surface as an async error.",
        "default": "auto"
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
    "id": "seedance-2.5-spicy-omni-reference-480p",
    "name": "Seedance 2.5 Spicy Omni Reference 480p",
    "endpoint": "seedance-2.5-spicy-omni-reference-480p",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a calm cinematic park sequence. Use the images for environment style, the video clips for camera motion and street rhythm, and the audio as mood reference."
        ],
        "description": "Text prompt describing the desired video, referencing the provided images, video clips, and audio as environment, motion, and mood cues.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "videos_list": {
        "examples": [],
        "description": "Reference video URLs. Up to 10 clips.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Videos",
        "name": "videos_list",
        "maxItems": 10
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs. Up to 10 files.",
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
      "omni_reference_task_type": {
        "enum": [
          "auto",
          "reference",
          "edit",
          "extend"
        ],
        "title": "Omni Reference Task Type",
        "name": "omni_reference_task_type",
        "type": "string",
        "description": "Hint for the omni-reference subtask type, so ratio/duration constraint mismatches are caught at submission time instead of failing asynchronously. auto lets the model infer the type from the prompt; reference has no special ratio/duration constraints; edit and extend both require ratio=adaptive (edit additionally requires duration=-1). The model still re-derives the actual task type from the prompt during processing, so a mismatch can still surface as an async error.",
        "default": "auto"
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
    "id": "seedance-2.5-intl-omni-reference-1080p",
    "name": "Seedance 2.5 Intl Omni Reference 1080p",
    "endpoint": "seedance-2.5-intl-omni-reference-1080p",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a calm cinematic park sequence. Use the images for environment style, the video clips for camera motion and street rhythm, and the audio as mood reference."
        ],
        "description": "Text prompt describing the desired video, referencing the provided images, video clips, and audio as environment, motion, and mood cues.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "videos_list": {
        "examples": [],
        "description": "Reference video URLs. Up to 10 clips.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Videos",
        "name": "videos_list",
        "maxItems": 10
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs. Up to 10 files.",
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
      "omni_reference_task_type": {
        "enum": [
          "auto",
          "reference",
          "edit",
          "extend"
        ],
        "title": "Omni Reference Task Type",
        "name": "omni_reference_task_type",
        "type": "string",
        "description": "Hint for the omni-reference subtask type, so ratio/duration constraint mismatches are caught at submission time instead of failing asynchronously. auto lets the model infer the type from the prompt; reference has no special ratio/duration constraints; edit and extend both require ratio=adaptive (edit additionally requires duration=-1). The model still re-derives the actual task type from the prompt during processing, so a mismatch can still surface as an async error.",
        "default": "auto"
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
    "id": "seedance-2.5-spicy-omni-reference-1080p",
    "name": "Seedance 2.5 Spicy Omni Reference 1080p",
    "endpoint": "seedance-2.5-spicy-omni-reference-1080p",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a calm cinematic park sequence. Use the images for environment style, the video clips for camera motion and street rhythm, and the audio as mood reference."
        ],
        "description": "Text prompt describing the desired video, referencing the provided images, video clips, and audio as environment, motion, and mood cues.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "videos_list": {
        "examples": [],
        "description": "Reference video URLs. Up to 10 clips.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Videos",
        "name": "videos_list",
        "maxItems": 10
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs. Up to 10 files.",
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
      "omni_reference_task_type": {
        "enum": [
          "auto",
          "reference",
          "edit",
          "extend"
        ],
        "title": "Omni Reference Task Type",
        "name": "omni_reference_task_type",
        "type": "string",
        "description": "Hint for the omni-reference subtask type, so ratio/duration constraint mismatches are caught at submission time instead of failing asynchronously. auto lets the model infer the type from the prompt; reference has no special ratio/duration constraints; edit and extend both require ratio=adaptive (edit additionally requires duration=-1). The model still re-derives the actual task type from the prompt during processing, so a mismatch can still surface as an async error.",
        "default": "auto"
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
    "id": "seedance-2.5-intl-omni-reference-4k",
    "name": "Seedance 2.5 Intl Omni Reference 4K",
    "endpoint": "seedance-2.5-intl-omni-reference-4k",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a calm cinematic park sequence. Use the images for environment style, the video clips for camera motion and street rhythm, and the audio as mood reference."
        ],
        "description": "Text prompt describing the desired video, referencing the provided images, video clips, and audio as environment, motion, and mood cues.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "videos_list": {
        "examples": [],
        "description": "Reference video URLs. Up to 10 clips.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Videos",
        "name": "videos_list",
        "maxItems": 10
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs. Up to 10 files.",
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
      "omni_reference_task_type": {
        "enum": [
          "auto",
          "reference",
          "edit",
          "extend"
        ],
        "title": "Omni Reference Task Type",
        "name": "omni_reference_task_type",
        "type": "string",
        "description": "Hint for the omni-reference subtask type, so ratio/duration constraint mismatches are caught at submission time instead of failing asynchronously. auto lets the model infer the type from the prompt; reference has no special ratio/duration constraints; edit and extend both require ratio=adaptive (edit additionally requires duration=-1). The model still re-derives the actual task type from the prompt during processing, so a mismatch can still surface as an async error.",
        "default": "auto"
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
    "id": "seedance-2.5-spicy-omni-reference-4k",
    "name": "Seedance 2.5 Spicy Omni Reference 4K",
    "endpoint": "seedance-2.5-spicy-omni-reference-4k",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a calm cinematic park sequence. Use the images for environment style, the video clips for camera motion and street rhythm, and the audio as mood reference."
        ],
        "description": "Text prompt describing the desired video, referencing the provided images, video clips, and audio as environment, motion, and mood cues.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs. Up to 30 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 30
      },
      "videos_list": {
        "examples": [],
        "description": "Reference video URLs. Up to 10 clips.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Videos",
        "name": "videos_list",
        "maxItems": 10
      },
      "audios_list": {
        "examples": [],
        "description": "Reference audio URLs. Up to 10 files.",
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
      "omni_reference_task_type": {
        "enum": [
          "auto",
          "reference",
          "edit",
          "extend"
        ],
        "title": "Omni Reference Task Type",
        "name": "omni_reference_task_type",
        "type": "string",
        "description": "Hint for the omni-reference subtask type, so ratio/duration constraint mismatches are caught at submission time instead of failing asynchronously. auto lets the model infer the type from the prompt; reference has no special ratio/duration constraints; edit and extend both require ratio=adaptive (edit additionally requires duration=-1). The model still re-derives the actual task type from the prompt during processing, so a mismatch can still surface as an async error.",
        "default": "auto"
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
    "id": "wan2.7-image-to-video-spicy",
    "name": "Wan 2.7 Spicy",
    "endpoint": "wan2.7-image-to-video-spicy",
    "family": "wan2.7-spicy",
    "imageField": "image_url",
    "aspectRatioMode": "inherited",
    "hasPrompt": true,
    "inputs": {
      "image_url": {
        "examples": [],
        "type": "string",
        "title": "Image URL",
        "name": "image_url",
        "description": "Source image to animate into video",
        "field": "image"
      },
      "prompt": {
        "examples": [],
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Positive text prompt describing the desired motion and scene"
      },
      "negative_prompt": {
        "examples": [],
        "type": "string",
        "title": "Negative Prompt",
        "name": "negative_prompt",
        "description": "What not to generate"
      },
      "audio_url": {
        "examples": [],
        "type": "string",
        "title": "Audio URL",
        "name": "audio_url",
        "description": "Optional audio file to guide generation",
        "field": "audio"
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Output video resolution",
        "default": "720p"
      },
      "duration": {
        "enum": [
          5,
          10,
          15
        ],
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds",
        "default": 5
      },
      "shot_type": {
        "enum": [
          "single",
          "multi"
        ],
        "type": "string",
        "title": "Shot Type",
        "name": "shot_type",
        "description": "Single continuous shot or multi-shot sequence",
        "default": "single"
      },
      "enable_prompt_expansion": {
        "type": "boolean",
        "title": "Enable Prompt Expansion",
        "name": "enable_prompt_expansion",
        "description": "Automatically expand and optimize the prompt",
        "default": false
      },
      "seed": {
        "type": "int",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed for reproducibility (-1 for random)",
        "default": -1,
        "minValue": -1,
        "maxValue": 2147483647,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.6-image-to-video-spicy",
    "name": "Wan 2.6 Spicy",
    "endpoint": "wan2.6-image-to-video-spicy",
    "family": "wan2.6-spicy",
    "imageField": "image_url",
    "aspectRatioMode": "inherited",
    "hasPrompt": true,
    "inputs": {
      "image_url": {
        "examples": [],
        "type": "string",
        "title": "Image URL",
        "name": "image_url",
        "description": "Source image to animate into video",
        "field": "image"
      },
      "prompt": {
        "examples": [],
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Positive text prompt describing the desired motion and scene"
      },
      "negative_prompt": {
        "examples": [],
        "type": "string",
        "title": "Negative Prompt",
        "name": "negative_prompt",
        "description": "What not to generate"
      },
      "audio_url": {
        "examples": [],
        "type": "string",
        "title": "Audio URL",
        "name": "audio_url",
        "description": "Optional audio file to guide generation",
        "field": "audio"
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Output video resolution",
        "default": "720p"
      },
      "duration": {
        "enum": [
          5,
          10,
          15
        ],
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Video duration in seconds",
        "default": 5
      },
      "shot_type": {
        "enum": [
          "single",
          "multi"
        ],
        "type": "string",
        "title": "Shot Type",
        "name": "shot_type",
        "description": "Single continuous shot or multi-shot sequence",
        "default": "single"
      },
      "enable_prompt_expansion": {
        "type": "boolean",
        "title": "Enable Prompt Expansion",
        "name": "enable_prompt_expansion",
        "description": "Automatically expand and optimize the prompt",
        "default": false
      },
      "seed": {
        "type": "int",
        "title": "Seed",
        "name": "seed",
        "description": "Random seed for reproducibility (-1 for random)",
        "default": -1,
        "minValue": -1,
        "maxValue": 2147483647,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "minimax-h3-image-to-video-lora",
    "name": "MiniMax H3 Image to Video LoRA",
    "endpoint": "minimax-h3-image-to-video-lora",
    "family": "minimax-h3",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "aspectRatioMode": "inherited",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired motion, scene, and soundtrack.",
        "examples": [
          "A cinematic ocean wave at sunrise, highly detailed"
        ]
      },
      "image_url": {
        "type": "string",
        "field": "image",
        "title": "Start Frame Image URL",
        "name": "image_url",
        "description": "First-frame image URL. The output canvas follows this image's aspect ratio.",
        "examples": [
          ""
        ]
      },
      "last_image": {
        "examples": [
          ""
        ],
        "description": "Optional last-frame image URL for frame interpolation.",
        "field": "image",
        "type": "string",
        "title": "Last Frame Image URL",
        "name": "last_image"
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
    "id": "minimax-h3-reference-to-video-lora",
    "name": "MiniMax H3 Reference to Video LoRA",
    "endpoint": "minimax-h3-reference-to-video-lora",
    "family": "minimax-h3",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired video. Refer to reference inputs as <Picture 1..9>, <Video 1..3>, and <Audio 1..3>.",
        "examples": [
          "A cinematic ocean wave at sunrise with <Picture 1> character walking, highly detailed"
        ]
      },
      "images_list": {
        "examples": [],
        "description": "Reference image URLs (up to 9).",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Image URLs",
        "name": "images_list",
        "maxItems": 9
      },
      "videos_list": {
        "examples": [],
        "description": "Reference video URLs (up to 3). Total reference video duration is budgeted to 15 seconds.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Video URLs",
        "name": "videos_list",
        "maxItems": 3
      },
      "audios_list": {
        "examples": [],
        "description": "Standalone reference audio URLs (up to 3, trimmed to 15s each).",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Audio URLs",
        "name": "audios_list",
        "maxItems": 3
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
    "id": "ltx-2.5-image-to-video",
    "name": "LTX 2.5",
    "endpoint": "ltx-2.5-image-to-video",
    "family": "ltx2.5",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "aspectRatioMode": "inherited",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "A cinematic camera zoom into the scene with dynamic natural motion."
        ],
        "description": "The positive prompt for the generation.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [],
        "field": "image",
        "description": "The starting frame image for generation.",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
      },
      "last_image": {
        "examples": [],
        "field": "image",
        "description": "Optional last-frame image for the generation.",
        "type": "string",
        "title": "Last Image URL",
        "name": "last_image"
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
    "id": "wan3.0-reference-to-video",
    "name": "Wan 3.0 Reference to Video",
    "endpoint": "wan3.0-reference-to-video",
    "family": "wan3.0",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the video you want to create. Reference media are identified by their array order.",
        "examples": [
          "The two people from the reference images meet on the rainy street shown in the reference video."
        ]
      },
      "images_list": {
        "examples": [],
        "description": "Up to 10 reference images for visual coherence guidance.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Image URLs",
        "name": "images_list",
        "maxItems": 10
      },
      "videos_list": {
        "examples": [],
        "description": "Up to 5 reference video clips (MP4/MOV, 1-15s each); total reference + generated duration must not exceed 30s.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Video URLs",
        "name": "videos_list",
        "maxItems": 5
      },
      "audios_list": {
        "examples": [],
        "description": "Up to 5 reference audio clips (total duration up to 15s) for soundtrack synchronization.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Audio URLs",
        "name": "audios_list",
        "maxItems": 5
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
        "description": "Enable deep-thinking mode for complex scene understanding.",
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
    "id": "wan3.0-prime-image-to-video",
    "name": "Wan 3.0 Prime",
    "endpoint": "wan3.0-prime-image-to-video",
    "family": "wan3.0",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the motion and scene you want to create.",
        "examples": [
          "The camera slowly pushes in as a breeze moves through the subject's hair."
        ]
      },
      "image_url": {
        "type": "string",
        "title": "Image URL",
        "name": "image_url",
        "description": "Source image to animate.",
        "field": "image",
        "examples": []
      },
      "last_image": {
        "type": "string",
        "title": "Last Frame Image URL",
        "name": "last_image",
        "description": "Optional end-frame image to guide how the video should end.",
        "field": "image",
        "examples": []
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
    "id": "wan3.0-prime-reference-to-video",
    "name": "Wan 3.0 Prime Reference to Video",
    "endpoint": "wan3.0-prime-reference-to-video",
    "family": "wan3.0",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the video you want to create. Reference media are identified by their array order.",
        "examples": [
          "The two people from the reference images meet on the rainy street shown in the reference video."
        ]
      },
      "images_list": {
        "examples": [],
        "description": "Up to 10 reference images for visual coherence guidance.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Image URLs",
        "name": "images_list",
        "maxItems": 10
      },
      "videos_list": {
        "examples": [],
        "description": "Up to 5 reference video clips (MP4/MOV, 1-15s each); total reference + generated duration must not exceed 30s.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Video URLs",
        "name": "videos_list",
        "maxItems": 5
      },
      "audios_list": {
        "examples": [],
        "description": "Up to 5 reference audio clips (total duration up to 15s) for soundtrack synchronization.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Audio URLs",
        "name": "audios_list",
        "maxItems": 5
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
        "description": "Enable deep-thinking mode for complex scene understanding.",
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
    "id": "wan3.0-spicy-reference-to-video",
    "name": "Wan 3.0 Spicy Reference to Video",
    "endpoint": "wan3.0-spicy-reference-to-video",
    "family": "wan3.0-spicy",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the bold, high-motion video you want to create. Reference media are identified by their array order.",
        "examples": [
          "The two people from the reference images meet on the rainy street shown in the reference video."
        ]
      },
      "images_list": {
        "examples": [],
        "description": "Up to 10 reference images for visual coherence guidance.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Image URLs",
        "name": "images_list",
        "maxItems": 10
      },
      "videos_list": {
        "examples": [],
        "description": "Up to 5 reference video clips (MP4/MOV, 1-15s each); total reference + generated duration must not exceed 30s.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Video URLs",
        "name": "videos_list",
        "maxItems": 5
      },
      "audios_list": {
        "examples": [],
        "description": "Up to 5 reference audio clips (total duration up to 15s) for soundtrack synchronization.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Audio URLs",
        "name": "audios_list",
        "maxItems": 5
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
        "description": "Enable deep-thinking mode for complex scene understanding.",
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
    "id": "flux-3-start-end-to-video",
    "name": "FLUX 3 Start End to Video",
    "endpoint": "flux-3-start-end-to-video",
    "family": "flux-3",
    "imageField": "image_url",
    "lastImageField": "end_image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The scene morphs from a busy daytime street to the same street quiet at night, streetlights turning on."
        ],
        "description": "Describe the action or transformation connecting the start and end images.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "Initial visual keyframe for the transition.",
        "field": "image",
        "type": "string",
        "title": "Start Image URL",
        "name": "image_url"
      },
      "end_image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "Final visual keyframe for the transition.",
        "field": "image",
        "type": "string",
        "title": "End Image URL",
        "name": "end_image_url"
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
    "id": "gemini-omni-flash-1-1-image-to-video",
    "name": "Gemini Omni Flash 1.1",
    "endpoint": "gemini-omni-flash-1-1-image-to-video",
    "family": "gemini-omni",
    "imageField": "first_frame_url",
    "lastImageField": "last_frame_url",
    "hasPrompt": true,
    "promptRequired": true,
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
      "first_frame_url": {
        "field": "image",
        "type": "string",
        "title": "First Frame Image",
        "name": "first_frame_url",
        "description": "Starting keyframe image the video is generated from."
      },
      "last_frame_url": {
        "field": "image",
        "type": "string",
        "title": "Last Frame Image",
        "name": "last_frame_url",
        "description": "Optional ending keyframe image. Requires first_frame_url to also be set."
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
    "id": "gemini-omni-flash-1-2-image-to-video",
    "name": "Gemini Omni 1.2 Flash Image to Video",
    "endpoint": "gemini-omni-flash-1-2-image-to-video",
    "family": "gemini-omni",
    "imageField": "first_frame_url",
    "lastImageField": "last_frame_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the scene, action, camera movement, and sound.",
        "examples": [
          "The camera slowly pushes in as the subject turns and smiles, soft ambient music"
        ]
      },
      "first_frame_url": {
        "field": "image",
        "type": "string",
        "title": "First Frame",
        "name": "first_frame_url",
        "description": "Image used as the first frame of the video."
      },
      "last_frame_url": {
        "field": "image",
        "type": "string",
        "title": "Last Frame",
        "name": "last_frame_url",
        "description": "Optional image used as the last frame. Requires first_frame_url; duration is then limited to 3-10 seconds."
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
    "id": "gemini-omni-flash-1-1-reference-to-video",
    "name": "Gemini Omni 1.1 Flash Reference",
    "endpoint": "gemini-omni-flash-1-1-reference-to-video",
    "family": "gemini-omni",
    "imageField": "image_urls",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt describing the video. Reference media is addressed in the prompt in list order, e.g. <IMAGE_REF_0>, <VIDEO_REF_0>.",
        "examples": [
          "A cat inspired by <IMAGE_REF_0> walks through the setting in <VIDEO_REF_0>."
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
        "description": "URLs of reference images to incorporate into the video, referenced in the prompt as <IMAGE_REF_0>, <IMAGE_REF_1>, etc.",
        "maxItems": 7
      },
      "reference_video_urls": {
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Videos",
        "name": "reference_video_urls",
        "description": "Up to 3 reference video clips, each at most 3 seconds long, referenced in the prompt as <VIDEO_REF_0>, <VIDEO_REF_1>, etc.",
        "maxItems": 3
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
          "360p",
          "720p",
          "1080p",
          "4k"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Output resolution. Billed per second of generated video: $0.048/s at 360p, $0.16/s at 720p, $0.24/s at 1080p, $0.48/s at 4K.",
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration (seconds)",
        "name": "duration",
        "description": "Duration of the generated video, in seconds.",
        "minValue": 3,
        "maxValue": 10,
        "default": 8
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "gemini-omni-flash-1-2-reference-to-video",
    "name": "Gemini Omni 1.2 Flash Reference to Video",
    "endpoint": "gemini-omni-flash-1-2-reference-to-video",
    "family": "gemini-omni",
    "imageField": "image_urls",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the scene, action, camera movement, and sound.",
        "examples": [
          "The character from the first image walks through the city in the second image at sunset, ambient street sounds"
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
        "description": "1-6 reference images used for subject, scene, style, or storyboard reference (not a starting keyframe).",
        "minItems": 1,
        "maxItems": 6
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
    "id": "minimax-h3-image-to-video-spicy",
    "name": "MiniMax H3 Spicy",
    "endpoint": "minimax-h3-image-to-video-spicy",
    "family": "minimax-h3-spicy",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "aspectRatioMode": "inherited",
    "hasPrompt": true,
    "inputs": {
      "image_url": {
        "type": "string",
        "title": "Image URL",
        "name": "image_url",
        "field": "image",
        "description": "Required starting image URL. The output canvas follows this image's aspect ratio.",
        "examples": [
          "https://cdn.muapi.ai/assets/image_download_11.avif"
        ]
      },
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional description of the scene, action, camera movement, lighting, and mood.",
        "examples": [
          "A cinematic ocean wave at sunrise, highly detailed"
        ]
      },
      "last_image": {
        "type": "string",
        "title": "Last Image URL",
        "name": "last_image",
        "field": "image",
        "description": "Optional final-frame image URL for interpolation."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "768p"
        ],
        "default": "480p",
        "description": "Output video resolution."
      },
      "duration": {
        "type": "integer",
        "title": "Duration",
        "name": "duration",
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
        "default": 5,
        "description": "Output video duration in seconds."
      },
      "seed": {
        "type": "integer",
        "title": "Seed",
        "name": "seed",
        "default": -1,
        "description": "Random seed. Negative values use a random seed."
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "happy-horse-1-image-to-video",
    "name": "Happy Horse 1 Image to Video",
    "endpoint": "happy-horse-1-image-to-video",
    "family": "happy-horse-1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional text description guiding the motion.",
        "examples": [
          "The motorcycle suddenly accelerates uncontrollably through traffic while the horse struggles to stay balanced. Cars swerve out of the way, sparks scrape across the road during sharp turns, and the camera tracks inches away from the speeding bike."
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
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-image-to-video-720p.jpg"
        ],
        "description": "Upload or provide the image to animate.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image",
        "name": "images_list",
        "maxItems": 1
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
    "description": "Happy Horse 1.0 Image to Video — bring still images to life with fluid, expressive animation. Selectable output resolution (720p/1080p) — price scales with the resolution chosen.",
    "example_url": "https://cdn.muapi.ai/assets/f4310d95-79d1-4b55-ac05-17d13971f056.avif",
    "image_url": "https://cdn.muapi.ai/assets/f4310d95-79d1-4b55-ac05-17d13971f056.avif"
  },
  {
    "id": "happy-horse-1-reference-to-video",
    "name": "Happy Horse 1 Reference to Video",
    "endpoint": "happy-horse-1-reference-to-video",
    "family": "happy-horse-1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired video. Up to 5,000 non-Chinese (or 2,500 Chinese) characters.",
        "examples": [
          "Use @image1 riding inside @image2 at extreme speed through a massive supermarket. The rocket cart blasts through aisles, launches over checkout counters, and sends products exploding everywhere while the camera chases closely behind through the chaos."
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
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-720p-1.jpg",
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-720p-2.jpg"
        ],
        "description": "1-9 reference image URLs. JPEG/PNG/WEBP, >=400px shortest side, <=10 MB each.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 9
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
    "description": "Happy Horse 1.0 Reference to Video - generate expressive video clips conditioned on 1-9 reference images plus a text prompt. Selectable output resolution (720p/1080p) - price scales with the resolution chosen.",
    "example_url": "https://cdn.muapi.ai/assets/0c9eb59d-a77d-42ac-b62a-8a3b2151bb1d.avif",
    "image_url": "https://cdn.muapi.ai/assets/0c9eb59d-a77d-42ac-b62a-8a3b2151bb1d.avif"
  },
  {
    "id": "happy-horse-1.1-image-to-video",
    "name": "Happy Horse 1.1 Image to Video",
    "endpoint": "happy-horse-1.1-image-to-video",
    "family": "happy-horse-1.1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional text description guiding the motion.",
        "examples": [
          "A tiny horse wearing boxing gloves stands in front of a massive battle robot. The horse suddenly charges fearlessly and punches the robot so hard that cars flip over."
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
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-image-to-video-1080p.jpg"
        ],
        "description": "Upload or provide the image to animate.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image",
        "name": "images_list",
        "maxItems": 1
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
    "description": "Happy Horse 1.1 Image to Video — bring still images to life with fluid, expressive animation. Selectable output resolution (720p/1080p) — price scales with the resolution chosen.",
    "example_url": "https://cdn.muapi.ai/assets/7135055f-1ea3-47fb-addc-781187b37eca.avif",
    "image_url": "https://cdn.muapi.ai/assets/7135055f-1ea3-47fb-addc-781187b37eca.avif"
  },
  {
    "id": "happy-horse-1.1-reference-to-video",
    "name": "Happy Horse 1.1 Reference to Video",
    "endpoint": "happy-horse-1.1-reference-to-video",
    "family": "happy-horse-1.1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the desired video. Up to 5,000 characters.",
        "examples": [
          "Place @image1 inside @image2 running across countertops while giant cooking disasters happen everywhere. Exploding soup pots, flying vegetables, and fire bursts create chaos."
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
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-1080p-1.jpg",
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-1080p-2.jpg"
        ],
        "description": "1-9 reference image URLs. JPEG/PNG/WEBP, >=400px shortest side, <=10 MB each.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 9
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
    "description": "Happy Horse 1.1 Reference to Video — generate video conditioned on 1-9 reference images plus a text prompt. Selectable output resolution (720p/1080p) — price scales with the resolution chosen.",
    "example_url": "https://cdn.muapi.ai/assets/27cdc430-3695-43f1-952a-4fe968d88862.avif",
    "image_url": "https://cdn.muapi.ai/assets/27cdc430-3695-43f1-952a-4fe968d88862.avif"
  },
  {
    "id": "minimax-h3-max-image-to-video",
    "name": "MiniMax H3 Max Image to Video",
    "endpoint": "minimax-h3-max-image-to-video",
    "family": "minimax-h3-max",
    "imageField": "image_url",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the motion, action, and camera movement.",
        "examples": [
          "The camera slowly pushes in as the subject turns toward the light and fabric moves in a soft breeze."
        ]
      },
      "image_url": {
        "type": "string",
        "title": "Image URL",
        "name": "image_url",
        "description": "Starting frame image. The output canvas follows this image.",
        "field": "image",
        "examples": []
      },
      "end_image_url": {
        "type": "string",
        "title": "End Image URL",
        "name": "end_image_url",
        "description": "Optional final frame image. Can be used alone for end-keyframe generation.",
        "field": "image",
        "examples": []
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
        "description": "Prompt rewriting effort. 'quality' can add up to ~30s of processing."
      }
    },
    "provider": "minimax",
    "provider_name": "MINIMAX",
    "description": "MiniMax H3 Max Image to Video animates a source image with a motion prompt at up to 1080p through the Muapi API.",
    "example_url": "https://cdn.muapi.ai/assets/image_download_27.avif",
    "image_url": "https://cdn.muapi.ai/assets/image_download_27.avif"
  },
  {
    "id": "minimax-h3-max-reference-to-video",
    "name": "MiniMax H3 Max Reference to Video",
    "endpoint": "minimax-h3-max-reference-to-video",
    "family": "minimax-h3-max",
    "imageField": "reference_images",
    "videoField": "reference_videos",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the video scene and how the references should be used (e.g. 'Image 1', 'Video 1').",
        "examples": [
          "Use the references to create a cinematic product reveal with a slow camera orbit."
        ]
      },
      "reference_images": {
        "type": "array",
        "title": "Reference Images",
        "name": "reference_images",
        "description": "Reference image URLs (up to 9). Provide at least one image or video reference. Max 12 combined reference files.",
        "maxItems": 9,
        "field": "images_list",
        "items": {
          "type": "string"
        },
        "examples": []
      },
      "reference_videos": {
        "type": "array",
        "title": "Reference Videos",
        "name": "reference_videos",
        "description": "Reference video URLs (up to 3; 2-15s each, 15s combined max). Provide at least one image or video reference.",
        "maxItems": 3,
        "field": "videos_list",
        "items": {
          "type": "string"
        },
        "examples": []
      },
      "reference_audios": {
        "type": "array",
        "title": "Reference Audio",
        "name": "reference_audios",
        "description": "Optional reference audio URLs (up to 3; 2-15s each, 15s combined max). Audio cannot be used alone.",
        "maxItems": 3,
        "field": "audios_list",
        "items": {
          "type": "string"
        },
        "examples": []
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "adaptive",
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "default": "adaptive"
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
        "description": "Prompt rewriting effort. 'quality' can add up to ~30s of processing."
      }
    },
    "provider": "minimax",
    "provider_name": "MINIMAX",
    "description": "MiniMax H3 Max Reference to Video creates high-fidelity video from a prompt plus image, video, and optional audio references through the Muapi API.",
    "example_url": "https://cdn.muapi.ai/assets/image_download_26.avif",
    "image_url": "https://cdn.muapi.ai/assets/image_download_26.avif"
  },
  {
    "id": "minimax-h3-max-turbo-image-to-video",
    "name": "MiniMax H3 Max Turbo Image to Video",
    "endpoint": "minimax-h3-max-turbo-image-to-video",
    "family": "minimax-h3-max",
    "imageField": "image_url",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the motion, action, and camera movement.",
        "examples": [
          "The camera slowly pushes in as the subject turns toward the light and fabric moves in a soft breeze."
        ]
      },
      "image_url": {
        "type": "string",
        "title": "Image URL",
        "name": "image_url",
        "description": "Starting frame image. The output canvas follows this image.",
        "field": "image",
        "examples": []
      },
      "end_image_url": {
        "type": "string",
        "title": "End Image URL",
        "name": "end_image_url",
        "description": "Optional final frame image. Can be used alone for end-keyframe generation.",
        "field": "image",
        "examples": []
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
    "description": "MiniMax H3 Max Turbo Image to Video is a faster, lower-cost H3 Max mode that animates a source image at up to 1080p through the Muapi API.",
    "example_url": "https://cdn.muapi.ai/assets/image_download_27.avif",
    "image_url": "https://cdn.muapi.ai/assets/image_download_27.avif"
  },
  {
    "id": "seedance-2-spicy-omni-reference",
    "name": "Seedance 2 Spicy Omni Reference",
    "endpoint": "seedance-2-spicy-omni-reference",
    "family": "sd-2",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video description. Use @image1…@image9 to reference images, @video1…@video3 for videos, and @audio1…@audio3 for audio. Use @character:<request_id> for a Seedance 2 character sheet or @omni-character:<char_id> for a trained omni-character. Multiple characters are supported.",
        "examples": [
          "@image1 is the main character. The person walks along a city street at sunset, cinematic lighting."
        ]
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
        "description": "Output resolution. Price scales with resolution: 720p is cheapest, 4K is most expensive.",
        "default": "720p"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "Up to 9 reference image URLs (JPEG/PNG/WebP). Each Nth image corresponds to @imageN in the prompt.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 9
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
        "description": "Up to 3 reference audio files (MP3/WAV, total max 15s). Each Nth audio corresponds to @audioN in the prompt.",
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
    "provider_name": "KINOVI",
    "description": "Seedance 2 Spicy Omni Reference by ByteDance. Same VIP-tier priority routing as Seedance 2 VIP Omni Reference, generating videos from up to 9 image references, 3 video clips, and 3 audio references, with reduced content-safety filtering for more creative freedom. Reference materials in your prompt with @image1…@image9, @video1…@video3, and @audio1…@audio3. Selectable output resolution (720p/1080p/4K) — price scales with the resolution chosen.",
    "example_url": "https://cdn.muapi.ai/assets/75c82e2e-3772-4289-9f7b-2cb794643bea.avif",
    "image_url": "https://cdn.muapi.ai/assets/75c82e2e-3772-4289-9f7b-2cb794643bea.avif"
  },
  {
    "id": "seedance-2-spicy-omni-reference-fast",
    "name": "Seedance 2 Spicy Omni Reference Fast",
    "endpoint": "seedance-2-spicy-omni-reference-fast",
    "family": "sd-2",
    "imageField": "images_list",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video description. Use @image1…@image9 to reference images, @video1…@video3 for videos, and @audio1…@audio3 for audio. Use @character:<request_id> for a Seedance 2 character sheet or @omni-character:<char_id> for a trained omni-character. Multiple characters are supported.",
        "examples": [
          "@image1 is the main character. The person walks along a city street at sunset, cinematic lighting."
        ]
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
        "description": "Output resolution. Price scales with resolution: 720p is cheapest, 4K is most expensive.",
        "default": "720p"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "Up to 9 reference image URLs (JPEG/PNG/WebP). Each Nth image corresponds to @imageN in the prompt.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 9
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
        "description": "Up to 3 reference audio files (MP3/WAV, total max 15s). Each Nth audio corresponds to @audioN in the prompt.",
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
    "provider_name": "KINOVI",
    "description": "Seedance 2 Spicy Omni Reference Fast by ByteDance. Faster video generation using up to 9 image references, up to 3 video clips, and up to 3 audio references with priority routing, and reduced content-safety filtering for more creative freedom. Reference materials in your prompt with @image1…@image9, @video1…@video3, and @audio1…@audio3. Selectable output resolution (720p/1080p/4K) — price scales with the resolution chosen.",
    "example_url": "https://cdn.muapi.ai/assets/75c82e2e-3772-4289-9f7b-2cb794643bea.avif",
    "image_url": "https://cdn.muapi.ai/assets/75c82e2e-3772-4289-9f7b-2cb794643bea.avif"
  }
,
{
  "id": "seedance-2.1-image-to-video",
  "name": "Image to Video",
  "endpoint": "seedance-2.1-image-to-video",
  "family": "seedance-2.1",
  "description": "Seedance 2.1 Image-to-Video converts a single still image into a high-fidelity cinematic video. This next-generation model delivers enhanced temporal consistency, improved motion realism, and smarter prompt adherence — producing smooth, coherent clips up to 1080p.",
  "inputs": {
    "prompt": {
      "examples": [
        "Add a slow cinematic orbit around the subject, gentle parallax depth, fog drifting naturally, sky colors shifting while preserving original lighting and mood."
      ],
      "description": "Text prompt describing the video motion and style.",
      "type": "string",
      "title": "Prompt",
      "name": "prompt"
    },
    "image_url": {
      "examples": [
        "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v1.5-pro-i2v.jpg"
      ],
      "description": "URL of the input image to animate into video.",
      "field": "image",
      "type": "string",
      "title": "Image URL",
      "name": "image_url"
    },
    "last_image": {
      "examples": [
        null
      ],
      "description": "Optional URL of the last frame image for first-last frame control.",
      "field": "image",
      "type": "string",
      "title": "Last Image",
      "name": "last_image"
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
    "prompt",
    "image_url"
  ],
  "hasPrompt": true,
  "promptRequired": true,
  "imageField": "image_url",
  "imageOptional": false,
  "provider": "bytedance",
  "provider_name": "WAVESPEED_AI",
  "example_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v1.5-pro-i2v.mp4",
  "image_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v1.5-pro-i2v.avif"
},
{
  "id": "flux-3-omni",
  "name": "Omni Reference",
  "endpoint": "flux-3-omni",
  "family": "flux-3",
  "description": "FLUX 3 Omni is Black Forest Labs' Omni Reference mode — it takes multiple reference images and video clips at once and generates new images or video that keep the same subject, style, and scene consistent across every output. Listed by Black Forest Labs as coming soon.",
  "inputs": {
    "prompt": {
      "examples": [
        "Keep this character and outfit consistent while placing them in a rooftop garden at sunset."
      ],
      "description": "Text prompt describing the desired output, guided by the reference images/videos.",
      "type": "string",
      "title": "Prompt",
      "name": "prompt"
    },
    "images_list": {
      "examples": [
        "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
      ],
      "description": "Reference image(s) to guide subject, style, or scene.",
      "field": "images_list",
      "type": "array",
      "items": {
        "type": "string"
      },
      "title": "Image URLs",
      "name": "images_list",
      "maxItems": 10
    },
    "videos_list": {
      "examples": [
        "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/flux-3-video.mp4"
      ],
      "description": "Reference video(s) to guide motion, style, or scene.",
      "field": "videos_list",
      "type": "array",
      "items": {
        "type": "string"
      },
      "title": "Video URLs",
      "name": "videos_list",
      "maxItems": 4
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
      "description": "Aspect ratio of the output.",
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
      "description": "Output resolution.",
      "default": "720p"
    }
  },
  "required": [
    "prompt"
  ],
  "hasPrompt": true,
  "promptRequired": true,
  "imageField": "images_list",
  "maxImages": 10,
  "imageOptional": false,
  "videoField": "videos_list",
  "maxVideos": 4,
  "provider": "blackforest",
  "provider_name": "BLACKFOREST_LABS",
  "example_url": "https://cdn.muapi.ai/assets/fa0367e9-beb6-4927-bf81-741170302e37.avif",
  "image_url": "https://cdn.muapi.ai/assets/fa0367e9-beb6-4927-bf81-741170302e37.avif"
},
{
  "id": "grok-imagine-video-1-5-image-to-video",
  "name": "Grok Imagine Video 1.5 Image to Video",
  "endpoint": "grok-imagine-video-1-5-image-to-video",
  "family": "grok-imagine-video-1-5",
  "description": "Generate videos with Grok Imagine Video 1.5 (xAI) by animating an image, with native audio, up to 15 seconds.",
  "inputs": {
    "prompt": {
      "type": "string",
      "title": "Prompt",
      "name": "prompt",
      "description": "Text description of the video. Optional; describes the motion.",
      "examples": [
        "A dog running on a sunny beach, cinematic slow motion."
      ]
    },
    "image_url": {
      "type": "string",
      "title": "Image URL",
      "name": "image_url",
      "field": "image",
      "description": "Image to animate. The video follows this image's aspect ratio.",
      "examples": []
    },
    "last_image": {
      "type": "string",
      "title": "Last Frame Image URL",
      "name": "last_image",
      "field": "image",
      "description": "Optional last-frame image. When provided the video interpolates from the first to the last frame; resolution is limited to 480p/720p.",
      "examples": []
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
      "description": "Ignored — the video uses the input image's aspect ratio.",
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
    "image_url"
  ],
  "hasPrompt": true,
  "promptRequired": false,
  "imageField": "image_url",
  "imageOptional": false,
  "provider": "grok",
  "provider_name": "SEEGEN",
  "example_url": "https://cdn.muapi.ai/assets/grok-imagine-video-1-5-image-to-video.mp4",
  "image_url": "https://cdn.muapi.ai/assets/grok-imagine-video-1-5-image-to-video.avif"
},
{
  "id": "grok-imagine-video-1-5-reference-to-video",
  "name": "Grok Imagine Video 1.5 Reference to Video",
  "endpoint": "grok-imagine-video-1-5-reference-to-video",
  "family": "grok-imagine-video-1-5",
  "description": "Generate videos with Grok Imagine Video 1.5 (xAI) guided by multiple reference images, with native audio, up to 15 seconds.",
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
    "images_list": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "title": "Reference Images",
      "name": "images_list",
      "field": "images_list",
      "minItems": 1,
      "maxItems": 7,
      "description": "Reference image URLs that guide the video.",
      "examples": []
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
        "720p"
      ],
      "type": "string",
      "title": "Resolution",
      "name": "resolution",
      "description": "Output resolution.",
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
    "prompt",
    "images_list"
  ],
  "hasPrompt": true,
  "promptRequired": true,
  "imageField": "images_list",
  "maxImages": 7,
  "imageOptional": false,
  "provider": "grok",
  "provider_name": "SEEGEN",
  "example_url": "https://cdn.muapi.ai/assets/grok-imagine-video-1-5-reference-to-video.mp4",
  "image_url": "https://cdn.muapi.ai/assets/grok-imagine-video-1-5-reference-to-video.avif"
},
{
  "id": "grok-imagine-video-1-5-lite-image-to-video",
  "name": "Grok Imagine Video 1.5 Lite Image to Video",
  "endpoint": "grok-imagine-video-1-5-lite-image-to-video",
  "family": "grok-imagine-video-1-5",
  "description": "Generate videos with Grok Imagine Video 1.5 Lite (xAI) by animating an image, with native audio, up to 15 seconds.",
  "inputs": {
    "prompt": {
      "type": "string",
      "title": "Prompt",
      "name": "prompt",
      "description": "Text description of the video. Optional; describes the motion.",
      "examples": [
        "A dog running on a sunny beach, cinematic slow motion."
      ]
    },
    "image_url": {
      "type": "string",
      "title": "Image URL",
      "name": "image_url",
      "field": "image",
      "description": "Image to animate. The video follows this image's aspect ratio.",
      "examples": []
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
    "image_url"
  ],
  "hasPrompt": true,
  "promptRequired": false,
  "imageField": "image_url",
  "imageOptional": false,
  "provider": "grok",
  "provider_name": "SEEGEN",
  "example_url": "https://cdn.muapi.ai/assets/grok-imagine-video-1-5-lite-image-to-video.mp4",
  "image_url": "https://cdn.muapi.ai/assets/grok-imagine-video-1-5-lite-image-to-video.avif"
},
{
  "id": "kling-4.0-reference-to-video",
  "name": "Kling 4.0 Reference to Video",
  "endpoint": "kling-4.0-reference-to-video",
  "family": "kling-4",
  "description": "Kling 4.0 Reference-to-Video generates 3-30 second clips at 720p/1080p with native audio from reference images, reference videos, named elements and voices, all addressable in the prompt with @tags.",
  "inputs": {
    "prompt": {
      "type": "string",
      "title": "Prompt",
      "name": "prompt",
      "description": "Video description (max 8000 chars). Reference materials with @image_1, @video_1 or @name for elements/voices.",
      "examples": [
        "@Hero sits at the desk in @video_1, picks up the doll from @image_1, and greets using @Narrator"
      ]
    },
    "image_urls": {
      "examples": [],
      "description": "Up to 10 reference images. Mention as @image_1, @image_2, ... in array order.",
      "field": "images_list",
      "type": "array",
      "items": {
        "type": "string"
      },
      "title": "Reference Image URLs",
      "name": "image_urls",
      "maxItems": 10
    },
    "video_urls": {
      "examples": [],
      "description": "Up to 5 reference videos (2-30s each, 30s combined). Mention as @video_1, @video_2, ...",
      "field": "videos_list",
      "type": "array",
      "items": {
        "type": "string"
      },
      "title": "Reference Video URLs",
      "name": "video_urls",
      "maxItems": 5
    },
    "keep_original_sound": {
      "type": "boolean",
      "title": "Keep Original Sound",
      "name": "keep_original_sound",
      "description": "Keep the original audio of the reference videos (only applies when video_urls is set).",
      "default": false
    },
    "elements": {
      "type": "array",
      "title": "Elements",
      "name": "elements",
      "description": "Up to 7 named subjects (at most 3 can use video). Each needs 2-4 images or one 3-8 second video, not both. Mention each as @name.",
      "items": {
        "type": "object",
        "x-order-properties": [
          "name",
          "image_urls",
          "video_url",
          "tag",
          "description",
          "voice_url"
        ],
        "required": [
          "name"
        ],
        "properties": {
          "name": {
            "type": "string",
            "title": "Name",
            "description": "Reference name used in the prompt, e.g. Hero. Use 1-20 Chinese characters, letters, numbers, or underscores.",
            "minLength": 1,
            "maxLength": 20,
            "pattern": "^[\\u4e00-\\u9fa5A-Za-z0-9_]{1,20}$"
          },
          "image_urls": {
            "type": "array",
            "title": "Images",
            "description": "Add 2-4 images. The first image should show the main/front view; the rest are references. Cannot be used together with a video.",
            "field": "images_list",
            "items": {
              "type": "string",
              "format": "uri"
            },
            "minItems": 2,
            "maxItems": 4
          },
          "video_url": {
            "type": "string",
            "title": "Video",
            "description": "One 3-8 second continuous-shot video. Cannot be used together with images.",
            "field": "video",
            "format": "uri"
          },
          "tag": {
            "type": "string",
            "title": "Tag",
            "description": "Element category. Video elements are always characters.",
            "enum": [
              "character",
              "animal",
              "prop",
              "costume",
              "scene",
              "effect",
              "others"
            ],
            "enum_labels": {
              "character": "Character",
              "animal": "Animal",
              "prop": "Prop",
              "costume": "Costume",
              "scene": "Scene",
              "effect": "Effect",
              "others": "Others"
            },
            "default": "character"
          },
          "description": {
            "type": "string",
            "title": "Description",
            "description": "Optional details to help identify or describe this element (up to 100 characters).",
            "format": "text",
            "maxLength": 100
          },
          "voice_url": {
            "type": "string",
            "title": "Voice",
            "description": "Optional audio sample associated with this character.",
            "field": "audio",
            "format": "uri"
          }
        }
      },
      "maxItems": 7
    },
    "voices": {
      "type": "array",
      "title": "Voices",
      "name": "voices",
      "description": "Up to 3 named voices, each {name, audio_url}. Mention as @name.",
      "items": {
        "type": "object",
        "x-order-properties": [
          "name",
          "audio_url"
        ],
        "required": [
          "name",
          "audio_url"
        ],
        "properties": {
          "name": {
            "type": "string",
            "title": "Name",
            "description": "Reference name used in the prompt, e.g. Narrator. Use 1-20 Chinese characters, letters, numbers, or underscores.",
            "minLength": 1,
            "maxLength": 20,
            "pattern": "^[\\u4e00-\\u9fa5A-Za-z0-9_]{1,20}$"
          },
          "audio_url": {
            "type": "string",
            "title": "Voice audio",
            "description": "Upload an audio reference for this voice.",
            "field": "audio",
            "format": "uri"
          }
        }
      },
      "maxItems": 3
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
        "auto",
        "16:9",
        "9:16",
        "1:1",
        "21:9"
      ],
      "title": "Aspect Ratio",
      "name": "aspect_ratio",
      "type": "string",
      "description": "Output aspect ratio. Defaults to auto when reference media is provided, otherwise 16:9."
    }
  },
  "required": [
    "prompt"
  ],
  "hasPrompt": true,
  "promptRequired": true,
  "imageField": "image_urls",
  "maxImages": 10,
  "imageOptional": false,
  "videoField": "video_urls",
  "maxVideos": 5,
  "provider": "kling",
  "provider_name": "kie",
  "example_url": "https://cdn.muapi.ai/assets/kling-v3.0-omni-pro-text-to-video.mp4",
  "image_url": "https://cdn.muapi.ai/assets/kling-v3.0-omni-pro-text-to-video.avif"
},
{
  "id": "kling-4.0-keyframe-to-video",
  "name": "Kling 4.0 Keyframe to Video",
  "endpoint": "kling-4.0-keyframe-to-video",
  "family": "kling-4",
  "description": "Kling 4.0 Keyframe-to-Video turns a first frame, up to 8 middle keyframes and a last frame into a 3-30 second clip at 720p/1080p, with each frame addressable in the prompt.",
  "inputs": {
    "prompt": {
      "type": "string",
      "title": "Prompt",
      "name": "prompt",
      "description": "Video description (max 8000 chars). Mention frames with @first_frame, @keyframe_1, ..., @last_frame.",
      "examples": [
        "The girl in @first_frame walks out, passes the street in @keyframe_1, and arrives at the party in @last_frame"
      ]
    },
    "first_frame_url": {
      "type": "string",
      "title": "First Frame URL",
      "name": "first_frame_url",
      "field": "image",
      "description": "First-frame image URL. Mention as @first_frame."
    },
    "keyframe_urls": {
      "examples": [],
      "description": "Middle-frame image URLs in chronological order (up to 8, also limited by duration). Mention as @keyframe_1, @keyframe_2, ...",
      "field": "images_list",
      "type": "array",
      "items": {
        "type": "string"
      },
      "title": "Keyframe URLs",
      "name": "keyframe_urls",
      "maxItems": 8
    },
    "last_frame_url": {
      "type": "string",
      "title": "Last Frame URL",
      "name": "last_frame_url",
      "field": "image",
      "description": "Last-frame image URL. Mention as @last_frame."
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
        "auto",
        "16:9",
        "9:16",
        "1:1",
        "21:9"
      ],
      "title": "Aspect Ratio",
      "name": "aspect_ratio",
      "type": "string",
      "description": "Only used when no frame is provided; otherwise the output follows the first frame."
    }
  },
  "required": [
    "prompt",
    "first_frame_url"
  ],
  "hasPrompt": true,
  "promptRequired": true,
  "imageField": "first_frame_url",
  "imageOptional": false,
  "provider": "kling",
  "provider_name": "kie",
  "example_url": "https://cdn.muapi.ai/assets/kling-v3.0-omni-pro-text-to-video.mp4",
  "image_url": "https://cdn.muapi.ai/assets/kling-v3.0-omni-pro-text-to-video.avif"
},
{
  "id": "pixverse-v6-max-image-to-video",
  "name": "PixVerse V6 Max Image to Video",
  "endpoint": "pixverse-v6-max-image-to-video",
  "family": "pixverse-v6-max",
  "description": "Animate an image into cinematic video with PixVerse V6 Max: up to 15 seconds at up to 1080p, consistent subjects, and optional native audio.",
  "inputs": {
    "prompt": {
      "type": "string",
      "title": "Prompt",
      "name": "prompt",
      "description": "Text description of the video (max 5000 characters).",
      "examples": [
        "Cracks spread across the statue as it suddenly comes to life. Stone pieces fall off while glowing energy emerges from inside. The statue pulls itself free from the sand and takes a heavy step forward, shaking the ground as dust rises into the air."
      ]
    },
    "images_list": {
      "examples": [
        "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/pixverse-v6-i2v.avif"
      ],
      "description": "Input image used as the first frame. The output aspect ratio follows this image.",
      "field": "images_list",
      "type": "array",
      "items": {
        "type": "string"
      },
      "title": "Image URL",
      "name": "images_list",
      "maxItems": 1
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
    "prompt",
    "images_list"
  ],
  "hasPrompt": true,
  "promptRequired": true,
  "imageField": "images_list",
  "maxImages": 1,
  "imageOptional": false,
  "provider": "pixverse",
  "provider_name": "KIE_AI",
  "example_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/pixverse-v6-i2v.mp4",
  "image_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/pixverse-v6-i2v.avif"
},
{
  "id": "kling-4.0-flash-reference-to-video",
  "name": "Kling 4.0 Flash Reference to Video",
  "endpoint": "kling-4.0-flash-reference-to-video",
  "family": "kling-4-flash",
  "description": "Kling 4.0 Flash Reference-to-Video generates 3-20 second 720p clips with native audio from reference images, reference videos and named elements, all addressable in the prompt with @tags.",
  "inputs": {
    "prompt": {
      "type": "string",
      "title": "Prompt",
      "name": "prompt",
      "description": "Video description (max 8000 chars). Reference materials with @image_1, @video_1 or @name for elements/voices.",
      "examples": [
        "@Hero sits at the desk in @video_1, picks up the doll from @image_1, and greets using @Narrator"
      ]
    },
    "image_urls": {
      "examples": [],
      "description": "Up to 10 reference images. Mention as @image_1, @image_2, ... in array order.",
      "field": "images_list",
      "type": "array",
      "items": {
        "type": "string"
      },
      "title": "Reference Image URLs",
      "name": "image_urls",
      "maxItems": 10
    },
    "video_urls": {
      "examples": [],
      "description": "Up to 5 reference videos (2-30s each, 30s combined). Mention as @video_1, @video_2, ...",
      "field": "videos_list",
      "type": "array",
      "items": {
        "type": "string"
      },
      "title": "Reference Video URLs",
      "name": "video_urls",
      "maxItems": 5
    },
    "keep_original_sound": {
      "type": "boolean",
      "title": "Keep Original Sound",
      "name": "keep_original_sound",
      "description": "Keep the original audio of the reference videos (only applies when video_urls is set).",
      "default": false
    },
    "elements": {
      "type": "array",
      "title": "Elements",
      "name": "elements",
      "description": "Up to 7 named subjects (at most 3 can use video). Each needs 2-4 images or one 3-8 second video, not both. Mention each as @name.",
      "items": {
        "type": "object",
        "x-order-properties": [
          "name",
          "image_urls",
          "video_url",
          "tag",
          "description",
          "voice_url"
        ],
        "required": [
          "name"
        ],
        "properties": {
          "name": {
            "type": "string",
            "title": "Name",
            "description": "Reference name used in the prompt, e.g. Hero. Use 1-20 Chinese characters, letters, numbers, or underscores.",
            "minLength": 1,
            "maxLength": 20,
            "pattern": "^[\\u4e00-\\u9fa5A-Za-z0-9_]{1,20}$"
          },
          "image_urls": {
            "type": "array",
            "title": "Images",
            "description": "Add 2-4 images. The first image should show the main/front view; the rest are references. Cannot be used together with a video.",
            "field": "images_list",
            "items": {
              "type": "string",
              "format": "uri"
            },
            "minItems": 2,
            "maxItems": 4
          },
          "video_url": {
            "type": "string",
            "title": "Video",
            "description": "One 3-8 second continuous-shot video. Cannot be used together with images.",
            "field": "video",
            "format": "uri"
          },
          "tag": {
            "type": "string",
            "title": "Tag",
            "description": "Element category. Video elements are always characters.",
            "enum": [
              "character",
              "animal",
              "prop",
              "costume",
              "scene",
              "effect",
              "others"
            ],
            "enum_labels": {
              "character": "Character",
              "animal": "Animal",
              "prop": "Prop",
              "costume": "Costume",
              "scene": "Scene",
              "effect": "Effect",
              "others": "Others"
            },
            "default": "character"
          },
          "description": {
            "type": "string",
            "title": "Description",
            "description": "Optional details to help identify or describe this element (up to 100 characters).",
            "format": "text",
            "maxLength": 100
          },
          "voice_url": {
            "type": "string",
            "title": "Voice",
            "description": "Optional audio sample associated with this character.",
            "field": "audio",
            "format": "uri"
          }
        }
      },
      "maxItems": 7
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
        "auto",
        "16:9",
        "9:16",
        "1:1",
        "21:9"
      ],
      "title": "Aspect Ratio",
      "name": "aspect_ratio",
      "type": "string",
      "description": "Output aspect ratio. Defaults to auto when reference media is provided, otherwise 16:9."
    }
  },
  "required": [
    "prompt"
  ],
  "hasPrompt": true,
  "promptRequired": true,
  "imageField": "image_urls",
  "maxImages": 10,
  "imageOptional": false,
  "videoField": "video_urls",
  "maxVideos": 5,
  "provider": "kling",
  "provider_name": "kie",
  "example_url": "https://cdn.muapi.ai/assets/kling-v3.0-omni-pro-text-to-video.mp4",
  "image_url": "https://cdn.muapi.ai/assets/kling-v3.0-omni-pro-text-to-video.avif"
},
{
  "id": "kling-4.0-flash-keyframe-to-video",
  "name": "Kling 4.0 Flash Keyframe to Video",
  "endpoint": "kling-4.0-flash-keyframe-to-video",
  "family": "kling-4-flash",
  "description": "Kling 4.0 Flash Keyframe-to-Video animates a first-frame image into a 3-20 second 720p clip, with the frame addressable in the prompt as @first_frame.",
  "inputs": {
    "prompt": {
      "type": "string",
      "title": "Prompt",
      "name": "prompt",
      "description": "Video description (max 8000 chars). Mention the first frame with @first_frame.",
      "examples": [
        "Animate @first_frame as one continuous shot: the camera slowly pushes in as the skier turns her head toward the sunlit window, gentle cabin sway, ambient wind"
      ]
    },
    "first_frame_url": {
      "type": "string",
      "title": "First Frame URL",
      "name": "first_frame_url",
      "field": "image",
      "description": "First-frame image URL. Mention as @first_frame."
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
      "description": "Only used when no first frame is provided (plain text-to-video); otherwise the output follows the first frame."
    }
  },
  "required": [
    "prompt",
    "first_frame_url"
  ],
  "hasPrompt": true,
  "promptRequired": true,
  "imageField": "first_frame_url",
  "imageOptional": false,
  "provider": "kling",
  "provider_name": "kie",
  "example_url": "https://cdn.muapi.ai/assets/kling-v3.0-omni-pro-text-to-video.mp4",
  "image_url": "https://cdn.muapi.ai/assets/kling-v3.0-omni-pro-text-to-video.avif"
},
  {
    "id": "minimax-h3-max-spicy-image-to-video",
    "name": "MiniMax H3 Max Spicy Image to Video",
    "endpoint": "minimax-h3-max-spicy-image-to-video",
    "family": "minimax-h3-max",
    "imageField": "image_url",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the motion, action, and camera movement.",
        "examples": [
          "The camera slowly pushes in as the subject turns toward the light and fabric moves in a soft breeze."
        ]
      },
      "image_url": {
        "type": "string",
        "title": "Image URL",
        "name": "image_url",
        "description": "Starting frame image. The output canvas follows this image.",
        "field": "image",
        "examples": []
      },
      "end_image_url": {
        "type": "string",
        "title": "End Image URL",
        "name": "end_image_url",
        "description": "Optional final frame image. Can be used alone for end-keyframe generation.",
        "field": "image",
        "examples": []
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
    "description": "MiniMax H3 Max Spicy Image to Video is the relaxed-moderation tier of MiniMax H3 Max, animating a source image with native audio at 480p or 768p through the Muapi API.",
    "example_url": "https://cdn.muapi.ai/assets/image_download_27.avif",
    "image_url": "https://cdn.muapi.ai/assets/image_download_27.avif"
  },
  {
    "id": "minimax-h3-max-spicy-reference-to-video",
    "name": "MiniMax H3 Max Spicy Reference to Video",
    "endpoint": "minimax-h3-max-spicy-reference-to-video",
    "family": "minimax-h3-max",
    "imageField": "reference_images",
    "videoField": "reference_videos",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the video scene and how the references should be used (e.g. 'Image 1', 'Video 1').",
        "examples": [
          "Use the references to create a cinematic product reveal with a slow camera orbit."
        ]
      },
      "reference_images": {
        "type": "array",
        "title": "Reference Images",
        "name": "reference_images",
        "description": "Reference image URLs (up to 9). Provide at least one image or video reference. Max 12 combined reference files.",
        "maxItems": 9,
        "field": "images_list",
        "items": {
          "type": "string"
        },
        "examples": []
      },
      "reference_videos": {
        "type": "array",
        "title": "Reference Videos",
        "name": "reference_videos",
        "description": "Reference video URLs (up to 3; 2-15s each, 15s combined max). Provide at least one image or video reference.",
        "maxItems": 3,
        "field": "videos_list",
        "items": {
          "type": "string"
        },
        "examples": []
      },
      "reference_audios": {
        "type": "array",
        "title": "Reference Audio",
        "name": "reference_audios",
        "description": "Optional reference audio URLs (up to 3; 2-15s each, 15s combined max). Audio cannot be used alone.",
        "maxItems": 3,
        "field": "audios_list",
        "items": {
          "type": "string"
        },
        "examples": []
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "adaptive",
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "default": "adaptive"
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
    "description": "MiniMax H3 Max Spicy Reference to Video is the relaxed-moderation tier of MiniMax H3 Max, generating video from image, video and audio references at 480p or 768p through the Muapi API.",
    "example_url": "https://cdn.muapi.ai/assets/image_download_26.avif",
    "image_url": "https://cdn.muapi.ai/assets/image_download_26.avif"
  },
  {
    "id": "minimax-h3-max-turbo-spicy-image-to-video",
    "name": "MiniMax H3 Max Turbo Spicy Image to Video",
    "endpoint": "minimax-h3-max-turbo-spicy-image-to-video",
    "family": "minimax-h3-max",
    "imageField": "image_url",
    "imageOptional": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the motion, action, and camera movement.",
        "examples": [
          "The camera slowly pushes in as the subject turns toward the light and fabric moves in a soft breeze."
        ]
      },
      "image_url": {
        "type": "string",
        "title": "Image URL",
        "name": "image_url",
        "description": "Starting frame image. The output canvas follows this image.",
        "field": "image",
        "examples": []
      },
      "end_image_url": {
        "type": "string",
        "title": "End Image URL",
        "name": "end_image_url",
        "description": "Optional final frame image. Can be used alone for end-keyframe generation.",
        "field": "image",
        "examples": []
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
    "description": "MiniMax H3 Max Turbo Spicy Image to Video is the relaxed-moderation tier of MiniMax H3 Max Turbo, animating a source image at low cost at 480p or 768p through the Muapi API.",
    "example_url": "https://cdn.muapi.ai/assets/image_download_27.avif",
    "image_url": "https://cdn.muapi.ai/assets/image_download_27.avif"
  }
];
