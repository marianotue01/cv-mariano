/*
==================================================
File: App.jsx
Summary:
- Input: User navigation through URLs ("/", "/Hats", "/Amplitude").
- Process:
  1. Sets up application routing using React Router.
  2. Defines routes that render different components based on the URL.
  3. Integrates Vercel Analytics to track user interactions.
- Output: Renders the component corresponding to the current route and sends analytics data to Vercel.
==================================================
*/

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home"; // Main CV page
import Hats from "./pages/Hats"; // "Hats" page
import Amplitude from "./pages/Amplitude"; // Amplitude dashboard page
import KnowledgeGraph from "./pages/KnowledgeGraph";
import { Analytics } from "@vercel/analytics/react"; // Vercel analytics integration

function BackButton() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (pathname === "/") {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="fixed right-6 top-6 z-50 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/10"
    >
      <span aria-hidden="true">←</span>
      Volver
    </button>
  );
}

export default function App() {
  // Cambiar el título de la ventana del navegador
  useEffect(() => {
    document.title = "AI-powered interactive CV";
  }, []);

  return (
    <Router>
      {/* Wraps the app to enable routing */}
      <BackButton />
      <Routes>
        {/* Route definitions */}
        <Route path="/" element={<Home />} />         {/* Home page */}
        <Route path="/Hats" element={<Hats />} />     {/* Hats page */}
        <Route path="/Amplitude" element={<Amplitude />} /> {/* Amplitude page */}
        <Route path="/KnowledgeGraph" element={<KnowledgeGraph />} />
      </Routes>

      {/* Vercel Analytics for tracking user events */}
      <Analytics />
    </Router>
  );
}
