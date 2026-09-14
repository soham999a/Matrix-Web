"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Word-by-word masked reveal. Each word sits in a clipped mask and rises
 * into place as the block enters the viewport. Rendered text stays in the
 * DOM (aria-label on the wrapper) so it remains legible to assistive tech
 * and search engines; a noscript rule guarantees visibility without JS.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  step = 55,
}: {
  children: string;
  className?: string;
  delay?: number;
  step?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [seen, setSeen] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = String(children).split(" ").filter(Boolean);

  return (
    <span
      ref={ref}
      className={`inline-block align-bottom ${className}`}
      aria-label={String(children)}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="mrv-m inline-block overflow-hidden align-bottom"
          aria-hidden
        >
          <span
            className="mrv-w inline-block will-change-transform"
            style={{
              transform: seen ? "translateY(0)" : "translateY(112%)",
              transition: reduced ? "none" : "transform 900ms cubic-bezier(0.2, 0.7, 0.2, 1)",
              transitionDelay: reduced ? undefined : `${delay + i * step}ms`,
            }}
          >
            {w}
          </span>
          {i < words.length - 1 ? <span className="inline-block w-[0.28em]" /> : null}
        </span>
      ))}
      <noscript>
        <style>{`.mrv-w{transform:none !important;transition:none !important}`}</style>
      </noscript>
    </span>
  );
}
