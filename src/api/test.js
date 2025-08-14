export default function handler(req, res) {
  console.log("Endpoint test ejecutado!");
  res.status(200).json({ message: "Backend funcionando!" });
}