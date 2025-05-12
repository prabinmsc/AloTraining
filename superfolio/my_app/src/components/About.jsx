import React from 'react';
import '../styles/About.css';
import profileImage from '../assets/img2.jpg'; // use your correct image path

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>Hello! I’m Walter Patterson.</h2>
          <p>
            I am passionate about UI/UX design and Web Design. I am a skilled front-end developer
            and master of graphic design tools such as Photoshop and Sketch. I am a quick learner
            and a team worker that gets the job done. I can easily capitalize on low hanging fruits
            and quickly maximize timely deliverables for real-time schemas.
          </p>

          <div className="info-list">
            <p><strong>Age:</strong> <span>28</span></p>
            <p><strong>Email:</strong> <span>walter@company.com</span></p>
            <p><strong>Skype:</strong> <span>username@skype.com</span></p>
            <p><strong>Phone:</strong> <span>+0718-111-0011</span></p>
            <p><strong>Address:</strong> <span>New Delhi, India</span></p>
            <p><strong>Status:</strong> <span>Available</span></p>
          </div>
        </div>

        <div className="about-image fade-in-right">
          <img src={profileImage} alt="Walter Patterson" />
        </div>
      </div>
    </section>
  );
};

export default About;
