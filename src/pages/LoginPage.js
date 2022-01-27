import React from 'react';
import Login from "../components/Login";
import {NavLink} from 'react-router-dom';

function LoginPage() {
    const token = localStorage.getItem('token');
    return (
        <div>
            {token ? <div className="d-flex justify-content-center vh-100 align-items-center">
                <div className="card">
                    <div className='card-header d-flex justify-content-center'>
                        <span>¡Ya haz iniciado sesión!</span>
                    </div>
                    <div className='card-body d-flex justify-content-center'>
                        <span>No necesitas iniciar sesión otra vez :)</span>
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                        <NavLink to="/home"><button className="btn btn-danger">Ir al home</button></NavLink>
                    </div>
                </div>
            </div> :
            <div className="d-flex justify-content-center vh-100 align-items-center">
                <Login/>
            </div>
            }
        </div>
    )
}

export default LoginPage;