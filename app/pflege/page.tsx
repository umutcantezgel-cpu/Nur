"use client";

import React, { useState } from 'react';
import * as motion from 'motion/react-client';
import { ScrollReveal, TextMask } from '@/components/ui/scroll-reveal';

const CARE_MATERIALS = [
  {
    id: "velvet",
    title: "Premium Samt",
    subtitle: "Das Herzstück unserer Hüllen",
    description: "Unser Signature-Samt aus Istanbul zeichnet sich durch seinen weichen Griff und den subtilen Glanz aus. Damit dieses Gefühl lange bleibt, benötigt der Stoff sanfte Aufmerksamkeit.",
    rules: [
      "Flecken nur mit einem leicht feuchten, farblosen Baumwolltuch abtupfen. Niemals reiben.",
      "Halte Samtprodukte von starken Wärmequellen fern, um die Farbbrillanz zu schützen.",
      "Leichte Druckstellen im Samt können oft mit ein wenig Dampf (aus sicherer Entfernung) wieder revitalisiert werden."
    ],
    icon: "texture"
  },
  {
    id: "florals",
    title: "Trockenblumen",
    subtitle: "Natur für die Ewigkeit",
    description: "Unsere handverlesenen Blumenbouquets für die besonderen Momente. Sie sind für die Ewigkeit gedacht, sofern sie richtig gepflegt werden.",
    rules: [
      "Vermeide hohe Luftfeuchtigkeit und direktes Wasser. Dies macht die feinen Blüten brüchig.",
      "Staube die Blüten hin und wieder ganz sanft mit kalter Zugluft (z.B. Föhn auf Kaltstufe) ab.",
      "Direkte Sonneneinstrahlung kann die zarten Naturfarben mit der Zeit ausbleichen lassen."
    ],
    icon: "local_florist"
  },
  {
    id: "paper",
    title: "Papier & Prägung",
    subtitle: "Die Kunst der Kartonage",
    description: "Für unsere Grußkarten und Boxen nutzen wir schwere Papiersorten mit teils tiefer Heißfolienprägung. Naturmaterialien reagieren auf ihre Umgebung.",
    rules: [
      "Lagere Papierprodukte stets trocken und flach liegend, um ein Wellen zu verhindern.",
      "Fasse foliengeprägte Elemente (Gold, Silber) möglichst nicht direkt an, da natürliche Hautöle die Prägung matt machen können."
    ],
    icon: "auto_awesome_mosaic"
  },
  {
    id: "tasbih",
    title: "Natursteine & Holz",
    subtitle: "Deine Gebetskette",
    description: "Unsere Tasbih werden aus natürlichen Halbedelsteinen oder edlen Hölzern geknotet. Jede Berührung hinterlässt über die Jahre eine eigene Patina.",
    rules: [
      "Vermeide den direkten Kontakt mit Parfüm oder aggressiven Reinigungsmitteln.",
      "Bewahre sie bei Nichtgebrauch in ihrem originalen Samtbeutel auf.",
      "Holzperlen dunklen auf natürliche Weise nach – das ist ein Qualitätsmerkmal, kein Fehler."
    ],
    icon: "diamond"
  }
];

export default function PflegePage() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop bg-bg-primary min-h-screen overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10 -translate-y-1/2 translate-x-1/3" />

      <div className="text-center mb-24 max-w-4xl mx-auto relative z-10">
        <ScrollReveal direction="down">
          <span className="font-label-md uppercase tracking-widest text-primary mb-6 block">Care Guide</span>
        </ScrollReveal>
        <h1 className="font-display-lg text-5xl md:text-7xl text-on-surface mb-8 font-serif leading-none">
          <TextMask>Für die</TextMask>
          <TextMask delay={0.2} className="italic text-primary">Ewigkeit gemacht.</TextMask>
        </h1>
        <ScrollReveal delay={0.4} direction="up">
          <p className="font-body-lg text-text-secondary max-w-2xl mx-auto">
            Klicke auf die Karten, um die spezifischen Pflegehinweise für unsere Materialien freizulegen. Ein minimaler Pflegeaufwand sichert die makellose Ästhetik über Generationen.
          </p>
        </ScrollReveal>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 perspective-[2000px]">
        {CARE_MATERIALS.map((material, idx) => (
          <motion.div
            key={material.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
            className="relative w-full aspect-[3/4] cursor-pointer group"
            onClick={() => toggleCard(material.id)}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="w-full h-full relative"
              initial={false}
              animate={{ rotateY: flippedCards[material.id] ? 180 : 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              
              {/* Front Side */}
              <div 
                className="absolute inset-0 backface-hidden bg-surface-variant rounded-3xl p-8 border border-outline-variant shadow-lg flex flex-col items-center justify-center text-center overflow-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                {/* Subtle hover effect on front */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                
                <span className="material-symbols-outlined text-[64px] text-primary mb-8 opacity-80 group-hover:scale-110 transition-transform duration-500">{material.icon}</span>
                <span className="font-label-md uppercase tracking-widest text-text-secondary text-[10px] mb-4">{material.subtitle}</span>
                <h2 className="font-serif text-3xl text-on-surface">{material.title}</h2>
                
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-50">
                  <span className="font-label-md text-[10px] uppercase tracking-widest">Flip</span>
                  <span className="material-symbols-outlined text-[16px]">flip_camera_android</span>
                </div>
              </div>

              {/* Back Side */}
              <div 
                className="absolute inset-0 backface-hidden bg-[#2A2425] rounded-3xl p-8 border border-[#4A3F41] shadow-2xl flex flex-col"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#4A3F41]">
                   <span className="material-symbols-outlined text-primary">{material.icon}</span>
                   <h3 className="font-serif text-xl text-[#E8DCC4]">{material.title}</h3>
                </div>
                
                <p className="font-body-md text-[#E8DCC4]/70 text-sm mb-6 flex-grow">
                  {material.description}
                </p>
                
                <ul className="space-y-4">
                  {material.rules.map((rule, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-[16px] mt-0.5 shrink-0">emergency</span>
                      <span className="font-body-md text-[#E8DCC4] text-xs leading-relaxed">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </motion.div>
        ))}
      </div>

    </main>
  );
}
