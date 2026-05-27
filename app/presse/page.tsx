"use client";

import React from 'react';
import * as motion from 'motion/react-client';

export default function PressePage() {
  const assets = [
    { title: "Logo (Weißer Halbmond)", type: "PNG / SVG", size: "2.4 MB" },
    { title: "Produkt-Freisteller", type: "ZIP Archiv", size: "45.1 MB" },
    { title: "Atelier Istanbul", type: "Hi-Res JPGs", size: "112.0 MB" },
    { title: "Brand Guidelines", type: "PDF", size: "5.8 MB" }
  ];

  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop bg-bg-primary min-h-[70vh]">
      
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <h1 className="font-display-lg text-4xl lg:text-6xl text-on-surface mb-6 font-serif">Presse & Media</h1>
        <p className="font-body-lg text-text-secondary">
          Willkommen im Media Center von Nur. Hier bündeln wir unsere Marke, unsere Geschichte und hochauflösendes Material für Publikationen, Blogger und Partner.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Brand Story block */}
        <div className="lg:col-span-7 flex flex-col gap-8">
           <h2 className="font-headline-md text-3xl font-serif text-on-surface mb-2">Die Brand Story</h2>
           <div className="prose prose-nur max-w-none text-text-secondary font-body-md leading-relaxed">
             <p>
               Gegründet aus der Sehnsucht heraus, Spiritualität mit modernem Minimalismus zu vereinen, bringt Nur hochwertigen Islamic Lifestyle in die europäischen Wohnzimmer. 
             </p>
             <p>
               Unter dem Claim <strong>"Accessible Luxury"</strong> schließt die Marke die Lücke zwischen massenproduzierter Ware und unbezahlbaren Designerstücken. Jedes Produkt, von der sorgfältig gewebten Koranhülle bis zum handgeknüpften Gebetsteppich, entsteht in enger Zusammenarbeit mit einer traditionsreichen Leder- und Textilmanufaktur in Istanbul.
             </p>
             <p>
               Nur steht für Ästhetik, die die Seele beruhigt. Ohne überflüssiges Dekor, fokussiert auf Textur, Qualität und tiefe, sanfte Farbtöne. Gefertigt für Menschen, die Wert auf Ruhe, Glaube und Formvollendung legen.
             </p>
           </div>
           
           <div className="mt-8 border-t border-outline-variant pt-8">
             <h3 className="font-label-md uppercase tracking-widest text-primary mb-4">Pressekontakt</h3>
             <p className="font-body-md text-on-surface font-medium">Amina Yilmaz</p>
             <p className="font-body-md text-text-secondary mb-1">Head of PR & Communications</p>
             <a href="mailto:presse@ay-nur.de" className="font-body-md text-primary hover:text-on-surface transition-colors border-b border-transparent hover:border-on-surface pb-0.5">presse@ay-nur.de</a>
           </div>
        </div>

        {/* Media Kit Grid */}
        <div className="lg:col-span-5 bg-surface-variant p-8 md:p-12 rounded-[32px] border border-outline-variant shadow-pink">
          <h2 className="font-headline-md text-2xl font-serif text-on-surface mb-8">Downloadable Assets</h2>
          
          <div className="flex flex-col gap-4">
            {assets.map((asset, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-surface p-4 rounded-2xl border border-outline-variant flex items-center justify-between group cursor-pointer shadow-sm hover:shadow-md transition-shadow hover:border-primary/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-variant rounded-xl flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">download</span>
                  </div>
                  <div>
                    <h3 className="font-label-md font-medium text-on-surface mb-1 -mt-0.5">{asset.title}</h3>
                    <div className="flex items-center gap-2">
                       <span className="font-label-sm uppercase tracking-widest text-[10px] text-text-secondary">{asset.type}</span>
                       <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                       <span className="font-label-sm uppercase tracking-widest text-[10px] text-text-secondary">{asset.size}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-[12px] font-body-sm text-text-secondary mt-8 leading-relaxed">
            Mit dem Download dieser Dateien stimmst du den Guidelines zur Markennutzung zu. Die Modifikation des Nur Logos (bspw. des weißen Halbmonds) ist untersagt.
          </p>
        </div>

      </div>
    </main>
  );
}
