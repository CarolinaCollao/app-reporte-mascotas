import './Reportes.modules.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { reportes } from '../../data/reportes';

const Reportes = () => {

  console.log(reportes)
  return (
    <>
      <div className='reportes-container'>
        <div className='reportes-content'>

          <div className='reportes-input'>

           <div>
            <label>Buscar</label>
            <input type="search" name="" id="" />
           </div>

           <div>
            <label>Buscar</label>
            
           </div>

           <div>
            <label>Categorias</label>
            <select name="" id="">
              <option>Mascota encontrada</option>
              <option>Mascota Buscada</option>
            </select>
           </div>

          </div>


          {
            reportes.map(reporte => (
              <article key={reporte.id} className='card'>

                <header className='header-card'>
                  <img className='card-img' src={reporte.img} />
                </header>

                <footer className='footer-card'>

                  <p className='raza-text'>{reporte.raza}</p>
                  <div> <span className='nombre-text'>{reporte.name}</span> </div>

                  <div className='container-button'><Link to={`/reportes/${reporte.id}`} className='reportes-button'>detalles</Link> </div>

                </footer>

              </article >
            ))

          }

        </div>
      </div>

    </>
  )
}

export default Reportes