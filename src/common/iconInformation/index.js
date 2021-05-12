import './styles.scss'

// Componente que contiene un ícono e informacío de contacto
const IconInformation = ({ icon, text }) => {
    return(
        <div className='iconInformation'>
            {/* icono, solo hay que agregar la clase de font awesome */}
            <span><i className={icon}></i></span>
            {/* texto del componente */}
            <span>{text}</span>
        </div>
    )
}

export default IconInformation