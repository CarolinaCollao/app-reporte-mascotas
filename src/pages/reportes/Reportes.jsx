import './Reportes.modules.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { reportes } from '../../data/reportes';

const Reportes = () => {

  console.log(reportes)
  return (
    <>
      <div className='reportes-container'>
          <div className='reportes-form'>
            <form>
              <input
                className="form-control"
                type="text"
                placeholder="Buscador"
                name="title"
              />

              <select
                className="form-control"
                name="state"
              >
                <option value="pendiente">Perro</option>
                <option value="completado">Gato</option>
                <option value="completado">Conejo</option>
              </select>
              <div>
                <button
                  className="btn btn-primary"
                  type="submit">
                  filtrar
                </button>
              </div>
            </form>
          </div>
        <div className='reportes-content'>



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