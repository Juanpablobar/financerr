import Container from "../../common/container"
import SectionTitle from '../../common/sectionTitle'
import HeadingTitle from '../../common/headingTitle'
import Paragraph from '../../common/paragraph'

//Componente que contiene el texto y fondo verde de la sección 'Testimoniales'

const TestimonialText = ({ sectionTitle, headingTitle, paragraph }) => {
    return(
        <div className='testimonialText'>
            <Container content={
                <>
                    {/* Título de sección */}
                    <SectionTitle content={sectionTitle} />
                    {/* Título de cabecera */}
                    <HeadingTitle content={headingTitle} />
                    {/* Párrafo */}
                    <Paragraph content={paragraph} />
                </>
            } />
        </div>
    )
}

export default TestimonialText