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
import { ScrollReveal, TextMask } from "@/components/ui/scroll-reveal";
import { ParallaxSection } from "@/components/ui/parallax-section";
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

      {/* Hero Section: Cinematic 2.5D */}
      <section className="min-h-[100vh] flex flex-col relative bg-bg-primary overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          {/* Abstract light layers */}
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#E8DCC4]/10 blur-[100px] rounded-full mix-blend-screen" />
        </ParallaxSection>

        <div className="flex-1 flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop relative z-10 text-center">
          <ScrollReveal delay={0.2} direction="up" distance={30}>
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-6 block">
              Exklusiver Vorabzugang
            </span>
          </ScrollReveal>
          
          <h1 className="font-display-lg text-6xl md:text-8xl lg:text-9xl text-on-surface mb-8 leading-[0.9] font-serif max-w-5xl mx-auto">
            <TextMask delay={0.4}>Licht für</TextMask>
            <TextMask delay={0.6} className="text-primary italic mt-2">deine Seele.</TextMask>
          </h1>
          
          <ScrollReveal delay={0.8} direction="up">
            <p className="font-body-lg text-text-secondary mb-12 max-w-xl mx-auto leading-relaxed text-xl">
              Trag dich in die VIP-Warteliste ein und erhalte exklusiven Zugang zu unserem ersten Drop – direkt aus den Manufakturen Istanbuls.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={1.0} direction="up">
            <WaitlistCard />
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="font-label-md text-text-secondary uppercase tracking-widest text-sm">Entdecken</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-text-secondary to-transparent" />
        </motion.div>
      </section>

      {/* Cinematic Deep Dive: The Craft */}
      <section className="relative bg-surface text-on-surface py-32 md:py-48 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <ScrollReveal direction="left">
                <span className="font-label-md text-primary uppercase tracking-widest mb-6 block">Die Manufaktur</span>
                <h2 className="font-headline-lg text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8">
                  Meisterhafte<br/>Tradition aus<br/><span className="italic text-primary">Istanbul</span>.
                </h2>
                <p className="font-body-lg text-text-secondary text-lg leading-relaxed mb-8">
                  Jedes Stück wird in kleinen, spezialisierten Ateliers handgefertigt. Von der Auswahl der feinsten Samtstoffe auf dem historischen Mahmutpaşa-Markt bis hin zur präzisen Heißfolienprägung in İkitelli.
                </p>
                <div className="w-16 h-[1px] bg-primary mb-8" />
                <p className="font-body-md text-text-secondary italic">
                  "Wir kreieren nicht nur Objekte, wir weben Spiritualität in den Alltag."
                </p>
              </ScrollReveal>
            </div>
            
            <div className="relative aspect-[3/4] w-full rounded-[40px] overflow-hidden">
              <ParallaxSection speed={1.2} className="w-full h-full absolute inset-0">
                <div className="w-full h-full bg-surface-variant flex items-center justify-center bg-gradient-to-tr from-[#E8DCC4]/20 to-transparent">
                  <span className="material-symbols-outlined text-6xl text-primary/50">architecture</span>
                </div>
              </ParallaxSection>
            </div>
          </div>
        </div>
      </section>

      {/* The "Sneak Peek" Interactive Grid */}
      <section className="py-32 md:py-48 bg-bg-primary relative border-t border-surface-variant">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-24">
            <ScrollReveal direction="up">
              <span className="font-label-md text-primary uppercase tracking-widest mb-4 block">Sneak Peek</span>
              <h2 className="font-headline-lg text-5xl md:text-7xl text-on-surface font-serif">Kommende Kollektionen</h2>
            </ScrollReveal>
          </div>

          <Suspense fallback={<ClientSkeletonWrapper count={3} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12" />}>
            <ScrollReveal direction="up" delay={0.2}>
              <SneakPeekGrid />
            </ScrollReveal>
          </Suspense>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="py-32 bg-surface">
         <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                 <span className="font-label-md text-primary uppercase tracking-widest mb-4 block">Community</span>
                 <h2 className="font-headline-lg text-5xl text-on-surface font-serif">Stimmen der ersten Stunde</h2>
              </div>
              <TestimonialSlider testimonials={MOCK_TESTIMONIALS} />
            </ScrollReveal>
         </div>
      </section>

      {/* Journal / SEO Hub */}
      <section className="py-32 md:py-48 bg-bg-primary max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
               <span className="font-label-md text-primary uppercase tracking-widest mb-4 block">Editorial</span>
               <h2 className="font-headline-lg text-5xl text-on-surface font-serif">Das Nur Journal</h2>
            </div>
            <Link href="/journal" className="font-label-md text-primary hover:text-on-surface uppercase tracking-widest transition-colors flex items-center gap-2 border-b border-primary pb-1">
              Alle Artikel 
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </ScrollReveal>

         <Suspense fallback={<ClientSkeletonWrapper count={2} className="grid grid-cols-1 md:grid-cols-2 gap-12" />}>
           <ScrollReveal direction="up" delay={0.2}>
             <JournalGrid />
           </ScrollReveal>
         </Suspense>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-surface border-t border-surface-variant">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop max-w-4xl">
           <ScrollReveal direction="up">
             <div className="text-center mb-16">
                <span className="font-label-md text-primary uppercase tracking-widest mb-4 block">Help Desk</span>
                <h2 className="font-headline-lg text-5xl text-on-surface font-serif">Häufig Gestellte Fragen</h2>
             </div>
             <Accordion items={MOCK_FAQS} />
           </ScrollReveal>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="py-32 bg-bg-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
           <ScrollReveal direction="up">
             <div className="text-center mb-16">
                <span className="font-label-md text-primary uppercase tracking-widest mb-4 block">@ay_nur</span>
                <h2 className="font-headline-lg text-5xl text-on-surface font-serif">Aesthetic Details</h2>
             </div>
             <InstagramGrid posts={MOCK_INSTAGRAM} />
           </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
