"use client";

import React, { useState } from 'react';
import * as motion from 'motion/react-client';

export default function CreatorPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate push to Supabase / Sanity hook
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop min-h-screen bg-bg-primary flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl text-center bg-surface-variant p-12 rounded-[32px] border border-outline-variant shadow-pink"
        >
          <span className="material-symbols-outlined text-[64px] text-primary mb-6">workspace_premium</span>
          <h1 className="font-display-md text-4xl font-serif text-on-surface mb-4">Möge Nur mit dir sein.</h1>
          <p className="font-body-md text-text-secondary leading-relaxed">
            Vielen Dank für dein Interesse am Ambassador-Programm. Unser Team in Istanbul und Deutschland schaut sich dein Profil an und meldet sich in Kürze bei dir.
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop bg-bg-primary">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        
        {/* Visual / Manifesto Side */}
        <div className="lg:w-1/2 flex flex-col justify-center lg:sticky lg:top-[140px] lg:h-[calc(100vh-200px)]">
          <span className="font-label-md uppercase tracking-widest text-primary mb-6 block">Ambassador Program</span>
          <h1 className="font-display-lg text-5xl lg:text-7xl text-on-surface mb-6 font-serif">Werde Teil der Nur-Bewegung.</h1>
          <p className="font-body-lg text-text-secondary leading-relaxed mb-8 max-w-lg">
            Wir suchen nach leidenschaftlichen Creatorn auf TikTok und Instagram, die unsere Vision von "Accessible Luxury" und modernem Islamic Lifestyle in die Welt hinaustragen – ästhetisch, authentisch und voller Herz.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[24px] text-primary">redeem</span>
              <span className="font-body-md text-on-surface">Exklusive PR-Packages aus Istanbul</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[24px] text-primary">visibility</span>
              <span className="font-body-md text-on-surface">Pre-Access vor jedem Drop</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[24px] text-primary">group_add</span>
              <span className="font-body-md text-on-surface">Enge Zusammenarbeit mit unserem Design-Team</span>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="lg:w-1/2 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface p-8 md:p-12 rounded-[32px] border border-outline-variant shadow-lg"
          >
            <h2 className="font-headline-md text-2xl font-serif text-on-surface mb-8">Deine Bewerbung</h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-label-md text-text-secondary block mb-2 uppercase tracking-widest text-[10px]" htmlFor="firstName">Vorname</label>
                  <input id="firstName" required className="w-full bg-surface-variant/40 border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                </div>
                <div>
                  <label className="font-label-md text-text-secondary block mb-2 uppercase tracking-widest text-[10px]" htmlFor="lastName">Nachname</label>
                  <input id="lastName" required className="w-full bg-surface-variant/40 border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                </div>
              </div>

              <div>
                <label className="font-label-md text-text-secondary block mb-2 uppercase tracking-widest text-[10px]" htmlFor="email">E-Mail</label>
                <input id="email" type="email" required className="w-full bg-surface-variant/40 border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
              </div>

              <div>
                <label className="font-label-md text-text-secondary block mb-2 uppercase tracking-widest text-[10px]" htmlFor="socialHandle">TikTok / Instagram (inkl. @)</label>
                <input id="socialHandle" type="text" placeholder="@your.aesthetic.handle" required className="w-full bg-surface-variant/40 border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
              </div>

              <div>
                <label className="font-label-md text-text-secondary block mb-2 uppercase tracking-widest text-[10px]" htmlFor="followers">Ungefähre Reichweite</label>
                <select id="followers" className="w-full bg-surface-variant/40 border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none">
                  <option>1k - 5k Follower</option>
                  <option>5k - 20k Follower</option>
                  <option>20k - 100k Follower</option>
                  <option>100k+ Follower</option>
                </select>
              </div>

              <div>
                <label className="font-label-md text-text-secondary block mb-2 uppercase tracking-widest text-[10px]" htmlFor="why">Warum Nur?</label>
                <textarea 
                  id="why" 
                  rows={4} 
                  required 
                  placeholder="Erzähl uns, warum unsere Ästhetik und Werte zu dir passen..."
                  className="w-full bg-surface-variant/40 border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" 
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md uppercase tracking-widest hover:bg-on-surface transition-colors mt-2 flex justify-center items-center"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-t-transparent border-on-primary rounded-full animate-spin"></span>
                ) : (
                  "Als Creator bewerben"
                )}
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </main>
  );
}
