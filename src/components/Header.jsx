import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <img
        src="/images/nav/leftright.png"
        alt="Left decorative"
        className="decorative-image left"
      />

      <div className="center-content">
        <div className={`logo-container ${scrolled ? "scrolled" : ""}`}>
          <img src="/images/nav/logo.jpg" alt="Logo" className="logo" />
        </div>

        {/* Hamburger icon (visible on mobile) */}
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>

        {/* Navbar */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </nav>
      </div>

      <img
        src="/images/nav/leftright.png"
        alt="Right decorative"
        className="decorative-image right"
      />
    </header>
  );
}
