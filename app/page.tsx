import * as React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  MOCK_SNEAK_PEEKS, 
  MOCK_JOURNAL, 
  MOCK_TESTIMONIALS, 
  MOCK_FAQS, 
  MOCK_INSTAGRAM 
} from "@/lib/mock-data";
import * as motion from "motion/react-client";
import { Suspense, lazy } from 'react';
import { ClientSkeletonWrapper } from "@/components/ui/client-skeleton-wrapper";
import { WaitlistCard } from "@/components/ui/waitlist-card";
import { Accordion } from "@/components/ui/accordion";
import { TestimonialSlider } from "@/components/ui/testimonial-slider";
import { InstagramGrid } from "@/components/ui/instagram-grid";
import { SEOMetadata } from "@/components/seo-metadata";
import { constructMetadata } from "@/lib/metadata";

const SneakPeekGrid = lazy(() => import('@/components/ui/sneak-peek-grid'));
const JournalGrid = lazy(() => import('@/components/ui/journal-grid'));

export const metadata: Metadata = constructMetadata({
  title: "Nur | Premium Islamic Lifestyle & Handcrafted Decor",
  description: "Entdecke exklusive handgefertigte Koranhüllen, Gebetsteppiche und Premium-Dekor aus Istanbul. Accessible Luxury für deinen Islamic Lifestyle.",
  keywords: ["Islamic lifestyle", "handcrafted decor", "Islamic interior design", "Quran gift ideas", "handcrafted prayer rugs", "Koranhüllen", "Gebetsteppiche", "Islamic gifts", "Premium Islamic Art", "Manufaktur Istanbul"],
});

