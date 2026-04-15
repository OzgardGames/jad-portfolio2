"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectsScreen from "./screens/ProjectsScreen";

export default function GameMenu() {
  const [screen, setScreen] = useState<"menu" | "projects">("menu");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items = [
    { label: "Projects", action: () => setScreen("projects") },
    { label: "About / Contact", action: () => {} },
    { label: "Skills", action: () => {} },
    { label: "Gallery", action: () => {} },
  ];

  // 🎮 Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (screen !== "menu") return;

      if (e.key === "ArrowDown" || e.key === "s") {
        setSelectedIndex((prev) => (prev + 1) % items.length);
      }

      if (e.key === "ArrowUp" || e.key === "w") {
        setSelectedIndex((prev) =>
          prev === 0 ? items.length - 1 : prev - 1
        );
      }

      if (e.key === "Enter") {
        items[selectedIndex].action();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, screen]);

  // Navigate to Projects screen
  if (screen === "projects") {
    return <ProjectsScreen onBack={() => setScreen("menu")} />;
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center bg-black">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a,black)] opacity-80" />

      <div className="relative w-full max-w-4xl">
        
        <h2 className="mb-10 text-center text-4xl font-bold uppercase tracking-widest text-[#d85b19]">
          Menu
        </h2>

        <div className="flex flex-col gap-4">
          {items.map((item, index) => {
            const isSelected = index === selectedIndex;

            return (
              <motion.button
                key={item.label}
                onClick={item.action}
                onMouseEnter={() => setSelectedIndex(index)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative w-full px-8 py-6 text-left text-xl uppercase tracking-wide transition-all duration-200 ${
                  isSelected
                    ? "bg-[#d85b19] text-white"
                    : "border border-white/20 hover:border-white hover:bg-white/5"
                }`}
              >
                {/* Selection bar */}
                {isSelected && (
                  <div className="absolute left-0 top-0 h-full w-2 bg-white" />
                )}

                {item.label}
              </motion.button>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Use ↑ ↓ or W/S + Enter
        </p>
      </div>
    </div>
  );
}