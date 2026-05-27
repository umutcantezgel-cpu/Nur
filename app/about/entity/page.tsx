import { Metadata } from "next";
import { SEOMetadata } from "@/components/seo-metadata";
import { constructMetadata } from "@/lib/metadata";
import { ScrollReveal, TextMask } from "@/components/ui/scroll-reveal";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { InteractiveMap } from "@/components/ui/interactive-map";

export const metadata: Metadata = constructMetadata({
  title: "Entity | The Architecture of Nur",
  description: "Erfahre mehr über die Struktur, Handwerkskunst und Philosophie hinter Nur. Entdecke unsere Wurzeln in Istanbul.",
});

export default function EntityPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wer steht hinter Nur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nur ist eine Premium-Marke für Islamic Lifestyle und Handcrafted Decor. Wir verstehen uns als eine Bewegung, die Spiritualität in moderner, minimalistischer Ästhetik verpackt."
        }
      },
      {
        "@type": "Question",
        "name": "Wo produziert Nur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Alle unsere Produkte werden in einer exklusiven Traditionsmanufaktur in Istanbul, Türkei, unter fairen Bedingungen in Handarbeit gefertigt."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nur",
    "url": "https://ay-nur.de",
    "logo": "https://ay-nur.de/icon.png",
    "foundingLocation": "Deutschland",
    "description": "Premium Islamic Lifestyle & Handcrafted Decor. Accessible Luxury Handmade in Istanbul."
  };

  return (
    <main className="flex-grow pt-20 bg-bg-primary overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      {/* Cinematic Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
        <ScrollReveal delay={0.2} direction="down">
          <span className="font-label-md text-primary uppercase tracking-widest mb-6 block">The Entity</span>
        </ScrollReveal>
        
        <h1 className="font-display-lg text-6xl md:text-8xl lg:text-9xl text-on-surface mb-12 font-serif max-w-5xl leading-[0.9]">
          <TextMask delay={0.3}>Von den Basaren</TextMask>
          <TextMask delay={0.5} className="text-text-secondary">Istanbuls bis zu</TextMask>
          <TextMask delay={0.7} className="italic text-primary">dir nach Hause.</TextMask>
        </h1>
        
        <ScrollReveal delay={1.0}>
          <div className="w-24 h-[1px] bg-primary mb-12" />
          <p className="font-body-lg text-text-secondary text-xl max-w-2xl leading-relaxed">
            Nur ist mehr als eine Marke. Es ist ein Netzwerk aus jahrhundertealter Handwerkstradition, familiären Ateliers und einer modernen Vision von islamischem Minimalismus.
          </p>
        </ScrollReveal>
      </section>

      {/* Interactive Map Section */}
      <section className="py-32 bg-surface border-y border-surface-variant relative overflow-hidden">
        {/* Parallax Background */}
        <ParallaxSection speed={0.8} className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[#E8DCC4] mix-blend-overlay" />
        </ParallaxSection>

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <ScrollReveal direction="up" className="text-center mb-16">
            <span className="font-label-md text-primary uppercase tracking-widest mb-4 block">Die Routen</span>
            <h2 className="font-headline-lg text-5xl md:text-6xl text-on-surface font-serif">Unsere Manufakturen</h2>
            <p className="font-body-md text-text-secondary mt-6 max-w-xl mx-auto">
              Interagiere mit der Karte, um die geheimen Orte zu entdecken, an denen die Magie von Nur entsteht.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <InteractiveMap />
          </ScrollReveal>
        </div>
      </section>

      {/* Values / Pillars */}
      <section className="py-32 md:py-48 bg-bg-primary max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col gap-6">
              <span className="material-symbols-outlined text-4xl text-primary">spa</span>
              <h3 className="font-serif text-3xl text-on-surface">Sabr & Ihsan</h3>
              <p className="font-body-md text-text-secondary leading-relaxed">
                Perfektion (Ihsan) braucht Geduld (Sabr). Wir drängen unsere Handwerker nicht. Jedes Stück darf so lange dauern, wie es braucht, um seinem spirituellen Zweck gerecht zu werden.
              </p>
            </div>
            <div className="flex flex-col gap-6 mt-0 md:mt-16">
              <span className="material-symbols-outlined text-4xl text-primary">diversity_3</span>
              <h3 className="font-serif text-3xl text-on-surface">Familie</h3>
              <p className="font-body-md text-text-secondary leading-relaxed">
                Wir arbeiten ausschließlich mit familiär geführten Kleinbetrieben in der Türkei zusammen. Kein Massen-Sourcing, sondern Beziehungen auf Augenhöhe.
              </p>
            </div>
            <div className="flex flex-col gap-6 mt-0 md:mt-32">
              <span className="material-symbols-outlined text-4xl text-primary">eco</span>
              <h3 className="font-serif text-3xl text-on-surface">Ewigkeit</h3>
              <p className="font-body-md text-text-secondary leading-relaxed">
                Gegen die Wegwerfgesellschaft. Unsere Produkte sind Erbstücke. Gemacht aus Materialien, die mit der Zeit durch die Berührung beim Gebet eine eigene Patina entwickeln.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}
