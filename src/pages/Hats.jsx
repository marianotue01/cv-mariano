/*
==================================================
File: Hats.jsx
Summary:
- Input: User navigates to the "Hats" page.
- Process:
  1. Uses React Router's `useNavigate` for backward navigation.
  2. Renders a full-page container with padding, background, font styling, and readable line spacing.
  3. Adds a floating "Back" button to navigate to the previous page.
  4. Displays the main page title explaining the "Three Hats" concept.
  5. Renders multiple content sections representing different roles/tasks:
     - Roadmap
     - Customer Facing
     - Day to Day
     - Deliverables
     - Application & Product Owner
     - Agile Coach/Champion
     Each section includes a heading, emoji icon, and a list of responsibilities/tasks.
  6. Decorative images placed behind content using absolute positioning and opacity.
- Output: Visually structured page summarizing Mariano’s roles/“hats” with navigation and visual styling.
==================================================
*/

import React from "react";

const sections = [
  {
    title: "Roadmap",
    icon: "🧭",
    accent: "from-cyan-500 to-blue-600",
    items: [
      "Make the feature roadmap visible to all stakeholders and dev team",
      "Prioritize product requirements for development",
      "Manage and groom the backlog efficiently",
      "Track progress and ensure timely feature releases",
      "Plan strategic feature launches"
    ]
  },
  {
    title: "Customer facing",
    icon: "🤝",
    accent: "from-violet-500 to-fuchsia-600",
    items: [
      "Translate customer needs into actionable product features",
      "Identify true customer problems vs perceived wants",
      "Convert customer language into technical requirements"
    ]
  },
  {
    title: "Day to day",
    icon: "⚙️",
    accent: "from-emerald-500 to-teal-600",
    items: [
      "Advocate for customers with Product Owners and development teams",
      "Ensure all Epics/Features/Stories have correct acceptance criteria",
      "Foster collaboration across Product Owners and dev teams",
      "Prioritize and resolve defects or bugs quickly",
      "Monitor Azure subscriptions and optimize costs/resources"
    ]
  },
  {
    title: "Deliverables",
    icon: "📦",
    accent: "from-amber-500 to-orange-600",
    items: [
      "Define and communicate product vision",
      "Create problem statements and scenarios",
      "Maintain and update product roadmaps",
      "Keep strategic backlog current – Epics & Features",
      "Build Permits presentations",
      "Prepare supporting documents for all deliverables",
      "Manage Product Increments"
    ]
  },
  {
    title: "Application & Product Owner",
    icon: "🎩",
    accent: "from-slate-500 to-zinc-700",
    items: [
      "Resiliency & Failover – Manage timelines and CPOF issues",
      "Monitor IT Risk Central (ITRC) for automated break detection",
      "Maintain up-to-date Application Inventory (lifecycle, roles, components)",
      "Approve/reject access entitlements for products",
      "Participate in Agile ceremonies",
      "Keep execution backlog up-to-date – User Stories",
      "Manage release processes efficiently"
    ]
  },
  {
    title: "As Agile Coach/Champion",
    icon: "🚀",
    accent: "from-sky-500 to-indigo-600",
    items: [
      "Guide teams through their Agile transformation journey (SM, PO, PM experience)",
      "Actively contribute to company Agile Communities of Practice",
      "Coordinate Product Increment (PI) planning and execution",
      "Mentor team members on Agile best practices and continuous improvement"
    ]
  }
];

const ThreeHatsPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.25),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.2),_transparent_35%)]" />
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="animate-float-slow absolute -left-16 top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="animate-float-delay absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.7)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-cyan-300">
            <span className="h-px w-10 bg-cyan-400" />
            How I work
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="flex items-center gap-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
                <span>I wear three hats</span>
                <img src="/hat.png" alt="" className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12" />
              </h1>
              <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
                Strategy, execution, and team enablement come together in one role: I connect customer needs, product priorities, and agile delivery into measurable outcomes.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100">
              <span className="text-xl">✨</span>
              Product • Agile • Growth
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          {sections.map((section, index) => (
            <RoleCard key={section.title} {...section} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const RoleCard = ({ title, icon, items, accent, index }) => (
  <article
    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_18px_70px_rgba(15,23,42,0.45)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 sm:p-6"
    style={{ animationDelay: `${index * 120}ms` }}
  >
    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} />
    <div className="relative z-10">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-xl shadow-lg`}>
            {icon}
          </div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
        </div>
        <span className="rounded-full border border-white/10 bg-slate-900/50 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
          focus
        </span>
      </div>

      <ul className="space-y-3 text-sm leading-6 text-slate-200">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

export default ThreeHatsPage;
