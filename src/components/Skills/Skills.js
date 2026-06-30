import React from 'react';
import './Skills.css';

const Skills = () => {
  const allSkills = [
    'React', 'JavaScript (ES6+)', 'HTML5', 'CSS3/SCSS', 'Tailwind CSS', 'Node.js', 'Git/GitHub'
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Technical Arsenal</h2>
        <p className="skills-subtitle">Technologies I've mastered to bring ideas to life.</p>
        
        <div className="skills-cloud-container">
          <div className="bento-card single-bento-card">
            <div className="bento-card-body">
              <div className="unified-pill-container">
                {allSkills.map((skill, index) => (
                  <span key={index} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
