"use client";

import React from 'react';
import * as motion from 'motion/react-client';

const MOCK_REVIEWS = [
  { id: 1, name: "Aisha M.", text: "Der Gebetsteppich hat eine unglaubliche Qualität. Er ist jeden Tag in Benutzung und sieht aus wie neu. Die Handarbeit aus Istanbul ist wirklich spürbar.", rating: 5, date: "12. Mai 2026", type: "text" },
  { id: 2, name: "Sarah K.", text: "Die Koranhülle aus feinstem Satin ist ein Kunstwerk. Ein wunderschönes Geschenk zu Ramadan.", rating: 5, date: "08. April 2026", type: "text" },
  { id: 3, name: "Instagram Story", text: "", rating: 5, date: "Vor 2 Tagen", type: "social", imagePlaceholder: true },
  { id: 4, name: "Yusuf T.", text: "Perfekt designte Stücke. Sehr elegant und zeitlos. Die Verpackung allein war ein Erlebnis.", rating: 5, date: "28. März 2026", type: "text" },
  { id: 5, name: "TikTok Video", text: "", rating: 5, date: "Letzte Woche", type: "social", imagePlaceholder: true },
  { id: 6, name: "Meryem A.", text: "Habe lange nach hochwertigem Islamic Interior gesucht und es endlich bei Nur gefunden. Alhamdulillah für diese Manufaktur.", rating: 5, date: "15. Februar 2026", type: "text" },
];

export default function ReviewsPage() {
  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex-grow min-h-[70vh]">
      <div className="text-center mb-16">
        <h1 className="font-display-lg text-4xl lg:text-6xl text-on-surface mb-6 font-serif">Kundenstimmen</h1>
        <p className="font-body-md text-text-secondary max-w-2xl mx-auto">
          Die Erfahrungen unserer Community. Entdecke, wie unsere handgefertigten Stücke aus Istanbul ihren Platz in EUREM Alltag finden.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {MOCK_REVIEWS.map((review, idx) => (
          <motion.div 
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (idx % 3) * 0.15 }}
            className="break-inside-avoid bg-surface-variant p-8 rounded-[24px] border border-outline-variant shadow-pink relative overflow-hidden group"
          >
            {review.type === 'text' ? (
              <>
                <div className="flex text-primary mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-body-md text-on-surface mb-6 italic leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-label-md text-text-secondary uppercase tracking-widest">{review.name}</span>
                  <span className="font-body-sm text-text-secondary/60">{review.date}</span>
                </div>
              </>
            ) : (
              <>
                <div className="aspect-[4/5] bg-surface/50 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                   <span className="material-symbols-outlined text-4xl text-on-surface opacity-30 z-20 group-hover:scale-110 transition-transform duration-500">
                     play_circle
                   </span>
                   <div className="absolute inset-x-0 bottom-4 z-20 text-center">
                     <span className="font-label-md text-surface-container-lowest uppercase tracking-widest text-[10px]">Play Video</span>
                   </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-label-md text-on-surface uppercase tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">{review.name.includes("Instagram") ? "photo_camera" : "videocam"}</span>
                    {review.name}
                  </span>
                  <span className="font-body-sm text-text-secondary/60">{review.date}</span>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </main>
  );
}
