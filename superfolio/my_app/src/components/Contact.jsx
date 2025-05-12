import React from 'react';
import '../styles/Contact.css'
import marker from '../assets/marker.svg'

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="marker">
                <img src={marker} alt="marker img" />
      </div>
      <div className="contact-wrapper">

         <div className="contact-container fade-in-scale">
           <div className="contact-form ">
             <label>Name</label>
             <input type="text" placeholder="Your Name" />
   
             <label>Email</label>
             <input type="email" placeholder="Your Email" />
   
             <label>Message</label>
             <textarea placeholder="Your Message"></textarea>
   
             <button type="submit">Send</button>
           </div>
        

        <div className="contact-info fade-in-scale">
          <h3>Let’s talk how I can help you!</h3>
          <p>If you like my work and want to avail my services then drop me a message using the contact form.</p>
          <p>Or get in touch using my email, Skype or my contact number.</p>
          <p>See you!</p>

          <p><strong>Email:</strong> <a href="mailto:walter@company.com">walter@company.com</a></p>
          <p><strong>Skype:</strong> <a href="skype:username@skype.com">username@skype.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+07181110011">+0718-111-0011</a></p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
