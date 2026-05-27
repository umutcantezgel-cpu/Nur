import React from 'react';
import { MOCK_SNEAK_PEEKS } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { constructMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { BlurImagePlaceholder } from '@/components/ui/blur-image';

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

  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex-grow min-h-[70vh]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto text-center mb-16 flex flex-col items-center">
        <Breadcrumbs items={[{ label: 'Kollektion', href: '/suche' }, { label: product.title }]} className="mb-8" />
        <h1 className="font-display-lg text-4xl lg:text-6xl text-on-surface mb-6 font-serif">{product.title}</h1>
        <p className="font-body-md text-text-secondary max-w-2xl mx-auto mb-8">
          {product.subtitle}
        </p>
        <span className="bg-surface-variant text-text-secondary px-4 py-2 rounded-full font-label-md uppercase tracking-widest text-[10px]">
          {product.date}
        </span>
      </div>

      <div className="aspect-[16/9] bg-surface-variant/50 rounded-[32px] overflow-hidden flex items-center justify-center mb-16 relative">
         <BlurImagePlaceholder seed={product.id} icon="image" />
         <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/20 to-transparent z-10"></div>
      </div>

      <div className="text-center">
        <Link href="/checkout" className="bg-primary text-on-primary py-4 px-8 rounded-full font-label-md uppercase tracking-widest hover:bg-on-surface transition-colors">
          Pre-Order
        </Link>
      </div>
    </main>
  );
}
