// src/data/projects/types.ts
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
  infoBg: string;
  duration: string;
  team: string;
  responsibilities: string[];
  toolsUsed: string[];
  sections: ProjectSection[];
  myRole?: string;
  breakdownStyle?: "technical" | "visual";
};