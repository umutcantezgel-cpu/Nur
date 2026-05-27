"use client";

import { useRef } from "react";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 50,
  duration = 0.8,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  const directionOffset = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{
          opacity: 0,
          ...directionOffset[direction],
        }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : directionOffset[direction].x,
          y: isInView ? 0 : directionOffset[direction].y,
        }}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.21, 0.47, 0.32, 0.98], // Custom ease-out cubic
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Special wrapper for Text Masking (Cinematic typography reveal)
export function TextMask({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <span ref={ref} className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "100%" }}
        animate={{ y: isInView ? "0%" : "100%" }}
        transition={{
          duration: 1.0,
          delay: delay,
          ease: [0.16, 1, 0.3, 1], // expo-out
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
