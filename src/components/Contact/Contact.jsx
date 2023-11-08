import React from "react";
import "./style.css";
import phonelogo from "./Assets/phone.png";
import locationlogo from "./Assets/location.png";

const ContactUs = () => {
  return (
    <div className="contact-us" id="contact">
      <h2>Contact Us</h2>
      <h2>تواصل معنا</h2>
      <div className="contact-form">
        <div className="content">
          <p>
            Thank you for your interest! Please feel free to reach out to us
            with any questions or comments.
          </p>
          <br></br>
          <p>You can contact us through the following methods:</p>
          <ul>
            <li>Email: Hasad@holding.com</li>
            <li>Phone: 123-5123-966</li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="footer-left">
          <img
            style={{ width: "35px", height: "35px" }}
            src={phonelogo}
            alt="logo"
          ></img>
          <p className="numb">123 5123 966</p>
        </div>

        <div className="footer-right">
        <img
            style={{ width: "35px", height: "35px" }}
            src={locationlogo}
            alt="lologo"
          ></img>
          <p className="numb">Riyadh, Saudia</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
