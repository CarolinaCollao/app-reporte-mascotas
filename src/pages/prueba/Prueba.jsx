
import './Prueba.modules.scss';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import '../../data/reportes.json'


const Prueba = () => {

  const { datosBase, setDatosBase } = useContext(Context);

  const url = '../../src/data/reportes.json';

  const consultarInformacion = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDatosBase(data);
  }

  useEffect(() => {
    consultarInformacion();
  }, []);
  console.log('prueba')
  console.log(datosBase)

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");



  return (
    <div className='container'>
      <div className='content'>

        <div>
        <h1>pruebas</h1>
        </div>



      </div>
    </div>
  );

}

export default Prueba