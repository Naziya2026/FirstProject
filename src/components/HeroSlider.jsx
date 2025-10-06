import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroSlider.css";

// Assets
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import heroVideo from "../assets/video2.mp4";

const slides = [
  {
    type: "image",
    src: home1,
    text: <>Build. Design. <span className="highlight">Transform.</span></>,
  },
  {
    type: "image",
    src: home2,
    text: <>Modern <span className="highlight">Interior Spaces</span> with Cultural Touch.</>,
  },
  {
    type: "image",
    src: home3,
    text: <>Where <span className="highlight">Vision</span> Meets <span className="highlight">Structure.</span></>,
  },
  {
    type: "video",
    src: heroVideo,
    text: <>Experience Our <span className="highlight">Work in Motion</span>.</>,
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-slide with custom durations
  useEffect(() => {
    const durations = [5000, 5000, 5000, 10000]; // 10s for video
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, durations[current]);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[current];

  return (
    <div className="hero-slider">
      {/* Media: Image or Video */}
      {currentSlide.type === "image" ? (
        <img
          src={currentSlide.src}
          alt={`Slide ${current + 1}`}
          className="hero-image"
        />
      ) : (
        <video
          src={currentSlide.src}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {/* Text Overlay */}
      <div className="overlay">
        <AnimatePresence mode="wait">
          <motion.h1
            key={current}
            className="overlay-text"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          >
            {currentSlide.text}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Manual Controls (Bottom Right) */}
      <div className="slider-controls">
        <button onClick={prevSlide}>&#9650;</button> {/* Up arrow */}
        <button onClick={nextSlide}>&#9660;</button> {/* Down arrow */}
      </div>
    </div>
  );
}
