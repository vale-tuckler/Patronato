import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../images/logo.png';
import menuLogo from '../images/icono3.png';
import Navbar from 'react-bootstrap/Navbar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function Header(){
        return(
            <div>
                <Navbar className="navbar navbar-expand-lg w-100 navegacion">
                    <div id="logo1-container">                
                        <Navbar.Brand href="/inicio">
                                <img src={logo} id="logo-principal" alt="logo PADEBAC"/>
                        </Navbar.Brand>
                    </div>  
                    <div className="first-container">
                        <span className="link-container space-evenly">
                            <Link to="/inicio/adoptar" className="link">Adoptar</Link>
                        </span>
                        <span className="link-container space-evenly">
                            <Link to="/inicio/acerca-de" className="link">Acerca de nosotros</Link>
                        </span>
                    </div>                        
                </Navbar>
            </div>
        )
};