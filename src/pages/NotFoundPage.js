import React from 'react';
import './NotFoundPage.css';
import {NavLink} from 'react-router-dom';

function NotFoundPage() {

    return (
        <div className="d-flex justify-content-center vh-100 align-items-center">
            <div className="card">
                <h1 className="not-found-text">404 Page not found :(</h1>
                <div className="card-footer d-flex justify-content-center">
                    <NavLink to="/home"><button className='btn btn-danger'>Ir al inicio</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;