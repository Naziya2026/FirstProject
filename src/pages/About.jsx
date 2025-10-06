import React from "react";
import aboutImage from "../assets/about.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-left-border" />
      <div className="about-right-border" />
      <div className="about-content">
        {/* Left - Text */}
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Bricks and Beams is a team of modern minds, with a shared vision to achieve the impossible in design, mixing contemporary with cultural, creating fascinating atmospheres that are reassuringly warm, approachable and comfortable. With values that are layered with visual interest, our approach is tailored to each client and site, ensuring that each space has its’ distinctive personality.
          </p>
          <p>
            Bricks And Beams conceptualises and designs architectural works of art, for interior and exterior spaces, distinguished by their warmth, individuality and attention to detail. Driven by the simple belief that great design brings greater quality to life, the company's past and current projects include homes, retail spaces and work environments.
          </p>
          <p>
            With our skills base and combined expertise of over 3 decades, Bricks and Beams covers the spectrum of design, development and deliverability, creating unique spaces that embody beauty and aesthetic, achieving an impeccable art of living.
          </p>
        </div>

        {/* Right - Image */}
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
      </div>
      <div className="about-bottom-text">
  <h2>Encompassing Creativity</h2>
  <p>
    Our immaculate service spans all things design — from conceptualisation to accessorising, encompassing traditional to modern, bold and colourful to sleek and minimal styles, and everything in between.
  </p>
</div>
    </div>
  );
}
