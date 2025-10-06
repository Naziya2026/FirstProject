import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import mainImage from '../assets/service1.png';
import secondaryImage from '../assets/service2.jpeg';

const Services = () => {
  return (
    <section className="service-section">
      <div className="text-content">
        <h4 className="subheading">INNOVATION</h4>
        <h2 className="heading">
          Interior <br />
          <span>Design Services</span>
        </h2>
        <p className="description">
          Nobody understands the beauty of interiors the way we do – just as no two spaces are alike, no two designs are the same.
          At Bricks and Beams, our customised, concept-based bespoke offerings translate into luxurious homes, dreamy workspaces,
          unique renovations, restoration projects and more. From elaborate to minimal, we balance every design style in the most
          seamless way we know.
        </p>
        <Link to="/services-details" className="read-more-btn">Read More</Link>

      </div>

      <div className="visual-content">
        {/* Decorative circles */}
        <div className="circle circle-large"></div>
        <div className="circle circle-medium"></div>
        <div className="circle circle-small"></div>

        {/* Two circular images */}
        <div className="image-circle image-circle-1">
          <img src={mainImage} alt="Interior main" />
        </div>
        <div className="image-circle image-circle-2">
          <img src={secondaryImage} alt="Interior secondary" />
        </div>
      </div>
    </section>
  );
};

export default Services;
