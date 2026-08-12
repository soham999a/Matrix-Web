import Link from "next/link";

const liveProducts = [
  { t: "MindMuse Suite", href: "http://fm.matrka.net/" },
  { t: "AlgoVista", href: "https://algovista.matrka.net/" },
];

export function LiveProductsPill() {
  return (
    <aside className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40">
      <div className="group flex items-center gap-4 border border-gold/40 bg-background/90 backdrop-blur-sm px-5 py-3 shadow-2xl hover:border-gold transition-colors duration-500">
        <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.24em] uppercase text-gold whitespace-nowrap">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          Live now
        </span>
        <span className="hidden sm:block h-4 w-px bg-border" />
        <nav className="hidden sm:flex items-center gap-3">
          {liveProducts.map((p) => (
            <a
              key={p.t}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap"
            >
              {p.t} ↗
            </a>
          ))}
        </nav>
        <Link
          href="/products"
          className="sm:hidden font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap"
        >
          2 live ↗
        </Link>
      </div>
    </aside>
  );
}
