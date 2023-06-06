import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import useLocalStorage from './components/useLocalStorage';
import { Error, Home, Contacto, About } from './constants'


const App = () => {

  const [modo, setModo] = useLocalStorage('text', true)
  
  const handleOnClick  = () => {
    return setModo(!modo)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home modo={modo}  handleOnClick={ (value) => handleOnClick(value) } />} />
        <Route path="/Contacto" element={<Contacto modo={modo}  handleOnClick={ (value) => handleOnClick(value) }  />} />
        <Route path="/About" element={<About modo={modo} handleOnClick={ (value) => handleOnClick(value) }/>}/>
        <Route path="*" element={<Error modo={modo} handleOnClick={ (value) => handleOnClick(value) }/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
