"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoLockup } from "./Mark";

const nav = [
  { to: "/research", label: "Research" },
  { to: "/consulting", label: "Consulting" },
  { to: "/products", label: "Products" },
  { to: "/agency", label: "Agency" },
  { to: "/journal", label: "Journal" },
  { to: "/manifesto", label: "Manifesto" },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-14 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center text-foreground"
          aria-label="Matrix — home"
        >
          <LogoLockup height={60} />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                href={n.to}
                className={`font-mono text-[10px] tracking-[0.22em] uppercase transition-colors duration-500 ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/about"
          className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground border-b border-gold/0 hover:border-gold transition-colors duration-500"
        >
          About · Contact
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-14 py-20 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <LogoLockup height={64} />
          <p className="font-display text-2xl leading-tight mt-8 max-w-xs">
            Designing intelligence.
            <br />
            <span className="text-muted-foreground italic">Invisible systems. Visible impact.</span>
          </p>
        </div>
        <div className="col-span-6 md:col-span-2">
          <p className="eyebrow mb-5">Practices</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/research" className="hover:text-foreground">
                Research
              </Link>
            </li>
            <li>
              <Link href="/consulting" className="hover:text-foreground">
                Consulting
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-foreground">
                Products
              </Link>
            </li>
            <li>
              <Link href="/agency" className="hover:text-foreground">
                AI Agency
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <p className="eyebrow mb-5">Studio</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link href="/journal" className="hover:text-foreground">
                Journal
              </Link>
            </li>
            <li>
              <Link href="/manifesto" className="hover:text-foreground">
                Manifesto
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-4">
          <p className="eyebrow mb-5">Correspondence</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            For research collaboration, counsel, or careers — write to us.
          </p>
          <a
            href="mailto:system@matrka.net"
            className="block mt-4 font-display text-2xl hover:text-gold transition-colors"
          >
            system@matrka.net
          </a>
          <a
            href="tel:+919875663417"
            className="block mt-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            +91 98756 63417
          </a>
          <p className="mt-6 eyebrow">Studio</p>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Kolkata, India</p>
        </div>
        <div className="col-span-12 mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            © {new Date().getFullYear()} Matrix
          </p>
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            Cohered by design
          </p>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}

export function Section({
  children,
  className = "",
  variant = "dark",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "paper";
  id?: string;
}) {
  return (
    <section id={id} className={`${variant === "paper" ? "paper" : ""} ${className}`}>
      <div className="mx-auto max-w-[1440px] px-8 lg:px-14">{children}</div>
    </section>
  );
}

export function Eyebrow({ index, children }: { index?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      {index && <span className="font-mono text-[10px] tracking-[0.28em] text-gold">{index}</span>}
      <span className="rule-gold" />
      <span className="eyebrow !text-foreground/70">{children}</span>
    </div>
  );
}
