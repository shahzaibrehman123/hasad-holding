import React from 'react';
import img from "./Assets/banner.jpg";
import logo from "./Assets/logo.png";
import "./style.css";

function MainPage() {
  return (
    <div>
      <div className='main-container' id='home'>
        <img src={img} className='img-responsive' alt="banner" />
        <img src={logo} alt="logo" className="centered-logo" />
      </div>
    </div>
  );
}

export default MainPage;
