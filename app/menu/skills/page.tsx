"use client";

import SkillsScreen from "@/components/screens/SkillsScreen";
import RouteFade from "@/components/RouteFade";

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#efefec] text-[#18251f]">
      <RouteFade>
        <SkillsScreen />
      </RouteFade>
    </main>
  );
}