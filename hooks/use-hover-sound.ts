"use client";

import { useCallback, useEffect, useRef } from "react";

let audioCtx: AudioContext | null = null;

function getAudioContext() {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  return audioCtx;
}

export function useHoverSound() {
  // Ensure we can resume AudioContext upon user interaction if it's suspended
  useEffect(() => {
    const ctx = getAudioContext();
    const handleInteraction = () => {
      if (ctx && ctx.state === "suspended") {
        ctx.resume();
      }
    };
    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("keydown", handleInteraction, { once: true });
    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, []);

  const playHoverSound = useCallback(() => {
    // Respect user's request for mute toggle (e.g. from a settings context / localStorage)
    if (typeof window !== "undefined" && window.localStorage.getItem("nur_sound_muted") === "true") {
      return;
    }
    
    // Also respect system preferences
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = getAudioContext();
    if (!ctx) return;
    
    // We only want to play if state is running (i.e. user has interacted)
    if (ctx.state !== "running") return;

    try {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      // Soft, high-end "click" or "tick"
      const now = ctx.currentTime;
      osc.type = "sine";
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.03);
      
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.01, now + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
      
      osc.start(now);
      osc.stop(now + 0.03);
    } catch (e) {
      console.warn("Hover sound failed", e);
    }
  }, []);

  return playHoverSound;
}
