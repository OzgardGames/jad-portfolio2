"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroLandingScreen from "@/components/screens/HeroLandingScreen";
import MenuLandingScreen from "@/components/screens/MenuLandingScreen";
import ProjectsHandScreen from "@/components/screens/ProjectsHandScreen";
import ProjectDetailScreen from "@/components/screens/ProjectDetailScreen";
import AboutScreen from "@/components/screens/AboutScreen";
import SkillsScreen from "@/components/screens/SkillsScreen";
import GalleryScreen from "@/components/screens/GalleryScreen";

type Screen =
  | "hero"
  | "menu"
  | "projects"
  | "projectDetail"
  | "about"
  | "skills"
  | "gallery";

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
    image: "/projects/whiskey/ragdoll.png",
  },
  {
    id: "about",
    number: "02",
    title: "About",
    subtitle: "Profile / Contact / Resume",
    description:
      "Background, contact details, and a concise overview of my focus as a developer.",
    image: "/projects/ties/hero.png",
  },
  {
    id: "skills",
    number: "03",
    title: "Skills",
    subtitle: "Tools / Pipeline / Engine Work",
    description:
      "Technical art, gameplay systems, engine workflows, tools, and production-facing skills.",
    image: "/projects/crowns/environment.png",
  },
  {
    id: "gallery",
    number: "04",
    title: "Gallery",
    subtitle: "Breakdowns / Visuals / Experiments",
    description:
      "Selected visuals, supporting material, and ongoing artistic and technical exploration.",
    image: "/gallery/hero.jpg",
  },
];

const screenTransition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function HomePage() {
  const [screen, setScreen] = useState<Screen>("hero");
  const [selected, setSelected] = useState<string>("projects");
  const [activeProjectId, setActiveProjectId] = useState<string>("");

  const selectedItem = useMemo(
    () => menuItems.find((item) => item.id === selected) ?? menuItems[0],
    [selected]
  );

  return (
    <main className="h-screen bg-[#efefec] text-[#18251f]">
      <AnimatePresence mode="wait">
        {screen === "hero" ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={screenTransition}
            className="h-full"
          >
            <HeroLandingScreen onStart={() => setScreen("menu")} />
          </motion.div>
        ) : screen === "menu" ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={screenTransition}
            className="h-full"
          >
            <MenuLandingScreen
              items={menuItems}
              selected={selected}
              selectedItem={selectedItem}
              onSelect={setSelected}
              onBack={() => setScreen("hero")}
              onOpen={(id) => {
                if (id === "projects") setScreen("projects");
                if (id === "about") setScreen("about");
                if (id === "skills") setScreen("skills");
                if (id === "gallery") setScreen("gallery");
              }}
            />
          </motion.div>
        ) : screen === "projects" ? (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={screenTransition}
            className="h-full"
          >
            <ProjectsHandScreen
              onBack={() => setScreen("menu")}
              onOpenProject={(projectId) => {
                setActiveProjectId(projectId);
                setScreen("projectDetail");
              }}
            />
          </motion.div>
        ) : screen === "projectDetail" ? (
          <motion.div
            key="projectDetail"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={screenTransition}
            className="h-full"
          >
            <ProjectDetailScreen
              projectId={activeProjectId}
              onBack={() => setScreen("projects")}
            />
          </motion.div>
        ) : screen === "about" ? (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={screenTransition}
            className="h-full"
          >
            <AboutScreen onBack={() => setScreen("menu")} />
          </motion.div>
        ) : screen === "skills" ? (
          <motion.div
            key="skills"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={screenTransition}
            className="h-full"
          >
            <SkillsScreen onBack={() => setScreen("menu")} />
          </motion.div>
        ) : (
          <motion.div
            key="gallery"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={screenTransition}
            className="h-full"
          >
            <GalleryScreen onBack={() => setScreen("menu")} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}