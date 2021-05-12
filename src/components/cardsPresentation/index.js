import Cards from './cards'
import Container from '../../common/container'
import IconContainerCard from './iconContainerCard'
import TextContainerCard from './textContainerCard'
import './styles/styles.scss'

import CardsPresentationContent from '../../content/cardsPresentationContent.json'

// Todo el texto se toma del archivo '../../content/cardsPresentationContent.json'

const CardsPresentation = () => {
    return(
        <Container otherClass='Cards' id='cursos' content={
            // {/* Componente de contenedor de las tarjetas recorridas por un map, devolviendo el número de items q ue hay en el cardsContent.json */}
            CardsPresentationContent.items.map( el =>
                <Cards key={el.id} content={
                    <>
                    {/* íconos */}
                        <IconContainerCard icon={CardsPresentationContent.items[el.id].icon} />
                        {/* texto */}
                        <TextContainerCard title={CardsPresentationContent.items[el.id].title} paragraph={CardsPresentationContent.items[el.id].paragraph} />
                    </>
                } />
            )
        } />
            
    )
}

export default CardsPresentation