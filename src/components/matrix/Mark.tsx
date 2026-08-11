import type { SVGProps } from "react";

/**
 * MATRIX — Three logo directions, one wordmark.
 *
 *   I. Lattice   — four nodes weaving into a single connected M.
 *  II. Aperture  — two angular panels framing an X-thread of cognition.
 * III. Meridian  — minimal serif M dissected by a single gold meridian.
 *
 * All marks use strokeWidth scaled to viewBox 40, so they hold from 16px to 400px.
 */

type MarkProps = { size?: number; className?: string; accent?: string } & SVGProps<SVGSVGElement>;

/** The official MATRIX logo mark (panels + node lattice). */
export function LogoMark({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src="/matrix-mark.png"
      alt="MATRIX"
      width={size}
      height={size}
      className={`block select-none ${className}`}
      style={{ width: size, height: size, objectFit: "contain" }}
      draggable={false}
    />
  );
}

/** Horizontal lockup — mark + mātṛkā wordmark. */
export function LogoLockup({
  height = 30,
  tagline = "Evolution of Intelligence",
  showTagline = true,
  className = "",
  light = false,
}: {
  height?: number;
  tagline?: string;
  showTagline?: boolean;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className="inline-flex flex-col items-center">
      {light ? (
        <span
          className={`flex items-center gap-3 box-border border border-gold/40 p-2 ${className}`}
          style={{ height }}
        >
          <MarkLattice size={Math.round(height * 0.5)} className="text-ink shrink-0" />
          <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-ink">Matrix</span>
        </span>
      ) : (
        <img
          src="/cropped%20logo%20for%20now.png"
          alt="MATRIX · mātṛkā — Evolution of Intelligence"
          className={`block select-none w-auto ${className}`}
          style={{ height }}
          draggable={false}
        />
      )}
      {showTagline &&
        (() => {
          const i = tagline.lastIndexOf(" ");
          const first = i === -1 ? tagline : tagline.slice(0, i);
          const second = i === -1 ? null : tagline.slice(i + 1);
          return (
            <span
              className={`mt-1 flex flex-col items-end font-mono text-[9px] leading-[1.5] tracking-[0.3em] uppercase whitespace-nowrap ${
                light ? "text-ink/50" : "text-gold/80"
              }`}
            >
              <span>{first}</span>
              {second && (
                <span className="tracking-[0.15em]" style={{ marginRight: 10 }}>
                  {second}
                </span>
              )}
            </span>
          );
        })()}
    </div>
  );
}

/** Default (used in nav/footer) — alias of MarkLattice for backwards compatibility */
export function Mark(props: MarkProps) {
  return <MarkLattice {...props} />;
}

/** Direction I — connected lattice (currently in use) */
export function MarkLattice({ size = 22, className, accent = "currentColor", ...rest }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <circle cx="6" cy="8" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="34" cy="8" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="6" cy="32" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="34" cy="32" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="20" cy="20" r="1.4" fill={accent} stroke="none" />
      <path d="M6 8 L20 20 L34 8 M6 32 L20 20 L34 32 M6 8 L6 32 M34 8 L34 32" />
    </svg>
  );
}

/** Direction II — Aperture: two angled panels with an X of intelligence */
export function MarkAperture({
  size = 22,
  className,
  accent = "var(--color-gold)",
  ...rest
}: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {/* two opposing panels */}
      <path d="M5 6 L15 10 L15 34 L5 30 Z" fill={accent} fillOpacity="0.92" stroke="none" />
      <path d="M35 6 L25 10 L25 34 L35 30 Z" fill={accent} fillOpacity="0.92" stroke="none" />
      {/* x-thread of intelligence */}
      <path d="M15 10 L25 28 M15 28 L25 10" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="15" cy="10" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="25" cy="28" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="28" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="25" cy="10" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="20" cy="19" r="0.8" fill={accent} stroke="none" />
    </svg>
  );
}

/** Direction III — Meridian: structural M intersected by a gold horizon */
export function MarkMeridian({
  size = 22,
  className,
  accent = "var(--color-gold)",
  ...rest
}: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path d="M6 33 L6 7 L20 22 L34 7 L34 33" />
      <line x1="2" y1="22" x2="38" y2="22" stroke={accent} strokeWidth="0.6" />
      <circle cx="20" cy="22" r="1.2" fill={accent} stroke="none" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Mark size={20} />
      <span className="font-mono text-[11px] tracking-[0.28em] uppercase">Matrix</span>
    </span>
  );
}
