import Container from '../../common/container'
import IconContainer from '../../common/iconContainer'
import AboutUsText from './aboutUsText'
import AboutUsImage from './aboutUsImage'
import './styles/styles.scss'

import AboutUsContent from '../../content/aboutUsContent.json'

// Componente del About Us, contiene el componente de texto e imagen
// Todo el texto se encuentra en el archivo '../../content/aboutUsContent.json'
const AboutUs = () => {
    return(
        <Container otherClass='aboutUs' id='acerca-de' content={
            <>
                {/* Componente de texto */}
                <AboutUsText
                sectionTitle={AboutUsContent.sectionTitle} 
                headingTitle={AboutUsContent.headingTitle} 
                paragraph={AboutUsContent.text} 
                // Se recorreo la cantidad de iconos que existen y se imprimen
                iconsContent={
                    AboutUsContent.icons.map( el => {
                        return(
                        <div key={el.id} className='aboutUs-Icon-item'>
                            <div>
                            <IconContainer icon={el.icon} />
                            </div>
                            <div>
                                <h2>{el.number}</h2>
                                <h3>{el.text}</h3>
                            </div>
                        </div>
                        )
                    })
                }
                />
				{/* Componente de imagen */}
                <AboutUsImage />
            </>
        }/>
    )
}

export default AboutUs