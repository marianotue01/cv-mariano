import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Hats from "./Hats";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hats" element={<Hats />} />
      </Routes>
      <Analytics />
    </Router>
  );
}