import React, {useState} from 'react'
import { Link } from "react-router-dom";
import logo from '../img/logoiea.png'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const NavBar = () => {
return (
    <div>
      <Navbar className="navbar navbar-light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="">¿Quienes Somos?</Nav.Link>
            <Nav.Link href="Tabla">Tabla</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>

)
/*     <nav className='navbar'>
        <div className='nav_logo'> <img className='logo' src={logo} alt="logoIEA" /> 
        <div className='nav_title'>Instituto  de Educación de <p>Aguascalientes</p></div></div>
        <div className={`nav_items ${isOpen && "open"}`}>
            <Link to="/">INICIO</Link>
            <a href="#seccion1">¿QUIÉNES SOMOS?</a>
            <Link to="Tabla">Tabla</Link>
            <a href="#"><i className="bi bi-person-circle i"></i> LOGIN</a>
        </div>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div> 
    
    </nav> */

    

}

export default NavBar;