import React from 'react';
import '../styles/Portfolio.css';
import marker from '../assets/marker.svg'

import image1 from '../assets/p1.png';
import image2 from '../assets/p2.png';
import image3 from '../assets/p3.png';
import image4 from '../assets/p4.png';
import image5 from '../assets/p5.png';
import image6 from '../assets/p6.png';
import image7 from '../assets/p7.png';
import image8 from '../assets/p8.png';

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const Portfolio = () => {
  return (
    <div className="portfolio-container ">
      <h2 className="portfolio-title ">Portfolio</h2>
      <div className="marker">
                <img src={marker} alt="marker img" />
      </div>

      <div className="portfolio-grid ">
        {images.map((src, index) => (
          <div className="portfolio-item fade-in-scale" key={index}>
            <img src={src} alt={`Portfolio ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
