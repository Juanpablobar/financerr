import Container from '../../common/container'
import ContactText from './contactText'
import ContactForm from './contactForm'
import ContactTextIconItem from './contactText-IconItem'
import ContactMap from './contactMap'
import './styles/styles.scss'

// Toda la información de este componente se toma del archivo '../../content/contactContent.json'
import ContactContent from '../../content/contactContent.json'

// Componente de la sección de 'Contacto'
const Contact = () => {
    return(
        <>
        <Container otherClass='contact' id='registro' content={
            <>  
                {/* Componente de texto */}
                <ContactText
                headingTitle={ContactContent.headingTitle}
                paragraph={ContactContent.paragraph}
                iconsContent={
                    // se recorre y devuelve el número de items existentes para mostrar los datos de contacto
                    ContactContent.itemsContact.map( el => {
                        return(
                            <ContactTextIconItem
                            key={el.id}
                            icon={el.icon} 
                            iconTitle={el.title} 
                            iconText={el.text}
                            />
                        )
                    })
                }
                />

                {/* Componente del formulario */}
                <ContactForm />
            </>
        } />

        {/* Componente del mapa */}
        <ContactMap />

        </>
    )
}

export default Contact