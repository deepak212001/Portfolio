import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaComment } from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link } from "react-scroll";

const navLinks = [
  { to: "experience", label: "Experience" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "about", label: "About" },
  { to: "contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    document.body.style.overflow = "";
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <Link to="home" smooth={true} duration={300} offset={-70} className="nav-brand">
        <img src="/asserts/logo-dy.svg" alt="" className="nav-logo" />
        <div className="brand-name-container">
          <span className="brand-name">deepakyadav</span>
          <br />
          <span className="brand-tag">portfolio</span>
        </div>
      </Link>

      {isOpen && (
        <div className="nav-overlay" onClick={closeMenu} aria-hidden />
      )}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {navLinks.map(({ to, label }) => (
          <Link key={to} to={to} smooth={true} duration={300} offset={-70} className="nav-link" onClick={closeMenu}>
            {label}
          </Link>
        ))}
        <Link to="contact" smooth={true} duration={300} offset={-70} className="nav-contact-btn" onClick={closeMenu}>
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
