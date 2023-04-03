import './Detalle.modules.scss'

import React from 'react';
import { useParams,  useNavigate } from 'react-router-dom';

import { reportes } from '../../data/reportes';

const Detalle = () => {

  const navigateReturn = useNavigate();

  const { reporteId } = useParams();

  const reporteSelected = reportes.find(reporte => reporte.id === reporteId);

  const returnReportes =  () => {
    navigateReturn('/reportes')
  }


  console.log(reporteSelected);

  return (
    <div className='detalle-container'>
      <div className='detalle-content'>

        <div className='detalle-card'>
          <div className='detalle-img'>
            <img className='img' src={reporteSelected.img} />
          </div>

          <div className='detalle-info'>
            <h2 className='detalle-name'> {reporteSelected.name}</h2>
            <div className='description-container'> <p className='detalle-description'> {reporteSelected.description}</p></div>
            <button className='detalle-button' onClick={returnReportes} >volver a reportes</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Detalle