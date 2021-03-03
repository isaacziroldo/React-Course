import React from 'react'
import { useParams } from "react-router-dom";

const NotFound = props => {
    return (

        <div className='Param'>
            <h1>
                404
            </h1>
            <h2>
                Opssss... Página não encontrada!
            </h2>
        </div>
    )
}

export default NotFound