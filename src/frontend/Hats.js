import React from "react";

const MiPaginaTexto = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6 font-sans text-gray-900 leading-snug">
      <div className="w-full max-w-6xl flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">
          What are the common activities I do? I wear three hats: 🎩
        </h1>

        {/* Product Manager Hat */}
        <div className="bg-white p-4 rounded shadow-md w-full max-w-4xl mb-4">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 mr-2 bg-green-100 rounded-full flex items-center justify-center text-white">🎩</div>
            <h2 className="text-xl font-semibold">Roadmap</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Managing and making visible the feature roadmap to all stakeholders and dev team.</li>
            <li>Prioritize list of requirements for product development</li>
            <li>Gather, manage, and prioritize the backlog</li>
            <li>Track progress towards the release of features</li>
            <li>Planning feature releases</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow-md w-full max-w-4xl mb-4">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 mr-2 bg-green-100 rounded-full flex items-center justify-center text-white">🎩</div>
            <h2 className="text-xl font-semibold">Customer facing</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Distinguish between what customers want/think they want and delivery of the product features</li>
            <li>Define customer needs and the associated features to meet those needs</li>
            <li>Interoperate customer language into technical details</li>
          </ul>
        </div>

        {/* Más bloques aquí (Day to Day, Deliverables, etc.) */}

        {/* Agile Hat */}
        <div className="bg-white p-4 rounded shadow-md w-full max-w-4xl mb-4">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 mr-2 bg-blue-500 rounded-full flex items-center justify-center text-white">🎩</div>
            <h2 className="text-xl font-semibold">As Agile Coach/Champion</h2>
          </div>
          <p className="text-gray-700">
            Due to my vast experience within the Agile methodology (SM, PO, PM) I am always open to help teams in their journey to the Agile transformation by participating actively in companies-sponsored communities of practice (Agile). I also coordinate Product Increment (PI).
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiPaginaTexto;
