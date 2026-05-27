"use client";

import React, { useState } from 'react';
import * as motion from 'motion/react-client';
import Link from 'next/link';

export default function GeschenkeRatgeberPage() {
  const guides = [
    {
      id: "nikah",
      title: "Geschenke zur Nikah",
      description: "Edle Präsente für das Brautpaar. Personalisiert, zeitlos und symbolisch.",
      icon: "diversity_2"
    },
    {
      id: "ramadan",
      title: "Eid & Ramadan",
      description: "Eine spirituelle Vorbereitung. Handgefertigte Decor-Pieces für die friedlichsten Monate.",
      icon: "bedtime"
    },
    {
      id: "familie",
      title: "Für die Familie",
      description: "Kleine Aufmerksamkeiten, die von Herzen kommen. Stilvoll verpackt.",
      icon: "home_health"
    }
  ];

  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop bg-bg-primary min-h-[70vh]">
      
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h1 className="font-display-lg text-4xl lg:text-6xl text-on-surface mb-6 font-serif">Geschenke-Ratgeber</h1>
        <p className="font-body-lg text-text-secondary">
          Entdecke liebevoll kuratierte Ideen für jeden Anlass. Da unsere Kollektionen noch in der Fertigung sind, laden wir dich ein, dich direkt auf die exklusiven Listen setzen zu lassen. Du erfährst als Erste:r, sobald die Geschenke verfügbar sind.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col gap-24">
        {guides.map((guide, idx) => (
          <motion.div 
            key={guide.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch gap-12 lg:gap-20`}
          >
            {/* Visual Side */}
            <div className="w-full lg:w-1/2 min-h-[500px] rounded-[32px] bg-surface-variant flex items-center justify-center p-8 relative overflow-hidden group">
               <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-primary to-transparent pointer-events-none"></div>
               <span className="material-symbols-outlined text-[120px] text-primary/40 group-hover:scale-110 transition-transform duration-700 ease-out">{guide.icon}</span>
            </div>

            {/* Form Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
               <div className="flex items-center gap-4 mb-4">
                 <span className="material-symbols-outlined text-primary">{guide.icon}</span>
                 <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface font-serif">{guide.title}</h2>
               </div>
               <p className="font-body-md text-text-secondary leading-relaxed mb-10">
                 {guide.description}
               </p>

               <div className="bg-surface p-8 lg:p-10 rounded-[24px] border border-outline-variant shadow-pink relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                   <span className="material-symbols-outlined text-[64px]">mail</span>
                 </div>
                 
                 <h3 className="font-headline-md text-xl mb-6 relative z-10 font-serif">Lass dich für den Launch dieser Kategorie auf die VIP-Liste setzen:</h3>
                 
                 <form className="flex flex-col gap-4 relative z-10" onSubmit={(e) => {
                   e.preventDefault();
                   // Waitlist Logic goes here
                 }}>
                   <input 
                     type="email" 
                     placeholder="Deine E-Mail Adresse" 
                     required
                     className="bg-transparent border-b-2 border-outline-variant py-3 px-0 font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-text-secondary/50 w-full mb-4"
                   />
                   <button type="submit" className="bg-primary text-on-primary py-4 px-8 rounded-xl font-label-md uppercase tracking-widest hover:bg-on-surface transition-colors">
                     Auf die Liste
                   </button>
                 </form>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
