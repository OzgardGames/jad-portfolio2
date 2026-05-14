"use client";

import ProjectsHandScreen from "@/components/screens/ProjectsHandScreen";
import RouteFade from "@/components/RouteFade";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#efefec] text-[#18251f]">
      <RouteFade>
        <ProjectsHandScreen />
      </RouteFade>
    </main>
  );
}