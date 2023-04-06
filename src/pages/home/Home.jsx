import './Home.modules.scss'

import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {


  return (
    <>
      <div className='home-container'>
        <div className='home-content'>
          <div className='home-text'>
          <p className='home-text'>Repórtalo y ayúdalo a volver a casa</p>
            <p className='home-text-bottom'>¿Tu mascota se extravió?</p>
            <p className='home-text-bottom'>Te invitamos a reportarla</p>
          </div>
        </div>
      </div>

      <div className='categorias-container'>
            <div className='categoria-content'>
                <div className='categoria-item'>Busco un perro</div>
                <div className='categoria-item'>Busco un gato</div>
                <div className='categoria-item'>Encontré un perro</div>
                <div className='categoria-item'>Encontré un gato</div>

            </div>
        </div>

    </>
  )
}

export default Home