"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type Item = {
  q: ReactNode;
  a: ReactNode;
};

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-border">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              className="group flex w-full items-center justify-between gap-6 py-8 text-left cursor-pointer"
            >
              <h3 className="font-display text-2xl md:text-3xl tracking-tight group-hover:italic transition-all duration-300">
                {item.q}
              </h3>
              <span
                aria-hidden="true"
                className={`shrink-0 relative h-6 w-6 text-gold ${isOpen ? "rotate-45" : ""} transition-transform duration-300`}
              >
                <span className="absolute top-1/2 left-0 h-px w-6 bg-gold" />
                <span className="absolute left-1/2 top-0 w-px h-6 bg-gold" />
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-muted-foreground leading-relaxed max-w-3xl pb-8">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
