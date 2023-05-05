import React from 'react'


export const Contact = ( { modo } ) => {
  return (
    <>
        <div className={ modo ? 'main_contact1' : 'main_contact2'}>
              <h2> Contact</h2>
            <div className='contact_form'>
                <form action="form_contact" method='post'>
                    <label htmlFor="name" className='contact_form_lblName'>Nombre</label> <br />
                    <input type="text" /> <br /> <br />
                    <label htmlFor="mail">Mail</label>  <br />
                    <input type="text" />  <br /> <br />
                    <label htmlFor="">Mensaje</label> <br />
                    <textarea required name="" id="" cols="30" rows="10"></textarea>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact
