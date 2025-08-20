// src/components/CvSummary.jsx
import React, { useState, useEffect } from "react";
import {
  about,
  coreCompetencies,
  experience,
  certifications,
  education,
  languages,
} from "../data/data";

export default function CvSummary() {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateSummary = async () => {
      const systemPrompt = `
Eres un asistente que resume de manera concisa un CV profesional.
Resume de forma clara y profesional el siguiente CV:

About: ${about}

Core Competencies: ${coreCompetencies.join(", ")}

Experience: ${experience
  .map((exp) => `${exp.role} en ${exp.company} (${exp.period})`)
  .join("; ")}

Certifications: ${certifications.join(", ")}

Education: ${education}

Languages: ${languages.join(", ")}
      `;

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            question: "Please summarize this CV in 3-4 sentences.",
            systemPrompt,
          }),
        });

        if (!res.ok) throw new Error("Error en la API");

        const data = await res.json();
        setSummary(data.answer || "No se pudo generar el resumen.");
      } catch (err) {
        console.error(err);
        setSummary("Error al generar resumen.");
      } finally {
        setLoading(false);
      }
    };

    generateSummary();
  }, []);

  return (
    <div className="my-1 p-1">
      {loading ? (
        <p className="text-sm text-gray-500">Generating summary ...</p>
      ) : (
        <p className="text-sm text-gray-800">{summary}</p>
      )}
    </div>
  );
}
