import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

import five from "./Assets/five.png";
import six from "./Assets/six.png";
import eight from "./Assets/eight.png";
import ten from "./Assets/ten.png";
import eleven from "./Assets/eleven.png";
import twelve from "./Assets/twelve.png";
import fourteen from "./Assets/fourteen.png";
import sixteen from "./Assets/sixteen.png";
import seventeen from "./Assets/seventeen.png";
import eighteen from "./Assets/eighteen.png";
import twentyone from "./Assets/twentyone.png";
import twentytwo from "./Assets/twentytwo.png";
import twentythree from "./Assets/twentythree.png";
import twentyfour from "./Assets/twentyfour.png";
import twentyfive from "./Assets/twentyfive.png";
import twentyseven from "./Assets/twentyseven.png";

const imageSources = [
  five, six, eight, ten, eleven, twelve, fourteen, sixteen, seventeen, eighteen,
  twentyone, twentytwo, twentythree, twentyfour, twentyfive, twentyseven,
];

const SwiperComponent = ({ data }) => {
  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 40,
    },
  };

  return (
    <>
      <div className="heading">{data.title}</div>

      <div className="swiper-wrapper">
        <Swiper
          slidesPerView={7}
          spaceBetween={40}
          loop={true}
          loopFillGroupWithBlank={true}
          centeredSlides={true}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          initialSlide={0}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={breakpoints}
        >
          {imageSources.map((image, index) => (
            <SwiperSlide key={index} className="swiper-img">
              <div className="d-flex flex-column align-items-center">
                <img
                  src={image}
                  alt={`slide-${index}`}
                  style={{
                    maxWidth: "100%",
                    width: "200px",
                    height: "100px",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default SwiperComponent;
