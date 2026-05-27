"use client";

import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Blurhash } from 'react-blurhash';

export function BlurImagePlaceholder({ className, seed, icon }: { className?: string, seed?: string, icon?: string }) {
  const hash = useMemo(() => {
    // Array of strictly valid 28-character blurhashes (4x3) for warm aesthetic placeholders
    const hashes = [
      'LEHV6nWB2yk8pyo0adR*.7kCMdnj',
      'L6PZfSi_.AyE_3t7t7R**0o#DgR4',
      'LGF5]+Yk^6#M@-5c,1J5@[or[Q6.',
      'L4DR1+00%L~p00s,={E100x^-;D%',
      'L46*x#~q009F00Rjayay00j[~qfQ'
    ];
    const index = seed ? Array.from(seed).reduce((acc, char) => acc + char.charCodeAt(0), 0) : 0;
    const selectedHash = hashes[index % hashes.length];
    return selectedHash?.length === 28 ? selectedHash : 'LEHV6nWB2yk8pyo0adR*.7kCMdnj';
  }, [seed]);

  if (!hash || hash.length !== 28) {
    return <div className={cn("absolute inset-0 bg-[#E8DCC4]/20", className)} />;
  }

  return (
    <div className={cn("absolute inset-0 flex items-center justify-center overflow-hidden", className)}>
      <Blurhash
        hash={hash}
        width="100%"
        height="100%"
        resolutionX={32}
        resolutionY={32}
        punch={1}
        className="absolute inset-0 object-cover w-full h-full opacity-80"
      />
      <div className="absolute inset-0 bg-[#4A3F41] mix-blend-overlay opacity-10" />
      {icon && (
        <span className="material-symbols-outlined text-[64px] text-text-secondary/20 relative z-10 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-30">
          {icon}
        </span>
      )}
    </div>
  );
}
