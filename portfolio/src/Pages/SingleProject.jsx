import React, { useEffect } from "react";
import "../style/SingleProject.css";
import { useParams } from "react-router-dom";
import data from "../Data/prgData.js";

export default function SingleProject() {
  let { id } = useParams();
  id = parseInt(id, 10);
  const projectData = data.find((project) => project.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="prjContainer">
      <div className="prjWrapper">
        <section className={`prjSection${projectData.color}`}>
          <h1 className="prjHeader">{projectData.name}</h1>
          <div className="prgsmallHeader">{projectData.title}</div>

          <div className="prgimageDiv">
            <img src={projectData.img} alt="" className="prgImage" />
          </div>
        </section>

        <section className="prjDescription">
          <div className="row">
            <div className="col">{projectData.desc1}</div>
            <div className={`prgimageDiv2${projectData.color}`}>
              <img src={projectData.img1} alt="" className="prgImage2" />
            </div>
          </div>
          <div className="row">
            <div className="col">{projectData.desc2}</div>
            <div className={`prgimageDiv2${projectData.color}`}>
              <img src={projectData.img2} alt="" className="prgImage2" />
            </div>
          </div>
          <div className="row">
            <div className="col">{projectData.desc3}</div>
            <div className={`prgimageDiv2${projectData.color}`}>
              <img src={projectData.img3} alt="" className="prgImage2" />
            </div>
          </div>
          <div className="row">
            <div className="col">Check out the project</div>
            
          </div>
        </section>
      </div>
    </div>
  );
}
