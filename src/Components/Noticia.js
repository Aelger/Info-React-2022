import React from 'react'

function Noticia() {

    const Noticia = {
        titulo: 'Este es el titulo',
        descripcion: 'Este es la descripcion',
    }
    
    const { titulo, descripcion } = Noticia;

    return (
        <div>
            <h1>{titulo}</h1>
        </div>
    )
}

export default Noticia