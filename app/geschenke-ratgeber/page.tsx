"use client";

import React, { useState } from 'react';
import * as motion from 'motion/react-client';
import { ScrollReveal, TextMask } from '@/components/ui/scroll-reveal';
import { BlurImagePlaceholder } from '@/components/ui/blur-image';
import Link from 'next/link';
import { ParallaxSection } from '@/components/ui/parallax-section';

const QUESTIONS = [
  {
    id: 'occasion',
    title: 'Für welchen Anlass suchst du?',
    options: [
      { id: 'nikah', label: 'Zur Nikah (Hochzeit)', icon: 'diversity_2' },
      { id: 'ramadan', label: 'Eid & Ramadan', icon: 'bedtime' },
      { id: 'family', label: 'Familie & Freunde', icon: 'home_health' },
      { id: 'self', label: 'Für mich selbst', icon: 'self_improvement' }
    ]
  },
  {
    id: 'budget',
    title: 'Welches Budget hast du dir vorgestellt?',
    options: [
      { id: 'small', label: 'Bis 30€ (Kleine Freude)', icon: 'wallet' },
      { id: 'medium', label: '30€ - 60€ (Accessible Luxury)', icon: 'redeem' },
      { id: 'large', label: '60€+ (Das besondere Etwas)', icon: 'diamond' }
    ]
  }
];

const RESULTS = {
  default: {
    title: "Signature Koranhülle aus Samt",
    description: "Der Klassiker. Perfekt für jeden Anlass, verpackt in unserer exklusiven Premium-Kartonage. Ein Geschenk, das ein Leben lang hält.",
    price: "45,00 €",
    imageSeed: "koran-velvet"
  },
  nikah: {
    title: "Das Paar-Set",
    description: "Zwei farblich abgestimmte Gebetsteppiche aus Istanbul. Das perfekte Geschenk für den gemeinsamen Start ins Leben.",
    price: "89,00 €",
    imageSeed: "nikah-set"
  },
  ramadan: {
    title: "Ramadan Starter Kit",
    description: "Eine edle Tasbih aus Naturstein und ein handgefertigter Gebetsteppich. Um den spirituellen Monat gebührend zu empfangen.",
    price: "55,00 €",
    imageSeed: "ramadan-kit"
  }
};

export default function GeschenkeRatgeberPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleSelect = (questionId: string, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
    
    if (step < QUESTIONS.length - 1) {
      setTimeout(() => setStep(step + 1), 400);
    } else {
      setIsCalculating(true);
      setTimeout(() => {
        setIsCalculating(false);
        setStep(step + 1); // Go to results
      }, 1500);
    }
  };

  const currentResult = answers.occasion === 'nikah' ? RESULTS.nikah : answers.occasion === 'ramadan' ? RESULTS.ramadan : RESULTS.default;

  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop bg-bg-primary min-h-screen relative overflow-hidden flex flex-col justify-center">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <motion.div 
           className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"
           animate={{ 
             x: step === 0 ? 0 : step === 1 ? '50vw' : '25vw',
             scale: step === 2 ? 1.5 : 1
           }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
         />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {step < QUESTIONS.length && (
          <div className="text-center mb-16">
            <ScrollReveal direction="down">
              <span className="font-label-md uppercase tracking-widest text-primary mb-4 block">Geschenk-Finder</span>
            </ScrollReveal>
            <div className="flex justify-center gap-2 mb-12">
              {QUESTIONS.map((_, i) => (
                <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i <= step ? 'w-12 bg-primary' : 'w-4 bg-surface-variant'}`} />
              ))}
            </div>
          </div>
        )}

        <div className="relative min-h-[400px]">
          {/* Questions */}
          {QUESTIONS.map((q, i) => (
            <motion.div
              key={q.id}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 100, pointerEvents: 'none' }}
              animate={{ 
                opacity: step === i ? 1 : 0, 
                x: step === i ? 0 : step > i ? -100 : 100,
                pointerEvents: step === i && !isCalculating ? 'auto' : 'none'
              }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <h2 className="font-display-md text-4xl md:text-5xl text-on-surface font-serif text-center mb-12">{q.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {q.options.map(opt => (
                  <motion.button
                    key={opt.id}
                    whileHover={{ scale: 1.02, backgroundColor: "var(--color-surface)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelect(q.id, opt.id)}
                    className={`flex items-center gap-6 p-8 rounded-3xl border transition-all ${answers[q.id] === opt.id ? 'bg-surface border-primary shadow-pink' : 'bg-surface-variant/50 border-outline-variant hover:border-primary/50'}`}
                  >
                    <span className={`material-symbols-outlined text-[32px] ${answers[q.id] === opt.id ? 'text-primary' : 'text-text-secondary'}`}>{opt.icon}</span>
                    <span className={`font-serif text-xl ${answers[q.id] === opt.id ? 'text-on-surface' : 'text-text-secondary'}`}>{opt.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Calculating State */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, pointerEvents: 'none' }}
            animate={{ opacity: isCalculating ? 1 : 0 }}
          >
            <div className="w-16 h-16 border-2 border-primary border-t-transparent rounded-full animate-spin mb-8" />
            <h3 className="font-serif text-2xl text-on-surface">Kuratieren deiner Auswahl...</h3>
            <p className="font-label-md uppercase tracking-widest text-text-secondary text-xs mt-4">Analysiere Ästhetik & Budget</p>
          </motion.div>

          {/* Result State */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.9, pointerEvents: 'none' }}
            animate={{ 
              opacity: step === QUESTIONS.length && !isCalculating ? 1 : 0,
              scale: step === QUESTIONS.length && !isCalculating ? 1 : 0.9,
              pointerEvents: step === QUESTIONS.length && !isCalculating ? 'auto' : 'none'
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-surface p-8 md:p-12 rounded-[40px] border border-primary/30 shadow-[0_0_50px_rgba(232,220,196,0.15)] flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 aspect-square rounded-[32px] overflow-hidden relative">
                <BlurImagePlaceholder seed={currentResult.imageSeed} icon="redeem" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 to-transparent" />
                <div className="absolute bottom-6 left-6 bg-surface/80 backdrop-blur-md px-4 py-2 rounded-full">
                  <span className="font-label-md uppercase tracking-widest text-primary text-[10px]">Perfect Match</span>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">workspace_premium</span>
                <h2 className="font-display-md text-4xl text-on-surface font-serif mb-4">{currentResult.title}</h2>
                <p className="font-body-md text-text-secondary leading-relaxed mb-8">
                  {currentResult.description}
                </p>
                <div className="font-serif text-2xl text-on-surface mb-8">{currentResult.price}</div>
                
                <Link href="/checkout" className="bg-primary text-on-primary py-4 px-12 rounded-full font-label-md uppercase tracking-widest hover:bg-on-surface transition-colors w-full md:w-auto text-center">
                  Pre-Order
                </Link>
                
                <button 
                  onClick={() => { setStep(0); setAnswers({}); }}
                  className="mt-6 text-[10px] uppercase tracking-widest text-text-secondary hover:text-primary transition-colors underline"
                >
                  Quiz neu starten
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
