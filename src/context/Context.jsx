import React, { createContext, useState } from "react";

export const Context = createContext({});

export const ContextProvider = (props) => {

    const [usuario, setUsuario] = useState({});


    const lstUsuarios = [
        {
            user: 'Juan',
            email: 'juan@juan.com',
            password: '111',
            conectado: false
        },
        {
            user: 'Sara',
            email: 'sara@sara.com',
            password: '222',
            conectado: false
        },
    ]

const globalContext = {lstUsuarios, usuario, setUsuario}

    return (
        <Context.Provider value={globalContext}>
      {props.children}
    </Context.Provider>
    )
}


