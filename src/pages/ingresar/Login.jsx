import './Login.modules.scss';
import React, { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const { lstUsuarios, usuario, setUsuario } = useContext(Context);

  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');


  console.log(lstUsuarios)
  console.log(usuario)

  const navigate = useNavigate();

  const validarUsuario = () => {

    const usuarioValido = lstUsuarios.find((usuario) => usuario.email === userMail && usuario.password === userPassword)

    if (usuarioValido) {
      setUsuario({
        conectado: true,
        idUsuario: usuarioValido.idUsuario,
        user: usuarioValido.user,
        email: usuarioValido.email,
        password: usuarioValido.password,
        telefono: usuarioValido.telefono,
      })
      navigate('/homeprivado')
    } else {

      alert('usuario errado')
      setConectado(false)
    }
  }


  const handleRegistrarse = () => {
    navigate('/registrarse')
  }


  return (
    <div className='login-container'>
      <div className='login-content'>
        <form className='form'>
          <div className="form-content" >
            <label className="label-mail">Correo Electrónico</label>
            <input className="form-input" type="email" placeholder='Ingresa tu mail' onChange={(e) => setUserMail(e.target.value)} />
          </div>

          <div className="form-content" >
            <label className="label-mail">Contraseña</label>
            <input className="form-input" type="password" placeholder='Ingresa tu clave' onChange={(e) => setUserPassword(e.target.value)} />
          </div>

          <button type='button' className='login-button' onClick={() => validarUsuario()}>Ingresar</button>
        </form>


        <div className="form-text">
          <p >¿Aún no tienes tu cuenta?</p>
          <button type="" className='input-button'
            onClick={handleRegistrarse}>
            Crear Cuenta</button>
        </div>

      </div>

    </div >
  )
}

export default Login
