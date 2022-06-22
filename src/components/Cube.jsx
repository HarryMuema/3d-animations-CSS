import React from 'react'
import './cube.css'

const Cube = () => {
  return (
    <div className='cube'>
      <div className="top">
        <div className="ballshadow"></div>
      </div>
      <div className="bottom"></div>
      <div className="right"></div>
      <div className="left"></div>
      <div className="front"></div>
      <div className="back"></div>
    </div>
  )
}

export default Cube