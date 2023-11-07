import React from 'react'
import img from "./Assets/image.png"
import "./style.css"

function MainPage() {
  return (
    <div className='main-container'>
      <img src={img} className='img-responsive' alt="background"/>
    </div>
  )
}

export default MainPage