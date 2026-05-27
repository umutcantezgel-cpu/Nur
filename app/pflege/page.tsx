"use client";

import React from 'react';
import * as motion from 'motion/react-client';

export default function PflegePage() {
  const materials = [
    {
      id: "velvet",
      title: "Premium Samt (Velvet)",
      description: "Unser Signature-Samt aus Istanbul zeichnet sich durch seinen weichen Griff und den subtilen Glanz aus. Damit dieses Gefühl lange bleibt, benötigt der Stoff sanfte Aufmerksamkeit.",
      rules: [
        "Flecken nur mit einem leicht feuchten, farblosen Baumwolltuch vorsichtig abtupfen. Niemals reiben.",
        "Halte Samtprodukte von starken Wärmequellen und direkter, dauerhafter Sonneneinstrahlung fern, um die Farbbrillanz zu schützen.",
        "Leichte Druckstellen im Samt können oft mit ein wenig Dampf (aus sicherer Entfernung) wieder revitalisiert werden."
      ],
      icon: "texture"
    },
    {
      id: "florals",
      title: "Trockenblumen (Dried Florals)",
      description: "Unsere handverlesenen Blumenbouquets für die besonderen Momente. Sie sind für die Ewigkeit gedacht, sofern sie richtig gepflegt werden.",
      rules: [
        "Vermeide hohe Luftfeuchtigkeit (z.B. im Badezimmer) und direktes Wasser. Dies macht die feinen Blüten brüchig oder kann zu Schimmel führen.",
        "Staube die Blüten hin und wieder ganz sanft mit kalter Zugluft (z.B. Föhn auf Kaltstufe und schwächster Stufe) ab.",
        "Direkte Sonneneinstrahlung kann die zarten Naturfarben mit der Zeit ausbleichen lassen."
      ],
      icon: "local_florist"
    },
    {
      id: "paper",
      title: "Papier & Prägung",
      description: "Für unsere Grußkarten und Urkunden nutzen wir schwere Papiersorten mit teils tiefer Prägung. Naturmaterialien reagieren auf ihre Umgebung.",
      rules: [
        "Lagere Papierprodukte stets trocken und flach liegend, um ein Wellen zu verhindern.",
        "Fasse foliengeprägte Elemente (Gold, Silber) möglichst nicht direkt an, da die natürlichen Hautöle die Prägung matt machen können."
      ],
      icon: "menu_book"
    }
  ];

  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop bg-bg-primary min-h-[70vh]">
      
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <h1 className="font-display-lg text-4xl lg:text-6xl text-on-surface mb-6 font-serif">Material & Pflege</h1>
        <p className="font-body-lg text-text-secondary">
          Unsere Unikate sind dafür gemacht, dich ein Leben lang zu begleiten. Ein minimaler Pflegeaufwand sichert die makellose Ästhetik der verwendeten Materialien.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        {materials.map((material, idx) => (
          <motion.div 
            key={material.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24`}
          >
            {/* Visual Left/Right */}
            <div className="w-full md:w-5/12 aspect-[4/5] bg-surface-variant/40 rounded-[32px] border border-outline-variant flex items-center justify-center p-8 relative">
              <span className="material-symbols-outlined text-[80px] text-text-secondary/20">{material.icon}</span>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-7/12 flex flex-col justify-center">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant text-primary">
                    <span className="material-symbols-outlined">{material.icon}</span>
                 </div>
                 <h2 className="font-headline-lg text-3xl text-on-surface font-serif">{material.title}</h2>
               </div>
               
               <p className="font-body-md text-text-secondary leading-relaxed mb-8">
                 {material.description}
               </p>

               <ul className="space-y-6">
                 {material.rules.map((rule, index) => (
                   <li key={index} className="flex items-start gap-4">
                     <span className="material-symbols-outlined text-primary text-[20px] mt-1 shrink-0">check</span>
                     <p className="font-body-md text-on-surface leading-relaxed">{rule}</p>
                   </li>
                 ))}
               </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
