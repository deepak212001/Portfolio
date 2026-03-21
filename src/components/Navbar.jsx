import React, { useState } from "react";
import "./Navbar.css";
import { FaComment } from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link } from "react-scroll";

const navLinks = [
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "about", label: "About" },
  { to: "contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <Link to="home" smooth={true} duration={500} className="nav-brand">
        <img src="/asserts/logo-dy.svg" alt="" className="nav-logo" />
        <div className="brand-name-container">
          <span className="brand-name">deepakyadav</span>
          <br />
          <span className="brand-tag">portfolio</span>
        </div>
      </Link>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {navLinks.map(({ to, label }) => (
          <Link key={to} to={to} smooth={true} duration={500} className="nav-link" onClick={closeMenu}>
            {label}
          </Link>
        ))}
        <Link to="contact" smooth={true} duration={500} className="nav-contact-btn" onClick={closeMenu}>
          <FaComment />
          <span>Contact</span>
        </Link>
      </div>

      <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen}>
        {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
      </button>
    </nav>
  );
}

export default Navbar;
