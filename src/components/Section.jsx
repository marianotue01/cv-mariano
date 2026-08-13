// src/components/Section.jsx
import React from "react";

/**
 * Section
 * 
 * Input:
 *  - title: string, title of the section
 *  - children: ReactNode, content to render inside the section
 * 
 * Description:
 *  A reusable section component that renders a title with an underline and 
 *  a content area with padding, rounded corners, and shadow. 
 *  Useful for organizing different blocks of content in the page.
 * 
 * Output:
 *  - Renders a styled <section> element with a header and children content.
 */
const Section = ({ title, children }) => (
  <section className="mb-6 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_18px_70px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-6">
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-cyan-400" />
      <h2 className="text-xl font-semibold text-white sm:text-2xl">{title}</h2>
    </div>
    <div className="leading-relaxed text-slate-200">{children}</div>
  </section>
);

export default Section;
