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
    <main className="relative min-h-screen overflow-x-hidden bg-[#efefec] text-[#18251f]">
      <AnimatePresence mode="wait" initial={false}>
        {screen === "hero" ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={screenTransition}
            className="absolute inset-0 overflow-hidden"
          >
            <HeroLandingScreen onStart={() => setScreen("menu")} />
          </motion.div>
        ) : screen === "menu" ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={screenTransition}
            className="absolute inset-0 overflow-hidden"
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
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={screenTransition}
            className="absolute inset-0 overflow-hidden"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={screenTransition}
            className="absolute inset-0"
          >
            <div className="h-full overflow-y-auto overscroll-contain">
              <ProjectDetailScreen
                projectId={activeProjectId}
                onBack={() => setScreen("projects")}
              />
            </div>
          </motion.div>
        ) : screen === "about" ? (
          <motion.div
            key="about"
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={screenTransition}
            className="absolute inset-0 overflow-hidden"
          >
            <AboutScreen onBack={() => setScreen("menu")} />
          </motion.div>
        ) : screen === "skills" ? (
          <motion.div
            key="skills"
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={screenTransition}
            className="absolute inset-0 overflow-hidden"
          >
            <SkillsScreen onBack={() => setScreen("menu")} />
          </motion.div>
        ) : (
          <motion.div
            key="gallery"
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={screenTransition}
            className="absolute inset-0 overflow-y-auto overflow-x-hidden"
          >
            <GalleryScreen onBack={() => setScreen("menu")} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}