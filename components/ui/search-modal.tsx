"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSneakPeeks, useJournal } from "@/lib/use-mock-data";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const { sneakPeeks } = useSneakPeeks();
  const { journalArticles } = useJournal();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: reset query when modal closes
      setQuery("");
    }
  }, [isOpen]);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const filteredJournal = (journalArticles || []).filter(
    (item: any) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredSneakPeeks = (sneakPeeks || []).filter(
    (item: any) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex flex-col items-center pt-[100px] px-margin-mobile md:px-margin-desktop bg-bg-primary/95 backdrop-blur-xl"
        >
          <div className="absolute inset-0 z-[-1]" onClick={onClose} />
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 md:top-8 md:right-8 text-on-surface hover:opacity-70 p-2 rounded-full border border-outline-variant bg-surface"
            aria-label="Suche schließen"
          >
            <span className="material-symbols-outlined text-[24px]" aria-hidden="true">close</span>
          </button>

          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-2xl bg-surface rounded-3xl border border-surface-variant overflow-hidden shadow-2xl flex flex-col max-h-[80vh]"
          >
            <div className="p-4 border-b border-surface-variant flex items-center gap-3">
              <span className="material-symbols-outlined text-text-secondary text-[24px]">search</span>
              <input
                ref={inputRef}
                type="text"
                placeholder="Suche in Journal & Kollektionen..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none font-body-lg text-on-surface placeholder:text-text-secondary/50"
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-text-secondary hover:text-on-surface" aria-label="Eingabe löschen">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">cancel</span>
                </button>
              )}
            </div>

            <div className="overflow-y-auto p-2" aria-live="polite" aria-atomic="true">
              <div className="sr-only">
                {query ? `${filteredSneakPeeks.length + filteredJournal.length} Ergebnisse gefunden.` : ''}
              </div>
              {!query ? (
                <div className="p-12 text-center text-text-secondary font-body-md">
                   Was suchst du? Entdecke Artikel, Guides und exklusive Produkte.
                </div>
              ) : (
                <div className="p-4 flex flex-col gap-6">
                  {filteredSneakPeeks.length > 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <h4 className="font-label-md text-primary uppercase tracking-widest mb-3 px-2">Kollektionen</h4>
                      <div className="flex flex-col gap-1">
                        {filteredSneakPeeks.map((item: any) => (
                          <Link 
                            key={item.id} 
                            href={`/kollektionen/${item.id}`}
                            className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-variant transition-colors"
                          >
                            <div className="w-12 h-12 rounded bg-surface-variant flex items-center justify-center shrink-0">
                               <span className="material-symbols-outlined text-text-secondary/50">shopping_bag</span>
                            </div>
                            <div>
                               <div className="font-label-md text-on-surface">{item.title}</div>
                               <div className="font-body-sm text-text-secondary line-clamp-1">{item.subtitle}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {filteredJournal.length > 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <h4 className="font-label-md text-primary uppercase tracking-widest mb-3 px-2">Journal</h4>
                      <div className="flex flex-col gap-1">
                        {filteredJournal.map((item: any) => (
                          <Link 
                            key={item.id} 
                            href={`/journal/${item.id}`}
                            className="flex auto items-center gap-4 p-3 rounded-xl hover:bg-surface-variant transition-colors"
                          >
                            <div className="w-12 h-12 rounded bg-surface-variant flex items-center justify-center shrink-0">
                               <span className="material-symbols-outlined text-text-secondary/50">article</span>
                            </div>
                            <div>
                               <div className="font-label-md text-on-surface">{item.title}</div>
                               <div className="font-body-sm text-text-secondary line-clamp-1">{item.excerpt}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {filteredSneakPeeks.length === 0 && filteredJournal.length === 0 && (
                    <div className="p-12 text-center text-text-secondary font-body-md">
                       Keine Ergebnisse für &ldquo;{query}&rdquo; gefunden.
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
