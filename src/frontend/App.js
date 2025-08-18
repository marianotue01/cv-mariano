// src/frontend/App.js
import React, { useEffect } from "react";
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

import Section from "../components/Section";
import TextWithKeywords from "../components/TextWithKeywords";

import "react-vertical-timeline-component/style.min.css";
import "../index.css";

// Palabras clave globales
const globalKeywords = ["Cloud", "Leadership", "Microservices", "KPIs"];

export default function App() {
  // Integración de Amplitude + Session Replay
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.eu.amplitude.com/script/b097ae136ea29a9e2a454f3da8beb332.js";
    script.async = true;
    document.body.appendChild(script);

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

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans text-gray-900 bg-gray-50 min-h-screen relative leading-snug">
      {/* Imagen de Mariano */}
      <img
        src="/4x4.jpg"
        alt="Foto de Mariano Tuero"
        className="absolute top-5 right-8 w-28 h-28 object-cover object-top rounded-full border shadow-md"
      />

      {/* Header */}
      <header className="mb-6">
        <h1 className="text-4xl font-bold flex items-center gap-2">
          Mariano Tuero
          <AudioPresentation small />
        </h1>
        <p className="text-lg font-semibold text-indigo-700">
          Senior Product Manager | Leader | Multilingual (ES/EN/PT)
        </p>
        <p className="text-sm text-gray-600">
          Warsaw, Poland | mariano.tuero@email.com
        </p>
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
      <Section title="About">
        <p className="text-sm">
          <TextWithKeywords text={about} keywords={globalKeywords} />
        </p>
      </Section>

      {/* Core Competencies */}
      <Section title="Core Competencies">
        <ul>
          {coreCompetencies.map((item, i) => (
            <li key={i} className="text-sm">
              <TextWithKeywords text={item} keywords={globalKeywords} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        {experience.map((exp, i) => (
          <div key={i} className="mb-4">
            <h3 className="text-xl font-semibold">
              {exp.role} | {exp.company}
            </h3>
            <p className="text-md text-blue-600 mb-1">[{exp.period}]</p>
            <ul>
              {exp.description.map((desc, j) => (
                <li key={j} className="text-sm">
                  <TextWithKeywords text={desc} keywords={globalKeywords} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      {/* Certifications */}
      <Section title="Certifications">
        <ul>
          {certifications.map((cert, i) => (
            <li key={i} className="text-sm">
              <TextWithKeywords text={cert} keywords={globalKeywords} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Education */}
      <Section title="Education">
        <p className="text-sm">
          <TextWithKeywords text={education} keywords={globalKeywords} />
        </p>
      </Section>

      {/* Languages */}
      <Section title="Languages">
        <ul>
          {languages.map((lang, i) => (
            <li key={i} className="text-sm">
              <TextWithKeywords text={lang} keywords={globalKeywords} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Componentes extra */}
      <ChatBot />
      <ExperienceTimeline />
      <Analytics />
    </div>
  );
}
