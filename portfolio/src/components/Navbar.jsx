import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbarContainer">
          <Link to="/home" className="logo">
            Vighnesh Adelkar
          </Link>
          <ul className="nav-list">
            <li>
              <Link to="/">
                <span>&#60;</span>LINKEDIN<span>&#62;</span>
              </Link>
            </li>
            <li>
              <Link to="/home">
                <span>&#60;</span>GITHUB<span>&#62;</span>
              </Link>
            </li>
            <li>
              <Link to="/home">
                <span>&#60;</span>PROJECTS<span>&#62;</span>
              </Link>
            </li>
          </ul>
          <div className="nav-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </div>
  );
}
