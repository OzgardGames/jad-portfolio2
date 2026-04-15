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
          <aside className="rounded-[2rem] border border-black/8 bg-white/70 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-8">
            <p className="text-[clamp(1rem,1.3vw,1.4rem)] font-light uppercase tracking-[-0.03em] text-[#94a394]">
              Capability Map
            </p>

            <h1 className="mt-3 text-[clamp(3rem,6vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.07em] text-[#d85b19]">
              Skills
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[#4b564f]">
              My work sits between art, design, and implementation. These are the
              tools and production areas I use most across technical art and gameplay
              development.
            </p>

            <div className="mt-8 space-y-4 border-t border-black/6 pt-8 text-sm sm:text-base">
              <div>
                <p className="font-semibold uppercase tracking-[0.16em] text-[#94a394]">
                  Main Focus
                </p>
                <p className="mt-1 text-[#314038]">
                  Technical Art / Gameplay Systems
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
                  Visual quality, real-time problem solving, and production support
                </p>
              </div>
            </div>
          </aside>

          <div className="grid gap-8 md:grid-cols-2">
            {skillGroups.map((group) => (
              <section
                key={group.title}
                className="rounded-[2rem] border border-black/8 bg-white/70 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-8"
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
                      className="rounded-full bg-[#eef1eb] px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#4b564f] sm:text-sm"
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