import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import  Home  from './pages/Home.jsx'
import Contacto from './pages/Contacto.jsx'
import useLocalStorage from './components/useLocalStorage';

const App = () => {

  const [modo, setModo] = useLocalStorage('text', true)
  
  const handleOnClick  = () => {
    return setModo(!modo)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home modo={modo}  handleOnClick={ (value) => handleOnClick(value) } />} />
        <Route path="/pages/Contacto" element={<Contacto modo={modo}  handleOnClick={ (value) => handleOnClick(value) }  />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
