import React from "react";

export default function AudioIcon() {
  const playIntro = () => {
    if (!("speechSynthesis" in window)) {
      alert("Tu navegador no soporta síntesis de voz.");
      return;
    }

    const msg = new SpeechSynthesisUtterance(
      "Hi, This is Mariano, I am a senior Product Manager. Please reach out to me if you have any questions."
    );
    msg.lang = "en-US";
    msg.rate = 1;
    msg.pitch = 1;

    const voices = window.speechSynthesis.getVoices();
    const maleVoice = voices.find(
      (v) => v.lang.startsWith("en") && v.name.toLowerCase().includes("male")
    );
    msg.voice = maleVoice || voices[0];

    window.speechSynthesis.speak(msg);
  };

  return (
    <div className="relative group inline-block">
      <button
        onClick={playIntro}
        className="text-indigo-600 hover:text-indigo-700 text-sm p-0"
      >
        🔊
      </button>
      <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
        Play
      </span>
    </div>
  );
}
