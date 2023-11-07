import React from "react";
import img from "./Assets/image.png";
import "./style.css"
function Numbers() {
  return (
    <div className="numbers-container">
    <img src={img} className="img-responsive" alt="background"/>
    </div>
  );
}

export default Numbers;
