import React from 'react'
import Ball from './Ball'
import Cube from './Cube'
import Floor from './Floor'

const Scene = () => {
  return (
    <div className='scene'>
        <Floor/>
        <Cube/>
        <Ball/>
    </div>
  )
}

export default Scene