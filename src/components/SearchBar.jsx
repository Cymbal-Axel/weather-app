import React, {useState} from 'react';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar({onSearch}){

    const [city, setCity] = useState("");

    return (
        <form onSubmit={(e)=> {
            e.preventDefault(); //va a prevenir que se recarge la pagina, por el onSubmit
            onSearch(city);
            setCity(""); //para que se limpie el input luego de hacer la busqueda.
        }}>
            <input type='text' placeholder='Ciudad...' value={city} onChange={e => setCity(e.target.value)}/>
            <input type='submit' value='Agregar'/>
        </form>

    );
}