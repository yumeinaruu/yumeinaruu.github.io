"use client";

import { motion } from "framer-motion";

export function AnimatedGradientBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.2 250) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -25, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.2 300) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{
          x: [0, 25, -30, 0],
          y: [0, -35, 15, 0],
          scale: [1, 1.05, 0.97, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-1/4 left-1/3 h-[450px] w-[450px] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.18 200) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
