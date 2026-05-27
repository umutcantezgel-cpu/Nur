"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import * as motion from 'motion/react-client';

export default function CheckoutPage() {
  const [isGift, setIsGift] = useState(false);
  const [step, setStep] = useState(1);

  // Form state
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: '',
    newsletter: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <main className="min-h-screen bg-bg-primary flex flex-col pt-8">
      {/* Distraction-free Header */}
      <header className="py-6 px-margin-mobile md:px-margin-desktop border-b border-outline-variant/30 text-center relative bg-surface z-10 flex flex-col items-center">
        <Link href="/" className="inline-block mb-4" aria-label="Zurück zur Startseite">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#4A3F41]">
             <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C24.1421 35 27.8954 33.3223 30.6066 30.6066L29.1924 29.1924C26.8492 31.5355 23.5786 33 20 33C12.8203 33 7 27.1797 7 20C7 12.8203 12.8203 7 20 7C23.5786 7 26.8492 8.46447 29.1924 10.8076L30.6066 9.3934C27.8954 6.67767 24.1421 5 20 5Z" fill="currentColor"/>
          </svg>
        </Link>
        {/* Progress Indicator */}
        <div className="flex items-center gap-4 text-sm font-label-md uppercase tracking-widest text-text-secondary w-full max-w-sm mx-auto justify-center">
           <span className={`${step >= 1 ? 'text-primary' : ''}`}>Information</span>
           <span className="material-symbols-outlined text-[16px]">chevron_right</span>
           <span className={`${step >= 2 ? 'text-primary' : ''}`}>Überprüfen</span>
        </div>
      </header>

      <div className="flex-grow flex flex-col md:flex-row max-w-7xl mx-auto w-full">
        {/* Left Side: Forms */}
        <div className="w-full md:w-3/5 p-8 md:p-16 relative overflow-hidden">
          <div className="max-w-xl mx-auto md:ml-auto md:mr-12">
            
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-12">
                  <h2 className="font-headline-md text-2xl font-serif text-on-surface mb-6">Kontaktinformationen</h2>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="E-Mail Adresse" className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary mb-4" />
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleInputChange} className="w-5 h-5 accent-primary rounded border-outline-variant focus:ring-primary focus:ring-2" />
                    <span className="font-body-sm text-text-secondary">Neuigkeiten und exklusive Angebote erhalten</span>
                  </label>
                </div>

                <div className="mb-12">
                  <h2 className="font-headline-md text-2xl font-serif text-on-surface mb-6">Lieferadresse</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Vorname" className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary" />
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Nachname" className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary" />
                    <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Adresse" className="col-span-2 w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary" />
                    <input type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} placeholder="Postleitzahl" className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary" />
                    <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="Stadt" className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary" />
                  </div>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="w-full text-center bg-primary text-on-primary py-5 rounded-xl font-label-md uppercase tracking-widest hover:bg-on-surface transition-colors mt-4 text-[16px]"
                >
                  Weiter zur Überprüfung
                </button>
              </motion.div>
            ) : (
              <motion.div
                 key="step2"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: 20 }}
                 transition={{ duration: 0.4 }}
              >
                <div className="mb-12">
                  <h2 className="font-headline-md text-2xl font-serif text-on-surface mb-6">Angaben überprüfen</h2>
                  
                  <div className="bg-surface border border-outline-variant rounded-xl p-6 mb-6">
                    <div className="flex justify-between items-start mb-4 border-b border-outline-variant/50 pb-4">
                      <div>
                        <span className="text-text-secondary font-label-md uppercase tracking-widest text-[10px] block mb-1">Kontakt</span>
                        <div className="font-body-md text-on-surface">{formData.email || 'Nicht angegeben'}</div>
                      </div>
                      <button onClick={() => setStep(1)} className="text-primary hover:text-on-surface text-sm font-label-md uppercase tracking-widest">Ändern</button>
                    </div>
                    
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-text-secondary font-label-md uppercase tracking-widest text-[10px] block mb-1">Lieferadresse</span>
                        <div className="font-body-md text-on-surface">
                          {formData.firstName} {formData.lastName}<br />
                          {formData.address}<br />
                          {formData.postalCode} {formData.city}
                        </div>
                      </div>
                      <button onClick={() => setStep(1)} className="text-primary hover:text-on-surface text-sm font-label-md uppercase tracking-widest">Ändern</button>
                    </div>
                  </div>
                  
                  <div className="bg-surface border border-outline-variant rounded-xl p-6">
                     <span className="text-text-secondary font-label-md uppercase tracking-widest text-[10px] block mb-2">Optionen</span>
                     <div className="font-body-md text-on-surface flex items-center gap-2">
                       <span className="material-symbols-outlined text-[18px] text-text-secondary">{isGift ? 'check_box' : 'check_box_outline_blank'}</span>
                       {isGift ? 'Als Geschenk verpacken (+ 8,00 €)' : 'Keine Geschenkverpackung gewählt'}
                     </div>
                  </div>
                </div>

                <div className="flex gap-4">
                   <button 
                     onClick={() => setStep(1)}
                     className="w-1/3 text-center border-2 border-outline-variant text-text-secondary py-5 rounded-xl font-label-md uppercase tracking-widest hover:border-primary hover:text-primary transition-colors mt-4 text-[16px]"
                   >
                     Zurück
                   </button>
                   <Link href="/success" className="w-2/3 inline-block text-center bg-primary text-on-primary py-5 rounded-xl font-label-md uppercase tracking-widest hover:bg-on-surface transition-colors mt-4 text-[16px]">
                     Kostenpflichtig bestellen
                   </Link>
                </div>
              </motion.div>
            )}

            <div className="mt-8 text-center border-t border-outline-variant/50 pt-8">
              <div className="flex gap-4 justify-center text-text-secondary text-sm">
                <Link href="/agb" className="hover:text-primary transition-colors">AGB</Link>
                <Link href="/widerruf" className="hover:text-primary transition-colors">Widerrufsrecht</Link>
                <Link href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="w-full md:w-2/5 p-8 md:p-16 bg-surface-variant/30 border-l border-outline-variant/30">
          <div className="max-w-md mx-auto md:ml-0 sticky top-12">
            <h2 className="font-headline-md text-2xl font-serif text-on-surface mb-8">Zusammenfassung</h2>
            
            {/* Items */}
            <div className="flex flex-col gap-6 mb-8 border-b border-outline-variant/50 pb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-surface-variant border border-outline-variant flex items-center justify-center relative">
                   <span className="material-symbols-outlined text-text-secondary/50">shopping_bag</span>
                   <span className="absolute -top-2 -right-2 w-5 h-5 bg-text-secondary text-on-primary rounded-full text-[10px] flex items-center justify-center font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-label-lg font-medium text-on-surface">Koranhülle "Midnight Onyx"</h3>
                  <p className="font-body-sm text-text-secondary">Pre-Order</p>
                </div>
                <div className="font-body-md text-on-surface font-medium">89,00 €</div>
              </div>
            </div>

            {/* Upsell: Gift Packaging */}
            <div className="mb-8 bg-surface p-4 rounded-xl border border-primary/20 shadow-pink flex gap-4 items-start cursor-pointer hover:border-primary/50 transition-colors" onClick={() => setIsGift(!isGift)}>
               <div className="pt-1">
                 <input type="checkbox" checked={isGift} onChange={() => {}} className="w-5 h-5 accent-primary rounded border-outline-variant" />
               </div>
               <div>
                 <h4 className="font-label-md font-medium text-on-surface uppercase tracking-widest mb-1 flex items-center gap-2">
                   <span className="material-symbols-outlined text-[16px] text-primary">redeem</span>
                   Als Geschenk verpacken & Karte
                 </h4>
                 <p className="font-body-sm text-text-secondary">Signature Nur Kartonage mit Schleife und einer handgeschriebenen Grußkarte.</p>
                 <p className="font-label-md text-primary mt-2 uppercase tracking-widest text-[10px]">+ 8,00 €</p>
               </div>
            </div>

            {/* Totals */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between font-body-md text-text-secondary">
                <span>Zwischensumme</span>
                <span>89,00 €</span>
              </div>
              {isGift && (
                <div className="flex justify-between font-body-md text-text-secondary">
                  <span>Geschenkverpackung</span>
                  <span>8,00 €</span>
                </div>
              )}
              <div className="flex justify-between font-body-md text-text-secondary">
                <span>Versand</span>
                <span>4,90 €</span>
              </div>
              <div className="flex justify-between font-display-md text-xl text-on-surface mt-4 border-t border-outline-variant/50 pt-4">
                <span>Gesamtsumme</span>
                <span>{isGift ? '101,90 €' : '93,90 €'}</span>
              </div>
              <p className="text-[10px] text-text-secondary text-right">Inkl. MwSt.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
