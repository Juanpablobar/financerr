import InfoTitle from '../../common/infoTitle'
import Paragraph from '../../common/paragraph'

//Componente que contiene los cards que van dentro del slider la sección 'Conoce nuestro equipo'
const TeamSliderItem = ({ img, facebook, twitter, linkedin, name, occupation }) => {
    return(
        // contenedor
        <div className='teamSliderItem'>
            <div className='teamSliderItem-img'>
                {/* imagen */}
                <img src={`img/${img}`} alt='' />
                {/* parte oculta se muestra al hacer hover */}
                <div className='teamSliderItem-hide'>
                    <div>
                        {/* redes sociales */}
                        <a href={facebook}><i className="fab fa-facebook-f"></i></a>
                        <a href={twitter}><i className="fab fa-twitter"></i></a>
                        <a href={linkedin}><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div className='teamSliderItem-text'>
                {/* texto de la tarjeta */}
                <InfoTitle content={name} />
                {/* titulo */}
                <Paragraph content={occupation} />
                {/* párrafo */}
            </div>
        </div>
    )
}

export default TeamSliderItem