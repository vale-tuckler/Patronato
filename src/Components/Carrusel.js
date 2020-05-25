import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Carrusel.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import perro1 from '../images/Axel.png';
import perro2 from '../images/Rody.png';
import perro3 from '../images/Rocky.png';
import perro4 from '../images/Katy.png';

const Text = styled.div`
    @media all and (max-width:600px){
        font-size: 0.5em;
    }
`;

const DogImg = styled.img`
width:200%;

    @media all and (max-width: 600px){
        width: 80vw;    
        padding:0;
        margin:0; 
        height: 45%;            
    }
`;

const PageSection = styled.section`
    @media all and (max-width: 600px){
        width: 3em;
        height: 3em;
    }
`;

const Title = styled.h1`
    @media all and (max-width: 600px){
        font-size: 180%;
    }
`;

function UnControlledCarousel(){

    return(    
        <PageSection id="main-carousel">  
            <Title className= "d-flex justify-content-center" id="primer-titulo">
            ¡Adopta una mascota!
                {/*<h1 className= "d-flex justify-content-center" id="primer-titulo"></h1> */}
            </Title>            
            <br/>   
                <Carousel>
                    <Carousel.Item className="carousel-item">
                        <Link to = "/inicio/adoptar" replace>                                           
                                <DogImg src = {perro1} className = "d-flex justify-content-center w-100 h-25 carousel img-fluid" alt = "Perro en adoción" />
                                    {/*<img
                                        className = "d-flex justify-content-center w-100 h-25 carousel img-fluid" 
                                        src = {perro1}
                                        alt = "Perro en adoción"
                                    />*/}                                                                                                                        
                        </Link>                    
                        <Carousel.Caption className="caption">
                            <Text>
                                <h3>Axel</h3>
                                <p> ¡Adóptame, sé mi mejor amigo! Soy cariñoso y divertido.</p>
                            </Text>
                        </Carousel.Caption>
                    </Carousel.Item >
                    <Carousel.Item className="carousel-item">
                        <Link to = "/inicio/adoptar" replace className="Link">                                                      
                            <DogImg src = {perro2} className = "d-flex justify-content-center w-100 h-25 carousel img-fluid" alt = "Perro en adoción" />
                                {/*    <img 
                                        className="d-flex justify-content-center w-100 h-50 carousel"
                                        src = {perro2}
                                        alt = "Perro en adopción"
                                    />
                                */}                            
                        </Link>                    
                        <Carousel.Caption className="caption">
                            <Text>
                                <h3>Rody</h3>
                                <p>¡Adóptame, me porto bien!</p>
                            </Text>                        
                        </Carousel.Caption>
                    </Carousel.Item >
                    <Carousel.Item className="carousel-item">
                        <Link to = "/inicio/adoptar" replace className="Link">                                                    
                            <DogImg src = {perro3} className = "d-flex justify-content-center w-100 h-25 carousel img-fluid" alt = "Perro en adoción" />
                                {/* <img 
                                        className="d-flex justify-content-center w-100 h-50 carousel"
                                        src = {perro3}
                                        alt = "Perro en adopción"
                                    />                            
                                */}
                        </Link>
                        <Carousel.Caption className="caption">
                            <Text>
                                <h3>Rocky</h3>
                                <p>¡Soy un perrito muy leal y amoroso, llévame contigo!</p>
                            </Text>                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                        <Link to = "/inicio/adoptar" replace className="Link">                            
                        <DogImg src = {perro4} className = "d-flex justify-content-center w-100 h-25 carousel img-fluid" alt = "Perro en adoción" />
                            {/*<img
                                className="d-flex justify-content-center w-100 h-50 carousel"
                                src = {perro4}
                                alt = "Perro en adopción"
                            />
                            */}
                        </Link>
                        <Carousel.Caption className ="caption">
                            <Text>
                                <h3>Katy</h3>
                                <p>¡Comparte tu hogar conmigo!, Soy amorosa y juguetona</p>
                            </Text>                            
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </PageSection>

    )
}

export default UnControlledCarousel;
