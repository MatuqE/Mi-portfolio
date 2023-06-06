import React from 'react'
import { useState } from 'react'

export const MainAbout = ({ modo }) => {

  const [num, setNum]= useState(1)

  return (
    <div className={modo ? 'divMainAbout1' : 'divMainAbout2'}>
        <h2>Mis Proyectos</h2>
        <div>
            <img className='imgAbout' src={`img${num}.png`} alt="" />
        </div>
        <button className='botonSet' onClick={()=> setNum(1)}> 1 </button>
        <button className='botonSet' onClick={()=> setNum(2)}> 2 </button>
        <button className='botonSet' onClick={()=> setNum(3)}> 3 </button>
    </div>
  )
}

export default MainAbout
