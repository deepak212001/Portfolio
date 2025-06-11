import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";

import StarryBackground from "./components/StarryBackground";
import "./App.css";

function App() {
  return (
    <div className="app">
      <StarryBackground />
      <Navbar />
      <section id="home" className="section home"><Home /></section>
      <section id="about" className="section">About Section</section>
      <section id="skills" className="section">skills Section</section>
      <section id="projects" className="section">Projects Section</section>
      <section id="contact" className="section">< Contact /></section>
    </div>
  );
}

export default App;
