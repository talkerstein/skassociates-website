"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { clsx } from "clsx";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const links: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Spire", href: "/solutions/spire" },
      { label: "Adagio", href: "/solutions/adagio" },
      { label: "Implementation & Migration", href: "/solutions/implementation" },
      { label: "Training & Support", href: "/solutions/training" },
      { label: "Reporting & Process Improvement", href: "/solutions/reporting" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Distribution", href: "/industries/distribution" },
      { label: "Service Businesses", href: "/industries/service" },
      { label: "Not-for-Profit", href: "/industries/nonprofit" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

/* ------------------------------------------------------------------ */
/*  Desktop Dropdown                                                   */
/* ------------------------------------------------------------------ */

function DesktopDropdown({
  item,
  isActive,
}: {
  item: NavLink;
  isActive: boolean;
}) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  function enter() {
    clearTimeout(timeout.current);
    setOpen(true);
  }
  function leave() {
    timeout.current = setTimeout(() => setOpen(false), 150);
  }

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className={clsx(
          "flex items-center gap-1 text-[length:--font-size-body-sm] font-medium transition-colors duration-200 cursor-pointer",
          isActive ? "text-ivory-50" : "text-slate-300 hover:text-ivory-50"
        )}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          className={clsx(
            "w-3.5 h-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
          strokeWidth={2}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 pt-3 z-50"
          >
            <div className="min-w-[220px] rounded-xl bg-navy-800/95 backdrop-blur-xl shadow-elevated py-2">
              {item.children!.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-2.5 text-[length:--font-size-body-sm] text-slate-300 hover:text-ivory-50 hover:bg-white/5 transition-colors duration-150"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile Menu                                                        */
/* ------------------------------------------------------------------ */

function MobileAccordion({ item }: { item: NavLink }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="block py-3 text-[length:--font-size-body-lg] font-medium text-ivory-50 border-b border-white/5"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-3 text-[length:--font-size-body-lg] font-medium text-ivory-50 cursor-pointer"
      >
        {item.label}
        <ChevronDown
          className={clsx(
            "w-4 h-4 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-3 pl-4 space-y-1">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block py-2 text-[length:--font-size-body] text-slate-400 hover:text-ivory-50 transition-colors duration-150"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Scroll listener */
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-[var(--ease-out-expo)]",
        scrolled
          ? "bg-navy-900/95 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-navy-950/80 backdrop-blur-md"
      )}
    >
      <nav
        className={clsx(
          "mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 transition-all duration-500 ease-[var(--ease-out-expo)]",
          scrolled ? "h-16" : "h-20"
        )}
      >
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-baseline gap-0.5">
          <span className="text-[length:--font-size-body-lg] font-semibold text-ivory-50 tracking-tight">
            S. Kopstick
          </span>
          <span className="text-[length:--font-size-body-sm] font-light text-slate-400 ml-1.5">
            &amp; Associates
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((item) =>
            item.children ? (
              <DesktopDropdown
                key={item.href}
                item={item}
                isActive={isActive(item.href)}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "text-[length:--font-size-body-sm] font-medium transition-colors duration-200",
                  isActive(item.href)
                    ? "text-ivory-50"
                    : "text-slate-300 hover:text-ivory-50"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="/contact" variant="accent" size="sm" arrow>
            Book a Consultation
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="relative z-10 lg:hidden p-2 -mr-2 text-ivory-50 cursor-pointer"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.15 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-0 z-40 bg-navy-950 lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
              {/* Links */}
              <div className="flex-1">
                {links.map((item) => (
                  <MobileAccordion key={item.href} item={item} />
                ))}
              </div>

              {/* Contact info + CTA */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-slate-400 text-[length:--font-size-body-sm]">
                  <Phone className="w-4 h-4" />
                  <a href="tel:4167858637" className="hover:text-ivory-50 transition-colors">
                    416-785-8637
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-[length:--font-size-body-sm]">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:samuel@skassociates.ca" className="hover:text-ivory-50 transition-colors">
                    samuel@skassociates.ca
                  </a>
                </div>
                <div className="pt-4">
                  <Button href="/contact" variant="accent" size="lg" arrow className="w-full">
                    Book a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
