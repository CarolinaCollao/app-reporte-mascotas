import './Perfil.modules.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Perfil = () => {

  const navigateLogOut = useNavigate();

  const handleLogOut = () => {
  
    navigateLogOut('/')
  }

  return (
    <div className='perfil-container'>
      <h1>Perfil</h1>
      <button className='perfil-button' onClick={handleLogOut}>Volver al home</button>
    </div>
  )
}

export default Perfil