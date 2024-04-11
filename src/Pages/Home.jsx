import React from "react";
import "../style/Home.css";
import Projects from "../components/Projects";
import { TypeAnimation } from "react-type-animation";
import Footer from "../components/Footer";
import Aboutme from "../components/Aboutme";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <div className="selfinfo">
          <div className="name">I Create Visually Appealing Websites</div>
          <div className="name2">
            <TypeAnimation
              sequence={[
                "Mern Stack Developer",
                1100,
                "",
                1100,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "inherit", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
          <div className="scroll">
            <img src="https://vighneshadelkar.github.io/portfolio2.0/images/scroll.gif" alt="" />
          </div>
        </div>
        <div className="abtContainer">
          <Aboutme />
        </div>

        <div className="col">
          <div className="header2">
            " Transforming visionary designs into tangible, interactive
            experiences that users can engage with and enjoy. "
          </div>
        </div>

        <div className="projects">
          <Projects
            id={1}
            title="Tenant Finder, a new way to rent"
            name="10ANT"
            color="pink"
            img="https://vighneshadelkar.github.io/portfolio2.0/images/img4.png"
          />
          <Projects
            id={2}
            title="Connect with users"
            name="CONNECTVERSE"
            color="blue"
            img="https://vighneshadelkar.github.io/portfolio2.0/images/img6.png"
          />
          <Projects
            id={3}
            title="Right's awareness for kids"
            name="RIGHTS RISING"
            color="pink"
            img="https://vighneshadelkar.github.io/portfolio2.0/images/img4.png"
          />
          <Projects
            id={4}
            title="Ayurvedic healing website"
            name="AYURWAYDA"
            color="blue"
            img="https://vighneshadelkar.github.io/portfolio2.0/images/ayurmain.png"
          />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
