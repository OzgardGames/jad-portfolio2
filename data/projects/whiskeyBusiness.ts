import type { Project } from "./types";

export const whiskeyBusiness: Project = {
    id: "whiskey-business",
    title: "Whiskey Business",
    year: "2025",
    engine: "Unreal Engine 5",
    role: "Technical Artist / Gameplay & Tool Programmer",
    description:
      "Stylized party brawler featuring shared character rigs, shader-based gameplay readability, and physics-driven combat systems.",
    longDescription:
      "Whiskey Business is a stylized cowboy tavern party brawler where four bottle-inspired characters fight until only one remains. Built in a team of 6 over roughly 4 months alongside classes and part-time work, the project focused on readable combat, exaggerated physics, and strong visual identity.",
    categories: [
      "Technical Art",
      "Gameplay",
      "Shaders",
      "Rigging",
      "Animation",
      "Level Design",
      "Tools",
    ],
    image: "/menus/landing.webp",
    accent: "#5f8f7b",
    infoBg: "#632d4c",
    duration: "4 Months",
    team: "Team of 6",

    responsibilities: [
      "Created 4 playable characters from modeling to animation",
      "Built a shared rigging system for animation reuse",
      "Implemented ragdoll system with directional recovery",
      "Developed X-ray and outline systems using stencil buffers",
      "Created a custom toon shader for stylized lighting",
      "Built a procedural plank generation tool",
      "Implemented dash gameplay ability",
      "Created weapon interactions (carry, throw, sockets)",
      "Produced environment assets and level blockout",
      "Worked on lighting and VFX for atmosphere",
    ],

    toolsUsed: [
      "Unreal Engine 5",
      "C++",
      "Blueprints",
      "Materials",
      "Blender",
    ],

    breakdownStyle: "technical",

    sections: [
      {
        id: "character-pipeline",
        title: "Shared Character Pipeline",
        text:
          "I created the four playable characters from modeling through animation, then designed a shared rig structure so they could all reuse the same animation set while maintaining distinct silhouettes and personalities.",
        image: "/projects/whiskey/characters.webp",
        breakdownStyle: "technical",
        breakdown: {
          video: "/projects/whiskey/videos/characters.mp4",
          notes: [
            "All four characters were modeled, UV unwrapped, textured, rigged, and animated.",
            "A shared rig structure was designed so all characters could reuse the same animation set.",
            "Silhouettes and proportions were carefully balanced to maintain visual uniqueness while staying compatible with the rig.",
            "This pipeline significantly reduced animation workload and improved production speed.",
          ],
          steps: [
            {
              image: "/projects/whiskey/characters.webp",
              label: "Cast Lineup",
              caption:
                "The four playable characters shown together to highlight silhouette, scale, and personality within a unified style.",
            },
            {
              image: "/projects/whiskey/rig.png",
              label: "Shared Rig",
              caption:
                "A generic rig structure reused across all characters to ensure animation compatibility and reduce duplication.",
            },
            {
              image: "/projects/whiskey/shared-animation.png",
              label: "Animation Reuse",
              caption:
                "The same animation set applied across multiple characters, demonstrating the effectiveness of the shared rig pipeline.",
            },
            {
              image: "/projects/whiskey/character-pipeline.png",
              label: "Character Pipeline",
              caption:
                "Example pipeline for one character, from modeling and UVs to texturing, rigging, and final in-engine result.",
            },
            {
              image: "/projects/whiskey/final-characters.png",
              label: "In-Game Result",
              caption:
                "Final characters integrated in-engine, showing consistent animation, style, and gameplay readability.",
            },
          ],
        },
      },
      {
        id: "shader-readability",
        title: "Shader-Based Readability Systems",
        text:
          "I created multiple material systems to improve stylization and gameplay clarity, including a custom toon shader, an X-ray wall-visibility effect, and outline feedback for interactable props.",
        image: "/projects/whiskey/shader.webp",
        breakdownStyle: "technical",
        breakdown: {
          video: "/projects/whiskey/videos/shaders.mp4",
          notes: [
            "The toon shader gave direct control over how light and shadow bands behaved.",
            "The X-ray effect helped preserve readability when characters moved behind walls.",
            "Outline feedback made carryable objects clearer during close interaction.",
            "All visibility systems were built using Unreal Engine’s Custom Depth and Stencil pipeline.",
          ],
          steps: [
            {
              image: "/projects/whiskey/shader1.png",
              caption:
                "Custom toon shading was used to break away from Unreal’s default rendering and better match the cartoon tavern look.",
            },
            {
              image: "/projects/whiskey/xray.png",
              caption:
                "The X-ray system reveals characters when they move behind level geometry, helping preserve gameplay readability.",
            },
            {
              image: "/projects/whiskey/outline.png",
              caption:
                "Carryable objects are highlighted with an outline effect on overlap to make interactions readable and immediate.",
            },
            {
              image: "/projects/whiskey/graphs.png",
              caption:
                "The Xray, Toon and Outline Post Process Materials, use custom Stencil to render at different passes and allow full control during gameplay. The toon shader allow accessible control on Light and Shadow Colors event at Runtime",
            },
            {
              image: "/projects/whiskey/hover.gif",
              caption:
                "Spawned weapons use a hovering material effect with bounce and rotation to make pickups visually attractive and easy to spot.",
            },
          ],
        },
      },
      {
        id: "physics-combat",
        title: "Physics-Driven Combat Interactions",
        text:
          "I worked on weapon handling, carrying, throwing, and ragdoll transitions so the game’s exaggerated combat still felt grounded and responsive.",
        image: "/projects/whiskey/ragdoll.webp",
        breakdownStyle: "technical",
        breakdown: {
          video: "/projects/whiskey/videos/physics-combat.mp4",
          notes: [
            "Weapon sockets were placed and adjusted to improve how items sat in the hand.",
            "Throw power and carry positioning were tuned to make the cartoon physics feel believable.",
            "Animation notifies were used to trigger actions at the correct frame.",
            "Ragdoll recovery logic adapted to the character’s final orientation.",
          ],
          steps: [
            {
              image: "/projects/whiskey/weapons.png",
              caption:
                "Weapons were socketed and integrated so they attached cleanly and supported physical interaction during combat.",
            },
            {
              image: "/projects/whiskey/carry.gif",
              caption:
                "Carry and throw interactions were adjusted to improve weight, timing, and overall responsiveness.",
            },
            {
              image: "/projects/whiskey/ragdoll.gif",
              caption:
                "The ragdoll system transitions from animation to physics and back into a context-appropriate recovery.",
            },
            {
              image: "/projects/whiskey/getup.gif",
              caption:
                "Recovery logic accounts for whether the character lands face-up or face-down to select the right get-up behavior.",
            },
          ],
        },
      },
      {
        id: "gameplay-programming",
        title: "Gameplay Programming",
        text:
          "Beyond technical art, I implemented a few core gameplay behaviors directly in Unreal, including dash and ragdoll-related logic tied to combat feel.",
        image: "/projects/whiskey/dash.webp",
        breakdownStyle: "technical",
        breakdown: {
          video: "/projects/whiskey/videos/gameplay.mp4",
          notes: [
            "Dash was implemented as a direct gameplay ability for player movement and combat pacing.",
            "Ragdoll behavior was coded as a reusable component rather than a one-off effect.",
            "Animation timing was synchronized with gameplay logic through notifies.",
            "The goal was to make combat reactions feel snappy while still physically expressive.",
          ],
          steps: [
            {
              image: "/projects/whiskey/dash1.png",
              caption:
                "The dash ability added speed, aggression, and responsiveness to the party-brawler combat loop.",
            },
            {
              image: "/projects/whiskey/anim-notify.png",
              caption:
                "Animation notifies were used to trigger gameplay events at the correct time during actions such as carrying, throwing, and attacks.",
            },
            {
              image: "/projects/whiskey/ragdoll-component.png",
              caption:
                "The ragdoll behavior was implemented as a gameplay-supporting system with controlled recovery handling.",
            },
          ],
        },
      },
      {
        id: "environment-tooling",
        title: "Environment Art, Tooling & Atmosphere",
        text:
          "I contributed to the cowboy tavern environment through modular prop creation, level blockout, a procedural plank tool, simple atmospheric VFX, and lighting polish.",
        image: "/projects/whiskey/planks.webp",
        breakdownStyle: "technical",
        breakdown: {
          video: "/projects/whiskey/videos/w-environment.mp4",
          notes: [
            "Environment assets were built to support fast assembly of the tavern space.",
            "The plank generation tool sped up floor production while adding variation.",
            "Simple VFX and lighting helped reinforce the dusty interior mood.",
            "The environment work supported both visual identity and gameplay readability.",
          ],
          steps: [
            {
              image: "/projects/whiskey/blockout.webp",
              caption:
                "An early level blockout established the tavern layout and informed later refinements to the final playable space.",
            },
            {
              image: "/projects/whiskey/assets.png",
              caption:
                "Modular tavern props were created to support the cowboy theme and speed up scene construction.",
            },
            {
              image: "/projects/whiskey/planks.gif",
              caption:
                "A procedural plank placement tool sampled from four plank variations to build flooring with faster iteration and better visual variety.",
            },
            {
              image: "/projects/whiskey/vfx-lighting.gif",
              caption:
                "Dust VFX, post-processing, and lighting passes were used to strengthen atmosphere and unify the visual presentation.",
            },
          ],
        },
      },
    ],
  }