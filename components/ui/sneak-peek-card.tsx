"use client";

import * as React from "react";
import * as motion from "motion/react-client";
import { useHoverSound } from "@/hooks/use-hover-sound";
import { useWishlist } from "@/contexts/wishlist-context";
import { BlurImagePlaceholder } from "@/components/ui/blur-image";

interface SneakPeekCardProps {
  peek: { id: string, title: string, subtitle: string, date: string };
  idx: number;
}

export function SneakPeekCard({ peek, idx }: SneakPeekCardProps) {
  const playHoverSound = useHoverSound();
  const { isInWishlist, toggleWishlist } = useWishlist();
  
  const isWished = isInWishlist(peek.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
      onMouseEnter={playHoverSound}
      className="group relative overflow-hidden rounded-[24px] aspect-[3/4] bg-surface-container-highest shadow-pink hover:shadow-pink-hover transition-all duration-300 flex items-center justify-center border border-outline-variant cursor-pointer"
    >
       <button
         onClick={(e) => {
           e.stopPropagation();
           e.preventDefault();
           toggleWishlist(peek.id, peek.title);
         }}
         aria-label={isWished ? "Von Wunschliste entfernen" : "Zur Wunschliste hinzufügen"}
         className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surface-container-lowest/20 backdrop-blur-md flex items-center justify-center text-surface-container-lowest hover:bg-surface-container-lowest/40 transition-colors border border-surface-container-lowest/20"
       >
         <motion.span 
           animate={isWished ? { scale: [1, 1.3, 1] } : { scale: 1 }}
           transition={{ type: "spring", stiffness: 300, damping: 15 }}
           className={`material-symbols-outlined text-[20px] ${isWished ? 'fill-current text-[#E8C5C9]' : ''}`} 
           style={isWished ? { fontVariationSettings: "'FILL' 1" } : {}}
         >
           favorite
         </motion.span>
       </button>
       
       <BlurImagePlaceholder seed={peek.id} />
       
       <div className="absolute inset-0 bg-gradient-to-t from-[#4A3F41]/90 via-[#4A3F41]/40 to-transparent relative z-10" />
       
       <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
          <h3 className="font-headline-md text-2xl text-[#FDFCFB] mb-2 font-serif group-hover:-translate-y-2 transition-transform duration-500">
            {peek.title}
          </h3>
          <p className="font-body-md text-[#E8DCC4] mb-6 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 delay-100">
            {peek.subtitle}
          </p>
          
          <div className="overflow-hidden">
            <p className="font-label-md uppercase tracking-widest text-[#E8DCC4] translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-200">
              {peek.date}
            </p>
          </div>
       </div>
    </motion.div>
  );
}
