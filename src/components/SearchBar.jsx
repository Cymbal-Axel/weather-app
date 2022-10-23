import React from 'react';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar(props){
    return (
        <div className={styles.searchContainer}>
            <input type="text" placeholder="Ciudad"></input>
            <button onClick={()=>props.onSearch('Buscando Ciudad')}>Agregar</button>
        </div>
    )
}