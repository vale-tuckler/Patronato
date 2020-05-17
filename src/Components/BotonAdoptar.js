import React from 'react'

const BotonAdoptar =({handleClick})=>(
    <React.Fragment id="first-container">
        <div id="container">
                <button 
                id="adoptar"
                onClick={handleClick}
                >
                    Adoptar
                </button>
        </div>
    </React.Fragment>
)

export default BotonAdoptar;