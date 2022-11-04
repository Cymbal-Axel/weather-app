import React, {useState} from 'react';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar({onSearch}){

    const [city, setCity] = useState("");

    return (
        <form onSubmit={(e)=> {
            e.preventDefault(); //va a prevenir que se recarge la pagina, por el onSubmit
            onSearch(city);
        }}>
            <input type='text' placeholder='Ciudad...' vale={city} onChange={e => setCity(e.target.value)}/>
            <input type='submit' value='Agregar'/>
        </form>

    );
}