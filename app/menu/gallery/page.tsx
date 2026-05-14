"use client";

import GalleryScreen from "@/components/screens/GalleryScreen";
import RouteFade from "@/components/RouteFade";

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#efefec] text-[#18251f]">
      <RouteFade>
        <GalleryScreen />
      </RouteFade>
    </main>
  );
}