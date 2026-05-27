"use client";

import * as React from "react";
import * as motion from "motion/react-client";
import { useWishlist } from "@/contexts/wishlist-context";
import { useToast } from "@/contexts/toast-context";
import { MOCK_SNEAK_PEEKS } from "@/lib/mock-data";
import { SneakPeekCard } from "@/components/ui/sneak-peek-card";
import Link from "next/link";

export default function WunschzettelPage() {
  const { wishlist } = useWishlist();
  const { addToast } = useToast();
  
  // Find full details for items in wishlist
  const wishedItems = React.useMemo(
    () => MOCK_SNEAK_PEEKS.filter(peek => wishlist.includes(peek.id)),
    [wishlist]
  );

  React.useEffect(() => {
    // Simulate availability check
    if (wishedItems.some(item => item.date.includes("Launch: Winter 2026"))) {
      const timer = setTimeout(() => {
         addToast("Einige deiner Lieblingsartikel sind bald verfügbar!", "info");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [wishedItems, addToast]);

  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex-grow min-h-[70vh]">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display-lg text-display-lg text-on-surface mb-4 font-serif"
        >
          Dein Wunschzettel
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-body-lg text-body-lg text-text-secondary max-w-2xl mx-auto"
        >
          {wishlist.length > 0 
            ? "Eine Sammlung deiner Favoriten aus unseren kommenden Kollektionen." 
            : "Noch keine Favoriten gespeichert. Entdecke unsere erste Kollektion."}
        </motion.p>
      </div>

      {wishedItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishedItems.map((item, idx) => (
            <SneakPeekCard key={item.id} peek={item} idx={idx} />
          ))}
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center justify-center py-16"
        >
          <span className="material-symbols-outlined text-6xl text-text-secondary opacity-30 mb-6 font-light">favorite_border</span>
          <Link href="/kollektionen" className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md hover:bg-on-surface transition-colors uppercase tracking-widest whitespace-nowrap">
            Kollektionen entdecken
          </Link>
        </motion.div>
      )}
    </main>
  );
}
