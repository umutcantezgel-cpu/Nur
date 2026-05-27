"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useHoverSound } from "@/hooks/use-hover-sound";
import { SearchModal } from "@/components/ui/search-modal";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const playHoverSound = useHoverSound();
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const openButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const prevPathnameRef = React.useRef(pathname);
  React.useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setIsMobileMenuOpen(false);
    }
  }, [pathname]);

  const prevIsOpenRef = React.useRef(isMobileMenuOpen);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      // Small delay to ensure the element is rendered and animation started
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else if (prevIsOpenRef.current) {
      setTimeout(() => openButtonRef.current?.focus(), 50);
    }
    prevIsOpenRef.current = isMobileMenuOpen;
  }, [isMobileMenuOpen]);

  const mainNavLinks = [
    { href: "/shop", label: "Kollektionen" },
    { href: "/journal", label: "Journal" },
    { href: "/lookbook", label: "Lookbook" },
    { href: "/geschenke-ratgeber", label: "Geschenke" },
  ];

  const supportLinks = [
    { href: "/kontakt", label: "FAQ & Kontakt" },
    { href: "/tracking", label: "Bestellstatus" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#4A3F41]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)] py-4"
            : "bg-[#4A3F41]/90 backdrop-blur-md py-6 lg:py-8"
        )}
      >
        <nav className="flex justify-between items-center max-w-[1280px] mx-auto px-5 md:px-[64px]">
          
          {/* Logo (Left) */}
          <Link
            href="/"
            className="flex-none flex items-center justify-center gap-3 group"
          >
            <svg 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#FDFCFB] transition-transform duration-500 group-hover:rotate-12"
            >
              <path d="M12.4 2.1C18 2.1 22.5 6.6 22.5 12.2C22.5 17.8 18 22.3 12.4 22.3C10.7 22.3 9.1 21.9 7.7 21.1C11.5 20.3 14.4 16.9 14.4 12.8C14.4 8.7 11.5 5.3 7.7 4.5C9.1 3.7 10.7 3.3 12.4 2.1Z" fill="currentColor"/>
            </svg>
            <span className="font-headline-md text-2xl md:text-3xl font-medium text-[#FDFCFB] tracking-tight italic">
              Nur
            </span>
          </Link>

          {/* Desktop Nav (Center) */}
          <ul className="hidden lg:flex gap-10 items-center justify-center flex-1 mx-8 relative top-[2px]">
            {mainNavLinks.map((link) => {
              const isActive = (pathname.startsWith(link.href) && link.href !== "/") || pathname === link.href;
              return (
                <li key={link.href} className="relative group" onMouseEnter={playHoverSound}>
                  <Link
                    href={link.href}
                    className={cn(
                      "font-label-md text-[13px] uppercase tracking-[0.15em] transition-all duration-300",
                      isActive ? "text-[#FDFCFB] font-medium" : "text-[#FDFCFB]/70 hover:text-[#FDFCFB]"
                    )}
                  >
                    {link.label}
                  </Link>
                  {isActive && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E8C5C9]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop Actions (Right) */}
          <div className="hidden lg:flex gap-6 items-center justify-end">
            <button onClick={() => setIsSearchOpen(true)} className="text-[#FDFCFB]/80 hover:text-[#FDFCFB] transition-colors" aria-label="Suche">
              <span className="material-symbols-outlined text-[26px]">search</span>
            </button>
            <Link href="/wunschzettel" className="text-[#FDFCFB]/80 hover:text-[#FDFCFB] transition-colors" aria-label="Wunschzettel">
              <span className="material-symbols-outlined text-[26px]">favorite</span>
            </Link>
            <Link href="/konto" className="text-[#FDFCFB]/80 hover:text-[#FDFCFB] transition-colors" aria-label="Account">
              <span className="material-symbols-outlined text-[26px]">person</span>
            </Link>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button 
            ref={openButtonRef}
            className="lg:hidden text-[#FDFCFB] p-2 -mr-2 hover:opacity-80 transition-opacity"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Menü öffnen"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[32px]">menu</span>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[60] lg:hidden"
            style={{ willChange: "opacity" }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-[#22191b]/40 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="absolute top-0 right-0 bottom-0 w-[85vw] max-w-[400px] bg-bg-primary flex flex-col rounded-l-[16px] overflow-hidden"
              style={{ willChange: "transform" }}
            >
              {/* Header inside Menu */}
              <div className="flex justify-between items-center p-6 border-b border-surface-variant/50">
                <span className="font-headline-md text-2xl font-serif text-on-surface italic">Menü</span>
                <button 
                  ref={closeButtonRef}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-text-secondary hover:text-on-surface transition-colors p-2 -mr-2 bg-surface rounded-full border border-surface-variant"
                  aria-label="Menü schließen"
                >
                  <span className="material-symbols-outlined text-[24px]">close</span>
                </button>
              </div>

                {/* Main Nav Links */}
                <div className="flex flex-col px-6 py-8 gap-6 flex-1 overflow-y-auto w-full">
                  {/* Search Bar in Mobile Menu */}
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => setIsSearchOpen(true), 300);
                    }}
                    className="w-full flex items-center gap-3 bg-surface border border-outline-variant rounded-xl px-4 py-3 font-body-md text-text-secondary text-left hover:border-primary transition-colors focus:outline-none"
                  >
                    <span className="material-symbols-outlined text-[20px] opacity-70">search</span>
                    Was suchst du?
                  </button>
                  
                  <div className="mt-2 flex flex-col gap-6">
                    <Link href="/shop" className="font-headline-md text-3xl font-serif text-on-surface hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Kollektionen</Link>
                    <Link href="/lookbook" className="font-headline-md text-3xl font-serif text-on-surface hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Lookbook</Link>
                    <Link href="/journal" className="font-headline-md text-3xl font-serif text-on-surface hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
                    <Link href="/geschenke-ratgeber" className="font-headline-md text-3xl font-serif text-on-surface hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Geschenke</Link>
                    <Link href="/reviews" className="font-headline-md text-3xl font-serif text-on-surface hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Reviews</Link>
                  </div>

                  <div className="h-px bg-surface-variant my-4 w-12" />

                  {/* Secondary Links Array */}
                  <div className="flex flex-col gap-4">
                    <span className="font-label-sm text-primary uppercase tracking-widest text-xs">Die Marke</span>
                    <Link href="/about/entity" className="font-body-md text-body-md text-text-secondary hover:text-on-surface transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Über Nur</Link>
                    <Link href="/creator" className="font-body-md text-body-md text-text-secondary hover:text-on-surface transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Creator Program</Link>
                    <Link href="/presse" className="font-body-md text-body-md text-text-secondary hover:text-on-surface transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Presse & Medien</Link>
                  </div>

                  <div className="mt-4 flex flex-col gap-4">
                    <span className="font-label-sm text-primary uppercase tracking-widest text-xs">Service</span>
                    <Link href="/kontakt" className="font-body-md text-body-md text-text-secondary hover:text-on-surface transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Kontakt & FAQ</Link>
                    <Link href="/tracking" className="font-body-md text-body-md text-text-secondary hover:text-on-surface transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Bestellstatus</Link>
                    <Link href="/versand" className="font-body-md text-body-md text-text-secondary hover:text-on-surface transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Versand</Link>
                    <Link href="/pflege" className="font-body-md text-body-md text-text-secondary hover:text-on-surface transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Pflegehinweise</Link>
                  </div>
                </div>

              {/* Action Icons Footer */}
              <div className="p-6 pb-10 border-t border-surface-variant/50 flex justify-around items-center bg-[#FAF7F2]">
                <Link href="/wunschzettel" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col items-center gap-2 text-text-secondary hover:text-primary transition-colors" aria-label="Dein Wunschzettel">
                  <span className="material-symbols-outlined text-[28px]" aria-hidden="true">favorite</span>
                  <span className="text-[10px] font-label-md uppercase tracking-wider">Wunsch</span>
                </Link>
                <Link href="/konto" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col items-center gap-2 text-text-secondary hover:text-primary transition-colors" aria-label="Dein Profil">
                  <span className="material-symbols-outlined text-[28px]" aria-hidden="true">person</span>
                  <span className="text-[10px] font-label-md uppercase tracking-wider">Profil</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
