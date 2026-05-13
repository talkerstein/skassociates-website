import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "ink" | "bone";
  withWordmark?: boolean;
  href?: string | null;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

/**
 * Trestle mark — concept #16 from brand notes.
 * A bold T set inside a trestle / sawhorse frame.
 * Reads as "T" at small sizes, as "structure / authority" at large sizes.
 * No childish construction clip-art. No medieval seal. Just structure.
 */
export function Logo({
  variant = "ink",
  withWordmark = true,
  href = "/",
  className,
  size = "md",
}: LogoProps) {
  const isInk = variant === "ink";
  const stroke = isInk ? "#0A1628" : "#FBF8F2";
  const fill = isInk ? "#0A1628" : "#FBF8F2";

  const dim = size === "sm" ? 28 : size === "lg" ? 48 : size === "xl" ? 64 : 36;
  const wordmarkSize =
    size === "sm"
      ? "text-lg"
      : size === "lg"
      ? "text-2xl"
      : size === "xl"
      ? "text-3xl"
      : "text-xl";

  const mark = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top T crossbeam — wide, dominant, structural */}
        <rect
          x="3.5"
          y="7"
          width="41"
          height="6.5"
          rx="0.6"
          fill={fill}
        />
        {/* T stem */}
        <rect
          x="20.75"
          y="13.5"
          width="6.5"
          height="20.5"
          rx="0.5"
          fill={fill}
        />
        {/* Left support leg (angled outward) */}
        <path
          d="M 10.5 13.5 L 4.5 38.5"
          stroke={stroke}
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        {/* Right support leg (angled outward) */}
        <path
          d="M 37.5 13.5 L 43.5 38.5"
          stroke={stroke}
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        {/* Bottom base */}
        <rect
          x="3"
          y="38.5"
          width="42"
          height="3.5"
          rx="0.5"
          fill={fill}
        />
        {/* Diagonal cross-bracing — adds the "trestle" feel */}
        <path
          d="M 8.5 33 L 16.5 23"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M 39.5 33 L 31.5 23"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
      {withWordmark && (
        <span
          className={cn(
            "font-display font-semibold tracking-[-0.025em]",
            wordmarkSize,
            isInk ? "text-ink-900" : "text-bone-50",
          )}
        >
          Trestle
        </span>
      )}
    </span>
  );

  if (!href) return mark;

  return (
    <Link href={href} className="inline-flex items-center" aria-label="Trestle home">
      {mark}
    </Link>
  );
}
