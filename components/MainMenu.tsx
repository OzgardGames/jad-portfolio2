type Props = {
  onStart: () => void;
};

export default function MainMenu({ onStart }: Props) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle,#111,#000)]">
      
      <h1 className="text-6xl font-black uppercase tracking-widest text-[#d85b19]">
        Portfolio
      </h1>

      <p className="mt-4 text-lg text-gray-400">
        Jad Boukentar — Technical Artist
      </p>

      <div className="mt-12 flex flex-col gap-4">
        
        <button
          onClick={onStart}
          className="rounded-full border border-white px-10 py-4 text-lg uppercase tracking-widest transition hover:bg-[#d85b19]"
        >
          Start
        </button>

        <a
          href="/resume.pdf"
          className="text-center text-sm uppercase tracking-widest text-gray-400 hover:text-white"
        >
          Load Resume
        </a>

      </div>
    </div>
  );
}