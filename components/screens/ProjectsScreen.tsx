"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  onBack: () => void;
};

type Project = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  role: string;
  engine: string;
  overview: string;
  contributions: string[];
  tools: string[];
};

const projects: Project[] = [
  {
    id: "crowns-of-anchors",
    title: "Crowns of Anchors",
    subtitle: "Technical Art · Shaders · Pipeline",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600",
    role: "Art Lead / Technical Artist",
    engine: "Unreal Engine 5",
    overview:
      "A stylized roguelike RPG capstone focused on shaders, art pipeline support, rigging workflows, UI materials, and world presentation.",
    contributions: [
      "Built stylized shaders and materials for key visual elements.",
      "Supported art direction and visual consistency across the project.",
      "Created rigging and skinning workflows for characters and assets.",
      "Developed technical solutions for UI materials and presentation.",
    ],
    tools: ["Unreal Engine 5", "Blueprints", "Materials", "Rigging", "Shaders"],
  },
  {
    id: "whiskey-business",
    title: "Whiskey Business",
    subtitle: "Rigging · Physics · Gameplay Systems",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600",
    role: "Art Lead / Technical Artist",
    engine: "Unreal Engine 5",
    overview:
      "A stylized bar-fighting brawler where I worked on shared rigs, character presentation, physics interactions, and gameplay-supporting effects.",
    contributions: [
      "Built a shared rig setup for multiple characters.",
      "Implemented ragdoll and physics-driven interactions.",
      "Created post-process and visibility materials.",
      "Supported character and gameplay presentation workflows.",
    ],
    tools: ["Unreal Engine 5", "C++", "Physics Asset", "Rigging", "Post Process"],
  },
  {
    id: "whispers-of-the-djinn",
    title: "Whispers of the Djinn",
    subtitle: "Lighting · Atmosphere · Shaders",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1600",
    role: "Solo Project",
    engine: "Unreal Engine 5",
    overview:
      "A folklore-inspired stealth experience centered on atmosphere, lighting, shader-based reveals, and technical art-driven worldbuilding.",
    contributions: [
      "Designed atmospheric visual direction and level mood.",
      "Built shader-based reveal mechanics tied to gameplay.",
      "Explored lighting, materials, and environmental storytelling.",
      "Used the project as a technical art showcase piece.",
    ],
    tools: ["Unreal Engine 5", "Lighting", "Shaders", "Materials", "VFX"],
  },
  {
    id: "ties-of-kin",
    title: "Ties of Kin",
    subtitle: "Gameplay · Movement · Design",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600",
    role: "Solo Project",
    engine: "Unity",
    overview:
      "A responsive platformer prototype focused on player feel, movement systems, event-driven logic, and fast gameplay iteration.",
    contributions: [
      "Implemented responsive movement mechanics.",
      "Iterated on player feel and readability.",
      "Built gameplay systems with event-driven logic.",
      "Designed the prototype as both a mechanics and design exercise.",
    ],
    tools: ["Unity", "C#", "Gameplay Systems", "Player Feel", "Prototype"],
  },
];

export default function ProjectsScreen({ onBack }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject) {
    return (
      <ProjectDetailScreen
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <div className="h-full w-full overflow-y-auto bg-black text-white">
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/80 px-6 py-4 backdrop-blur">
        <button
          onClick={onBack}
          className="text-sm uppercase tracking-widest text-gray-400 hover:text-white"
        >
          ← Back
        </button>

        <h2 className="text-lg uppercase tracking-widest text-[#d85b19]">
          Projects
        </h2>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <motion.button
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group relative h-[60vh] w-full overflow-hidden text-left"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/60 transition group-hover:bg-black/40" />

            <div className="relative z-10 flex h-full flex-col justify-end p-10">
              <h3 className="text-4xl font-black uppercase tracking-wide">
                {project.title}
              </h3>

              <p className="mt-2 text-lg text-gray-300">{project.subtitle}</p>

              <div className="mt-6 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-[#d85b19]" />
                <p className="text-sm uppercase tracking-widest text-[#d85b19]">
                  Open Case Study
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

type DetailProps = {
  project: Project;
  onBack: () => void;
};

function ProjectDetailScreen({ project, onBack }: DetailProps) {
  return (
    <div className="h-full w-full overflow-y-auto bg-[#0a0a0a] text-white">
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/80 px-6 py-4 backdrop-blur">
        <button
          onClick={onBack}
          className="text-sm uppercase tracking-widest text-gray-400 hover:text-white"
        >
          ← Back to Projects
        </button>

        <h2 className="text-lg uppercase tracking-widest text-[#d85b19]">
          {project.title}
        </h2>
      </div>

      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d85b19]">
            {project.engine} · {project.role}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase tracking-tight md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg">
            {project.overview}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 md:px-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d85b19]">
              Overview
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-300">
              {project.overview}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d85b19]">
              Key Contributions
            </p>
            <div className="mt-5 space-y-4">
              {project.contributions.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 text-gray-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d85b19]">
              Visual Breakdown
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="flex h-48 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm uppercase tracking-widest text-gray-500">
                Shader / Material Shot
              </div>
              <div className="flex h-48 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm uppercase tracking-widest text-gray-500">
                Rig / System Shot
              </div>
              <div className="flex h-48 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm uppercase tracking-widest text-gray-500">
                Gameplay / Scene Shot
              </div>
              <div className="flex h-48 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm uppercase tracking-widest text-gray-500">
                Process / Breakdown Shot
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d85b19]">
              Project Info
            </p>

            <div className="mt-5 space-y-4 text-sm uppercase tracking-widest text-gray-300">
              <div>
                <span className="block text-gray-500">Engine</span>
                <span>{project.engine}</span>
              </div>
              <div>
                <span className="block text-gray-500">Role</span>
                <span>{project.role}</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d85b19]">
              Tools
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs uppercase tracking-widest text-gray-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d85b19]">
              Next Upgrade
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              We can replace the placeholders with your real screenshots, videos,
              shader graphs, rig views, and gameplay clips.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}