import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    let navigate = useNavigate();

    function logout() {
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Home</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <button className="nav-link btn" type="button" onClick={logout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;