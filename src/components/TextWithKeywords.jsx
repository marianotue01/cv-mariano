// src/components/TextWithKeywords.jsx
import React from "react";

// Componente para palabras clave con sombra sutil
const Keyword = ({ children }) => (
  <span className="text-indigo-700 drop-shadow-sm">{children}</span>
);

/**
 * TextWithKeywords
 * @param {string} text - Texto completo
 * @param {string[]} keywords - Palabras clave a resaltar
 */
export default function TextWithKeywords({ text, keywords = [] }) {
  return (
    <>
      {text.split(" ").map((word, idx) => {
        // Limpiar signos de puntuación para comparar
        const cleanWord = word.replace(/[.,;:()]/g, "");

        // Detectar porcentajes (ej: 80%)
        const isPercentage = /\d+%/.test(cleanWord);

        // Si es keyword o porcentaje, envolver en <Keyword>
        return keywords.includes(cleanWord) || isPercentage ? (
          <Keyword key={idx}>{word} </Keyword>
        ) : (
          word + " "
        );
      })}
    </>
  );
}
