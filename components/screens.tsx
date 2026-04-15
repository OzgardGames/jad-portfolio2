import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <h2 className="text-4xl font-bold uppercase">Projects</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            role={project.role}
            engine={project.engine}
          />
        ))}
      </div>
    </section>
  );
}