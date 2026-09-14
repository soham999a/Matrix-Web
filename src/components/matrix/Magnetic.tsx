"use client";

import { useRef, type ReactNode } from "react";

/**
 * A gentle magnetic pull — the wrapped element leans toward the pointer
 * and eases back on leave. Used for the primary invitations.
 */
export function Magnetic({
  children,
  strength = 0.28,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const max = 10;
    const tx = Math.max(-max, Math.min(max, dx * strength));
    const ty = Math.max(-max, Math.min(max, dy * strength));
    el.style.setProperty("transform", `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px)`);
  };

  const onLeave = () => {
    ref.current?.style.setProperty("transform", "translate(0, 0)");
  };

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block will-change-transform transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </span>
  );
}
