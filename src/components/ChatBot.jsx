// src/components/ChatBot.jsx
import React, { useState } from "react";
import { generateSystemPrompt } from "../data/chatprompt"
export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [minimized, setMinimized] = useState(false);

  // Generamos el system prompt una sola vez
  const systemPrompt = generateSystemPrompt();

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);

    const question = input;
    setInput("");

    try {
      const res = await fetch("api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, systemPrompt }),
      });

      if (!res.ok) throw new Error("Error en la respuesta del servidor");

      const data = await res.json();
      const botMsg = { role: "bot", content: data.answer || "Sin respuesta" };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        { role: "bot", content: "Error: no se pudo conectar con el servidor." }
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
                <p className="bg-gray-100 inline-block px-3 py-1 rounded break-words">
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
              onChange={e => setInput(e.target.value)}
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
