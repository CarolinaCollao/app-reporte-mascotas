import './Registrarse.modules.scss';
import React, { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import { useNavigate } from 'react-router-dom';

const Registrarse = () => {

    //llamado a contexto y navigate
    const { lstUsuarios, usuario, setUsuario } = useContext(Context);
    const navigate = useNavigate();

    //creación de los estados para controlar los input
    const [user, setUser] = useState('');
    const [errorUser, setErrorUser] = useState('');
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');


    //obtienen los datos de los input
    const handleUser = (e) => {
        setUser(e.target.value);
        setErrorUser('');
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrorEmail('');
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setErrorPassword('');
    };

    //función para validar campos y agregar nuevo usuario
    const registrarUsuario = () => {
        if (user === '') {
            setErrorUser('Ingrese su nombre')
        } if (email === '') {
            setErrorEmail('Ingrese su correo electrónico')
        } if (password === '') {
            setErrorPassword('Cree una contraseña')
        } else {
            lstUsuarios.push({conectado: false, user: user, email: email, password: password })
            navigate('/login')
        }
    }

    return (
        <div className='registrarse-container'>
            <div className='registrarse-content'>
                <form className='form'>

                    <div className="form-content" >
                        <label className="label-mail">Nombre</label>
                        <input className="label-input" type="password" placeholder='Ingresa tu nombre' onChange={handleUser} />
                        <div className="error-line"> {errorUser && <span >{errorUser}</span>}</div>
                    </div>

                    <div className="form-content" >
                        <label className="label-mail">Correo Electrónico</label>
                        <input className="label-input" type="email" placeholder='Ingresa tu mail' onChange={handleEmail} />
                        <div className="error-line"> {errorEmail && <span >{errorEmail}</span>}</div>
                    </div>

                    <div className="form-content" >
                        <label className="label-mail">Contraseña</label>
                        <input className="label-input" type="password" placeholder='*****' onChange={handlePassword} />
                        <div className="error-line"> {errorPassword && <span >{errorPassword}</span>}</div>
                    </div>


                    <button type='button' className='login-button' onClick={() => registrarUsuario()}>Registrarse</button>
                </form>

            </div>

        </div>
    )
}

export default Registrarse