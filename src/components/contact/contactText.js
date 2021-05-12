import HeadingTitle from '../../common/headingTitle'
import Paragraph from '../../common/paragraph'

// Componente de texto de la sección 'Contacto'
const ContactText = ({ headingTitle, paragraph, iconsContent }) => {
    return(
        <div className='contactText'>
            {/* Titulo */}
            <HeadingTitle content={headingTitle} />
            {/* parráfo */}
            <Paragraph content={paragraph} />
            {/* items con iconos e infomación de contacto */}
            <div className='contactTextIcons'>
                {iconsContent}
            </div>
        </div>
    )
}

export default ContactText