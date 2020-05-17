 import React from 'react'
 import '../styles/FormularioDenuncia.css'
 import Footer from './Footer.js'
 import Header from './Header.js'

const Denuncia = () =>{
       
        return(
                <React.Fragment>
                        <Header/>
                        <h1>Formulario para denunciar maltrato animal</h1>
                        <form id="form">
                                <h2 className="header">Datos del denunciante:</h2>
                                <label className="entrada-formulario">
                                        Nombre:
                                        <input type="text" name="name" placeholder="Nombre"/>
                                </label>
                                <label className="entrada-formulario">
                                        Documento personal de identificación:
                                        <input type="text" name="id" placeholder="012345-6789"/>
                                </label>
                                <label className="entrada-formulario">
                                        Teléfono:
                                        <input type="tel" name="phone" placeholder="844-0000 0000"/>
                                </label>
                                <label className="entrada-formulario">
                                        Domicilio:
                                        <input type="text" name="address" placeholder="Dirección"/>
                                </label>
                                <label>
                                        Correo electrónico:
                                        <input type="email" name="email" placeholder="Correo electrónico"/>
                                </label>
                                <h2 className="header">Datos del denunciado:</h2>
                                <label className="entrada-formulario">
                                        Nombre del denunciado o responsable (si fuere posible):
                                        <input type="text" name="accused" placeholder="Nombre"/>
                                </label>
                                <label className="entrada-formulario">
                                        Dirección o área inmueble donde ocurrió el maltrato:
                                        <input type="text" name="accused-address"placeholder="Dirección"/>
                                </label>
                                <label className="entrada-formulario">
                                        Color de casa:
                                        <input type="text" name="house-color" placeholder="color"/>
                                </label>
                                <label className="entrada-formulario">
                                        Número de piso en que vive (si vive en un edificio o casa de más de un piso):
                                        <input type ="text" name="floor" placeholder="Número piso"/>
                                </label>
                                <label className="entrada-formulario">
                                        Teléfono (si fuere posible): 
                                        <input type="tel" name="accused-phone" placeholder="844-0000 0000"/>
                                </label>
                                <label className="entrada-formulario">
                                        Nombre del establecimiento (si fuere persona jurídica):
                                        <input type="text" name="business" placeholder="Establecimiento o individuo"/>
                                </label>
                                <h2 className="header">Motivos de la denuncia:</h2>
                                <label className="entrada-formulario">
                                        Especie animal afectada:
                                        <input type="text" name="species" placeholder="Especie animal"/>
                                </label>
                                <label className="entrada-formulario">
                                        Cantidad de animales:
                                        <input type="number" name="amount-animals" placeholder="Cantidad"/>
                                </label>
                                <label className="entrada-formulario">
                                        Especifique tipo de lesiones o maltrato provocado:
                                        <textarea id="lesiones-info" name="textarea"/>

                                </label>
                                <label className="entrada-formulario">
                                        Desde hace cuánto ocurre el maltrato (opcional):
                                        <input type="text" name="time" placeholder="Período de tiempo"/>
                                </label>
                                <label className="entrada-formulario">
                                        Sabe si se ha denunciado previamente dicho maltrato:
                                        <p>Sí <input type="checkbox" name="yes-radio"/></p>
                                        <p>No <input type="checkbox" name="no-radio"/></p>
                                </label>
                                <h2>Medios probatorios que sustentan la denuncia:</h2>
                                <label className="entrada-formulario">
                                        Fotos del animal:
                                        <input type="file" name="pictures" className="file-upload"/>
                                </label>
                                <label className="entrada-formulario">
                                        Fotos adicionales:
                                        <input type="file" name="more-pics" className="file-upload"/>
                                </label>
                                <label className="entrada-formulario">
                                        Audio:
                                        <input type="file" name="audio" className="file-upload"/>
                                </label>
                                <label className="entrada-formulario">
                                        Documentos:
                                        <input type="file" className="file-upload"/>
                                </label>
                                <label className="entrada-formulario">
                                        Otro:
                                        <input type="file" className="file-upload"/>
                                </label>
                                <input type="submit" value="Enviar formulario"id="btn-form" className="btn btn-dark"/>
                                
                        </form>
                        <Footer />
                </React.Fragment>

        )
}
export default Denuncia