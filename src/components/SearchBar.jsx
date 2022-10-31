import React from 'react';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar(props){
    return (
        <form onSubmit={(e)=> {
            e.preventDefault();
            onSearch("Cairns");
        }}>
            <input type='text' placeholder='Ciudad...'/>
            <input type='submit' value='Agregar'/>
        </form>

    );
}