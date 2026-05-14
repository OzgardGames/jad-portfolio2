"use client";

import AboutScreen from "@/components/screens/AboutScreen";
import RouteFade from "@/components/RouteFade";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#efefec] text-[#18251f]">
      <RouteFade>
        <AboutScreen />
      </RouteFade>
    </main>
  );
}