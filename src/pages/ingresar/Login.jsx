import './Login.modules.scss';
import { Context } from '../../context/Context';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {



  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const { lstUsuarios, conectado, setConectado } = useContext(Context);
  console.log(lstUsuarios)
  console.log(conectado)

  const navigate = useNavigate();

  const validarUsuario = () => {

    const usuarioValido = lstUsuarios.find((usuario) => usuario.email === userMail && usuario.password === userPassword)

    if (usuarioValido) {
      setConectado(true)
      navigate('/homeprivado')
    } else {

      alert('usuario errado')
      setConectado(false)
    }
  }

  /*
    const handleRegistrarse = () => {
      navigateForm('/registrarse')
    }
  */

  return (
    <div className='login-container'>
      <div className='login-content'>
        <form className='form'>
          <div className="form-content" controlId="formBasicEmail">
            <label className="label-mail">Correo Electrónico</label>
            <input className="label-input" type="email" placeholder='Ingresa tu mail' onChange={(e) => setUserMail(e.target.value)} />
          </div>

          <div className="form-content" controlId="formBasicPassword">
            <label className="label-mail">Contraseña</label>
            <input className="label-input" type="password" placeholder='Ingresa tu clave' onChange={(e) => setUserPassword(e.target.value)} />
          </div>

          <button type='button' className='login-button' onClick={() => validarUsuario()}>Ingresar</button>
        </form>

        {/*   
        <div className="form-text">
          <p >¿Aún no tienes tu cuenta?</p>

          <button type="" className='input-button'
            onClick={handleRegistrarse}>
            Crear Cuenta</button> 
      </div>
      */}
      </div>

    </div >
  )
}

export default Login