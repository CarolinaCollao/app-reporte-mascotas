
import React, { useState, useEffect } from 'react';


import './Prueba.modules.scss';

const Prueba = () => {
  const data = ["Banana", "Orange", "Apple", "Mango"];
  const [sortState, setSortState] = useState("none");

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };


  return (
    <>
      <div className='container'>
        <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
          <option value="DEFAULT" disabled>Selecciona una opción</option>
          <option value="ascending">Ascendente</option>
          <option value="descending">Descendente</option>
        </select>

        <div className='content'>


        <ul>
        {data.sort(sortMethods[sortState].method).map((el, i) => (
          <h3 key={i}>{el}</h3>
        ))}
      </ul>


        </div>
      </div>
    </>
  )
}

export default Prueba