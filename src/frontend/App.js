import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Hats from "./Hats";
import Amplitude from "../components/Amplitude";
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