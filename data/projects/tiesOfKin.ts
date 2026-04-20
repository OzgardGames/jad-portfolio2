import type { Project } from "./types";

export const tiesOfKin: Project ={
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
    infoBg: "#3b3b3b",
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
        image: "/projects/ties/movement2.webp",
        breakdownStyle: "visual",
        breakdown: {
          video: "/projects/ties/videos/movement1.mp4",
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
          video: "/projects/ties/videos/abilities1.mp4",
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
          video: "/projects/ties/videos/interaction1.mp4",
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
          video: "/projects/ties/videos/levels1.mp4",
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
  }