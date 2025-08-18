// src/frontend/App.js
import React from "react";
import ChatBot from "../components/ChatBot";
import ExperienceTimeline from "../components/ExperienceTimeline";
import AudioPresentation from "../components/AudioPresentation";
import { Analytics } from "@vercel/analytics/react";

import {
  about,
  coreCompetencies,
  experience,
  certifications,
  education,
  languages,
} from "./data";

import "react-vertical-timeline-component/style.min.css";
import "../index.css";

export default function App() {
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans text-gray-900 bg-gray-50 min-h-screen relative leading-snug">
      {/* Imagen de Mariano */}
      <img
        src="/4x4.jpg"
        alt="Foto de Mariano Tuero"
        className="absolute top-6 right-6 w-28 h-28 object-cover object-top rounded-full border shadow-md"
      />

      {/* Header */}
      <header className="mb-6">
        <h1 className="text-4xl font-bold flex items-center gap-2">
          Mariano Tuero New Features
          <AudioPresentation small />
        </h1>
        <p className="text-lg text-indigo-700 font-semibold">
          Senior Product Manager | Leader | Multilingual (ES/EN/PT)
        </p>
        <p className="text-sm text-gray-600">Warsaw, Poland | mariano.tuero@email.com</p>
        <p className="text-sm text-gray-600">
          +48 573 824 000 |{" "}
          <a
            href="https://linkedin.com/in/mtuero"
            className="text-indigo-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </header>

      {/* About */}
      <section className="mb-6 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-2 border-b border-indigo-600 pb-1">About</h2>
        <p>{about}</p>
      </section>

      {/* Core Competencies */}
      <section className="mb-6 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-2 border-b border-indigo-600 pb-1">Core Competencies</h2>
        <ul className="list-disc list-inside text-gray-700 leading-snug">
          {coreCompetencies.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-6 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-2 border-b border-indigo-600 pb-1">Experience</h2>
        {experience.map((exp, i) => (
          <div key={i} className="mb-4">
            <h3 className="text-xl font-semibold">{exp.role} | {exp.company}</h3>
            <p className="text-sm text-blue-600 mb-1">[{exp.period}]</p>
            <ul className="list-disc list-inside text-gray-700 leading-snug">
              {exp.description.map((desc, j) => (
                <li key={j}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className="mb-6 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-2 border-b border-indigo-600 pb-1">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700 leading-snug">
          {certifications.map((cert, i) => (
            <li key={i}>{cert}</li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="mb-6 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-2 border-b border-indigo-600 pb-1">Education</h2>
        <p>{education}</p>
      </section>

      {/* Languages */}
      <section className="mb-6 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-2 border-b border-indigo-600 pb-1">Languages</h2>
        <ul className="list-disc list-inside text-gray-700 leading-snug">
          {languages.map((lang, i) => (
            <li key={i}>{lang}</li>
          ))}
        </ul>
      </section>

      {/* Componentes extra */}
      <ChatBot />
      <ExperienceTimeline />
      <Analytics />
    </div>
  );
}
