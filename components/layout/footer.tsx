"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useToast } from "@/contexts/toast-context";
import { SuccessGlow } from "@/components/ui/success-glow";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

type NewsletterData = {
  email: string;
};

export function Footer() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful, isSubmitting }, reset } = useForm<NewsletterData>();
  const { addToast } = useToast();

  const onSubmit = async (data: NewsletterData) => {
    // Simulated API call
    await new Promise(resolve => setTimeout(resolve, 800));
    console.log("Waitlist subscribed:", data.email);
    addToast("Erfolgreich zur Warteliste hinzugefügt!", "success");
    reset();
  };

  return (
    <footer className="w-full py-section-padding px-margin-mobile md:px-margin-desktop bg-[#4A3F41] text-[#FDFCFB] border-t border-[#4A3F41]/80 mt-auto">
      <div className="max-w-container-max mx-auto">
        {/* Newsletter & Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-12 border-b border-[#FDFCFB]/20">
          <div>
            <h3 className="font-headline-md text-headline-md mb-4 font-serif">
              Licht für deine Seele. Demnächst verfügbar.
            </h3>
            <p className="font-body-md text-body-md text-[#FDFCFB]/70 mb-6 max-w-md">
              Erhalte exklusive Einblicke und Vorabzugang zu unserem ersten Drop, direkt aus den Manufakturen Istanbuls.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 max-w-md relative">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Deine E-Mail Adresse"
                  disabled={isSubmitting || isSubmitSuccessful}
                  className={`w-full bg-[#FDFCFB]/5 border ${errors.email ? 'border-error ring-1 ring-error' : 'border-[#FDFCFB]/20 focus:border-[#FDFCFB] focus:ring-1 focus:ring-[#FDFCFB]'} rounded-full px-6 py-3 font-body-md text-body-md focus:outline-none transition-colors placeholder:text-[#FDFCFB]/40 text-[#FDFCFB] disabled:opacity-50`}
                  {...register("email", { 
                    required: "E-Mail ist erforderlich",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Ungültige E-Mail Adresse"
                    }
                  })}
                />
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitSuccessful}
                  className="absolute right-1 top-1 bottom-1 bg-[#FDFCFB] text-[#4A3F41] px-6 rounded-full font-label-md text-label-md hover:bg-[#FDFCFB]/90 transition-colors uppercase tracking-widest disabled:opacity-100 flex items-center justify-center min-w-[140px] overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.span
                        key="submitting"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="w-5 h-5 border-2 border-t-transparent border-[#4A3F41] rounded-full animate-spin"
                      />
                    ) : isSubmitSuccessful ? (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex items-center gap-2 relative"
                      >
                        <span className="material-symbols-outlined text-[18px] text-[#4A3F41]">check</span>
                        DABEI
                        <SuccessGlow />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="normal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Warteliste
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
              {errors.email && (
                <span className="text-[#FFB4AB] text-xs ml-4 mt-1 font-medium" role="alert">{errors.email.message}</span>
              )}
              {isSubmitSuccessful && (
                <div className="text-[12px] font-medium text-primary mt-2 ml-4 flex items-center gap-1.5 opacity-0 animate-[fade-in_0.5s_ease-out_forwards]">
                  <span className="material-symbols-outlined text-[14px]">volunteer_activism</span>
                  <span>Willkommen in unserer Welt.</span>
                </div>
              )}
            </form>
          </div>
          <div className="flex flex-col md:items-end justify-center">
            <span className="font-label-md text-label-md text-[#FDFCFB]/70 uppercase tracking-widest mb-4">
              Folge uns
            </span>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#FDFCFB]/5 flex items-center justify-center text-[#FDFCFB] hover:bg-[#FDFCFB]/20 transition-all duration-300 border border-[#FDFCFB]/20"
              >
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-[#FDFCFB]/5 flex items-center justify-center text-[#FDFCFB] hover:bg-[#FDFCFB]/20 transition-all duration-300 border border-[#FDFCFB]/20"
              >
                <span className="material-symbols-outlined">play_arrow</span>
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="w-10 h-10 rounded-full bg-[#FDFCFB]/5 flex items-center justify-center text-[#FDFCFB] hover:bg-[#FDFCFB]/20 transition-all duration-300 border border-[#FDFCFB]/20"
              >
                <span className="material-symbols-outlined">push_pin</span>
              </a>
            </div>
          </div>
        </div>

        {/* Links & Copyright */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 items-start">
          <div className="col-span-2 lg:col-span-1 flex flex-col items-start h-full justify-between gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 group w-fit"
            >
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#FDFCFB] transition-transform duration-300 group-hover:rotate-12"
              >
                <path d="M12.4 2.1C18 2.1 22.5 6.6 22.5 12.2C22.5 17.8 18 22.3 12.4 22.3C10.7 22.3 9.1 21.9 7.7 21.1C11.5 20.3 14.4 16.9 14.4 12.8C14.4 8.7 11.5 5.3 7.7 4.5C9.1 3.7 10.7 3.3 12.4 2.1Z" fill="currentColor"/>
              </svg>
              <span className="font-headline-lg text-headline-lg text-[#FDFCFB] italic">Nur</span>
            </Link>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="font-label-sm text-[#FDFCFB]/50 uppercase tracking-widest mb-2">Entdecken</h4>
            <Link href="/shop" className="font-body-md text-body-md text-[#FDFCFB]/70 hover:text-[#FDFCFB] transition-colors">Kollektionen</Link>
            <Link href="/lookbook" className="font-body-md text-body-md text-[#FDFCFB]/70 hover:text-[#FDFCFB] transition-colors">Lookbook</Link>
            <Link href="/geschenke-ratgeber" className="font-body-md text-body-md text-[#FDFCFB]/70 hover:text-[#FDFCFB] transition-colors">Geschenke</Link>
            <Link href="/reviews" className="font-body-md text-body-md text-[#FDFCFB]/70 hover:text-[#FDFCFB] transition-colors">Reviews</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-label-sm text-[#FDFCFB]/50 uppercase tracking-widest mb-2">Die Marke</h4>
            <Link href="/about/entity" className="font-body-md text-body-md text-[#FDFCFB]/70 hover:text-[#FDFCFB] transition-colors">Über Nur</Link>
            <Link href="/journal" className="font-body-md text-body-md text-[#FDFCFB]/70 hover:text-[#FDFCFB] transition-colors">Journal</Link>
            <Link href="/creator" className="font-body-md text-body-md text-[#FDFCFB]/70 hover:text-[#FDFCFB] transition-colors">Creator Program</Link>
            <Link href="/presse" className="font-body-md text-body-md text-[#FDFCFB]/70 hover:text-[#FDFCFB] transition-colors">Presse</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-label-sm text-[#FDFCFB]/50 uppercase tracking-widest mb-2">Service</h4>
            <Link href="/kontakt" className="font-body-md text-body-md text-[#FDFCFB]/70 hover:text-[#FDFCFB] transition-colors">Kontakt & FAQ</Link>
            <Link href="/versand" className="font-body-md text-body-md text-[#FDFCFB]/70 hover:text-[#FDFCFB] transition-colors">Versand</Link>
            <Link href="/zahlungsmethoden" className="font-body-md text-body-md text-[#FDFCFB]/70 hover:text-[#FDFCFB] transition-colors">Zahlungsmethoden</Link>
            <Link href="/tracking" className="font-body-md text-body-md text-[#FDFCFB]/70 hover:text-[#FDFCFB] transition-colors">Bestellstatus</Link>
            <Link href="/pflege" className="font-body-md text-body-md text-[#FDFCFB]/70 hover:text-[#FDFCFB] transition-colors">Pflegehinweise</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-label-sm text-[#FDFCFB]/50 uppercase tracking-widest mb-2">Rechtliches</h4>
            <Link href="/impressum" className="font-body-md text-body-md text-[#FDFCFB]/70 hover:text-[#FDFCFB] transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="font-body-md text-body-md text-[#FDFCFB]/70 hover:text-[#FDFCFB] transition-colors">Datenschutz</Link>
            <Link href="/agb" className="font-body-md text-body-md text-[#FDFCFB]/70 hover:text-[#FDFCFB] transition-colors">AGB</Link>
            <Link href="/widerruf" className="font-body-md text-body-md text-[#FDFCFB]/70 hover:text-[#FDFCFB] transition-colors">Widerruf</Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#FDFCFB]/10 flex justify-center">
          <p className="font-label-sm text-label-sm text-[#FDFCFB]/50 uppercase tracking-widest text-center">
            © 2026 Nur. Premium Islamic Lifestyle und Handwerkskunst aus Istanbul.
          </p>
        </div>
      </div>
    </footer>
  );
}
