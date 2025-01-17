import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [bgColor, setBgColor] = useState("gray");

  // Function to toggle background color
  const handleClick = () => {
    setBgColor(prevColor => (prevColor === "gray" ? "#fd5d5d" : "#fd5d5d"));
  };
  return (
    <>
      <Header />
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<NotFound />} />
                <Route path="/competences" element={<NotFound />} />
                <Route path="/portfolio" element={<NotFound />} />
                <Route path="/contacts" element={<NotFound />} />
            </Routes>
        </Router>
        <Footer />
    </>
  );
}

export default App;
