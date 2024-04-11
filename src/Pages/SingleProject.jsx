import React, { useEffect } from "react";
import "../style/SingleProject.css";
import { useParams, useNavigate } from "react-router-dom";
import data from "../Data/prgData.js";
import Footer from "../components/Footer.jsx";

export default function SingleProject() {
  let { id } = useParams();
  let navigate = useNavigate();
  id = parseInt(id, 10);
  const projectData = data.find((project) => project.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  function handleButtonClick() {
    navigate(`/portfolio2.0/project/${(id % 4) + 1}`);
  }

  function handlegithub() {
    navigate(projectData.link);
  }

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
            <div className="col2">
              <h2>Check out the project</h2>
              <button className="githublink" onClick={handlegithub}>
                <img
                  src="https://vighneshadelkar.github.io/portfolio2.0/images/github.png"
                  alt="github icon"
                  className="githubicon"
                />
                Github
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col2">
              {projectData.team ? (
                <div>
                  <h2>Team credits </h2>
                  <p>{projectData.team}</p>
                </div>
              ) : (
                <div></div>
              )}
              <br></br>
              <button className="nextproj" onClick={handleButtonClick}>
                Next Project
              </button>
            </div>
          </div>
          <div className="footerInfo">
            <footer>
              <Footer />
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
}
