import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/BotonDenunciar.css'

const Denunciar = () =>(
    <div id="first-container">
        <Link to = "/inicio/denunciar">
            <button id="denunciar">Denuncia maltrato</button>
        </Link>
    </div>

    

)

export default Denunciar;