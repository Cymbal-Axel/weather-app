import React from 'react';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar({onSearch}){
    return (
        <form onSubmit={(e)=> {
            e.preventDefault(); //va a prevenir que se recarge la pagina, por el onSubmit
            onSearch("Cairns");
        }}>
            <input type='text' placeholder='Ciudad...'/>
            <input type='submit' value='Agregar'/>
        </form>

    );
}