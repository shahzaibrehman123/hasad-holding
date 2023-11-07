import React from "react";
import img from "./Assets/image.png";
import "./style.css";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <img src={img} className="img-responsive" alt="background" />
    </div>
  );
}

export default Contact;
