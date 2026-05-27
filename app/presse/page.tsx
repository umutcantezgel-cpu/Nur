"use client";

import React, { useRef } from 'react';
import * as motion from 'motion/react-client';
import { useScroll, useTransform } from 'motion/react';
import { ScrollReveal, TextMask } from '@/components/ui/scroll-reveal';
import { BlurImagePlaceholder } from '@/components/ui/blur-image';

export default function PressePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const assets = [
    { title: "Logo (Weißer Halbmond)", type: "PNG / SVG", size: "2.4 MB" },
    { title: "Produkt-Freisteller", type: "ZIP Archiv", size: "45.1 MB" },
    { title: "Atelier Istanbul", type: "Hi-Res JPGs", size: "112.0 MB" },
    { title: "Brand Guidelines", type: "PDF", size: "5.8 MB" }
  ];

  return (
    <main className="pt-32 pb-section-padding px-margin-mobile md:px-margin-desktop bg-bg-primary min-h-screen overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[80vh]" ref={containerRef}>
        
        {/* Story & Downloads Side */}
        <div className="flex flex-col gap-12 relative z-10">
           <ScrollReveal direction="down">
             <span className="font-label-md uppercase tracking-widest text-primary mb-2 block">Media Center</span>
           </ScrollReveal>
           
           <h1 className="font-display-lg text-5xl md:text-7xl text-on-surface font-serif leading-none">
             <TextMask>Die Geschichte</TextMask>
             <TextMask delay={0.2} className="italic text-text-secondary">hinter Nur.</TextMask>
           </h1>
           
           <ScrollReveal delay={0.4} direction="up">
             <div className="prose prose-nur max-w-none text-text-secondary font-body-lg leading-relaxed">
               <p>
                 Gegründet aus der Sehnsucht heraus, Spiritualität mit modernem Minimalismus zu vereinen, bringt Nur hochwertigen Islamic Lifestyle in die europäischen Wohnzimmer. 
               </p>
               <p>
                 Unter dem Claim <strong>"Accessible Luxury"</strong> schließen wir die Lücke zwischen massenproduzierter Ware und unbezahlbaren Designerstücken. Jedes Produkt entsteht in enger Zusammenarbeit mit einer traditionsreichen Manufaktur in Istanbul.
               </p>
             </div>
           </ScrollReveal>
           
           <ScrollReveal delay={0.6} direction="up">
             <div className="bg-surface-variant p-8 md:p-10 rounded-[32px] border border-outline-variant shadow-pink relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <h2 className="font-headline-md text-2xl font-serif text-on-surface mb-8 relative z-10">The Press Kit</h2>
               
               <div className="flex flex-col gap-4 relative z-10">
                 {assets.map((asset, idx) => (
                   <motion.div 
                     key={idx}
                     whileHover={{ x: 10, backgroundColor: "var(--color-surface)" }}
                     className="bg-surface/50 p-4 rounded-2xl border border-outline-variant flex items-center justify-between cursor-pointer transition-colors"
                   >
                     <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-bg-primary rounded-xl flex items-center justify-center text-primary shrink-0 border border-outline-variant shadow-sm">
                         <span className="material-symbols-outlined text-[20px]">download</span>
                       </div>
                       <div>
                         <h3 className="font-label-md font-medium text-on-surface mb-1 -mt-0.5">{asset.title}</h3>
                         <div className="flex items-center gap-2">
                            <span className="font-label-sm uppercase tracking-widest text-[10px] text-text-secondary">{asset.type}</span>
                            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                            <span className="font-label-sm uppercase tracking-widest text-[10px] text-text-secondary">{asset.size}</span>
                         </div>
                       </div>
                     </div>
                   </motion.div>
                 ))}
               </div>
             </div>
           </ScrollReveal>
        </div>

        {/* 3D Mockup Side */}
        <div className="relative h-full min-h-[600px] flex items-center justify-center lg:justify-end perspective-[1000px]">
          {/* Glowing orb behind mockup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          
          <motion.div 
            style={{ rotateX, rotateY, y, transformStyle: 'preserve-3d' }}
            className="w-full max-w-[500px] aspect-[4/5] relative"
          >
            {/* 3D Box Simulation */}
            <div className="absolute inset-0 bg-[#2A2425] rounded-[40px] shadow-2xl border border-[#4A3F41] overflow-hidden transform-style-3d">
              <BlurImagePlaceholder seed="press-kit-mockup" icon="auto_awesome_mosaic" />
              <div className="absolute inset-0 bg-gradient-to-tr from-bg-primary/60 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 translate-z-12">
                <span className="material-symbols-outlined text-[80px] text-primary mb-6 opacity-80">menu_book</span>
                <h3 className="font-serif text-4xl text-[#E8DCC4] mb-2 drop-shadow-xl">Brand Book</h3>
                <p className="font-label-md uppercase tracking-widest text-[#E8DCC4]/70 text-xs">Volume 01</p>
              </div>
            </div>
            
            {/* Floating Elements in 3D Space */}
            <motion.div 
              style={{ translateZ: 100 }}
              className="absolute -bottom-10 -left-10 bg-surface p-6 rounded-3xl shadow-2xl border border-outline-variant flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                 <span className="material-symbols-outlined text-on-primary">palette</span>
              </div>
              <div>
                <p className="font-label-md uppercase tracking-widest text-text-secondary text-[10px] mb-1">Color Palette</p>
                <p className="font-serif text-on-surface">#E8DCC4</p>
              </div>
            </motion.div>
            
          </motion.div>
        </div>

      </div>
    </main>
  );
}
