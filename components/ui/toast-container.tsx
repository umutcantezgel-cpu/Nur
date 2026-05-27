"use client";
import React from "react";
import { useToast } from "@/contexts/toast-context";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.2 } }}
            className={`pointer-events-auto px-6 py-4 rounded-full shadow-[0_12px_40px_rgba(125,83,89,0.2)] font-label-md uppercase tracking-widest backdrop-blur-xl flex items-center justify-between gap-6 border ${
              toast.type === "success" 
                ? "bg-primary-container/90 text-on-primary border-primary-container"
                : toast.type === "error"
                ? "bg-error text-on-error border-error"
                : "bg-surface-lowest/90 text-on-surface border-surface-variant"
            }`}
          >
            <span>{toast.message}</span>
            <button onClick={() => removeToast(toast.id)} className="opacity-70 hover:opacity-100 transition-opacity flex items-center">
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
