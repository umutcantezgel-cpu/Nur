"use client";

import React, { useEffect, useState } from 'react';
import * as motion from 'motion/react-client';
import Link from 'next/link';

export default function SuccessPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: trigger mount animation
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-bg-primary flex flex-col pb-8">
      {/* Header */}
      <header className="py-6 px-margin-mobile md:px-margin-desktop border-b border-outline-variant/30 text-center relative bg-surface z-10 flex justify-center">
        <Link href="/" className="inline-block" aria-label="Zurück zur Startseite">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#4A3F41]">
             <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C24.1421 35 27.8954 33.3223 30.6066 30.6066L29.1924 29.1924C26.8492 31.5355 23.5786 33 20 33C12.8203 33 7 27.1797 7 20C7 12.8203 12.8203 7 20 7C23.5786 7 26.8492 8.46447 29.1924 10.8076L30.6066 9.3934C27.8954 6.67767 24.1421 5 20 5Z" fill="currentColor"/>
          </svg>
        </Link>
      </header>

      <div className="flex-grow flex items-center justify-center px-margin-mobile pt-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.95, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl w-full bg-surface-variant p-8 md:p-16 rounded-[32px] border border-outline-variant shadow-pink text-center"
        >
          <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
            <span className="material-symbols-outlined text-[40px] text-primary">check_circle</span>
          </div>
          
          <h1 className="font-display-md text-3xl md:text-4xl text-on-surface mb-4 font-serif">Vielen Dank für deine Bestellung</h1>
          
          <p className="font-body-md text-text-secondary mb-2">Deine Bestellnummer: <span className="font-medium text-on-surface">#NUR-987654</span></p>
          <p className="font-body-md text-text-secondary mb-10">Wir haben dir soeben eine Bestätigung per E-Mail gesendet. Dein Unikat wird in Kürze in unserer Manufaktur für dich gefertigt.</p>

          <div className="bg-surface p-8 rounded-2xl border border-outline-variant mb-8 flex flex-col items-center">
            <span className="material-symbols-outlined text-3xl mb-4 text-[#FDFCFB]/80" style={{background: "linear-gradient(45deg, #000000, #4A3F41)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
              play_circle
            </span>
            <h3 className="font-headline-md font-serif text-xl mb-2">Begleite uns auf TikTok</h3>
            <p className="font-body-sm text-text-secondary mb-6 max-w-[250px]">
              Wirf einen Blick hinter die Kulissen unserer Istanbuler Manufaktur und erlebe, wie dein Produkt entsteht.
            </p>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="bg-on-surface text-surface-container-lowest py-3 px-8 rounded-full font-label-md uppercase tracking-widest hover:bg-on-surface/90 transition-colors w-full md:w-auto inline-block">
              @nur.welt folgen
            </a>
          </div>

          <Link href="/" className="font-label-md text-primary uppercase tracking-widest border-b border-primary pb-1 hover:text-on-surface hover:border-on-surface transition-colors">
            Zurück zur Startseite
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
