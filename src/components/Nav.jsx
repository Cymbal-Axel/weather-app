import React from 'react';
import SearchBar from './SearchBar.jsx';
import s from '../styles/Nav.module.css';

function Nav({onSearch}){
    return(
        <div className={s.principalDiv}>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav;