import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a passionate developer with a strong focus on creating robust, scalable, and visually stunning web applications. 
              My journey in software development began with a curiosity for how things work on the internet, which quickly turned into a 
              dedication to mastering modern web technologies.
            </p>
            <p>
              I specialize in ReactJS and the broader JavaScript ecosystem. I believe in clean code, component reusability, and 
              creating intuitive user interfaces that provide exceptional user experiences.
            </p>
          </div>
          
          <div className="about-visual">
            <div className="visual-card">
              <div className="card-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="card-body">
                <pre>
                  <code>
{`const developer = {
  name: "Drashti Patel",
  role: "Creative Developer",
  hobbies: ["Coding", "Design", "Coffee"],
  isPassionate: true,
  work() {
    return this.buildAwesomeThings();
  }
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
