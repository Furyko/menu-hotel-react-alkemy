import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

function HomePage() {
    let navigate = useNavigate();
    const token = localStorage.getItem('token');
    console.log(token);

    return (
        <div>
            <NavBar page="Home"/>
            <h1>Welcome to Home!</h1>
            <p>Eres bienvendio aquí</p>
        </div>
    )
}

export default HomePage;