import React, { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import './Perfil.modules.scss';
import { useNavigate } from 'react-router-dom';


const Perfil = () => {

  const { lstUsuarios, usuario, setUsuario, datosBase, setDatosBase } = useContext(Context);
  const navigateLogOut = useNavigate();

  const [user, setUser] = useState(usuario.user);
  const [email, setEmail] = useState(usuario.email);
  const [telefono, setTelefono] = useState(usuario.telefono);
  const [password, setPassword] = useState(usuario.password);

  console.log(usuario.conectado)

  const actualizarUsuario = () => {
    const posicionUsuarioActual = lstUsuarios.findIndex((u) => u.id === u.idUsuario)
    console.log(posicionUsuarioActual)

    const usuarioActualizado = {
      conectado: true,
      id: usuario.idUsuario,
      user: user,
      email: email,
      telefono: telefono,
      password: password
    }

    setUsuario(usuarioActualizado)
    lstUsuarios[posicionUsuarioActual] = usuarioActualizado;
  }

  //boton para volver a reportes
  const handleLogOut = () => {
    navigateLogOut('/reportes')
  }

  return (

    <div className='perfil-container'>
      <div className='perfil-content'>

        <div className='perfil-data'>
          <div className='data-name'>
            <form className='form'>
              <div className='data-name'>
                <label className="form-label">Nombre</label>
                <input className="form-input" type="texto"
                  value={user}
                  onChange={(e) => setUser(e.target.value)} />
              </div>

              <div className='data-name' >
                <label className="form-label">Correo Electrónico</label>
                <input className="form-input" type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className='data-name' >
                <label className="form-label">Contraseña</label>
                <input className="form-input" type="texto"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)} />
              </div>

              <div className='data-name' >
                <label className="form-label">Contraseña</label>
                <input className="form-input" type="texto"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              </div>

              <button type='button' className='data-button' onClick={() => actualizarUsuario()}>Actualizar Datos</button>
            </form>
            <button className='perfil-button' onClick={handleLogOut}>Volver a reportes</button>

          </div>
        </div>

        <div className='perfil-publicaciones'>
          {
            datosBase.map(reporte => (
              <article key={reporte.id} className='card'>

                <header className='header-card'>
                  <img className='card-img' src={reporte.img} />
                </header>

                <footer className='footer-card'>

                  <p className='raza-text'>{reporte.raza}</p>
                  <div> <span className='nombre-text'>{reporte.name}</span> </div>



                </footer>

              </article >
            ))

          }

        </div>
      </div>






    </div>

  )
}

export default Perfil