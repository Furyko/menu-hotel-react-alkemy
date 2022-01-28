import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import axios from 'axios';
import DishesList from '../components/DishesList';
import Menu from '../components/Menu';
import DishesForm from '../components/DishesForm';
import { Formik } from 'formik';

function HomePage() {
    let navigate = useNavigate();
    const token = localStorage.getItem('token');

    const [dishesData, setDishesData] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return navigate("/login");
        }
    }, []);

    function handleChange(e) {
        setSearch(e.target.value);
        console.log("entrada: ",search);
    }

    function getDishesData() {
        
    }

    return (
        <div>
            {token ?
            <div>
                <NavBar page="Home"/>
                    <div className='d-flex justify-content-center'>
                        <h1 className='mt-4'>¡Bienvenido!</h1>
                    </div>
                    <div><Menu/></div>
                    <div className='d-flex justify-content-center'>
                        <h1 className='mt-4'>Agregar platos al menú</h1>
                    </div>
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col col-4">
                                <Formik initialValues={{
                                    busqueda: 'Burger'
                                }}
                                validate={(valores) => {
                                    let errores ={};
                                    if(valores.busqueda.length<2) {
                                        console.log("el campo debe ser mas largo");
                                        errores.busqueda = 'El campo debe tener 2 o mas caracteres.'
                                    }
                                    return errores;
                                }}
                                onSubmit={(valores) => {
                                    setSearch(valores.busqueda);
                                    axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=609bc111dbba458da19dea51dc558373&maxFat=25&number=4", { params: { query: valores.busqueda }})
                                    .then(res => {
                                        setDishesData(res.data);
                                        console.log(res.data);
                                        console.log("busqueda: ", valores.busqueda);
                                    })
                                    .catch(error => {
                                        console.log("error: ", error);
                                    });
                                }}
                                >
                                    {( {values, touched, errors, handleSubmit, handleChange, handleBlur} ) => (
                                    <div className="card mt-4">
                                        <form onSubmit={handleSubmit}>
                                            <div className="m-3 row">
                                                <label htmlFor="busqueda" className='mb-2'>Buscador de platos</label>
                                                <input 
                                                    type="text"
                                                    id="busqueda"
                                                    name="busqueda"
                                                    placeholder="Realice una busqueda"
                                                    value={values.busqueda}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className="mb-2"
                                                />
                                                {touched.busqueda && errors.busqueda && <div className="">
                                                    {errors.busqueda}</div>}
                                                <button type="submit" className="btn btn-primary">Buscar</button>
                                            </div>
                                        </form>
                                    </div>
                                    )}
                                </Formik>
                            </div>
                            <div className='col'>
                                {dishesData && <DishesList dishesList={dishesData}/>}
                            </div>
                        </div>
                    </div>
            </div> : <div></div>
            }
        </div>
    )
}

export default HomePage;