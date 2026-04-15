"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";

type Props = {
  projectId: string;
  onBack: () => void;
};

type LightboxState = {
  title: string;
  items: { image: string; caption: string }[];
  index: number;
} | null;

const TRANSITION = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function ProjectDetailScreen({
  projectId,
  onBack,
}: Props) {
  const project = useMemo(
    () => projects.find((item) => item.id === projectId),
    [projectId]
  );

  const [openSectionId, setOpenSectionId] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (!lightbox) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
      } else if (event.key === "ArrowLeft") {
        setLightbox((current) => {
          if (!current) return current;
          return {
            ...current,
            index:
              (current.index - 1 + current.items.length) % current.items.length,
          };
        });
      } else if (event.key === "ArrowRight") {
        setLightbox((current) => {
          if (!current) return current;
          return {
            ...current,
            index: (current.index + 1) % current.items.length,
          };
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox]);

  if (!project) {
    return (
      <section className="min-h-screen bg-[#efefec] text-[#18251f]">
        <div className="mx-auto max-w-[1700px] px-6 py-8 sm:px-10 lg:px-14">
          <button
            onClick={onBack}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-[#94a394] transition hover:text-[#d85b19]"
          >
            ← Back
          </button>

          <div className="mt-12">
            <h1 className="text-4xl font-black uppercase tracking-[-0.05em] text-[#d85b19]">
              Project Not Found
            </h1>
          </div>
        </div>
      </section>
    );
  }

  const toggleSection = (sectionId: string) => {
    setOpenSectionId((current) => (current === sectionId ? null : sectionId));
  };

  const closeSectionAndScrollToHeader = (sectionId: string) => {
    setOpenSectionId(null);

    window.setTimeout(() => {
      const el = sectionRefs.current[sectionId];
      if (!el) return;

      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 520);
  };

  const openLightbox = (
    title: string,
    items: { image: string; caption: string }[],
    index: number
  ) => {
    setLightbox({ title, items, index });
  };

  const closeLightbox = () => setLightbox(null);

  const showPrevImage = () => {
    setLightbox((current) => {
      if (!current) return current;
      return {
        ...current,
        index:
          (current.index - 1 + current.items.length) % current.items.length,
      };
    });
  };

  const showNextImage = () => {
    setLightbox((current) => {
      if (!current) return current;
      return {
        ...current,
        index: (current.index + 1) % current.items.length,
      };
    });
  };

  return (
    <section className="min-h-screen bg-[#efefec] text-[#18251f]">
      <div className="mx-auto max-w-[1700px] px-6 py-8 sm:px-10 lg:px-14">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-[#94a394] transition hover:text-[#d85b19]"
          >
            ← Back
          </button>

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#94a394]">
            Project Detail
          </p>
        </div>

        <section className="mt-10 overflow-hidden rounded-[2rem] border border-black/8 bg-white/70 shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
          <div className="relative min-h-[620px]">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.78),rgba(0,0,0,0.32)_45%,rgba(0,0,0,0.1))]" />

            <div className="relative z-10 flex min-h-[620px] flex-col justify-end p-6 sm:p-8 lg:p-12">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-white/88 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#314038]">
                    {project.year}
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                    {project.engine}
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                    {project.role}
                  </span>
                </div>

                <h1 className="mt-6 text-[clamp(2.8rem,6vw,6.5rem)] font-black uppercase leading-[0.9] tracking-[-0.07em] text-white">
                  {project.title}
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 overflow-hidden rounded-[1.5rem] bg-[#18251f] text-white">
          <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-4">
            <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                Team
              </p>
              <p className="mt-2 text-lg font-bold text-white">{project.team}</p>
            </div>

            <div className="border-b border-white/10 p-5 xl:border-b-0 md:border-r">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                Duration
              </p>
              <p className="mt-2 text-lg font-bold text-white">
                {project.duration}
              </p>
            </div>

            <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                Tools
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/12 bg-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                Focus
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-white/12 bg-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {project.myRole && (
          <section className="mt-6 overflow-hidden rounded-[1.5rem] border border-black/8 bg-white/70 shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
            <div className="px-6 py-6 sm:px-8 sm:py-7 lg:px-10">
              <div className="border-l-[4px] border-[#d85b19] pl-5 sm:pl-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#94a394]">
                  My Role
                </p>

                <p className="mt-3 w-full text-[0.95rem] leading-relaxed text-[#2f3a34] sm:text-[1rem]">
                  {project.myRole}
                </p>
              </div>
            </div>
          </section>
        )}

        <section className="mt-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#94a394]">
              Selected Systems
            </p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.8rem)] font-black uppercase leading-[0.95] tracking-[-0.05em] text-[#18251f]">
              Feature Highlights
            </h2>
          </div>

          <div className="mt-8 space-y-8">
            {project.sections.map((section, index) => {
              const isOpen = openSectionId === section.id;
              const sectionBreakdownStyle =
                section.breakdownStyle ?? project.breakdownStyle ?? "technical";

              return (
                <section
                  key={section.id}
                  ref={(el) => {
                    sectionRefs.current[section.id] = el;
                  }}
                  className={`overflow-hidden rounded-[2rem] border transition-all duration-300 ${
                    isOpen
                      ? "border-[#18251f]/18 bg-[#ece6db] shadow-[0_24px_70px_rgba(24,37,31,0.14)] ring-1 ring-black/6"
                      : "border-black/8 bg-white/70 shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
                  }`}
                >
                  <motion.div layout transition={TRANSITION} className="relative">
                    <motion.div
                      layout
                      transition={TRANSITION}
                      className={`grid gap-0 ${
                        isOpen
                          ? "grid-cols-1"
                          : `lg:grid-cols-[0.58fr_0.42fr] ${
                              index % 2 === 1
                                ? "lg:[&>*:first-child]:order-2"
                                : ""
                            }`
                      }`}
                    >
                      <motion.div
                        layout
                        transition={TRANSITION}
                        className={`relative overflow-hidden ${
                          isOpen
                            ? "min-h-[380px] lg:min-h-[450px]"
                            : "min-h-[320px] lg:min-h-[440px]"
                        }`}
                      >
                        {section.image ? (
                          <motion.img
                            layout
                            transition={TRANSITION}
                            src={section.image}
                            alt={section.title}
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 h-full w-full bg-[#d9ddd6]" />
                        )}

                        <motion.div
                          animate={{
                            background: isOpen
                              ? "linear-gradient(to top, rgba(0,0,0,0.84), rgba(0,0,0,0.44) 45%, rgba(0,0,0,0.16))"
                              : "linear-gradient(to top, rgba(0,0,0,0.18), rgba(0,0,0,0.00) 40%)",
                          }}
                          transition={{ duration: 0.35 }}
                          className="absolute inset-0"
                        />

                        {isOpen && (
                          <div className="relative z-10 flex min-h-[380px] items-end p-6 sm:p-8 lg:min-h-[450px] lg:p-10">
                            <div className="max-w-3xl">
                              <motion.p
                                layoutId={`eyebrow-${section.id}`}
                                transition={TRANSITION}
                                className="text-sm font-semibold uppercase tracking-[0.18em] text-white/68"
                              >
                                Feature
                              </motion.p>

                              <motion.h2
                                layoutId={`title-${section.id}`}
                                transition={TRANSITION}
                                className="mt-3 text-[clamp(2.2rem,3vw,3.6rem)] font-black uppercase leading-[0.95] tracking-[-0.05em] text-white"
                              >
                                {section.title}
                              </motion.h2>

                              <motion.p
                                layoutId={`text-${section.id}`}
                                transition={TRANSITION}
                                className="mt-5 max-w-2xl text-base leading-relaxed text-white/84 sm:text-lg"
                              >
                                {section.text}
                              </motion.p>

                              <div className="mt-8">
                                <motion.div
                                  layoutId={`button-wrap-${section.id}`}
                                  transition={TRANSITION}
                                  className="inline-flex"
                                >
                                  <motion.button
                                    layoutId={`button-${section.id}`}
                                    transition={TRANSITION}
                                    onClick={() => toggleSection(section.id)}
                                    className="inline-flex items-center rounded-full border border-white/18 bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition hover:bg-white/18"
                                  >
                                    Hide Breakdown
                                  </motion.button>
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>

                      {!isOpen && (
                        <motion.div
                          layout
                          transition={TRANSITION}
                          className="relative z-10 flex items-center p-6 sm:p-8 lg:p-10"
                        >
                          <div className="max-w-xl">
                            <motion.p
                              layoutId={`eyebrow-${section.id}`}
                              transition={TRANSITION}
                              className="text-sm font-semibold uppercase tracking-[0.18em] text-[#94a394]"
                            >
                              Feature
                            </motion.p>

                            <motion.h2
                              layoutId={`title-${section.id}`}
                              transition={TRANSITION}
                              className="mt-3 text-[clamp(2rem,3vw,3.2rem)] font-black uppercase leading-[0.95] tracking-[-0.05em] text-[#18251f]"
                            >
                              {section.title}
                            </motion.h2>

                            <motion.p
                              layoutId={`text-${section.id}`}
                              transition={TRANSITION}
                              className="mt-5 text-base leading-relaxed text-[#4b564f] sm:text-lg"
                            >
                              {section.text}
                            </motion.p>

                            <div className="mt-8">
                              <motion.div
                                layoutId={`button-wrap-${section.id}`}
                                transition={TRANSITION}
                                className="inline-flex"
                              >
                                <motion.button
                                  layoutId={`button-${section.id}`}
                                  transition={TRANSITION}
                                  onClick={() => toggleSection(section.id)}
                                  className="inline-flex items-center rounded-full bg-[#18251f] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d85b19]"
                                >
                                  View Breakdown
                                </motion.button>
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="breakdown"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.42,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden border-t-2 border-[#18251f]/12 bg-[#f7f1e7]"
                      >
                        <div className="px-6 py-6 sm:px-8 sm:py-8 lg:px-10">
                          <div className="rounded-[1.75rem] border border-black/8 bg-[#fbf7ef] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_24px_rgba(0,0,0,0.03)] sm:p-6 lg:p-8">
                            {section.breakdown.video && (
                              <motion.div
                                initial={{ y: 16, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -8, opacity: 0 }}
                                transition={{ duration: 0.35, delay: 0.05 }}
                                className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-black shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                              >
                                <video
                                  src={section.breakdown.video}
                                  controls
                                  muted
                                  loop={sectionBreakdownStyle === "visual"}
                                  playsInline
                                  className="h-full w-full"
                                />

                                {sectionBreakdownStyle === "visual" && (
                                  <div className="border-t border-white/10 bg-black px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    Gameplay Preview
                                  </div>
                                )}
                              </motion.div>
                            )}

                            {section.breakdown.steps.length > 0 &&
                              sectionBreakdownStyle === "technical" && (
                                <motion.div
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  exit={{ y: -8, opacity: 0 }}
                                  transition={{ duration: 0.35, delay: 0.1 }}
                                  className="mt-6 grid gap-6 lg:grid-cols-2"
                                >
                                  {section.breakdown.steps.map((step, stepIndex) => (
                                    <figure
                                      key={`${section.id}-step-${stepIndex}`}
                                      className="group overflow-hidden rounded-[1.5rem] border border-black/8 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
                                    >
                                      <button
                                        type="button"
                                        onClick={() =>
                                          openLightbox(
                                            section.title,
                                            section.breakdown.steps,
                                            stepIndex
                                          )
                                        }
                                        className="block w-full cursor-zoom-in text-left"
                                        aria-label={`Open ${section.title} image ${stepIndex + 1}`}
                                      >
                                        <div className="overflow-hidden border-b border-black/6 bg-[#d9ddd6]">
                                          <img
                                            src={step.image}
                                            alt={`${section.title} step ${stepIndex + 1}`}
                                            className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                                          />
                                        </div>
                                      </button>

                                      <figcaption className="p-5 text-sm leading-relaxed text-[#4b564f] sm:text-base">
                                        {step.caption}
                                      </figcaption>
                                    </figure>
                                  ))}
                                </motion.div>
                              )}

                            {section.breakdown.steps.length > 0 &&
                              sectionBreakdownStyle === "visual" && (
                                <motion.div
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  exit={{ y: -8, opacity: 0 }}
                                  transition={{ duration: 0.35, delay: 0.1 }}
                                  className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                                >
                                  {section.breakdown.steps.map((step, stepIndex) => (
                                    <figure
                                      key={`${section.id}-step-${stepIndex}`}
                                      className="overflow-hidden rounded-[1.25rem] border border-black/8 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
                                    >
                                      <button
                                        type="button"
                                        onClick={() =>
                                          openLightbox(
                                            section.title,
                                            section.breakdown.steps,
                                            stepIndex
                                          )
                                        }
                                        className="block w-full cursor-zoom-in text-left"
                                        aria-label={`Open ${section.title} image ${stepIndex + 1}`}
                                      >
                                        <div className="aspect-square overflow-hidden bg-black/5">
                                          <img
                                            src={step.image}
                                            alt={`${section.title} step ${stepIndex + 1}`}
                                            className="h-full w-full object-contain transition duration-300 hover:scale-[1.02]"
                                          />
                                        </div>
                                      </button>

                                      <figcaption className="border-t border-black/6 px-4 py-3">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#94a394]">
                                          Animation
                                        </p>
                                        <p className="mt-1 text-sm leading-relaxed text-[#2f3a34]">
                                          {step.label ?? `Animation ${stepIndex + 1}`}
                                        </p>
                                      </figcaption>
                                    </figure>
                                  ))}
                                </motion.div>
                              )}

                            {section.breakdown.notes.length > 0 &&
                              sectionBreakdownStyle === "technical" && (
                                <motion.div
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  exit={{ y: -8, opacity: 0 }}
                                  transition={{ duration: 0.35, delay: 0.15 }}
                                  className="mt-6 overflow-hidden rounded-[1.5rem] bg-[#18251f] text-white shadow-[0_12px_30px_rgba(24,37,31,0.15)]"
                                >
                                  <div className="p-5 sm:p-6">
                                    <div className="space-y-3">
                                      {section.breakdown.notes.map(
                                        (note, noteIndex) => (
                                          <div
                                            key={`${section.id}-note-${noteIndex}`}
                                            className="flex gap-3"
                                          >
                                            <span className="mt-0.5 text-[12px] font-bold uppercase tracking-[0.18em] text-white/35">
                                              {String(noteIndex + 1).padStart(2, "0")}
                                            </span>
                                            <p className="text-sm leading-relaxed text-white/84 sm:text-base">
                                              {note}
                                            </p>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </motion.div>
                              )}

                            {section.breakdown.notes.length > 0 &&
                              sectionBreakdownStyle === "visual" && (
                                <motion.div
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  exit={{ y: -8, opacity: 0 }}
                                  transition={{ duration: 0.35, delay: 0.15 }}
                                  className="mt-6 overflow-hidden rounded-[1.25rem] border border-black/8 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
                                >
                                  <div className="p-5 sm:p-6">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#94a394]">
                                      Key Notes
                                    </p>

                                    <div className="mt-4 space-y-3">
                                      {section.breakdown.notes.map(
                                        (note, noteIndex) => (
                                          <div
                                            key={`${section.id}-note-${noteIndex}`}
                                            className="flex gap-3"
                                          >
                                            <span className="mt-0.5 text-[12px] font-bold uppercase tracking-[0.18em] text-[#94a394]">
                                              {String(noteIndex + 1).padStart(2, "0")}
                                            </span>

                                            <p className="text-sm leading-relaxed text-[#2f3a34] sm:text-base">
                                              {note}
                                            </p>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </motion.div>
                              )}

                            <motion.div
                              initial={{ y: 16, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -8, opacity: 0 }}
                              transition={{ duration: 0.35, delay: 0.2 }}
                              className="mt-8 flex justify-center"
                            >
                              <button
                                onClick={() =>
                                  closeSectionAndScrollToHeader(section.id)
                                }
                                className="inline-flex items-center rounded-full border border-[#18251f]/12 bg-[#18251f] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d85b19]"
                              >
                                Back to Feature
                              </button>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </section>
              );
            })}
          </div>
        </section>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <div className="relative flex min-h-screen items-center justify-center px-4 py-6 sm:px-8">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                className="absolute right-4 top-4 z-20 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
              >
                Close
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrevImage();
                }}
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/20 sm:left-6"
                aria-label="Previous image"
              >
                ←
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNextImage();
                }}
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/20 sm:right-6"
                aria-label="Next image"
              >
                →
              </button>

              <div
                className="w-full max-w-6xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">
                    {lightbox.index + 1} / {lightbox.items.length}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${lightbox.title}-${lightbox.index}`}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.28 }}
                    className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111]"
                  >
                    <div className="relative">
                      <img
                        src={lightbox.items[lightbox.index].image}
                        alt={lightbox.title}
                        className="max-h-[78vh] w-full object-contain bg-black"
                      />

                      <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.88),rgba(0,0,0,0.45),transparent)] px-5 pb-5 pt-16 sm:px-8 sm:pb-8">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                          {lightbox.title}
                        </p>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/88 sm:text-base">
                          {lightbox.items[lightbox.index].caption}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {lightbox.items.length > 1 && (
                  <div className="mt-4 flex items-center justify-center gap-2">
                    {lightbox.items.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={() =>
                          setLightbox((current) =>
                            current ? { ...current, index: dotIndex } : current
                          )
                        }
                        className={`h-2.5 rounded-full transition ${
                          dotIndex === lightbox.index
                            ? "w-8 bg-white"
                            : "w-2.5 bg-white/35 hover:bg-white/55"
                        }`}
                        aria-label={`Go to image ${dotIndex + 1}`}
                      />
                    ))}
                  </div>
                )}

                <div className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Esc to close • ← → to navigate
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}