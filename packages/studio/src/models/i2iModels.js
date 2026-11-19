// Extracted from models.js — i2iModels catalog.
export const i2iModels = [
  {
    "id": "ai-image-upscaler",
    "name": "AI Image Upscaler",
    "endpoint": "ai-image-upscale",
    "family": "tools",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {},
    "provider": "muapi",
    "provider_name": "Fal"
  },
  {
    "id": "ai-image-face-swap",
    "name": "AI Image Face Swap",
    "endpoint": "ai-image-face-swap",
    "family": "tools",
    "imageField": "image_url",
    "swapField": "swap_url",
    "hasPrompt": false,
    "inputs": {
      "target_index": {
        "type": "int",
        "title": "Target Index",
        "name": "target_index",
        "description": "0 = largest face. To switch to another target face - switch to index 1.",
        "default": 0,
        "minValue": 0,
        "maxValue": 10,
        "step": 1
      }
    },
    "provider": "muapi",
    "provider_name": "MuapiApp"
  },
  {
    "id": "ai-dress-change",
    "name": "AI Dress Change",
    "endpoint": "ai-dress-change",
    "family": "tools",
    "imageField": "model_image_url",
    "hasPrompt": false,
    "inputs": {},
    "provider": "muapi",
    "provider_name": "Fal"
  },
  {
    "id": "ai-background-remover",
    "name": "AI Background Remover",
    "endpoint": "ai-background-remover",
    "family": "tools",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {},
    "cost": 0.01,
    "provider": "muapi",
    "provider_name": "Fal"
  },
  {
    "id": "ai-image-extension",
    "name": "AI Image Extension",
    "endpoint": "ai-image-extension",
    "family": "tools",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {},
    "cost": 0.03,
    "provider": "muapi",
    "provider_name": "Fal"
  },

  {
    "id": "ai-product-shot",
    "name": "AI Product Shot",
    "endpoint": "ai-product-shot",
    "family": "tools",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "scene_description": {
        "type": "string",
        "title": "Scene Description",
        "name": "scene_description",
        "description": "Text description of the new scene or background for the provided product shot. Bria currently supports prompts in English only, excluding special characters.",
        "examples": [
          "on a rock, next to the ocean, dark theme"
        ]
      }
    },
    "provider": "muapi",
    "provider_name": "Fal"
  },
  {
    "id": "ai-skin-enhancer",
    "name": "AI Skin Enhancer",
    "endpoint": "ai-skin-enhancer",
    "family": "tools",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {},
    "provider": "muapi",
    "provider_name": "Fal"
  },
  {
    "id": "ai-color-photo",
    "name": "AI Color Photo",
    "endpoint": "ai-color-photo",
    "family": "tools",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {},
    "provider": "muapi",
    "provider_name": "Fal"
  },
  {
    "id": "flux-kontext-dev-i2i",
    "name": "Flux Kontext Dev I2I",
    "endpoint": "flux-kontext-dev-i2i",
    "family": "kontext",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 10,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image. The length of the prompt must be between 2 and 3000 characters.",
        "examples": [
          "A cozy outdoor coffee shop on a small street, people sitting at tables enjoying drinks, a barista serving coffee, leaves gently falling from nearby trees, and soft warm lighting adding a friendly vibe."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "21:9",
          "9:21"
        ],
        "default": "1:1"
      },
      "num_images": {
        "type": "int",
        "title": "Number of images",
        "name": "num_images",
        "description": "Number of images generated in single request. Each number will charge separately",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "ai-product-photography",
    "name": "AI Product Photography",
    "endpoint": "ai-product-photography",
    "family": "tools",
    "imageField": "person_image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image.",
        "examples": [
          "Promoting brand in professional look"
        ]
      }
    },
    "provider": "muapi",
    "provider_name": "Fal"
  },
  {
    "id": "ai-ghibli-style",
    "name": "AI Ghibli Style",
    "endpoint": "ai-ghibli-style",
    "family": "tools",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {},
    "provider": "muapi",
    "provider_name": "Fal"
  },
  {
    "id": "ai-object-eraser",
    "name": "AI Object Eraser",
    "endpoint": "ai-object-eraser",
    "family": "tools",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {},
    "provider": "muapi",
    "provider_name": "Fal"
  },
  {
    "id": "flux-kontext-pro-i2i",
    "name": "Flux Kontext Pro I2I",
    "endpoint": "flux-kontext-pro-i2i",
    "family": "kontext",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 2,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image.",
        "examples": [
          "Transform into a digital painting, soft fur texture, dreamy pastel colors"
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "16:21"
        ],
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-kontext-max-i2i",
    "name": "Flux Kontext Max I2I",
    "endpoint": "flux-kontext-max-i2i",
    "family": "kontext",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 2,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image.",
        "examples": [
          "Re-render in a luxury studio setting, reflective surface, high contrast shadows, ad campaign look."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "16:21"
        ],
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "gpt4o-image-to-image",
    "name": "GPT-4o Image To Image",
    "endpoint": "gpt4o-image-to-image",
    "family": "gpt",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 5,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image.",
        "examples": [
          "Convert this sunny park photo into a snowy winter scene, with snow-covered trees, cloudy skies, and people in winter coats."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "1:1",
          "2:3",
          "3:2"
        ],
        "default": "1:1"
      },
      "num_images": {
        "type": "int",
        "title": "Number of images",
        "name": "num_images",
        "description": "Number of images generated in single request. Each number will charge separately",
        "enum": [
          1,
          2,
          4
        ],
        "default": 1
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "gpt4o-edit",
    "name": "GPT-4o Mask Edit",
    "endpoint": "gpt4o-edit",
    "family": "gpt",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image, what you want the final edited image to look like.",
        "examples": [
          "Replace the barista with a humanoid robot in a sleek metallic design."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "1:1",
          "2:3",
          "3:2"
        ],
        "default": "1:1"
      },
      "num_images": {
        "type": "int",
        "title": "Number of images",
        "name": "num_images",
        "description": "Number of images generated in single request. Each number will charge separately",
        "enum": [
          1,
          2,
          4
        ],
        "default": 1
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },

  {
    "id": "bytedance-seededit-v3",
    "name": "SeedEdit 3.0",
    "endpoint": "bytedance-seededit-image",
    "family": "seedream",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image, what you want the final edited image to look like.",
        "examples": [
          "Change the outfit to a red evening gown with elegant styling, matching the reference image's pose and lighting."
        ]
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },


  {
    "id": "minimax-image-01-subject-reference",
    "name": "MiniMax Image 01 Subject Reference",
    "endpoint": "minimax-01-subject-reference",
    "family": "minimax",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image (max 1500 characters).",
        "examples": [
          "Generate the same person dressed in Renaissance-style attire, standing in a candlelit castle hall with ornate tapestries and warm low lighting."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "21:9"
        ],
        "default": "1:1"
      },
      "num_images": {
        "type": "int",
        "title": "Number of images",
        "name": "num_images",
        "description": "Number of images generated in single request. Each number will charge separately",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "ideogram-character",
    "name": "Ideogram 3.0 Character Reference",
    "endpoint": "ideogram-character",
    "family": "ideogram",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image (max 1500 characters).",
        "examples": [
          "Create the same character as a medieval knight standing in a candlelit castle corridor, wearing chainmail and holding a torch."
        ]
      },
      "render_speed": {
        "type": "string",
        "title": "Render Speed",
        "name": "render_speed",
        "description": "The rendering speed to use.",
        "enum": [
          "Turbo",
          "Balanced",
          "Quality"
        ],
        "default": "Balanced"
      },
      "style": {
        "type": "string",
        "title": "Style",
        "name": "style",
        "description": "The style type to generate with.",
        "enum": [
          "Auto",
          "Realistic",
          "Fiction"
        ],
        "default": "Auto"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "1:1"
      },
      "num_images": {
        "type": "int",
        "title": "Number of images",
        "name": "num_images",
        "description": "Number of images generated in single request. Each number will charge separately",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "ideogram",
    "provider_name": "Ideogram"
  },
  {
    "id": "flux-pulid",
    "name": "Flux Pulid",
    "endpoint": "flux-pulid",
    "family": "flux",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image (max 1500 characters).",
        "examples": [
          "Recreate the same person in a Renaissance-style painting with ornate collar and soft candlelight ambiance."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "qwen-image-edit",
    "name": "Qwen Image Edit",
    "endpoint": "qwen-image-edit",
    "family": "qwen",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image, what you want the final edited image to look like.",
        "examples": [
          "Replace the field with a snowy mountain landscape."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "9:21",
          "3:2",
          "2:3"
        ],
        "default": "1:1"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "image-effects",
    "name": "Image Effects",
    "endpoint": "image-effects",
    "family": "effects",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "name": {
        "type": "string",
        "title": "Effect Name",
        "name": "name",
        "description": "The type of effect to apply to the image.",
        "enum": [
          "Acryclic Ornaments",
          "Advanced Photography",
          "American Comic Style",
          "Angel Figurine",
          "Blurry Selfie",
          "Cyberpunk",
          "Exotic Charm",
          "Felt 3D Polaroid",
          "Felt Keychain",
          "Furry Dream Doll",
          "Futuristic American Comics",
          "Glass Ball",
          "In The Stadium",
          "Lofi Pixel Character",
          "Lying On Fluffy Belly",
          "Landscape Mini World",
          "My World",
          "Plastic Bubble Figure"
        ],
        "default": "Angel Figurine"
      }
    },
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "nano-banana-edit",
    "name": "Nano Banana",
    "endpoint": "nano-banana-edit",
    "family": "nano",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 10,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image, what you want the final edited image to look like.",
        "examples": [
          "Change her facial expression to a confident smile, and adjust the lighting to dramatic blue and purple hues. Keep her hairstyle and outfit consistent across multiple edits."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "Auto",
          "1:1",
          "3:4",
          "4:3",
          "9:16",
          "16:9",
          "3:2",
          "2:3",
          "5:4",
          "4:5",
          "21:9"
        ],
        "default": "Auto"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "ideogram-v3-reframe",
    "name": "Ideogram 3.0 Reframe",
    "endpoint": "ideogram-v3-reframe",
    "family": "ideogram",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "1:1"
      },
      "render_speed": {
        "type": "string",
        "title": "Render Speed",
        "name": "render_speed",
        "description": "The rendering speed to use.",
        "enum": [
          "Turbo",
          "Balanced",
          "Quality"
        ],
        "default": "Balanced"
      },
      "style": {
        "type": "string",
        "title": "Style",
        "name": "style",
        "description": "The style type to generate with.",
        "enum": [
          "Auto",
          "General",
          "Realistic",
          "Design"
        ],
        "default": "Auto"
      },
      "num_images": {
        "type": "int",
        "title": "Number of images",
        "name": "num_images",
        "description": "Number of images generated in single request. Each number will charge separately",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "ideogram",
    "provider_name": "Ideogram"
  },
  {
    "id": "bytedance-seedream-edit-v4",
    "name": "Bytedance Seedream Edit v4",
    "endpoint": "bytedance-seedream-edit-v4",
    "family": "seedream",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 10,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image.",
        "examples": [
          "A tranquil shoreline at dawn where waves turn into glowing ribbons of light, painting the sky with dreamlike hues of violet and gold. A figure walks along the edge, leaving footsteps that bloom into luminous flowers, symbolizing imagination flowing seamlessly into reality."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Resolution of the output image.",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "4K"
      },
      "num_images": {
        "type": "int",
        "title": "Number of images",
        "name": "num_images",
        "description": "Number of images generated in single request. Each number will charge separately",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "nano-banana-effects",
    "name": "Nano Banana Effects",
    "endpoint": "nano-banana-effects",
    "family": "nano",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "name": {
        "type": "string",
        "title": "Effect Name",
        "name": "name",
        "description": "The type of effect to apply to the image.",
        "enum": [
          "3D Figurine",
          "16bit Game Character",
          "1920s Decade",
          "1950s Decade",
          "1970s Decade",
          "1980s Decade",
          "Action Figure",
          "American Gothic Art",
          "Egypts Landmark",
          "Eiffel Tower Landmark",
          "Famous Art",
          "Great Wall of China Landmark",
          "Mona Lisa Art",
          "Persistent Memory Art",
          "Statue of Liberty Landmark",
          "Taj Mahal Landmark",
          "Vincent Van Gogh Art"
        ],
        "default": "3D Figurine"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "Auto",
          "1:1",
          "3:4",
          "4:3",
          "9:16",
          "16:9",
          "3:2",
          "2:3",
          "5:4",
          "4:5",
          "21:9"
        ],
        "default": "Auto"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "flux-kontext-effects",
    "name": "Flux Kontext Effects",
    "endpoint": "flux-kontext-effects",
    "family": "kontext",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image.",
        "examples": [
          "20 years older"
        ]
      },
      "name": {
        "type": "string",
        "title": "Effect Name",
        "name": "name",
        "description": "The type of effect to apply to the image.",
        "enum": [
          "Age Progression",
          "Background Change",
          "Cartoonify",
          "Color Correction",
          "Expression Change",
          "Face Enhancement",
          "Hair Change",
          "Object Removal",
          "Professional Photo",
          "Scene Composition",
          "Style Transfer",
          "Time of Day",
          "Weather Effect"
        ],
        "default": "Age Progression"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-redux",
    "name": "Flux Redux",
    "endpoint": "flux-redux",
    "family": "flux",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image (max 1500 characters).",
        "examples": [
          "Reimagine the forest cabin as a mystical fantasy retreat at twilight, glowing lanterns hanging from the trees, magical fireflies in the air, cinematic atmosphere with enchanted vibes."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "21:9",
          "9:21"
        ],
        "default": "1:1"
      },
      "num_images": {
        "type": "int",
        "title": "Number of images",
        "name": "num_images",
        "description": "Number of images generated in single request. Each number will charge separately",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "qwen-image-edit-plus",
    "name": "Qwen Image Edit Plus",
    "endpoint": "qwen-image-edit-plus",
    "family": "qwen",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 3,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image, what you want the final edited image to look like.",
        "examples": [
          "Replace the watch strap with a rich brown leather band, add subtle engravings on the bezel, increase the contrast slightly, and warm the overall lighting to golden-hour tones, keeping reflections realistic."
        ]
      },
      "width": {
        "type": "int",
        "title": "Width",
        "name": "width",
        "description": "Width of the output image.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "type": "int",
        "title": "Height",
        "name": "height",
        "description": "Height of the output image.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.5-image-edit",
    "name": "Wan2.5 Image Edit",
    "endpoint": "wan2.5-image-edit",
    "family": "wan2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 2,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image.",
        "examples": [
          "Reimagine the scene under a raging thunderstorm at night: lightning forks across the sky, illuminating the samurai in stark flashes of white light."
        ]
      },
      "width": {
        "type": "int",
        "title": "Width",
        "name": "width",
        "description": "Width of the output image.",
        "default": 2048,
        "minValue": 384,
        "maxValue": 5000,
        "step": 1
      },
      "height": {
        "type": "int",
        "title": "Height",
        "name": "height",
        "description": "Height of the output image.",
        "default": 2048,
        "minValue": 384,
        "maxValue": 5000,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "reve-image-edit",
    "name": "Reve Image Edit",
    "endpoint": "reve-image-edit",
    "family": "reve",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image.",
        "examples": [
          "A photorealistic fantasy portrait, transforming the woman in the image into an elegant high elf. Give her long, gracefully pointed ears that peek through her hair. Her skin has a subtle, ethereal glow. Replace her white blazer and necklaces with ornate, flowing elven robes made of shimmering silver fabric and intricate leaf patterns. The background is a mystical, twilight forest with glowing magical flora. **CRITICAL:** Maintain her exact original pose, serene smiling expression, and facial structure. Cinematic lighting, masterpiece, hyper-detailed."
        ]
      }
    },
    "provider": "reve",
    "provider_name": "Reve"
  },
  {
    "id": "topaz-image-upscale",
    "name": "Topaz Image Upscale",
    "endpoint": "topaz-image-upscale",
    "family": "topaz",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "upscale_factor": {
        "type": "string",
        "title": "Upscale Factor",
        "name": "upscale_factor",
        "description": "Factor to upscale the image by (e.g. 2.0 doubles width and height).",
        "enum": [
          1,
          2,
          4,
          8
        ],
        "default": 2
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "seedvr2-image-upscale",
    "name": "Seedvr2 Image Upscale",
    "endpoint": "seedvr2-image-upscale",
    "family": "seedvr2",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The target resolution of the generated image.",
        "enum": [
          "2k",
          "4k",
          "8k"
        ],
        "default": "4k"
      }
    },
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "qwen-image-edit-plus-lora",
    "name": "Qwen Image Edit Plus Lora",
    "endpoint": "qwen-image-edit-plus-lora",
    "family": "qwen",
    "imageField": "images_list",
    "hasPrompt": false,
    "maxImages": 3,
    "inputs": {
      "rotate_right_left": {
        "type": "int",
        "title": "Rotate Right-Left (degrees°)",
        "name": "rotate_right_left",
        "description": "Rotate camera left (positive) or right (negative) in degrees. Positive values rotate left, negative values rotate right.",
        "default": 0,
        "minValue": -90,
        "maxValue": 90,
        "step": 1
      },
      "move_forward": {
        "type": "int",
        "title": "Move Forward → Close-Up",
        "name": "move_forward",
        "description": "Move camera forward (0=no movement, 10=close-up)",
        "default": 0,
        "minValue": 0,
        "maxValue": 10,
        "step": 0.1
      },
      "vertical_angle": {
        "type": "int",
        "title": "Vertical Angle (Bird ⬄ Worm)",
        "name": "vertical_angle",
        "description": "Adjust vertical camera angle (-1=bird's eye view/looking down, 0=neutral, 1=worm's-eye view/looking up)",
        "default": 0,
        "minValue": -1,
        "maxValue": 1,
        "step": 0.1
      },
      "wide_angle_lens": {
        "type": "boolean",
        "title": "Wide-Angle Lens",
        "name": "wide_angle_lens",
        "description": "Enable wide-angle lens effect",
        "default": false
      },
      "width": {
        "type": "int",
        "title": "Width",
        "name": "width",
        "description": "Width of the output image.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "type": "int",
        "title": "Height",
        "name": "height",
        "description": "Height of the output image.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "nano-banana-pro-edit",
    "name": "Nano Banana Pro",
    "endpoint": "nano-banana-pro-edit",
    "family": "nano",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 8,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image, what you want the final edited image to look like.",
        "examples": [
          "Keep the same scene and subject, but change the lighting to warm golden sunset tones, remove the neon signs, add soft sunlight beams from the side, enhance surface details, keep reflections subtle and natural."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "1:1",
          "3:4",
          "4:3",
          "9:16",
          "16:9",
          "3:2",
          "2:3",
          "5:4",
          "4:5",
          "21:9"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The target resolution of the generated image.",
        "enum": [
          "1k",
          "2k",
          "4k"
        ],
        "default": "1k"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "image-passthrough",
    "name": "Image Passthrough",
    "endpoint": "image-passthrough",
    "family": "image",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "make_input": {
        "type": "boolean",
        "title": "Make Input",
        "name": "make_input",
        "default": true
      }
    },
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "kling-o1-edit-image",
    "name": "Kling O1 Edit Image",
    "endpoint": "kling-o1-edit-image",
    "family": "kling-o1",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 10,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image.",
        "examples": [
          "Replace the hanging lanterns with floating bioluminescent orbs that emit soft cyan light, keep the garden composition and city reflections unchanged, ensure the orbs cast subtle cyan rim-light on nearby leaves and glass, preserve overall twilight mood and depth of field."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "auto",
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The target resolution of the generated image.",
        "enum": [
          "1k",
          "2k"
        ],
        "default": "1k"
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "flux-2-dev-edit",
    "name": "Flux 2 Dev Edit",
    "endpoint": "flux-2-dev-edit",
    "family": "flux-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 3,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image, what you want the final edited image to look like.",
        "examples": [
          "Replace the floating stained-glass cathedral with a colossal crystal tree glowing from within, while keeping the stormy sky, ocean waves, rainbow reflections, and dramatic lighting intact."
        ]
      },
      "width": {
        "type": "int",
        "title": "Width",
        "name": "width",
        "description": "Width of the output image.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "type": "int",
        "title": "Height",
        "name": "height",
        "description": "Height of the output image.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-2-flex-edit",
    "name": "Flux 2 Flex Edit",
    "endpoint": "flux-2-flex-edit",
    "family": "flux-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 8,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image.",
        "examples": [
          "Replace the molten gold in the lower chamber with a swirling vortex of glowing sapphire mist, keep the crystal panels, star map, orbiting metallic rings, and aurora sky unchanged, ensure the new mist casts cool blue highlights and interacts naturally with the surrounding lightning."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "auto",
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "2:3",
          "3:2"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The target resolution of the generated image.",
        "enum": [
          "1k",
          "2k"
        ],
        "default": "1k"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-2-pro-edit",
    "name": "Flux 2 Pro Edit",
    "endpoint": "flux-2-pro-edit",
    "family": "flux-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 8,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image.",
        "examples": [
          "Replace the central spherical chronometer with a floating crystalline lotus emitting soft golden light, keep the asteroid chamber, star charts, cosmic dust streams, and prismatic beams unchanged, ensure the lotus casts warm highlights and seamlessly integrates with the scene’s lighting."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "auto",
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "2:3",
          "3:2"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The target resolution of the generated image.",
        "enum": [
          "1k",
          "2k"
        ],
        "default": "1k"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "vidu-q2-reference-to-image",
    "name": "Vidu Q2 Reference",
    "endpoint": "vidu-q2-reference-to-image",
    "family": "vidu-q2",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 7,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image.",
        "examples": [
          "Create a new scene where the masked wanderer stands inside an ancient stone observatory illuminated by rotating celestial beams; preserve the character’s clothing style and silhouette while adding glowing runes carved into the walls, mist swirling across the floor, and a dramatic cosmic light shaft from above; cinematic composition, high detail."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "auto",
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The target resolution of the generated image.",
        "enum": [
          "1k",
          "2k",
          "4k"
        ],
        "default": "1k"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "bytedance-seedream-v4.5-edit",
    "name": "Bytedance Seedream v4.5 Edit",
    "endpoint": "bytedance-seedream-v4.5-edit",
    "family": "seedream-v45",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 10,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image, what you want the final edited image to look like.",
        "examples": [
          "Replace the glowing amethyst flame at the tower’s peak with a levitating orb of swirling turquoise water, keeping the spiral tower, crystalline desert, floating shards, and aurora-lit sky unchanged; ensure the water orb emits cool reflections and integrates naturally with the existing lighting."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "1:1"
      },
      "quality": {
        "type": "string",
        "title": "Quality",
        "name": "quality",
        "description": "Quality of the output image.",
        "enum": [
          "basic",
          "high"
        ],
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "qwen-image-edit-2511",
    "name": "Qwen Image Edit 2511",
    "endpoint": "qwen-image-edit-2511",
    "family": "qwen",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 3,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image, what you want the final edited image to look like.",
        "examples": [
          "Replace the glass observatory with a floating bronze astrolabe composed of interlocking rings and engraved symbols, keep the glowing desert, dusk sky, dust trails, and lighting unchanged; ensure the bronze surface reflects the warm sunset tones naturally and integrates seamlessly with the scene."
        ]
      },
      "width": {
        "type": "integer",
        "title": "Width",
        "name": "width",
        "description": "Width of the image in pixels",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "type": "integer",
        "title": "Height",
        "name": "height",
        "description": "Height of the image in pixels",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.6-image-edit",
    "name": "Wan2.6 Image Edit",
    "endpoint": "wan2.6-image-edit",
    "family": "wan2.6",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 3,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image.",
        "examples": [
          "Replace the glowing crystal spires with towering living trees made of luminous jade leaves and silver bark, keep the floating citadel structure, ocean reflections, mist, moonlight, and twilight color palette unchanged; ensure the new trees cast soft green highlights that blend naturally with the existing lighting."
        ]
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "qwen-text-to-image-2512",
    "name": "Qwen Text To Image 2512",
    "endpoint": "qwen-text-to-image-2512",
    "family": "qwen",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image, what you want the final edited image to look like.",
        "examples": [
          "A colossal biomechanical whale swimming slowly through a vast sky made of soft clouds and fractured light. Its translucent body reveals glowing internal organs shaped like rotating gears and flowing energy veins. Below it, a sprawling patchwork of farmland and rivers curves with the planet’s surface, catching reflections from the whale’s luminous glow. Long fabric banners trail from the whale’s fins, fluttering gently in the wind like ceremonial streamers. The camera angle is wide and aerial, emphasizing scale and serenity. Soft sunrise colors, cinematic depth, ultra-detailed surreal sci-fi atmosphere."
        ]
      },
      "width": {
        "type": "integer",
        "title": "Width",
        "name": "width",
        "description": "Width of the image in pixels",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "type": "integer",
        "title": "Height",
        "name": "height",
        "description": "Height of the image in pixels",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "gpt-image-2-edit",
    "name": "GPT Image 2 Edit",
    "endpoint": "gpt-image-2-image-to-image",
    "family": "gpt-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 16,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the transformation. Up to 20,000 characters supported.",
        "examples": [
          "Transform these product photos into a professional lifestyle scene with warm cinematic lighting, soft natural shadows, and a clean modern background; keep brand details and proportions unchanged."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "auto",
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "The target resolution of the generated image.",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "2K"
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "gpt-image-1.5-edit",
    "name": "GPT Image 1.5 Edit",
    "endpoint": "gpt-image-1.5-edit",
    "family": "gpt-1.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 10,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt for edit image.",
        "examples": [
          "Replace the abandoned car with a sleek autonomous electric vehicle made of brushed metal and soft glowing panels, keep the desert highway, sunset lighting, heat distortion, power lines, and approaching storm unchanged; ensure reflections and shadows match the original environment naturally."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of the output image.",
        "enum": [
          "1:1",
          "2:3",
          "3:2"
        ],
        "default": "1:1"
      },
      "quality": {
        "type": "string",
        "title": "Quality",
        "name": "quality",
        "description": "The quality of the generated image.",
        "enum": [
          "low",
          "medium",
          "high"
        ],
        "default": "medium"
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "grok-imagine-image-to-image",
    "name": "Grok Imagine Image To Image",
    "endpoint": "grok-imagine-image-to-image",
    "family": "grok",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image.",
        "examples": [
          "Replace the arriving train with a silent magnetic levitation transit pod made of matte white composite and glass, keep the platform, people, lighting, reflections, and urban environment unchanged; ensure the new vehicle fits naturally into the scene with correct scale, shadows, and motion blur."
        ]
      }
    },
    "provider": "grok",
    "provider_name": "xAI"
  },
  {
    "id": "Api Node",
    "name": "Api Node",
    "endpoint": "Api Node",
    "family": "wavespeed",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "model_url": {
        "type": "string",
        "title": "Model URL",
        "name": "model_url",
        "description": "Url of the wavespeed model",
        "examples": [
          ""
        ]
      },
      "api_key": {
        "type": "string",
        "title": "API Key",
        "name": "api_key",
        "description": "API key for authentication",
        "examples": [
          ""
        ]
      }
    },
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "flux-2-klein-4b-edit",
    "name": "Flux 2 Klein 4b Edit",
    "endpoint": "flux-2-klein-4b-edit",
    "family": "flux-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 4,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image, what you want the final edited image to look like.",
        "examples": [
          "Add a tiny blue knitted scarf around the kitten’s neck, keep the kitten’s pose, table, lighting, and cozy indoor environment unchanged; make the scarf soft and cute, fitting naturally without covering the kitten’s face."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "The aspect ratio of the generated image",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-2-klein-9b-edit",
    "name": "Flux 2 Klein 9b Edit",
    "endpoint": "flux-2-klein-9b-edit",
    "family": "flux-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 4,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image, what you want the final edited image to look like.",
        "examples": [
          "Add a small red bow tie around the puppy’s neck, slightly fluffy fabric texture, keep the puppy’s pose, facial expression, sofa, lighting, and living room environment unchanged; ensure the bow tie matches the warm lighting and looks naturally placed."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "The aspect ratio of the generated image",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-3-klein-edit-image",
    "name": "FLUX 3 Klein Image Edit",
    "endpoint": "flux-3-klein-edit-image",
    "family": "flux-klein",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 10,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describe the edit to apply (up to 5,000 characters).",
        "examples": ["Change the background to a warm studio setting while preserving the product shape and label."]
      },
      "images_list": {
        "type": "array",
        "items": { "type": "string" },
        "title": "Image URLs",
        "name": "images_list",
        "minItems": 1,
        "maxItems": 10
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": ["auto", "1:1", "4:3", "3:4", "3:2", "2:3", "16:9", "9:16", "21:9", "9:21"],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": ["1K", "2K", "4K"],
        "default": "1K"
      },
      "output_format": {
        "type": "string",
        "title": "Output Format",
        "name": "output_format",
        "enum": ["png", "jpeg", "webp"],
        "default": "png"
      },
      "num_images": {
        "type": "integer",
        "title": "Number of Images",
        "name": "num_images",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      },
      "seed": {
        "type": "integer",
        "title": "Seed",
        "name": "seed",
        "minValue": 0,
        "maxValue": 2147483647,
        "step": 1
      },
      "enhance_prompt": {
        "type": "boolean",
        "title": "Enhance Prompt",
        "name": "enhance_prompt",
        "default": true
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "add-image-watermark",
    "name": "Add Image Watermark",
    "endpoint": "add-image-watermark",
    "family": "watermark",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "position": {
        "type": "string",
        "title": "Position",
        "name": "position",
        "description": "Position of the watermark on the image",
        "enum": [
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
          "center"
        ],
        "default": "bottom-right"
      },
      "opacity": {
        "type": "number",
        "title": "Opacity",
        "name": "opacity",
        "description": "Watermark transparency (0 = invisible, 1 = fully opaque)",
        "default": 0.7
      },
      "scale": {
        "type": "number",
        "title": "Scale",
        "name": "scale",
        "description": "Watermark size relative to image (0.1 = 10%, 1.0 = 100%)",
        "default": 0.2
      }
    },
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "nano-banana-2-edit",
    "name": "Nano Banana 2",
    "endpoint": "nano-banana-2-edit",
    "family": "nano",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 14,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Positive prompt for generation.",
        "examples": [
          "Transform the portrait into a cyberpunk style with neon lighting, metallic accessories, and a rain-soaked city background, maintaining the subject's facial features."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "1:4",
          "1:8",
          "2:3",
          "3:2",
          "3:4",
          "4:1",
          "4:3",
          "4:5",
          "5:4",
          "8:1",
          "9:16",
          "16:9",
          "21:9",
          "auto"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "The aspect ratio of the generated image.",
        "default": "auto"
      },
      "resolution": {
        "enum": [
          "1k",
          "2k",
          "4k"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated image.",
        "default": "1k"
      },
      "google_search": {
        "title": "Google Search",
        "name": "google_search",
        "type": "boolean",
        "description": "Whether to use Google Search for prompt enhancement.",
        "default": false
      },
      "output_format": {
        "enum": [
          "jpg",
          "png"
        ],
        "title": "Output Format",
        "name": "output_format",
        "type": "string",
        "description": "The format of the output image.",
        "default": "jpg"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "nano-banana-2-1-edit",
    "name": "Nano Banana 2.1 Edit",
    "endpoint": "nano-banana-2-1-edit",
    "family": "nano",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 14,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Positive prompt for generation.",
        "examples": [
          "Transform the portrait into a cyberpunk style with neon lighting, metallic accessories, and a rain-soaked city background, maintaining the subject's facial features."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "1:4",
          "1:8",
          "2:3",
          "3:2",
          "3:4",
          "4:1",
          "4:3",
          "4:5",
          "5:4",
          "8:1",
          "9:16",
          "16:9",
          "21:9",
          "auto"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "The aspect ratio of the generated image.",
        "default": "auto"
      },
      "resolution": {
        "enum": [
          "1k",
          "2k",
          "4k"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "The resolution of the generated image.",
        "default": "1k"
      },
      "output_format": {
        "enum": [
          "jpg",
          "png"
        ],
        "title": "Output Format",
        "name": "output_format",
        "type": "string",
        "description": "The format of the output image.",
        "default": "jpg"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "seedream-5.0-edit",
    "name": "Seedream 5.0 Edit",
    "endpoint": "seedream-5.0-edit",
    "family": "seedream",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired modification.",
        "examples": [
          "Change the daytime forest scene to a moonlit winter landscape with shimmering snow on the trees and a soft blue glow from a distant cottage window."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "2:3",
          "3:2",
          "21:9"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output image.",
        "default": "1:1"
      },
      "quality": {
        "enum": [
          "basic",
          "high"
        ],
        "title": "Quality",
        "name": "quality",
        "type": "string",
        "description": "Quality of the output image.",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  }
,
  {
    "id": "bytedance-seedream-v4-edit",
    "name": "Seedream 4 Edit",
    "endpoint": "bytedance-seedream-edit-v4",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "examples": [
          "A tranquil shoreline at dawn where waves turn into glowing ribbons of light, painting the sky with dreamlike hues of violet and gold. A figure walks along the edge, leaving footsteps that bloom into luminous flowers, symbolizing imagination flowing seamlessly into reality."
        ],
        "description": "Text prompt describing the image.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedream-v4-edit-input.jpg"
        ],
        "description": "Upload or provide reference images. Used for image-to-image generation.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 10
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "2:3",
          "3:2",
          "21:9"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output image.",
        "default": "1:1"
      },
      "resolution": {
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "Resolution of the output image.",
        "default": "4K"
      },
      "num_images": {
        "title": "Number of images",
        "name": "num_images",
        "type": "int",
        "description": "Number of images generated in single request. Each number will charge separately",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "bytedance-seedream-v5.0-edit",
    "name": "Seedream 5.0 Edit",
    "endpoint": "seedream-5.0-edit",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired modification",
        "examples": [
          "Replace the plain transparent screen with a futuristic holographic display, making the screen emit a brighter cyan and purple glow. Transform the text “Seedream 5.0 Lite Edit” into large 3D glowing neon letters with depth, reflections, and soft bloom lighting.\n\nAdd animated editing UI elements such as floating anchor points, bezier curves, bounding boxes, and adjustment handles around the text, clearly visible and luminous.\n\nChange the environment lighting to a darker, high-contrast tech room so the glowing text becomes the dominant focal point. Add subtle volumetric light beams and floor reflections directly beneath the text.\n\nKeep the same camera angle and composition, but make the result look like a premium futuristic editing interface poster, with the text clearly highlighted and visually powerful."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedream-5.0-edit-in.jpg"
        ],
        "description": "Upload or provide start frame image. Used for image-to-video generation.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 14
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "2:3",
          "3:2",
          "21:9"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output image.",
        "default": "1:1"
      },
      "quality": {
        "enum": [
          "basic",
          "high"
        ],
        "title": "Quality",
        "name": "quality",
        "type": "string",
        "description": "Quality of the output image.",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "qwen-image-2.0-edit",
    "name": "Qwen Image 2.0",
    "endpoint": "qwen-image-2.0-edit",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "description": "A description of the edits you want to make.",
        "title": "Prompt",
        "type": "string",
        "name": "prompt",
        "examples": [
          "Turn the coffee cup into a miniature volcano where the coffee erupts like lava and smoke rises dramatically from the cup."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/qwen-image-2.0-edit-in.jpg"
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
        "type": "string",
        "name": "aspect_ratio",
        "default": "16:9",
        "description": "Aspect ratio of the output image."
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "qwen-image-2.0-pro-edit",
    "name": "Qwen Image 2.0 Pro",
    "endpoint": "qwen-image-2.0-pro-edit",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "description": "A description of the edits you want to make.",
        "title": "Prompt",
        "type": "string",
        "name": "prompt",
        "examples": [
          "Transform the office into a dense tropical jungle with vines covering the desks, plants growing through the floor, and sunlight beams shining through broken ceiling panels."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/qwen-image-2.0-pro-edit-in.jpg"
        ],
        "description": "Upload up to 6 image URLs.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 6
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
        "type": "string",
        "name": "aspect_ratio",
        "default": "16:9",
        "description": "The aspect ratio of the generated image."
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "flux-2-klein-4b-turbo-edit",
    "name": "Flux 2 Klein 4B Turbo Edit",
    "endpoint": "flux-2-klein-4b-turbo-edit",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "examples": [
          "Add a tiny blue knitted scarf around the kitten’s neck."
        ],
        "description": "Text prompt describing the image, what you want the final edited image to look like.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/flux-2-klein-4b-edit-in.jpg"
        ],
        "description": "List of URLs of input images for editing.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 4
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "The aspect ratio of the generated image",
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-2-klein-9b-turbo-edit",
    "name": "Flux 2 Klein 9B Turbo Edit",
    "endpoint": "flux-2-klein-9b-turbo-edit",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "examples": [
          "Add a small red bow tie around the puppy’s neck."
        ],
        "description": "Text prompt describing the image, what you want the final edited image to look like.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/flux-2-klein-9b-edit-in.jpg"
        ],
        "description": "List of URLs of input images for editing.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 4
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "The aspect ratio of the generated image",
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "portrait-stylist",
    "name": "AI Portrait Stylist",
    "endpoint": "portrait-stylist",
    "inputs": {
      "image_url": {
        "type": "string",
        "name": "image_url",
        "title": "Image URL",
        "description": "Upload a clear portrait photo.",
        "field": "image",
        "examples": [
          "https://cdn.muapi.ai/outputs/d09a771a8b2a45f1b0b5e6aba5955f1b.jpg"
        ]
      },
      "name": {
        "type": "string",
        "title": "Name",
        "name": "name",
        "description": "Select the portrait effect to apply.",
        "enum": [
          "Voluminous Frizzy Hair",
          "Platinum Blonde Hair",
          "Deep Burgundy Hair",
          "Jet Black Hair",
          "Bold Hair Highlights",
          "Bold Red Lipstick",
          "Smokey Eye Makeup",
          "Glossy Nude Makeup",
          "Winged Eyeliner",
          "Party Glam Makeup",
          "Aviator Sunglasses",
          "Oversized Sunglasses",
          "Modern Transparent Glasses",
          "Bold Fashion Hat",
          "Bright Pink Outfit",
          "Black Leather Jacket",
          "White Formal Shirt",
          "Neon Green Hoodie",
          "Cinematic Lighting",
          "Cyberpunk Lighting"
        ],
        "default": "Voluminous Frizzy Hair"
      },
      "aspect_ratio": {
        "type": "string",
        "name": "aspect_ratio",
        "title": "Aspect Ratio",
        "description": "Output aspect ratio.",
        "enum": [
          "auto",
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16"
        ],
        "default": "auto"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "seedance-2-character",
    "name": "Seedance 2 Character",
    "endpoint": "seedance-2-character",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Outfit Description",
        "name": "prompt",
        "description": "Describe the outfit or costume the character should wear.",
        "examples": [
          "A red leather jacket with black jeans and white sneakers"
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/956660418681/1b84d57d-0869-40f7-8ceb-85ea38074022.jpg"
        ],
        "description": "1–3 reference photos of the character to build the sheet from.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Images",
        "name": "images_list",
        "maxItems": 3
      },
      "character_name": {
        "type": "string",
        "format": "text",
        "title": "Character Name",
        "name": "character_name",
        "description": "Optional label to identify this character.",
        "examples": [
          "A Hero"
        ]
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "wan2.7-image-edit",
    "name": "Wan 2.7 Image Edit",
    "endpoint": "wan2.7-image-edit",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "examples": [
          "Turn the dog into a royal king sitting on a throne, wearing a crown and luxurious robes, dramatic golden lighting."
        ],
        "description": "Text prompt describing the image.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/wan2.7-image-edit-in.jpg"
        ],
        "description": "Upload or provide the input image to animate.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URL",
        "name": "images_list",
        "maxItems": 9
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "The aspect ratio of the generated image",
        "default": "1:1",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "9:21",
          "3:2",
          "2:3"
        ]
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.7-image-edit-pro",
    "name": "Wan 2.7 Image Edit Pro",
    "endpoint": "wan2.7-image-edit-pro",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "examples": [
          "Convert the entire scene into an underwater environment where the buildings are covered in coral, fish swim through the streets, and light rays pass through the water."
        ],
        "description": "Text prompt describing the image.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/wan2.7-image-edit-pro-in.jpg"
        ],
        "description": "Upload or provide the input image to animate.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URL",
        "name": "images_list",
        "maxItems": 9
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "The aspect ratio of the generated image",
        "default": "1:1",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "9:21",
          "3:2",
          "2:3"
        ]
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "flux-2-klein-4b-edit-lora",
    "name": "Flux 2 Klein 4B Edit LoRA",
    "endpoint": "flux-2-klein-4b-edit-lora",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "examples": [
          "Add a tiny blue knitted scarf around the kitten's neck, keep pose, lighting, and background unchanged."
        ],
        "description": "Editing instruction describing the desired change.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/flux-2-klein-4b-edit-in.jpg"
        ],
        "description": "List of 1-3 reference image URLs to edit.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 3
      },
      "lora_list": {
        "examples": [
          {
            "path": "https://huggingface.co/example/lora/resolve/main/lora.safetensors",
            "scale": 1
          }
        ],
        "title": "LoRA List",
        "name": "lora_list",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string",
              "format": "url",
              "title": "Path",
              "name": "path",
              "description": "URL or path to the LoRA weights."
            },
            "scale": {
              "type": "number",
              "title": "Scale",
              "name": "scale",
              "description": "The LoRA weight multiplier. Default value: 1",
              "minValue": 0,
              "maxValue": 4,
              "step": 0.01,
              "default": 1
            }
          }
        },
        "description": "Up to 3 LoRA adapters to apply during the edit.",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "The aspect ratio of the generated image",
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-2-klein-9b-edit-lora",
    "name": "Flux 2 Klein 9B Edit LoRA",
    "endpoint": "flux-2-klein-9b-edit-lora",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "examples": [
          "Add ornate gold filigree to the costume while preserving the pose, lighting, and background scene."
        ],
        "description": "Editing instruction describing the desired change.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/flux-2-klein-9b-edit-in.jpg"
        ],
        "description": "List of 1-3 reference image URLs to edit.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 3
      },
      "lora_list": {
        "examples": [
          {
            "path": "https://huggingface.co/example/lora/resolve/main/lora.safetensors",
            "scale": 1
          }
        ],
        "title": "LoRA List",
        "name": "lora_list",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string",
              "format": "url",
              "title": "Path",
              "name": "path",
              "description": "URL or path to the LoRA weights."
            },
            "scale": {
              "type": "number",
              "title": "Scale",
              "name": "scale",
              "description": "The LoRA weight multiplier. Default value: 1",
              "minValue": 0,
              "maxValue": 4,
              "step": 0.01,
              "default": 1
            }
          }
        },
        "description": "Up to 3 LoRA adapters to apply during the edit.",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "The aspect ratio of the generated image",
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "kling-o3-image-edit",
    "name": "Kling O3 Image Edit",
    "endpoint": "kling-o3-image-edit",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "examples": [
          "Preserve the original composition, people placements, facial identities, DJ setup, and rooftop party mood from the source image. Transform the entire scene into a tiny miniature rooftop party built on top of a moving RC toy truck driving across a messy apartment floor. Surround the tiny party with giant everyday household objects like shoes, cables, snack packets, books, and soda cans towering like skyscrapers. Keep the same party energy and realistic interactions while introducing playful scale contrast, macro photography depth, cinematic lighting, and highly detailed miniature-world realism."
        ],
        "description": "Text instructions describing the desired transformation. Maximum 2,000 characters.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/kling-o3-image-edit-in.jpg"
        ],
        "description": "Upload or provide reference images to transform. Up to 10 images supported.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 10
      },
      "aspect_ratio": {
        "enum": [
          "auto",
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "21:9"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output image aspect ratio. Use 'auto' to follow the reference image.",
        "default": "auto"
      },
      "resolution": {
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Output image resolution.",
        "default": "1K"
      },
      "num_images": {
        "type": "int",
        "title": "Number of Images",
        "name": "num_images",
        "description": "How many images to generate per request.",
        "default": 1,
        "minValue": 1,
        "maxValue": 9,
        "step": 1
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "nano-banana-2-lite-edit",
    "name": "Nano Banana 2 Lite",
    "endpoint": "nano-banana-2-lite-edit",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired image content.",
        "examples": [
          "Transform the cat into a cosmic creature made of stars, nebula clouds, and glowing galaxies while preserving its sitting pose and facial expression. Add orbiting miniature planets around its body."
        ]
      },
      "images_list": {
        "examples": [
          "https://cdn.muapi.ai/assets/nano-banana-2-lite-edit-in.jpg"
        ],
        "description": "Reference image URLs to edit. Up to 14 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 14
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "2:3",
          "3:2",
          "3:4",
          "4:3",
          "4:5",
          "5:4",
          "9:16",
          "16:9",
          "21:9"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "The aspect ratio of the generated image.",
        "default": "1:1"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "bytedance-seedream-5.0-pro-edit",
    "name": "Seedream 5.0 Pro",
    "endpoint": "seedream-5.0-pro-edit",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired modification",
        "examples": [
          "Keep the model's pose and the flowing shape of the liquid dress unchanged. Change the clothing material from silver metal to completely transparent clear water. Lighting changes from reflection to refraction."
        ]
      },
      "images_list": {
        "examples": [
          "https://static.aiquickdraw.com/tools/example/1764851484363_ScV1s2aq.webp"
        ],
        "description": "One or more reference image URLs to edit.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 10
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "2:3",
          "3:2"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output image. 16:9 and 9:16 do not support 2K resolution.",
        "default": "1:1"
      },
      "resolution": {
        "enum": [
          "1K",
          "2K"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "Output image resolution.",
        "default": "1K"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "qwen3-image-to-image",
    "name": "Qwen 3 Image to Image",
    "endpoint": "qwen3-image-to-image",
    "family": "qwen3",
    "imageField": "images_list",
    "maxImages": 3,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired image edit."
      },
      "images_list": {
        "type": "array",
        "field": "images_list",
        "title": "Input Images",
        "name": "images_list",
        "maxItems": 3,
        "items": {"type": "string"}
      },
      "resolution": {
        "enum": ["1k", "2k"],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "default": "1k"
      },
      "aspect_ratio": {
        "enum": ["1:1", "3:2", "2:3", "4:3", "3:4", "16:9", "9:16", "21:9"],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "default": "16:9"
      },
      "output_format": {
        "enum": ["png", "jpeg"],
        "type": "string",
        "title": "Output Format",
        "name": "output_format",
        "default": "png"
      },
      "prompt_extend": {
        "type": "boolean",
        "title": "Intelligent Prompt Extend",
        "name": "prompt_extend",
        "default": true
      },
      "negative_prompt": {
        "type": "string",
        "title": "Negative Prompt",
        "name": "negative_prompt"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "qwen3-pro-image-to-image",
    "name": "Qwen 3 Pro Image to Image",
    "endpoint": "qwen3-pro-image-to-image",
    "family": "qwen3",
    "imageField": "images_list",
    "maxImages": 3,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired image edit."
      },
      "images_list": {
        "type": "array",
        "field": "images_list",
        "title": "Input Images",
        "name": "images_list",
        "maxItems": 3,
        "items": {"type": "string"}
      },
      "resolution": {
        "enum": ["1k", "2k"],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "default": "1k"
      },
      "aspect_ratio": {
        "enum": ["1:1", "3:2", "2:3", "4:3", "3:4", "16:9", "9:16", "21:9"],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "default": "16:9"
      },
      "output_format": {
        "enum": ["png", "jpeg"],
        "type": "string",
        "title": "Output Format",
        "name": "output_format",
        "default": "png"
      },
      "prompt_extend": {
        "type": "boolean",
        "title": "Intelligent Prompt Extend",
        "name": "prompt_extend",
        "default": true
      },
      "negative_prompt": {
        "type": "string",
        "title": "Negative Prompt",
        "name": "negative_prompt"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "z-image-turbo-image-to-image-lora",
    "name": "Z-Image Turbo Image to Image LoRA",
    "endpoint": "z-image-turbo-image-to-image-lora",
    "imageField": "image_url",
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The positive prompt for the generation.",
        "examples": [
          "A cinematic ocean wave at sunrise, highly detailed"
        ]
      },
      "image_url": {
        "type": "string",
        "title": "Reference Image URL",
        "name": "image_url",
        "field": "image",
        "description": "Reference image URL to guide generation style or composition."
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
              "description": "Civitai model ID (e.g. civitai:1642876@1864626) or HuggingFace URL/path."
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
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "21:9",
          "9:21"
        ],
        "default": "1:1",
        "description": "Output aspect ratio, automatically mapped to pixel dimensions."
      },
      "strength": {
        "type": "number",
        "title": "Strength",
        "name": "strength",
        "default": 0.6,
        "minValue": 0.0,
        "maxValue": 1.0,
        "step": 0.01,
        "description": "Controls the strength of the transformation for reference image."
      },
      "output_format": {
        "type": "string",
        "title": "Output Format",
        "name": "output_format",
        "enum": [
          "jpeg",
          "png",
          "webp"
        ],
        "default": "jpeg",
        "description": "Format of the generated image."
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "qwen-image-edit-2511-lora",
    "name": "Qwen Image Edit 2511 LoRA",
    "endpoint": "qwen-image-edit-2511-lora",
    "imageField": "images_list",
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "A cinematic ocean wave at sunrise, highly detailed"
        ],
        "description": "Text prompt describing the image edits.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/qwen-image-edit-2511-in.jpg"
        ],
        "description": "The images to edit (maximum 3 reference images).",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 3
      },
      "aspect_ratio": {
        "default": "1:1",
        "examples": [
          "1:1"
        ],
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:2",
          "2:3",
          "4:3",
          "3:4",
          "21:9",
          "9:21"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of generated image."
      },
      "loras": {
        "examples": [
          {
            "path": "https://huggingface.co/example/lora/resolve/main/lora.safetensors",
            "scale": 1
          }
        ],
        "title": "LoRAs",
        "name": "loras",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string",
              "format": "url",
              "title": "Path",
              "name": "path",
              "description": "URL or path to the LoRA weights."
            },
            "scale": {
              "type": "number",
              "title": "Scale",
              "name": "scale",
              "description": "Weight multiplier scale.",
              "minValue": 0,
              "maxValue": 4,
              "step": 0.01,
              "default": 1
            }
          }
        },
        "description": "List of LoRAs to apply (maximum 3).",
        "maxItems": 3
      },
      "output_format": {
        "default": "jpeg",
        "examples": [
          "jpeg"
        ],
        "enum": [
          "jpeg",
          "png",
          "webp"
        ],
        "type": "string",
        "title": "Output Format",
        "name": "output_format",
        "description": "Format of the output image."
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "qwen-image-edit-lora",
    "name": "Qwen Image Edit LoRA",
    "endpoint": "qwen-image-edit-lora",
    "imageField": "image_url",
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "default": "A cinematic ocean wave at sunrise, highly detailed",
        "examples": [
          "A cinematic ocean wave at sunrise, highly detailed"
        ],
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the image edits."
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/902675646946/c0951838-8bc5-4598-8e8e-941df16446fa.jpg"
        ],
        "description": "URL of the input image.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
      },
      "aspect_ratio": {
        "default": "1:1",
        "examples": [
          "1:1"
        ],
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:2",
          "2:3",
          "4:3",
          "3:4",
          "21:9",
          "9:21"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of generated image."
      },
      "loras": {
        "examples": [
          [
            {
              "path": "https://huggingface.co/example/lora/resolve/main/lora.safetensors",
              "scale": 1
            }
          ]
        ],
        "title": "LoRAs",
        "name": "loras",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string",
              "format": "url",
              "title": "Path",
              "name": "path",
              "description": "URL or path to the LoRA weights."
            },
            "scale": {
              "type": "number",
              "title": "Scale",
              "name": "scale",
              "description": "Weight multiplier scale.",
              "minValue": 0,
              "maxValue": 4,
              "step": 0.01,
              "default": 1
            }
          }
        },
        "description": "List of LoRAs to apply (maximum 3).",
        "maxItems": 3
      },
      "output_format": {
        "default": "jpeg",
        "examples": [
          "jpeg"
        ],
        "enum": [
          "jpeg",
          "png",
          "webp"
        ],
        "type": "string",
        "title": "Output Format",
        "name": "output_format",
        "description": "Format of the output image."
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "face-expression-change",
    "name": "Face Expression Change",
    "endpoint": "face-expression-change",
    "imageField": "images_list",
    "inputs": {
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/qwen-image-edit-plus-lora-in.jpg"
        ],
        "description": "Upload or provide image urls.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 3
      },
      "aspect_ratio": {
        "default": "1:1",
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:2",
          "2:3",
          "4:3",
          "3:4",
          "21:9",
          "9:21"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Aspect ratio of generated image."
      },
      "rotate_right_left": {
        "title": "Rotate Right-Left (degrees\u00b0)",
        "name": "rotate_right_left",
        "type": "int",
        "description": "Rotate camera left (positive) or right (negative) in degrees. Positive values rotate left, negative values rotate right.",
        "default": 0,
        "minValue": -90,
        "maxValue": 90,
        "step": 1
      },
      "move_forward": {
        "title": "Move Forward \u2192 Close-Up",
        "name": "move_forward",
        "type": "int",
        "description": "Move camera forward (0=no movement, 10=close-up)",
        "default": 0,
        "minValue": 0,
        "maxValue": 10,
        "step": 0.1
      },
      "vertical_angle": {
        "title": "Vertical Angle (Bird \u2b04 Worm)",
        "name": "vertical_angle",
        "type": "int",
        "description": "Adjust vertical camera angle (-1=bird's eye view/looking down, 0=neutral, 1=worm's-eye view/looking up)",
        "default": 0,
        "minValue": -1,
        "maxValue": 1,
        "step": 0.1
      },
      "wide_angle_lens": {
        "type": "boolean",
        "title": "Wide-Angle Lens",
        "name": "wide_angle_lens",
        "description": "Enable wide-angle lens effect",
        "default": false
      },
      "output_format": {
        "default": "jpeg",
        "examples": [
          "jpeg"
        ],
        "enum": [
          "jpeg",
          "png",
          "webp"
        ],
        "type": "string",
        "title": "Output Format",
        "name": "output_format",
        "description": "Format of the output image."
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "muse-image-edit",
    "name": "Muse Image Edit",
    "endpoint": "muse-image-edit",
    "imageField": "images_list",
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Combine these into one scene, matching the lighting and color grade of the first image."
        ],
        "description": "Text instruction describing the desired edit or transformation.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "Reference images to edit or combine. Supports up to 10 images.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 10
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "21:9"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Output layout dimensions. Leave empty to use the source image's dimensions."
      },
      "output_format": {
        "enum": [
          "webp",
          "png",
          "jpeg"
        ],
        "title": "Output Format",
        "name": "output_format",
        "type": "string",
        "description": "Image file format.",
        "default": "webp"
      }
    },
    "provider": "meta",
    "provider_name": "Meta"
  },

  {
    "id": "gemini-omni-character",
    "name": "Gemini Omni Character",
    "endpoint": "gemini-omni-character",
    "family": "gemini-omni",
    "imageField": "images_list",
    "hasPrompt": false,
    "inputs": {
      "descriptions": {
        "type": "string",
        "title": "Character Description",
        "name": "descriptions",
        "description": "Describe the character's appearance, identity, style, and personality.",
        "examples": [
          "A young woman with short silver hair, wearing a dark trench coat, confident and composed demeanor."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "Provide exactly 1 reference image of the character. Maximum 20 MB. Must be a publicly accessible URL.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Reference Image",
        "name": "images_list",
        "maxItems": 1
      },
      "character_name": {
        "type": "string",
        "title": "Character Name",
        "name": "character_name",
        "description": "Optional display name for the character.",
        "examples": [
          "Aria"
        ]
      },
      "audio_ids": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Voice Profile IDs",
        "name": "audio_ids",
        "description": "Optional list of voice profile IDs from Gemini Omni Audio to associate with this character.",
        "examples": [
          "a8f1c2d3e4f5b6a7"
        ]
      }
    },
    "provider": "google",
    "provider_name": "KIE_AI",
    "description": "Generate a reusable character from a single reference image and a text description. Optionally attach a voice profile created with Gemini Omni Audio to give the character a consistent voice in future video generations.",
    "example_url": "https://cdn.muapi.ai/assets/1df8a9c3-7c30-4fe7-bf2b-d89f2a5e40f1.avif",
    "image_url": "https://cdn.muapi.ai/assets/1df8a9c3-7c30-4fe7-bf2b-d89f2a5e40f1.avif"
  },
  {
    "id": "bytedance-seedream-5.0-pro-layer",
    "name": "Bytedance Seedream 5.0 Pro Layer",
    "endpoint": "bytedance-seedream-5.0-pro-layer",
    "family": "seedream-5",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional text description of layer decomposition rules or elements to extract.",
        "examples": [
          "Split the content in the image into 4 layers by combining text and subject elements."
        ]
      },
      "image_url": {
        "examples": [
          "https://static.aiquickdraw.com/tools/example/1786019968051_cKRYLHHu.png"
        ],
        "description": "Upload or provide source image URL to decompose into separate layer components.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
      },
      "resolution": {
        "enum": [
          "auto",
          "1K",
          "1.5K",
          "2K"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Target image resolution level.",
        "default": "auto"
      },
      "output_format": {
        "enum": [
          "png",
          "jpeg"
        ],
        "type": "string",
        "title": "Output Format",
        "name": "output_format",
        "description": "File format of generated image layers.",
        "default": "png"
      }
    },
    "provider": "bytedance",
    "provider_name": "KIE_AI",
    "description": "Decompose complex images into clean, editable multi-layer assets with ByteDance Seedream 5 Pro Layer Decomposition.",
    "example_url": "https://cdn.muapi.ai/assets/9c8cc044-ed81-4990-a437-e15405ab130c.avif",
    "image_url": "https://cdn.muapi.ai/assets/9c8cc044-ed81-4990-a437-e15405ab130c.avif"
  },
  {
    "id": "grok-imagine-image-2-edit",
    "name": "Grok Imagine Image 2 Edit",
    "endpoint": "grok-imagine-image-2-edit",
    "family": "grok",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Change the subject's jacket to a teal windbreaker, keep everything else in the scene unchanged."
        ],
        "description": "Text prompt describing the desired edit. Max 5000 characters.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "request_id": {
        "examples": [
          "189245"
        ],
        "description": "The request_id returned by a prior grok-imagine-image-2 generation to edit.",
        "type": "string",
        "title": "Source Request ID",
        "name": "request_id"
      },
      "mask_indexs": {
        "type": "array",
        "items": {
          "type": "integer"
        },
        "title": "Mask Segment Indexes",
        "name": "mask_indexs",
        "description": "Optional index numbers of segments from the source image to restrict the edit to.",
        "maxItems": 20
      }
    },
    "provider": "grok",
    "provider_name": "KIE_AI",
    "description": "Grok Imagine Image 2.0 Edit applies a targeted, natural-language edit to a prior Grok Imagine Image 2.0 generation, changing only the described region while preserving the rest of the composition, style, and subject.",
    "example_url": "https://cdn.muapi.ai/assets/8fed6c7f-cd7c-488a-94fe-2dad94efa448.avif",
    "image_url": "https://cdn.muapi.ai/assets/8fed6c7f-cd7c-488a-94fe-2dad94efa448.avif"
  },
  {
    "id": "gpt-image-2.5-flare-image-to-image",
    "name": "GPT Image 2.5 Flare Image to Image",
    "endpoint": "gpt-image-2.5-flare-image-to-image",
    "family": "gpt-image-2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Change only the beverage bottle in the center to a matte black can labeled \"PEAK\", keeping the exact same lighting, shadows, reflective surface, background props, and camera angle. Do not change anything else in the scene."
        ],
        "description": "Text instructions describing the desired transformation. Maximum 20,000 characters.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/gpt-image-2-image-to-image-in.jpg"
        ],
        "description": "Upload or provide input images to transform. Up to 16 images supported.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 16
      },
      "aspect_ratio": {
        "enum": [
          "auto",
          "1:1",
          "3:2",
          "2:3",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "27:16",
          "16:27",
          "9:8",
          "8:9"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output image aspect ratio. Note: images with aspect ratio 'auto' (or unspecified) will only be converted to 1K; 1:1 cannot be converted to 4K — otherwise the task will fail to create.",
        "default": "auto"
      },
      "resolution": {
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Image resolution. Note: images with a 1:1 aspect ratio cannot be converted to 4K. Images with aspect ratio 'auto' (or unspecified) will only be converted to 1K; otherwise the task will fail to create.",
        "default": "2K"
      },
      "quality": {
        "enum": [
          "low",
          "medium",
          "high",
          "xhigh",
          "max"
        ],
        "type": "string",
        "title": "Quality",
        "name": "quality",
        "description": "Output quality tier. \"high\" is rendered by the primary provider; \"low\", \"medium\", \"xhigh\", and \"max\" render on an alternate provider with a wider quality range.",
        "default": "high"
      }
    },
    "provider": "openai",
    "provider_name": "KIE_AI",
    "description": "Transform and edit existing images using GPT-Image-2.5 Flare, OpenAI's default GPT Image 2.5 tier. Precision editing changes only what you ask for while preserving the rest of the scene, and multi-turn consistency keeps earlier edits intact across a chain of changes.",
    "example_url": "https://cdn.muapi.ai/assets/dc2079a3-b9d9-4654-86d6-81974fa9d0f1.avif",
    "image_url": "https://cdn.muapi.ai/assets/dc2079a3-b9d9-4654-86d6-81974fa9d0f1.avif"
  },
  {
    "id": "gpt-image-2.5-sunburst-image-to-image",
    "name": "GPT Image 2.5 Sunburst Image to Image",
    "endpoint": "gpt-image-2.5-sunburst-image-to-image",
    "family": "gpt-image-2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Change only the beverage bottle in the center to a matte black can labeled \"PEAK\", keeping the exact same lighting, shadows, reflective surface, background props, and camera angle. Do not change anything else in the scene."
        ],
        "description": "Text instructions describing the desired transformation. Maximum 20,000 characters.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/gpt-image-2-image-to-image-in.jpg"
        ],
        "description": "Upload or provide input images to transform. Up to 16 images supported.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 16
      },
      "aspect_ratio": {
        "enum": [
          "auto",
          "1:1",
          "3:2",
          "2:3",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "27:16",
          "16:27",
          "9:8",
          "8:9"
        ],
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output image aspect ratio. Note: images with aspect ratio 'auto' (or unspecified) will only be converted to 1K; 1:1 cannot be converted to 4K — otherwise the task will fail to create.",
        "default": "auto"
      },
      "resolution": {
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Image resolution. Note: images with a 1:1 aspect ratio cannot be converted to 4K. Images with aspect ratio 'auto' (or unspecified) will only be converted to 1K; otherwise the task will fail to create.",
        "default": "2K"
      },
      "quality": {
        "enum": [
          "low",
          "medium",
          "high",
          "xhigh",
          "max"
        ],
        "type": "string",
        "title": "Quality",
        "name": "quality",
        "description": "Output quality tier. \"high\" is rendered by the primary provider; \"low\", \"medium\", \"xhigh\", and \"max\" render on an alternate provider with a wider quality range.",
        "default": "high"
      }
    },
    "provider": "openai",
    "provider_name": "KIE_AI",
    "description": "Transform and edit existing images using GPT-Image-2.5 Sunburst, OpenAI's slower, higher-precision GPT Image 2.5 tier, tuned for maximum edit precision on a single critical edit.",
    "example_url": "https://cdn.muapi.ai/assets/17776e8a-5679-4c77-9db6-f24025642bdf.avif",
    "image_url": "https://cdn.muapi.ai/assets/17776e8a-5679-4c77-9db6-f24025642bdf.avif"
  },
  {
    "id": "topaz-upscale-image-creative",
    "name": "Topaz Upscale Image Creative",
    "endpoint": "topaz-upscale-image-creative",
    "family": "topaz-2-image-creative",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/imagemodels/topaz-upscaler-in.jpg"
        ],
        "description": "Input image to upscale.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
      },
      "model": {
        "description": "Topaz creative upscale model variant.",
        "type": "string",
        "title": "Model",
        "name": "model",
        "enum": [
          "Bloom 2",
          "Bloom",
          "Bloom Realism"
        ],
        "default": "Bloom 2"
      },
      "upscale_factor": {
        "description": "Factor to upscale the image by.",
        "type": "number",
        "title": "Upscale Factor",
        "name": "upscale_factor",
        "default": 2
      },
      "autoprompt": {
        "description": "Automatically generate a creative-detail prompt.",
        "type": "boolean",
        "title": "Autoprompt",
        "name": "autoprompt"
      },
      "creativity": {
        "description": "Creative detail strength (1-9).",
        "type": "int",
        "title": "Creativity",
        "name": "creativity",
        "minValue": 1,
        "maxValue": 9,
        "step": 1
      },
      "color_preservation": {
        "description": "Preserve original color palette.",
        "type": "boolean",
        "title": "Color Preservation",
        "name": "color_preservation"
      },
      "crop_to_fill": {
        "description": "Crop the output to exactly fill the target aspect ratio.",
        "type": "boolean",
        "title": "Crop To Fill",
        "name": "crop_to_fill",
        "default": false
      },
      "output_format": {
        "description": "Output image file format.",
        "type": "string",
        "title": "Output Format",
        "name": "output_format",
        "enum": [
          "jpeg",
          "png"
        ],
        "default": "jpeg"
      }
    },
    "provider": "topaz",
    "provider_name": "FAL_AI",
    "description": "Upscale an image with Topaz's creative/generative-detail model, adding plausible new fine detail while enlarging up to 4x.",
    "example_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/imagemodels/topaz-upscaler.jpg",
    "image_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/imagemodels/topaz-upscaler.jpg"
  },
  {
    "id": "topaz-upscale-image-generative",
    "name": "Topaz Upscale Image Generative",
    "endpoint": "topaz-upscale-image-generative",
    "family": "topaz-2-image-generative",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": false,
    "inputs": {
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/imagemodels/topaz-upscaler-in.jpg"
        ],
        "description": "Input image to upscale.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
      },
      "model": {
        "description": "Topaz generative upscale model variant.",
        "type": "string",
        "title": "Model",
        "name": "model",
        "enum": [
          "Wonder 3.5",
          "Wonder 3",
          "Wonder 2",
          "Wonder",
          "Recover 3",
          "Standard MAX",
          "Redefine",
          "Recovery V2",
          "Recovery"
        ],
        "default": "Wonder 3"
      },
      "upscale_factor": {
        "description": "Factor to upscale the image by.",
        "type": "number",
        "title": "Upscale Factor",
        "name": "upscale_factor",
        "default": 2
      },
      "crop_to_fill": {
        "description": "Crop the output to exactly fill the target aspect ratio.",
        "type": "boolean",
        "title": "Crop To Fill",
        "name": "crop_to_fill",
        "default": false
      },
      "output_format": {
        "description": "Output image file format.",
        "type": "string",
        "title": "Output Format",
        "name": "output_format",
        "enum": [
          "jpeg",
          "png"
        ],
        "default": "jpeg"
      },
      "subject_detection": {
        "description": "Which region of the image to prioritize enhancement on.",
        "type": "string",
        "title": "Subject Detection",
        "name": "subject_detection",
        "enum": [
          "All",
          "Foreground",
          "Background"
        ],
        "default": "All"
      },
      "face_enhancement": {
        "description": "Enable dedicated face enhancement.",
        "type": "boolean",
        "title": "Face Enhancement",
        "name": "face_enhancement",
        "default": true
      },
      "face_enhancement_strength": {
        "description": "Strength of face enhancement.",
        "type": "number",
        "title": "Face Enhancement Strength",
        "name": "face_enhancement_strength",
        "default": 0.8
      },
      "face_enhancement_creativity": {
        "description": "Creativity applied to face enhancement.",
        "type": "number",
        "title": "Face Enhancement Creativity",
        "name": "face_enhancement_creativity",
        "default": 0
      },
      "enhancement_strength": {
        "description": "Overall enhancement strength tier.",
        "type": "string",
        "title": "Enhancement Strength",
        "name": "enhancement_strength",
        "enum": [
          "low",
          "medium",
          "high"
        ]
      },
      "creativity": {
        "description": "Creative detail strength (1-6).",
        "type": "int",
        "title": "Creativity",
        "name": "creativity",
        "minValue": 1,
        "maxValue": 6,
        "step": 1
      },
      "texture": {
        "description": "Texture detail strength (1-5).",
        "type": "int",
        "title": "Texture",
        "name": "texture",
        "minValue": 1,
        "maxValue": 5,
        "step": 1
      },
      "prompt": {
        "description": "Optional text prompt to guide generative detail.",
        "type": "string",
        "title": "Prompt",
        "name": "prompt"
      },
      "autoprompt": {
        "description": "Automatically generate a guiding prompt.",
        "type": "boolean",
        "title": "Autoprompt",
        "name": "autoprompt"
      },
      "sharpen": {
        "description": "Sharpening amount (0-1).",
        "type": "number",
        "title": "Sharpen",
        "name": "sharpen"
      },
      "denoise": {
        "description": "Denoising amount (0-1).",
        "type": "number",
        "title": "Denoise",
        "name": "denoise"
      },
      "detail": {
        "description": "Fine-detail amount (0-1).",
        "type": "number",
        "title": "Detail",
        "name": "detail"
      }
    },
    "provider": "topaz",
    "provider_name": "FAL_AI",
    "description": "Upscale an image with Topaz's Wonder/Recover generative models, reconstructing realistic fine detail, textures, and faces at high resolution.",
    "example_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/imagemodels/topaz-upscaler.jpg",
    "image_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/imagemodels/topaz-upscaler.jpg"
  },
  {
    "id": "topaz-upscale-image-precision",
    "name": "Topaz Upscale Image Precision",
    "endpoint": "topaz-upscale-image-precision",
    "family": "topaz-2-image-precision",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/imagemodels/topaz-upscaler-in.jpg"
        ],
        "description": "Input image to upscale.",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
      },
      "model": {
        "description": "Topaz precision upscale model variant.",
        "type": "string",
        "title": "Model",
        "name": "model",
        "enum": [
          "Standard V2",
          "High Fidelity V3",
          "High Fidelity V2",
          "Low Resolution V2",
          "CGI",
          "Text Refine",
          "Faces"
        ],
        "default": "Standard V2"
      },
      "upscale_factor": {
        "description": "Factor to upscale the image by.",
        "type": "number",
        "title": "Upscale Factor",
        "name": "upscale_factor",
        "default": 2
      },
      "output_format": {
        "description": "Output image file format.",
        "type": "string",
        "title": "Output Format",
        "name": "output_format",
        "enum": [
          "jpeg",
          "png"
        ],
        "default": "jpeg"
      },
      "crop_to_fill": {
        "description": "Crop the output to exactly fill the target aspect ratio.",
        "type": "boolean",
        "title": "Crop To Fill",
        "name": "crop_to_fill",
        "default": false
      },
      "subject_detection": {
        "description": "Which region of the image to prioritize enhancement on.",
        "type": "string",
        "title": "Subject Detection",
        "name": "subject_detection",
        "enum": [
          "All",
          "Foreground",
          "Background"
        ],
        "default": "All"
      },
      "face_enhancement": {
        "description": "Enable dedicated face enhancement.",
        "type": "boolean",
        "title": "Face Enhancement",
        "name": "face_enhancement",
        "default": true
      },
      "face_enhancement_creativity": {
        "description": "Creativity applied to face enhancement.",
        "type": "number",
        "title": "Face Enhancement Creativity",
        "name": "face_enhancement_creativity",
        "default": 0
      },
      "face_enhancement_strength": {
        "description": "Strength of face enhancement.",
        "type": "number",
        "title": "Face Enhancement Strength",
        "name": "face_enhancement_strength",
        "default": 0.8
      },
      "sharpen": {
        "description": "Sharpening amount (0-1).",
        "type": "number",
        "title": "Sharpen",
        "name": "sharpen"
      },
      "denoise": {
        "description": "Denoising amount (0-1).",
        "type": "number",
        "title": "Denoise",
        "name": "denoise"
      },
      "fix_compression": {
        "description": "Reduce compression artifacts (0-1).",
        "type": "number",
        "title": "Fix Compression",
        "name": "fix_compression"
      },
      "strength": {
        "description": "Overall enhancement strength (0.01-1).",
        "type": "number",
        "title": "Strength",
        "name": "strength"
      }
    },
    "provider": "topaz",
    "provider_name": "FAL_AI",
    "description": "Upscale an image faithfully with Topaz's precision models (Standard/High Fidelity/CGI/Text Refine/Faces), preserving the original look while sharpening fine detail.",
    "example_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/imagemodels/topaz-upscaler.jpg",
    "image_url": "https://d3adwkbyhxyrtq.cloudfront.net/webassets/imagemodels/topaz-upscaler.jpg"
  },
  {
    "id": "qwen2-1-image-to-image",
    "name": "Qwen2 1 Image to Image",
    "endpoint": "qwen2-1-image-to-image",
    "family": "qwen2-1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt describing the result you want. When mask_url is supplied, describe what should be generated inside the white area of the mask.",
        "examples": [
          "Replace the backpack in the first image with the colour scheme from the second image, and leave everything else unchanged"
        ]
      },
      "images_list": {
        "description": "Reference images, given as an array of 1 to 10 URLs. Order matters when the prompt refers to 'the first image', 'the second image'.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Input Images",
        "name": "images_list",
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "maxItems": 10
      },
      "mask_url": {
        "type": "string",
        "title": "Mask URL",
        "name": "mask_url",
        "description": "Inpainting mask (white = area to change, black = kept unchanged) that switches the request into local-edit mode. Must be used with exactly one reference image."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "description": "Output aspect ratio. Defaults to the first reference image's ratio. Ignored in local-edit mode.",
        "enum": [
          "auto",
          "1:1",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "16:9",
          "9:16",
          "21:9",
          "9:21"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Output resolution tier. 1K is the faster option; 2K produces four times the pixels and takes longer.",
        "enum": [
          "1K",
          "2K"
        ],
        "default": "1K"
      },
      "background": {
        "type": "string",
        "title": "Background",
        "name": "background",
        "description": "Background type. Transparent outputs a PNG or WebP with a real alpha channel and cannot be used with JPEG.",
        "enum": [
          "opaque",
          "transparent"
        ],
        "default": "opaque"
      },
      "output_format": {
        "type": "string",
        "title": "Output Format",
        "name": "output_format",
        "description": "Output image format. jpeg has no alpha channel and cannot be combined with a transparent background.",
        "enum": [
          "png",
          "webp",
          "jpeg"
        ],
        "default": "png"
      },
      "enhance_prompt": {
        "type": "boolean",
        "title": "Enhance Prompt",
        "name": "enhance_prompt",
        "description": "Rewrites the prompt into a fuller scene description before generating, which noticeably improves quality. Ignored in local-edit mode.",
        "default": true
      },
      "seed": {
        "type": "integer",
        "title": "Seed",
        "name": "seed",
        "description": "The random seed. Omit it to generate with a random seed."
      }
    },
    "provider": "alibaba",
    "provider_name": "KIE_AI",
    "description": "Qwen 2.1 Image to Image edits and recombines up to 10 reference images from a text prompt, with an optional inpainting mask for precise local edits.",
    "example_url": "https://cdn.muapi.ai/assets/image_download_7.avif",
    "image_url": "https://cdn.muapi.ai/assets/image_download_7.avif"
  },
  {
    "id": "seedream-5.0-flash-edit",
    "name": "Seedream 5.0 Flash Edit",
    "endpoint": "seedream-5.0-flash-edit",
    "family": "seedream-5",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired modification",
        "examples": [
          "Keep the model's pose and the flowing shape of the liquid dress unchanged. Change the clothing material from silver metal to completely transparent clear water. Lighting changes from reflection to refraction."
        ]
      },
      "images_list": {
        "examples": [
          "https://static.aiquickdraw.com/tools/example/1764851484363_ScV1s2aq.webp"
        ],
        "description": "Upload or provide up to 10 reference images (JPEG, PNG, WebP; max 30MB each).",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Image URLs",
        "name": "images_list",
        "maxItems": 10
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "2:3",
          "3:2",
          "21:9"
        ],
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Aspect ratio of the output image.",
        "default": "1:1"
      },
      "resolution": {
        "enum": [
          "1K",
          "2K"
        ],
        "title": "Resolution",
        "name": "resolution",
        "type": "string",
        "description": "Output resolution: 1K (basic) or 2K (high).",
        "default": "1K"
      },
      "output_format": {
        "enum": [
          "png",
          "jpeg"
        ],
        "title": "Output Format",
        "name": "output_format",
        "type": "string",
        "description": "Format of the output image.",
        "default": "png"
      }
    },
    "provider": "bytedance",
    "provider_name": "KIE_AI",
    "description": "Seedream 5.0 Flash Edit is ByteDance's fast, low-cost image-to-image tier, editing or combining up to 10 reference images from a text instruction at 1K or 2K.",
    "example_url": "https://cdn.muapi.ai/assets/fb9474e2-d72d-4179-b769-5c516622e245.avif",
    "image_url": "https://cdn.muapi.ai/assets/fb9474e2-d72d-4179-b769-5c516622e245.avif"
  },
  {
    "id": "seedream-5.0-flash-layerize",
    "name": "Seedream 5.0 Flash Layerize",
    "endpoint": "seedream-5.0-flash-layerize",
    "family": "seedream-5",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional. Describe which elements to separate; supports <bbox>x1 y1 x2 y2</bbox> (0-1000 normalized). Leave empty to auto-detect main elements.",
        "examples": [
          "Separate the title text <bbox>179 58 809 197</bbox> and the parrot <bbox>330 274 641 991</bbox> into independent layers"
        ]
      },
      "image_url": {
        "examples": [
          "https://static.aiquickdraw.com/tools/example/1786019968051_cKRYLHHu.png"
        ],
        "description": "Source image to decompose (exactly 1; PNG, JPEG, WebP, BMP, TIFF, GIF; max 30MB).",
        "field": "image",
        "type": "string",
        "title": "Image URL",
        "name": "image_url"
      },
      "resolution": {
        "enum": [
          "auto",
          "1K",
          "1.5K",
          "2K"
        ],
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "description": "Target image resolution level.",
        "default": "auto"
      },
      "output_format": {
        "enum": [
          "png",
          "jpeg"
        ],
        "type": "string",
        "title": "Output Format",
        "name": "output_format",
        "description": "Format of the base image only; separated layers are always PNG.",
        "default": "jpeg"
      }
    },
    "provider": "bytedance",
    "provider_name": "KIE_AI",
    "description": "Decompose a composite image into a base image plus clean, separate layer assets with Seedream 5.0 Flash Layer Decomposition. Optionally target elements with prompts or <bbox> regions.",
    "example_url": "https://cdn.muapi.ai/assets/9c8cc044-ed81-4990-a437-e15405ab130c.avif",
    "image_url": "https://cdn.muapi.ai/assets/9c8cc044-ed81-4990-a437-e15405ab130c.avif"
  }
