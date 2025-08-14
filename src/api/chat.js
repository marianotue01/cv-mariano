export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { question } = req.body;
  if (!question) return res.status(400).json({ error: "Falta la pregunta" });

  // Respuesta fija para testear
  return res.status(200).json({
    answer: `Tu pregunta fue: "${question}". El backend funciona correctamente!`,
  });
}
