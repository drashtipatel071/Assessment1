import React from 'react';

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>I'm a passionate React developer with 3+ years of experience building modern web applications.</p>
                        <p>I love creating intuitive, responsive interfaces that provide excellent user experiences.</p>
                        <div className="skills-container">
                            <span className="skill-badge">React</span>
                            <span className="skill-badge">JavaScript</span>
                            <span className="skill-badge">HTML/CSS</span>
                            <span className="skill-badge">Node.js</span>
                        </div>
                    </div>
                    <div className="about-image">
                        <div className="image-placeholder">👨‍💻</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;