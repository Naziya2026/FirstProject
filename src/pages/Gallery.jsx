import React from "react";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";


import img1 from "../assets/testi3.png";
import img2 from "../assets/gallery2.jpeg";
import img3 from "../assets/gallery3.jpeg";
import img4 from "../assets/gallery4.jpeg";
import img5 from "../assets/gallery5.jpeg";
import img6 from "../assets/gallery6.jpeg";
import img7 from "../assets/gallery7.jpeg";
import img8 from "../assets/gallery8.jpeg";
import img9 from "../assets/gallery9.png";
import underlineImg from "../assets/testi.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <div className="gallery-page">
      <div className="gallery-title-container">
        <h1 className="gallery-title">Gallery</h1>
        <img
          src={underlineImg}
          alt="underline decoration"
          className="heading-underline"
        />
      </div>

      <div className="masonry-gallery">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="gallery-item"
            style={{ animationDelay: `${idx * 100}ms` }}
            onClick={() => {
              if (idx === 0) navigate("/gallery/testi3"); 
            }}
          >
            <img src={src} alt={`Gallery ${idx + 1}`} loading="lazy" />
            <span className="hover-label">View Photo</span>
          </div>
        ))}
      </div>
    </div>
  );
}
