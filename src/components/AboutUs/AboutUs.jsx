import React from "react";
import "./style.css";

function AboutUs( {data}) {


  return (
    <div id="about">
      <div className="About-us-section">
        <div className="main-heading">
          <h3 className="heading">{data.title}</h3>
        </div>

        <div className="inner-content">
          <div className="about-us-content">
            <p> {data.content}</p>
           
          </div>
        
        
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
