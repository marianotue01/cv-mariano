import React from "react";

export default function AudioPresentation() {
  const playIntro = () => {
    if (!("speechSynthesis" in window)) {
      alert("Tu navegador no soporta síntesis de voz.");
      return;
    }

    const msg = new SpeechSynthesisUtterance(
      "Hola, soy Mariano, programador y gestor de proyectos con más de 15 años de experiencia en entornos multinacionales. Bienvenido a mi CV online."
    );
    msg.lang = "es-ES";
    msg.rate = 1; // velocidad de lectura
    msg.pitch = 1; // tono de la voz

    window.speechSynthesis.speak(msg);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow text-center">
      <h2 className="text-lg font-semibold mb-2">🎤 Presentación de Mariano</h2>
      <button
        onClick={playIntro}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        🔊 Escuchar presentación
      </button>
    </div>
  );
}
