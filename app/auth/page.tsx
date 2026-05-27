"use client";

import React, { useState } from 'react';
import * as motion from 'motion/react-client';
import Link from 'next/link';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="w-full max-w-4xl bg-surface-variant/40 rounded-[32px] overflow-hidden flex flex-col md:flex-row border border-outline-variant shadow-lg relative">
        
        {/* Left Side: Brand Message or Image Placeholder */}
        <div className="md:w-1/2 p-12 bg-primary flex flex-col justify-center text-on-primary">
          <span className="font-label-md uppercase tracking-widest text-[#FDFCFB]/80 mb-6 block">Nur Exklusiv</span>
          <h2 className="font-display-md text-4xl mb-4 font-serif">Licht für deine Seele.</h2>
          <p className="font-body-md text-[#FDFCFB]/80 max-w-sm">
            Trete unserer Community bei und erhalte exklusiven Zugang zu limitierten Pre-Orders, handgefertigten Unikaten und tiefen Einblicken in unsere Manufaktur.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 p-8 md:p-12 relative bg-surface">
          <div className="flex justify-between items-center mb-10 w-full relative">
            <button 
              onClick={() => setIsLogin(true)} 
              className={`font-label-md uppercase tracking-widest pb-2 flex-1 text-center transition-colors ${isLogin ? 'text-primary border-b-2 border-primary' : 'text-text-secondary border-b-2 border-transparent'}`}
            >
              Anmelden
            </button>
            <button 
              onClick={() => setIsLogin(false)} 
              className={`font-label-md uppercase tracking-widest pb-2 flex-1 text-center transition-colors ${!isLogin ? 'text-primary border-b-2 border-primary' : 'text-text-secondary border-b-2 border-transparent'}`}
            >
              Registrieren
            </button>
          </div>

          <motion.div
            key={isLogin ? 'login' : 'register'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <form className="flex flex-col gap-5">
              {!isLogin && (
                <div>
                  <label className="font-label-md text-text-secondary block mb-2" htmlFor="name">Name</label>
                  <input id="name" type="text" className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary" placeholder="Dein Vor- und Nachname" />
                </div>
              )}
              
              <div>
                <label className="font-label-md text-text-secondary block mb-2" htmlFor="email">E-Mail</label>
                <input id="email" type="email" className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary" placeholder="name@email.com" />
              </div>
              
              <div>
                <label className="font-label-md text-text-secondary block mb-2" htmlFor="password">Passwort</label>
                <input id="password" type="password" className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary" placeholder="••••••••" />
              </div>

              {isLogin && (
                <div className="flex justify-end">
                  <Link href="/auth/reset" className="font-body-sm text-text-secondary hover:text-primary transition-colors">Passwort vergessen?</Link>
                </div>
              )}

              <button type="button" className="w-full bg-primary text-on-primary py-4 rounded-full font-label-md uppercase tracking-widest hover:bg-on-surface transition-colors mt-4">
                {isLogin ? 'Einloggen' : 'Account erstellen'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
