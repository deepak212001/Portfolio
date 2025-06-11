import React from "react";
import "./Home.css";
import profileImg from "../assets/logo.png"; // Replace with actual image path

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="text-section">
          <h1>
            Hi 👋, I'm <span className="highlight">Deepak Yadav</span> a<br />
            Software Development <br />
            Engineer.
          </h1>
          <p className="subheading">Transforming visions into seamless us</p>
          <p className="muted">Stick around to see my work!</p>
          <div className="buttons">
            <a href="#contact" className="btn-primary">Hire me</a>
            <a href="https://drive.google.com/file/d/1zTHw9a8T-SptHeKhTXc5UV5OrH3rbviY/view?usp=sharing" target="_blank" className="btn-outline">Download CV</a>
          </div>
        </div>
        <div className="image-section">
          <img src={profileImg} alt="profile" />
        </div>
      </div>
    </section>
  );
}

export default Home;
