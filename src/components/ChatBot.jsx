// src/components/ChatBot.jsx
import React, { useState } from "react";
import { generateSystemPrompt } from "../data/chatprompt";

/*
==================================================
File: ChatBot.jsx
Summary:
- Input:
  - User text input via chat box.
- Process:
  1. Maintains state for messages, input field, and minimized state.
  2. Generates a system prompt once using `generateSystemPrompt()` for Mariano's CV context.
  3. sendMessage() sends the user's question to the server via POST to "api/chat".
  4. Receives the bot's answer and updates the messages array.
  5. Handles Enter key press to submit messages.
  6. Allows minimizing/maximizing the chat window.
- Output: Interactive floating chat window to ask questions about Mariano, showing conversation history.
==================================================
*/

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [minimized, setMinimized] = useState(false);

  const systemPrompt = generateSystemPrompt();

  // Send user message and fetch bot response
  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: "user", content: input }]);
    const question = input;
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, systemPrompt }),
      });

      if (!res.ok) throw new Error("Server response error");

      const data = await res.json();
      setMessages(prev => [...prev, { role: "bot", content: data.answer || "No answer provided" }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: "bot", content: "Error: could not connect to server." }]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex max-h-[500px] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[24px] border border-cyan-300/40 bg-slate-950/90 text-slate-50 shadow-[0_0_0_1px_rgba(103,232,249,0.08),0_20px_80px_rgba(15,23,42,0.7),0_0_28px_rgba(34,211,238,0.12)] backdrop-blur-xl">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 p-4 font-semibold text-white">
        <span className="text-sm text-cyan-100">Ask anything about Mariano</span>
        <button
          onClick={() => setMinimized(!minimized)}
          className="rounded-lg px-2 py-1 text-cyan-200 transition hover:bg-cyan-400/10 hover:text-white"
          aria-label={minimized ? "Maximize chat" : "Minimize chat"}
        >
          {minimized ? "🔼" : "🔽"}
        </button>
      </div>

      {!minimized && (
        <>
          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={msg.role === "user" ? "text-right text-cyan-100" : "text-left text-slate-200"}
              >
                <p className={msg.role === "user" ? "inline-block max-w-[90%] break-words rounded-2xl rounded-br-md border border-cyan-300/20 bg-cyan-400/10 px-3 py-2" : "inline-block max-w-[90%] break-words rounded-2xl rounded-bl-md border border-white/10 bg-white/10 px-3 py-2"}>
                  {msg.content}
                </p>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2 border-t border-white/10 bg-slate-950/40 p-3">
            <input
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              disabled={minimized}
            />
            <button
              onClick={sendMessage}
              className="rounded-xl border border-cyan-300/30 bg-cyan-400/15 px-3 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/25"
              disabled={minimized}
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}
