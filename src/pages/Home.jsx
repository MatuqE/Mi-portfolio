import  { Header, Main, Footer , Contact }  from '../components'
import '../style.css'


const Home = ({ modo, handleOnClick }) => {
  
  

  return (
    <>

        <Header  handleOnClick={ (value) => handleOnClick(value) } modo={modo}/>
        <Main modo={modo}/>
        <Contact modo={modo}/>
        <Footer/>

    </>
  )
}

export default Home