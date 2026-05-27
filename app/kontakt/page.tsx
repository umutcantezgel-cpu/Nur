"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useToast } from "@/contexts/toast-context";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function Kontakt() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<ContactFormData>();
  const { addToast } = useToast();

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
    addToast("Nachricht wurde versendet!", "success");
    reset();
  };

  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop max-w-xl mx-auto flex-grow">
      <h1 className="font-display-lg text-4xl text-on-surface mb-4">Kontakt</h1>
      <p className="font-body-md text-text-secondary mb-8">Haben Sie Fragen? Wir helfen Ihnen gerne weiter.</p>
      {isSubmitSuccessful ? (
        <div className="bg-primary-container/20 text-primary p-6 rounded-2xl text-center">
          <p className="font-headline-md mb-2">Vielen Dank für Ihre Nachricht!</p>
          <p className="font-body-md">Wir werden uns in Kürze bei Ihnen melden.</p>
          <Button onClick={() => reset()} className="mt-4" variant="secondary" size="sm">Neue Nachricht</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Input 
              placeholder="Name" 
              {...register("name", { required: "Name ist erforderlich" })} 
              className={errors.name ? "border-error" : ""}
            />
            {errors.name && <p className="text-error text-xs mt-1 ml-4">{errors.name.message}</p>}
          </div>
          <div>
            <Input 
              type="email" 
              placeholder="E-Mail" 
              {...register("email", { 
                required: "E-Mail ist erforderlich",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Ungültige E-Mail Adresse"
                }
              })} 
              className={errors.email ? "border-error" : ""}
            />
            {errors.email && <p className="text-error text-xs mt-1 ml-4">{errors.email.message}</p>}
          </div>
          <div>
            <textarea 
              placeholder="Ihre Nachricht" 
              className={`w-full bg-surface-container-lowest border ${errors.message ? "border-error" : "border-pink-highlight focus:border-tertiary-container"} rounded-2xl px-6 py-4 font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-tertiary-container transition-shadow resize-none min-h-[150px]`}
              {...register("message", { required: "Nachricht ist erforderlich" })}
            ></textarea>
            {errors.message && <p className="text-error text-xs mt-1 ml-4">{errors.message.message}</p>}
          </div>
          <Button type="submit" className="w-full">Nachricht senden</Button>
        </form>
      )}
    </main>
  );
}
