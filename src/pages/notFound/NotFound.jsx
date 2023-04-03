import { NavLink } from 'react-router-dom';
import './NotFound-modules.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='notfound-container'>
     
      <div className= 'notfound-column'>
        <p className='notfound-subtitle'>página no encontrada</p>
        <p className='notfound-title'>404</p>
        <p className='notfound-error'>Vuelve a la página de inicio</p>
        <Link to='/' className='notfound-button'>Volver al inicio</Link>
      </div>

       <div className= 'notfound-column'>
        <img  className='notfound-img' src='https://uploads-ssl.webflow.com/5c1418637b45f564e46156cc/5dd2174cee42468db4227a5c_greg-gunn-animated-stickers-facebook-messenger-stretch-dog-09-crying.gif' />
      </div>

    </div>
  )
}

export default NotFound