import React from "react";

const MiPaginaTexto = () => {
  return (
<div className="max-w-6xl mx-auto p-6 font-sans text-gray-900 bg-gray-50 min-h-screen relative leading-snug">
  <h1 className="text-3xl font-bold mb-6 text-blue-700">What are the common activities I do? I wear three hats: 🎩</h1>

  {/* Product Manager Hat */}
  <div className="bg-white p-1 rounded shadow-md w-full max-w-4xl mb-1">
    <div className="flex items-center mb-0">
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
  <div className="bg-white p-1 rounded shadow-md w-full max-w-4xl mb-1">
    <div className="flex items-center mb-0">
      <div className="w-6 h-6 mr-2 bg-green-100 rounded-full flex items-center justify-center text-white">🎩</div>
      <h2 className="text-xl font-semibold">Customer facing</h2>
    </div>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>Distinguish between what customers want/think they want and delivery of the product features</li>
      <li>Define customer needs and the associated features to meet those needs</li>
      <li>Interoperate customer language into technical details</li>
    </ul>
  </div>
  <div className="bg-white p-1 rounded shadow-md w-full max-w-4xl mb-1">
    <div className="flex items-center mb-0">
      <div className="w-6 h-6 mr-2 bg-green-100 rounded-full flex items-center justify-center text-white">🎩</div>
      <h2 className="text-xl font-semibold">Day to day</h2>
    </div>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>Advocate on behalf of the customer for the Product Owners/development team</li>
      <li>Ensure each Epic/Feature/story has the correct acceptance criteria</li>
      <li>Ensure close collaboration with and between Product Owners/development teams</li>
      <li>Prioritize defect or bug resolution</li>
      <li>Monitor Azure subscriptions (Resources and consumption insights, cost and budget visibility/optimize</li>
    </ul>
  </div>
  <div className="bg-white p-1 rounded shadow-md w-full max-w-4xl mb-6">
    <div className="flex items-center mb-0">
      <div className="w-6 h-6 mr-2 bg-green-100 rounded-full flex items-center justify-center text-white">🎩</div>
      <h2 className="text-xl font-semibold">Deliverables</h2>
    </div>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>Product vision</li>
      <li>Problem statements and scenarios</li>
      <li>Product roadmaps</li>
      <li>Aha!, JIRA and Azure Dev Ops initiatives, Epics/Features and User Stories</li>
      <li>Build Permits presentations</li>
      <li>Supporting documents for all the above</li>
      <li>Product Increments</li>
    </ul>
  </div>

  {/* Application Owner */}
  <div className="bg-white p-1 rounded shadow-md w-full max-w-4xl mb-6">
    <div className="flex items-center mb-0">
      <div className="w-6 h-6 mr-2 bg-gray-200 rounded-full flex items-center justify-center text-white">🎩</div>
      <h2 className="text-xl font-semibold">Application</h2>
    </div>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>Resiliency&Failover – Manage all timelines and issues around the Critical Point of Failure (CPOF)</li>
      <li>Review daily IT Risk Central (ITRC) for any potential Break detected by automated scan (RAVEN)</li>
      <li>Keep the Application Inventory up-to-date (lifecycle, components, roles, etc.)</li>
      <li>Approve/reject access entitlements for my Products</li>
      <li>Participate in Ceremonies</li>
      <li>Release Management</li>
    </ul>
  </div>

  {/* Agile Hat */}
  <div className="bg-white p-1 rounded shadow-md w-full max-w-4xl mb-1">
    <div className="flex items-center mb-0">
      <div className="w-6 h-6 mr-2 bg-blue-500 rounded-full flex items-center justify-center text-white">🎩</div>
      <h2 className="text-xl font-semibold">As Agile Coach/Champion</h2>
    </div>
    <p className="text-gray-700">
      Due to my vast experience within the Agile methodology (SM, PO, PM) I am always open to help teams in their journey to the Agile transformation by participating actively in companies-sponsored communities of practice (Agile). I also coordinate Product Increment (PI).
    </p>
  </div>
</div>
  );
};

export default MiPaginaTexto;