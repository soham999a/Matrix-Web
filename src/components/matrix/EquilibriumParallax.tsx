"use client";

import { useEffect, useState } from "react";
import { Equilibrium } from "./Equilibrium";

export function EquilibriumParallax({ size = 340 }: { size?: number }) {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative" style={{ transform: `translateY(${Math.min(y * 0.06, 32)}px)` }}>
      <Equilibrium size={size} className="text-foreground" />
      <p className="mt-6 text-center lg:text-right font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
        Balance · Perseverance · System
      </p>
    </div>
  );
}
