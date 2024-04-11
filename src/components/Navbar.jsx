import React, { useState } from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const toGithub = () => {
    const githubUrl = "https://github.com/vighneshadelkar";
    window.open(githubUrl, "_blank");
  };

  const toResume = () => {
    const resumeUrl =
      "https://docs.google.com/document/d/1lAr4Fr4o8I7eDjm0r7vJaONd_ftcRMKUY3W9H_zYNec/edit?usp=sharing";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbarContainer">
          <Link to="/portfolio2.0/" className="logo">
            Vighnesh Adelkar
          </Link>
          <ul className={`nav-list ${isOpen ? "active" : ""}`}>
            <div className="nav-icon-right" onClick={toggleNavbar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <li>
              <Link to="/portfolio2.0/aboutme">
                <span>&#60;</span>ABOUT<span>&#62;</span>
              </Link>
            </li>
            <li onClick={toGithub} role="button">
              <Link>
                <span>&#60;</span>GITHUB<span>&#62;</span>
              </Link>
            </li>
            <li>
              <Link to="/portfolio2.0/projects">
                <span>&#60;</span>PROJECTS<span>&#62;</span>
              </Link>
            </li>
            <li onClick={toResume} role="button">
              <Link>
                <span>&#60;</span>RESUME<span>&#62;</span>
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={toggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </div>
  );
}
