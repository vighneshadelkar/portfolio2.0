import React from "react";
import "../style/Home.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <div className="selfinfo">
          <div className="name">I Create Visually Appealing Websites</div>
          <div className="name2">React Developer</div>
          
          <div className="name2">
            
            {/* <TypeAnimation
              sequence={[
                "I Create Visually Appealing Websites",
                1000,
                "",
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
