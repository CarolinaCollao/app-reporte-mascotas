import React, { useState, useContext } from 'react';
import { Context } from '../../context/Context';
import './Publicar.modules.scss';
import { useNavigate } from 'react-router-dom';


const Publicar = () => {

  const { usuario, setUsuario, datosBase, setDatosBase } = useContext(Context);
  const navigate = useNavigate();

  const [petId, setPetId] = useState('');
  const [petStatus, setPetStatus] = useState('');
  const [petName, setPetName] = useState('');
  const [petCategory, SetPetCategory] = useState('');
  const [petRace, setPetRace] = useState('');
  const [petPhoto, SetPetPhoto] = useState('');
  const [petState, setPetState] = useState('');
  const [petDate, setPetdate] = useState('');
  const [petDescription, SetPetDescription] = useState('');

  const publicarReportes = () => {
    setDatosBase([...datosBase,
    {
      idUsuario: usuario.idUsuario,
      id: petId,
      status: petStatus,
      name: petName,
      category: petCategory,
      raza: petRace,
      img: petPhoto,
      state: petState,
      date: petDate,
      description: petDescription
    }]);
    console.log(datosBase)
    navigate('/reportes')
  }

  return (

    <div className='publicar-container'>
      <div className='publicar-content'>

        <div className='publicar'>

          <div className='publicar-vista'>
            <h3>Visualizar Publicaciones</h3>
          </div>


          <form className='publicar-form'>
            <diV className='form-content'>
              <label className="form-label">Nombre</label>
              <input type="text" onChange={(e) => setPetName(e.target.value)} className="form-input" placeholder='ingresa nombre' />
            </diV>
            <diV className='form-content'>
              <label className="form-label">Raza</label>
              <input type="text" onChange={(e) => setPetRace(e.target.value)} className="form-input" placeholder='ingresa su raza' />
            </diV>
            <diV className='form-content'>
              <label className="form-label">Imagen</label>
              <input type="text" onChange={(e) => SetPetPhoto(e.target.value)} className="form-input" placeholder='pega url de la foto' />
            </diV>
            <diV className='form-content'>
              <label className="form-label">Descripción</label>
              <input type="text" onChange={(e) => SetPetDescription(e.target.value)} className="form-input" placeholder='pega url de la foto' />
            </diV>

            <diV className='form-content'>
              <button type='button' onClick={() => publicarReportes()} className='form-button'> Publicar Reporte</button>
            </diV>
          </form>
        </div>

      </div>
    </div>



  )
}

export default Publicar