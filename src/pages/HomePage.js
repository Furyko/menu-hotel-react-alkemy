import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import axios from 'axios';
import DishesList from '../components/DishesList';
import Menu from '../components/Menu';

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
        axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=609bc111dbba458da19dea51dc558373&maxFat=25&number=4", { params: { query: search }})
        .then(res => {
            setDishesData(res.data);
            console.log(res.data);
            console.log("busqueda: ", search);
        })
        .catch(error => {
            console.log("error: ", error);
        });
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
                    <div className="row">
                        <div className="col">
                            <section className="controls">
                                <input 
                                type="text"
                                placeholder="Realice una busqueda"
                                onChange={handleChange}/>
                            </section>
                            <button onClick={getDishesData}>Buscar</button>
                        </div>
                        <div className='col'>{dishesData && <DishesList dishesList={dishesData}/>}</div>
                    </div>
            </div> : <div></div>
            }
        </div>
    )
}

export default HomePage;