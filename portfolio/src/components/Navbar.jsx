import React, { useEffect, useState } from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="navbarContainer">
          <Link to="/" className="logo">
            Vighnesh Adelkar
          </Link>
          <ul className={`nav-list ${isOpen ? "active" : ""}`}>
          <div className="nav-icon-right" onClick={toggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
            <li>
              <a href="https://www.linkedin.com/in/vighneshadelkar/">
                <span>&#60;</span>LINKEDIN<span>&#62;</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/vighneshadelkar">
                <span>&#60;</span>GITHUB<span>&#62;</span>
              </a>
            </li>
            <li>
              <Link to="/projects">
                <span>&#60;</span>PROJECTS<span>&#62;</span>
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
