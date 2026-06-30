import React from 'react';

function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">My Skills</h2>

                <div className="skills-grid">

                    <div className="skill-card">
                        <div className="skill-icon">⚛️</div>
                        <h3>React JS</h3>
                        <p>Building modern and responsive user interfaces using React.</p>
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon">💻</div>
                        <h3>JavaScript</h3>
                        <p>Creating dynamic and interactive web applications.</p>
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon">📘</div>
                        <h3>TypeScript</h3>
                        <p>Writing robust and type-safe JavaScript code.</p>
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon">🎨</div>
                        <h3>HTML & CSS</h3>
                        <p>Designing beautiful, responsive and modern layouts.</p>
                    </div>
                    
                    <div className="skill-card">
                        <div className="skill-icon">🪶</div>
                        <h3>Tailwind CSS</h3>
                        <p>Rapid UI development with utility-first CSS framework.</p>
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon">🟢</div>
                        <h3>Node JS</h3>
                        <p>Developing backend APIs and server-side applications.</p>
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon">🍃</div>
                        <h3>MongoDB</h3>
                        <p>NoSQL database management for modern web applications.</p>
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon">🔥</div>
                        <h3>Firebase</h3>
                        <p>Authentication, database and hosting integration.</p>
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon">🐙</div>
                        <h3>Git & GitHub</h3>
                        <p>Version control and collaborative software development.</p>
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon">📱</div>
                        <h3>Responsive Design</h3>
                        <p>Making websites mobile-friendly and fully responsive.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Skills;