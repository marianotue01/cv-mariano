/*
==================================================
File: Amplitude.jsx
Summary:
- Input: User navigates to the Amplitude page.
- Process:
  1. Uses React Router's `useNavigate` to allow backward navigation.
  2. Renders a full-page container with padding, background, and font styling.
  3. Adds a fixed "Back" button in the top-right corner that navigates to the previous page when clicked.
  4. Displays a page title for the Amplitude dashboard.
  5. Embeds an Amplitude analytics dashboard via an iframe.
- Output: Shows the Amplitude dashboard in a full-page layout with a floating back button for navigation.
==================================================
*/

import React from "react";
import { useNavigate } from "react-router-dom";

const metrics = [
  { label: "Portfolio views", value: "8.4K", tone: "cyan" },
  { label: "Engagement", value: "71%", tone: "violet" },
  { label: "Return rate", value: "46%", tone: "emerald" },
  { label: "AI interactions", value: "2.1K", tone: "amber" },
];

export default function Amplitude() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.2),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_30%)]" />
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="animate-float-slow absolute -left-16 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="animate-float-delay absolute -right-12 bottom-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-end">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="z-20 inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.5)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-slate-800/80"
          >
            Back
          </button>
        </div>

        <header className="mb-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.7)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Product intelligence
            </div>
          </div>

          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                Analytics in motion.
              </h1>
              <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
                Explore the product signals behind the work, from adoption and engagement to the moments that shape the roadmap.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100">
              <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400" aria-hidden="true" />
              Amplitude dashboard
            </div>
          </div>
        </header>

        <section className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.35)] backdrop-blur-xl">
              <div className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-400">{metric.label}</div>
              <div className="flex items-end justify-between gap-3">
                <span className="text-3xl font-black tracking-tight text-white">{metric.value}</span>
                <span className={`inline-flex h-2.5 w-2.5 rounded-full ${
                  metric.tone === "cyan" ? "bg-cyan-400" :
                  metric.tone === "violet" ? "bg-violet-400" :
                  metric.tone === "emerald" ? "bg-emerald-400" : "bg-amber-400"
                }`} />
              </div>
            </div>
          ))}
        </section>

        <section className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/50 p-2 shadow-[0_18px_70px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-3">
          <div className="mb-2 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
            <span className="font-medium">Portfolio dashboard</span>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
              Live
            </span>
          </div>

          <iframe
            src="https://app.eu.amplitude.com/analytics/share/477d7de2cde841179543b1fe4ce3f779"
            className="min-h-[72vh] w-full rounded-2xl border-0 bg-white"
            title="Amplitude Dashboard"
          />
        </section>
      </main>
    </div>
  );
}
