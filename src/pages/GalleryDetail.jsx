import React from "react";
import "./Gallery.css"; 

import img1 from "../assets/home1.jpg";
import img2 from "../assets/home2.jpg";
import img3 from "../assets/home4.png";
import img4 from "../assets/testi3.png";
import img5 from "../assets/gallery11.jpg";
import img6 from "../assets/gallery12.jpg";
import img7 from "../assets/gallery15.jpg";
import img8 from "../assets/gallery16.jpg";
import img9 from "../assets/interior1.png";

const detailImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function GalleryDetail() {
  return (
    <div className="gallery-page">
      <div className="gallery-title-container">
        <h1 className="gallery-title">Project Gallery</h1>
      </div>

      <div className="masonry-gallery">
        {detailImages.map((src, idx) => (
          <div
            key={idx}
            className="gallery-item"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
           <img src={src} alt={`Related ${idx + 1}`} loading="lazy" />
            
          </div>
        ))}
      </div>
    </div>
  );
}
