
import React from 'react'

export const Main = ( {modo} ) => {
  return (
    <>
      <div className='container-m m-0p-0'>
        <div className={ modo ? 'div_main  ' : 'div_main2 ' }>
            <h1 className='h1_main'>
                Hola! Soy Matias Bordenave.
            </h1>
            <p>
                Soy estudiante de programacion de la facultad regional de Tucumán, <br/> full stack web developer.
            </p>
        </div>
      </div>
    </>
  )
}

export default Main 