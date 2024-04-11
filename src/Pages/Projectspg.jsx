import React from "react";
import Projects from "../components/Projects";
import "../style/Projects.css";
import Footer from "../components/Footer";
import data from "../Data/prgData.js";

export default function Projectspg() {
  const toGithub = () => {
    const githubUrl = "https://github.com/vighneshadelkar";
    window.open(githubUrl, "_blank");
  };
  return (
    <div className="projectsContainer">
      <h2 className="pgHeader">Selected Projects</h2>
      <div className="projectsWrapper">
        <div className="projects" id="projects">
          {data.map((i) => {
            return (
              <Projects
                key={i.id}
                title={i.title}
                name={i.name}
                color={i.color}
                img={i.img}
                id={i.id}
              />
            );
          })}
        </div>
        <div className="githubContainer" onClick={toGithub} role="button">
          <div className="githubWrapper">
            <div className="projectInfo">
              <div className="projcol">
                <h1 className="projectHeader">View more of my projects</h1>
                <h1 className="smallHeader">GITHUB</h1>
              </div>
              <div className="imageDiv">
                <img
                  src="/images/github2.png"
                  alt="github logo"
                  className="githubImg"
                />
              </div>
            </div>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
