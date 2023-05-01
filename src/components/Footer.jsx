import React from 'react'

const Footer = () => {
  return (
    <> 
        <div className='footer'>
          <div className='footer_div p'>
            <p>Matias Bordenave</p>
          </div>
          <div className='footer_copyR'>
                © Copyright 2023. Made by Matias Bordenave
          </div>
            <div className='footer_media'>
              <h3>social</h3>
              <a href="https://www.linkedin.com/in/matias-bordenave-221986251/" target='_blank'><img src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png" alt="" /></a>
              <a href="https://github.com/MatuqE" target='_blank'><img src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png" alt="" /></a>
              <a href="" target='_blank'><img src="https://cdn.pixabay.com/photo/2020/08/25/02/16/facebook-5515461_1280.png" alt="" /></a>
              <a href="" target='_blank'><img src="" alt="" /></a>
            </div>
        </div>
    </>
  )
}

export default Footer