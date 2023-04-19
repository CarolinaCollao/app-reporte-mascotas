import './Home.modules.scss'
import React from 'react';

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

      <div className='bottom-container'>

        <div className='bottom-content'>
          <div className='bottom-text'> <h3 className='bottom-text'>¿Qué puedes reportar en nuestra web?</h3></div>
          <div className='categoria-view'>
            <div className='categoria-item'>
              <div className='categoria-img-1'></div><p className='categoria-text'>Puedes reportar a tu mascota perdida</p>
            </div>

            <div className='categoria-item'>
              <div className='categoria-img-2'></div><p className='categoria-text'>Puedes aportar con información</p>
            </div>

            <div className='categoria-item'>
              <div className='categoria-img-3'></div><p className='categoria-text'>Puedes reportar a tu mascota perdida</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home