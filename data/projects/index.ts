// src/data/projects/index.ts

import type { ProjectCategory } from "./types";

import { crownsOfAnchors } from "./crownsOfAnchors";
import { whiskeyBusiness } from "./whiskeyBusiness";
import { whispers } from "./whispers";
import { tiesOfKin } from "./tiesOfKin";

export type {
  Project,
  ProjectCategory,
  ProjectSection,
  ProjectSectionBreakdown,
  BreakdownStep,
} from "./types";

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

export const projects = [
  crownsOfAnchors,
  whiskeyBusiness,
  whispers,
  tiesOfKin,
];