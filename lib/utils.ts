import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function shareContent(title?: string, text?: string, url?: string): Promise<boolean> {
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareData = { title, text, url: shareUrl };
  
  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return true;
    } else {
      await navigator.clipboard.writeText(shareUrl);
      return false; // false indicates clipboard fallback
    }
  } catch (err) {
    console.log('Error sharing:', err);
    throw err;
  }
}
