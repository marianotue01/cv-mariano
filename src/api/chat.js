export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { question } = req.body;
  return res.status(200).json({ answer: `Recibí: "${question}"` });
}
