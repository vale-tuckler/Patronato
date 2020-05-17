import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import logo from '../images/logo.png'
import menuLogo from '../images/icono3.png'
import { Card, Breadcrumb, BreadcrumbItem,Collapse,CardBody } from 'reactstrap'
import styled  from 'styled-components';

const MainLogo = styled.img`
    @media all and (min-width: 600px) and (max-width: 900px){
        width: 5em;
        height: 5em;
    }
`;

const SecondLogo = styled.img`
    @media all and (min-width: 600px) and (max-width: 900px){
        width: 4em;
        height:4em;
        margin-bottom: 50%;
    }
`;


const Header = () =>{

    const [isOpen, setOpen] = useState(false);

    const toggle = () => setOpen (!isOpen);

return(
    <div>
        <nav className="navbar navbar-expand-lg w-100 navegacion">
            <Link to ="/inicio">
                <MainLogo src={logo} id="logo-principal" alt="logo PADEBAC"/>
           {/*} <img src={logo} id="logo-principal" alt="logo PADEBAC"/>*/}
            </Link> 
            <SecondLogo src={menuLogo} onClick = {toggle} id = "collapse-menu" alt="Logo menu"/>            
        </nav>
        <Collapse isOpen = {isOpen} id="collapse-component">
            <Card id="card-component">
                <CardBody id="cardbody">
                    <Breadcrumb className="breadcrumb" >
                        <BreadcrumbItem>
                            <Link to ="/inicio" className="link">Inicio</Link>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Breadcrumb className="breadcrumb">
                        <BreadcrumbItem>
                            <Link to="/inicio/adoptar" className="link"> Adoptar</Link>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Breadcrumb className="breadcrumb">
                        <BreadcrumbItem>
                            <Link to ="/inicio/denunciar" className="link">Denunciar</Link>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Breadcrumb className="breadcrumb">
                        <BreadcrumbItem>
                            <Link to="/inicio/acerca-de" className="link">Acerca de nosotros</Link>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </CardBody>
            </Card>
        </Collapse>
    </div>
)
}
export default Header;