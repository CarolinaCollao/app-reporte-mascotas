import React from 'react';
import { Link } from 'react-router-dom';
import { reportes } from '../../data/reportes';

const Reportes = () => {

  console.log(reportes)
  return (
    <div>
      {
        reportes.map(reporte => (
          <div key={reporte.id}>
            <h2>{reporte.name}</h2>
            <p>{reporte.raza}</p>
            <Link to={`/reportes/${reporte.id}`}>detalles</Link>
          </div>
        ))

      }
    </div>
  )
}

export default Reportes