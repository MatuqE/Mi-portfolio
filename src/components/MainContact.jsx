import React, { useState } from 'react'


export default function () {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const handlerChange= (e) =>{
        setNombre = 
    }
     
  return (
    <>
        <Form>
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" onChange={handlerChange= (e) => setNombre(e.tager.value)}/>
                <br />

                <Form.Label>Email</Form.Label>
                <Form.Control type="text" onChange={handlerChange= (e) => setEmail(e.tager.value)}/>
                <br />

                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" onChange={handlerChange= (e) => setDescripcion(e.tager.value)}/>
                <br />

            </Form.Group>
        </Form>
    </>
  )
}
