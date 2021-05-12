import IconContainer from '../../common/iconContainer'

// Componente del icono de las tarjetas
const IconContainerCard = ({ icon }) => {
    return(
        <div className='iconContainerCard'>
            {/* Ícono */}
            <IconContainer icon={icon} />
        </div>
    )
}

export default IconContainerCard