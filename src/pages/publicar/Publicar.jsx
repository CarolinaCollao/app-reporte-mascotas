import React, { useState, useContext } from 'react';
import { Context } from '../../context/Context';
import './Publicar.modules.scss';
import { useNavigate } from 'react-router-dom';


const Publicar = () => {

  const {lstGatos, setLstGatos} = useContext(Context);
  const navigate = useNavigate();
  
  /*
    const [petName, setPetName] = useState('');
    const [petCategory, SetPetCategory] = useState('');
    const [petRace, setPetRace] = useState('');
    const [petDescription, SetPetDescription] = useState('');
    const [petPhoto, SetPetPhoto] = useState('');
  */
  const [datoGato, setDatoGato] = useState('');

  const publicarGato = () => {
   // setLstGatos([...setLstGatos, { datoGato: data }]);
    navigate('/reportes')
  }

  return (

    <div className='publicar-container'>
      <div className='publicar-content'>

        <div className='publicar'>

          <div className='publicar-vista'>
            <h3>Visualizar Publicaciones</h3>
          </div>

          {/*
          <form className='publicar-form'>

          <div className="form-content">
              <select
                className="form-control"
                name="state"
              >
                <option value="perdida">Reportar mascota perdida</option>
                <option value="encontrada">Reportar mascota encontrada</option>
              </select>
            </div>


            <div className="form-content">
              <select
                className="form-control"
                name="state"
              >
                <option value="pendiente">Perro</option>
                <option value="completado">Gato</option>
                <option value="completado">Conejo</option>
              </select>
            </div>

            <div className="form-content" >
              <label className="label-mail">Nombre de tu mascota</label>
              <input className="label-input" type="text" placeholder='Ingresa nombre de la mascota' onChange={(e) => setPetName(e.target.value)} />
            </div>



            <div className="form-content" >
              <label className="label-mail">Raza</label>
              <input className="label-input" type="password" placeholder='Ingresa su raza' onChange={(e) => setUserMail(e.target.value)} />
            </div>

            <div className="form-content" >
              <label className="label-mail">Descripción</label>
              <textarea className="label-input" type="password" placeholder='describa a su mascota' onChange={(e) => setUserMail(e.target.value)} />
            </div>

            <div className="form-content" >
            <input
          type="file"
          
          onChange={(e) => SetPetPhoto(e.target.files)}
        />
         </div>
            <button className='login-button'
            >Publicar</button>
          </form>
 */}
          <form>
            <input type="text" onChange={(e) => setDatoGato(e.target.value)} placeholder='ingresa nombre' />
            <button className='login-button' onClick={() => publicarGato()}> Nuevo Gato</button>
          </form>
        </div>

      </div>
    </div>



  )
}

export default Publicar