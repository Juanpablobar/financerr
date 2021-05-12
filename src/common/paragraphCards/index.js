import './styles.scss'

// Componente con párrafo que se incluye en las tarjetas
const ParagraphCards = ({ content }) => {
    return(
        <p className='paragraphCards'>{content}</p>
    )
}

export default ParagraphCards