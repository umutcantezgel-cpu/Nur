import React from 'react';
import { MOCK_SNEAK_PEEKS } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { constructMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import { SEOMetadata } from '@/components/seo-metadata';
import { StickyScroll } from '@/components/ui/sticky-scroll';
import { BlurImagePlaceholder } from '@/components/ui/blur-image';
import { ScrollReveal, TextMask } from '@/components/ui/scroll-reveal';

export function generateStaticParams() {
  return MOCK_SNEAK_PEEKS.map((peek) => ({
    id: peek.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = MOCK_SNEAK_PEEKS.find((p) => p.id === id);

  if (!product) {
    return constructMetadata({ title: "Produkt nicht gefunden", description: "Dieses Produkt existiert nicht." });
  }

  return constructMetadata({
    title: `${product.title} | Nur Kollektion`,
    description: product.subtitle,
    keywords: ["Islamic lifestyle", "handcrafted decor", "Koranhülle", "Gebetsteppich", product.title],
  });
}

export default async function KollektionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = MOCK_SNEAK_PEEKS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.subtitle,
    sku: `NUR-${product.id.toUpperCase()}`,
    brand: {
      '@type': 'Brand',
      name: 'Nur'
    },
    image: 'https://ay-nur.de/og-image.webp',
    offers: {
      '@type': 'Offer',
      url: `https://ay-nur.de/kollektionen/${product.id}`,
      availability: 'https://schema.org/PreOrder',
      price: '89.00',
      priceCurrency: 'EUR',
      priceValidUntil: '2027-12-31',
      itemCondition: 'https://schema.org/NewCondition'
    }
  };

  const stickyContent = [
    {
      title: "Der Ursprung",
      description: "Alles beginnt mit der Idee, das Gebet nicht als Pflicht, sondern als tägliches Retreat zu verstehen. Dieses Stück wurde entworfen, um dich genau daran zu erinnern.",
    },
    {
      title: "Das Material",
      description: "Wir beziehen unsere Stoffe ausschließlich aus den historischen Basaren Istanbuls. Der schwere Samt und die feine Baumwolle fühlen sich nicht nur luxuriös an, sondern überdauern Generationen.",
    },
    {
      title: "Die Handwerkskunst",
      description: "Keine Massenproduktion. Jede Naht, jede Prägung und jeder Knoten wird in liebevoller Handarbeit von unseren Meistern in den Ateliers von İkitelli gefertigt.",
    },
    {
      title: "Dein Unikat",
      description: "Da jedes Stück von Hand gefertigt wird, entstehen winzige, einzigartige Variationen. Diese sind keine Fehler, sondern der Beweis authentischer Handwerkskunst.",
      content: (
        <Link href="/checkout" className="inline-block mt-4 bg-primary text-on-primary py-4 px-8 rounded-full font-label-md uppercase tracking-widest hover:bg-on-surface transition-colors">
          Jetzt vorbestellen
        </Link>
      )
    }
  ];

  const stickyBackgrounds = [
    <div key="bg1" className="w-full h-full bg-[#2A2425]"><BlurImagePlaceholder seed={`${product.id}-origin`} icon="auto_awesome" /></div>,
    <div key="bg2" className="w-full h-full bg-[#3A3233]"><BlurImagePlaceholder seed={`${product.id}-fabric`} icon="texture" /></div>,
    <div key="bg3" className="w-full h-full bg-[#1A1617]"><BlurImagePlaceholder seed={`${product.id}-craft`} icon="precision_manufacturing" /></div>,
    <div key="bg4" className="w-full h-full bg-[#4A3F41]"><BlurImagePlaceholder seed={`${product.id}-final`} icon="diamond" /></div>,
  ];

  return (
    <main className="flex-grow bg-bg-primary">
      <SEOMetadata jsonLd={jsonLd} />
      
      {/* Cinematic Header */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-margin-mobile md:px-margin-desktop relative">
        <ScrollReveal direction="down" delay={0.2}>
           <span className="font-label-md text-primary uppercase tracking-widest mb-6 block">Kollektion</span>
        </ScrollReveal>
        <h1 className="font-display-lg text-6xl md:text-8xl lg:text-[10rem] text-on-surface mb-6 font-serif leading-[0.85]">
          <TextMask delay={0.4}>{product.title}</TextMask>
        </h1>
        <ScrollReveal direction="up" delay={0.6}>
          <p className="font-body-lg text-text-secondary max-w-2xl mx-auto mb-12 text-xl">
            {product.subtitle}
          </p>
          <span className="bg-surface-variant text-text-secondary px-6 py-3 rounded-full font-label-md uppercase tracking-widest text-[12px] border border-outline-variant shadow-pink">
            Release: {product.date}
          </span>
        </ScrollReveal>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-4 animate-bounce">
          <span className="font-label-md text-text-secondary uppercase tracking-widest text-[10px]">Deep Dive</span>
          <div className="w-[1px] h-12 bg-primary/50" />
        </div>
      </section>

      {/* Deep Dive Sticky Scroll */}
      <StickyScroll content={stickyContent} backgrounds={stickyBackgrounds} />

    </main>
  );
}
