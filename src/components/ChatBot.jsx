import React, { useState } from "react";
import {
  about,
  coreCompetencies,
  experience,
  certifications,
  education,
  languages,
} from "../frontend/data";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [minimized, setMinimized] = useState(false);

  // Construimos el prompt base a partir de data.js
  const systemPrompt = `
Eres un asistente experto en la trayectoria y CV de Mariano Tuero. 
Usa esta información para responder de forma precisa:

About: ${about}

Core Competencies: ${coreCompetencies.join(", ")}

Experience: ${experience
    .map((exp) => `${exp.role} en ${exp.company} (${exp.period})`)
    .join("; ")}

Certifications: ${certifications.join(", ")}

Education: ${education}

Languages: ${languages.join(", ")}
  `;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);

    const question = input;
    setInput("");

    try {
      // Mandamos la pregunta y el systemPrompt al backend
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, systemPrompt }),
      });

      if (!res.ok) throw new Error("Error en la respuesta del servidor");

      const data = await res.json();
      const botMsg = { role: "bot", content: data.answer || "Sin respuesta" };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Error: no se pudo conectar con el servidor." },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white border shadow-lg rounded-lg flex flex-col max-h-[500px] overflow-hidden z-50">
      <div className="bg-indigo-600 text-white p-3 font-semibold flex justify-between items-center">
        <span>🤖 Ask anything about Mariano</span>
        <button
          onClick={() => setMinimized(!minimized)}
          className="text-white font-bold px-2 rounded hover:bg-indigo-700"
          aria-label={minimized ? "Maximizar chat" : "Minimizar chat"}
        >
          {minimized ? "🔼" : "🔽"}
        </button>
      </div>

      {!minimized && (
        <>
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`${
                  msg.role === "user"
                    ? "text-right text-blue-700"
                    : "text-left text-gray-800"
                }`}
              >
                <p className="bg-gray-100 inline-block px-3 py-1 rounded">
                  {msg.content}
                </p>
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex">
            <input
              className="flex-1 text-sm px-2 py-1 border rounded mr-2"
              type="text"
              placeholder="Escribí tu pregunta..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={minimized}
            />
            <button
              onClick={sendMessage}
              className="bg-indigo-600 text-white px-3 py-1 rounded text-sm"
              disabled={minimized}
            >
              Enviar
            </button>
          </div>
        </>
      )}
    </div>
  );
}
