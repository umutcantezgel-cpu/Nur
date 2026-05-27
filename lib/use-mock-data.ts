"use client";

import useSWR from 'swr';
import { MOCK_SNEAK_PEEKS, MOCK_JOURNAL } from '@/lib/mock-data';

const fetcher = (key: string) => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      if (key === 'sneak-peeks') resolve(MOCK_SNEAK_PEEKS);
      if (key === 'journal') resolve(MOCK_JOURNAL);
    }, 800);
  });
};

export function useSneakPeeks() {
  const { data, error, isLoading } = useSWR('sneak-peeks', fetcher, {
    fallbackData: MOCK_SNEAK_PEEKS
  });
  return { sneakPeeks: data, error, isLoading };
}

export function useJournal() {
  const { data, error, isLoading } = useSWR('journal', fetcher, {
    fallbackData: MOCK_JOURNAL
  });
  return { journalArticles: data, error, isLoading };
}
