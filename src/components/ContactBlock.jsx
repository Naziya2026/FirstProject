import React from 'react';
import './ContactBlock.css'; 
import dineImage from '../assets/image.jpg';
import leftBorder from '../assets/leftborder.png';
import rightBorder from '../assets/rightborder.png';

export default function ContactBlock() {
  return (
    <div className="contact-border-wrapper">
      {/* Side Borders inside this section only */}
      <img src={leftBorder} alt="" className="side-border left" />
      <img src={rightBorder} alt="" className="side-border right" />

      {/* Content inside border area */}
      <div className="contact-wrapper">
        {/* Top Text */}
        <div className="contact-top-text">
          Are you embarking on a new space or renovation project and need assistance?  
          <br />
          Fill out the below form and one of us will get in touch with you shortly.
        </div>

        {/* Contact Section */}
        <div className="contact-container">
          <div className="image-section">
            <img src={dineImage} alt="Dining space inspiration" className="base-image" />
          </div>

          <div className="form-section">
            <div className="form-box">
              <h1>Contact Us</h1>
              <form>
                <input type="text" placeholder="Enter your Name" required />
                <input type="tel" placeholder="Enter your phone number" required />
                <input type="email" placeholder="Enter a valid email address" required />
                <textarea placeholder="Enter your message" required></textarea>
                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
