import React from 'react'
import { Card, Button, CardHeader, CardBody,
     CardText, CardImg } from 'reactstrap'
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
            <Card Card body outline color="primary" className="body">
            <CardHeader id="header">{this.props.name}</CardHeader>
                <CardImg variant="top" src={this.props.img} />
                    <CardBody>
                        <CardText>
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
                        </CardText>
                        <Link to ='/inicio/adoptar/formulario-adopcion'>
                            <Button id="button" outline color="success">Adoptar</Button>
                        </Link>
                    </CardBody>
            </Card>
        </div>
    )
  }
}

export default Tarjeta