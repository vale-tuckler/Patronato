import React from 'react'
import '../styles/InfoMascotas.css'
import Tarjeta from './Tarjeta.js'
import Chihuahuas from '../images/chihuahuaFam.png'
import Axel from '../images/Axel.png'
import Chato from '../images/chato.png'
import Firu from '../images/Firu.png'
import Katy from '../images/Katy.png'
import Manchas from '../images/Manchas.png'
import Mucca from '../images/Mucca.png'
import Rocky from '../images/Rocky.png'
import Rody from  '../images/Rody.png'
import Teniente from '../images/Teniente.png'
import energetic from '../images/energetic.png'
import loving from '../images/loving.png'
import stayHome from '../images/stayHome.png'
import playful from '../images/playful.png'
import shy from '../images/shy.png'

const InfoMascotas = () =>(
    <React.Fragment>
        <h1 className="text-center">Mascotas disponibles para adoptar</h1>
            <section className="pets">
                <Tarjeta 
                    name = "Axel"
                    text="¡Adóptame y te divertirás conmigo siempre!"
                    img={Axel}
                    personality1={stayHome}
                    personality2={loving}
                    personality3={shy}
                    figcaption1="Hogareño"
                    figcaption2="Amoroso"
                    figcaption3="Tímido"
                />
                <Tarjeta 
                    name="Chato"
                    text="¡Soy tranquilo, pero prometo que te cuidaré!"
                    img={Chato}
                    personality1={loving}
                    personality2={energetic}
                    personality3={playful}
                    figcaption1="Amoroso"
                    figcaption2="Energético"
                    figcaption3="Juguetón"
                />
            </section>
            <section className="pets">
                <Tarjeta 
                    name="Firu"
                    text="¡Soy el apropiado para jugar contigo!"
                    img={Firu}
                    personality1={loving}
                    personality2={stayHome}
                    personality3={shy}
                    figcaption1="Amoroso"
                    figcaption2="Hogareño"
                    figcaption3="Tímido"
                />
                <Tarjeta 
                    name="Katy"
                    text="¡Puedo darte mucho amor, llévame!"
                    img={Katy}
                    personality1={energetic}
                    personality2={playful}
                    personality3={loving}
                    figcaption1="Energético"
                    figcaption2="Juguetón"
                    figcaption3="Amoroso"
                    
                />
            </section>
            <section className="pets">
                <Tarjeta 
                    name="Manchas"
                    text="¡Te voy a querer mucho!"
                    img={Manchas}
                    personality1={loving}
                    personality2={stayHome}
                    personality3={energetic}
                    figcaption1="Amoroso"
                    figcaption2="Hogareño"
                    figcaption3="Energético"
                />
                <Tarjeta 
                    name="Mucca"
                    text= "¡Conóceme, te encariñarás conmigo!"
                    img={Mucca}
                    personality1={loving}
                    personality2={shy}
                    personality3={playful}
                    figcaption1="Amoroso"
                    figcaption2="Tímido"
                    figcaption3="Juguetón"
                />
            </section>
            <section className="pets">
                <Tarjeta   
                    name="Rocky"
                    text="¡Voy a ser tu mejor amigo!"
                    img={Rocky}
                    personality1={playful}
                    personality2={energetic}
                    personality3={stayHome}
                    figcaption1="Juguetón"
                    figcaption2="Energético"
                    figcaption3="Hogareño"
                />
                <Tarjeta 
                    name="Rody"
                    text="¡Comparte tu cálido hogar conmigo!"
                    img={Rody}
                    personality1={loving}
                    personality2={energetic}
                    personality3={playful}
                    figcaption1="Amoroso"
                    figcaption2="Energético"
                    figcaption3="Juguetón"
                />
            </section>
            <section className="pets">
                <Tarjeta 
                    name="Teniente"
                    text="¡Voy a ser muy leal!"
                    img={Teniente}
                    personality1={loving}
                    personality2={playful}
                    personality3={stayHome}
                    figcaption1="Amoroso"
                    figcaption2="Juguetón"
                    figcaption3="Hogareño"
                />
                <Tarjeta 
                    name="Familia Chihuahua"
                    text="¡Adóptanos!"
                    img={Chihuahuas}
                    personality1={loving}
                    personality2={stayHome}
                    personality3={energetic}
                    figcaption1="Amorosos"
                    figcaption2="Hogareños"
                    figcaption3="Energéticos"
                />
            </section>

    </React.Fragment>
)
export default InfoMascotas