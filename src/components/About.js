import React from 'react';

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>Hi, I'm Drashti Patel! I'm a passionate React developer with a strong focus on building scalable and modern web applications. With experience in the frontend ecosystem, I've developed a deep understanding of user-centric design.</p>
                        <p>My journey in tech started with a curiosity for how things work on the web. Since then, I've mastered JavaScript, React, and various other modern web tools to bring creative ideas to life. I specialize in turning complex problems into simple, beautiful, and intuitive interfaces.</p>
                        <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source, or constantly learning. I'm always eager to collaborate and take on new challenges!</p>
                        <div className="skills-container">
                            <span className="skill-badge">React</span>
                            <span className="skill-badge">JavaScript</span>
                            <span className="skill-badge">TypeScript</span>
                            <span className="skill-badge">HTML/CSS</span>
                            <span className="skill-badge">Tailwind CSS</span>
                            <span className="skill-badge">Node.js</span>
                            <span className="skill-badge">MongoDB</span>
                            <span className="skill-badge">Git & GitHub</span>
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