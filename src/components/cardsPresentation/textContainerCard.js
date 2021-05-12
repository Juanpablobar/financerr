import InfoTitle from '../../common/infoTitle'
import ParagraphCards from '../../common/paragraphCards'

// Componente del texto de las tarjetas
const textContainerCard = ({ title, paragraph  }) => {
    return(
        <div>
            {/* Título */}
            <InfoTitle content={title} />
            {/* Paárrafo */}
            <ParagraphCards content={paragraph} />
        </div>
    )
}

export default textContainerCard