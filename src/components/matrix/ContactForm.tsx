"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject is too long"),
  organisation: z.string().max(200, "Organisation name is too long").optional(),
  engagement: z.enum(["discovery", "architecture", "embedded", "counsel", "research", "other"], {
    errorMap: () => ({ message: "Please select an engagement type" }),
  }),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(5000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const engagementOptions = [
  { value: "discovery", label: "Discovery (6 weeks)" },
  { value: "architecture", label: "Architecture (3–6 months)" },
  { value: "embedded", label: "Embedded (12 months)" },
  { value: "counsel", label: "Counsel (Ongoing)" },
  { value: "research", label: "Research Collaboration" },
  { value: "other", label: "Other" },
] as const;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call - replace with actual endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Contact form submitted:", data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="border border-border p-12 text-center">
        <div className="font-display text-3xl tracking-tight mb-4">Thank you.</div>
        <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
          Your message has been received. We will respond within a few working days.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-8 font-mono text-[10px] tracking-[0.28em] uppercase border-b border-gold pb-1 hover:text-gold transition-colors"
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-12 gap-6 sm:gap-8">
        <div className="col-span-12 md:col-span-6">
          <label
            htmlFor="name"
            className="block font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-3"
          >
            Name *
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full bg-transparent border-b border-foreground/30 py-3 text-base placeholder:text-foreground/30 focus:outline-none focus:border-gold transition-colors"
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>}
        </div>

        <div className="col-span-12 md:col-span-6">
          <label
            htmlFor="email"
            className="block font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-3"
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full bg-transparent border-b border-foreground/30 py-3 text-base placeholder:text-foreground/30 focus:outline-none focus:border-gold transition-colors"
            placeholder="your@correspondence"
          />
          {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div className="col-span-12 md:col-span-6">
          <label
            htmlFor="organisation"
            className="block font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-3"
          >
            Organisation
          </label>
          <input
            id="organisation"
            type="text"
            {...register("organisation")}
            className="w-full bg-transparent border-b border-foreground/30 py-3 text-base placeholder:text-foreground/30 focus:outline-none focus:border-gold transition-colors"
            placeholder="Your organisation (optional)"
          />
          {errors.organisation && (
            <p className="mt-2 text-sm text-red-500">{errors.organisation.message}</p>
          )}
        </div>

        <div className="col-span-12 md:col-span-6">
          <label
            htmlFor="engagement"
            className="block font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-3"
          >
            Engagement Type *
          </label>
          <select
            id="engagement"
            {...register("engagement")}
            className="w-full bg-transparent border-b border-foreground/30 py-3 text-base focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
          >
            <option value="" className="bg-background text-foreground">
              Select engagement type
            </option>
            {engagementOptions.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-background text-foreground">
                {opt.label}
              </option>
            ))}
          </select>
          {errors.engagement && (
            <p className="mt-2 text-sm text-red-500">{errors.engagement.message}</p>
          )}
        </div>

        <div className="col-span-12">
          <label
            htmlFor="subject"
            className="block font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-3"
          >
            Subject *
          </label>
          <input
            id="subject"
            type="text"
            {...register("subject")}
            className="w-full bg-transparent border-b border-foreground/30 py-3 text-base placeholder:text-foreground/30 focus:outline-none focus:border-gold transition-colors"
            placeholder="Brief subject of your enquiry"
          />
          {errors.subject && <p className="mt-2 text-sm text-red-500">{errors.subject.message}</p>}
        </div>

        <div className="col-span-12">
          <label
            htmlFor="message"
            className="block font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-3"
          >
            Message *
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={6}
            className="w-full bg-transparent border-b border-foreground/30 py-3 text-base placeholder:text-foreground/30 focus:outline-none focus:border-gold transition-colors resize-none"
            placeholder="Describe your challenge, institution, and the horizon you are designing for..."
          />
          {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4">
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
          * Required fields
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-block border border-foreground px-8 py-4 font-mono text-[11px] tracking-[0.28em] uppercase hover:bg-foreground hover:text-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Correspondence →"}
        </button>
      </div>
    </form>
  );
}
