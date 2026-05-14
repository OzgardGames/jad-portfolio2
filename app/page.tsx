"use client";

import HeroLandingScreen from "@/components/screens/HeroLandingScreen";
import RouteFade from "@/components/RouteFade";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#efefec] text-[#18251f]">
      <RouteFade>
        <HeroLandingScreen />
      </RouteFade>
    </main>
  );
}