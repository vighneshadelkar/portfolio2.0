import React from "react";
import "../style/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const toGithub = (url) => {
    const githubUrl = "https://github.com/vighneshadelkar";
    window.open(githubUrl, "_blank");
  };

  const toLinkedin = (url) => {
    const githubUrl = "https://www.linkedin.com/in/vighneshadelkar/";
    window.open(githubUrl, "_blank");
  };

  const toLeetcode = (url) => {
    const githubUrl = "https://leetcode.com/Vighnesh2811/";
    window.open(githubUrl, "_blank");
  };
  const toFacebook = (url) => {
    const githubUrl = "https://www.instagram.com/vighnesh_28/";
    window.open(githubUrl, "_blank");
  };
  return (
    <div className="footerContainer">
      <div className="footerWrapper">  
        <div className="row2">
          <div className="col3">
            Lets connect digitally
            <div className="name3">
              <img src="/images/cc.png" alt="copyright" className="ccimg" />
              2024 Vighnesh Adelkar
            </div>
          </div>
          <div className="col4">
            <ul className="footer-list">
              <li onClick={toLinkedin} role="button" tabIndex={0}>
                LinkedIn
              </li>
              <li onClick={toGithub} role="button" tabIndex={0}>
                Github
              </li>
              <li onClick={toLeetcode} role="button" tabIndex={0}>
                Leetcode
              </li>
              <li onClick={toFacebook} role="button" tabIndex={0}>
                Instagram
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
