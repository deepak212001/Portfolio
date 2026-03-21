import React from "react";
import "./About.css";
import profileImg from "../assets/profile.jpg";

import leetcode from "../assets/lc.jpg";
import CodingNinjas from "../assets/codingninja.jpeg";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

function AboutDeco() {
  return (
    <div className="about-deco">
      <img src="/asserts/mixed.35b891e2.svg" alt="About" className="about-deco-img" />
    </div>
  );
}

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-header">
        <AboutDeco />
        <h2 className="about-name">Deepak Yadav</h2>
      </div>
      <div className="about-grid">
        <div className="about-left">
          <p className="about-tagline">
            My approach to the work is <em>logic, consistency, and rationality</em>
          </p>
        </div>
        <div className="about-right">
          <p className="about-bio">
            I'm a passionate Full Stack Developer with 1+ year of experience in Full Stack Development, currently pursuing Masters in Computer Applications. I build web applications using React, Node.js, MongoDB, and more. Strong foundation in DSA, OOP, and DBMS. 300+ LeetCode problems solved.
          </p>
          <p className="about-bio">
            Education: MCA from GGSIP University, Delhi (CGPA: 8.518). Always eager to learn and solve real-world problems through code.
          </p>
          <div className="about-socials">
            <a href="https://www.linkedin.com/in/deepakyadav24/" target="_blank" rel="noreferrer" className="social-pill" aria-label="LinkedIn">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/deepak212001" target="_blank" rel="noreferrer" className="social-pill" aria-label="GitHub">
              <FaGithub /> GitHub
            </a>
            <a href="https://x.com/yadav_deepak24" target="_blank" rel="noreferrer" className="social-pill" aria-label="X">
              <FaXTwitter /> X
            </a>
            <a href="https://leetcode.com/u/deepakyadav21/" target="_blank" rel="noreferrer" className="social-pill" aria-label="LeetCode">
              <img src={leetcode} alt="" /> LeetCode
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
