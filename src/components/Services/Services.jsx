import React from "react";
import person from "./Assets/person.png";
import wheel from "./Assets/wheel.png";
import monitor from "./Assets/monitor.png";
import sheet from "./Assets/sheet.png";
import one from "./Assets/one.png";
import home from "./Assets/home.png";
import "./style.css";
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

import NumberAnimation from "../NumberAnimation/NumberAnimation";

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
function Services() {
  return (
    <div className="Service-section">
      <h3 className="heading">Services</h3>
      <h3 className="heading">خدمات</h3>

      <div className="Services">
        <div className="card">
          <img src={person} className="card-img" />
          <div className="card-info">Project management</div>
          <div className="card-info">تصميم المشروع</div>
        </div>

        <div className="card">
          <img src={wheel} />
          <div className="card-info">Building material</div>
          <div className="card-info">توريد مواد البناء</div>
        </div>

        <div className="card">
          <img src={monitor} />
          <div className="card-info">Project design</div>
          <div className="card-info">تصميم المشروع</div>
        </div>

        <div className="card">
          <img src={sheet} />
          <div className="card-info">Construction</div>
          <div className="card-info">بناء</div>
        </div>
        <div className="card">
          <img src={home} />
          <div className="card-info">Facility Management</div>
          <div className="card-info">إدارة المرافق</div>
        </div>
      </div>

      <div className="Numbers">
        <div>
          {" "}
          <div className="count">
            +<NumberAnimation startCount={0} endCount={25} />
          </div>
          <div className="card-info line">Years of experience</div>
          <div className="card-info line">سنوات من الخبرة</div>
        </div>

        <div>
          {" "}
          <div className="count">
            +<NumberAnimation startCount={0} endCount={200} />
          </div>
          <div className="card-info line">Engineer and technician</div>
          <div className="card-info line">مهندس وفني</div>
        </div>

        <div>
          {" "}
          <div className="count">
            +<NumberAnimation startCount={0} endCount={400} />M
          </div>
          <div className="card-info line-right">
            The implemented project's value
          </div>
          <div className="card-info line">قيمة المشروع المنفذ</div>
        </div>

        <div className="counts">
          {" "}
          <div className="count">
            + <NumberAnimation startCount={0} endCount={100} />
          </div>
          <div className="card-info line-right">Projects</div>
          <div className="card-info line">المشاريع</div>
        </div>
      </div>

      <div className="marquee-area">
        <marquee behavior="scroll" direction="left" scrollamount="10">
          <div className="slider">
            <div>
              {" "}
              <img src={one} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={two} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={three} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={four} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={five} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={six} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={seven} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={eight} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={nine} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={ten} className="marquee-img" />
            </div>
          </div>
        </marquee>

        <marquee behavior="scroll" direction="right" scrollamount="10">
          <div className="slider">
            <div>
              {" "}
              <img src={eleven} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={twelve} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={thirteen} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={fourteen} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={fifteen} className="marquee-img" />
            </div>

            <div>
              {" "}
              <img src={sixteen} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={seventeen} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={eighteen} className="marquee-img" />
            </div>

            <div>
              {" "}
              <img src={nineteen} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={twenty} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={twentyone} className="marquee-img" />
            </div>
          </div>
        </marquee>


        <marquee behavior="scroll" direction="right" scrollamount="10">
          <div className="slider">
          <div>  <img src={twentytwo} className="marquee-img" /></div>
          <div>  <img src={twentythree} className="marquee-img"  /></div>
          <div>  <img src={twentyfour} className="marquee-img"  /></div>
          <div>  <img src={twentyfive} className="marquee-img" /></div>
          <div>  <img src={twentysix} className="marquee-img"  /></div>
          <div>  <img src={twentyseven} className="marquee-img"  /></div> 
          <div>
              {" "}
              <img src={eighteen} className="marquee-img" />
            </div>

            <div>
              {" "}
              <img src={nineteen} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={twenty} className="marquee-img" />
            </div>
            <div>
              {" "}
              <img src={twentyone} className="marquee-img" />
            </div>
          </div>
        </marquee>

       
      </div>
    </div>
  );
}

export default Services;
