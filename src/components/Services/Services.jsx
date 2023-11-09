import React from "react";

import { Icon } from "@iconify/react";
import "./style.css";
import NumberAnimation from "../NumberAnimation/NumberAnimation";

function Services({ data }) {
  
  return (
    <div className="Service-section" id="service">
      <h3 className="heading">{data.title}</h3>
      

      <div className="Services">
        <div className="card">
          <Icon icon="mdi:construction" className="icon-style" />
          <div className="card-info">{data.lables[0]}</div>
        </div>

        <div className="card">
          <Icon icon="bi:bricks" className="icon-style" />
          <div className="card-info">{data.lables[1]}</div>
        </div>

        <div className="card">
          <Icon icon="clarity:design-line" className="icon-style" />
          <div className="card-info">{data.lables[2]}</div>
        </div>

        <div className="card">
          <Icon icon="ic:sharp-construction" className="icon-style" />
          <div className="card-info">{data.lables[3]}</div>
        </div>
        <div className="card">
          <Icon icon="ic:round-supervised-user-circle" className="icon-style" />
          <div className="card-info">{data.lables[4]}</div>
        </div>
        <div className="card">
          <Icon
            icon="streamline:shopping-building-real-home-tower-building-house-estate"
            className="icon-style"
          />
          <div className="card-info">{data.lables[5]}</div>
        </div>
      </div>

      <div className="Numbers">
        <div>
          {" "}
          <div className="count">
            +<NumberAnimation startCount={0} endCount={25} />
          </div>
          <div className="card-info line">{data.numbers[0]}</div>
        </div>

        <div>
          {" "}
          <div className="count">
            +<NumberAnimation startCount={0} endCount={200} />
          </div>
          <div className="card-info line">{data.numbers[1]}</div>
        </div>

        <div>
          {" "}
          <div className="count">
            +<NumberAnimation startCount={0} endCount={400} />M
          </div>
          <div className="card-info line-right">
          {data.numbers[2]}
          </div>
        </div>

        <div className="counts">
          {" "}
          <div className="count">
            + <NumberAnimation startCount={0} endCount={100} />
          </div>
          <div className="card-info line-right">{data.numbers[3]}</div>
        </div>
      </div>
    </div>
  );
}

export default Services;
