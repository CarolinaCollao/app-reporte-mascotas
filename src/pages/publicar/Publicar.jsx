
import './Publicar.modules.scss';
import React from 'react'

const Publicar = () => {
  return (
 
    <div className='publicar-container'>
      <div className='publicar-content'>

        <div className='publicar'>

          <div className='publicar-vista'>
            <h3>Visualizar Publicaciones</h3>
          </div>

         
          <form className='publicar-form'>
          <div className="form-content" controlId="formBasicEmail">
            <label className="label-mail">Nombre de tu mascota</label>
            <input className="label-input" type="email" placeholder='Ingresa nombre de la mascota' />
          </div>

          <div className="form-content" controlId="formBasicPassword">
            <label className="label-mail">Raza</label>
            <input className="label-input" type="password" placeholder='Ingresa su raza' />
          </div>

          <div className="form-content" controlId="formBasicPassword">
            <label className="label-mail">Descripción</label>
            <textarea className="label-input" type="password" placeholder='describa a su mascota' />
          </div>


          <button className='login-button'
          >Publicar</button>
        </form>
          </div>

        </div>
      </div>
  

   
  )
}

export default Publicar