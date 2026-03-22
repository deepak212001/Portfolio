import React from "react";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <p className="hero-greeting">hello world</p>
        <h1 className="hero-tagline">
          I design & craft beautiful digital experiences for users, that{" "}
          <em>solve your business tasks</em>
        </h1>
        <div className="hero-buttons">
          <a href="#projects" className="btn-gradient">
            See Projects
            <span className="btn-arrow">
              <FaArrowRight />
            </span>
          </a>
          <a
            href="https://drive.google.com/file/d/1urmYCBgo14z-0wUMEwUv_pdwoVjAHXDn/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <FaFileLines />
            Resume
          </a>
        </div>
      </div>
      <div className="hero-right">
        <p className="hero-intro">
          Hello, I'm Deepak, a Full Stack Developer with experience building web
          applications using React, Node.js, MongoDB, and more. I love turning
          ideas into functional, elegant solutions.
        </p>
      </div>
    </section>
  );
}

export default Home;
