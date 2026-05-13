import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "spark" | "inverse";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight " +
  "transition-all duration-200 rounded-md focus:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink-900 text-bone-50 hover:bg-ink-800 active:bg-ink-950 " +
    "focus-visible:ring-ink-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_1px_0_rgba(10,22,40,0.16),0_8px_24px_-12px_rgba(10,22,40,0.45)]",
  secondary:
    "bg-bone-50 text-ink-900 ring-1 ring-inset ring-ink-900/15 hover:ring-ink-900/35 hover:bg-bone-100 " +
    "focus-visible:ring-ink-400",
  ghost:
    "text-ink-700 hover:text-ink-900 hover:bg-ink-900/[0.04]",
  spark:
    "bg-spark-500 text-bone-50 hover:bg-spark-600 active:bg-spark-700 " +
    "focus-visible:ring-spark-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_24px_-10px_rgba(220,111,28,0.55)]",
  inverse:
    "bg-bone-50 text-ink-900 hover:bg-bone-100 active:bg-bone-200 " +
    "focus-visible:ring-bone-200",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" strokeWidth={2.25} />}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  size = "md",
  withArrow,
  className,
  href,
  children,
  ...rest
}: CommonProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  if (isExternal) {
    return (
      <a
        href={href}
        {...rest}
        className={cn(base, variants[variant], sizes[size], className)}
      >
        {children}
        {withArrow && <ArrowRight className="h-4 w-4" strokeWidth={2.25} />}
      </a>
    );
  }
  return (
    <Link
      href={href}
      {...(rest as any)}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" strokeWidth={2.25} />}
    </Link>
  );
}
