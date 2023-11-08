import React from "react";
import person from "./Assets/person.png";
import wheel from "./Assets/wheel.png";
import monitor from "./Assets/monitor.png";
import sheet from "./Assets/sheet.png";
import home from "./Assets/home.png";
import "./style.css";
import NumberAnimation from "../NumberAnimation/NumberAnimation";

function Services() {
  return (
    <div className="Service-section" id="service">
      <h3 className="heading">Services</h3>
      <h3 className="heading">خدمات</h3>

      <div className="Services">
        <div className="card">
          <img src={person} className="card-img" alt="Project management" />
          <div className="card-info">Project management</div>
          <div className="card-info">تصميم المشروع</div>
        </div>

        <div className="card">
          <img src={wheel} alt="Building material" />
          <div className="card-info">Building material</div>
          <div className="card-info">توريد مواد البناء</div>
        </div>

        <div className="card">
          <img src={monitor} alt="Project design" />
          <div className="card-info">Project design</div>
          <div className="card-info">تصميم المشروع</div>
        </div>

        <div className="card">
          <img src={sheet} alt="Construction" />
          <div className="card-info">Construction</div>
          <div className="card-info">بناء</div>
        </div>
        <div className="card">
          <img src={home} alt="Facility Management" />
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
    </div>
  );
}

export default Services;
