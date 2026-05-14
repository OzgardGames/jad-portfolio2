"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const screenTransition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1] as const,
};

type Props = {
  children: ReactNode;
};

export default function RouteFade({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={screenTransition}
      className="absolute inset-0 overflow-y-auto overflow-x-hidden"
    >
      {children}
    </motion.div>
  );
}