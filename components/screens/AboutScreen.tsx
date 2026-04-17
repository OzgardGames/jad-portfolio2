import { Mail, FolderGit2, Brush, Link } from "lucide-react";

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
            About
          </p>
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[0.42fr_0.58fr]">
          {/* LEFT PANEL */}
          <aside className="rounded-[2rem] border border-black/8 bg-gradient-to-br from-white/80 to-[#f8f6f1] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-8">
            <p className="text-[clamp(1rem,1.3vw,1.4rem)] font-light uppercase tracking-[-0.03em] text-[#94a394]">
              Profile
            </p>

          {/* PROFILE IMAGE */}
          <div className="mt-6 flex justify-center">
            <div className="relative h-60 w-60 sm:h-90 sm:w-90">
              {/* glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d85b19]/25 to-transparent blur-[6px]" />

              {/* image */}
              <div className="relative h-full w-full overflow-hidden rounded-full border border-black/10 bg-[#e8ebe5] shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                <img
                  src="/about/profile.jpeg"
                  alt="Jad Boukentar"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

            {/* TITLE */}
            <h1 className="mt-9 text-center text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#d85b19]">
              About me
            </h1>

            {/* SHORT INTRO */}
            <p className="mt-8 text-center text-lg leading-relaxed text-[#4b564f] max-w-md mx-auto">
              I’m Jad Boukentar, a Game Development graduate with a background in
              architecture and project management, focused on Technical Art,
              gameplay systems, and production-minded development.
            </p>

            {/* INFO */}
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
                  Technical Art / Gameplay Systems / Engine Implementation
                </p>
              </div>

              <div>
                <p className="font-semibold uppercase tracking-[0.16em] text-[#94a394]">
                  Education
                </p>
                <p className="mt-1 text-[#314038]">
                  Game Development - Algonquin College | Ottawa | Canada
                </p>
                <p className="mt-1 text-[#314038]">
                  Architecture - National School of Architecture | Rabat | Morocco
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/resume.pdf"
              className="min-w-[180px] rounded-full bg-[#d85b19] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white text-center transition hover:-translate-y-0.5 hover:scale-105"
            >
              Load Resume
            </a>

            <a
              href="mailto:boukentar.jad@gmail.com"
              className="min-w-[180px] rounded-full border border-[#c7cbc3] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#314038] text-center transition hover:border-[#d85b19] hover:text-[#d85b19] hover:-translate-y-0.5 hover:scale-105"
            >
              Contact
            </a>
          </div>
          </aside>

          {/* RIGHT PANEL */}
          <div className="grid gap-8">
            {/* SUMMARY */}
<section className="rounded-[2rem] border border-[#d85b19]/10 bg-gradient-to-br from-[#fffaf6] to-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-8">
  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d85b19]">
    Summary
  </p>

  <div className="mt-5 space-y-6 border-l-2 border-[#d85b19]/30 pl-6 text-base leading-relaxed text-[#4b564f] sm:text-lg">
    <p>
      So… how does an architect end up in game development?
    </p>

    <p>
      I’ve been passionate about games for as long as I can remember. Growing up,
      I was always fascinated by how they were made; especially hearing that some
      of them took years to build. For some reason, my reaction was always the
      same: <span className="italic text-[#314038]">“that doesn’t sound so bad, I could probably do that.”</span>
    </p>

    <p>
      I started my career in span <span className="bold text-[#d85b19]">architecture</span> and worked as a project manager, where
      I learned how to think in systems, structure complex ideas, and support a
      team’s needs in production. But that curiosity for games never really left,
      and eventually I decided to go all in, left everything and traveled all the 
      way from <span className="bold text-[#d85b19]">Morocco</span> to <span className="bold text-[#d85b19]">Canada</span>, to chase a dream.
    </p>

    <p>
      I joined <span className="bold text-[#d85b19]">Algonquin College</span> through the programming path and graduated with
      an excellent academic record. That gave me a strong technical foundation and
      shaped how I approach development: writing clean, readable code and always
      thinking about the people who will use it.
    </p>

    <p>
      Somewhere along the way, I realized I wasn’t just coding, or
      just doing art. I naturally fell into a space between both. As an artist who can
      also program, I understand what artists need, what designers expect, and how
      systems are built behind the scenes.
    </p>

    <p>
      In my projects, that often meant bridging the gap: modeling, texturing,
      rigging, implementing assets in-engine, coding behaviors, and connecting
      backend systems to the tools and visuals the team interacts with.
    </p>

    <p>
      Today, I focus on building that bridge, creating artist-friendly workflows,
      supporting pipelines, and turning visual ideas into real, functional game
      systems.
    </p>
  </div>
</section>

            {/* SKILLS + LINKS */}
            <div className="grid gap-8 lg:grid-cols-2">
<section className="rounded-[2rem] border border-[#d85b19]/15 bg-gradient-to-br from-[#fff7f1] to-[#fffdfb] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-8">
  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d85b19]">
    Best Fit
  </p>

  <div className="mt-5 space-y-5 text-sm text-[#4b564f] sm:text-base">
    <div className="flex items-start gap-3">
      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#d85b19]" />
      <p>
        Technical Artist roles focused on shaders, materials, rigging, tools,
        UI implementation, and artist-facing workflows.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#d85b19]" />
      <p>
        Gameplay or technical design roles where visual implementation and
        readable systems go hand in hand.
      </p>
    </div>
  </div>
</section>

              <section className="rounded-[2rem] border border-black/8 bg-white/70 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#94a394]">
                  Links
                </p>

                <div className="mt-5 space-y-4 text-sm sm:text-base">
                  <a
                    href="mailto:boukentar.jad@gmail.com"
                    className="flex items-center gap-3 text-[#314038] transition hover:text-[#d85b19] hover:translate-x-1"
                  >
                    <Mail size={18} />
                    <span>boukentar.jad@gmail.com</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jad-boukentar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#314038] transition hover:text-[#d85b19] hover:translate-x-1"
                  >
                    <Link size={18} />
                    <span>linkedin.com/in/jad-boukentar</span>
                  </a>

                  <a
                    href="https://github.com/OzgardGames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#314038] transition hover:text-[#d85b19] hover:translate-x-1"
                  >
                    <FolderGit2 size={18} />
                    <span>github.com/OzgardGames</span>
                  </a>

                  <a
                    href="https://www.artstation.com/jad-boukentar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#314038] transition hover:text-[#d85b19] hover:translate-x-1"
                  >
                    <Brush size={18} />
                    <span>artstation.com/jad-boukentar</span>
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