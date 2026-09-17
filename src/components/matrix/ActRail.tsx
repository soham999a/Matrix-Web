"use client";

import { useEffect, useState } from "react";

/**
 * The act rail — a fixed mono readout on the left that names whichever
 * act the reader is standing in. It reads sections carrying a
 * `data-rail` label; pages without them silently get no rail.
 */
export function ActRail() {
  const [current, setCurrent] = useState<{ label: string; invert?: boolean }>({ label: "" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-rail]")).map(
      (el) => ({ el, label: el.dataset.rail ?? "" }),
    );

    if (!sections.length) return;
    setMounted(true);

    let raf = 0;
    const compute = () => {
      raf = 0;
      const mid = window.innerHeight * 0.35;
      let active: (typeof sections)[number] | undefined;
      for (const s of sections) {
        if (s.el.getBoundingClientRect().top <= mid) active = s;
      }
      setCurrent({
        label: active?.label ?? "",
        invert: active?.el.dataset.railInvert !== undefined,
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 items-center gap-4 xl:flex"
    >
      <span
        key={current.label + (current.invert ? "-inv" : "")}
        className={`rise relative font-mono text-[9px] tracking-[0.34em] uppercase [writing-mode:vertical-rl] ${
          current.invert ? "text-ink" : "text-gold"
        }`}
      >
        {current.label || "\u00a0"}
      </span>
      <span className={`relative block h-14 w-px ${current.invert ? "bg-ink/25" : "bg-gold/25"}`}>
        <span
          className={`absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full ${
            current.invert ? "bg-ink" : "bg-gold"
          }`}
        />
      </span>
    </div>
  );
}
