import React from "react";
import one from "./Assets/one.png";
import two from "./Assets/two.png";
import three from "./Assets/three.png";
import four from "./Assets/four.png";
import five from "./Assets/five.png";
import six from "./Assets/six.png";
import seven from "./Assets/seven.png";
import eight from "./Assets/eight.png";
import nine from "./Assets/nine.png";
import ten from "./Assets/ten.png";
import eleven from "./Assets/eleven.png";
import twelve from "./Assets/twelve.png";
import thirteen from "./Assets/thirteen.png";
import fourteen from "./Assets/fourteen.png";
import fifteen from "./Assets/fifteen.png";
import sixteen from "./Assets/sixteen.png";
import seventeen from "./Assets/seventeen.png";
import eighteen from "./Assets/eighteen.png";
import nineteen from "./Assets/nineteen.png";
import twenty from "./Assets/twenty.png";
import twentyone from "./Assets/twentyone.png";
import twentytwo from "./Assets/twentytwo.png";
import twentythree from "./Assets/twentythree.png";
import twentyfour from "./Assets/twentyfour.png";
import twentyfive from "./Assets/twentyfive.png";
import twentysix from "./Assets/twentysix.png";
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
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
  eighteen,
  nineteen,
  twenty,
  twentyone,
  twentytwo,
  twentythree,
  twentyfour,
  twentyfive,
  twentysix,
  twentyseven,
];

export default function SwiperComponent() {
  return (
    <>
      <div className="heading">Our Clients</div>
      <div className="heading">عملائنا</div>
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
                <img src={image} alt={`slide-${index}`} style={{ width: "auto", height: "auto" }} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
