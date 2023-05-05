import React, { useState } from 'react'
import useLocalStorage from './components/useLocalStorage'
import  { Header, Main, Footer , Contact }  from './components'
import './style.css'


const Home = () => {
  
  const [modo, setModo] = useLocalStorage('text', true)
  
  const handleOnClick  = () => {
    return setModo(!modo)
  }
  

  console.log(modo)

  return (
    <>
      <body className={ modo ? 'body1' : 'body2'}>
        <Header handleOnClick={ (value) => handleOnClick(value) } modo={modo}/>
        <Main modo={modo}/>
        <Contact modo={modo}/>
        <Footer/>
      </body>
    </>
  )
}

export default Home