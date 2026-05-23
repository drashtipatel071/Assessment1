import React from 'react';

function Projects() {
    const projects = [
        { id: 1, name: "React", version: "18.2.0", description: "A JavaScript library for building user interfaces", icon: "⚛️" },
        { id: 2, name: "Node.js", version: "20.0.0", description: "JavaScript runtime built on Chrome's V8 engine", icon: "🚀" },
    
        { id: 4, name: "MongoDB", version: "6.0.0", description: "NoSQL database for modern applications", icon: "🍃" }
    ];

    return (
        <section id="projects" className="projects projects-section">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-icon">{project.icon}</div>
                            <h3>{project.name} ({project.version})</h3>
                            <p>{project.description}</p>
                            <button className="btn-outline">Download</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;