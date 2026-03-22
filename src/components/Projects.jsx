import React, { useState } from "react";
import "./Projects.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import vistasplus from "./image/vistasplus.png";
import vistasplus_mobile from "./image/vistasplusPhone.jpeg";
import sudoku from "./image/sudoku.png";
import sudoku_mobile from "./image/sudokuPhone.jpeg";
import rentme from "./image/rentme.png";

const projects = [
  {
    title: "Video Streaming",
    desc: "YouTube-like backend with user registration, upload, like and comment. MongoDB and Mongoose.",
    tech: "Node.js, Express, MongoDB, JWT, Multer",
    github: "https://github.com/deepak212001/VideoStreaming",
    live: "https://vistasplus.vercel.app/",
    image: vistasplus,
    image_mobile: vistasplus_mobile,
  },
  {
    title: "RentMe App",
    desc: "Platform for listing and renting items. RESTful APIs for CRUD. Mobile-first design.",
    tech: "MERN Stack, CSS, JWT",
    github: "https://github.com/deepak212001/RentMe/",
    live: "https://property-listing-website-fullstack.onrender.com/landing",
    image: rentme,
    image_mobile: rentme,
  },
  {
    title: "Sudoku App",
    desc: "Implemented Save & Resume using localStorage. Users can save game state and continue later.",
    tech: "React, CSS, LocalStorage",
    github: "https://github.com/deepak212001/sudoku",
    live: "https://sudokuplay.vercel.app",
    image: sudoku,
    image_mobile: sudoku_mobile,
  },
];

function ProjectsIcon() {
  return (
    <div className="projects-icon">
      <img src="/asserts/triangles.b04486b9.svg" alt="Projects" />
    </div>
  );
}

const Projects = () => {
  const [active, setActive] = useState(0);
  const proj = projects[active];

  const prev = () => setActive((a) => (a === 0 ? projects.length - 1 : a - 1));
  const next = () => setActive((a) => (a === projects.length - 1 ? 0 : a + 1));

  return (
    <div className="projects-section" id="projects">
      <div className="projects-header">
        <ProjectsIcon />
        <h2 className="projects-title">Projects</h2>
      </div>

      <div className="projects-carousel">
        <button
          className="carousel-arrow prev"
          onClick={prev}
          aria-label="Previous project"
        >
          <FaChevronLeft />
        </button>

        <div className="project-mockup">
          <div className="mockup-tablet">
            <div className="mockup-screen">
              <img src={proj.image || sudoku} alt={proj.title} />
            </div>
            <div className="mockup-chat" aria-hidden>
              💬
            </div>
          </div>
          <div className="mockup-phone">
            <div className="mockup-screen">
              <img src={proj.image_mobile || sudoku} alt={proj.title} />
            </div>
          </div>
        </div>

        <button
          className="carousel-arrow next"
          onClick={next}
          aria-label="Next project"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="projects-thumb-bar">
        <div className="thumb-bar-inner">
          {projects.map((p, i) => (
            <button
              key={i}
              className={`project-thumb ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <img src={p.image || sudoku} alt={p.title} />
              <span className="thumb-num">{i + 1}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="project-footer">
        <div className="project-footer-left">
          <h3 className="project-title">{proj.title}</h3>
          <p className="project-desc">{proj.desc}</p>
        </div>
        <div className="project-btns">
          {proj.live && (
            <a
              href={proj.live}
              target="_blank"
              rel="noreferrer"
              className="btn-live"
            >
              <FaArrowUpRightFromSquare /> Live
            </a>
          )}
          {proj.github && (
            <a
              href={proj.github}
              target="_blank"
              rel="noreferrer"
              className="btn-gh"
            >
              <FaGithub /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
