// src/components/AudioPresentation.jsx
import React, { useRef } from "react";

const AudioPresentation = ({ small = false }) => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button
        onClick={handlePlay}
        className={`${
          small
            ? "px-2 py-1 text-sm rounded-lg"
            : "px-6 py-2 text-base rounded-xl"
        } bg-blue-600 text-white shadow-md hover:bg-blue-700 transition`}
      >
        🔊
      </button>
      <audio ref={audioRef}>
        <source src="/welcome.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPresentation;
