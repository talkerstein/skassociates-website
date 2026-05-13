"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "secondaryDark" | "accent" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-ivory-50 hover:bg-navy-800 shadow-sm hover:shadow-md",
  secondary:
    "border border-navy-900/20 text-navy-900 hover:bg-navy-900 hover:text-ivory-50",
  secondaryDark:
    "border border-white/20 text-ivory-50 hover:bg-white hover:text-navy-900",
  accent:
    "bg-accent-600 text-white hover:bg-accent-500 shadow-sm hover:shadow-md",
  ghost:
    "text-navy-900 hover:bg-navy-900/5",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-[length:--font-size-body-sm] gap-1.5",
  md: "px-6 py-2.5 text-[length:--font-size-body-sm] gap-2",
  lg: "px-8 py-3.5 text-[length:--font-size-body] gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  arrow = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center font-medium rounded-lg",
    "transition-all duration-300 ease-[var(--ease-out-expo)]",
    "hover:scale-[1.02] active:scale-[0.98]",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900",
    "cursor-pointer select-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {children}
      {arrow && (
        <ChevronRight
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      )}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkProps } = props as ButtonAsLink;
    return (
      <Link href={href} className={clsx(classes, "group")} {...linkProps}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={clsx(classes, "group")} {...buttonProps}>
      {content}
    </button>
  );
}
