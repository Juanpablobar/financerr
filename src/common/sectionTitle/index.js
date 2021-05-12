import './styles.scss'

// Componente que se utiliza como título de sección, se muestra en color verde
const SectionTitle = ({ content }) => {
    return(
        <h3 className='sectionTitle'>{content}</h3>
    )
}

export default SectionTitle