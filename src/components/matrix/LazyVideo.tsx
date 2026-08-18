"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  poster?: string;
  src: string;
  type?: string;
  className?: string;
};

export function LazyVideo({ poster, src, type = "video/mp4", className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {loaded && (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          className="h-full w-full object-cover opacity-40"
        >
          <source src={src} type={type} />
        </video>
      )}
    </div>
  );
}
