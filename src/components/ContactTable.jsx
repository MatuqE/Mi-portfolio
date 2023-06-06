import React from 'react'

export const ContactTable = ({ consultas, deleteConsulta }) => {
  return (
    <div  className='tablaMainContact'>
             <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre </th>
                        <th>Telefono</th>
                        <th>Email</th>
                        <th>Mensaje</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                  <tbody>
                      {consultas.map(consulta =>
                          <tr key={consulta.id}>
                              <td>{consulta.id}</td>
                              <td>{consulta.nombre}</td>
                              <td>{consulta.telefono}</td>
                              <td>{consulta.email}</td>
                              <td>{consulta.mensaje}</td>
                              <td>
                                  <button className='btn btn-danger' onClick={() => deleteConsulta(consulta.id)}>eliminar</button>
                              </td>
                          </tr>
                      )}
                  </tbody>
              </table>
            </div>
  )
}

export default ContactTable