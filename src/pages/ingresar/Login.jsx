import './Login.modules.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigateForm = useNavigate();

  const handleRegistrarse = () => {
    navigateForm('/registrarse')
  }


  return (
    <div className='login-container'>
      <div className='login-content'>
        <form className='form'>
          <div className="form-content" controlId="formBasicEmail">
            <label className="label-mail">Correo Electrónico</label>
            <input className="label-input" type="email" placeholder='Ingresa tu mail' />
          </div>

          <div className="form-content" controlId="formBasicPassword">
            <label className="label-mail">Contraseña</label>
            <input className="label-input" type="password" placeholder='Ingresa tu clave' />
          </div>


          <button className='login-button'
          >Ingresar</button>
        </form>

        <div className="form-text">
          <p >¿Aún no tienes tu cuenta?</p>

          <button type="" className='input-button'
            onClick={handleRegistrarse}>
            Crear Cuenta</button>
        </div>
      </div>

    </div>
  )
}

export default Login