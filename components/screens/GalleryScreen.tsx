import { galleryItems } from "@/data/gallery";

type Props = {
  onBack: () => void;
};

export default function GalleryScreen({ onBack }: Props) {
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

        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[clamp(1rem,1.4vw,1.4rem)] font-light uppercase tracking-[-0.03em] text-[#94a394]">
              Visual Archive
            </p>
            <h1 className="mt-2 text-[clamp(3.2rem,7vw,7rem)] font-black uppercase leading-[0.88] tracking-[-0.07em] text-[#d85b19]">
              Gallery
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4b564f] sm:text-lg">
              A visual collection of breakdowns, experiments, presentation shots,
              and technical art studies that support the larger projects across
              the portfolio.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-[2rem] border border-black/8 bg-white/70 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            >
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.42),transparent_42%)]" />
              </div>

              <div className="space-y-3 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#94a394]">
                  {item.type}
                </p>

                <h2 className="text-2xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-[#18251f]">
                  {item.title}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}