import React from 'react'

const Header = () => {
  return (
     <div className='header'>
        <div className="header_div_name">
          <img src="" alt="Foto" className='img_nav'/>
          <h3>Bordenave Matias Federico</h3>
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