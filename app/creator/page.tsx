"use client";

import React, { useState } from 'react';
import * as motion from 'motion/react-client';
import { ScrollReveal, TextMask } from '@/components/ui/scroll-reveal';
import { ParallaxSection } from '@/components/ui/parallax-section';

export default function CreatorPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [confetti, setConfetti] = useState<Array<{x: string, rotate: number, duration: number, delay: number}>>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setConfetti([...Array(20)].map(() => ({
        x: `${Math.random() * 100}vw`,
        rotate: Math.random() * 360,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 0.5
      })));
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop min-h-screen bg-bg-primary flex items-center justify-center relative overflow-hidden">
        {/* Confetti / Success Physics effect */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
           {confetti.map((props, i) => (
             <motion.div
               key={i}
               initial={{ y: "100vh", x: props.x, rotate: 0, opacity: 1 }}
               animate={{ y: "-10vh", rotate: props.rotate, opacity: 0 }}
               transition={{ duration: props.duration, ease: "easeOut", delay: props.delay }}
               className="absolute w-4 h-4 bg-primary/20 rounded-sm"
             />
           ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl text-center bg-surface-variant p-12 rounded-[32px] border border-outline-variant shadow-pink relative z-10"
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
    <main className="flex-grow pt-20 bg-bg-primary overflow-hidden">
      
      {/* Cinematic Hero for Creators */}
      <section className="min-h-[70vh] flex flex-col justify-center relative px-margin-mobile md:px-margin-desktop text-center">
        {/* Floating background elements for gamified feel */}
        <ParallaxSection speed={1.5} className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-[20%] left-[10%] w-32 h-32 border border-primary rounded-full" />
          <div className="absolute bottom-[20%] right-[15%] w-48 h-48 border border-[#E8DCC4] rotate-45" />
        </ParallaxSection>

        <div className="relative z-10 max-w-4xl mx-auto">
          <ScrollReveal direction="down">
            <span className="font-label-md uppercase tracking-widest text-primary mb-6 block">Ambassador Program</span>
          </ScrollReveal>
          <h1 className="font-display-lg text-6xl md:text-8xl text-on-surface mb-8 font-serif leading-tight">
            <TextMask>Werde das Gesicht</TextMask>
            <TextMask delay={0.2} className="italic text-text-secondary">unserer Bewegung.</TextMask>
          </h1>
          <ScrollReveal delay={0.4} direction="up">
            <p className="font-body-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Wir suchen nach leidenschaftlichen Creatorn auf TikTok und Instagram, die unsere Vision von "Accessible Luxury" und modernem Islamic Lifestyle in die Welt hinaustragen – ästhetisch, authentisch und voller Herz.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-surface relative z-20 border-t border-surface-variant shadow-[0_-20px_50px_rgba(0,0,0,0.3)] rounded-t-[60px] md:rounded-t-[100px]">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 px-margin-mobile md:px-margin-desktop">
          
          {/* Visual / Manifesto Side */}
          <div className="lg:w-1/2 flex flex-col justify-center lg:sticky lg:top-[140px] lg:h-[calc(100vh-200px)]">
            <ScrollReveal direction="left">
              <h2 className="font-headline-lg text-4xl lg:text-5xl text-on-surface mb-12 font-serif">Was dich erwartet</h2>
              <div className="flex flex-col gap-8">
                <motion.div whileHover={{ scale: 1.02, x: 10 }} className="flex items-center gap-6 p-6 rounded-3xl bg-surface-variant border border-outline-variant shadow-lg cursor-default transition-all">
                  <span className="material-symbols-outlined text-[32px] text-primary bg-bg-primary p-4 rounded-full">redeem</span>
                  <span className="font-body-lg text-on-surface text-xl">Exklusive PR-Packages direkt aus Istanbul</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02, x: 10 }} className="flex items-center gap-6 p-6 rounded-3xl bg-surface-variant border border-outline-variant shadow-lg cursor-default transition-all">
                  <span className="material-symbols-outlined text-[32px] text-primary bg-bg-primary p-4 rounded-full">visibility</span>
                  <span className="font-body-lg text-on-surface text-xl">Pre-Access vor jedem neuen Drop</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02, x: 10 }} className="flex items-center gap-6 p-6 rounded-3xl bg-surface-variant border border-outline-variant shadow-lg cursor-default transition-all">
                  <span className="material-symbols-outlined text-[32px] text-primary bg-bg-primary p-4 rounded-full">group_add</span>
                  <span className="font-body-lg text-on-surface text-xl">Enge Zusammenarbeit mit unserem Design-Team</span>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2 relative z-10 py-12">
            <ScrollReveal direction="up" delay={0.3}>
              <div className="bg-bg-primary p-8 md:p-12 rounded-[40px] border border-outline-variant shadow-2xl relative overflow-hidden">
                {/* Subtle glow inside the form */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
                
                <h2 className="font-headline-md text-3xl font-serif text-on-surface mb-8 relative z-10">Deine Bewerbung</h2>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-label-md text-text-secondary block mb-2 uppercase tracking-widest text-[10px]" htmlFor="firstName">Vorname</label>
                      <input id="firstName" required className="w-full bg-surface-variant/40 border border-outline-variant rounded-xl px-4 py-4 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all hover:bg-surface-variant/80" />
                    </div>
                    <div>
                      <label className="font-label-md text-text-secondary block mb-2 uppercase tracking-widest text-[10px]" htmlFor="lastName">Nachname</label>
                      <input id="lastName" required className="w-full bg-surface-variant/40 border border-outline-variant rounded-xl px-4 py-4 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all hover:bg-surface-variant/80" />
                    </div>
                  </div>

                  <div>
                    <label className="font-label-md text-text-secondary block mb-2 uppercase tracking-widest text-[10px]" htmlFor="email">E-Mail</label>
                    <input id="email" type="email" required className="w-full bg-surface-variant/40 border border-outline-variant rounded-xl px-4 py-4 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all hover:bg-surface-variant/80" />
                  </div>

                  <div>
                    <label className="font-label-md text-text-secondary block mb-2 uppercase tracking-widest text-[10px]" htmlFor="socialHandle">TikTok / Instagram (inkl. @)</label>
                    <input id="socialHandle" type="text" placeholder="@your.aesthetic.handle" required className="w-full bg-surface-variant/40 border border-outline-variant rounded-xl px-4 py-4 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all hover:bg-surface-variant/80" />
                  </div>

                  <div>
                    <label className="font-label-md text-text-secondary block mb-2 uppercase tracking-widest text-[10px]" htmlFor="followers">Ungefähre Reichweite</label>
                    <select id="followers" className="w-full bg-surface-variant/40 border border-outline-variant rounded-xl px-4 py-4 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer hover:bg-surface-variant/80">
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
                      rows={5} 
                      required 
                      placeholder="Erzähl uns, warum unsere Ästhetik und Werte zu dir passen..."
                      className="w-full bg-surface-variant/40 border border-outline-variant rounded-xl px-4 py-4 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none hover:bg-surface-variant/80" 
                    />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-on-primary py-5 rounded-xl font-label-md uppercase tracking-widest transition-colors mt-4 flex justify-center items-center shadow-pink"
                  >
                    {isSubmitting ? (
                      <span className="w-6 h-6 border-2 border-t-transparent border-on-primary rounded-full animate-spin"></span>
                    ) : (
                      "Als Creator bewerben"
                    )}
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </main>
  );
}
