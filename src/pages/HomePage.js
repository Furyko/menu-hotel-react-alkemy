import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import axios from 'axios';
import Dishes from '../components/Dishes';

function HomePage() {
    let navigate = useNavigate();
    const token = localStorage.getItem('token');

    const [dishes, setDishes] = useState([]);

    const getDishes = () => {
        //axios.get("https://api.spoonacular.com/food/menuItems/search?query=burger&number=2&apiKey=609bc111dbba458da19dea51dc558373")
        axios.get("https://rickandmortyapi.com/api/character")
        .then(res => {
            //console.log(res.data.menuItems);
            //setDishes(res.data.menuItems);
            //setDishes(res.data.results);
            //console.log(res.data.results);
            console.log(dishes);
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return navigate("/login");
        }
       getDishes();
    }, []);

    return (
        <div>
            {token ?
            <div>
                <NavBar page="Home"/>
                    <div className='d-flex justify-content-center'>
                        <h1 className='mt-4'>¡Bienvenido!</h1>
                    </div>
                <Dishes dishes={dishes}/>
            </div> : <div></div>
            }
        </div>
    )
}

export default HomePage;