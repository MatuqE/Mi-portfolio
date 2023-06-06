import React, { useState } from 'react'
import { ContactTable } from '../constants'



export const MainContact = ( { modo } ) => {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [telefono, setTelefono] = useState('')
  const [id, setId] = useState(1)
  const [consultas, setConsultas] = useState([])

  const handlerSubmit = (event) =>{
    event.preventDefault()
    setConsultas([... consultas, {id, nombre, email, mensaje, telefono}])
    
    setId(id + 1)
    event.target.reset()
    alert('Se envio tu consulta.')
  }

  const deleteConsulta = (id) =>{
    const resultado = consultas.filter(consulta => consulta.id !== id )
    setConsultas(resultado)
  }

  return (
    <>
        <div className={ modo ? 'main_contact1' : 'main_contact2'}>
              <h2> Contactame </h2>
            <div className='contact_form'>
                <form action="form_contact" method='post' onSubmit={handlerSubmit}>
                    <label htmlFor="name" className='contact_form_lblName'>Nombre</label> <br />
                    <input type="text" onChange={(e) => setNombre(e.target.value)} required/> <br /> <br />
                    <label htmlFor="mail">Mail</label>  <br />
                    <input type="text"  onChange={(e) => setEmail(e.target.value)} required/>  <br /> <br />
                    <label htmlFor="telefono">Telefono</label> <br />
                    <input type='text' onChange={(e) => setTelefono(e.target.value)} required></input> <br /> <br />
                    <label htmlFor="mensaje">Mensaje</label> <br />
                    <input type='text' onChange={(e) => setMensaje(e.target.value)} required></input> <br /> <br />
                    <button type='submit'>Enviar</button>
                </form>
            </div>

         <ContactTable consultas={consultas} deleteConsulta={deleteConsulta}/>
        </div>
    </>
  )
}

export default MainContact
