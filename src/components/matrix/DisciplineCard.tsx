"use client";

import { useState } from "react";
import Link from "next/link";

type Discipline = {
  n: string;
  t: string;
  d: string;
  slug: string;
  points: string[];
};

const isCoarse = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: none), (pointer: coarse)").matches;

const isTouch = (e: { nativeEvent: Event }) => {
  const pt = (e.nativeEvent as PointerEvent).pointerType;
  if (pt) return pt === "touch" || pt === "pen";
  return isCoarse();
};

export function DisciplineCard({ c, i }: { c: Discipline; i: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        if (!isCoarse()) setFlipped(true);
      }}
      onMouseLeave={() => {
        if (!isCoarse()) setFlipped(false);
      }}
      className={`col-span-12 md:col-span-6 xl:col-span-4 group p-8 md:p-10 min-h-[320px] md:min-h-[330px] border-border [perspective:1200px]
        border-t
        ${i % 2 === 0 ? "md:border-r" : ""}
        ${i === 8 ? "md:border-b" : ""}
        ${i % 3 !== 2 ? "xl:border-r" : ""}
        ${i >= 6 ? "xl:border-b" : ""}
        ${i % 3 === 2 && i % 2 === 0 ? "xl:border-r-0" : ""}`}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <Link
          href={`/capabilities/${c.slug}`}
          onClick={(e) => {
            if (isTouch(e)) {
              e.preventDefault();
              setFlipped((f) => !f);
            }
          }}
          className={`absolute inset-0 [backface-visibility:hidden] flex flex-col justify-between touch-manipulation hover:bg-foreground/[0.025] transition-colors duration-700 ${
            flipped ? "pointer-events-none" : ""
          }`}
        >
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[10px] tracking-[0.28em] text-gold">{c.n}</span>
            <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
              Discipline
              <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                →
              </span>
            </span>
          </div>
          <div>
            <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-[1.05] mt-10">
              {c.t}
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{c.d}</p>
          </div>
        </Link>

        <Link
          href={`/capabilities/${c.slug}`}
          className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-fog text-ink overflow-hidden shadow-[0_28px_60px_-24px_rgba(0,0,0,0.55)] ${
            flipped ? "" : "pointer-events-none"
          }`}
        >
          <span aria-hidden="true" className="absolute top-0 left-0 h-[2px] w-16 bg-gold" />

          <div className="flex h-full flex-col">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[10px] tracking-[0.28em] text-gold">{c.n}</span>
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink/50">
                Discipline
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-center">
              <h3 className="font-display text-2xl md:text-3xl tracking-tight leading-[1.05] text-ink text-center">
                {c.t}
              </h3>
              <div aria-hidden="true" className="mt-3 flex items-center justify-center gap-2">
                <span className="h-px w-8 bg-gold/50" />
                <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
              </div>
              <ul className="mx-auto mt-4 w-max max-w-full space-y-2 text-[13px] leading-snug text-ink/80">
                {c.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="block h-[6px] w-[6px] shrink-0 rotate-45 bg-gold" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink border-b border-ink/40">
                Open
                <span className="inline-block text-gold group-hover:translate-x-1 transition-transform duration-300">
                  {" "}
                  →
                </span>
              </span>
              <span className="grid h-8 w-8 place-items-center border border-ink/20 font-mono text-[11px] text-ink/60">
                {c.n}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
