import React, { useEffect, useState } from "react";
import "../style/Projects.css";
import { useNavigate } from "react-router-dom";

export default function Projects({color, title, name , img ,id}) {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="projectContainer" onClick={handleNavigation} role="button" >
      <div className={`projectWrapper${color}`}>
        <div className="projectInfo">
          <div className="projcol">
            <h1 className="projectHeader">{title}</h1>
            <h1 className="smallHeader">{name}</h1>
          </div>
          <div className="image">
            <img src={img} alt={name} />
          </div>
        </div>
      </div>
    </div>
  );
}
