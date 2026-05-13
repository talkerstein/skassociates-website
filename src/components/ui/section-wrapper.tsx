import { clsx } from "clsx";
import type { ReactNode } from "react";

type Background = "light" | "dark" | "ivory" | "navy";
type Padding = "default" | "large" | "compact";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: Background;
  padding?: Padding;
}

const backgroundStyles: Record<Background, string> = {
  light: "bg-white text-navy-900",
  dark: "bg-slate-800 text-ivory-50",
  ivory: "bg-ivory-100 text-navy-900",
  navy: "bg-navy-950 text-ivory-50",
};

const paddingStyles: Record<Padding, string> = {
  compact: "py-12 md:py-16",
  default: "py-16 md:py-24",
  large: "py-24 md:py-32",
};

export function SectionWrapper({
  children,
  className,
  id,
  background = "light",
  padding = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={clsx(backgroundStyles[background], paddingStyles[padding], className)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
