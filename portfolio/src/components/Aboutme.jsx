import React from "react";
import "../style/Aboutme.css";
import { useNavigate } from "react-router-dom";

export default function Aboutme() {
  const navigate = useNavigate();
  const toAbout = () => {
    navigate("/aboutme/");
  };
  return (
    <div className="abtContainer " onClick={toAbout}>
      <div className="abtWrapper">
        <div className="abtInfo">
          <div className="abtcol">
            <h1 className="projectHeader">
              Nice to<br></br> meet you
            </h1>
            <h1 className="smallHeader">About me</h1>
          </div>
          <div className="ptrimageDiv">
            <img src="/images/potrait.webp" alt="ptr" className="ptrImage" />
          </div>
        </div>
      </div>
    </div>
  );
}
