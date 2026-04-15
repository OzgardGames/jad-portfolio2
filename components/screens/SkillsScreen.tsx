import { skillGroups } from "@/data/skills";

type Props = {
  onBack: () => void;
};

export default function SkillsScreen({ onBack }: Props) {
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
            Skills
          </p>
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[0.34fr_0.66fr]">
          {/* LEFT PANEL */}
          <aside className="rounded-[2rem] border border-black/8 bg-gradient-to-br from-white/80 to-[#f8f6f1] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-8">
            <p className="text-[clamp(1rem,1.3vw,1.4rem)] font-light uppercase tracking-[-0.03em] text-[#94a394]">
              Capability Map
            </p>

            <h1 className="mt-3 text-[clamp(2.6rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.07em] text-[#d85b19]">
              Skills
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[#4b564f]">
              My skill set sits between art, design, and engineering. I work
              across technical art, gameplay systems, and production support,
              with a focus on building clear visuals, functional tools, and
              readable implementation.
            </p>

            <div className="mt-8 space-y-5 border-t border-black/6 pt-8 text-sm sm:text-base">
              <div>
                <p className="font-semibold uppercase tracking-[0.16em] text-[#94a394]">
                  Main Focus
                </p>
                <p className="mt-1 text-[#314038]">
                  Technical Art / Game Design / Gameplay Systems 
                </p>
              </div>

              <div>
                <p className="font-semibold uppercase tracking-[0.16em] text-[#94a394]">
                  Engines
                </p>
                <p className="mt-1 text-[#314038]">
                  Unreal Engine / Unity
                </p>
              </div>

              <div>
                <p className="font-semibold uppercase tracking-[0.16em] text-[#94a394]">
                  Approach
                </p>
                <p className="mt-1 text-[#314038]">
                  Bridging art and code with simple and readable systems.
                </p>
              </div>
            </div>
          </aside>

          {/* RIGHT PANEL */}
          <div className="grid gap-8 md:grid-cols-2">
            {skillGroups.map((group) => (
              <section
                key={group.title}
                className="rounded-[2rem] border border-black/8 bg-gradient-to-br from-white/75 to-[#fffaf6] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 sm:p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#94a394]">
                  Branch
                </p>

                <h2 className="mt-3 text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-[#18251f]">
                  {group.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-[#4b564f] sm:text-base">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#d85b19]/10 bg-[#f3eee8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#4b564f] transition hover:border-[#d85b19]/30 hover:text-[#d85b19] sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}