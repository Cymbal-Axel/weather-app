import React, {useState} from 'react';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar({onSearch}){

    const [city, setCity] = useState("");

    return (
        <form className="justify-content-end" onSubmit={(e)=> {
            e.preventDefault(); //va a prevenir que se recarge la pagina, por el onSubmit
            onSearch(city);
            setCity(""); //para que se limpie el input luego de hacer la busqueda.
        }}>
            <input className={styles.btnSize} type='text' placeholder='Ciudad...' value={city} onChange={e => setCity(e.target.value)}/>
            <input className={styles.btn} type='submit' value='Agregar'/>
        </form>

    );
}