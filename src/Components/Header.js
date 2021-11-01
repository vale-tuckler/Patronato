import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../images/logo.png';
import menuLogo from '../images/icono3.png';
import Navbar from 'react-bootstrap/Navbar';

export default function Header(){
        return(
                <Navbar className="navbar navbar-expand-lg w-100 navegacion">                                  
                        <Navbar.Brand href="/inicio">
                                <img src={logo} id="logo-principal" alt="logo PADEBAC"/>
                        </Navbar.Brand>
                    <div className="link-container container">
                            <Link to="/inicio/adoptar" className="link nav-link" id="adoptar">Adoptar</Link>                                            
                            <Link to="/inicio/acerca-de" className="link nav-link" id="about">Nosotros</Link>                      
                    </div>
                </Navbar>
        )
};