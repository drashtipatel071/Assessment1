import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h2 className="hero-subtitle">Hello, I'm</h2>
          <h1 className="hero-title">
            <span className="gradient-text">Drashti</span> Patel
          </h1>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Creative Developer
          </h3>
          <p className="hero-description">
            I build exceptional and accessible digital experiences for the web. 
            Passionate about bridging the gap between design and engineering.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me <Download size={18} />
            </a>
          </div>
        </div>
        
        {/* Abstract shape for aesthetics */}
        <div className="hero-image-container animate-fade-in">
          <div className="abstract-shape"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
