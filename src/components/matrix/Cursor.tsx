"use client";

import { useEffect, useRef, useState } from "react";

/**
 * MATRIX — the gold reticle.
 *
 * On precision pointers (mouse/trackpad) the native cursor is replaced by a
 * quiet instrument: a hairline ring with a gold node at its centre. The node
 * leads, the ring follows. The ring contracts and the node swells over any
 * interactive element; the whole reticle compresses on press.
 */

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [down, setDown] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [inverted, setInverted] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    document.documentElement.classList.add("cursor-none");

    const isInteractive = (el: Element | null) =>
      !!el?.closest("a,button,input,textarea,select,[role='button'],[data-cursor]");

    const target = { x: -200, y: -200 };
    const current = { x: -200, y: -200 };
    let raf = 0;

    const loop = () => {
      current.x += (target.x - current.x) * 0.24;
      current.y += (target.y - current.y) * 0.24;
      nodeRef.current?.style.setProperty(
        "transform",
        `translate3d(${current.x.toFixed(2)}px, ${current.y.toFixed(2)}px, 0)`,
      );
      ringRef.current?.style.setProperty(
        "transform",
        `translate3d(${current.x.toFixed(2)}px, ${current.y.toFixed(2)}px, 0)`,
      );
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setHidden(false);
      const el = e.target instanceof Element ? e.target : null;
      setHovering(!!isInteractive(el));
      setInverted(!!el?.closest("[data-cursor-invert]"));
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);
    const onLeave = () => setHidden(true);

    raf = requestAnimationFrame(loop);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("cursor-none");
    };
  }, []);

  if (!enabled) return null;

  const ringScale = down ? 0.9 : hovering ? 0.62 : 1;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      {/* follower ring — lagged, contracts over interactives */}
      <div
        ref={ringRef}
        className="fixed left-0 top-0 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        style={{
          opacity: hidden ? 0 : 1,
          transition: "opacity 300ms ease",
          willChange: "transform",
        }}
      >
        <div
          className="flex h-full w-full items-center justify-center rounded-full border-[1px] transition-transform duration-300 ease-out"
          style={{
            borderColor: inverted
              ? hovering
                ? "rgba(23,19,12,0.95)"
                : "rgba(23,19,12,0.65)"
              : hovering
                ? "rgba(201,161,74,0.95)"
                : "rgba(201,161,74,0.65)",
            transform: `scale(${ringScale})`,
          }}
        >
          <span
            className="block h-1 w-1 border"
            style={{ borderColor: inverted ? "rgba(23,19,12,0.75)" : "transparent" }}
          />
        </div>
      </div>
      {/* leader node — immediate, swells over interactives */}
      <div
        ref={nodeRef}
        className="fixed left-0 top-0 flex h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        style={{
          opacity: hidden ? 0 : 1,
          transition: "opacity 300ms ease",
          willChange: "transform",
        }}
      >
        <span
          className="block rounded-full transition-transform duration-300 ease-out"
          style={{
            backgroundColor: inverted ? "var(--color-ink)" : "var(--color-gold)",
            width: hovering ? 5 : 3,
            height: hovering ? 5 : 3,
            transform: down ? "scale(0.8)" : undefined,
          }}
        />
      </div>
    </div>
  );
}
