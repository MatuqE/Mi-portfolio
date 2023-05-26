import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import Contacto from './pages/Contacto.jsx'
import useLocalStorage from './components/useLocalStorage';
import { Error, Home } from './constants'

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
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
