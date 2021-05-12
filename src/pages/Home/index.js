import InitialBlock from '../../components/initialBlock'
import CardsPresentation from '../../components/cardsPresentation'
import AboutUs from '../../components/aboutUs'
import Testimonial from '../../components/testimonial'
import Team from '../../components/team'
import Contact from '../../components/contact'

// Componente de la página inicial
const Home = () => {
    return(
        <>
            {/* Bloque Inicial, slider */}
            <InitialBlock />

            {/* Tarjetas de presentación al inicio */}
            <CardsPresentation />

            {/* Acerca de Nosotros */}
            <AboutUs />

            {/* Testimonios de Clientes */}
            <Testimonial />

            {/* Conoce a nuestro equipo */}
            <Team />

            {/* Contacto */}
            <Contact />
        </>
    )
}

export default Home