import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  as: Tag = "div",
  size = "default",
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  size?: "default" | "narrow" | "wide";
}) {
  const sizes = {
    narrow: "max-w-4xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  } as const;
  return (
    // @ts-expect-error dynamic element
    <Tag className={cn("mx-auto px-5 sm:px-8", sizes[size], className)}>
      {children}
    </Tag>
  );
}

export function SectionLabel({
  children,
  variant = "ink",
  className,
}: {
  children: React.ReactNode;
  variant?: "ink" | "bone" | "spark" | "forge";
  className?: string;
}) {
  const variants = {
    ink: "text-ink-600",
    bone: "text-bone-200",
    spark: "text-spark-600",
    forge: "text-forge-600",
  };
  const dotVariants = {
    ink: "bg-ink-400",
    bone: "bg-bone-300",
    spark: "bg-spark-500",
    forge: "bg-forge-500",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em]",
        variants[variant],
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", dotVariants[variant])} />
      {children}
    </span>
  );
}
