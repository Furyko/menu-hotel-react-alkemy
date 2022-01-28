import React, { useState } from 'react';
import axios from 'axios';
import Input from "./Input";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(true);
    const [ emailError, setEmailError] = useState(true);
    const [ token, setToken] = useState('');
    const [ logedIn, setLogedIn ] = useState(false);
    let navigate = useNavigate();

    function handleChange(name, value) {
        if(name === 'email') {
            if(value.length > 0) {
                setEmailError(false);
                setEmail(value);
            } else {
                setEmailError(true);
            }
        } else {
            if(value.length > 0) {
                setPasswordError(false);
                setPassword(value);
            } else {
                setPasswordError(true);
            }
        }
        if (!emailError && !passwordError) {
            document.getElementById("error-message").innerHTML = "";
        }
    }
    
    function checkFields(e) {
        e.preventDefault();
        if (emailError || passwordError) {
            document.getElementById("error-message").innerHTML = "Todos los campos son obligatorios";
        } else {
            handleSubmit();
        }
    }

    function handleSubmit() {
        document.getElementById("send-btn").disabled = true;
        document.getElementById("send-btn").innerHTML = "Enviando...";
        let account = { email, password };
        if(account) {
            axios.post("http://challenge-react.alkemy.org/", {
            email: email,
            password: password
            })
            .then(res => {
                if (res.status === 200) {
                    const data = res.data;
                    localStorage.setItem("token", res.data.token);
                    setToken(data.token);
                    setLogedIn(true);
                    navigate("/home");
                }
            })
            .catch(error => {
                console.log("Codigo de error ",error.response.status);
                document.getElementById("send-btn").disabled = false;
                document.getElementById("send-btn").innerHTML = "Enviar";
                swal("Datos incorrectos", "El mail y/o contraseña ingresados son incorrectos", "info");
            })
        }
    }
    
    return (
    <div className="card" style={{minWidth: "320px"}}>
        <form action="">
            <div className="card-header d-flex justify-content-center">
                <span>Login</span>
            </div>
            <div className="card-body">
                <Input attribute={{
                    id: "email",
                    name: "email",
                    type: "text",
                    className: "form-control mb-2",
                    placeholder: "Email*"
                }}
                handleChange={handleChange}/>
                <Input attribute={{
                    id: "password",
                    name: "password",
                    type: "password",
                    className: "form-control",
                    placeholder: "Password*"
                }}
                handleChange={handleChange}/>
                <span className='error-message' id="error-message"></span>
            </div>
            <div className='card-footer d-flex justify-content-center'>
                <button className="btn btn-danger" onClick={checkFields} id="send-btn">Enviar</button>
            </div>
        </form>
    </div>
    )
}

export default Login;