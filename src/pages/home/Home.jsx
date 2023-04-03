import './Home.modules.scss'

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Categorias } from '../../components/categorias/Categorias';



const Home = () => {


  return (
    <>
      <div className='home-container'>
        <div className='home-content'>
          <div className='home-text'>
            <p>Bienvenido a nuestro sitio web</p>
          </div>
        </div>
      </div>

      <div>
        <Categorias />
      </div>

    </>
  )
}

export default Home