import React, { useEffect, useState } from "react";
import "../style/Projects.css";
import { useNavigate } from "react-router-dom";

export default function Projects(props) {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/project/${props.id}`);
  };

  return (
    <div className="projectContainer" onClick={handleNavigation}>
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
