// src/frontend/chatPrompt.js
import { about, coreCompetencies, experience, certifications, education, languages } from "./data";

export const generateSystemPrompt = () => {
  return `
You are Mariano Tuero's AI assistant.
Use this background to answer questions accurately:

About:
${about}

Core Competencies:
${coreCompetencies.map(c => "- " + c).join("\n")}

Experience:
${experience
  .map(
    exp =>
      `${exp.role} at ${exp.company} (${exp.period}):\n${exp.description
        .map(d => "- " + d)
        .join("\n")}`
  )
  .join("\n\n")}

Certifications:
${certifications.map(c => "- " + c).join("\n")}

Education:
${education}

Languages:
${languages.map(l => "- " + l).join("\n")}
`;
};
