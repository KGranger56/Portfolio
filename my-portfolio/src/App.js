/*Dependencies
npm install -S react-router-dom*/

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./nav-components/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Education from "./pages/education";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
