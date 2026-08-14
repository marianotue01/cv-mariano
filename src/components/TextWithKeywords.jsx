// src/components/TextWithKeywords.jsx
import React from "react";

/**
 * Keyword
 * 
 * Input: children (React node)
 * Description: Highlights a word with a specific color and subtle shadow.
 * Output: Renders the children text with styling.
 */
const Keyword = ({ children }) => (
  <span className="font-bold text-cyan-300">
    {children}
  </span>
);

/**
 * TextWithKeywords
 * 
 * Input:
 *  - text: string, full text to render
 *  - keywords: string[], list of keywords to highlight
 * 
 * Description:
 *  Splits text into words and wraps any word that matches a keyword
 *  with the Keyword component.
 * 
 * Output:
 *  - React fragment containing text with highlighted keywords.
 */
export default function TextWithKeywords({ text, keywords = [] }) {
  return (
    <span className="font-normal">
      {text.split(" ").map((word, idx) => {
        // Remove punctuation to check for keyword match
        const cleanWord = word.replace(/[.,;:()]/g, "");

        const hiddenKeywords = new Set(["AI", "Agile"]);
        const isHiddenKeyword = hiddenKeywords.has(cleanWord) || hiddenKeywords.has(cleanWord.toLowerCase());

        // Highlight only the configured keywords.
        const normalizedWord = cleanWord.toLowerCase();
        const highlight = !isHiddenKeyword && keywords.some(keyword => keyword.toLowerCase() === normalizedWord);

        return highlight ? <Keyword key={idx}>{word} </Keyword> : word + " ";
      })}
    </span>
  );
}
