import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './Navbar.modules.scss'

const Navbar = () => {

  const navigateLogin = useNavigate();
  const navigateLogOut = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('token', 'true');
    navigateLogin('/perfil')
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
              <p>Facebook</p>
              <p>Instagram</p>
              <p>TikTok</p>
            </div>

            <div className='navbar-login'>
              <button className='button-black' onClick={handleLogin}>Login</button>
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