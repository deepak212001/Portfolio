import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Mom’s Genie",
      description: "Grocery and recipe web app",
      tech: "React, Node.js, MongoDB",
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      name: "TownKart",
      description: "E-commerce solution",
      tech: "React, Express, MongoDB",
      github: "https://github.com",
      live: "https://demo.com"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p><strong>Tech:</strong> {project.tech}</p>
          <a href={project.github}>GitHub</a> | <a href={project.live}>Live</a>
        </div>
      ))}
    </section>
  );
};

export default Projects;