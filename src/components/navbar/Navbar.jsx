import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



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
  



  const navigate = useNavigate()

  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>LOGO</div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/reportes'>Reportes</NavLink>   
        <NavLink to='/publicar'>Publicar</NavLink>
        <NavLink to='/perfil'>Perfil</NavLink>   

      </div>
      <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>Salir</button>
    </div>
    </nav>
    </>
  )
}






export default Navbar