import React, { useState } from "react";
import "../App.css"; // CSS file for styling

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">MyPortfolio</div>
      <nav className={`nav ${isMobileMenuOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li><a href="#home">ACCUEIL</a></li>
          <li><a href="#about">A PROPOS </a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#services">EXPERIENCE</a></li>
          <li><a href="#services">PROJETS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMobileMenu}>
        &#9776; {/* This is a hamburger icon */}
      </button>
    </header>
  );
};

export default Header;
