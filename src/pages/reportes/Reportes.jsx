import './Reportes.modules.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { reportes } from '../../data/reportes';

const Reportes = () => {

  console.log(reportes)
  return (
    <div className='reportes-container'>
      <div className='reportes-content'>
        {
          reportes.map(reporte => (
            <div key={reporte.id} className='reportes-card'>

              <h2>{reporte.name}</h2>
              <p>{reporte.raza}</p>
              <Link to={`/reportes/${reporte.id}`} className='reportes-button'>detalles</Link>
           
            </div>
          ))

        }
      </div>
    </div>

    
  )
}

export default Reportes