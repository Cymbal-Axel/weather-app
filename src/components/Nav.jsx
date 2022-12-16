import React from 'react';
import SearchBar from './SearchBar.jsx';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Nav({onSearch}){
    return(
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">Weather App</Navbar.Brand>
        
                <SearchBar onSearch={onSearch}/>
            </Container>
        </Navbar>
    )
}

export default Nav;