"use client";

import { useEffect, useState } from "react";

const TYPE_DELAY = 85;

export function TypeTagline({
  first,
  second,
  light = false,
}: {
  first: string;
  second: string | null;
  light?: boolean;
}) {
  const full = second ? `${first} ${second}` : first;
  const [count, setCount] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) {
      setCount(full.length);
      return;
    }
    if (count >= full.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), TYPE_DELAY);
    return () => clearTimeout(t);
  }, [count, full.length, reduced]);

  const visible = full.slice(0, count);
  const firstPart = visible.slice(0, first.length);
  const secondPart = second ? visible.slice(first.length + 1) : "";
  const caretOnSecond = !!second && count > first.length;

  const caret = <span aria-hidden="true" className="mtx-caret" />;

  return (
    <span
      aria-hidden="true"
      className={`mt-1 flex flex-col items-end font-mono text-[9px] leading-[1.5] tracking-[0.3em] uppercase whitespace-nowrap ${
        light ? "text-ink/50" : "text-gold/80"
      }`}
    >
      <span>
        {firstPart}
        {!caretOnSecond && caret}
      </span>
      {second && (
        <span className="tracking-[0.15em]" style={{ marginRight: 10 }}>
          {secondPart}
          {caretOnSecond && caret}
        </span>
      )}
    </span>
  );
}
