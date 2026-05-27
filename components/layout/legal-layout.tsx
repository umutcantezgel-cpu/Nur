"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import * as motion from 'motion/react-client';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

const LEGAL_LINKS = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutzerklärung' },
  { href: '/agb', label: 'AGB' },
  { href: '/widerruf', label: 'Widerrufsrecht' },
  { href: '/versand', label: 'Versand & Lieferung' },
  { href: '/zahlungsmethoden', label: 'Zahlungsmethoden' },
];

export function LegalLayout({ children, title }: { children: React.ReactNode, title: string }) {
  const pathname = usePathname();

  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex-grow">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        <aside className="lg:w-1/4 shrink-0">
          <div className="sticky top-[140px]">
            <Breadcrumbs items={[{ label: title }]} className="mb-8" />
            <h2 className="font-label-md text-primary uppercase tracking-widest mb-8">Rechtliches</h2>
            <nav className="flex flex-col gap-4">
              {LEGAL_LINKS.map(link => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className={cn(
                      "font-body-md transition-colors block",
                      isActive ? "text-primary font-medium" : "text-text-secondary hover:text-on-surface"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-3/4 max-w-3xl"
        >
          <h1 className="font-display-md text-4xl text-on-surface mb-12 font-serif">{title}</h1>
          <div className="prose prose-nur max-w-none prose-p:text-text-secondary prose-p:font-body-md prose-headings:font-serif prose-headings:font-normal prose-headings:text-on-surface prose-a:text-primary hover:prose-a:text-on-surface">
            {children}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
