"use client";

import { useRef } from "react";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // 1 is normal, < 1 is slower (background), > 1 is faster (foreground)
}

export function ParallaxSection({ children, className = "", speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track scroll position relative to this element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calculate parallax offset based on speed
  // If speed is 0.5, the element will move half as fast as normal scroll
  const yOffset = useTransform(scrollYProgress, [0, 1], ["0%", `${(1 - speed) * 50}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y: yOffset }} className="w-full h-full absolute inset-0">
        {children}
      </motion.div>
    </div>
  );
}

export function ParallaxElement({ children, className = "", offset = 100 }: { children: React.ReactNode, className?: string, offset?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Move element vertically from offset to -offset as it scrolls through viewport
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
