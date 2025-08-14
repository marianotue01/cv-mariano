import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: "Falta la pregunta" });
  }

  if (!process.env.OPENROUTER_API_KEY) {
    console.error("ERROR: No se encontró OPENROUTER_API_KEY");
    return res.status(500).json({ error: "Falta OPENROUTER_API_KEY" });
  }

  // Leer system prompt
  const promptPath = path.join(process.cwd(), "src/backend/systemprompt.txt");
  let systemPrompt = "";
  try {
    systemPrompt = fs.readFileSync(promptPath, "utf-8");
  } catch (err) {
    console.error("No se pudo leer systemprompt.txt:", err.message);
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
      return res.status(200).json({ answer: data.choices[0].message.content.trim() });
    } else {
      console.error("Respuesta inesperada:", data);
      return res.status(500).json({ error: "Respuesta vacía del modelo", data });
    }
  } catch (error) {
    console.error("Error generando respuesta:", error);
    return res.status(500).json({ error: "Error generando respuesta", details: error.message });
  }
}
