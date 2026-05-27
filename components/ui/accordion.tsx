"use client";

import * as React from "react";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-surface-variant">
      <button
        className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="font-headline-md text-xl text-on-surface group-hover:text-primary transition-colors font-serif">
          {question}
        </span>
        <span className={cn(
          "material-symbols-outlined text-primary transition-transform duration-300 flex-shrink-0 ml-4",
          isOpen ? "rotate-45" : ""
        )}>
          add
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="font-body-lg text-text-secondary pb-6 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export function Accordion({ items, className }: { items: { question: string, answer: string }[], className?: string }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className={cn("w-full max-w-3xl mx-auto", className)}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {items.map((item, idx) => (
         <AccordionItem 
            key={idx}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === idx}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
         />
      ))}
    </div>
  );
}
