import React from 'react'
import { Footer, Header, MainContact } from '../constants'
import '../Styles/style.css'

export const Contacto = ( { handleOnClick, modo }) => {
  return (
    <>
        <Header handleOnClick={ (value) => handleOnClick(value) } modo={modo}/>
        <MainContact modo={modo}/>
        <Footer modo={modo}/>
    </>
  )
}

export default Contacto