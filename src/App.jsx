import React from "react";
import Navbar from "./components/Navbar";
import BackgroundEffects from "./components/BackgroundEffects";
import Home from "./components/Home";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BackgroundEffects />
      <Navbar />
      <section id="home"><Home /></section>
      <About />
      <WorkExperience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
