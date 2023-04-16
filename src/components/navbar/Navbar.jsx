import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import './Navbar.modules.scss'
import { useContext } from 'react';
import { Context } from '../../context/Context';

const Navbar = () => {

  const { lstUsuarios, usuario, setUsuario } = useContext(Context);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login')
  }

  const handleLogOut = () => {
    setConectado({ conectado: false, email: '' })
    navigate('/')
  }


  return (
    <>
      <nav className='navbar'>

        <div className='navbar-container'>

          <div className='navbar-logo'>
            LOGO
          </div>

          <div className='navbar-menu' >

            <div className='navbar-top'>
              <div className='navbar-social'>
                <span className='social-icon'><FaFacebookSquare /></span>
                <span className='social-icon'><FaInstagramSquare /></span>
                <span className='social-icon'><FaTwitterSquare /></span>
              </div>

     

                  <div className='navbar-login-user'>{usuario.user}</div>
            
                <button className='button-ligth' onClick={() => handleLogOut()}>Salir</button>

                <button className='button-black' onClick={() => handleLogin()}>Login</button>


            </div>

            <div className='navbar-bottom'>

              <div className='navbar-navegation'>
                <NavLink className='navbar-navegation-item' to='/'>Home</NavLink>
                <NavLink className='navbar-navegation-item' to='/prueba'>Prueba</NavLink>
                <NavLink className='navbar-navegation-item' to='/reportes'>Reportes</NavLink>
                {
                  usuario.conectado ?
                    <>
                      <NavLink className='navbar-navegation-item' to='/perfil'>Perfil</NavLink>
                      <NavLink className='navbar-navegation-item' to='/publicar'>Publicar</NavLink>
                    </>
                    : <h3>LogOut</h3>

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