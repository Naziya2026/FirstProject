import React from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.css";

import homedesign from "../assets/homedesign.png";
import interior4 from "../assets/interior4.png";
import home3 from "../assets/home3.jpg";

export default function ServicesSection() {
  return (
    <section className="services-section">

      {/* Heading inside homedesign image */}
      <div className="services-heading-container">
        <img src={homedesign} alt="Why Team Bricks And Beams?" className="heading-image" />
        <h2 className="services-heading">Why Team <br />Bricks And Beams?</h2>
      </div>

      {/* Panels container */}
      <div className="services-panels">

        {/* Left panel */}
        <div className="service-panel">
          <h3>Design Consulting</h3>
          <img src={interior4} alt="Design Consulting" className="service-img" />
          <p>
            We know every project presents its own unique set of circumstances. We strive to eliminate all the design hurdles for you and provide you with an all new living & working space by incorporating the design concepts you desire.
          </p>
          <Link to="/services" className="read-more-btn">Read More</Link>
        </div>

        {/* Right panel */}
        <div className="service-panel">
          <h3>Construction Consulting</h3>
          <p>
            In the pursuit of effective use of space, user well-being, and functional design, the profession of home design intact with lifestyle was born. Bricks & Beams have been committed to creating tasteful homes & commercial spaces since 1989.
          </p>
          <img src={home3} alt="Construction Consulting" className="service-img" />
          <button className="read-more-btn disabled" disabled>
            Read More
          </button>
        </div>

      </div>
    </section>
  );
}
