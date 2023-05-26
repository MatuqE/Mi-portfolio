import React from 'react'
import { Link } from 'react-router-dom'
import  error  from '../assets/error404.png'

export const Error = () => {
  return (
    <div className='divError'>
        <img src={error} alt="img error 404" className='imgError' />
    	  <p>Volver al <Link to="/">inicio</Link></p>
    </div>
  )
}

export default Error