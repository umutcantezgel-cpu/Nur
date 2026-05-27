"use client";

import React from 'react';
import * as motion from 'motion/react-client';
import Link from 'next/link';

export default function LookbookPage() {
  const looks = [
    { id: 1, title: "Die Ramadan Kollektion", description: "Sanfte Farben und feine Stoffe für den besonderen Monat.", hotspotX: "30%", hotspotY: "50%", product: "Satin Koranhülle" },
    { id: 2, title: "Istanbul Nights", description: "Tiefe Blautöne inspiriert von den Nächten am Bosporus.", hotspotX: "65%", hotspotY: "40%", product: "Midnight Gebetsteppich" },
    { id: 3, title: "Elegance in Creme", description: "Minimalistisches Design, maximale Wirkung.", hotspotX: "50%", hotspotY: "70%", product: "Creme Tasbih" }
  ];

  return (
    <main className="flex-grow pt-[140px] bg-bg-primary">
      <div className="text-center mb-16 px-margin-mobile">
        <h1 className="font-display-lg text-4xl lg:text-6xl text-on-surface mb-6 font-serif">Lookbook</h1>
        <p className="font-body-md text-text-secondary max-w-2xl mx-auto">
          Inspirationen für dein Zuhause. Entdecke, wie du unsere handgefertigten Stücke harmonisch in dein Interior integrierst.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto pb-section-padding px-4 md:px-8 flex flex-col gap-8 md:gap-32">
        {looks.map((look, idx) => (
          <motion.div 
            key={look.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
          >
            <div className="w-full md:w-2/3 aspect-[4/3] md:aspect-[16/10] bg-surface-variant/50 rounded-[32px] overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center opacity-30 text-text-secondary/50">
                 <span className="material-symbols-outlined text-[64px]">image</span>
              </div>
              
              {/* Hotspot */}
              <motion.div 
                className="absolute w-8 h-8 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform group/hotspot z-20"
                style={{ left: look.hotspotX, top: look.hotspotY }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                
                {/* Tooltip */}
                <div className="absolute opacity-0 group-hover/hotspot:opacity-100 pointer-events-none transition-opacity bottom-full mb-3 left-1/2 -translate-x-1/2 bg-surface text-on-surface whitespace-nowrap px-4 py-2 rounded-xl font-label-md uppercase tracking-widest text-[10px] shadow-lg border border-outline-variant">
                  {look.product}
                </div>
              </motion.div>
            </div>
            
            <div className={`w-full md:w-1/3 flex flex-col justify-center ${idx % 2 === 1 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} text-center md:px-0 px-8`}>
              <span className="font-label-md text-primary uppercase tracking-widest mb-4">Edition 0{look.id}</span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mb-4 font-serif">{look.title}</h2>
              <p className="font-body-md text-text-secondary leading-relaxed mb-8">
                {look.description}
              </p>
              <Link href="/kollektionen" className="border-b-2 border-primary text-primary pb-1 font-label-md uppercase tracking-widest hover:text-on-surface hover:border-on-surface transition-colors inline-block w-fit">
                Kollektion entdecken
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
