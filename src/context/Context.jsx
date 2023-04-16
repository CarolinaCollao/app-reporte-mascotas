import React, { createContext, useState, useEffect } from "react";
import '../data/publicaciones.json';



export const Context = createContext({});

export const ContextProvider = (props) => {

    const [usuario, setUsuario] = useState({});

    const [lstProductos, setLstProductos] = useState([]);

    const lstUsuarios = [
        {
            idUsuario: '1',
            user: 'Juan',
            email: 'juan@juan.com',
            password: '111',
            conectado: false
        },
        {
            idUsuario: '1',
            user: 'Sara',
            email: 'sara@sara.com',
            password: '222',
            conectado: false
        },
    ]

    const globalContext = { lstUsuarios, usuario, setUsuario, lstProductos, setLstProductos }

    return (
        <Context.Provider value={globalContext}>
            {props.children}
        </Context.Provider>
    )
}


