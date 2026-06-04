"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { motion, useSpring } from "framer-motion";

export function ProgressBar() {
  const progress = useScrollProgress();
  const scaleX = useSpring(progress / 100, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-ns-violet to-ns-fuchsia origin-left z-50"
      style={{ scaleX }}
    />
  );
}
