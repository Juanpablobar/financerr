import ImageWithShadow from '../../common/imageWithShadow'

// Componente que contiene la imagen con sombra del 'About Us'
const AboutUsImage = () => {
    return(
        <div className='aboutUsImage'>
            <ImageWithShadow
            src='about-us.jpg'
            alt='About Us'
            positionShadow='left'
            />
        </div>
    )
}

export default AboutUsImage