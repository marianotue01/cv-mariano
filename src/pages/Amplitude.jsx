import React from "react";
import { useNavigate } from "react-router-dom";

export default function Amplitude() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans text-gray-900 bg-gray-50 min-h-screen relative">

      {/* Botón flotante superior derecho */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-6 right-6 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition z-50"
      >
        Volver
      </button>

      {/* Título */}
      <h1 className="text-3xl font-bold mb-6">Amplitude Dashboard</h1>

      {/* Contenido principal */}
      <iframe
        src="https://app.eu.amplitude.com/analytics/share/477d7de2cde841179543b1fe4ce3f779"
        style={{ width: "100%", height: "80vh", border: "none" }}
        title="Amplitude Dashboard"
      />

     </div>
  );
}
