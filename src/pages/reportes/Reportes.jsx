import './Reportes.modules.scss';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';


const Reportes = () => {

  //llamado a contexto 
  const { datosBase, setDatosBase } = useContext(Context);

    //creación de los estados para controlar los input
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");


  return (
    <>
      <div className='reportes-container'>

        <div className='reportes-content'>

          <div className='reportes-input'>

            <div className='reportes-input-group'> 
            <label htmlFor="search">Buscar </label>
            <input
              type="text"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className='reportes-input-group'>
            <label htmlFor="filter">Filtrar por Categoría </label>
            <select id="filter" onChange={(e) => setFilter(e.target.value)}>
              <option value="all">Mostrar todos</option>
              <option value="perro">Perro</option>
              <option value="gato">Gato</option>
              <option value="conejo">Conejo</option>
            </select>
          </div>
          </div>

          <div className='reportes-results'>
            {datosBase
              .filter(
                (product) =>
                  (filter === "all" || product.category === filter) &&
                  product.category.toLowerCase().includes(search.toLowerCase())
              )
              .map((reporte) => (
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
              ))}
          </div>
        </div>
      </div>

    </>
  )
};

export default Reportes