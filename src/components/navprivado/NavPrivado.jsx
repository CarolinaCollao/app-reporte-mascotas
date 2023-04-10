import React from 'react';
import './NavPrivado.modules.scss';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



const NavPrivado = () => {
  return (
    <>
    <nav className='navbar-privado'>

      <div className='navbar-container'>


          <div className='navbar-bottom'>

            <div className='navbar-navegation'>
              <NavLink className='navbar-navegation-item' to='/homeprivado'>Home Privado</NavLink>
              <NavLink className='navbar-navegation-item' to='/publicar'>Publicar</NavLink>
              <NavLink className='navbar-navegation-item' to='/perfil'>Perfil</NavLink>
            </div>
          </div>

        </div>

    </nav>

  </>
  )
}

export default NavPrivado