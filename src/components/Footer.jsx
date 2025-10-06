import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left card with logo, tagline, and social */}
        <div className="footer-card">
          <div className="footer-branding">
            <Link to="/" className="footer-logo">
              <img
                src="/images/footer/footerlogo.png"
                alt="Cozy Corner Logo"
                className="logo-img"
              />
            </Link>
            <p className="footer-tagline">Keep your trust on our Master minds.</p>
          </div>

          <div className="social-section">
            <h4>Follow Us</h4>
            <div className="footer-social-icons">
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="whatsapp-icon"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="instagram-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="youtube-icon"
              >
                <FaYoutube />
              </a>
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="facebook-icon"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="twitter-icon"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Useful links */}
        <div className="footer-section useful-links">
          <h3>Useful Links</h3>
          <ul className="footer-links-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-copy">
        <p>© {new Date().getFullYear()} Cozy Corner. All rights reserved.</p>
      </div>
    </footer>
  );
}
