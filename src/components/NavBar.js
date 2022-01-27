import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar(param = []) {
    let navigate = useNavigate();

    function logout() {
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand">{param.page}</span>
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