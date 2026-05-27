"use client";

import React from 'react';
import { useSneakPeeks } from '@/lib/use-mock-data';
import { SneakPeekCard } from './sneak-peek-card';
import { ClientSkeletonWrapper } from './client-skeleton-wrapper';

export default function SneakPeekGrid() {
  const { sneakPeeks, isLoading } = useSneakPeeks();

  if (isLoading && !sneakPeeks) {
    return <ClientSkeletonWrapper count={3} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12" />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full">
      {sneakPeeks?.map((peek: any, idx: number) => (
        <SneakPeekCard key={peek.id} peek={peek} idx={idx} />
      ))}
    </div>
  );
}
