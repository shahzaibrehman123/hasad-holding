import React from "react";
import "./style.css";

import { Icon } from "@iconify/react";

const ContactUs = ({data}) => {
  return (
    <div className="contact-us" id="contact">
      <h2>{data.title}</h2>
 
      <div className="contact-form">
        <div className="content">
          <p>
          {data.content[0]}
          </p>
          <br></br>
          <p>  {data.content[1]}</p>
          <ul>
            <li>Email: Hasad@holding.com</li>
            <li>Phone: 123-5123-966</li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="footer-left">
        <Icon icon="ic:baseline-phone" fontSize={25} />
          <p className="numb">123 5123 966</p>
        </div>

        <div className="footer-right">
        <Icon icon="mdi:location"  fontSize={25} />
          <p className="numb">Riyadh, Saudia</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
