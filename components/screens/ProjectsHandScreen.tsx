"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  projectFilters,
  projects,
  type ProjectCategory,
} from "@/data/projects";

type Props = {
  onBack: () => void;
  onOpenProject: (projectId: string) => void;
};

export default function ProjectsHandScreen({
  onBack,
  onOpenProject,
}: Props) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section className="min-h-screen bg-[#efefec] text-[#18251f]">
      <div className="mx-auto max-w-[1800px] px-6 py-8 sm:px-10 lg:px-14">
        <div className="flex items-center justify-start">
          <button
            onClick={onBack}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-[#94a394] transition hover:text-[#d85b19]"
          >
            ← Back
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <div className="max-w-3xl">
            <p className="text-[clamp(1rem,1.4vw,1.4rem)] font-light uppercase tracking-[-0.03em] text-[#94a394]">
              Selected Work
            </p>

            <h1 className="mt-2 text-[clamp(3.4rem,7vw,7.4rem)] font-black uppercase leading-[0.88] tracking-[-0.07em] text-[#d85b19]">
              Projects
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4b564f] sm:text-lg">
              A curated set of projects focused on technical art, gameplay systems,
              shaders, rigging, and real-time visual presentation.
            </p>
          </div>

          <div className="lg:pt-3">
            <div className="flex max-w-[520px] flex-wrap justify-start gap-3 lg:justify-end">
              {projectFilters.map((filter) => {
                const isActive = filter === activeFilter;

                return (
                  <button
                    key={filter}
                    onClick={() => {
                      setActiveFilter(filter);
                      setHoveredId(null);
                    }}
                    className={`rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] transition ${
                      isActive
                        ? "bg-[#d85b19] text-white"
                        : "border border-[#c7cbc3] bg-white/55 text-[#314038] hover:border-[#d85b19] hover:text-[#d85b19]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-4 hidden min-h-[980px] items-center justify-center overflow-visible lg:flex">
          <div className="relative h-[780px] w-full max-w-[1800px]">
            {filteredProjects.map((project, index) => {
              const total = filteredProjects.length;
              const centerOffset = index - (total - 1) / 2;
              const hoveredIndex = hoveredId
                ? filteredProjects.findIndex((p) => p.id === hoveredId)
                : -1;
              const isHovered = hoveredId === project.id;

              const baseSpacing = 255;
              const hoverGap = hoveredId
                ? project.id === hoveredId
                  ? 0
                  : index < hoveredIndex
                  ? -68
                  : 68
                : 0;

              const baseX = centerOffset * baseSpacing + hoverGap;
              const baseRotate = centerOffset * 8.5;
              const baseY = Math.abs(centerOffset) * 34;

              return (
                <motion.button
                  key={project.id}
                  type="button"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => onOpenProject(project.id)}
                  initial={false}
                  animate={{
                    x: baseX,
                    y: isHovered ? baseY - 36 : baseY,
                    rotate: isHovered ? 0 : baseRotate,
                    scale: isHovered ? 1.09 : 0.985,
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  className="absolute left-1/2 top-[40%] w-[420px] -translate-x-1/2 -translate-y-1/2 text-left xl:w-[360px]"
                  style={{
                    zIndex: isHovered ? 60 : index + 1,
                  }}
                >
                  <article
                    className={`overflow-hidden rounded-[2rem] border bg-white transition ${
                      isHovered
                        ? "border-[#d85b19] shadow-[0_30px_80px_rgba(216,91,25,0.25)]"
                        : "border-black/10 shadow-[0_22px_60px_rgba(0,0,0,0.16)]"
                    }`}
                  >
                    <div className="relative h-[680px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.05))]" />

                      <div className="absolute left-5 top-5 rounded-full bg-white/88 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#314038]">
                        {project.year}
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                          {project.engine}
                        </p>

                        <h2 className="mt-2 text-[2rem] font-black uppercase leading-[0.92] tracking-[-0.05em] text-white">
                          {project.title}
                        </h2>

                        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#f2b08a]">
                          {project.role}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.categories.slice(0, 3).map((category) => (
                            <span
                              key={category}
                              className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:hidden">
          <div className="flex flex-wrap gap-3">
            {projectFilters.map((filter) => {
              const isActive = filter === activeFilter;

              return (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setHoveredId(null);
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] transition ${
                    isActive
                      ? "bg-[#d85b19] text-white"
                      : "border border-[#c7cbc3] bg-white/55 text-[#314038] hover:border-[#d85b19] hover:text-[#d85b19]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {filteredProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => onOpenProject(project.id)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="text-left"
            >
              <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                <div className="relative h-[300px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.7),transparent_45%)]" />

                  <div className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#314038]">
                    {project.year}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                      {project.engine}
                    </p>

                    <h2 className="mt-2 text-2xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-white">
                      {project.title}
                    </h2>

                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#f2b08a]">
                      {project.role}
                    </p>
                  </div>
                </div>
              </article>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}