import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Inicio from '../Pages/Inicio.js';
import Adopcion from '../Pages/Adopcion.js';
import Denuncia from './FormularioDenuncia.js';
import Formulario from './FormularioAdopcion.js';
import NotFound from './NotFound.js';
import About from './About.js';

const App = () => {
   
  return(
    <BrowserRouter>
        <Switch>
            <Route exact path='/inicio' component={Inicio}/>
            <Route exact path='/inicio/adoptar' component={Adopcion}/>
            <Route exact path='/inicio/denunciar' component = {Denuncia} />
            <Route exact path='/inicio/adoptar/formulario-adopcion' component={Formulario}/>
            <Route exact path='/inicio/acerca-de' component={About} />            
            <Route component={NotFound} />
        </Switch>
 </BrowserRouter>
  )
}

export default App;
