import IconContainer from '../../common/iconContainer'
import InfoTitle from '../../common/infoTitle'
import ParagraphCards from '../../common/paragraphCards'

// Componente que contiene un icono y la información de contacto en la sección de texto de 'Contacto'
const ContactTextIconItem = ({ icon, iconTitle, iconText }) => {
    return(
        <div className='contactText-IconItem'>
            <div>
                {/* icono */}
                <IconContainer icon={icon} />
            </div>
            <div>
                {/* Texto */}
                <InfoTitle content={iconTitle} />
                <ParagraphCards content={iconText} />
            </div>
        </div>
    )
}

export default ContactTextIconItem