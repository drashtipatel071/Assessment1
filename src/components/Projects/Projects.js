import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: [
        'A full-featured e-commerce platform with product search, cart functionality, and secure user authentication.',
        'Features seamless Stripe payment integration for real-time transactions.'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      description: [
        'An interactive task management dashboard featuring drag-and-drop functionality.',
        'Supports real-time updates and team collaboration tools.'
      ]
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: [
        'A responsive weather application providing accurate, real-time climate forecasting.',
        'Leverages external APIs to display interactive, mobile-optimized data visualizations.'
      ]
    },
    {
      id: 4,
      title: 'AI Content Generator',
      description: [
        'An AI-powered web application that generates marketing copy and blog posts.',
        'Integrates the OpenAI API with a fully custom rich text editor.'
      ]
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: [
        'A comprehensive analytics dashboard for social media managers to monitor multi-channel campaigns.',
        'Visualizes real-time engagement metrics and performance analytics through interactive charts.'
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-description-container">
                  {project.description.map((para, index) => (
                    <p key={index} className="project-description-paragraph">{para}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
