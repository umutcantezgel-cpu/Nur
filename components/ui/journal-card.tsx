"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useHoverSound } from "@/hooks/use-hover-sound";
import { BlurImagePlaceholder } from "@/components/ui/blur-image";

export interface JournalCardProps {
    href: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
    title: string;
    excerpt: string;
    className?: string;
}

export function JournalCard({
    href,
    imageUrl,
    imageAlt,
    category,
    title,
    excerpt,
    className
}: JournalCardProps) {
    const playHoverSound = useHoverSound();

    return (
        <article 
            className={cn("group cursor-pointer flex flex-col h-full", className)}
            onMouseEnter={playHoverSound}
        >
            <Link href={href} className="block aspect-[4/3] overflow-hidden rounded-[20px] mb-6 bg-surface-variant relative shadow-pink border border-outline-variant group-hover:border-primary transition-colors">
                <BlurImagePlaceholder seed={href} icon="article" />
            </Link>
            <div className="flex flex-col flex-grow">
                <span className="font-label-sm text-primary uppercase tracking-widest mb-3 block">{category}</span>
                <Link href={href}>
                    <h3 className="font-headline-md text-2xl font-serif text-on-surface mb-3 group-hover:text-primary transition-colors">{title}</h3>
                </Link>
                <p className="font-body-md text-text-secondary leading-relaxed mb-4 flex-grow">{excerpt}</p>
                <Link href={href} className="font-label-md text-primary uppercase tracking-widest flex items-center gap-2 group-hover:text-on-surface transition-colors w-fit">
                    Weiterlesen <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
            </div>
        </article>
    );
}
