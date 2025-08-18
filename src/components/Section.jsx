// src/components/Section.jsx
import React from "react";

export default function Section({ title, children }) {
  return (
    <section className="mb-6 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-2 border-b border-indigo-600 pb-1">{title}</h2>
      <div className="text-justify leading-snug">{children}</div>
    </section>
  );
}
