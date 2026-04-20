import type { Project } from "./types";

export const crownsOfAnchors: Project = {
    id: "crowns-of-anchors",
    title: "Crowns of Anchors",
    year: "2026",
    engine: "Unreal Engine 5",
    role: "Technical Artist / UI Designer / Blueprint Programmer",
    description:
      "Stylized roguelike RPG centered on gameplay-driven visual systems, full UI implementation, shader-based readability, and production-ready pipelines.",
    longDescription:
      "Crowns of Anchors is an 8-month capstone project developed by a team of 12. I worked across art direction, technical art, and Blueprint programming, focusing on building gameplay-driven systems, implementing a full UI pipeline, creating shaders for readability, and ensuring asset integration between DCC tools and Unreal Engine.",

    categories: [
      "Technical Art",
      "Shaders",
      "Rigging",
      "Animation",
      "Gameplay",
      "Level Design",
      "Tools",
    ],

    image: "/menus/coa.webp",
    accent: "#d85b19",
    infoBg: "#21492e",
    duration: "8 Months",
    team: "Team of 12",

    myRole:
      "I worked across art leadership, technical art, and gameplay systems. My role focused on building UI systems, shader-driven interactions, gameplay nodes, environment workflows, and bridging assets into Unreal Engine with production-ready pipelines.",

    responsibilities: [
      "Defined visual direction through Art Guide, concepts, and documentation",
      "Designed and implemented full UI system (layout, animation, behavior, gameplay integration)",
      "Programmed gameplay systems including squad management and camera behavior",
      "Created node-based board system with shaders, VFX, and interaction logic",
      "Developed shaders for occlusion masking and distance-based fading",
      "Built environment materials using distance tiling and cell bombing",
      "Modeled, textured, and integrated environment assets and foliage",
      "Designed, modeled, rigged, and animated playable characters",
      "Integrated and optimized team-created assets (rigs, materials, skeletons)",
      "Created weapons and implemented socket-based attachment systems",
    ],

    toolsUsed: [
      "Unreal Engine 5",
      "Blueprints",
      "Materials",
      "Runtime Virtual Texturing",
      "Environment Virtual Texturing",
      "Blender",
      "Hand-Painted Texturing",
      "UI Design",
      "VFX",
    ],

    breakdownStyle: "technical",

    sections: [
      {
        id: "visual-direction",
        title: "Visual Direction & Art Leadership",
        text:
          "Defined the visual identity through documentation, concepts, and art direction across the team.",
        image: "/projects/crowns/visual-direction.webp",
        breakdownStyle: "visual",
        breakdown: {
          video: "/projects/crowns/videos/visual-direction.mp4",
          notes: [
            "Art Guide established a shared visual language",
            "Concepts defined characters, nodes, and UI",
            "Storyboards supported tone and player flow",
          ],
          steps: [
            {
              image: "/projects/crowns/art-guide.png",
              label: "Art Guide",
              caption: "Defined visual direction for the team.",
            },
            {
              image: "/projects/crowns/concepts.png",
              label: "Concept Art",
              caption: "Established visual identity.",
            },
          ],
        },
      },

      {
        id: "ui-systems",
        title: "UI Design & Gameplay Systems",
        text:
          "Full UI system designed and implemented from concept to gameplay integration, including squad management and dynamic feedback.",
        image: "/projects/crowns/ui.webp",
        breakdownStyle: "technical",
        breakdown: {
          video: "/projects/crowns/videos/ui.mp4",
          notes: [
            "Full UI pipeline from concept to implementation",
            "Blueprint-based logic and state handling",
            "Integrated squad management system",
            "Built modular helper systems",
          ],
          steps: [
            {
              image: "/projects/crowns/ui-concepts.png",
              label: "Concept",
              caption: "UI direction and layout.",
            },
            {
              image: "/projects/crowns/ui-blueprints.png",
              label: "Logic",
              caption: "Blueprint UI systems.",
            },
            {
              image: "/projects/crowns/ui-final.png",
              label: "Final",
              caption: "Integrated UI system.",
            },
          ],
        },
      },

      {
        id: "board-system",
        title: "Board System & Node Interactions",
        text:
          "Node-based gameplay system with visual feedback, shaders, and proximity-based interactions.",
        image: "/projects/crowns/nodes.png",
        breakdownStyle: "technical",
        breakdown: {
          video: "/projects/crowns/videos/nodes.mp4",
          notes: [
            "Nodes represent gameplay events",
            "Custom shaders and VFX per node",
            "Dissolve interaction system",
          ],
          steps: [
            {
              image: "/projects/crowns/nodes-types.png",
              label: "Node Types",
              caption: "Gameplay nodes.",
            },
            {
              image: "/projects/crowns/nodes-dissolve.png",
              label: "Interaction",
              caption: "Dissolve effect.",
            },
          ],
        },
      },

      {
        id: "shader-systems",
        title: "Shader & Material Systems",
        text:
          "Shaders built for readability and stylization.",
        image: "/projects/crowns/shader.webp",
        breakdownStyle: "technical",
        breakdown: {
          video: "/projects/crowns/videos/shaders.mp4",
          notes: [
            "Occlusion mask for visibility",
            "Distance fade for clarity",
            "Reusable material systems",
          ],
          steps: [
            {
              image: "/projects/crowns/occlusion.png",
              label: "Occlusion",
              caption: "Character visibility.",
            },
            {
              image: "/projects/crowns/fade-distance.png",
              label: "Fade",
              caption: "Distance-based fading.",
            },
          ],
        },
      },

      {
        id: "environment-tech",
        title: "Environment & Materials",
        text:
          "Stylized environment using hand-painted textures and procedural material techniques.",
        image: "/projects/crowns/environment.webp",
        breakdownStyle: "technical",
        breakdown: {
          video: "/projects/crowns/videos/environment.mp4",
          notes: [
            "Hand-painted textures",
            "Foliage assets",
            "Distance tiling and cell bombing",
          ],
          steps: [
            {
              image: "/projects/crowns/environment-textures.png",
              label: "Textures",
              caption: "Stylized materials.",
            },
            {
              image: "/projects/crowns/cell-bombing.png",
              label: "Cell Bombing",
              caption: "Break repetition.",
            },
          ],
        },
      },

      {
        id: "character-pipeline",
        title: "Character Pipeline",
        text:
          "Character creation, rigging, animation, and integration.",
        image: "/projects/crowns/characters.webp",
        breakdownStyle: "technical",
        breakdown: {
          video: "/projects/crowns/videos/character-pipeline.mp4",
          notes: [
            "Modeled and rigged characters",
            "Animated Mage class",
            "Integrated and optimized assets",
          ],
          steps: [
            {
              image: "/projects/crowns/rigging.png",
              label: "Rigging",
              caption: "Character rigs.",
            },
            {
              image: "/projects/crowns/animation.png",
              label: "Animation",
              caption: "Gameplay animation.",
            },
          ],
        },
      },

      {
        id: "camera-system",
        title: "Camera Systems",
        text:
          "Smooth camera movement, zoom, and collision handling.",
        image: "/projects/crowns/camera.png",
        breakdownStyle: "technical",
        breakdown: {
          video: "/projects/crowns/videos/camera.mp4",
          notes: [
            "Click-to-move camera",
            "Zoom functionality",
            "Collision smoothing",
          ],
          steps: [
            {
              image: "/projects/crowns/camera-move.png",
              label: "Movement",
              caption: "Smooth transitions.",
            },
          ],
        },
      },
    ],
  }