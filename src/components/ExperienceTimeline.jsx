import React from "react";
import { FaBriefcase, FaUniversity, FaCloud } from "react-icons/fa";

const experienceData = [
  {
    title: "Certified SAFe® 6 PO/PdM",
    company: "Scaled Agile",
    date: "2024",
    icon: <FaUniversity />,
    type: "cert",
  },
  {
    title: "Senior Product Manager",
    company: "EY",
    date: "2022-Today",
    icon: <FaBriefcase />,
    type: "job",
  },
  {
    title: "Certified Scrum PO (CSPO)",
    company: "Scrum Alliance",
    date: "2022",
    icon: <FaUniversity />,
    type: "cert",
  },
  {
    title: "Senior Product Manager",
    company: "J.P. Morgan",
    date: "2021-2022",
    icon: <FaBriefcase />,
    type: "job",
  },
  {
    title: "Azure Fundamentals",
    company: "Azure",
    date: "2021",
    icon: <FaCloud />,
    type: "cert",
  },
  {
    title: "PMI Agile Certified Practitioner",
    company: "PMI",
    date: "2019",
    icon: <FaUniversity />,
    type: "cert",
  },
  {
    title: "Senior Product Manager",
    company: "ExxonMobil",
    date: "2013-2021",
    icon: <FaBriefcase />,
    type: "job",
  },
  {
    title: "Senior Scrum Master",
    company: "ExxonMobil",
    date: "2008-2013",
    icon: <FaBriefcase />,
    type: "job",
  },
  {
    title: "Mainframe Supervisor",
    company: "IBM",
    date: "2004-2008",
    icon: <FaBriefcase />,
    type: "job",
  },
  {
    title: "M.Eng. in Systems Engineering",
    company: "Universidad Tecnologica Nacional (UTN)",
    date: "2001-2006",
    icon: <FaUniversity />,
    type: "cert",
  },
    {
    title: "Technical Writer",
    company: "IBM",
    date: "2001-2004",
    icon: <FaBriefcase />,
    type: "job",
  },
    {
    title: "B.Sc. in Systems Engineering",
    company: "Universidad Tecnologica Nacional (UTN)",
    date: "1997-2001",
    icon: <FaUniversity />,
    type: "cert",
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="overflow-x-auto py-10">
      <div className="flex relative items-center justify-start min-w-[1500px]">
        {/* Línea horizontal */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 z-0" />

        {experienceData.map((item, index) => {
          const isTop = index % 2 === 0;

          // Ajuste vertical según tipo y posición
          // Certificaciones arriba, trabajos abajo
          const verticalOffset =
            item.type === "job" ? "mt-8" : "mb-8";

          return (
            <div
              key={index}
              className={`relative flex flex-col items-center w-48 mx-4 z-10`}
              style={{ top: isTop ? (item.type === "job" ? 24 : -32) : (item.type === "job" ? 32 : -24) }}
            >
              {/* Contenedor superior o inferior según el índice */}
              <div
                className={`mb-2 text-center`}
                style={{ marginBottom: isTop ? "0" : "0" }}
              >
                <div
                  className={`rounded-lg shadow-md px-3 py-2 text-sm ${
                    item.type === "job"
                      ? "bg-gradient-to-r from-black via-gray-800 to-white text-white"
                      : "bg-gradient-to-r from-blue-600 via-blue-300 to-white text-black"
                  }`}
                  style={{ maxWidth: "12rem" }}
                >
                  <p className="text-xs italic text-gray-200">{item.date}</p>
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-xs">{item.company}</p>
                </div>
              </div>

              {/* Icono central */}
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full border-2 border-gray-400 z-10 shadow-md">
                {item.icon}
              </div>

              {/* Espaciador para mantener alineado */}
              <div className={`mt-2`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
