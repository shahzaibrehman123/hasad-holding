import React from 'react'
import img from "./Assets/image.png";
import "./style.css"

function Clients() {
  return (
    <div className='client-container'>
        <img src={img} className="img-responsive" alt="background"/>
    </div>
  )
}

export default Clients