export default function Home() {
  const landingPageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ay-nur.de/#webpage",
        "url": "https://ay-nur.de",
        "name": "Nur | Premium Islamic Lifestyle & Handcrafted Decor",
        "description": "Entdecke exklusive handgefertigte Koranhüllen, Gebetsteppiche und Premium-Dekor aus Istanbul.",
        "publisher": {
          "@id": "https://ay-nur.de/#organization"
        }
      }
    ]
  };

  return (
    <main className="flex-grow pt-20">
      <SEOMetadata jsonLd={landingPageJsonLd} />

      {/* Hero Section: Elegant Split-Screen */}
      <section className="min-h-[85vh] flex flex-col lg:flex-row relative bg-bg-primary overflow-hidden">
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center px-margin-mobile md:px-margin-desktop py-16 md:py-24 z-10">
          <div className="max-w-xl mx-auto lg:mx-0">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-label-md text-label-md text-primary uppercase tracking-widest mb-6 block"
            >
              Exklusiver Vorabzugang
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-on-surface mb-8 leading-tight font-serif"
            >
              Licht für deine Seele. <br />
              <span className="text-primary italic">Demnächst verfügbar.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body-lg text-body-lg text-text-secondary mb-12 max-w-lg leading-relaxed"
            >
              Trag dich in die VIP-Warteliste ein und erhalte exklusiven Zugang zu unserem ersten Drop – direkt aus den Manufakturen Istanbuls.
            </motion.p>
            
            <WaitlistCard />
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 relative min-h-[500px] lg:min-h-full">
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1.5 }}
             className="absolute inset-0 bg-surface-variant flex items-center justify-center p-8 text-center"
           >
             <div className="w-[80%] h-[80%] border border-[#E8DCC4] border-opacity-30 flex flex-col items-center justify-center gap-4 rounded-[32px] bg-[#4A3F41] bg-opacity-20 shadow-pink">
                <span className="material-symbols-outlined text-4xl text-[#E8DCC4] opacity-50">photo_library</span>
                <span className="font-label-md text-label-md text-[#E8DCC4] uppercase tracking-widest opacity-70">Aesthetic Heritage Image Placeholder</span>
             </div>
           </motion.div>
           <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-transparent to-transparent lg:w-[150px] z-10" />
           <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent lg:hidden h-[150px] bottom-0 top-auto z-10" />
        </div>
      </section>

      {/* Teaser / Mission Section (Zig-Zag) */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-24 md:py-32 bg-bg-primary max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop"
      >
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
           {/* Image block */}
           <motion.div 
             initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="w-full md:w-1/2 aspect-[4/5] rounded-[24px] overflow-hidden relative shadow-pink bg-surface-variant flex items-center justify-center border border-outline-variant"
           >
              <div className="text-center px-4">
                 <span className="material-symbols-outlined text-3xl text-primary opacity-50 mb-2 block">image</span>
                 <span className="font-label-md text-text-secondary uppercase tracking-widest opacity-80">Mission Image Placeholder</span>
              </div>
           </motion.div>

           {/* Text Block */}
           <div className="w-full md:w-1/2 flex flex-col justify-center">
             <motion.span 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="font-label-md text-primary uppercase tracking-widest mb-6 block"
             >
               Unsere Vision
             </motion.span>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="font-headline-lg text-3xl md:text-4xl text-on-surface mb-8 font-serif leading-tight"
             >
               Accessible Luxury für den <br />Islamic Lifestyle
             </motion.h2>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="font-body-lg text-text-secondary leading-relaxed mb-6"
             >
               Wir glauben, dass spirituelle Alltagsobjekte nicht nur funktional, sondern auch von zeitloser Ästhetik sein sollten. Nur verbindet tiefe spirituelle Tradition mit modernem Minimalismus.
             </motion.p>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="font-body-lg text-text-secondary leading-relaxed"
             >
               Jede unserer handgefertigten Koranhüllen und Premium-Gebetsteppiche wird mit größter Sorgfalt entworfen, um Ruhe und Eleganz in dein Zuhause zu bringen.
             </motion.p>
           </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-24 md:py-32 bg-surface"
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
           <div className="text-center mb-16">
              <span className="font-label-md text-primary uppercase tracking-widest mb-4 block">Help Desk</span>
              <h2 className="font-headline-lg text-4xl text-on-surface font-serif">Häufig Gestellte Fragen</h2>
           </div>
           <Accordion items={MOCK_FAQS} />
        </div>
      </motion.section>

      {/* The "Sneak Peek" Interactive Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-24 md:py-32 bg-surface border-y border-surface-variant"
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 md:mb-24">
            <span className="font-label-md text-primary uppercase tracking-widest mb-4 block">Sneak Peek</span>
            <h2 className="font-headline-lg text-4xl text-on-surface font-serif">Kommende Kollektionen</h2>
          </div>

          <Suspense fallback={<ClientSkeletonWrapper count={3} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12" />}>
            <SneakPeekGrid />
          </Suspense>
        </div>
      </motion.section>

      {/* Testimonial Slider */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-24 md:py-32 bg-bg-primary"
      >
         <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-0 md:mb-8">
               <span className="font-label-md text-primary uppercase tracking-widest mb-4 block">Community</span>
               <h2 className="font-headline-lg text-4xl text-on-surface font-serif">Stimmen der ersten Stunde</h2>
            </div>
            <TestimonialSlider testimonials={MOCK_TESTIMONIALS} />
         </div>
      </motion.section>

      {/* Journal / SEO Hub */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-24 md:py-32 bg-bg-primary max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
             <span className="font-label-md text-primary uppercase tracking-widest mb-4 block">Editorial</span>
             <h2 className="font-headline-lg text-4xl text-on-surface font-serif">Das Nur Journal</h2>
          </div>
          <Link href="/journal" className="font-label-md text-primary hover:text-on-surface uppercase tracking-widest transition-colors flex items-center gap-2 border-b border-primary pb-1">
            Alle Artikel 
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

         <Suspense fallback={<ClientSkeletonWrapper count={2} className="grid grid-cols-1 md:grid-cols-2 gap-12" />}>
           <JournalGrid />
         </Suspense>
      </motion.section>

      {/* Instagram Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-24 md:py-32 bg-surface border-t border-surface-variant"
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
           <div className="text-center mb-16">
              <span className="font-label-md text-primary uppercase tracking-widest mb-4 block">@ay_nur</span>
              <h2 className="font-headline-lg text-4xl text-on-surface font-serif">Aesthetic Details</h2>
           </div>
           <InstagramGrid posts={MOCK_INSTAGRAM} />
        </div>
      </motion.section>

    </main>
  );
}
