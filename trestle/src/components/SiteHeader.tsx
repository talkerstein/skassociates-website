"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LinkButton } from "./Button";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/sample-opportunities", label: "Active projects" },
  { href: "/for/electrical-contractors", label: "For trades" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-bone-50/85 backdrop-blur-md border-b border-ink-900/10"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo size="md" />
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-[14.5px] font-medium text-ink-700 transition-colors hover:bg-ink-900/[0.04] hover:text-ink-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <LinkButton href="/demo" variant="ghost" size="sm">
            Book a demo
          </LinkButton>
          <LinkButton href="/get-started" variant="primary" size="sm" withArrow>
            Get instant access
          </LinkButton>
        </div>
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-900 hover:bg-ink-900/[0.06] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-x-0 top-16 z-50 border-t border-ink-900/10 bg-bone-50 lg:hidden">
          <div className="space-y-1 px-5 py-6">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-900/[0.04]"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 grid gap-2 border-t border-ink-900/10 pt-4">
              <LinkButton
                href="/demo"
                variant="secondary"
                size="md"
                className="w-full"
              >
                Book a demo
              </LinkButton>
              <LinkButton
                href="/get-started"
                variant="primary"
                size="md"
                withArrow
                className="w-full"
              >
                Get instant access
              </LinkButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
