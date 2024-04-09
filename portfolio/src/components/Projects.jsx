import React from "react";
import "../style/Projects.css";

export default function Projects(props) {


  return (
    <div className="projectContainer">
      <div className={`projectWrapper${props.color}`}>
        <div className="projectInfo">
          <div className="projcol">
            <h1 className="projectHeader">{props.title}</h1>
            <h1 className="smallHeader">{props.name}</h1>
          </div>
          <div className="image">
            <img src={props.img} alt={props.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
