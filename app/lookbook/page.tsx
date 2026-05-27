"use client";

import React, { useRef } from 'react';
import * as motion from 'motion/react-client';
import Link from 'next/link';
import { BlurImagePlaceholder } from '@/components/ui/blur-image';
import { ScrollReveal, TextMask } from '@/components/ui/scroll-reveal';

const DRAG_ITEMS = [
  { id: 1, title: "Ramadan Nights", top: "10%", left: "20%", width: "400px", height: "500px", zIndex: 10, product: "Midnight Satin" },
  { id: 2, title: "Ihsan", top: "30%", left: "50%", width: "500px", height: "350px", zIndex: 12, product: "Creme Tasbih" },
  { id: 3, title: "The Atelier", top: "60%", left: "15%", width: "450px", height: "600px", zIndex: 8, product: "Premium Kartonage" },
  { id: 4, title: "Sabr", top: "15%", left: "75%", width: "350px", height: "450px", zIndex: 15, product: "Samt Hülle" },
  { id: 5, title: "Heritage", top: "50%", left: "80%", width: "600px", height: "400px", zIndex: 5, product: "Gebetsteppich" },
  { id: 6, title: "Light", top: "80%", left: "55%", width: "400px", height: "400px", zIndex: 20, product: "Signature Box" },
];

export default function LookbookPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex-grow bg-bg-primary overflow-hidden flex flex-col h-screen">
      
      {/* Header Overlay (fixed) */}
      <div className="absolute top-0 left-0 w-full p-8 pt-[140px] z-50 pointer-events-none flex flex-col md:flex-row justify-between items-start md:items-center px-margin-mobile md:px-margin-desktop">
        <div>
          <h1 className="font-display-lg text-5xl md:text-7xl text-on-surface font-serif leading-none drop-shadow-lg">
            The Archive
          </h1>
          <p className="font-body-md text-text-secondary max-w-sm mt-4 backdrop-blur-sm bg-bg-primary/30 p-2 rounded-lg">
            Eine interaktive Galerie unserer Ästhetik. Ziehe (drag) die Bilder, um die Leinwand zu erkunden. Klicke auf die Hotspots für Produktdetails.
          </p>
        </div>
        
        <div className="hidden md:flex items-center gap-4 animate-pulse">
           <span className="material-symbols-outlined text-primary text-3xl">swipe</span>
           <span className="font-label-md uppercase tracking-widest text-primary text-xs">Drag to Explore</span>
        </div>
      </div>

      {/* Drag Canvas */}
      <div className="relative flex-grow w-full h-full overflow-hidden cursor-grab active:cursor-grabbing bg-surface-variant">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#E8DCC4 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <motion.div 
          ref={containerRef}
          drag
          dragConstraints={{ top: -1000, left: -1500, right: 1000, bottom: 1000 }}
          dragElastic={0.2}
          className="absolute top-1/2 left-1/2 w-[3000px] h-[2000px] -translate-x-1/2 -translate-y-1/2"
        >
          {DRAG_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              className="absolute group"
              style={{
                top: item.top,
                left: item.left,
                width: item.width,
                height: item.height,
                zIndex: item.zIndex,
              }}
              whileHover={{ scale: 1.02, zIndex: 50 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
            >
              <div className="w-full h-full rounded-[32px] overflow-hidden shadow-2xl relative">
                <BlurImagePlaceholder seed={`lookbook-${item.id}`} icon="image" />
                
                {/* Hotspot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform group/hotspot"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                    
                    {/* Tooltip */}
                    <div className="absolute opacity-0 group-hover/hotspot:opacity-100 pointer-events-none transition-opacity top-full mt-4 left-1/2 -translate-x-1/2 bg-surface text-on-surface whitespace-nowrap px-6 py-3 rounded-xl shadow-2xl border border-outline-variant flex flex-col items-center gap-2">
                      <span className="font-serif text-lg">{item.title}</span>
                      <span className="font-label-md uppercase tracking-widest text-primary text-[10px]">{item.product}</span>
                      <Link href="/kollektionen" className="mt-2 text-[10px] underline uppercase tracking-widest text-text-secondary hover:text-primary pointer-events-auto">Shop Now</Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </main>
  );
}
