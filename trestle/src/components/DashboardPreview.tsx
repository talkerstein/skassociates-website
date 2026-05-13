"use client";

import {
  Search,
  Filter,
  MapPin,
  Bell,
  Zap,
  Droplets,
  Wind,
  Home,
  Waves,
  ChevronDown,
  Lock,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A believable, static product surface — used as the hero visual.
 * Built to feel like a real internal tool, not a marketing illustration.
 */
export function DashboardPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-bone-50 ring-1 ring-ink-900/10 shadow-card-lg",
        className,
      )}
    >
      {/* Top chrome */}
      <div className="flex items-center justify-between border-b border-ink-900/10 bg-ink-50/70 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
        </div>
        <span className="font-mono text-[11px] text-ink-500">trestle.work/feed</span>
        <span className="w-12" />
      </div>

      <div className="grid grid-cols-12">
        {/* Sidebar */}
        <aside className="col-span-3 hidden border-r border-ink-900/10 bg-ink-50/40 p-4 lg:block">
          <div className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-500">
            Trade
          </div>
          <ul className="mt-2.5 space-y-1 text-[13px]">
            {[
              { name: "Electrical", icon: Zap, count: 124, active: true },
              { name: "Plumbing", icon: Droplets, count: 89 },
              { name: "HVAC", icon: Wind, count: 71 },
              { name: "Roofing", icon: Home, count: 102 },
              { name: "Pool", icon: Waves, count: 38 },
            ].map((t) => (
              <li
                key={t.name}
                className={cn(
                  "flex items-center justify-between rounded-md px-2.5 py-1.5",
                  t.active
                    ? "bg-ink-900 text-bone-50"
                    : "text-ink-700 hover:bg-ink-900/[0.05]",
                )}
              >
                <span className="flex items-center gap-2">
                  <t.icon className="h-3.5 w-3.5" />
                  {t.name}
                </span>
                <span
                  className={cn(
                    "font-mono text-[11px]",
                    t.active ? "text-bone-200" : "text-ink-400",
                  )}
                >
                  {t.count}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-500">
            Territory
          </div>
          <ul className="mt-2.5 space-y-1 text-[13px] text-ink-700">
            {["Miami-Dade · All", "City of Miami", "Coral Gables", "Kendall"].map(
              (t, i) => (
                <li
                  key={t}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2.5 py-1.5",
                    i === 0 && "bg-forge-100/70 text-forge-700",
                  )}
                >
                  <MapPin className="h-3.5 w-3.5" />
                  {t}
                </li>
              ),
            )}
          </ul>

          <div className="mt-6 rounded-lg bg-ink-900 p-3 text-bone-100">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-spark-300">
              Seal remaining
            </p>
            <p className="mt-1 font-mono text-2xl font-semibold text-bone-50 tabular-nums">
              4 : 22 : 18
            </p>
            <p className="text-[11.5px] text-ink-300">days · hrs · min on project M2026-046382</p>
          </div>
        </aside>

        {/* Main feed */}
        <main className="col-span-12 lg:col-span-9">
          {/* Toolbar */}
          <div className="flex items-center gap-2 border-b border-ink-900/10 px-4 py-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-400" />
              <input
                readOnly
                value="200A service · ZIP 33126"
                className="h-8 w-full rounded-md border border-ink-900/10 bg-bone-50 pl-8 pr-3 text-[12.5px] text-ink-800 outline-none"
              />
            </div>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-md border border-ink-900/10 bg-bone-50 px-2.5 text-[12.5px] text-ink-700">
              <Filter className="h-3.5 w-3.5" /> Filters
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <button className="ml-auto inline-flex h-8 items-center gap-1.5 rounded-md bg-forge-500 px-2.5 text-[12.5px] font-medium text-bone-50">
              <Bell className="h-3.5 w-3.5" /> 6 new today
            </button>
          </div>

          {/* Header strip */}
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-ink-900/10 bg-ink-50/30 px-4 py-3">
            <div>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-ink-500">
                Electrical · Miami-Dade
              </p>
              <h4 className="text-[15px] font-semibold text-ink-900">
                Active projects — last 72 hours
              </h4>
            </div>
            <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
              <span className="inline-flex items-center gap-1.5 text-forge-700">
                <TrendingUp className="h-3.5 w-3.5" /> +18% wk/wk
              </span>
              <span>34 results</span>
            </div>
          </div>

          {/* Lead rows */}
          <ul className="divide-y divide-ink-900/10">
            {FEED_ROWS.map((row) => (
              <li
                key={row.id}
                className="grid grid-cols-12 items-center gap-3 px-4 py-3.5 transition-colors hover:bg-bone-100/40"
              >
                <div className="col-span-12 sm:col-span-5">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-500">
                    {row.id} · {row.issued}
                  </p>
                  <p className="text-[14px] font-medium text-ink-900">{row.scope}</p>
                  <p className="text-[12.5px] text-ink-500">{row.address}</p>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-500">
                    Contractor
                  </p>
                  <p className="text-[13px] text-ink-800">{row.contractor}</p>
                  <p className="font-mono text-[12px] text-forge-700">{row.phone}</p>
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-500">
                    Value
                  </p>
                  <p className="font-mono text-[13.5px] font-semibold text-ink-900">
                    ${row.value.toLocaleString()}
                  </p>
                </div>
                <div className="col-span-3 sm:col-span-2 flex flex-col items-end gap-1">
                  <span className="inline-flex items-center gap-1 rounded-md bg-spark-50 px-2 py-1 font-mono text-[11px] font-medium text-spark-700 ring-1 ring-inset ring-spark-500/20">
                    <Lock className="h-3 w-3" />
                    {row.remaining}
                  </span>
                  <button className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-700 hover:text-ink-900">
                    Claim →
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}

const FEED_ROWS = [
  {
    id: "M2026-046382",
    issued: "May 09 · 14:52",
    scope: "200A service entrance upgrade",
    address: "4528 NW 7th St, Miami 33126",
    contractor: "Manny's Electric LLC",
    phone: "(305) 555-0148",
    value: 14000,
    remaining: "4d 22h",
  },
  {
    id: "M2026-047301",
    issued: "May 11 · 09:14",
    scope: "Tenant fit-out · 6 sub-panels",
    address: "320 NW 24th St, Wynwood 33127",
    contractor: "Arco Electric Contractors",
    phone: "(786) 555-0418",
    value: 58400,
    remaining: "6d 22h",
  },
  {
    id: "M2026-047204",
    issued: "May 10 · 16:08",
    scope: "Pool equipment circuit + bonding",
    address: "915 Sevilla Ave, Coral Gables 33134",
    contractor: "Solano Pools & Spa",
    phone: "(305) 555-0254",
    value: 4800,
    remaining: "5d 19h",
  },
  {
    id: "M2026-047118",
    issued: "May 10 · 11:23",
    scope: "EV charger install · 60A circuit",
    address: "2110 Brickell Ave, Miami 33129",
    contractor: "BrightWatt Electric",
    phone: "(305) 555-0339",
    value: 3200,
    remaining: "5d 12h",
  },
];
