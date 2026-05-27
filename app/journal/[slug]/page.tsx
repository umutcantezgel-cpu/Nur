import * as React from "react";
import Link from "next/link";
import { MOCK_JOURNAL } from "@/lib/mock-data";
import { ReadingProgress } from "@/components/ui/reading-progress";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { BlurImagePlaceholder } from "@/components/ui/blur-image";
import { ShareButton } from "@/components/ui/share-button";

export async function generateStaticParams() {
  return MOCK_JOURNAL.map((article) => ({
    slug: article.id,
  }));
}

export default async function JournalDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const article = MOCK_JOURNAL.find(p => p.id === slug) || MOCK_JOURNAL[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "image": article.imageUrl,
    "abstract": article.excerpt,
    "author": {
      "@type": "Organization",
      "name": "Nur"
    }
  };

  return (
    <article className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex-grow">
      <ReadingProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto mb-16 relative">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <Breadcrumbs items={[{ label: 'Journal', href: '/suche' }, { label: article.category }]} />
          <ShareButton title={article.title} text={article.excerpt} />
        </div>
        <div className="text-center">
          <span className="font-label-md text-primary uppercase tracking-widest mb-6 block">{article.category}</span>
          <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-on-surface mb-8 font-serif leading-tight">{article.title}</h1>
          <p className="font-body-lg text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-center gap-4 text-text-secondary font-label-md tracking-widest uppercase">
            <span>{article.author}</span>
            <span>•</span>
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })}
            </time>
          </div>
        </div>
      </div>
      
      <div className="w-full aspect-[21/9] rounded-[24px] overflow-hidden mb-16 shadow-pink bg-surface-variant flex items-center justify-center border border-outline-variant relative">
        <BlurImagePlaceholder seed={article.id} icon="photo_library" />
        <div className="absolute inset-0 bg-[#E8DCC4] mix-blend-multiply opacity-10 z-10"></div>
      </div>

      <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:font-medium prose-p:font-sans prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-primary">
         <p>{article.content}</p>
         <p>Dies ist ein Platzhalter für den Haupttext. Die Inhalte für das Nur Editorial werden demnächst vollständig veröffentlicht, zusammen mit unserem ersten exklusiven Drop.</p>
         
         <div className="mt-16 pt-8 border-t border-surface-variant text-center">
            <Link href="/journal" className="inline-flex items-center gap-2 text-primary hover:text-on-surface transition-colors font-label-md tracking-widest uppercase">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Zurück zur Übersicht
            </Link>
         </div>
      </div>
    </article>
  );
}
