import { notFound } from "next/navigation";
import ProjectDetailScreen from "@/components/screens/ProjectDetailScreen";
import RouteFade from "@/components/RouteFade";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#efefec] text-[#18251f]">
      <RouteFade>
        <ProjectDetailScreen projectId={project.id} />
      </RouteFade>
    </main>
  );
}