import React from 'react';
import './Testimonials.css';

import person1 from '../assets/testi3.png';
import person2 from '../assets/testi1.png';
import person3 from '../assets/testi2.jpeg';
import person4 from '../assets/testi4.png';
import underlineImg from '../assets/testi.png'; 
import decorativeImage from '../assets/testiborder.png'; 


export default function Testimonials() {
  return (
    <div className="testimonials-container">
      
      {/* Heading with underline */}
      <div className="testimonials-heading-wrapper">
        <h1 className="testimonials-heading">Our Happy Clients</h1>
        <img src={underlineImg} alt="Underline" className="heading-underline" />
      </div>

      {/* Testimonials List */}
      <div className="testimonials-list">

        {/* Testimonial 1 */}
        <div className="testimonial-card">
          <div className="testimonial-image-wrapper">
          <img src={person1} alt="R.Ashwin" className="testimonial-img" />
          </div>
          <div className="testimonial-text">
            <h3 className="client-name">Mrs. Prithi Ashwin & Mr. Ashwin R</h3>
            <h2 className="client-location">Chennai</h2>
            <p>
              “ Bricks And Beams understood the pulse of our requirement with regard to transforming our home into something beautiful and functional. They were able to understand our perspectives effectively and delivered what was necessary. Our home looks absolutely stunning and elegant post the transformation. Thanks to their creative touch. Team Bricks and Beams is best in town and they are focused & dedicated to their deliverables which is their plus. They went extra mile in sticking to the delivery date they promised. They can be your trusted interior partners any day. ”  
            </p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card">
          <div className="testimonial-image-wrapper">

          <img src={person2} alt="Hariharan" className="testimonial-img" />
          </div>
          <div className="testimonial-text">
            <h3 className="client-name">MR. Hariharan & Family</h3>
            <h2 className="client-location">Chennai</h2>

            <p>
              “ We are a family of four with humble and rooted backgrounds… we wanted an aspirational interior designers to work on our dream home. We found about Bricks And Beams through their social media page … and approached them for their services. Their unique working style and design language coincided with ours. Their efficient and passionate style of working were their USP. We had a great working relationship with them and would like to collaborate with them on future projects as well. ”  
            </p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial-card">
          <div className="testimonial-image-wrapper">

          <img src={person3} alt="Hari" className="testimonial-img" />
          </div>
          <div className="testimonial-text">
            <h3 className="client-name">Mr Harikrishna & Mrs Aarti Harikrishna</h3>
            <h2 className="client-location">Coimbatore</h2>

            <p>
              “ Loved their work. Quintessential ❤️ Highly recommend them. Artistic, easy to work with and communicate ur ideas. They put a lot of effort to make a house into ur home 🙂 Positives:Professionalism, Punctuality, Quality, Responsiveness, Value ”  
            </p>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className="testimonial-card">
          <div className="testimonial-image-wrapper">

          <img src={person4} alt="Radhika" className="testimonial-img" />
          </div>
          <div className="testimonial-text">
            <h3 className="client-name">Mrs. Radhika Krish</h3>
            <h2 className="client-location">Chennai</h2>


            <p>
              “ we engaged Bricks And Beams for a minimalistic transformation in our house. Boy they did a fantastic job. The conceptualized our stairway that travels to predominately most of the parts of our house with all our collectibles that travelled along with our families over generation. That is my favorite spot of the house. I always pause and soak it all in every time I go up or come down. Thanks for making my vision come alive team Bricks And Beams. ”  
            </p>
            
    <img
      src={decorativeImage}
      alt="Decorative bottom"
      className="testimonial-bottom-img"
    />
          </div>
        </div>

      </div>
    </div>
  );
}
