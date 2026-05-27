"use client";

import React, { useRef } from "react";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";

interface StickyScrollProps {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  backgrounds: React.ReactNode[];
}

export function StickyScroll({ content, backgrounds }: StickyScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cardsLength = content.length;
  // Determine which card is currently active based on scroll progress
  const activeIndex = useTransform(scrollYProgress, (latest) => {
    const rawIndex = Math.floor(latest * cardsLength);
    return Math.min(rawIndex, cardsLength - 1);
  });

  // Smooth progress across the entire container
  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div
      ref={containerRef}
      className="relative h-[400vh] w-full"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          {backgrounds.map((bg, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(activeIndex, (current) => (current === index ? 1 : 0));
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const scale = useTransform(scrollYProgress, [index / cardsLength, (index + 1) / cardsLength], [1, 1.05]);
            
            return (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
                style={{ opacity, scale }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {bg}
              </motion.div>
            );
          })}
          {/* Subtle vignette / overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        {/* Foreground Content Layer */}
        <div className="relative z-20 max-w-container-max w-full px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* Scroll Progress Bar */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-white/20 hidden lg:block rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-primary"
              style={{ height: useTransform(progress, p => `${p}%`) }}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-24 py-[30vh]">
            {content.map((item, index) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(
                scrollYProgress,
                [(index - 0.5) / cardsLength, index / cardsLength, (index + 0.5) / cardsLength],
                [0.2, 1, 0.2]
              );
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const y = useTransform(
                scrollYProgress,
                [(index - 0.5) / cardsLength, index / cardsLength, (index + 0.5) / cardsLength],
                [50, 0, -50]
              );

              return (
                <motion.div
                  key={index}
                  className="relative min-h-[40vh] flex flex-col justify-center"
                  style={{ opacity, y }}
                >
                  <h3 className="font-headline-lg text-4xl md:text-5xl lg:text-6xl text-white font-serif mb-6 leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-body-lg text-white/80 leading-relaxed text-lg max-w-md">
                    {item.description}
                  </p>
                  {item.content && <div className="mt-8">{item.content}</div>}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
