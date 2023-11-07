import React from "react";
import img from "./Assets/image.png";
import "./style.css";

function AboutUs() {
  return (
    <div>
      <div className="About-us-section">

      <div className="main-heading">
      <h3 className="heading">About Us</h3>
        <h3 className="heading">معلومات عنا</h3>
        </div>
       
        <div className="inner-content">
          <div className="about-us-content">
            <p> We are a leading Saudi company with many years of experience</p>
            <p>
              {" "}
              supporting our clients across sectors and supporting the growth of the 
            </p>
            <p>construction and development sector in Saudi Arabia</p>
          </div>

          <div className="about-us-content">
            <p>
              نحن شركة سعودية رائدة تتمتع بسنوات عديدة من الخبرة دعم عملائنا عبر
            </p>
            <p>
              {" "}
              القطاعات ودعم نمو قطاع البناء والتطوير في المملكة العربية السعودية
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
