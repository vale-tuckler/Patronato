import React from 'react'
import Card from 'react-bootstrap/Card';
import '../styles/Tarjeta.css'
//import Formulario from './FormularioAdopcion.js'
import { Link } from 'react-router-dom'

class Tarjeta extends React.Component{
    state={
        
        img:"",
        name:"",
        text:""
    }

render(){
    return(
        <div id="container">
            <Card className="body">
            <Card.Header id="header">{this.props.name}</Card.Header>
                <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Text>
                                <div id="text">
                                    {this.props.text}
                                </div>
                                <div id="personality">
                                    <p>
                                        <img src = {this.props.personality1} alt="Personalidad de la mascota"/>
                                            <figcaption className="caption">{this.props.figcaption1}</figcaption>
                                    </p>
                                    <p>
                                        <img src = {this.props.personality2} alt = "Personalidad de la mascota" />
                                            <figcaption className="caption">{this.props.figcaption2}</figcaption>
                                    </p>
                                    <p>
                                        <img src = {this.props.personality3} alt = "Personalidad de la mascota" />                                    
                                            <figcaption className="caption">{this.props.figcaption3}</figcaption>
                                    </p>
                                </div>
                        </Card.Text>
                        <Link to ='/inicio/adoptar/formulario-adopcion'>
                            <button id="button" className="btn btn-success space-around">Adoptar</button>
                        </Link>
                    </Card.Body>
            </Card>
        </div>
    )
  }
}

export default Tarjeta;