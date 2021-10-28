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

    @media all and (min-width: 300px){
        width: 100vw;    
        padding:0;
        margin:0; 
        height: 50%;            
    }
    @media all and (min-width: 400px){
        width: 100vw;    
        padding:0;
        margin:0; 
        height: 50%;            
    }
    @media all and (min-width: 600px){
        width:80vw;    
        padding:0;
        margin:0; 
        height: 45%;            
    }
    @media all and (min-width: 800px){
        width: 80vw;    
        padding:0;
        margin:0; 
        height: 45%;            
    }
`;

const PageSection = styled.section`
    @media screen and (min-width:300px){
        width:105vw;
        height:95vh;
    }
    @media screen and (min-width:400px){
        width:100vw;
        height:100vh;
    }
    @media screen and (min-width: 600px){
        width: 110vw;
        height: 110vh;
    }
    @media screen and (min-width:800px){
        width:110vw;
        height: 110vh;
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
            </Title>            
            <br/>   
                <Carousel>
                    <Carousel.Item className="carousel-item">
                        <Link to = "/inicio/adoptar" replace>                                           
                                <DogImg src = {perro1} className = "d-flex justify-content-center w-100 h-25 carousel img-fluid" alt = "Perro en adoción" />                                                                                                                                                         
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
