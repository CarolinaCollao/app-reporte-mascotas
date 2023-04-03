import './Detalle.modules.scss'

import React from 'react';
import { useParams } from 'react-router-dom';

import { reportes } from '../../data/reportes';

const Detalle = () => {

  const { reporteId } = useParams();

  const reporteSelected = reportes.find(reporte => reporte.id === reporteId);


  console.log(reporteSelected);

  return (
    <div className='detalle.container'> 
    <div>
     {reporteSelected.name}
    </div>
    </div>
  )
}

export default Detalle