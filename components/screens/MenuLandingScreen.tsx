"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type MenuItem = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
};

type MenuLandingScreenProps = {
  items: MenuItem[];
  selected: string;
  selectedItem: MenuItem;
  onSelect: (id: string) => void;
  onBack?: () => void;
  onOpen?: (id: string) => void;
};

export default function MenuLandingScreen({
  items,
  selected,
  onSelect,
  onBack,
  onOpen,
}: MenuLandingScreenProps) {
  const selectedIndex = items.findIndex((item) => item.id === selected);
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }

    router.push("/");
  };

  const handleOpen = (id: string) => {
    if (onOpen) {
      onOpen(id);
      return;
    }

    router.push(`/menu/${id}`);
  };

  return (
    <section className="min-h-screen overflow-hidden bg-[#efefec] text-[#18251f]">
      <div className="mx-auto grid min-h-screen max-w-[1800px] grid-cols-1 overflow-hidden lg:grid-cols-[minmax(500px,0.4fr)_minmax(0,0.6fr)] xl:grid-cols-[minmax(520px,0.38fr)_minmax(0,0.62fr)]">
        <aside className="flex h-full min-h-0 flex-col overflow-hidden px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-9 lg:px-12 lg:py-10 xl:px-16 xl:py-14">
          <button
            onClick={handleBack}
            className="w-fit text-sm font-semibold uppercase tracking-[0.2em] text-[#94a394] transition hover:text-[#d85b19]"
          >
            ← Back
          </button>

          <div className="mt-10 lg:mt-12 xl:mt-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#94a394]">
              Main Menu
            </p>

            <h2 className="mt-4 text-[clamp(2.45rem,4vw,5.6rem)] font-black uppercase leading-[0.88] tracking-[-0.07em] text-[#d85b19]">
              EXPLORE
            </h2>
          </div>

          <nav className="mt-10 flex min-h-0 flex-1 flex-col justify-center gap-4 lg:mt-12 lg:gap-4 xl:mt-16 xl:gap-7 2xl:gap-8">
            {items.map((item) => {
              const isActive = selected === item.id;

              return (
                <button
                  key={item.id}
                  onMouseEnter={() => onSelect(item.id)}
                  onFocus={() => onSelect(item.id)}
                  onClick={() => handleOpen(item.id)}
                  className="group text-left"
                >
                  <motion.div
                    animate={{
                      x: isActive ? 8 : 0,
                      opacity: isActive ? 1 : 0.84,
                    }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                    className="relative"
                  >
                    <div className="relative flex items-start gap-4 lg:gap-4 xl:gap-7">
                      <div className="flex w-[2.4rem] shrink-0 items-center justify-center sm:w-[2.8rem] xl:w-[3.5rem]">
                        <motion.div
                          animate={isActive ? { x: [0, 8, 0] } : { x: 0 }}
                          transition={
                            isActive
                              ? {
                                  duration: 0.45,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }
                              : { duration: 0.2 }
                          }
                          className={`h-0 w-0 border-y-[8px] border-y-transparent border-l-[13px] sm:border-y-[9px] sm:border-l-[14px] xl:border-y-[10px] xl:border-l-[16px] ${
                            isActive
                              ? "border-l-[#d85b19]"
                              : "border-l-transparent"
                          }`}
                        />
                      </div>

                      <p
                        className={`w-[2.2rem] shrink-0 pt-[2px] text-[0.78rem] font-semibold tracking-[0.16em] transition duration-300 sm:w-[2.4rem] sm:text-[0.84rem] xl:w-[2.8rem] xl:text-[0.95rem] ${
                          isActive ? "text-[#d85b19]" : "text-[#8f9c94]"
                        }`}
                      >
                        {item.number}
                      </p>

                      <div
                        className={`mt-[0.9rem] h-px shrink-0 transition-all duration-300 ${
                          isActive
                            ? "w-8 bg-[#d85b19] sm:w-10 xl:w-16"
                            : "w-4 bg-black/12 group-hover:w-7 group-hover:bg-[#d85b19]/50 sm:w-5 xl:w-8 xl:group-hover:w-12"
                        }`}
                      />

                      <div className="min-w-0">
                        <p
                          className={`font-black uppercase leading-[0.94] tracking-[-0.045em] transition-all duration-300 ${
                            isActive
                              ? "text-[clamp(1.45rem,1.55vw,2.85rem)] text-[#18251f]"
                              : "text-[clamp(1.15rem,1.2vw,2rem)] text-[#4f5b54] group-hover:text-[#18251f]"
                          }`}
                        >
                          {item.title}
                        </p>

                        <p
                          className={`mt-1 text-[0.82rem] leading-relaxed transition sm:mt-1.5 sm:text-[0.88rem] xl:mt-2 xl:text-[0.98rem] ${
                            isActive
                              ? "text-[#6f7c74]"
                              : "text-[#99a49d] group-hover:text-[#7d8a82]"
                          }`}
                        >
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </button>
              );
            })}
          </nav>

          <p className="pt-5 text-sm text-[#90a088] xl:pt-8">
            Hover to preview • Click to enter
          </p>
        </aside>

        <div className="relative hidden h-full overflow-hidden lg:block">
          <div className="relative flex h-full items-center justify-center px-4 lg:px-4 xl:px-10 2xl:px-14">
            <div className="relative h-[min(82vh,880px)] w-full max-w-[1100px] xl:max-w-[1200px]">
              {items.map((item, index) => {
                const isActive = index === selectedIndex;
                const relative = index - selectedIndex;

                const abs = Math.abs(relative);
                const direction = relative < 0 ? -1 : 1;

                const y = abs * 34;
                const x = isActive ? 0 : direction * (26 + abs * 10);
                const rotate = isActive ? 0 : direction * (1.5 + abs * 0.4);
                const scale = isActive ? 1 : 0.97 - abs * 0.02;

                const zIndex = isActive ? 100 : 100 - abs;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => onSelect(item.id)}
                    onFocus={() => onSelect(item.id)}
                    onClick={() =>
                      item.id === selected
                        ? handleOpen(item.id)
                        : onSelect(item.id)
                    }
                    initial={false}
                    animate={{
                      x,
                      y,
                      rotate,
                      scale,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 24,
                    }}
                    className="absolute left-1/2 top-1/2 w-[min(27vw,520px)] min-w-[320px] -translate-x-1/2 -translate-y-1/2 text-left xl:w-[min(32vw,600px)] xl:min-w-[360px]"
                    style={{ zIndex }}
                  >
                    <article
                      className={`overflow-hidden rounded-[2rem] border bg-white transition ${
                        isActive
                          ? "border-[#d85b19]/70 shadow-[0_26px_70px_rgba(216,91,25,0.24)]"
                          : "border-black/10 shadow-[0_18px_44px_rgba(0,0,0,0.12)]"
                      }`}
                    >
                      <div className="relative h-[min(68vh,920px)] min-h-[500px] xl:h-[min(70vh,1000px)] xl:min-h-[540px]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className={`h-full w-full object-cover transition duration-700 ${
                            isActive ? "scale-[1.03]" : "scale-100"
                          }`}
                        />

                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.78),rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.05))]" />

                        <div className="absolute left-5 top-5 rounded-full bg-white/88 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#314038]">
                          {item.number}
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-5 xl:p-7">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                            {item.subtitle}
                          </p>

                          <h3 className="mt-2 text-[clamp(1.65rem,1.7vw,2.8rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-white">
                            {item.title}
                          </h3>

                          <p className="mt-3 text-[0.9rem] leading-relaxed text-white/82 xl:text-[1.08rem]">
                            {item.description}
                          </p>

                          <div className="mt-5 h-px w-14 bg-white/28 transition-all duration-300">
                            &nbsp;
                          </div>

                          <p
                            className={`mt-4 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                              isActive ? "text-[#f2b08a]" : "text-white/58"
                            }`}
                          >
                            {isActive ? "Click again to open" : "Preview"}
                          </p>
                        </div>
                      </div>
                    </article>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}