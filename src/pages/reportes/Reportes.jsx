import './Reportes.modules.scss';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import { reportes } from '../../data/reportes';
import { Context } from '../../context/Context';
import '../../data/data'


const Reportes = () => {

  const [datosBase, setDatosBase] = useState([]);
  const [search, setSearch] = useState('');

  console.log('chao')
  console.log(datosBase)

  const url = '../../src/data/reportes.json';

  const consultarInformacion = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDatosBase(data);
  }

  useEffect(() => {
    consultarInformacion();
  }, []);

  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value)
  }


  let results = [];

  if (!search) {
    results = datosBase
  } else {
    results = datosBase.filter((dato) =>
      dato.category.toLowerCase().includes(search.toLowerCase()) ||
      dato.raza.toLowerCase().includes(search.toLowerCase()))
  }

  return (
    <>
      <div className='reportes-container'>
        <div className='reportes-form'>
          <form>
            <label>Buscar por palabra clave </label>
            <input
              className="form-control"
              type="text"
              placeholder="Buscador"
              value={search}
              onChange={searcher}
            />

            <select
              className="form-control"
              name="state"
            >
              <option value="perro">Perro</option>
              <option value="gato">Gato</option>
              <option value="conejo">Conejo</option>
            </select>
            <div>
              <button
                className="btn btn-primary"
                type="submit">
                filtrar
              </button>
            </div>
          </form>
        </div>
        <div className='reportes-content'>



          {
            results.map(reporte => (
              <article key={reporte.id} className='card'>

                <header className='header-card'>
                  <img className='card-img' src={reporte.img} alt={reporte.raza} key={reporte.id} />
                </header>

                <footer className='footer-card'>

                  <p className='raza-text'>{reporte.raza}</p>
                  <div> <span className='nombre-text'>{reporte.name}</span> </div>

                  <div className='container-button'><Link to={`/reportes/${reporte.id}`} className='reportes-button'>detalles</Link> </div>

                </footer>

              </article >
            ))

          }


        </div>
      </div>

    </>
  )
}

export default Reportes