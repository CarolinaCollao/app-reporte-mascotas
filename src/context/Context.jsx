import React, { createContext, useState, useEffect } from "react";
import '../../public/reportes.json'


export const Context = createContext({});

export const ContextProvider = (props) => {

    const [usuario, setUsuario] = useState({});
    const [datosBase, setDatosBase] = useState([]);


       //llamado a la api de reportes
  const url = '../../public/reportes.json';

  //renderización de la data de la api de reportes
const consultarInformacion = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setDatosBase(data);
}

useEffect(() => {
  consultarInformacion();
}, []);

console.log('context')
console.log(datosBase)


    const lstUsuarios = [
        {
            idUsuario: '1',
            user: 'Juan',
            email: 'juan@juan.com',
            password: '111',
            telefono: '932323232',
            conectado: false
        },
        {
            idUsuario: '2',
            user: 'Sara',
            email: 'sara@sara.com',
            password: '222',
            telefono: '932323232',
            conectado: false
        },
    ]

    const globalContext = { lstUsuarios, usuario, setUsuario,  datosBase, setDatosBase}

    return (
        <Context.Provider value={globalContext}>
            {props.children}
        </Context.Provider>
    )
}
