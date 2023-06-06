import  { Header, Main, Footer }  from '../constants'
import '../Styles/style.css'



export const Home = ({ modo, handleOnClick }) => {
  
  

  return (
    <>

        <Header  handleOnClick={ (value) => handleOnClick(value) } modo={modo}/>
        <Main modo={modo}/>
        <Footer/>

    </>
  )
}

export default Home