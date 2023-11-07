import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../Clients/Assets/image.png"
import img2 from "../Partners/Assets/image.png"
import "./style.css"

function ClientAndPartners() {
  return (
    <Carousel className="cp-container">
      <Carousel.Item>
        <img className="imgg-responsive" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="imgg-responsive" src={img2} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ClientAndPartners;
