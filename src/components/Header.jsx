import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Make sure your CSS is imported

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact Us</Link>
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
