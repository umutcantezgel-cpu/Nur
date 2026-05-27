"use client";

import React, { useState } from 'react';
import * as motion from 'motion/react-client';

export default function TrackingPage() {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto flex-grow min-h-[70vh]">
      <div className="text-center mb-12">
        <h1 className="font-display-lg text-4xl text-on-surface mb-4 font-serif">Wo bleibt mein Unikat?</h1>
        <p className="font-body-md text-text-secondary max-w-lg mx-auto">
          Gib deine Bestellnummer und deine E-Mail Adresse ein, um den aktuellen Status deiner handgefertigten Bestellung zu überprüfen.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-surface-variant/50 p-8 md:p-12 rounded-[32px] border border-outline-variant shadow-lg max-w-xl mx-auto"
      >
        <form 
          className="flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            setIsSearching(true);
            setTimeout(() => setIsSearching(false), 2000);
          }}
        >
          <div>
            <label className="font-label-md text-text-secondary block mb-2 uppercase tracking-widest text-[10px]" htmlFor="orderNumber">Bestellnummer</label>
            <input 
              id="orderNumber" 
              type="text" 
              required
              className="w-full bg-surface border-b-2 border-outline-variant px-0 py-3 font-body-lg text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-text-secondary/30" 
              placeholder="z.B. NUR-123456" 
            />
          </div>
          
          <div>
            <label className="font-label-md text-text-secondary block mb-2 uppercase tracking-widest text-[10px]" htmlFor="trackingEmail">E-Mail Adresse</label>
            <input 
              id="trackingEmail" 
              type="email" 
              required
              className="w-full bg-surface border-b-2 border-outline-variant px-0 py-3 font-body-lg text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-text-secondary/30" 
              placeholder="deine@email.com" 
            />
          </div>

          <button 
            type="submit" 
            disabled={isSearching}
            className="w-full bg-primary text-on-primary py-4 rounded-full font-label-md uppercase tracking-widest hover:bg-on-surface transition-colors mt-6 flex justify-center items-center"
          >
            {isSearching ? (
              <span className="w-5 h-5 border-2 border-t-transparent border-on-primary rounded-full animate-spin"></span>
            ) : (
              "Sendung verfolgen"
            )}
          </button>
        </form>
      </motion.div>
    </main>
  );
}
