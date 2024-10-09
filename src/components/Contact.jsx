import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-header">
        <h2>Let's work together...</h2>
        <p>How do you take your coffee?</p>
      </div>
      <div className="contact-links">
        <div className="neon-light">
            <a href="https://www.linkedin.com/in/montyaction/" target="_blank" className="btn contact-details" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
            </a>
        </div>
        <div className="neon-light">
            <a id="profile-link" href="https://github.com/montyaction" target="_blank" className="btn contact-details" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
            </a>
        </div>
        <div className="neon-light">
            <a href="https://twitter.com/MontyKanwar19" target="_blank" className="btn contact-details" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
            </a>
        </div>
        <div className="neon-light">
            <a href="mailto:montyaction.com" className="btn contact-details">
            <i className="fas fa-at"></i> Send a mail
            </a>
        </div>
        <div className="neon-light">
            <a href="tel:+919826348612" className="btn contact-details">
            <i className="fas fa-mobile-alt"></i> Call me
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact