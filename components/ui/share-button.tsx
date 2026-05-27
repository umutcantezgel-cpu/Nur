"use client";

import React from 'react';
import { useToast } from '@/contexts/toast-context';
import { shareContent } from '@/lib/utils';

export function ShareButton({ title, text, url }: { title?: string, text?: string, url?: string }) {
  const { addToast } = useToast();

  const handleShare = async () => {
    try {
      const isNative = await shareContent(title, text, url);
      if (!isNative) {
        addToast("Link in die Zwischenablage kopiert", "success");
      }
    } catch (err) {
      // AbortError typically occurs if the user cancels the share dialog, no need to show an error toast
    }
  };

  return (
    <button onClick={handleShare} className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-label-md tracking-widest uppercase mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-0">
      <span className="material-symbols-outlined text-[18px]">share</span>
      Teilen
    </button>
  );
}
