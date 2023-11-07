import React from "react";
import img from "./Assets/image.png";
import "./style.css";

function Contact() {
  return (
    <div className="contact-container">
      <img src={img} className="img-responsive" alt="background" />
    </div>
  );
}

export default Contact;
