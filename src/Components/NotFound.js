import React from 'react'
import NotFoundImg from '../images/404.png'

const NotFound = () =>(
    <div className="text-center">
        <h1 className="Error-text">Error: Page Not Found</h1>
        <img src={NotFoundImg} alt="404 Not Found Img" className="Error-image"/>
    </div>
)

export default NotFound