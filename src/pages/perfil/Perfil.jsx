import React from 'react'
import { useNavigate } from 'react-router-dom';

const Perfil = () => {

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('token');
    navigate('/')
  }

  return (
    <div>
      <h1>Perfil</h1>
      <button onClick={handleLogOut}>Salir</button>
    </div>
  )
}

export default Perfil