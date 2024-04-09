import React from "react";
import "../style/Home.css";
import Projects from "../components/Projects";
// import scroll from "../../public/images/scroll.gif"

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <div className="selfinfo">
          <div className="name">I Create Visually Appealing Websites</div>
          <div className="name2">React Developer</div>
          <div className="scroll">
            <img src="/images/scroll.gif" alt="" />
          </div>
        </div>

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
      </div>
    </div>
  );
}
