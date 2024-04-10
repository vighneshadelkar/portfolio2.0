import React from "react";
import "../style/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <div className="row2">
          <div className="col3">
            Lets connect digitally
            <div className="name3">
              <img src="/images/cc.png" alt="copyright" className="ccimg"/>
              2024 Vighnesh Adelkar
            </div>
          </div>
          <div className="col4">
            <ul className="footer-list">
              <li>
                <Link to="https://www.linkedin.com/in/vighneshadelkar/">
                  Linkedin
                </Link>
              </li>
              <li>
                <Link to="https://github.com/vighneshadelkar">Github</Link>
              </li>
              <li>
                <Link to="https://leetcode.com/Vighnesh2811/">Leetcode</Link>
              </li>
              <li>
                <Link to="https://github.com/vighneshadelkar">Facebook</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
