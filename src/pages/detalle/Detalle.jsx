import './Detalle.modules.scss'
import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';


const Detalle = () => {

  //llamado a contexto, navigate y params
  const { lstUsuarios, usuario, setUsuario, datosBase, setDatosBase } = useContext(Context);
  const navigateReturn = useNavigate();
  const { reporteId } = useParams();

  //creación de los estados para mostrar telefono
  const [showMessage, setShowMessage] = useState('');

  //llamado al id del reporte seleccionado
  console.log('mostrar reporte seleccionado')
  const reporteSelected = datosBase.find(reporte => reporte.id === reporteId);

  //identificación del dueño del reporte
  const reportesUsuario = lstUsuarios.find((user) => user.idUsuario === reporteSelected.idUsuario);
  console.log('mostrar quien hizo este reporte')
  console.log(reportesUsuario)

  //redirecciona el usuario para volver a reportes
  const mostrarTelefono = () => {
    setShowMessage(true);
  }

  //redirecciona el usuario para volver a reportes
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

            <div className='message-line'>{showMessage &&

              <div className='message-show'>
                <span className='message-text'> Teléfono: {reportesUsuario.telefono} -  mail: {reportesUsuario.email}</span>
                <span className=' message-close' onClick={() => setShowMessage(false)}>X</span>
              </div>}

            </div>


            <button onClick={mostrarTelefono} className='message-button'>Enviar un mensaje</button>
            <button onClick={returnReportes} className='detalle-button'>Volver a reportes</button>
          </footer>

        </article >

      </div>
    </div>
  )
}

export default Detalle