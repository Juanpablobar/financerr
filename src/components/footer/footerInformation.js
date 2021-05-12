import { Link } from "react-router-dom"
import FooterContainer from "./footerContainers"
import Button from '../../common/button'
import Logo from '../../common/logo'
import Paragraph from "../../common/paragraph"
import IconInformation from "../../common/iconInformation"

// Componente con la primera parte del footer, incluye los links, el logo, etc
const FooterInformation = () => {

    const scrollTo = (id) => {
        
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: "smooth",
        });
    };    


    return(
        <div className='footerInformation'>

            {/* Componente donde se icnluye el logo y algunos dtos de contacto */}
            <FooterContainer otherClass='footerLogo' content={
                <>
                    <Logo src='logo-light.png' alt='Logo' />
                    <Paragraph content='One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.'/>
                    <IconInformation icon='fas fa-phone-alt' text='(021) 231 - 2870' />
                    <IconInformation icon='fas fa-map-marker-alt' text='Jl. Sunset Road No.815, Kuta, Bali 80361' />
                </>
            } />

            {/* Componente con la primera parte de los links */}
            <FooterContainer otherClass='footerPages' content={
                <>
                    <h2 className='footerTitle'>Other Pages</h2>
                    <Link to='./#inicio' onClick={() => scrollTo("inicio")}>Inicio</Link>
                    <Link to='./#cursos' onClick={() => scrollTo("cursos")}>Cursos</Link>
                    <Link to='./#acerca-de' onClick={() => scrollTo("acerca-de")}>Acerca de</Link>
                    <Link to='./#registro' onClick={() => scrollTo("registro")}>Registro</Link>
                </>
            } />

            {/* Componente con la segunda parte de los links */}
            <FooterContainer otherClass='footerLinks' content={
                <>
                    <h2 className='footerTitle'>Quick Links</h2>
                    <Link to='/Notice-Of-Privacy'>Notice Of Privacy</Link>
                    <Link to='/Terms-And-Conditions'>Terms And Conditions</Link>
                    <Link to='./'>Disclaimer</Link>
                    <Link to='./'>Credits</Link>
                </>
            } />

            {/* Componente con botón de llamada y algunos otros datos */}
            <FooterContainer otherClass='footerContact' content={
                <>
                    <h2 className='footerTitle'>Work Hours</h2>
                    <IconInformation icon='far fa-clock' text='8 AM - 7 PM , Monday - Saturday' />
                    <Paragraph content='Our Support and Sales team is available 24 /7 to answer your queries' />
                    <Button children={<a href='tel:123'>CALL US TODAY</a>} />
                </>
            } />

        </div>
    )
}

export default FooterInformation