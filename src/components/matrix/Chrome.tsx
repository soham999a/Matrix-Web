"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoLockup } from "./Mark";

const nav = [
  { to: "/research", label: "Research" },
  { to: "/consulting", label: "Consulting" },
  { to: "/products", label: "Products" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/agency", label: "Agency" },
  { to: "/manifesto", label: "Manifesto" },
] as const;

const researchSubLinks = [
  { t: "Whitepapers", to: "/research#whitepapers" },
  { t: "Frameworks", to: "/research#frameworks" },
  { t: "Case Studies", to: "/research#case-studies" },
  { t: "Journal", to: "/journal" },
] as const;

function FooterItem({ label }: { label: string }) {
  return (
    <li className="flex items-baseline gap-2.5 text-sm">
      <span className="font-mono text-gold">◌</span>
      <span className="text-ink/70">{label}</span>
    </li>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the menu whenever the route changes (link tap or browser nav).
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the menu is open; close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14 h-20 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center text-foreground shrink-0"
          aria-label="Matrix — home"
        >
          <LogoLockup height={52} className="h-10! sm:h-11! lg:h-[52px]!" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {nav.map((n) => {
            const active = pathname === n.to;
            const linkClass = `font-mono text-[10px] tracking-[0.22em] uppercase transition-colors duration-500 ${
              active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`;
            if (n.to === "/research") {
              return (
                <div key={n.to} className="group relative">
                  <Link href={n.to} className={linkClass}>
                    {n.label}
                  </Link>
                  <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 absolute left-0 top-full pt-4 z-50 transition-all duration-300">
                    <div className="border border-border bg-background min-w-60 shadow-2xl">
                      {researchSubLinks.map((s) => (
                        <Link
                          key={s.to}
                          href={s.to}
                          className="block px-5 py-3 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04] transition-colors duration-300"
                        >
                          {s.t}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link key={n.to} href={n.to} className={linkClass}>
                {n.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/about"
          className="hidden lg:block font-mono text-[10px] tracking-[0.22em] uppercase text-foreground border-b border-gold/0 hover:border-gold transition-colors duration-500"
        >
          About · Contact
        </Link>

        {/* mobile / tablet menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden inline-flex flex-col items-end justify-center gap-[7px] w-11 h-11 -mr-2"
        >
          <span
            className={`block h-px bg-foreground transition-transform duration-300 ${
              open ? "translate-y-[4px] rotate-45" : ""
            }`}
            style={{ width: open ? 22 : 24 }}
          />
          <span
            className={`block h-px bg-foreground transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
            style={{ width: 16 }}
          />
          <span
            className={`block h-px bg-foreground transition-transform duration-300 ${
              open ? "-translate-y-[4px] -rotate-45" : ""
            }`}
            style={{ width: open ? 22 : 20 }}
          />
        </button>
      </div>

      {/* mobile / tablet menu */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-background border-t border-border overflow-y-auto"
        >
          <nav className="mx-auto max-w-[1440px] px-5 sm:px-8 pb-16" aria-label="Primary mobile">
            <ul>
              {nav.map((n, i) => (
                <li
                  key={n.to}
                  className="border-b border-border/60 rise"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <Link
                    href={n.to}
                    className="group flex items-baseline gap-5 py-5 active:opacity-60 transition-opacity"
                  >
                    <span className="font-mono text-[10px] tracking-[0.28em] text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-4xl sm:text-5xl tracking-tight leading-none group-hover:italic transition-all duration-300">
                      {n.label}
                    </span>
                    <span className="ml-auto font-mono text-[10px] text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </Link>
                  {n.to === "/research" && (
                    <ul className="pb-6 pl-12 space-y-3">
                      {researchSubLinks.map((s) => (
                        <li key={s.to}>
                          <Link
                            href={s.to}
                            className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                          >
                            {s.t} →
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-5 rise" style={{ animationDelay: "380ms" }}>
              <Link
                href="/about"
                className="font-mono text-[11px] tracking-[0.28em] uppercase text-foreground border-b border-gold/0 hover:border-gold transition-colors duration-500 w-fit"
              >
                About · Contact
              </Link>
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
                M · A · T · R · I · X
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-fog text-ink mt-24 lg:mt-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14 py-16 md:py-20 grid grid-cols-12 gap-6 sm:gap-8">
        <div className="col-span-12 md:col-span-3">
          <LogoLockup height={74} />
          <p className="font-display text-2xl leading-tight mt-8 max-w-xs text-ink">
            Designing intelligence.
            <br />
            <span className="text-ink/60 italic">Invisible systems. Visible impact.</span>
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/70">
            <li>
              <Link href="/about" className="hover:text-ink">
                About · Contact
              </Link>
            </li>
            <li>
              <Link href="/manifesto" className="hover:text-ink">
                Manifesto
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <p className="eyebrow mb-5 !text-ink/60">Research &amp; Insights</p>
          <ul className="space-y-2.5">
            <FooterItem label="Case Studies" />
            <FooterItem label="Research Notes" />
            <FooterItem label="Whitepapers" />
            <FooterItem label="Frameworks" />
            <FooterItem label="Publications" />
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <p className="eyebrow mb-5 !text-ink/60">Stay Connected</p>
          <ul className="space-y-2.5">
            <FooterItem label="Announcements" />
            <FooterItem label="New Research" />
            <FooterItem label="Product Updates" />
          </ul>
        </div>
        <div className="col-span-12 md:col-span-2">
          <p className="eyebrow mb-5 !text-ink/60">Newsletters and Blog</p>
          <ul className="space-y-2.5">
            <li>
              <Link href="/newsletter" className="group flex items-baseline gap-2.5 text-sm">
                <span className="font-mono text-gold">◌</span>
                <span className="text-ink/70 group-hover:text-ink transition-colors">
                  Newsletter
                </span>
              </Link>
            </li>
            <li>
              <Link href="/journal" className="group flex items-baseline gap-2.5 text-sm">
                <span className="font-mono text-gold">◌</span>
                <span className="text-ink/70 group-hover:text-ink transition-colors">Blog</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-3">
          <p className="eyebrow mb-5 !text-ink/60">Correspondence</p>
          <p className="text-sm text-ink/70 leading-relaxed">
            For research collaboration, counsel, or careers — write to us.
          </p>
          <a
            href="mailto:system@matrka.net"
            className="block mt-4 font-display text-2xl text-ink hover:text-gold transition-colors"
          >
            system@matrka.net
          </a>
          <a
            href="tel:+919875663417"
            className="block mt-2 text-sm text-ink/70 hover:text-ink transition-colors"
          >
            +91 98756 63417
          </a>
          <p className="mt-6 eyebrow !text-ink/60">Studio</p>
          <p className="mt-2 text-sm text-ink/70 leading-relaxed">Kolkata, India</p>
        </div>
        <div className="col-span-12 mt-16 pt-8 border-t border-ink/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink/50">
            © {new Date().getFullYear()} Matrix
          </p>
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink/50">
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
      <main className="pt-20">{children}</main>
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
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">{children}</div>
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
