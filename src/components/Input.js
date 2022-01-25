import React from 'react';
import "./Input.css";

const Input = ({ attribute, handleChange }) => {
    return (
        <div>
            <input
            id={attribute.id}
            name={attribute.name}
            type={attribute.type}
            placeholder={attribute.placeholder}
            onChange={ (e) => handleChange(e.target.name, e.target.value) }
            className={ attribute.className }
            ></input>
        </div>
    )
}

export default Input;