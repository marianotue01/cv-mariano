/*
==================================================
File: Home.jsx
Summary:
- Input: User navigates to the home page of the CV Mariano PoC.
- Process:
  1. Imports React, routing, and reusable components.
  2. Imports static CV data (competencies, experience, certifications, education, languages).
  3. Defines global keywords to highlight in the text.
  4. Integrates Amplitude analytics via a script in useEffect.
  5. Renders main container with profile image, header info, and navigation buttons.
  6. Renders CV sections using the Section component:
     - About (AI-generated summary)
     - Core Competencies
     - Experience (with decorative backgrounds)
     - Certifications
     - Education
     - Languages
  7. Includes extra components: ChatBot and ExperienceTimeline.
- Output: Full interactive CV page with dynamic content, navigation, analytics, and AI-enhanced features.
==================================================
*/

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import ChatBot from "../components/ChatBot";
import ExperienceTimeline from "../components/ExperienceTimeline";
import AudioPresentation from "../components/AudioPresentation";
import CvSummary from "../components/CvSummary";
import Section from "../components/Section";
import TextWithKeywords from "../components/TextWithKeywords";

// Data
import {
  coreCompetencies,
  experience,
  certifications,
  education,
  languages,
} from "../data/data";

// -------------------------------------------------
// Global keywords: terms to highlight in the CV
// -------------------------------------------------
const globalKeywords = ["Cloud", "Leadership", "Microservices", "KPIs", "Product Strategy", "Data Governance", "LLM", "Knowledge Graphs", "Graph RAG", "Digital Transformation"];

const companyBadges = {
  "Takeda Pharmaceuticals": { src: "/company-logos/takeda.svg", alt: "Takeda" },
  "EY Poland": { src: "/company-logos/ey.svg", alt: "EY" },
  "J.P. Morgan": { src: "/company-logos/jpmorgan.svg", alt: "JPMorgan" },
  ExxonMobil: { src: "/company-logos/exxonmobil.svg", alt: "ExxonMobil" },
  IBM: { src: "/company-logos/ibm.svg", alt: "IBM" },
};

export default function Home() {
  // -------------------------------------------------
  // Analytics integration with Amplitude
  // Adds a script to the page that tracks user behavior
  // -------------------------------------------------
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.eu.amplitude.com/script/b097ae136ea29a9e2a454f3da8beb332.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Amplitude after script loads
    script.onload = () => {
      if (window.amplitude) {
        window.amplitude.add(window.sessionReplay.plugin({ sampleRate: 1 }));
        window.amplitude.init("b097ae136ea29a9e2a454f3da8beb332", {
          fetchRemoteConfig: true,
          serverZone: "EU",
          autocapture: true,
        });
      }
    };

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // -------------------------------------------------
  // Main page container
  // -------------------------------------------------
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.2),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_35%)]" />
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="animate-float-slow absolute -left-16 top-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="animate-float-delay absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.7)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for product leadership
            </div>
            <img
              src="/4x4.jpg"
              alt="Mariano Tuero"
              className="h-14 w-14 rounded-full border-2 border-cyan-300/60 object-cover object-top shadow-lg sm:h-20 sm:w-20"
            />
          </div>

          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-cyan-300">
                <span className="h-px w-10 bg-cyan-400" />
                Product leadership portfolio
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Mariano Tuero</h1>
                <AudioPresentation small />
              </div>
              <p className="mt-4 text-lg font-medium text-cyan-100 sm:text-xl">
                Senior Product Leader <span className="px-1 text-slate-500">|</span> AI &amp; Data Products <span className="px-1 text-slate-500">|</span> Portfolio Management
              </p>
              <p className="mt-4 text-sm text-slate-300">Bratislava, Slovakia <span className="px-1 text-slate-600">|</span> mariano.tuero@email.com <span className="px-1 text-slate-600">|</span> +421 918 165 940</p>
            </div>

            <nav className="flex flex-wrap gap-3" aria-label="Portfolio sections">
              <Link to="/Hats" className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-500/20">How I work</Link>
              <Link to="/KnowledgeGraph" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10">Knowledge Graph</Link>
              <Link to="/Amplitude" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10">Analytics</Link>
              <a href="https://linkedin.com/in/mtuero" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </nav>
          </div>
        </header>

      {/* -------------------------------------------------
         About section (AI-generated summary)
      ------------------------------------------------- */}
      <Section
        title={
          <>
            About <span className="text-sm font-normal text-slate-400">(AI-generated)</span>
          </>
        }
      >
        <CvSummary />
      </Section>

      {/* -------------------------------------------------
         Core Competencies section
      ------------------------------------------------- */}
      <Section title="Core Competencies">
        <ul>
          {coreCompetencies.map((item, i) => (
            <li key={i} className="text-sm">
              <TextWithKeywords text={item} keywords={globalKeywords} />
            </li>
          ))}
        </ul>
      </Section>

      {/* -------------------------------------------------
         Experience section with decorative images
      ------------------------------------------------- */}
      <Section title="Experience">
        {experience.map((exp, i) => {
          const badge = companyBadges[exp.company] || { label: exp.company.slice(0, 3).toUpperCase(), accent: "from-slate-700 to-slate-500" };

          return (
            <article key={i} className="group relative mb-5 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/35 p-5 transition hover:border-cyan-400/30 hover:bg-white/5 sm:p-6">

              {/* Decorative background image */}
              <img
                src={`/experience-bg-${i}.jpg`}
                alt="Decorative"
                className="pointer-events-none absolute right-5 top-5 hidden h-28 w-28 rotate-6 object-cover opacity-20 md:block"
              />

              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 pr-2">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role} | {exp.company}
                  </h3>
                </div>

                <div className="ml-auto flex h-14 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/95 shadow-[0_8px_22px_rgba(15,23,42,0.18)] transition-transform duration-200 group-hover:scale-[1.02]">
                  <img src={badge.src} alt={badge.alt} className="h-full w-full object-contain p-2" />
                </div>
              </div>

              <p className="mb-4 mt-1 text-sm font-medium text-cyan-300">{exp.period}</p>

              <ul className="space-y-2 text-sm leading-6 text-slate-200">
                {exp.description.map((desc, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    <TextWithKeywords text={desc} keywords={globalKeywords} />
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </Section>

      {/* -------------------------------------------------
         Certifications section
      ------------------------------------------------- */}
      <Section title="Certifications">
        <ul>
          {certifications.map((cert, i) => (
            <li key={i} className="text-sm">
              <TextWithKeywords text={cert} keywords={globalKeywords} />
            </li>
          ))}
        </ul>
      </Section>

      {/* -------------------------------------------------
         Education section
      ------------------------------------------------- */}
      <Section title="Education">
        <p className="text-sm">
          <TextWithKeywords text={education} keywords={globalKeywords} />
        </p>
      </Section>

      {/* -------------------------------------------------
         Languages section
      ------------------------------------------------- */}
      <Section title="Languages">
        <ul>
          {languages.map((lang, i) => (
            <li key={i} className="text-sm">
              <TextWithKeywords text={lang} keywords={globalKeywords} />
            </li>
          ))}
        </ul>
      </Section>

      {/* -------------------------------------------------
         Extra components
         ChatBot: floating chat to ask questions about Mariano
         ExperienceTimeline: horizontal timeline view of career & certifications
      ------------------------------------------------- */}
        <section className="mb-6 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_18px_70px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />
            <h2 className="text-xl font-semibold text-white sm:text-2xl">Career Timeline</h2>
          </div>
          <ExperienceTimeline />
        </section>
        <ChatBot />
      </main>
    </div>
  );
}
