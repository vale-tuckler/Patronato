import React from 'react'
import '../styles/Footer.css'
import facebook from '../images/black-facebook.png';
import whatsapp from '../images/black-whatsapp.png';
import email from '../images/email.png';

const Footer = () => (
    <React.Fragment>
        <nav id="footer" className="navbar">            
            <div className="navbar-nav main-container">
                    <a href='https://www.facebook.com/padebac/' className="SM-link">
                        <img src = {facebook}  alt = "Facebook logo" className="img" id="facebook"/>
                    </a>
                    <a href="https://wa.me/5218441221814?text=%C2%A1Hola!,%20estoy%20interesado%20en%20adoptar%20un%20perrito/gatito" className="SM-link">
                       <img src = {whatsapp} alt="WhatsApp Logo" className="img" id="whatsapp"/>
                    </a>
                    <a href='mailto: paloma_alejandra@yahoo.com' className="SM-link">
                        <img src = {email} alt =" Email logo" className="img" id="mail"/>
                    </a>                                                                
            </div>
            <div className="copyright">                
                &copy;2021 <b>Padebac</b>                
            </div>
        </nav>
    </React.Fragment>
)
export default Footer