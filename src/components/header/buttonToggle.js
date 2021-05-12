import React from 'react'

// Componente del botón hamburguesa que despliega el menú lateral, se muestra a partir de los 1000px

const ButtonToggle = ({ click, content }) => {
    return(
        <div className='button-toggle' onClick={click}>
            {content}
        </div>
    )
}

export default ButtonToggle