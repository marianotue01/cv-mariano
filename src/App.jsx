import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hats from "./pages/Hats";
import Amplitude from "./pages/Amplitude";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hats" element={<Hats />} />
        <Route path="/Amplitude" element={<Amplitude />} />
      </Routes>
      <Analytics />
    </Router>
  );
}
