import React from 'react';
import { Formik } from 'formik';

const DishesForm = () => {
    return (
        <>
            <form className="mb-3">
                <div>
                    <label htmlFor="search" className="form-label">Busqueda</label>
                    <input type="text" id="search" name="search" placeholder='Burger' className='form-control'/>
                </div>
                <button type="submit">Buscar</button>
            </form>
        </>
    )
}

export default DishesForm;