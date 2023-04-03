import './Home.modules.scss'

import React from 'react';
import { useNavigate } from 'react-router-dom';




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

      <div className='categorias-container'>
            <div className='categoria-content'>
                <div className='categoria-item'>1</div>
                <div className='categoria-item'>2</div>
                <div className='categoria-item'>3</div>
                <div className='categoria-item'>4</div>

            </div>
        </div>

    </>
  )
}

export default Home