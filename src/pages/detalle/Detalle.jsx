import './Detalle.modules.scss'
import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';


const Detalle = () => {

  const { lstUsuarios, usuario, setUsuario, datosBase, setDatosBase } = useContext(Context);

  const navigateReturn = useNavigate();

  const { reporteId } = useParams();

  const reporteSelected = datosBase.find(reporte => reporte.id === reporteId);

  const returnReportes = () => {
    navigateReturn('/reportes')
  }


  console.log(reporteSelected);

  return (
    <div className='detalle-container'>
      <div className='detalle-content'>

        <article key={reporteSelected.id} className='card'>

          <header className='header-card'>
            <img className='card-img' src={reporteSelected.img} alt={reporteSelected.name} />
          </header>


          <footer className='footer-card'>
             <div> <h2 className='nombre-text'>{reporteSelected.name}</h2> </div>
             <p className='raza-text'>{reporteSelected.raza}</p>
            <p className='description-text'>{reporteSelected.description}</p>

           <button onClick={returnReportes} className='detalle-button'>Volver a reportes</button> 
          </footer>

        </article >

      </div>
    </div>
  )
}

export default Detalle