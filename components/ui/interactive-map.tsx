"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import { ScrollReveal } from "./scroll-reveal";

interface MapPoint {
  id: string;
  name: string;
  x: number; // percentage
  y: number; // percentage
  description: string;
  icon: string;
}

const ISTANBUL_POINTS: MapPoint[] = [
  {
    id: "mahmut",
    name: "Mahmutpaşa",
    x: 45,
    y: 55,
    description: "Hier beginnt unsere Reise. Auf dem historischen Stoffmarkt Istanbuls wählen wir die feinsten Samtstoffe für unsere Koranhüllen sorgfältig per Hand aus.",
    icon: "shopping_bag"
  },
  {
    id: "ikitelli",
    name: "İkitelli OSB",
    x: 25,
    y: 35,
    description: "In unseren hochmodernen Ateliers und Druckereien findet die Veredelung statt. Hier werden Etiketten gewebt und Premium-Verpackungen mit Heißfolienprägung versehen.",
    icon: "precision_manufacturing"
  },
  {
    id: "bazaar",
    name: "Kapalıçarşı (Grand Bazaar)",
    x: 48,
    y: 60,
    description: "In den versteckten Han-Gebäuden rund um den großen Basar sitzen die Meister, die unsere Tespih (Gebetsketten) in stundenlanger Handarbeit knoten.",
    icon: "diamond"
  }
];

export function InteractiveMap() {
  const [activePoint, setActivePoint] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-[16/9] bg-[#4A3F41] rounded-[40px] overflow-hidden shadow-pink group">
      {/* Abstract Map Background */}
      <div className="absolute inset-0 opacity-20 transition-transform duration-1000 group-hover:scale-105">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-none stroke-[#E8DCC4] stroke-[0.2]">
          {/* Topographical / Map lines abstract */}
          <path d="M 0 50 Q 25 25 50 50 T 100 50" />
          <path d="M 0 70 Q 35 45 60 70 T 100 70" />
          <path d="M 0 30 Q 15 15 40 30 T 100 30" />
          <path d="M 20 0 Q 30 50 20 100" />
          <path d="M 80 0 Q 70 50 80 100" />
        </svg>
      </div>

      {/* Pulsing epicenter */}
      <div className="absolute top-[50%] left-[40%] w-96 h-96 bg-primary/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* The Points */}
      {ISTANBUL_POINTS.map((point) => (
        <div
          key={point.id}
          className="absolute"
          style={{ left: `${point.x}%`, top: `${point.y}%` }}
          onMouseEnter={() => setActivePoint(point.id)}
          onMouseLeave={() => setActivePoint(null)}
        >
          {/* Dot */}
          <div className="relative z-20 w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-[#E8DCC4] rounded-full border-4 border-[#4A3F41] cursor-pointer hover:scale-125 transition-transform duration-300 shadow-[0_0_20px_rgba(232,220,196,0.6)] flex items-center justify-center">
             <div className="w-1 h-1 bg-primary rounded-full" />
          </div>

          {/* Label (always visible but small) */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-label-md text-[#E8DCC4]/70 uppercase tracking-widest text-[10px] pointer-events-none">
            {point.name}
          </div>

          {/* Hover Card */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ 
              opacity: activePoint === point.id ? 1 : 0, 
              y: activePoint === point.id ? -20 : 10,
              scale: activePoint === point.id ? 1 : 0.95
            }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 bg-bg-primary rounded-2xl p-6 shadow-2xl pointer-events-none z-30 border border-outline-variant"
          >
            <span className="material-symbols-outlined text-primary mb-2 block">{point.icon}</span>
            <h4 className="font-serif text-xl text-on-surface mb-2">{point.name}</h4>
            <p className="font-body-md text-text-secondary leading-relaxed text-sm">
              {point.description}
            </p>
          </motion.div>
        </div>
      ))}

      {/* Default Overlay Text if nothing is hovered */}
      <motion.div 
        className="absolute bottom-8 right-8 text-right pointer-events-none"
        animate={{ opacity: activePoint ? 0 : 1 }}
      >
        <h3 className="font-serif text-3xl text-[#E8DCC4] mb-2">Die Quellen von Nur</h3>
        <p className="font-label-md uppercase tracking-widest text-[#E8DCC4]/70 text-xs">Hover über die Punkte auf der Karte</p>
      </motion.div>
    </div>
  );
}
