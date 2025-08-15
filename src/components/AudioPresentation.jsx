import React from "react";

export default function AudioPresentation() {
  const playIntro = () => {
    if (!("speechSynthesis" in window)) {
      alert("Tu navegador no soporta síntesis de voz.");
      return;
    }

    const msg = new SpeechSynthesisUtterance(
      "Hi, This is Mariano, I am a senior Product Manager. Please reach out to me if you have any questions"
    );
    msg.lang = "en-En";
    msg.rate = 1; // velocidad de lectura
    msg.pitch = 1; // tono de la voz

    window.speechSynthesis.speak(msg);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow text-center">
         <button
        onClick={playIntro}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        🔊
      </button>
    </div>
  );
}
