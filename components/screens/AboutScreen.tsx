type Props = {
  onBack: () => void;
};

export default function AboutScreen({ onBack }: Props) {
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
            About / Contact
          </p>
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[0.42fr_0.58fr]">
          <aside className="rounded-[2rem] border border-black/8 bg-white/70 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-8">
            <p className="text-[clamp(1rem,1.3vw,1.4rem)] font-light uppercase tracking-[-0.03em] text-[#94a394]">
              Profile
            </p>

            <h1 className="mt-3 text-[clamp(3rem,6vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.07em] text-[#d85b19]">
              About
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[#4b564f]">
              I’m Jad Boukentar, a game development student with a background in
              architecture and a strong focus on Technical Art, gameplay systems,
              and real-time visual development.
            </p>

            <div className="mt-8 space-y-4 border-t border-black/6 pt-8 text-sm sm:text-base">
              <div>
                <p className="font-semibold uppercase tracking-[0.16em] text-[#94a394]">
                  Location
                </p>
                <p className="mt-1 text-[#314038]">Ottawa, Canada</p>
              </div>

              <div>
                <p className="font-semibold uppercase tracking-[0.16em] text-[#94a394]">
                  Focus
                </p>
                <p className="mt-1 text-[#314038]">
                  Technical Art / Gameplay Systems / Unreal Engine
                </p>
              </div>

              <div>
                <p className="font-semibold uppercase tracking-[0.16em] text-[#94a394]">
                  Education
                </p>
                <p className="mt-1 text-[#314038]">
                  Game Development — Algonquin College
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                className="rounded-full bg-[#d85b19] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5"
              >
                Load Resume
              </a>

              <a
                href="mailto:jad@example.com"
                className="rounded-full border border-[#c7cbc3] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#314038] transition hover:border-[#d85b19] hover:text-[#d85b19]"
              >
                Contact
              </a>
            </div>
          </aside>

          <div className="grid gap-8">
            <section className="rounded-[2rem] border border-black/8 bg-white/70 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#94a394]">
                Summary
              </p>

              <div className="mt-5 space-y-4 text-base leading-relaxed text-[#4b564f] sm:text-lg">
                <p>
                  My work sits between visual design and technical implementation.
                  I enjoy building shaders, materials, rigging setups, animation
                  workflows, VFX, and gameplay-aware systems that make projects
                  feel more polished, readable, and production-ready.
                </p>

                <p>
                  With a background in architecture, I naturally think about
                  space, composition, presentation, and structure. That carries
                  into the way I approach game art, technical problem solving,
                  and player-facing design.
                </p>

                <p>
                  I’m especially interested in roles where I can bridge teams and
                  support the pipeline between art, design, and engineering.
                </p>
              </div>
            </section>

            <div className="grid gap-8 lg:grid-cols-2">
              <section className="rounded-[2rem] border border-black/8 bg-white/70 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#94a394]">
                  What I Work On
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    "Shaders",
                    "Materials",
                    "Rigging",
                    "VFX",
                    "Animation Workflows",
                    "Gameplay Systems",
                    "UI Presentation",
                    "Pipeline Support",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#eef1eb] px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#4b564f]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <section className="rounded-[2rem] border border-black/8 bg-white/70 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#94a394]">
                  Links
                </p>

                <div className="mt-5 space-y-3 text-sm sm:text-base">
                  <a
                    href="mailto:jad@example.com"
                    className="block text-[#314038] transition hover:text-[#d85b19]"
                  >
                    jad@example.com
                  </a>
                  <a
                    href="#"
                    className="block text-[#314038] transition hover:text-[#d85b19]"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="block text-[#314038] transition hover:text-[#d85b19]"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="block text-[#314038] transition hover:text-[#d85b19]"
                  >
                    ArtStation
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}