import React, { useState } from "react";
import "./Navbar.css";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <nav className="navbar">
      <Link to="home" smooth={true} duration={100} className="nav-left">@Deepak Yadav</Link>

      <div className="nav-center">
        <Link to="about" smooth={true} duration={100} >About</Link>
        <Link to="skills" smooth={true} duration={100} >Skills</Link>
        <Link to="projects" smooth={true} duration={100} >Projects</Link>
        <Link to="contact" smooth={true} duration={100} >Contact</Link>
      </div>

      <div className="nav-right">
        <a href="https://www.linkedin.com/in/deepakyadav24/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/deepak212001" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://x.com/yadav_deepak24" target="_blank" rel="noreferrer"><FaXTwitter /></a>
        <a href="mailto:yadavdeepak212001@gmail.com"><MdEmail /></a>
      </div>
    </nav>
  );
}

export default Navbar;
