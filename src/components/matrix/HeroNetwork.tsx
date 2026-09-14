"use client";

import { useEffect, useRef } from "react";

/**
 * An ambient field for the hero — a low-node network that drifts with its
 * own momentum and wakes around the cursor, tracing gold threads toward it.
 * Canvas-driven to stay cheap; parks itself when off-screen; draws a single
 * static frame under reduced-motion.
 */
export function HeroNetwork({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -9999, y: -9999 };

    type Node = { x: number; y: number; vx: number; vy: number; gold: boolean };
    let nodes: Node[] = [];
    let raf = 0;
    let running = true;
    let w = 0;
    let h = 0;

    const LINK = 132;
    const MOUSE_LINK = 190;

    const seed = () => {
      nodes = Array.from({ length: 36 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        gold: Math.random() < 0.16,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK * LINK) {
            const alpha = (1 - Math.sqrt(d2) / LINK) * 0.14;
            ctx.strokeStyle = `rgba(236, 233, 226, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const mx = a.x - mouse.x;
        const my = a.y - mouse.y;
        const md2 = mx * mx + my * my;
        if (md2 < MOUSE_LINK * MOUSE_LINK) {
          const alpha = (1 - Math.sqrt(md2) / MOUSE_LINK) * 0.55;
          ctx.strokeStyle = `rgba(201, 161, 74, ${alpha.toFixed(3)})`;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.gold ? 1.7 : 1.1, 0, Math.PI * 2);
        ctx.fillStyle = n.gold ? "rgba(201, 161, 74, 0.85)" : "rgba(236, 233, 226, 0.5)";
        ctx.fill();
      }
    };

    const tick = () => {
      if (!running) return;
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 150 * 150) {
          n.x += dx * 0.0006;
          n.y += dy * 0.0006;
        }
        if (n.x < -24) n.x = w + 24;
        if (n.x > w + 24) n.x = -24;
        if (n.y < -24) n.y = h + 24;
        if (n.y > h + 24) n.y = -24;
      }
      draw();
      raf = requestAnimationFrame(tick);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reduced) draw();
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    resize();

    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running && !reduced && raf === 0) raf = requestAnimationFrame(tick);
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    if (!reduced) raf = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
