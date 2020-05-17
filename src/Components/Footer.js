import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Footer.css'
import styled from 'styled-components';
import facebook from '../images/black-facebook.png';
import whatsapp from '../images/black-whatsapp.png';
import email from '../images/email.png';

const Wrapper = styled.div `
    width: 50vw;
    height: 30%;
    align-items: center; /*For elements in the Y axis */
    margin-left: 23%;
    justify-content: space-between;
`;
const Facebook = styled.img `    
    display: inline-flex;
    justify-content: center;
    width: 5%;
    height:10%; 
    margin-left:1.5%;
    margin-top: 2%;   
`;
const WhatsApp = styled.img `
    display:inline-flex;    
    justify-content: center;
    width: 5%;
    height:10%;
    margin-left:1.5%;
    margin-top: 2%;
`;

const Email = styled.img `
display: inline-flex;
    justify-content: center;
    width: 5%;
    height:10%;    
    margin-left:1.5%;
    margin-top: 2%;
`;

const Footer = () => (
    <React.Fragment>
        <footer id="footer">
            <div>                
                &copy;2020 <b>Padebac</b>                
            </div>
            <Wrapper>
                    <a href='https://www.facebook.com/padebac/' className="SM-link">
                        <Facebook src = {facebook}  alt = "Facebook logo" />
                    </a>
                    <a href="https://wa.me/5218441221814?text=%C2%A1Hola!,%20estoy%20interesado%20en%20adoptar%20un%20perrito/gatito" className="SM-link">
                       <WhatsApp src = {whatsapp} alt="WhatsApp Logo" />
                    </a>
                    <a href='https://www.facebook.com/padebac/' className="SM-link">
                        <Email src = {email} alt =" Email logo"/>
                    </a>                                                                
            </Wrapper>
        </footer>
    </React.Fragment>
)
export default Footer