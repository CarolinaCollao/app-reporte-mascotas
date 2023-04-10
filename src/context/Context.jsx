import React, { createContext, useState } from "react";

export const Context = createContext({});

export const ContextProvider = (props) => {

    const [conectado, setConectado] = useState({});

    const lstUsuarios = [
        {
            user: 'Juan',
            email: 'juan@juan.com',
            password: '111'
        },
        {
            user: 'Sara',
            email: 'sara@sara.com',
            password: '222'
        },
    ]

const globalContext = {lstUsuarios, conectado, setConectado}

    return (
        <Context.Provider value={globalContext}>
      {props.children}
    </Context.Provider>
    )
}


