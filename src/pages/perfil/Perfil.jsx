import NavPrivado from '../../components/navprivado/NavPrivado';
import './Perfil.modules.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { reportes } from '../../data/reportes'

const Perfil = () => {

  const navigateLogOut = useNavigate();

  const handleLogOut = () => {

    navigateLogOut('/')
  }

  return (
    <div className='vistas-privadas'> 
    <NavPrivado />
    <div className='perfil-container'>
      <div className='perfil-content'>

        <div className='perfil-data'>
          <div className='data-name'>
            <p>Nombre</p>
            <p>Marcela Miranda</p>
          </div>
          <div className='data-name'>
            <p>Correo Electrónico</p>
            <p>marcela@mail.com</p>
          </div>
          <div className='data-name'>
            <p>Clave</p>
            <p>*******</p>
          </div>

          <button className='data-button'>Editar Datos</button>
          <button className='perfil-button' onClick={handleLogOut}>Volver al home</button>
        </div>

        <div className='perfil-publicaciones'>
        {
            reportes.map(reporte => (
              <article key={reporte.id} className='card'>

                <header className='header-card'>
                  <img className='card-img' src={reporte.img} />
                </header>

                <footer className='footer-card'>

                  <p className='raza-text'>{reporte.raza}</p>
                  <div> <span className='nombre-text'>{reporte.name}</span> </div>

             

                </footer>

              </article >
            ))

          }

        </div>
        </div>






      </div>
    </div>
  )
}

export default Perfil