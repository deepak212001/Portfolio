import React from "react";
import "./About.css";
import profileImg from "../assets/profile.jpg";
import leetcode from "../assets/lc.jpg";
import CodingNinjas from "../assets/codingninja.jpeg";


const About = () => {
  return (
    <>
      <h2 className="headding">About <hr /></h2>
      <div className="about-section" id="about">
        <div className="about-left">
          <img src={profileImg} alt="Profile" />
        </div>
        <div className="about-right">
          <p>
            I'm <span className="highlight-name">Deepak Yadav</span>, a passionate Full Stack Developer currently looking for opportunities. 'm currently pursuing Masters in Computer Applications with the major in Software Engineering. As a CS student, I have been working on various projects in the past. The tech stack that I mostly used are HTML, CSS, JavaScript, React, Node ,Express, MongoDB, SQL,AWS etc. I have knowledge on DSA, OOPS and DBMS
          </p>

          <h2>Education</h2>
          <p><strong>University School of Information, Communication, and Technology (GGSIP University), Delhi</strong></p>
          <p className="blue">
            <p>Masters in Computer Application (MCA) in Software Engineering </p>
            <p>CGPA: 8.518</p>
          </p>

          <h2>Achievements</h2>
          <ul className="grey">
            <li>‣ Solved <a className="ach">300+ problems</a> on LeetCode</li>
            <li>‣ Achievements <a className="ach">100 Day Badge</a> of 2024 on LeetCode.</li>
            <li>‣ Solved <a className="ach">100+ problems</a> on Code360 by CodingNinjas.</li>
          </ul>

          <h2>Coding Profiles</h2>
          <div className="coding-icons">
            <a href="https://leetcode.com/u/deepakyadav21/" target="_blank"><img src={leetcode} alt="" /></a>
            <a href="https://www.naukri.com/code360/profile/yadavdeepak" target="_blank"><img src={CodingNinjas} alt="" /></a>
            <a href="#"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div></>
  );
};

export default About;
