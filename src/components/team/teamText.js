import SectionTitle from '../../common/sectionTitle'
import HeadingTitle from '../../common/headingTitle'

// Componente que continene el texto de la sección de 'Conoce nuestro equipo'
const TeamText = ({ sectionTitle, headingTitle }) => {
    return(
        <>
            {/* Título de sección */}
            <SectionTitle content={sectionTitle} />
            {/* Título de cabecera */}
            <HeadingTitle content={headingTitle} />
        </>
    )
}

export default TeamText