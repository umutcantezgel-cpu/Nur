"use client";

import { motion, AnimatePresence } from "motion/react";
import * as React from "react";

const PARTICLE_POSITIONS = [
  { x: -18, y: -25 },
  { x: 22, y: -12 },
  { x: -8, y: 28 },
  { x: 15, y: 20 },
  { x: -27, y: 5 },
  { x: 10, y: -22 },
];

export function SuccessGlow() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 pointer-events-none rounded-full"
        style={{
          boxShadow: "0 0 20px 5px rgba(232, 220, 196, 0.4)",
        }}
      >
        {PARTICLE_POSITIONS.map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: 0,
              scale: 1.5,
              x: pos.x,
              y: pos.y,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 w-2 h-2 bg-[#FDFCFB] rounded-full"
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
