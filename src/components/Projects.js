import React from 'react';

const Projects = () => {
    const projects = [
        { 
            id: 1, 
            name: "E-Commerce Dashboard", 
            description: "A full-stack dashboard for managing products, sales, and users. Includes real-time analytics and charts.", 
            icon: "📊"
        },
        { 
            id: 2, 
            name: "SimpleBlog Platform", 
            description: "A Markdown-supported blogging platform built with React and Node.js. Allows creating and editing blog posts.", 
            icon: "✍️"
        },
        { 
            id: 3, 
            name: "Weather Tracker App", 
            description: "A responsive weather application fetching real-time data from an external API, featuring location-based forecasts.", 
            icon: "⛅"
        },
        { 
            id: 4, 
            name: "Portfolio Website", 
            description: "A personal developer portfolio built with React to showcase skills, projects, and contact information.", 
            icon: "👨‍💻"
        },
        { 
            id: 5, 
            name: "Task Management App", 
            description: "A productivity app for managing daily tasks with drag-and-drop functionality and progress tracking.", 
            icon: "✅"
        },
        { 
            id: 6, 
            name: "Real-time Chat App", 
            description: "A messaging application featuring instant messaging and online presence indicators.", 
            icon: "💬"
        }
    ];

    return (
        <section id="projects" className="projects projects-section">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-icon">{project.icon}</div>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;