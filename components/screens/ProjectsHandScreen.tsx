"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  projectFilters,
  projects,
  type ProjectCategory,
} from "@/data/projects";

type Props = {
  onBack?: () => void;
  onOpenProject?: (projectId: string) => void;
};

export default function ProjectsHandScreen({
  onBack,
  onOpenProject,
}: Props) {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }

    router.push("/menu");
  };

  const handleOpenProject = (projectId: string) => {
    if (onOpenProject) {
      onOpenProject(projectId);
      return;
    }

    router.push(`/menu/projects/${projectId}`);
  };

  return (
    <section className="min-h-screen bg-[#efefec] text-[#18251f]">
      <div className="mx-auto max-w-[1800px] px-5 py-5 sm:px-8 sm:py-6 md:px-10 lg:px-12 lg:py-6 xl:px-14 xl:py-10">
        <div className="flex items-center justify-start">
          <button
            onClick={handleBack}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-[#94a394] transition hover:text-[#d85b19]"
          >
            ← Back
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-6 lg:mt-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start xl:mt-10 xl:gap-8">
          <div className="max-w-3xl">
            <p className="text-[clamp(0.88rem,0.95vw,1.4rem)] font-light uppercase tracking-[-0.03em] text-[#94a394] min-[1280px]:text-[clamp(0.72rem,0.75vw,0.95rem)] min-[2200px]:text-[clamp(0.88rem,0.95vw,1.4rem)]">
              Selected Work
            </p>

            <h1 className="mt-1 text-[clamp(2.7rem,5.4vw,7.4rem)] font-black uppercase leading-[0.88] tracking-[-0.07em] text-[#d85b19] min-[1280px]:text-[clamp(1.8rem,2.5vw,3.2rem)] min-[2200px]:text-[clamp(2.7rem,5.4vw,7.4rem)]">
              Projects
            </h1>

            <p className="mt-3 max-w-2xl text-[0.9rem] leading-relaxed text-[#4b564f] min-[1280px]:mt-2 min-[1280px]:max-w-xl min-[1280px]:text-[0.84rem] min-[2200px]:mt-3 min-[2200px]:max-w-2xl min-[2200px]:text-lg">
              A curated set of projects focused on technical art, gameplay systems,
              shaders, rigging, and real-time visual presentation.
            </p>
          </div>

          <div className="hidden lg:block lg:pt-1 xl:pt-3">
            <div className="flex max-w-[460px] flex-wrap justify-start gap-2 lg:justify-end">
              {projectFilters.map((filter) => {
                const isActive = filter === activeFilter;

                return (
                  <button
                    key={filter}
                    onClick={() => {
                      setActiveFilter(filter);
                      setHoveredId(null);
                    }}
                    className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] transition ${
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

        <div className="mt-2 hidden h-[calc(100vh-210px)] min-h-[560px] items-center justify-center overflow-visible lg:flex xl:mt-4 xl:h-[calc(100vh-250px)] xl:min-h-[820px]">
          <div className="relative h-full w-full max-w-[1500px] xl:max-w-[1800px]">
            {filteredProjects.map((project, index) => {
              const total = filteredProjects.length;
              const centerOffset = index - (total - 1) / 2;
              const hoveredIndex = hoveredId
                ? filteredProjects.findIndex((p) => p.id === hoveredId)
                : -1;
              const isHovered = hoveredId === project.id;

              const baseSpacing = 230;
              const hoverGap = hoveredId
                ? project.id === hoveredId
                  ? 0
                  : index < hoveredIndex
                  ? -36
                  : 36
                : 0;

              const baseX = centerOffset * baseSpacing + hoverGap;
              const baseRotate = centerOffset * 5.6;
              const baseY = Math.abs(centerOffset) * 32;

              return (
                <motion.button
                  key={project.id}
                  type="button"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleOpenProject(project.id)}
                  initial={false}
                  animate={{
                    x: baseX,
                    y: isHovered ? baseY - 20 : baseY,
                    rotate: isHovered ? 0 : baseRotate,
                    scale: isHovered ? 1.05 : 0.98,
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  className="absolute left-1/2 top-[43%] w-[min(17vw,320px)] min-w-[235px] -translate-x-1/2 -translate-y-1/2 text-left xl:top-[40%] xl:w-[min(19vw,340px)] xl:min-w-[250px] 2xl:w-[min(21vw,360px)] 2xl:min-w-[320px]"
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
                    <div className="relative h-[min(54vh,580px)] min-h-[420px] xl:h-[min(58vh,640px)] xl:min-h-[470px] 2xl:h-[min(60vh,680px)] 2xl:min-h-[520px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.05))]" />

                      <div className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#314038] xl:left-5 xl:top-5 xl:text-xs">
                        {project.year}
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-4 xl:p-5 2xl:p-6">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70 xl:text-xs xl:tracking-[0.18em]">
                          {project.engine}
                        </p>

                        <h2 className="mt-2 text-[clamp(1.15rem,1vw,2rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-white xl:text-[clamp(1.35rem,1.2vw,2rem)]">
                          {project.title}
                        </h2>

                        <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#f2b08a] xl:text-[0.78rem] 2xl:text-sm">
                          {project.role}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-1.5 xl:mt-4 xl:gap-2">
                          {project.categories.slice(0, 3).map((category) => (
                            <span
                              key={category}
                              className="rounded-full border border-white/12 bg-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-white/90 backdrop-blur-sm xl:px-3 xl:text-[10px] xl:tracking-[0.12em]"
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

        <div className="mt-8 grid gap-6 lg:hidden">
          <div className="flex max-w-[460px] flex-wrap gap-2">
            {projectFilters.map((filter) => {
              const isActive = filter === activeFilter;

              return (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setHoveredId(null);
                  }}
                  className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] transition ${
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
              onClick={() => handleOpenProject(project.id)}
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