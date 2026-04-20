"use client";

import { motion } from "framer-motion";

type HeroLandingScreenProps = {
  onStart: () => void;
};

export default function HeroLandingScreen({
  onStart,
}: HeroLandingScreenProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#efefec] text-[#18251f]">
      <div className="absolute inset-0">
        <img
          src="/menus/landing.webp"
          alt="Portfolio hero artwork"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 backdrop-blur-[3px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(239,239,236,0.92)_0%,rgba(239,239,236,0.75)_10%,rgba(239,239,236,0.45)_40%,rgba(239,239,236,0.18)_70%,rgba(239,239,236,0)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(239,239,236,0.35)_0%,rgba(239,239,236,0.12)_30%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(216,91,25,0.08),transparent_28%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1700px] items-center px-5 py-8 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-[720px] xl:max-w-[820px]"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8a978f] sm:text-[12px]">
            2026
          </p>

          <div className="mt-5 sm:mt-6">
            <h1 className="text-[clamp(3rem,6.2vw,8rem)] font-black uppercase leading-[0.88] tracking-[-0.08em] text-[#d85b19]">
              Portfolio
            </h1>

            <p className="mt-3 text-[clamp(1rem,1.45vw,2rem)] font-black uppercase leading-none tracking-[-0.05em] text-[#18251f]">
              Jad Boukentar
            </p>

            <p className="mt-5 max-w-[32rem] text-[clamp(0.92rem,0.88vw,1.08rem)] leading-relaxed text-[#4b564f] lg:max-w-[35rem] xl:max-w-[36rem]">
              Technical Artist focused on shaders, gameplay-aware systems, VFX,
              and polished visual implementation in Unreal Engine and Unity.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <button
              onClick={onStart}
              className="group inline-flex min-h-[54px] min-w-[176px] items-center justify-center rounded-full bg-[#d85b19] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(216,91,25,0.24)] xl:min-h-[56px] xl:min-w-[190px] xl:px-8"
            >
              <span className="inline-flex items-center gap-2">
                Enter Portfolio
                <span className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </button>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] min-w-[176px] items-center justify-center rounded-full border border-white/45 bg-white/35 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#243129] backdrop-blur-md transition hover:border-[#d85b19] hover:text-[#d85b19] xl:min-h-[56px] xl:min-w-[190px] xl:px-8"
            >
              Load Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}