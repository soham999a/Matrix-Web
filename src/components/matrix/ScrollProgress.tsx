"use client";

import { useEffect, useRef } from "react";

/**
 * The gold hairline that tracks the page's descent —
 * a one-pixel progress instrument along the top edge.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? doc.scrollTop / max : 0;
      ref.current?.style.setProperty("transform", `scaleX(${p.toFixed(4)})`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[70] h-px origin-left scale-x-0 bg-gold shadow-[0_0_8px_rgba(201,161,74,0.55)]"
    />
  );
}
