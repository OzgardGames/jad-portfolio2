type Props = {
  title: string;
  role: string;
  engine: string;
};

export default function ProjectCard({ title, role, engine }: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm text-gray-500">
        {engine} · {role}
      </p>

      <h3 className="mt-2 text-2xl font-bold">{title}</h3>

      <button className="mt-4 text-sm font-semibold text-[#d85b19]">
        View Project →
      </button>
    </div>
  );
}