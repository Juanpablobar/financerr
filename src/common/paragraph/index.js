import './styles.scss'

// Componente con párrafo que se utiliza en todas partes menos en las tarjetas
const Paragraph = ({ content }) => {
    return(
        <p className='paragraph'>{content}</p>
    )
}

export default Paragraph