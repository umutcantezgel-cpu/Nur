"use client";

import React from 'react';
import { useJournal } from '@/lib/use-mock-data';
import { JournalCard } from './journal-card';
import { ClientSkeletonWrapper } from './client-skeleton-wrapper';
import * as motion from 'motion/react-client';

export default function JournalGrid() {
  const { journalArticles, isLoading } = useJournal();

  if (isLoading && !journalArticles) {
    return <ClientSkeletonWrapper count={2} className="grid grid-cols-1 md:grid-cols-2 gap-12" />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
      {journalArticles?.map((article: any, idx: number) => (
        <motion.div 
          key={article.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
        >
          <JournalCard
            href={`/journal/${article.id}`}
            imageUrl={article.imageUrl}
            imageAlt={article.imageAlt}
            category={article.category}
            title={article.title}
            excerpt={article.excerpt}
          />
        </motion.div>
      ))}
    </div>
  );
}
