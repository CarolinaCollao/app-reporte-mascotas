import './Navbar.modules.scss'
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";



const Navbar = () => {

   //llamado a contexto, navigate y params
  const { lstUsuarios, usuario, setUsuario, conectado, setConectado } = useContext(Context);
  const navigate = useNavigate();

   //funciones de los botones de login y logout
  const handleLogin = () => {
    navigate('/login')
  }

  const handleLogOut = () => {
    setUsuario({ conectado: false, email: '' })
    navigate('/reportes')
  }


  return (
    <>
      <nav className='navbar'>

        <div className='navbar-container'>

          <div className='navbar-logo'> Macotas S.O.S</div>

          <div className='navbar-menu' >

            <div className='navbar-top'>
              <div className='navbar-social'>
                <span className='social-icon'><FaFacebookSquare /></span>
                <span className='social-icon'><FaInstagramSquare /></span>
                <span className='social-icon'><FaTwitterSquare /></span>
              </div>

              <div className='navbar-login-user'>{usuario.user}</div>

              <button className='button-black' onClick={() => handleLogin()}>Login</button>
              <button className='button-ligth' onClick={() => handleLogOut()}>Salir</button>

            </div>

            <div className='navbar-bottom'>

              <div className='navbar-navegation'>
                <NavLink className='navbar-navegation-item' to='/'>Home</NavLink>
                <NavLink className='navbar-navegation-item' to='/reportes'>Reportes</NavLink>
                {
                  usuario.conectado ?
                    <>
                      <NavLink className='navbar-navegation-item' to='/publicar'>Publicar</NavLink> 
                      <NavLink className='navbar-navegation-item' to='/perfil'>Perfil</NavLink>
                    </>
                    : <h3></h3>

                }
              </div>
            </div>

          </div>

        </div>

      </nav>

    </>
  )
}






export default Navbar