import React from "react";
import "../style/Aboutmepg.css";
import { useNavigate } from "react-router-dom";

export default function Aboutmepg() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(
      "https://docs.google.com/document/d/1lAr4Fr4o8I7eDjm0r7vJaONd_ftcRMKUY3W9H_zYNec/edit?usp=sharing"
    );
  };
  return (
    <div className="abtpgContainer">
      <div className="abtpgWrapper">
        <div className="abtpgSection">
          <div className="abtpgHeader">
            Hello
            <div className="abtpgcol">
              <p>
                My name is Vighnesh, I am a computer engineering student at
                Thadomal Shahanai Engineering college , India.
                <br></br>
                I am skilled in HTML, CSS, JavaScript, and frameworks
                like React, Node, Express . I enjoy creating visually appealing
                and user-friendly websites.
              </p>
              <button className="nextproj" onClick={handleButtonClick}>
                Resume
              </button>
            </div>
          </div>
          <div className="abtpgimageDiv">
            <img src="/images/potrait.webp" alt="ptr" className="abtpgImage" />
          </div>
        </div>
      </div>
    </div>
  );
}