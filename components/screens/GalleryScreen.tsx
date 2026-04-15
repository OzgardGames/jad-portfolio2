"use client";

import { useEffect, useState } from "react";
import { galleryItems } from "@/data/gallery";

type Props = {
  onBack: () => void;
};

const INITIAL_COUNT = 8;
const LOAD_MORE_COUNT = 4;

export default function GalleryScreen({ onBack }: Props) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const visibleItems = galleryItems.slice(0, visibleCount);
  const hasMore = visibleCount < galleryItems.length;

  const closeLightbox = () => setSelectedIndex(null);

  const showPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === galleryItems.length - 1 ? 0 : selectedIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

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
            Gallery
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <p className="text-[clamp(1rem,1.4vw,1.4rem)] font-light uppercase tracking-[-0.03em] text-[#94a394]">
            Visual Archive
          </p>

          <h1 className="mt-2 text-[clamp(2.6rem,6vw,5.8rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#d85b19]">
            Gallery
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4b564f] sm:text-lg">
            A selection of artwork, studies, technical experiments, and visual
            development pieces. Click any image to view it in full.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {visibleItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group relative block overflow-hidden rounded-[1.1rem] border border-black/6 bg-white/50 text-left shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 focus:outline-none"
            >
              <div className="relative aspect-[4/4] overflow-hidden bg-[#e8ebe5]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />

                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.58),rgba(0,0,0,0.08)_42%,transparent_70%)] opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                    {item.type}
                  </p>
                  <h2 className="mt-1 text-lg font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-xl">
                    {item.title}
                  </h2>
                </div>
              </div>
            </button>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + LOAD_MORE_COUNT, galleryItems.length)
                )
              }
              className="min-w-[200px] rounded-full border border-[#c7cbc3] bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#314038] transition hover:-translate-y-0.5 hover:border-[#d85b19] hover:text-[#d85b19]"
            >
              Show More
            </button>
          </div>
        )}
      </div>

      {selectedIndex !== null && galleryItems[selectedIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 px-4 py-6"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-5 top-5 z-10 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/20"
          >
            Close
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/20 sm:left-6"
            aria-label="Previous image"
          >
            ←
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/20 sm:right-6"
            aria-label="Next image"
          >
            →
          </button>

          <div
            className="relative mx-auto flex w-full max-w-[1400px] flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="max-h-[78vh] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <img
                src={galleryItems[selectedIndex].image}
                alt={galleryItems[selectedIndex].title}
                className="max-h-[78vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="mt-4 w-full max-w-[900px] text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                {galleryItems[selectedIndex].type}
              </p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-[-0.04em] text-white sm:text-3xl">
                {galleryItems[selectedIndex].title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}