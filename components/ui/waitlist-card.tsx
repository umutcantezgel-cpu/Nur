"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/contexts/toast-context";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

type WaitlistData = {
  email: string;
};

interface WaitlistCardProps extends HTMLMotionProps<"div"> {}

export function WaitlistCard({ className, ...props }: WaitlistCardProps) {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful, isSubmitting }, reset } = useForm<WaitlistData>();
  const { addToast } = useToast();

  const onSubmit = async (data: WaitlistData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    console.log("Waitlist registered via Card:", data.email);
    addToast("Erfolgreich zur Warteliste hinzugefügt!", "success");
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      id="waitlist"
      className={cn("w-full max-w-md", className)}
      {...props}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 relative">
        <div className={cn(
          "relative flex flex-col sm:flex-row overflow-hidden rounded-full bg-surface-container-lowest border p-1 transition-colors duration-300",
          errors.email ? "border-error shadow-[0_0_0_1px_rgba(186,26,26,0.1)]" : "border-surface-variant shadow-pink"
        )}>
          <input
            type="email"
            placeholder="Deine E-Mail Adresse"
            disabled={isSubmitting || isSubmitSuccessful}
            className="flex-1 bg-transparent px-6 py-4 font-body-md text-on-surface focus:outline-none placeholder:text-text-secondary w-full disabled:opacity-50"
            {...register("email", { 
              required: "E-Mail ist erforderlich",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Ungültige E-Mail Adresse"
              }
            })}
          />
          <button
            type="submit"
            disabled={isSubmitting || isSubmitSuccessful}
            className={cn(
              "bg-primary text-on-primary px-8 py-4 sm:py-0 rounded-full font-label-md text-label-md transition-colors uppercase tracking-widest whitespace-nowrap min-w-[170px] flex items-center justify-center",
              (isSubmitting || isSubmitSuccessful) ? "opacity-70 cursor-not-allowed" : "hover:bg-on-surface"
            )}
          >
            <AnimatePresence mode="wait">
              {isSubmitting ? (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="w-5 h-5 border-2 border-t-transparent border-on-primary rounded-full animate-spin"
                />
              ) : isSubmitSuccessful ? (
                <motion.span
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">check</span>
                  DABEI
                </motion.span>
              ) : (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Auf die Warteliste
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
        <AnimatePresence>
          {errors.email && (
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-error text-sm ml-6 mt-1 font-medium absolute -bottom-6"
            >
              {errors.email.message}
            </motion.span>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}
