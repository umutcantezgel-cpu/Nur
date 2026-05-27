"use client";

import React, { useState, useEffect } from "react";
import { Skeleton } from "./skeleton";

export function ClientSkeletonWrapper({
  children,
  count = 3,
  className
}: {
  children?: React.ReactNode;
  count?: number;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only used to simulate client-side rendering for visual skeleton demonstration
    const timer = setTimeout(() => {
      setMounted(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className={className || "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
        {[...Array(count)].map((_, i) => (
          <Skeleton key={i} className="aspect-[3/4] w-full rounded-[24px]" />
        ))}
      </div>
    );
  }

  return <>{children}</>;
}
