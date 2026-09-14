"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hover-to-decode text. On hover the glyphs scramble, then resolve
 * left-to-right into the true word — a quiet nod to the name.
 * Text is only ever visual (aria-label preserves the real string).
 */
const GLYPHS = "MXTRIA_·+#[]@%÷?◬";

export function DecodeText({
  text,
  className = "",
  duration = 800,
}: {
  text: string;
  className?: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(text);
  const [armed, setArmed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const scramble = () => {
    if (timer.current) clearTimeout(timer.current);
    if (reduced.current) return;
    const start = performance.now();
    const out = () => {
      const p = Math.min(1, (performance.now() - start) / duration);
      let s = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " ") {
          s += " ";
          continue;
        }
        const settled = Math.min(1, Math.max(0, (p * text.length - i) / 1.4));
        s += settled >= 1 ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      setDisplay(s);
      if (p < 1) timer.current = setTimeout(out, 28);
    };
    out();
  };

  const settle = () => {
    if (timer.current) clearTimeout(timer.current);
    setDisplay(text);
    setArmed(false);
  };

  return (
    <span
      className={className}
      aria-label={text}
      onMouseEnter={() => {
        setArmed(true);
        scramble();
      }}
      onMouseLeave={settle}
      onFocus={() => {
        setArmed(true);
        scramble();
      }}
      onBlur={settle}
    >
      {display}
    </span>
  );
}
