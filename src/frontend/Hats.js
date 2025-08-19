import React from "react";

const MiPaginaTexto = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans text-gray-900 bg-gray-50 min-h-screen relative leading-snug">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        What are the common activities I do? I wear three hats: 🎩
      </h1>

      {/* Contenedor único para los cuatro bloques de Product Manager */}
      <div className="relative bg-white p-6 rounded shadow-md w-full max-w-6xl mb-6 overflow-hidden">
        {/* Imagen de fondo compartida */}
        <img
          src="/sombreroNegro.jpg"
          alt="Decorative"
          className="absolute top-1 right-1 w-80 h-80 object-contain opacity-70 pointer-events-none"
        />

        {/* Roadmap */}
        <div className="mb-4 relative z-10">
          <div className="flex items-center mb-1">
            <div className="w-6 h-6 mr-2 bg-green-100 rounded-full flex items-center justify-center text-white">🎩</div>
            <h2 className="text-xl font-semibold">Roadmap</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Define and communicate the Product Vision</li>
            <li>Define and communicate the product roadmap to stakeholders and dev teams</li>
            <li>Prioritize Ideas/initiatives based on business value and impact</li>
            <li>Refine backlog with clear objectives and metrics</li>
            <li>Monitor features delivery and release progress</li>
            <li>Plan upcoming product releases strategically</li>
          </ul>
        </div>

        {/* Customer Facing */}
        <div className="mb-4 relative z-10">
          <div className="flex items-center mb-1">
            <div className="w-6 h-6 mr-2 bg-green-100 rounded-full flex items-center justify-center text-white">🎩</div>
            <h2 className="text-xl font-semibold">Customer Facing</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Gather and validate customer needs and feedback</li>
            <li>Translate insights into actionable product features</li>
            <li>Ensure alignment between customer expectations and product delivery</li>
          </ul>
        </div>

        {/* Day to Day */}
        <div className="mb-4 relative z-10">
          <div className="flex items-center mb-1">
            <div className="w-6 h-6 mr-2 bg-green-100 rounded-full flex items-center justify-center text-white">🎩</div>
            <h2 className="text-xl font-semibold">Day to Day</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Advocate for customer needs across teams</li>
            <li>Validate Epics and Features with stakeholders</li>
            <li>Facilitate cross-team collaboration and decision-making</li>
            <li>Prioritize bug fixes, dependencies and critical issues</li>
            <li>Monitor cloud resources, costs, and operational insights</li>
          </ul>
        </div>

        {/* Deliverables */}
        <div className="relative z-10">
          <div className="flex items-center mb-1">
            <div className="w-6 h-6 mr-2 bg-green-100 rounded-full flex items-center justify-center text-white">🎩</div>
            <h2 className="text-xl font-semibold">Deliverables</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Develop problem statements and user scenarios</li>
            <li>Maintain and share the Product Roadmap</li>
            <li>Keep strategic backlog updated (Epics & Features)</li>
            <li>Create presentations for stakeholders and approvals</li>
            <li>Provide supporting documentation for initiatives</li>
            <li>Deliver Product Increments and value to customers</li>
          </ul>
        </div>
      </div>

      {/* Application & Product Owner */}
      <div className="relative bg-white p-6 rounded shadow-md w-full max-w-6xl mb-6 overflow-hidden">
        <img
          src="/sombreroMarron.jpg"
          alt="Decorative"
          className="absolute top-1 right-4 w-44 h-44 object-contain opacity-70 pointer-events-none"
        />
        <div className="flex items-center mb-0 relative z-10">
          <div className="w-6 h-6 mr-2 bg-gray-200 rounded-full flex items-center justify-center text-white">🎩</div>
          <h2 className="text-xl font-semibold">Application & Product Owner</h2>
        </div>
        <ul className="list-disc list-inside text-gray-700 space-y-1 relative z-10">
          <li>Manage Resiliency & Failover timelines and CPOF issues</li>
          <li>Monitor IT Risk Central (ITRC) for potential breaks via automated scans (RAVEN)</li>
          <li>Maintain up-to-date Application Inventory (lifecycle, components, roles)</li>
          <li>Approve or revoke access entitlements for Products</li>
          <li>Participate in Agile Ceremonies</li>
          <li>Keep Execution backlog up-to-date (User Stories)</li>
          <li>Oversee sprint releases</li>
        </ul>
      </div>

      {/* Agile Hat */}
      <div className="relative bg-white p-6 rounded shadow-md w-full max-w-6xl mb-1 overflow-hidden">
        <img
          src="/sombreroAzul.jpg"
          alt="Decorative"
          className="absolute top-0 right-6 w-40 h-40 object-contain opacity-70 pointer-events-none"
        />
        <div className="flex items-center mb-0 relative z-10">
          <div className="w-6 h-6 mr-2 bg-blue-500 rounded-full flex items-center justify-center text-white">🎩</div>
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

export default MiPaginaTexto;
