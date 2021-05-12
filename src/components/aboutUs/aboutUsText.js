import SectionTitle from '../../common/sectionTitle'
import HeadingTitle from '../../common/headingTitle'
import Paragraph from '../../common/paragraph'

// Componente de la parte del texto y los íconos en el 'about Us'
const AboutUsText = ({ sectionTitle, headingTitle, paragraph, iconsContent }) => {
    return(
        <div className='aboutUsText'>
            {/* Título de sección */}
            <SectionTitle content={sectionTitle} />
            {/* Título de Cabecera */}
            <HeadingTitle content={headingTitle} />
            {/* Párrafo */}
            <Paragraph content={paragraph} />
            {/* iconos */}
            <div className='aboutUs-Icons'>
                    {iconsContent}
            </div>
        </div>
    )
}

export default AboutUsText