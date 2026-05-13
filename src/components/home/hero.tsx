"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EXPO },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: EXPO, delay: 0.4 },
  },
};

function DashboardMockup() {
  return (
    <div className="relative w-full">
      {/* Decorative connecting lines (behind everything) */}
      <svg
        viewBox="0 0 400 500"
        className="absolute -inset-12 w-[calc(100%+6rem)] h-[calc(100%+6rem)] opacity-[0.18] pointer-events-none"
        aria-hidden="true"
      >
        <motion.path
          d="M30 80 Q120 60 200 120 T380 180"
          stroke="currentColor"
          strokeWidth="0.6"
          className="text-accent-400"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, delay: 1.4, ease: EXPO }}
        />
        <motion.path
          d="M40 420 Q160 380 240 440 T380 380"
          stroke="currentColor"
          strokeWidth="0.6"
          className="text-slate-400"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, delay: 1.6, ease: EXPO }}
        />
      </svg>

      {/* Floating data point dots */}
      {[
        { top: "8%", left: "-3%", size: 8, delay: 1.8 },
        { top: "18%", right: "-4%", size: 6, delay: 2.0 },
        { bottom: "12%", left: "-5%", size: 10, delay: 2.2 },
        { bottom: "28%", right: "-2%", size: 5, delay: 2.4 },
      ].map((d, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="absolute rounded-full bg-accent-400/60"
          style={{
            top: d.top,
            left: d.left,
            right: d.right,
            bottom: d.bottom,
            width: d.size,
            height: d.size,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: d.delay, ease: EXPO }}
        />
      ))}

      {/* Second smaller card behind, peeking */}
      <motion.div
        className="absolute -bottom-10 -left-6 lg:-left-10 w-[55%] bg-ivory-50 rounded-xl shadow-elevated border border-navy-900/5 p-4 -rotate-[3deg] z-0"
        initial={{ opacity: 0, y: 20, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        transition={{ duration: 1, delay: 0.9, ease: EXPO }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-navy-600">
            Recent Activity
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
        </div>
        <ul className="space-y-2">
          <li className="flex items-center justify-between text-[0.7rem]">
            <span className="text-navy-800">PO #4821 received</span>
            <span className="text-slate-500">2m</span>
          </li>
          <li className="flex items-center justify-between text-[0.7rem]">
            <span className="text-navy-800">Invoice posted</span>
            <span className="text-slate-500">14m</span>
          </li>
          <li className="flex items-center justify-between text-[0.7rem]">
            <span className="text-navy-800">Stock adjustment</span>
            <span className="text-slate-500">38m</span>
          </li>
        </ul>
      </motion.div>

      {/* Main dashboard card */}
      <motion.div
        whileHover={{ rotate: 0 }}
        transition={{ duration: 0.6, ease: EXPO }}
        className="relative z-10 bg-ivory-50 rounded-2xl shadow-elevated overflow-hidden rotate-[1.5deg] border border-navy-900/5"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-ivory-200 border-b border-navy-900/5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-3 px-3 py-1 rounded-md bg-ivory-50 border border-navy-900/5 text-[0.65rem] text-slate-500 truncate text-center">
            spire.skassociates.ca/reports
          </div>
        </div>

        {/* Dashboard body */}
        <div className="p-5 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-navy-900">
              Operations Overview
            </h3>
            <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-medium text-green-700 bg-green-50 border border-green-200/60 rounded-full px-2 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Live
            </span>
          </div>

          {/* KPI mini-cards */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Open Orders", value: "247" },
              { label: "AR > 60", value: "$18.4K" },
              { label: "Inv Turns", value: "6.2x" },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-lg bg-ivory-100 border border-navy-900/5 px-2.5 py-2"
              >
                <div className="text-[0.6rem] uppercase tracking-wider text-slate-500 mb-0.5">
                  {kpi.label}
                </div>
                <div className="text-sm font-semibold text-navy-900 tabular-nums">
                  {kpi.value}
                </div>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="rounded-lg bg-ivory-100 border border-navy-900/5 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[0.65rem] font-medium text-navy-800">
                Revenue · Last 7 Days
              </span>
              <span className="text-[0.6rem] text-slate-500 tabular-nums">
                +12.4%
              </span>
            </div>
            <div className="flex items-end gap-1.5 h-16">
              {[42, 58, 36, 72, 54, 80, 66].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{
                    duration: 0.8,
                    delay: 1.2 + i * 0.08,
                    ease: EXPO,
                  }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-accent-600 to-accent-400"
                />
              ))}
            </div>
          </div>

          {/* Data table */}
          <div className="rounded-lg border border-navy-900/5 overflow-hidden">
            <div className="grid grid-cols-[1fr_auto_auto] gap-3 px-3 py-1.5 bg-ivory-200 text-[0.6rem] uppercase tracking-wider text-slate-500 font-medium">
              <span>Customer</span>
              <span className="text-right">Amount</span>
              <span className="text-right">Status</span>
            </div>
            {[
              { name: "Northwind Co.", amt: "$4,820", status: "Paid", tone: "green" },
              { name: "Acme Distribution", amt: "$12,150", status: "Open", tone: "amber" },
              { name: "Hartwell Mfg.", amt: "$2,940", status: "Paid", tone: "green" },
              { name: "Westline Group", amt: "$8,620", status: "Overdue", tone: "red" },
            ].map((row) => (
              <div
                key={row.name}
                className="grid grid-cols-[1fr_auto_auto] gap-3 px-3 py-2 text-[0.7rem] border-t border-navy-900/5 items-center"
              >
                <span className="text-navy-900 truncate">{row.name}</span>
                <span className="text-navy-800 tabular-nums">{row.amt}</span>
                <span
                  className={`text-[0.6rem] font-medium rounded-full px-1.5 py-0.5 ${
                    row.tone === "green"
                      ? "bg-green-50 text-green-700"
                      : row.tone === "amber"
                      ? "bg-amber-50 text-amber-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      {/* Gradient + texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/3 -left-32 w-[520px] h-[520px] rounded-full bg-accent-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-navy-700/30 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)] py-24 lg:py-28">
          {/* LEFT — 3/5 */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3 max-w-2xl"
          >
            <motion.div
              variants={fadeUp}
              className="eyebrow text-accent-400 mb-6"
            >
              Toronto · Serving Canada &amp; Beyond
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ivory-50 text-balance"
            >
              Your software should work{" "}
              <span className="text-accent-400 italic">for</span> your business.
              Not the other way around.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 text-lg leading-relaxed text-slate-300 max-w-xl"
            >
              Expert implementation, training, and ongoing support for Spire
              and Adagio — so your accounting and operations software actually
              delivers what it promised.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-accent-500 hover:bg-accent-600 text-white font-medium px-7 py-3.5 rounded-lg transition-all duration-300 shadow-lg shadow-accent-500/20 hover:shadow-accent-600/30"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/assessment"
                className="group inline-flex items-center gap-2 text-ivory-100 hover:text-ivory-50 font-medium px-6 py-3.5 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/[0.04] transition-all duration-300"
              >
                Take the Fit Assessment
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400"
            >
              {[
                "30+ Years Experience",
                "100+ Businesses Supported",
                "Spire & Adagio Certified",
              ].map((item, i) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  <span>{item}</span>
                  {i < 2 && (
                    <span className="ml-3 text-slate-600 select-none">·</span>
                  )}
                </span>
              ))}
            </motion.div>

            {/* Founder card */}
            <motion.div
              variants={fadeUp}
              className="mt-8 inline-flex items-center gap-4 rounded-xl bg-navy-800/40 border border-white/5 px-4 py-3"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=faces"
                alt="Samuel Kopstick"
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover border border-white/10"
              />
              <div className="leading-tight">
                <div className="text-sm font-semibold text-ivory-100">
                  Samuel Kopstick
                </div>
                <div className="text-xs text-slate-400">
                  Founder &amp; Principal Consultant
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — 2/5 */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 relative"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
