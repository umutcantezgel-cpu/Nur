"use client";

import React from 'react';
import * as motion from 'motion/react-client';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const MOCK_ORDERS = [
  { id: "NR-2025-849", date: "12. Okt 2025", items: "Premium Gebetsteppich", total: "149,00 €", status: "Zugestellt", link: "/tracking?order=NR-2025-849" },
  { id: "NR-2026-012", date: "02. Jan 2026", items: "Midnight Onyx Koranhülle", total: "89,00 €", status: "In Produktion", link: "/tracking?order=NR-2026-012" },
  { id: "NR-2025-342", date: "04. Sep 2025", items: "Aesthetic Sticker Set", total: "12,90 €", status: "Ausstehend", link: "/tracking?order=NR-2025-342" },
];

function OrderStatusBadge({ status }: { status: string }) {
  let badgeColor = "bg-surface text-text-secondary border-outline-variant";
  if (status === "In Produktion") {
     badgeColor = "bg-surface text-primary border-primary/30";
  } else if (status === "Zugestellt" || status === "Shipped") {
     badgeColor = "bg-surface text-[#4caf50] border-[#4caf50]/30";
  } else if (status === "Ausstehend" || status === "Pending") {
     badgeColor = "bg-surface text-[#ff9800] border-[#ff9800]/30";
  }

  return (
    <span className={cn("font-label-md uppercase tracking-widest text-[10px] px-3 py-1 rounded-full border", badgeColor)}>
      {status}
    </span>
  );
}

export default function AccountPage() {
  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex-grow">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h1 className="font-display-lg text-4xl text-on-surface mb-2 font-serif">Mein Konto</h1>
            <p className="font-body-md text-text-secondary">Willkommen zurück, Amina. Hier findest du deinen exklusiven Pre-Order Status.</p>
          </div>
          <button className="text-text-secondary hover:text-error transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span className="font-label-md uppercase tracking-widest hidden md:inline">Abmelden</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            {/* Status Tracker */}
          <div className="md:col-span-2 flex flex-col gap-12">
            <div>
              <h2 className="font-headline-md text-2xl text-on-surface mb-6 font-serif">Dein Pre-Order Status</h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-surface-variant p-8 rounded-[24px] border border-outline-variant shadow-pink"
              >
                <div className="flex justify-between items-center mb-8 border-b border-outline-variant pb-6">
                  <div>
                    <div className="font-label-md text-text-secondary uppercase tracking-widest mb-1">Limitierte Edition</div>
                    <div className="font-headline-md text-lg text-on-surface font-serif">Koranhülle "Midnight Onyx"</div>
                  </div>
                  <div className="text-right">
                    <div className="font-label-md text-text-secondary uppercase tracking-widest mb-1">Status</div>
                    <OrderStatusBadge status="In Produktion" />
                  </div>
                </div>

                {/* Timeline */}
                <div className="relative border-l-2 border-outline-variant/50 ml-4 py-2 flex flex-col gap-8">
                  <div className="relative pl-8">
                    <div className="absolute w-4 h-4 bg-primary rounded-full left-[-9px] top-1 shadow-[0_0_0_4px_var(--color-surface-variant)]"></div>
                    <h3 className="font-label-lg font-medium text-on-surface mb-1 -mt-0.5">Warteliste bestätigt</h3>
                    <p className="font-body-sm text-text-secondary">Du hast dir deinen Platz gesichert.</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute w-4 h-4 bg-primary rounded-full left-[-9px] top-1 shadow-[0_0_0_4px_var(--color-surface-variant)]"></div>
                    <div className="absolute w-4 h-4 bg-primary rounded-full left-[-9px] top-1 animate-ping opacity-30"></div>
                    <h3 className="font-label-lg font-medium text-on-surface mb-1 -mt-0.5">In Handanfertigung</h3>
                    <p className="font-body-sm text-text-secondary">Dein Unikat wird aktuell in Istanbul gefertigt.</p>
                  </div>
                  <div className="relative pl-8 opacity-50">
                    <div className="absolute w-4 h-4 bg-outline-variant rounded-full left-[-9px] top-1"></div>
                    <h3 className="font-label-lg font-medium text-on-surface mb-1 -mt-0.5">Versandbereit</h3>
                    <p className="font-body-sm text-text-secondary">Der Artikel wird für den Versand vorbereitet.</p>
                  </div>
                  <div className="relative pl-8 opacity-50">
                    <div className="absolute w-4 h-4 bg-outline-variant rounded-full left-[-9px] top-1"></div>
                    <h3 className="font-label-lg font-medium text-on-surface mb-1 -mt-0.5">Zugestellt</h3>
                    <p className="font-body-sm text-text-secondary">Viel Freude mit deinem Nur Unikat.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div>
              <h2 className="font-headline-md text-2xl text-on-surface mb-6 font-serif">Historische Bestellungen</h2>
              
              <div className="flex flex-col gap-4">
                {MOCK_ORDERS.map(order => (
                  <Link href={order.link} key={order.id} className="bg-surface border border-outline-variant rounded-[16px] p-6 hover:border-primary transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                     <div>
                       <div className="text-text-secondary font-label-md uppercase tracking-widest text-[10px] mb-1">{order.date}</div>
                       <div className="font-body-lg text-on-surface">{order.items}</div>
                       <div className="text-sm text-text-secondary mt-1">Bestellung {order.id}</div>
                     </div>
                     <div className="flex items-center gap-6 md:justify-end">
                       <div className="flex items-center flex-col md:items-end">
                         <div className="font-body-md text-on-surface mb-2">{order.total}</div>
                         <OrderStatusBadge status={order.status} />
                       </div>
                       <span className="material-symbols-outlined text-text-secondary flex shrink-0 group-hover:text-primary transition-colors">arrow_forward</span>
                     </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h2 className="font-headline-md text-2xl text-on-surface mb-0 font-serif">Quick Links</h2>
            <Link href="/wunschzettel" className="bg-surface-variant p-6 rounded-[20px] border border-outline-variant hover:border-primary transition-colors flex items-center justify-between group">
              <div>
                <span className="material-symbols-outlined text-primary mb-2 block text-[28px]">favorite</span>
                <h3 className="font-label-lg font-medium text-on-surface">Wunschliste</h3>
              </div>
              <span className="material-symbols-outlined text-text-secondary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <div className="bg-surface-variant p-6 rounded-[20px] border border-outline-variant hover:border-primary transition-colors flex items-center justify-between group cursor-pointer">
              <div>
                <span className="material-symbols-outlined text-primary mb-2 block text-[28px]">person</span>
                <h3 className="font-label-lg font-medium text-on-surface">Profildaten</h3>
              </div>
              <span className="material-symbols-outlined text-text-secondary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
            <div className="bg-surface-variant p-6 rounded-[20px] border border-outline-variant hover:border-primary transition-colors flex items-center justify-between group cursor-pointer">
              <div>
                <span className="material-symbols-outlined text-primary mb-2 block text-[28px]">location_on</span>
                <h3 className="font-label-lg font-medium text-on-surface">Adressen</h3>
              </div>
              <span className="material-symbols-outlined text-text-secondary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
