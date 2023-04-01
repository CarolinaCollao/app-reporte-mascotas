import React from 'react';
import { useNavigate} from 'react-router-dom';

const Home = () => {

const navigate =  useNavigate();

const handleLogin = () => {
  localStorage.setItem('token', 'true');
   navigate('/perfil')
}

  return (
    <div>
        <h1>Aquí eta el login momentaneamente</h1>
   <button onClick={handleLogin}>Login</button>
   
    </div>
  )
}

export default Home