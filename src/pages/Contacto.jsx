import React from 'react'
import { Footer, Header, Contact } from '../components'

const Contacto = ( { handleOnClick, modo }) => {
  return (
    <>
        <Header handleOnClick={ (value) => handleOnClick(value) } modo={modo}/>
        <Contact modo={modo}/>
        <Footer modo={modo}/>
    </>
  )
}

export default Contacto