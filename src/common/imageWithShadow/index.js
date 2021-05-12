import './styles.scss'

// Componente de imagenes que tienen esquinas redondeadas y una sombra verde
const ImageWithShadow = ({ positionShadow, src, alt }) => {
    return(
        <div className={`imageShadow ${positionShadow}`}>
            <img src={`img/${src}`} alt={alt} title={alt} />
            {/* positionShadow debe ser left o rigth para indicar el lado de la sombra */}
        </div>
    )
}

export default ImageWithShadow