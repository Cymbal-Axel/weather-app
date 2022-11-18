import React from 'react';
import SearchBar from './SearchBar.jsx';
import Navbar from 'react-bootstrap/Navbar';

function Nav({onSearch}){
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Weather App</Navbar.Brand>
        
            <SearchBar onSearch={onSearch}/>
        
        </Navbar>
    )
}

export default Nav;