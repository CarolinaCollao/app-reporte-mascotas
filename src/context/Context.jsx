import React, { createContext, useState, useEffect } from "react";



export const Context = createContext({});

export const ContextProvider = (props) => {

    const [usuario, setUsuario] = useState({});
    const [datosBase, setDatosBase] = useState([]);

   

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

    const globalContext = { lstUsuarios, usuario, setUsuario, datosBase, setDatosBase }

    return (
        <Context.Provider value={globalContext}>
            {props.children}
        </Context.Provider>
    )
}
