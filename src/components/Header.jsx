import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export const Header = ({ handleOnClick, modo }) => {

  return (
    <div className='container-fluid row'>
      <div className={ modo ? 'header row ' : 'header2 row'}>
          <div className="header_div_name col-5">
            <img src="https://cdn.dribbble.com/users/1109977/screenshots/3328565/media/8fc846c0a6d19e6a86c23c809f16f739.gif" alt="Foto" className='img_nav'/>
            <h2>Bordenave Matias Federico</h2>
          </div>
          <div className='switch-button col-3'>
                <input type="checkbox" name="switch-button" id="switch-label" className="switch-button__checkbox" 
                onClick={handleOnClick}/>            
                <label htmlFor="switch-label" className="switch-button__label"></label>

          </div>
          <nav className='nav col-2'>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/About">About</Link></li>
                  <li><Link to="/Contacto">Contacto</Link></li>
              </ul>
          </nav>
      </div>
    </div>
  )
}

export default Header