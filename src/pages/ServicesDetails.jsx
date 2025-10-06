import React from 'react';
import './ServicesDetails.css';
import { Link } from 'react-router-dom';


import interior4 from '../assets/interior4.png';
import service1 from '../assets/service1.png';
import interior2 from '../assets/interior2.png';
import interior1 from '../assets/interior1.png';

const servicesData = [
  {
    id: 1,
    title: "Customised Creations",
    img: interior4,
    alt: "Customised Creations",
    description:
      "For all the countless elements that make you unique, we create a truly personal space that matches your style and reflects your personality. Our range of unseen possibilities can be tailored to your exact requirement – in a spectrum of colors, patterns, alignments and material.",
  },
  {
    id: 2,
    title: "Contemporary",
    img: service1,
    alt: "Contemporary Design",
    description:
      "We wear our modern style with pride, serving as the perfect starting point for a contemporary interior. Balancing earthy, sophisticated materials alongside modern touches and impactful accessories, this interior shines in its modesty, delicate and bold, in one.",
  },
  {
    id: 3,
    title: "Vintage",
    img: interior2,
    alt: "Vintage Style",
    description:
      "There is no era that is more beautiful to recreate in your home than the 1950s and 60s, especially because it means luxurious fabrics, fascinating colors and original blends of elements. Think breath-taking wallpapers, mirrors that boast, tasteful art pieces and aesthetic tea-tables. Oh, did you also just picture a large chandelier?",
  },
  {
    id: 4,
    title: "Fusion",
    img: interior1,
    alt: "Fusion Design",
    description:
      "Fusing patterns and styles that seem vastly different and never a match, can make for a creative, gorgeous and fashionable setting, but it’s also hard to pull off a cohesion. Marrying an opposite is never easy, is it? Think contrasting patterns, eras and traditions. We love it, because there are no rules!",
  },
];

export default function ServicesDetails() {
  return (
    <div className="services-details-container">
      {/* Decorative Borders */}
      <div className="services-left-border" />
   

      <section className="services-details-section">
        <h1 className="common-heading">Interior Design Services</h1>
        <p className="services-tagline">Your vision, our artistry</p>

        <div className="services-cards-container">
          {servicesData.map(({ id, title, img, alt, description }) => (
            <div
              key={id}
              className={`service-card ${id % 2 === 0 ? "zag" : "zig"}`}
            >
              <div className="service-img-wrapper">
                <img src={img} alt={alt} />
              </div>
              <div className="service-text">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="back-button-wrapper">
          <Link to="/services" className="back-button">
            ← Back to Services
          </Link>
        </div>
      </section>
    </div>
  );
}
