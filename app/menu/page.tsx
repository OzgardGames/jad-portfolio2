"use client";

import { useMemo, useState } from "react";
import MenuLandingScreen from "@/components/screens/MenuLandingScreen";
import RouteFade from "@/components/RouteFade";

type MenuItem = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
};

const menuItems: MenuItem[] = [
  {
    id: "projects",
    number: "01",
    title: "Projects",
    subtitle: "Shaders / Gameplay / Tech Art",
    description:
      "Case studies, systems, prototypes, and technical art work across Unreal Engine and Unity.",
    image: "/menus/projects.webp",
  },
  {
    id: "about",
    number: "02",
    title: "About",
    subtitle: "Profile / Contact / Resume",
    description:
      "Background, contact details, and a concise overview of my focus as a developer.",
    image: "/menus/about.webp",
  },
  {
    id: "skills",
    number: "03",
    title: "Skills",
    subtitle: "Tools / Pipeline / Engine Work",
    description:
      "Technical art, gameplay systems, engine workflows, tools, and production-facing skills.",
    image: "/menus/skills.webp",
  },
  {
    id: "gallery",
    number: "04",
    title: "Gallery",
    subtitle: "Breakdowns / Visuals / Experiments",
    description:
      "Selected visuals, supporting material, and ongoing artistic and technical exploration.",
    image: "/menus/gallery.webp",
  },
];

export default function MenuPage() {
  const [selected, setSelected] = useState<string>("projects");

  const selectedItem = useMemo(
    () => menuItems.find((item) => item.id === selected) ?? menuItems[0],
    [selected]
  );

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#efefec] text-[#18251f]">
      <RouteFade>
        <MenuLandingScreen
          items={menuItems}
          selected={selected}
          selectedItem={selectedItem}
          onSelect={setSelected}
        />
      </RouteFade>
    </main>
  );
}