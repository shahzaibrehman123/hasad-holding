import React from 'react'
import img from "./Assets/banner.jpg"

import "./style.css"

function MainPage() {
  
  return (
 <div>
     <div className='main-container' id='home'>
      <img src={img} className='img-responsive' alt="background"/>
     
    </div>

    
 </div>
  )
}

export default MainPage