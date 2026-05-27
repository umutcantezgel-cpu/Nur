import Link from 'next/link';
import { cn } from '@/lib/utils';
import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items, className }: { items: BreadcrumbItem[], className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center text-[10px] sm:text-xs font-label-md uppercase tracking-widest text-text-secondary overflow-x-auto whitespace-nowrap scrollbar-hide py-2", className)}>
      <Link href="/" className="hover:text-primary transition-colors flex items-center">Home</Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <span className="material-symbols-outlined text-[14px] mx-1 lg:mx-2 opacity-50">chevron_right</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-on-surface">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
