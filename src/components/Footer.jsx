import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <span className="footer-label">Crafted By</span>
          <span className="footer-name">Deepak Yadav</span>
        </div>
        <div>
          <span className="footer-label">Built With</span>
          <span>React, Vite, CSS</span>
        </div>
      </div>
      <p className="footer-license">© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
