import * as React from "react";
import { JournalCard } from "@/components/ui/journal-card";
import { MOCK_JOURNAL } from "@/lib/mock-data";
import * as motion from "motion/react-client";
import { ClientSkeletonWrapper } from "@/components/ui/client-skeleton-wrapper";

export default function JournalPage() {
  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex-grow">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display-lg text-display-lg text-on-surface mb-4 font-serif"
        >
          Das Nur Journal
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-body-lg text-body-lg text-text-secondary max-w-2xl mx-auto"
        >
          Inspirationen, tiefe Einblicke und Geschichten rund um den Islamic Lifestyle, Spiritualität und Handwerkskunst.
        </motion.p>
      </div>

      <ClientSkeletonWrapper count={6} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_JOURNAL.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
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
      </ClientSkeletonWrapper>
    </main>
  );
}
