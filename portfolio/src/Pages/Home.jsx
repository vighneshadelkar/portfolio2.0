import React from "react";
import "../style/Home.css";
import Projects from "../components/Projects";

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

        <div className="col">
          <div className="header2">
            " Transforming visionary designs into tangible, interactive
            experiences that users can engage with and enjoy. "
          </div>
        </div>

        <div className="projects" id="projects">
          <Projects
            id={1}
            title="Tenant Finder, a new way to rent"
            name="10ANT"
            color="pink"
            img="/images/img4.png"
          />
          <Projects
            id={2}
            title="Connect with users"
            name="CONNECTVERSE"
            color="blue"
            img="/images/img6.png"
          />
          <Projects
            id={3}
            title="Right's awareness for kids"
            name="RIGHTS RISING"
            color="pink"
            img="/images/img4.png"
          />
          <Projects
            id={4}
            title="Ayurvedic healing website"
            name="AYURWAYDA"
            color="blue"
            img="/images/img1.png"
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
