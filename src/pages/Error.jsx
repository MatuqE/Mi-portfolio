import React from 'react'
import { Link } from 'react-router-dom'
import  error  from '../assets/error404.png'
import { Footer, Header } from '../constants'
import '../Styles/style.css'

export const Error = ({ modo }) => {
  return (
    <>
    <Header modo={ modo }/>
      <div className={modo ? 'divError1' : 'divError2'}>
          <img src={error} alt="img error 404" className='imgError' />
          <p>Volver al <Link to="/">inicio</Link></p>
      </div>
      <Footer/>
    </>
  )
}

export default Error