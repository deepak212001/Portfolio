import React from 'react';
import './Projects.css'; // CSS is included separately
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


import sudoku from './image/sudoku.png';
import rentme from './image/rentme.png';
// import video from './image/video.png';


const projects = [
  {
    title: 'Sudoku App',
    description: [
      "Implemented Save & Resume functionality using localStorage.",
      "Users can save their game state and return later to continue.",
      "Restores all filled cells and puzzle data on reload.",
      "Improves user experience by preventing data loss.",
    ],
    tech: 'React, CSS, LocalStorage',
    github: 'https://github.com/deepak212001/sudoku',
    live: 'https://sudokuplay.vercel.app',
    image: sudoku, // This will use the imported sudoku image
  },
  {
    title: 'Video Streaming Backend',
    description: [
      'Developed YouTube-like backend with user registration, Upload video, like and comment functionalities.',
      'Implemented nested likes and comments features for enhanced user engagement.',
      'Leveraged MongoDB and Mongoose ORM to establish efficient data storage and retrieval mechanisms, optimizing system performance',
    ],
    tech: 'Node.js, Express, MongoDB, Mongoose, JWT, Multer',
    github: 'https://github.com/deepak212001/VideoStreamingBackend',
    live: '',
    image: '/images/video.png',
  },
  {
    title: 'RentMe App',
    description: [
      'Created a platform for users to list and rent items or properties.',
      'Designed and built RESTful APIs for handling property listings, enabling users to perform CRUD operations',
      'Mobile-first design using React and CSS.',
      'Utilized MongoDB for managing and storing user data and property listings',
    ],
    tech: 'MERN Stack (MongoDB, Express, React, Node.js), CSS, JWT',
    github: 'https://github.com/deepak212001/RentMe/',
    live: 'https://property-listing-website-fullstack.onrender.com/landing',
    image: rentme,
  }
];

const Projects = () => {
  return (
    <>
      <h2 className="headding">Projects<hr /></h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div className="project" key={index}>
            <div className="project-content">
              <h2 className="title">{proj.title}</h2>
              {proj.description.map((line, i) => (
                <p key={i} className="desc">▸ {line}</p>
              ))}
              <p className="tech"><i>{proj.tech}</i></p>
              <div className="icons">
                {proj.github && <a href={proj.github} target="_blank" rel="noreferrer"><FaGithub /></a>}
                {proj.live && <a href={proj.live} target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a>}
              </div>
            </div>
            <div className="project-image">
              <img src={proj.image || './images/sudoku.png'} alt={proj.title} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
