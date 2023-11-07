import React from "react";
import img from "./Assets/image.png";
import "./style.css"

function AboutUs() {
  return (
    <div className="about-container" id="about">
      <img
        src={img}
        className="img-responsive"
        alt="background"
      />
    </div>
  );
}

export default AboutUs;
