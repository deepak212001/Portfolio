import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import StarryBackground from "./components/StarryBackground";
import "./App.css";

function App() {
  return (
    <div className="app">
      <StarryBackground />
      <Navbar />
      <section id="home" className="section home"><Home /></section>
      <section id="about" className="section"><About /></section>
      <section id="skills" className="section"><Skills /></section>
      <section id="projects" className="section"><Projects/></section>
      <section id="contact" className="section">< Contact /></section>
    </div>
  );
}

export default App;
