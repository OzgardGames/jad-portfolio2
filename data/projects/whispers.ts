import type { Project } from "./types";

export const whispers: Project = {
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
    infoBg: "rgb(26, 50, 66)",
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
  }