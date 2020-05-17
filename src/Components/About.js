import React from 'react';
import styled from 'styled-components';
import Header from './Header.js';
import RescuedDog from '../images/rescued-dog.jpg';
import Footer from './Footer.js';

const Title = styled.h1`
    text-align: center;
    font-weight: bolder;
`;
const Text = styled.p `
    margin-left: 15%;
    margin-right: 15%;
    line-height: 190%;
    text-align: justify;
`;

const Image = styled.img`
    width: 45%;
    height: 30%;
    margin-left: 30%;
    margin-bottom: 5%;
    margin-top:3%;
    border-radius: 8px;
`;

const About = () =>{
    return(
        <React.Fragment>
            <Header />
            <Title>Misión</Title>
            <Text>  
            Nuestra misión es rescatar animales callejeros en riesgo,
            para otorgarles una rehabilitación física y psicológica,
            brindándoles la oportunidad de un hogar y una familia.
            Mediante una red integrada podemos realizar esterilizaciones,
            rescates y adopciones de perros y gatos, logrando concientizar
            cada día a más personas, quienes se han ido uniendo a esta labor.
            </Text>
            <Title>Visión</Title>
            <Text>
            Nuestra visión, es ser la fundación de animales en riesgo con mayor impacto del país,
            generando un cambio efectivo en la conciencia de la sociedad para acabar con el abandono,
            la humillación y el abuso que sufren millones de animales al día, previniendo un delito mayor. 
            Educando a través de nuestra gran red de estudiantes y profesionales, lograremos otorgar la
            oportunidad de un hogar a los animales maltratados y callejeros de Coahuila.
            </Text>

            <Image src ={RescuedDog} alt ="Rescued dog image"/>
            <Footer />
        </React.Fragment>
    );
}
export default About;