,
{
  "id": "photo-pack",
  "name": "Photo Packs",
  "endpoint": "photo-pack",
  "family": "nano",
  "description": "Generate a pack of high-quality, professional portraits in various styles (LinkedIn, CEO, Tinder, etc.) while preserving your facial features.",
  "inputs": {
    "image_url": {
      "description": "URL of the reference face image.",
      "examples": [
        "https://cdn.muapi.ai/outputs/f4de34961d154abbb93c38dc8c53cfe2.jpg"
      ],
      "field": "image",
      "type": "string",
      "title": "Image URL",
      "name": "image_url"
    },
    "category": {
      "enum": [
        "LinkedIn",
        "Tinder",
        "Bumble",
        "OldMoney",
        "Cyberpunk",
        "CEO",
        "CleanGirl",
        "DarkAcademia",
        "Anime",
        "Doctor",
        "Lawyer",
        "MobWife",
        "Bali",
        "90s",
        "Fitness",
        "Christmas",
        "Halloween",
        "EuropeanElegance",
        "ChampionSportsMoment",
        "JobSwapDaydream",
        "TravelTheWorld",
        "DatingPack",
        "FlashPosePerfection",
        "CapAndGown",
        "CorporateBoss",
        "RocknRollLuxury",
        "TheBigWeddingDay",
        "RusticCharm",
        "DressedToImpress",
        "IdentificationPhoto",
        "DontMissYourProm",
        "GoddessOfNature",
        "BlackAndWhiteMagic",
        "HomelyComforts",
        "BalloonsBalloonsBalloons",
        "BeautyBlooms",
        "SuperheroAdventure",
        "BoldFashionStatements",
        "FantasyOutfits",
        "OnTheCatwalk",
        "HalloweenHorror",
        "CosplayGalore",
        "Ghibli",
        "Pixar",
        "SpiderVerse"
      ],
      "description": "The category/style of the photo pack.",
      "type": "string",
      "title": "Category",
      "name": "category",
      "default": "LinkedIn"
    },
    "aspect_ratio": {
      "enum": [
        "1:1",
        "3:4",
        "4:3",
        "9:16",
        "16:9"
      ],
      "description": "Output image aspect ratio.",
      "type": "string",
      "title": "Aspect Ratio",
      "name": "aspect_ratio",
      "default": "1:1"
    },
    "model_name": {
      "enum": [
        "nano-banana-edit",
        "nano-banana-2-edit",
        "nano-banana-pro-edit"
      ],
      "description": "The underlying model to use.",
      "type": "string",
      "title": "Model Name",
      "name": "model_name",
      "default": "nano-banana-2-edit"
    }
  },
  "required": [
    "image_url"
  ],
  "hasPrompt": false,
  "promptRequired": false,
  "imageField": "image_url",
  "imageOptional": false,
  "provider": "google",
  "provider_name": "KIE_AI",
  "example_url": "https://cdn.muapi.ai/outputs/1343723e9655485e95a71ba55b652732.jpg",
  "image_url": "https://cdn.muapi.ai/outputs/1343723e9655485e95a71ba55b652732.jpg"
},
{
  "id": "flux-3-image-to-image",
  "name": "Image to Image",
  "endpoint": "flux-3-image-to-image",
  "family": "flux-3",
  "description": "FLUX 3 Image-to-Image edits and restyles existing images using a text instruction plus up to several reference images. Built on Black Forest Labs' unified multimodal architecture, it preserves subject identity and scene structure while applying precise, prompt-driven edits — ideal for product retouching, style transfer, and character-consistent edits.",
  "inputs": {
    "prompt": {
      "examples": [
        "A hyperrealistic portrait of an astronaut standing on red Martian dunes at golden hour, dust particles catching the light, ultra-detailed suit reflections, cinematic depth of field."
      ],
      "description": "Text prompt describing the image. Supports long, richly detailed descriptions.",
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
        "2:3",
        "3:2",
        "21:9"
      ],
      "title": "Aspect Ratio",
      "name": "aspect_ratio",
      "type": "string",
      "description": "Aspect ratio of the output image.",
      "default": "1:1"
    },
    "resolution": {
      "enum": [
        "1k",
        "2k",
        "4k"
      ],
      "title": "Resolution",
      "name": "resolution",
      "type": "string",
      "description": "Target resolution of the generated image.",
      "default": "2k"
    },
    "images_list": {
      "examples": [
        "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
      ],
      "description": "Reference image(s) to edit or use as visual guidance.",
      "field": "images_list",
      "type": "array",
      "items": {
        "type": "string"
      },
      "title": "Image URLs",
      "name": "images_list",
      "maxItems": 4
    }
  },
  "required": [
    "prompt",
    "images_list"
  ],
  "hasPrompt": true,
  "promptRequired": true,
  "imageField": "images_list",
  "maxImages": 4,
  "imageOptional": false,
  "provider": "blackforest",
  "provider_name": "BLACKFOREST_LABS",
  "example_url": "https://cdn.muapi.ai/assets/fa0367e9-beb6-4927-bf81-741170302e37.avif",
  "image_url": "https://cdn.muapi.ai/assets/fa0367e9-beb6-4927-bf81-741170302e37.avif"
},
{
  "id": "wan3.0-image-edit",
  "name": "Wan 3.0 Image Edit",
  "endpoint": "wan3.0-image-edit",
  "family": "wan3.0",
  "description": "Wan 3.0 Image Edit is an upcoming AI image-editing model. Confirmed API controls, output specifications, and pricing will be published at launch.",
  "inputs": {
    "prompt": {
      "type": "string",
      "title": "Prompt",
      "name": "prompt",
      "description": "Describe the edit you want to make.",
      "examples": [
        "Replace the background with a warm, sunlit Mediterranean terrace while preserving the subject."
      ]
    },
    "image_url": {
      "type": "string",
      "title": "Image URL",
      "name": "image_url",
      "description": "Source image to edit.",
      "field": "image",
      "examples": []
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
  "provider": "alibaba",
  "provider_name": "ALIBABA",
  "example_url": "https://cdn.muapi.ai/assets/ae29a801-d504-4c74-bb3b-37b496446915.avif",
  "image_url": "https://cdn.muapi.ai/assets/ae29a801-d504-4c74-bb3b-37b496446915.avif"
},
{
  "id": "gpt-image-2.6-flare-image-to-image",
  "name": "GPT Image 2.6 Flare Image to Image",
  "endpoint": "gpt-image-2.6-flare-image-to-image",
  "family": "gpt-image-2.6",
  "description": "Edit or combine up to 16 reference images using GPT-Image-2.6 Flare, OpenAI's faster GPT Image 2.6 model. Say what should stay the same and what should change, and get fast, layout-aware edits at up to 4K.",
  "inputs": {
    "prompt": {
      "examples": [
        "Change only the beverage bottle in the center to a matte black can labeled \"PEAK\", keeping the exact same lighting, shadows, reflective surface, background props, and camera angle. Do not change anything else in the scene."
      ],
      "description": "Text instructions describing the desired transformation. Maximum 20,000 characters.",
      "type": "string",
      "title": "Prompt",
      "name": "prompt"
    },
    "images_list": {
      "examples": [
        "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/gpt-image-2-image-to-image-in.jpg"
      ],
      "description": "Upload or provide input images to transform. Up to 16 images supported.",
      "field": "images_list",
      "type": "array",
      "items": {
        "type": "string"
      },
      "title": "Image URLs",
      "name": "images_list",
      "maxItems": 16
    },
    "aspect_ratio": {
      "enum": [
        "auto",
        "1:1",
        "3:2",
        "2:3",
        "4:3",
        "3:4",
        "5:4",
        "4:5",
        "16:9",
        "9:16",
        "2:1",
        "1:2",
        "21:9",
        "9:21",
        "3:1",
        "1:3"
      ],
      "type": "string",
      "title": "Aspect Ratio",
      "name": "aspect_ratio",
      "description": "Output aspect ratio. 'auto' lets the model choose the best frame.",
      "default": "auto"
    },
    "resolution": {
      "enum": [
        "1K",
        "2K",
        "4K"
      ],
      "type": "string",
      "title": "Resolution",
      "name": "resolution",
      "description": "Output size tier. Higher tiers take longer and cost more.",
      "default": "1K"
    },
    "background": {
      "enum": [
        "auto",
        "transparent",
        "opaque"
      ],
      "type": "string",
      "title": "Background",
      "name": "background",
      "description": "Background handling. Only applies at 1K resolution.",
      "default": "auto"
    },
    "output_format": {
      "enum": [
        "png",
        "jpeg",
        "webp",
        "gif"
      ],
      "type": "string",
      "title": "Output Format",
      "name": "output_format",
      "description": "Output image format. GIF costs the same as a still image.",
      "default": "png"
    },
    "frame_count": {
      "enum": [
        "auto",
        "4",
        "9",
        "16",
        "25",
        "36",
        "64"
      ],
      "type": "string",
      "title": "Frame Count",
      "name": "frame_count",
      "description": "Number of GIF frames. Only used when output_format is gif.",
      "default": "auto"
    },
    "frame_duration_ms": {
      "type": "integer",
      "title": "Frame Duration (ms)",
      "name": "frame_duration_ms",
      "description": "Duration of each GIF frame in ms (20-2000). Only used when output_format is gif.",
      "minimum": 20,
      "maximum": 2000
    }
  },
  "required": [
    "prompt",
    "images_list"
  ],
  "hasPrompt": true,
  "promptRequired": true,
  "imageField": "images_list",
  "maxImages": 16,
  "imageOptional": false,
  "provider": "openai",
  "provider_name": "KIE_AI",
  "example_url": "https://cdn.muapi.ai/assets/dc2079a3-b9d9-4654-86d6-81974fa9d0f1.avif",
  "image_url": "https://cdn.muapi.ai/assets/dc2079a3-b9d9-4654-86d6-81974fa9d0f1.avif"
},
{
  "id": "gpt-image-2.6-sunburst-image-to-image",
  "name": "GPT Image 2.6 Sunburst Image to Image",
  "endpoint": "gpt-image-2.6-sunburst-image-to-image",
  "family": "gpt-image-2.6",
  "description": "Edit or combine up to 16 reference images using GPT-Image-2.6 Sunburst, OpenAI's GPT Image 2.6 model for detailed visual work, with stronger consistency across edits at up to 4K.",
  "inputs": {
    "prompt": {
      "examples": [
        "Change only the beverage bottle in the center to a matte black can labeled \"PEAK\", keeping the exact same lighting, shadows, reflective surface, background props, and camera angle. Do not change anything else in the scene."
      ],
      "description": "Text instructions describing the desired transformation. Maximum 20,000 characters.",
      "type": "string",
      "title": "Prompt",
      "name": "prompt"
    },
    "images_list": {
      "examples": [
        "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/gpt-image-2-image-to-image-in.jpg"
      ],
      "description": "Upload or provide input images to transform. Up to 16 images supported.",
      "field": "images_list",
      "type": "array",
      "items": {
        "type": "string"
      },
      "title": "Image URLs",
      "name": "images_list",
      "maxItems": 16
    },
    "aspect_ratio": {
      "enum": [
        "auto",
        "1:1",
        "3:2",
        "2:3",
        "4:3",
        "3:4",
        "5:4",
        "4:5",
        "16:9",
        "9:16",
        "2:1",
        "1:2",
        "21:9",
        "9:21",
        "3:1",
        "1:3"
      ],
      "type": "string",
      "title": "Aspect Ratio",
      "name": "aspect_ratio",
      "description": "Output aspect ratio. 'auto' lets the model choose the best frame.",
      "default": "auto"
    },
    "resolution": {
      "enum": [
        "1K",
        "2K",
        "4K"
      ],
      "type": "string",
      "title": "Resolution",
      "name": "resolution",
      "description": "Output size tier. Higher tiers take longer and cost more.",
      "default": "1K"
    },
    "background": {
      "enum": [
        "auto",
        "transparent",
        "opaque"
      ],
      "type": "string",
      "title": "Background",
      "name": "background",
      "description": "Background handling. Only applies at 1K resolution.",
      "default": "auto"
    },
    "output_format": {
      "enum": [
        "png",
        "jpeg",
        "webp",
        "gif"
      ],
      "type": "string",
      "title": "Output Format",
      "name": "output_format",
      "description": "Output image format. GIF costs the same as a still image.",
      "default": "png"
    },
    "frame_count": {
      "enum": [
        "auto",
        "4",
        "9",
        "16",
        "25",
        "36",
        "64"
      ],
      "type": "string",
      "title": "Frame Count",
      "name": "frame_count",
      "description": "Number of GIF frames. Only used when output_format is gif.",
      "default": "auto"
    },
    "frame_duration_ms": {
      "type": "integer",
      "title": "Frame Duration (ms)",
      "name": "frame_duration_ms",
      "description": "Duration of each GIF frame in ms (20-2000). Only used when output_format is gif.",
      "minimum": 20,
      "maximum": 2000
    }
  },
  "required": [
    "prompt",
    "images_list"
  ],
  "hasPrompt": true,
  "promptRequired": true,
  "imageField": "images_list",
  "maxImages": 16,
  "imageOptional": false,
  "provider": "openai",
  "provider_name": "KIE_AI",
  "example_url": "https://cdn.muapi.ai/assets/17776e8a-5679-4c77-9db6-f24025642bdf.avif",
  "image_url": "https://cdn.muapi.ai/assets/17776e8a-5679-4c77-9db6-f24025642bdf.avif"
}
];
