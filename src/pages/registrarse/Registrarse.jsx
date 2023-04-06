import './Registrarse.modules.scss';
import React from 'react';
//import { useNavigate  } from 'react-router-dom';

const Registrarse = () => {
    return (
        <div className='registrarse-container'>
            <div className='registrarse-content'>
                <form className='form'>

                    <div className="form-content" controlId="formBasicPassword">
                        <label className="label-mail">Nombre</label>
                        <input className="label-input" type="password" placeholder='Ingresa tu nombre' />
                    </div>

                    <div className="form-content" controlId="formBasicEmail">
                        <label className="label-mail">Correo Electrónico</label>
                        <input className="label-input" type="email" placeholder='Ingresa tu mail' />
                    </div>

                    <div className="form-content" controlId="formBasicPassword">
                        <label className="label-mail">Contraseña</label>
                        <input className="label-input" type="password" placeholder='*****' />
                    </div>


                    <button className='login-button'
                    >Ingresar</button>
                </form>

            </div>

        </div>
    )
}

export default Registrarse