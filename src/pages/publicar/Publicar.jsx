import React, { useState, useContext } from 'react';
import { Context } from '../../context/Context';
import './Publicar.modules.scss';
import { useNavigate } from 'react-router-dom';


const Publicar = () => {

  // aquí llamo al contexto
  const { usuario, setUsuario, datosBase, setDatosBase } = useContext(Context);

  // aquí genero la constante para redirigir al usuario
  const navigate = useNavigate();

  // aquí genero los estados para capturar los input
  const [petId, setPetId] = useState('');
  const [petName, setPetName] = useState('');
  const [petCategory, setPetCategory] = useState('');
  const [petRace, setPetRace] = useState('');
  const [petPhoto, SetPetPhoto] = useState('');
  const [petState, setPetState] = useState('');
  const [petDate, setPetdate] = useState('');
  const [petDescription, setPetDescription] = useState('');

  console.log('publicar')
  console.log(petId)

  // aquí creo un Id para la publicación basado en el número de objetos
  let contador = 1;
  for (let i = 0; i < datosBase.length; i++) {
    if (datosBase[i]) contador++;
  }

  // aquí subo el nuevo objeto al final del array
  const publicarReportes = () => {
    setDatosBase([...datosBase,
    {
      idUsuario: usuario.idUsuario,
      id: contador + 1,
      name: petName,
      category: petCategory,
      raza: petRace,
      img: petPhoto,
      date: petDate,
      description: petDescription
    }]);
    console.log(datosBase)
    navigate('/reportes')
  }

  console.log('petCategory')
  console.log(petCategory)

  return (

    <div className='publicar-container'>
      <div className='publicar-content'>

        <div className='publicar'>

          <div className='publicar-vista'>
          <article key={petId} className='card'>

          <header className='header-card'>
            <img className='card-img' src={petPhoto} alt={petName} />
          </header>


          <footer className='footer-card'> 
             <div> <h3 className='nombre-text'>{petName}</h3> </div>
             <p className='raza-text'>{petRace}</p>
             <p className='description-text'>{petDescription}</p>
          </footer>

        </article >
          </div>



          <form className='publicar-form'>
        
            <select
              className="form-input-select"
              name="category"
              onChange={(e) => setPetCategory(e.target.value)}
            >
              <option value="perro">Perro</option>
              <option value="gato">Gato</option>
              <option value="conejo">Conejo</option>
            </select>

            <div className="form-content" >
              <label className="form-label">Nombre</label>
              <input type="text" onChange={(e) => setPetName(e.target.value)} className="form-input" placeholder='ingresa nombre' />
            </div>
            <div className="form-content-inline"> 
            <div className="form-content" >
              <label className="form-label">Raza</label>
              <input type="text" onChange={(e) => setPetRace(e.target.value)} className="form-input-sm" placeholder='ingresa su raza' />
            </div>
            <div className="form-content" >
              <label className="form-label">Imagen</label>
              <input type="text" onChange={(e) => SetPetPhoto(e.target.value)} className="form-input-sm" placeholder='pega url de la foto' />
            </div>
            </div>
            <div className="form-content" >
              <label className="form-label">Descripción</label>
              <textarea  rows="5" cols="33" onChange={(e) => setPetDescription(e.target.value)} className="form-input-textarea" placeholder='ingresa la descripción de tu mascota' />
            </div>

            <div className="form-content" >
              <button type='button' onClick={() => publicarReportes()} className='form-button'> Publicar Reporte</button>
            </div>
          </form>
        </div>

      </div>
    </div>



  )
}

export default Publicar