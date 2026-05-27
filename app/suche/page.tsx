"use client";

import React, { useState } from 'react';
import * as motion from 'motion/react-client';
import { useSneakPeeks, useJournal } from '@/lib/use-mock-data';
import { SneakPeekCard } from '@/components/ui/sneak-peek-card';
import { JournalCard } from '@/components/ui/journal-card';
import { ClientSkeletonWrapper } from '@/components/ui/client-skeleton-wrapper';

export default function SuchePage() {
  const [query, setQuery] = useState("");
  const { sneakPeeks, isLoading: isSneaking } = useSneakPeeks();
  const { journalArticles, isLoading: isJournaling } = useJournal();

  const filteredSneakPeeks = (sneakPeeks || []).filter(
    (item: any) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  const filteredJournal = (journalArticles || []).filter(
    (item: any) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const isLoading = isSneaking || isJournaling;

  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex-grow min-h-[70vh]">
      <div className="max-w-4xl mx-auto mb-16 relative">
        <label htmlFor="search" className="sr-only">Suche</label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[32px] text-text-secondary/50">search</span>
          <input 
            id="search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Was suchst du?"
            className="w-full bg-transparent border-b-2 border-outline-variant py-6 pl-16 pr-4 font-display-md text-3xl md:text-5xl text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-text-secondary/30"
            autoFocus
          />
        </div>
      </div>

      {query && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {filteredSneakPeeks.length === 0 && filteredJournal.length === 0 ? (
            <div className="text-center py-16 text-text-secondary font-body-lg">
              Leider keine Ergebnisse für &ldquo;{query}&rdquo; gefunden.
            </div>
          ) : (
            <div className="flex flex-col gap-16">
              {filteredSneakPeeks.length > 0 && (
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="font-headline-md text-2xl text-on-surface font-serif">Kollektionen</h2>
                    <span className="bg-surface-variant text-text-secondary text-xs px-2 py-1 rounded-full">{filteredSneakPeeks.length}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {filteredSneakPeeks.map((item: any, idx: number) => (
                      <SneakPeekCard key={item.id} peek={item} idx={idx} />
                    ))}
                  </div>
                </div>
              )}

              {filteredJournal.length > 0 && (
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="font-headline-md text-2xl text-on-surface font-serif">Journal</h2>
                    <span className="bg-surface-variant text-text-secondary text-xs px-2 py-1 rounded-full">{filteredJournal.length}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredJournal.map((article: any, idx: number) => (
                      <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      >
                        <JournalCard
                          href={`/journal/${article.id}`}
                          category={article.category}
                          title={article.title}
                          excerpt={article.excerpt}
                          imageUrl={article.imageUrl}
                          imageAlt={article.imageAlt}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </motion.div>
      )}
    </main>
  );
}
