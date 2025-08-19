// src/frontend/Amplitude.jsx
import React from "react";

export default function Amplitude() {
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans text-gray-900 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Amplitude Dashboard</h1>
      <iframe
        src="https://app.eu.amplitude.com/analytics/share/477d7de2cde841179543b1fe4ce3f779"
        style={{ width: "100%", height: "80vh", border: "none" }}
        title="Amplitude Dashboard"
      />
    </div>
  );
}
