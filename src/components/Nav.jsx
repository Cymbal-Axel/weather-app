import React from 'react';
import SearchBar from './SearchBar.jsx';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';

function Nav({onSearch}){
    return(
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Link to={'/'}>
                    <Navbar.Brand href="#home">Weather App</Navbar.Brand>
                </Link>

                <Link to={'/about'}>About</Link>

                <SearchBar onSearch={onSearch}/>
            </Container>
        </Navbar>
    )
}

export default Nav;