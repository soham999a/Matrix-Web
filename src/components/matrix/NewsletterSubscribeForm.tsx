"use client";

import { useState } from "react";

export function NewsletterSubscribeForm({
  className = "col-span-12 md:col-span-5",
}: {
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error("Newsletter gateway error");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error && err.message === "Newsletter gateway error"
          ? "The newsletter channel is not configured yet. Write to system@matrka.net directly."
          : "Something went wrong subscribing. Please try again.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className={className}>
        <p className="font-display text-2xl tracking-tight">Subscribed.</p>
        <p className="mt-2 font-mono text-[10px] tracking-[0.22em] uppercase text-ink/50">
          A letter when there is something to say. Nothing else.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <form onSubmit={onSubmit} className="flex items-stretch border-b border-foreground/40">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@correspondence"
          className="min-w-0 flex-1 bg-transparent py-4 text-base placeholder:text-foreground/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="shrink-0 whitespace-nowrap font-mono text-[10px] tracking-[0.28em] uppercase px-3 sm:px-4 hover:text-gold disabled:opacity-50"
        >
          {status === "submitting" ? "Subscribing…" : "Subscribe →"}
        </button>
      </form>
      {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
    </div>
  );
}
