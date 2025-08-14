// src/backend/api/ask.js
import fetch from "node-fetch";
import fs from "fs";
import path from "path";

const promptPath = path.join(process.cwd(), "src/backend/systemprompt.txt");
const systemPrompt = fs.readFileSync(promptPath, "utf-8");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Método no permitido" });
    return;
  }

  const { question } = req.body;

  if (!process.env.OPENROUTER_API_KEY) {
    console.error("ERROR: No se encontró OPENROUTER_API_KEY");
    res.status(500).json({ error: "Falta OPENROUTER_API_KEY" });
    return;
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question },
        ],
      }),
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
      res.status(200).json({ answer: data.choices[0].message.content.trim() });
    } else {
      console.error("Respuesta inesperada:", data);
      res.status(500).json({ error: "Respuesta vacía del modelo" });
    }
  } catch (error) {
    console.error("Error generando respuesta:", error);
    res.status(500).json({ error: "Error generando respuesta" });
  }
}
