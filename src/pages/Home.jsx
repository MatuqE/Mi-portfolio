import  { Header, Main, Footer, Skills }  from '../constants'
import '../style.css'


export const Home = ({ modo, handleOnClick }) => {
  
  

  return (
    <>

        <Header  handleOnClick={ (value) => handleOnClick(value) } modo={modo}/>
        <Main modo={modo}/>
        <Skills modo={modo}/>
        <Footer/>

    </>
  )
}

export default Home