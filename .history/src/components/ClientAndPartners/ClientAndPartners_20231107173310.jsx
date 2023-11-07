import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../Clients/Assets/image.png"
import img2 from "../Partners/Assets/image.png"

function ClientAndPartners() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="img-responsive" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-responsive" src={img2} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ClientAndPartners;
