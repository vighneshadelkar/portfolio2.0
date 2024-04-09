import React from "react";
import Projects from "../components/Projects";
import "../style/Projects.css";

export default function Projectspg() {
  return (
    <div className="projectsContainer">
      <h2 className="pgHeader">Selected Projects</h2>
      <div className="projectsWrapper">
        <div className="projects" id="projects">
          <Projects
            title="Tenant Finder, a new way to rent"
            name="10ANT"
            color="pink"
            img="/images/img4.png"
          />
          <Projects
            title="Connect With Users"
            name="CONNECTVERSE"
            color="blue"
            img="/images/img6.png"
          />
          <Projects
            title="Right's awareness for kids"
            name="RIGHTS RISING"
            color="pink"
            img="/images/img4.png"
          />
        </div>
        <div className="more">
          <h2 className="morehd">[ . . . Projects, More Projects]</h2>
        </div> 
      </div>

      <hr></hr>
    </div>
  );
}
