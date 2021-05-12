import './styles.scss'

// Componente de iconos con fondo gris y esquinas redondeadas
const IconContainer = ({ icon }) => {
    return(
        <div className='iconContainer'>
            {/* solo hay que agregar la clase del ícono de fort awesome */}
            <i className={icon}></i>
        </div>
    )
}

export default IconContainer