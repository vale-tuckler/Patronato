 import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import '../styles/FormularioAdopcion.css'

const FormularioAdopcion =() => {
            return(
            <React.Fragment>
                <Header />
                    <h1 id="header">¿Estás preparado para adoptar una mascota?</h1>
                        <form className="form">
                            <h2 className="h2">Conociendo a la familia...</h2>
                            <label className="entrada-formulario">
                                <p className="question">1. Nombre del adoptante:</p>
                                <input type="text" placeholder="Juan" id="NombreAdoptante"/>
                            </label>
                            <label className="entrada-formulario">
                                <p className="question">2. Dirección:</p>
                                <input type="text" placeholder="---" id="DireccionAdoptante"/>
                            </label>
                            <label className="entrada-formulario">
                                <p className="question">3. Edad:</p>
                                <input type="text" placeholder="21 años" id="EdadAdoptante"/>
                            </label>
                            <label className="entrada-formulario">
                                <p className="question">4. Número de teléfono:</p>
                                <input type="text" placeholder = "844 123 4567" id="Telefono"/>
                            </label>
                            <label className="entrada-formulario">
                                <p className="question">5. ¿Ya has tenido una mascota antes? </p>
                                    <input type="radio" name="radio-btn" className="yes-no" id="antes-no"/>No
                                    <input type="radio" name="radio-btn" className="yes-no" id="antes-si"/>Sí
                            </label>
                            <label className="entrada-formulario">
                                <p className="question">6. La última vez que tuve un perro fue:</p>
                                <select className="desplegable">
                                    <option value="option1" id="opcion1">Hace 2 a 10 años</option>
                                    <option value="option2" id="opcion2">Hace más de 10 años</option>
                                    <option value="option3" id="opcion3">No actualmente, pero sí en el último año</option>
                                    <option selected value="option4" id="opcion4">Nunca</option>
                                </select>
                            </label>
                            <label className="entrada-formulario">
                                <p className="question">7. Mi mascota tiene que convivir con otras mascotas:</p>
                                <input type="radio" name="radio-button" className="yes-no" id="convivir-no"/> No
                                <input type="radio" name="radio-button" className="yes-no" id="convivir-si"/> Sí
                            </label>

                            <label className="entrada-formulario">
                                <p className="question">8. Mi perro tiene que llevarse bien con:</p>
                                    <input type="radio" name="radio" className="yes-no" id="niños-mayores"/> Niños mayores a 8 años
                                    <input type="radio" name="radio" className="yes-no" id="niños-menores"/> Niños menores a 8 años
                                    <input type="radio" name="radio" className="yes-no" id="adultos-mayores"/> Adultos mayores
                                    <input type="radio" name="radio" className="yes-no" id="gatos"/> Gatos
                                    <input type="radio" name="radio" className="yes-no" id="otros-animales"/> Otros animales                                
                            </label>
                            <label className="entrada-formulario">
                                <p className="question">9. Mi perro pasará la mayor parte del tiempo en...</p>
                                <input type="radio" name="radio-1" className="yes-no" id="patio"/>En el patio
                                <input type="radio" name="radio-1" className="yes-no" id="casa"/>Dentro de casa
                            </label>
                            <label className="entrada-formulario">
                                <p className="question">10. Cuando estoy en casa, quiero que mi perro me haga compañía...</p>
                                <input type="radio" name="radio-2" className="yes-no" id="todo-dia"/> Todo el tiempo
                                <input type="radio" name="radio-2" className="yes-no" id="algun-tiempo"/> Algún tiempo
                                <input type ="radio" name="radio-2" className="yes-no" id="poco-tiempo"/> Poco tiempo
                             </label>
                        </form>
                        <form className="form">
                            <h2 className="h2">Tu mascota en la casa...</h2>
                            <label className="entrada-formulario">
                                <p className="question">11. Deseo un perro guardián:</p>
                                    <input type="radio" name="radio-3" className="yes-no" />Sí
                                    <input type="radio" name="radio-3" className="yes-no"/> No
                            </label>
                            <label className="entrada-formulario">
                                <p className="question">12. Quisiera que mi perro pastoree o salga de caza conmigo:</p>
                                    <input type="radio" name="radio-4" className="yes-no" id="pastoreo-si"/>Sí
                                    <input type="radio" name="radio-4" className="yes-no" id="pastoreo-no"/> No
                            </label>
                            <label className="entrada-formulario">
                                <p className="question">13.Quisiera que mi perro fuera cariñoso:</p>
                                    <input type="radio" name="radio-5" className="yes-no" id="cariñoso-si"/>Sí
                                    <input type="radio" name="radio-5" className="yes-no" id="cariñoso-no"/> No
                            </label>
                            <label className="entrada-formulario">
                                <p className="question">14. Desearía que mi perro fuera juguetón:</p>
                                    <input type="radio" name="radio-6" className="yes-no" id="jugueton-si"/>Sí
                                    <input type="radio" name="radio-6" className="yes-no" id="jugueton-no"/> No
                            </label>
                            <label className="entrada-formulario">
                                <p className="question">15. Me gustaría que mi perro fuera hogareño:</p>
                                    <input type="radio" name="radio-7" className="yes-no" id="hogareño-si"/>Sí
                                    <input type="radio" name="radio-7" className="yes-no" id="hogareño-no"/> No
                            </label>
                            <label className="entrada-formulario">
                                <p className="question">16. Deseo un perro energético:</p>
                                    <input type="radio" name="radio-3" className="yes-no" id="energetico-si"/>Sí
                                    <input type="radio" name="radio-3" className="yes-no"id="energetico-no"/> No
                            </label>

                        </form>
                        <button type="button" className="btn btn-dark" id="button">Enviar</button>                        
                <Footer />
            </React.Fragment>
            )
}
 export default FormularioAdopcion;