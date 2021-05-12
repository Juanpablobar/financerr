import Container from '../../common/container'
import FooterInformation from './footerInformation'
import FooterSocial from './footerSocial'
import './styles/styles.scss'

// Componente que contiene el footer de la página
const Footer = () => {
    return(
        <footer>
            <Container content={
                <>
                    {/* Primera parte del footer (links, logo, etc) */}
                    <FooterInformation />
                    {/* Segunda parte del footer (derechos reservados, botones a redes sociales) */}
                    <FooterSocial />
                </>
            } />
        </footer>
    )
}

export default Footer