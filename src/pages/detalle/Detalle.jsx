import React from 'react';
import { useParams } from 'react-router-dom';

import { reportes } from '../../data/reportes';

const Detalle = () => {

  const { reporteId } = useParams();

  const reporteSelected = reportes.find(reporte => reporte.id === reporteId);


  console.log(reporteSelected);

  return (
    <div>
     {reporteSelected.name}
    </div>
  )
}

export default Detalle