import React, { useState } from 'react';
import axios from 'axios';
import Input from "./Input";
import swal from 'sweetalert';
import "./Login.css";

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(true);
    const [ emailError, setEmailError] = useState(true);
    const [ token, setToken] = useState('');
    const [ logedIn, setLogedIn ] = useState(false);

    function handleChange(name, value) {
        if(name === 'email') {
            console.log("length:", value.length)
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
        console.log("emailError: ",emailError)
        console.log("passwordError: ",passwordError)
        if (!emailError && !passwordError) {
            document.getElementById("error-message").innerHTML = "";
        }
    }
    
    function checkFields(e) {
        e.preventDefault();
        if (emailError || passwordError) {
            document.getElementById("error-message").innerHTML = "Todos los campos son obligatorios";
            console.log("Sin email o sin contraseña :/")
        } else {
            handleSubmit();
            console.log("Con email y contraseña :D");
        }
    }

    function handleSubmit() {
        document.getElementById("send-btn").disabled = true;
        document.getElementById("send-btn").innerHTML = "Enviando...";
        let account = { email, password };
        if(account) {
            console.log("account:", account);
            axios.post("http://challenge-react.alkemy.org/", {
            email: email,
            password: password
            })
            .then(res => {
                if (res.status === 200) {
                    const data = res.data;
                    setToken(data.token);
                    console.log(res);
                    console.log(token);
                    setLogedIn(true);
                    console.log("Sesion iniciada con exito.");
                }
            })
            .catch(error => {
                console.log("Codigo de error: ",error.response.status);
                document.getElementById("send-btn").disabled = false;
                document.getElementById("send-btn").innerHTML = "Enviar";
                swal("Los datos ingresados son incorrectos");
            })
        }
    }
    
    return (
    <div className="card" style={{minWidth: "320px"}}>
        <form action="">
            <div className="card-header">
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
            <div className='card-footer'>
                <button className="btn btn-danger" onClick={checkFields} id="send-btn">Enviar</button>
            </div>
        </form>
    </div>
    )
}

export default Login;