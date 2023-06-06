import React from 'react'
import { Footer, Header, MainAbout, Skills } from '../constants'
import '../Styles/style2.css'

export const About = ({ modo, handleOnClick}) => {
  return (
    <>
        <Header modo={modo} handleOnClick={ (value) => handleOnClick(value) }/>
        <MainAbout modo={modo} />
        <Skills modo={modo}/>
        <Footer/>
    </>
  )
}

export default About