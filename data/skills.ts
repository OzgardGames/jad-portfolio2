export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Technical Art",
    description: "Real-time visual problem solving for game production.",
    items: [
      "Shaders",
      "Materials",
      "Niagara VFX",
      "Rigging",
      "Skinning",
      "Animation Workflows",
      "UI Presentation",
      "Pipeline Support",
    ],
  },
  {
    title: "Gameplay Systems",
    description: "Mechanics, player feel, and implementation support.",
    items: [
      "Player Movement",
      "Gameplay Prototyping",
      "Input Systems",
      "State Machines",
      "Interaction Systems",
      "Level Design Support",
    ],
  },
  {
    title: "Programming",
    description: "Technical implementation across engine and tool workflows.",
    items: [
      "Blueprint",
      "C++",
      "C#",
      "Python",
      "Gameplay Logic",
      "Tools Scripting",
    ],
  },
  {
    title: "DCC / Content Tools",
    description: "Asset creation, preparation, and content workflows.",
    items: [
      "Blender",
      "3ds Max",
      "ZBrush",
      "Substance Painter",
      "Photoshop",
      "Illustrator",
    ],
  },
];