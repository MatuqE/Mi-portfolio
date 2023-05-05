import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

export const Header = ({ handleOnClick, modo }) => {

  return (
     <div className={ modo ? 'header' : 'header2'}>
        <div className="header_div_name">
          <img src="https://cdn.dribbble.com/users/1109977/screenshots/3328565/media/8fc846c0a6d19e6a86c23c809f16f739.gif" alt="Foto" className='img_nav'/>
          <h2>Bordenave Matias Federico</h2>
        </div>
        <div className='switch-button'>
              <input type="checkbox" name="switch-button" id="switch-label" className="switch-button__checkbox" 
              onClick={handleOnClick}/>            
              <label htmlFor="switch-label" className="switch-button__label"></label>

        </div>
        <nav className='nav'>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
     </div>
  )
}

export default Header