export type ProjectCategory =
  | "All"
  | "Technical Art"
  | "Gameplay"
  | "Shaders"
  | "Rigging"
  | "Animation"
  | "Level Design"
  | "Tools";

export type BreakdownStep = {
  image: string;
  caption: string;
  label?: string;
};

export type ProjectSectionBreakdown = {
  video?: string;
  notes: string[];
  steps: BreakdownStep[];
};

export type ProjectSection = {
  id: string;
  title: string;
  text: string;
  image?: string;
  breakdownStyle?: "technical" | "visual";
  breakdown: ProjectSectionBreakdown;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  engine: string;
  role: string;
  description: string;
  longDescription: string;
  categories: ProjectCategory[];
  image: string;
  accent: string;
  duration: string;
  team: string;
  responsibilities: string[];
  toolsUsed: string[];
  sections: ProjectSection[];
  myRole?: string;
  breakdownStyle?: "technical" | "visual";
};

export const projectFilters: ProjectCategory[] = [
  "All",
  "Technical Art",
  "Gameplay",
  "Shaders",
  "Rigging",
  "Animation",
  "Level Design",
  "Tools",
];

export const projects: Project[] = [
  {
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
  },

  {
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
  },

  {
    id: "whispers",
    title: "Whispers of the Djinn",
    year: "2025",
    engine: "Unreal Engine 5",
    role: "Technical Artist / Game Programmer",
    description:
      "Co-op stealth prototype focused on shader-driven gameplay and multiplayer systems.",
    longDescription:
      "Whispers of the Djinn is a cooperative stealth prototype centered on atmosphere, shader-driven interaction, and role-based multiplayer gameplay inspired by Little Nightmares and Reanimal.",
    categories: ["Technical Art", "Gameplay", "Shaders", "Level Design"],
    image: "/menus/wod.webp",
    accent: "#1f3b4d",
    duration: "Ongoing",
    team: "Solo Project",
    myRole:
      "Solo developer on an ongoing prototype exploring cooperative gameplay in Unreal Engine. The project acts as a foundation for a future game while allowing me to deepen my work in multiplayer systems, shader interaction, VFX, and atmospheric level design, with visual inspiration drawn from Little Nightmares and Reanimal.",
    toolsUsed: [
      "Unreal Engine 5",
      "Blueprints",
      "Materials",
      "Multiplayer Replication",
    ],
    responsibilities: [
      "Built a shader-based reveal system tied to the lantern",
      "Implemented role-based multiplayer spawning",
      "Developed replicated pickup interactions",
      "Created early blockout environments for gameplay testing",
    ],
    breakdownStyle: "technical",
    sections: [
      {
        id: "reveal-system",
        title: "Shader-Based Reveal System",
        text:
          "A lantern-driven material system where hidden objects are revealed only under the correct light conditions.",
        image: "/projects/whispers/reveal2.webp",
        breakdownStyle: "technical",
        breakdown: {
          video: "/projects/whispers/videos/reveal-system.mp4",
          notes: [
            "Turns light into a gameplay mechanic rather than pure atmosphere.",
            "Uses visibility as feedback for interaction and discovery.",
            "Helps define the visual identity of the prototype.",
          ],
          steps: [
            {
              image: "/projects/whispers/mat-graph.webp",
              caption:
                "The material graph collects data from the light through a Material Parameter Collection and uses it to drive the opacity value.",
            },
            {
              image: "/projects/whispers/reveal1.webp",
              caption:
                "When the light is not shining on a box, it remains invisible. Three hidden boxes are placed in the scene.",
            },
            {
              image: "/projects/whispers/reveal2.webp",
              caption:
                "The first box becomes visible once the light rotates toward it.",
            },
            {
              image: "/projects/whispers/reveal3.webp",
              caption:
                "The second box is revealed as the light continues across the scene.",
            },
            {
              image: "/projects/whispers/reveal4.webp",
              caption:
                "The third box appears once the final light position reaches it.",
            },
          ],
        },
      },
      {
        id: "level-blockout",
        title: "Level Blockout & Atmosphere",
        text:
          "Level prototype used to test tension, readability, scale, and mood inside a stealth-focused environment.",
        image: "/projects/whispers/scene1.png",
        breakdownStyle: "technical",
        breakdown: {
          video: "/projects/whispers/videos/blockout.mp4",
          notes: [
            "Built small spaces to establish the right feel before expanding to larger content using USD Stages.",
            "Tested visibility and atmosphere readability early.",
            "Used blockout to shape mood, contrast, and player tension.",
          ],
          steps: [
            {
              image: "/projects/whispers/scene1.png",
              caption:
                "Early view of the house’s central space, used to explore composition, darkness, and visual guidance.",
            },
            {
              image: "/projects/whispers/scene4.png",
              caption:
                "A wider shot of the central space showing the overall state of the area and its intended mood.",
            },
            {
              image: "/projects/whispers/scene2.png",
              caption:
                "A second blockout area used to test navigation, atmosphere, and architectural readability.",
            },
            {
              image: "/projects/whispers/scene3.png",
              caption:
                "A third blockout area designed for a puzzle sequence with a more claustrophobic atmosphere.",
            },
          ],
        },
      },
      {
        id: "multiplayer-role-system",
        title: "Multiplayer Role System",
        text:
          "A two-player setup where each controller spawns and possesses the correct role to support asymmetric cooperation.",
        image: "/projects/whispers/multiplayer1.webp",
        breakdownStyle: "technical",
        breakdown: {
          video: "/projects/whispers/videos/multiplayer-role.mp4",
          notes: [
            "Each player is assigned the correct role during spawn.",
            "Supports asymmetrical co-op gameplay in split-screen and client/server setups.",
            "Creates a stable base for future multiplayer features.",
          ],
          steps: [
            {
              image: "/projects/whispers/multiplayer1.webp",
              caption:
                "The system ensures the correct character is spawned with the right role and ability set, confirmed through different controls, objects, and skeletons.",
            },
            {
              image: "/projects/whispers/multiplayer2.webp",
              caption:
                "Characters spawn with differences that automatically apply distinct rules and behaviors.",
            },
          ],
        },
      },
      {
        id: "replicated-interactions",
        title: "Replicated Interaction Systems",
        text:
          "Early replicated behaviours used to validate shared interaction across clients.",
        image: "/projects/whispers/pickable1.webp",
        breakdownStyle: "technical",
        breakdown: {
          video: "/projects/whispers/videos/pickup.mp4",
          notes: [
            "Confirms shared interaction behavior in multiplayer.",
            "Tests the reliability of different replicated ability actions.",
            "Acts as a foundation for broader co-op systems.",
          ],
          steps: [
            {
              image: "/projects/whispers/pickable2.webp",
              caption:
                "Replicated behavior showing the brother's ability to pick up items.",
            },
            {
              image: "/projects/whispers/pickable3.webp",
              caption:
                "Replicated behavior showing the brother's ability to drop items.",
            },
            {
              image: "/projects/whispers/pickable4.webp",
              caption:
                "Replicated behavior showing the brother's ability to push heavy objects.",
            },
            {
              image: "/projects/whispers/pickable5.webp",
              caption:
                "Replicated behavior showing the sister's ability to interact with buttons.",
            },
            {
              image: "/projects/whispers/pickable6.webp",
              caption:
                "Replicated behavior showing the brother's ability to interact with buttons.",
            },
          ],
        },
      },
    ],
  },

  {
    id: "ties-of-kin",
    title: "Ties of Kin",
    year: "2023",
    engine: "Unity",
    role: "Gameplay Programmer / Game Designer",
    description:
      "Gameplay-focused hand-drawn platformer prototype centered on responsiveness, player control, and systemic abilities.",
    longDescription:
      "Gameplay-first prototype focused on movement responsiveness, player control, level design, and expressive mechanics.",
    categories: ["Gameplay", "Animation", "Level Design"],
    image: "/menus/about.webp",
    accent: "#8b6a3e",
    duration: "Prototype",
    team: "Solo Project",
    responsibilities: [
      "Implemented movement systems",
      "Designed gameplay interactions",
      "Iterated on player responsiveness",
    ],
    myRole:
      "Solo developer on a gameplay-focused 2D platformer prototype exploring movement responsiveness, player control, and systemic abilities. The project focuses on how mechanics such as input buffering, coyote time, and chained abilities influence player feel, traversal flow, and interaction with the environment.",
    toolsUsed: ["Unity", "C#", "Playmaker", "Krita", "Photoshop"],
    breakdownStyle: "visual",
    sections: [
      {
        id: "movement-feel",
        title: "Movement & Responsiveness",
        text:
          "A player controller designed around responsiveness and control, using techniques like input buffering, coyote time, and velocity tuning to create a fluid and forgiving movement experience.",
        image: "/projects/ties/Movement2.webp",
        breakdownStyle: "visual",
        breakdown: {
          video: "/projects/ties/videos/movement.mp4",
          notes: [
            "Input buffering helps actions trigger even when the input happens slightly early.",
            "Coyote time makes jumps more forgiving and improves player comfort.",
            "Fall speed limits keep downward movement readable and controlled.",
            "Camera offset improves anticipation by showing more of the movement direction.",
            "Smoothing and lerping help transitions feel fluid without sacrificing control.",
            "The controller was tuned to feel immediate and responsive.",
          ],
          steps: [
            {
              image: "/projects/ties/Idle.gif",
              label: "Idle",
              caption:
                "Idle animation establishing the character’s hand-drawn personality and silhouette.",
            },
            {
              image: "/projects/ties/Move.gif",
              label: "Move",
              caption:
                "Core movement loop focused on responsive control and readable motion.",
            },
            {
              image: "/projects/ties/Jump.gif",
              label: "Jump",
              caption:
                "Jump timing tuned to feel immediate and readable during traversal.",
            },
            {
              image: "/projects/ties/WallSlide.gif",
              label: "Wall Slide",
              caption:
                "Wall slide behavior used to control descent and support chaining into other actions.",
            },
            {
              image: "/projects/ties/Crouch_Idle.gif",
              label: "Crouch Idle",
              caption:
                "Crouch idle state supporting grounded readability and lower-profile interactions.",
            },
            {
              image: "/projects/ties/Crouch_Walk.gif",
              label: "Crouch Walk",
              caption:
                "Crouch movement maintains control while shifting the player into a more careful traversal state.",
            },
            {
              image: "/projects/ties/Fall.gif",
              label: "Fall",
              caption:
                "Falling state tuned with speed limits and smoothing to keep motion readable and consistent.",
            },
          ],
        },
      },

      {
        id: "ability-system",
        title: "Ability System",
        text:
          "A layered ability system allowing the player to chain actions and express movement through a wide range of mechanics.",
        image: "/projects/ties/ability.webp",
        breakdownStyle: "visual",
        breakdown: {
          video: "/projects/ties/videos/abilities.mp4",
          notes: [
            "Abilities are designed to chain together smoothly during traversal.",
            "Dash and jump extensions increase player expression and route variation.",
            "Aerial mechanics support flow instead of interrupting momentum.",
            "Offensive-style moves like pogo and dive also function as traversal tools.",
          ],
          steps: [
            {
              image: "/projects/ties/Dash.gif",
              label: "Dash",
              caption:
                "Dash used to extend traversal options and increase movement expression.",
            },
            {
              image: "/projects/ties/DoubleJump.gif",
              label: "Double Jump",
              caption:
                "Double jump adds aerial flexibility and supports ability chaining.",
            },
            {
              image: "/projects/ties/Flight.gif",
              label: "Flight",
              caption:
                "Chargeable vertical burst that can also be used in midair.",
            },
            {
              image: "/projects/ties/JumpBoost.gif",
              label: "Jump Boost",
              caption:
                "Jump boost extends upward mobility and creates more traversal variation.",
            },
            {
              image: "/projects/ties/TailSpin.gif",
              label: "Tail Spin",
              caption:
                "Tailspin pogo mechanic turns hazardous surfaces into traversal opportunities.",
            },
            {
              image: "/projects/ties/Dive.gif",
              label: "Dive",
              caption:
                "Dive ability is used to bounce or break specific platforms and surfaces.",
            },
          ],
        },
      },

      {
        id: "interaction-system",
        title: "Environment Interaction System",
        text:
          "Abilities extend beyond movement by interacting directly with the environment, enabling systemic gameplay and puzzle-like interactions.",
        image: "/projects/ties/interaction.webp",
        breakdownStyle: "visual",
        breakdown: {
          video: "/projects/ties/videos/interaction.mp4",
          notes: [
            "Environment interactions are built as gameplay systems rather than one-off actions.",
            "The feather ability changes how the player navigates and manipulates spaces.",
            "Voice-based interactions create alternate reactions from the same input.",
            "Portal and shadow mechanics add spatial strategy to traversal.",
          ],
          steps: [
            {
              image: "/projects/ties/Feather.gif",
              label: "Feather",
              caption:
                "Feather ability used to trigger environment-based reactions such as lifting, moving, creating, or projecting platforms.",
            },
            {
              image: "/projects/ties/Scream.gif",
              label: "Scream",
              caption:
                "Scream ability used to interact directly with objects in the environment.",
            },
            {
              image: "/projects/ties/Echo.gif",
              label: "Voice Steal",
              caption:
                "Voice stealing changes how the scream reacts, altering the resulting interaction.",
            },
            {
              image: "/projects/ties/PortalSwing.gif",
              label: "Portal Disc",
              caption:
                "Magical disc opens portal-based traversal opportunities and repositioning paths.",
            },
          ],
        },
      },

      {
        id: "level-design",
        title: "Level Design & Prototyping",
        text:
          "Multiple test environments were created to validate mechanics, refine gameplay feel, and explore how systems interact in level design.",
        image: "/projects/ties/hero.webp",
        breakdownStyle: "technical",
        breakdown: {
          video: "/projects/ties/videos/levels.mp4",
          notes: [
            "Different levels were built to test the full range of the character’s mechanics.",
            "These spaces helped validate game feel and responsiveness across different degrees of complexity.",
            "A hand-drawn scene with parallax was added to improve depth and visual quality.",
            "The layouts also served as stress tests to reduce friction and frustration in play.",
          ],
          steps: [
            {
              image: "/projects/ties/hero.webp",
              label: "Hero Artwork",
              caption:
                "Hand-drawn hero scene used as the visual identity for the project and as a testbed for parallax and mood.",
            },
            {
              image: "/projects/ties/level1.webp",
              label: "Level 1",
              caption:
                "Early level prototype used to test the fluidity of the character’s core movement.",
            },
            {
              image: "/projects/ties/level2.webp",
              label: "Level 2",
              caption:
                "Second prototype space focused on abilities and interaction with the environment.",
            },
            {
              image: "/projects/ties/level3.webp",
              label: "Level 3",
              caption:
                "Third prototype space used to test platforming difficulty and ability responsiveness.",
            },
          ],
        },
      },
    ],
  },
];