// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch"; // Asegurate de instalarlo con: npm install node-fetch
import path from "path";  // <---- Importa path
import fs from "fs";
dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const promptPath = path.resolve("../backend/systemprompt.txt"); // o la ruta correcta
const systemPrompt = fs.readFileSync(promptPath, "utf-8");

app.post("/api/ask", async (req, res) => {
  const userQuestion = req.body.question;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct", // Modelo gratuito en OpenRouter
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userQuestion },
        ],
      }),
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
      res.json({ answer: data.choices[0].message.content.trim() });
    } else {
      console.error("Respuesta inesperada:", data);
      res.status(500).json({ error: "Respuesta vacía del modelo." });
    }
  } catch (error) {
    console.error("Error al generar respuesta:", error);
    res.status(500).json({ error: "Error generando respuesta" });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
