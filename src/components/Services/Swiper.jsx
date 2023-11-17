import React from "react";

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
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "./swiper.css";

const imageSources = [
  five,
  six,

  eight,

  ten,
  eleven,
  twelve,

  fourteen,

  sixteen,
  seventeen,
  eighteen,

  twentyone,
  twentytwo,
  twentythree,
  twentyfour,
  twentyfive,

  twentyseven,
];

export default function SwiperComponent({ data }) {
  return (
    <>
      <div className="heading">{data.title}</div>

      <div className="swiper-wrapper">
        <Swiper
          slidesPerView={window.innerWidth > 768 ? 7 : 3}
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
