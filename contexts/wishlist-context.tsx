"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useToast } from "./toast-context";

interface WishlistContextType {
  wishlist: string[];
  addToWishlist: (id: string, name: string) => void;
  removeFromWishlist: (id: string) => void;
  toggleWishlist: (id: string, name: string) => void;
  isInWishlist: (id: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("nur_wishlist");
    if (saved) {
      try {
        setWishlist(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse wishlist from local storage", e);
      }
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("nur_wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist, isMounted]);

  const addToWishlist = (id: string, name: string) => {
    setWishlist((prev) => {
      if (!prev.includes(id)) {
        addToast(`${name} wurde zur Wunschliste hinzugefügt.`, "success");
        return [...prev, id];
      }
      return prev;
    });
  };

  const removeFromWishlist = (id: string, name?: string) => {
    setWishlist((prev) => prev.filter((item) => item !== id));
    if (name) {
      addToast(`${name} wurde von der Wunschliste entfernt.`, "info");
    } else {
      addToast(`Artikel wurde entfernt.`, "info");
    }
  };

  const toggleWishlist = (id: string, name: string) => {
    if (wishlist.includes(id)) {
      removeFromWishlist(id, name);
    } else {
      addToWishlist(id, name);
    }
  };

  const isInWishlist = (id: string) => wishlist.includes(id);

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, toggleWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
