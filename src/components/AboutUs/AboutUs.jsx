import React from "react";
import img from "./Assets/image.png";
import "./style.css"

function AboutUs() {
  return (
    <div className="about-container">
      <img
        src={img}
        className="img-responsive"
        alt="background"
      />
    </div>
  );
}

export default AboutUs;
