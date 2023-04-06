import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import './Navbar.modules.scss'

const Navbar = () => {

  const navigateGoLogin = useNavigate();
  const navigateLogOut = useNavigate();


  const goLogin = () => {
    localStorage.setItem('token', 'true');
    navigateGoLogin('/login')
  }

  const handleLogOut = () => {
    localStorage.removeItem('token');
    navigateLogOut('/')
  }


  return (
    <>
      <nav className='navbar'>

        <div className='navbar-container'>

          <div className='navbar-logo'>
            LOGO
          </div>

          <div navbar-menu>
            
          <div className='navbar-top'>
            <div className='navbar-social'>
              <span className='social-icon'><FaFacebookSquare/></span>
              <span className='social-icon'><FaInstagramSquare /></span>
              <span className='social-icon'><FaTwitterSquare /></span>
            </div>

            <div className='navbar-login'>
              <button className='button-black' onClick={goLogin}>Login</button>
              <button className='button-ligth'  onClick={handleLogOut}>Salir</button>
            </div>
          </div>

          <div className='navbar-bottom'>

            <div className='navbar-navegation'>
              <NavLink className='navbar-navegation-item' to='/'>Home</NavLink>
              <NavLink className='navbar-navegation-item' to='/reportes'>Reportes</NavLink>
              <NavLink className='navbar-navegation-item' to='/publicar'>Publicar</NavLink>
              <NavLink className='navbar-navegation-item' to='/perfil'>Perfil</NavLink>
            </div>
             </div>

          </div>

        </div>

      </nav>

    </>
  )
}






export default Navbar