import './Registrarse.modules.scss';
import React, { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import { useNavigate } from 'react-router-dom';

const Registrarse = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { lstUsuarios, usuario, setUsuario } = useContext(Context);

    const navigate = useNavigate();

    const registrarUsuario = () => {
        lstUsuarios.push({ user: user, email: email, password: password })
        navigate('/login')
}

    return (
        <div className='registrarse-container'>
            <div className='registrarse-content'>
                <form className='form'>

                    <div className="form-content" >
                        <label className="label-mail">Nombre</label>
                        <input className="label-input" type="password" placeholder='Ingresa tu nombre' onChange={(e) => setUser(e.target.value)} />
                    </div>

                    <div className="form-content" >
                        <label className="label-mail">Correo Electrónico</label>
                        <input className="label-input" type="email" placeholder='Ingresa tu mail' onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-content" >
                        <label className="label-mail">Contraseña</label>
                        <input className="label-input" type="password" placeholder='*****' onChange={(e) => setPassword(e.target.value)} />
                    </div>


                    <button className='login-button' onClick={() => registrarUsuario()}>Registrarse</button>
                </form>

            </div>

        </div>
    )
}

export default Registrarse