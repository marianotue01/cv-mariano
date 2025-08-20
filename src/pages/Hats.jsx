import React from "react";
import { useNavigate } from "react-router-dom";

const ThreeHatsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans text-gray-900 bg-gray-50 min-h-screen relative leading-snug">

      {/* Botón flotante superior derecho */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-6 right-6 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition z-50"
      >
        Volver
      </button>

      {/* Título */}
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        What are the common activities I do? I wear three hats: 🎩
      </h1>

      {/* Contenedor único para los cuatro bloques */}
      <div className="relative bg-white p-6 rounded shadow-md w-full max-w-6xl mb-6 overflow-hidden">
        <img
          src="/sombreronegro.jpg"
          alt="Decorative"
          className="absolute top-1 right-1 w-80 h-80 object-contain opacity-70 pointer-events-none hidden md:block"
        />

        {/* Roadmap */}
        <div className="mb-4 relative z-10">
          <div className="flex items-center mb-1">
            <div className="w-6 h-6 mr-2 bg-green-100 rounded-full flex items-center justify-center text-white">
              🎩
            </div>
            <h2 className="text-xl font-semibold">Roadmap</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Make the feature roadmap visible to all stakeholders and dev team</li>
            <li>Prioritize product requirements for development</li>
            <li>Manage and groom the backlog efficiently</li>
            <li>Track progress and ensure timely feature releases</li>
            <li>Plan strategic feature launches</li>
          </ul>
        </div>

        {/* Customer Facing */}
        <div className="mb-4 relative z-10">
          <div className="flex items-center mb-1">
            <div className="w-6 h-6 mr-2 bg-green-100 rounded-full flex items-center justify-center text-white">
              🎩
            </div>
            <h2 className="text-xl font-semibold">Customer facing</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Translate customer needs into actionable product features</li>
            <li>Identify true customer problems vs perceived wants</li>
            <li>Convert customer language into technical requirements</li>
          </ul>
        </div>

        {/* Day to day */}
        <div className="mb-4 relative z-10">
          <div className="flex items-center mb-1">
            <div className="w-6 h-6 mr-2 bg-green-100 rounded-full flex items-center justify-center text-white">
              🎩
            </div>
            <h2 className="text-xl font-semibold">Day to day</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Advocate for customers with Product Owners and development teams</li>
            <li>Ensure all Epics/Features/Stories have correct acceptance criteria</li>
            <li>Foster collaboration across Product Owners and dev teams</li>
            <li>Prioritize and resolve defects or bugs quickly</li>
            <li>Monitor Azure subscriptions and optimize costs/resources</li>
          </ul>
        </div>

        {/* Deliverables */}
        <div className="relative z-10">
          <div className="flex items-center mb-1">
            <div className="w-6 h-6 mr-2 bg-green-100 rounded-full flex items-center justify-center text-white">
              🎩
            </div>
            <h2 className="text-xl font-semibold">Deliverables</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Define and communicate product vision</li>
            <li>Create problem statements and scenarios</li>
            <li>Maintain and update product roadmaps</li>
            <li>Keep strategic backlog current – Epics & Features</li>
            <li>Build Permits presentations</li>
            <li>Prepare supporting documents for all deliverables</li>
            <li>Manage Product Increments</li>
          </ul>
        </div>
      </div>

      {/* Application & Product Owner */}
      <div className="relative bg-white p-6 rounded shadow-md w-full max-w-6xl mb-6 overflow-hidden">
        <img
          src="/sombreromarron.jpg"
          alt="Decorative"
          className="absolute top-1 right-4 w-44 h-44 object-contain opacity-70 pointer-events-none hidden md:block"
        />
        <div className="flex items-center mb-0 relative z-10">
          <div className="w-6 h-6 mr-2 bg-gray-200 rounded-full flex items-center justify-center text-white">
            🎩
          </div>
          <h2 className="text-xl font-semibold">Application & Product Owner</h2>
        </div>
        <ul className="list-disc list-inside text-gray-700 space-y-1 relative z-10">
          <li>Resiliency & Failover – Manage timelines and CPOF issues</li>
          <li>Monitor IT Risk Central (ITRC) for automated break detection</li>
          <li>Maintain up-to-date Application Inventory (lifecycle, roles, components)</li>
          <li>Approve/reject access entitlements for products</li>
          <li>Participate in Agile ceremonies</li>
          <li>Keep execution backlog up-to-date – User Stories</li>
          <li>Manage release processes efficiently</li>
        </ul>
      </div>

      {/* Agile Hat */}
      <div className="relative bg-white p-6 rounded shadow-md w-full max-w-6xl mb-1 overflow-hidden">
        <img
          src="/sombreroazul.jpg"
          alt="Decorative"
          className="absolute top-0 right-6 w-40 h-40 object-contain opacity-70 pointer-events-none hidden md:block"
        />
        <div className="flex items-center mb-0 relative z-10">
          <div className="w-6 h-6 mr-2 bg-blue-500 rounded-full flex items-center justify-center text-white">
            🎩
          </div>
          <h2 className="text-xl font-semibold">As Agile Coach/Champion</h2>
        </div>
        <ul className="list-disc list-inside text-gray-700 space-y-1 relative z-10">
          <li>Guide teams through their Agile transformation journey (SM, PO, PM experience)</li>
          <li>Actively contribute to company Agile Communities of Practice</li>
          <li>Coordinate Product Increment (PI) planning and execution</li>
          <li>Mentor team members on Agile best practices and continuous improvement</li>
        </ul>
      </div>
    </div>
  );
};

export default ThreeHatsPage;
