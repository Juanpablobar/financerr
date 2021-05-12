import Container from '../../common/container'
import TeamText from './teamText'
import TeamSliderItem from './teamSliderItem'
import Slider from "react-slick";
import './styles/styles.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import TeamContent from '../../content/teamContent.json'

//Componente de la sección 'Conoce nuestro equipo' contiene, el texto, el slider y la infomación se toma del archivo '../../content/teamContent.json'
const Team = () => {

            //Configuración del slider, puedes checar más en 'https://react-slick.neostack.com/docs/api'
            const settings = {
                autoplay: true,
                infinite: true,
                autoplaySpeed: 10000,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                draggable: true,
                pauseOnHover: true,
                responsive: [
                    {
                        breakpoint: 1000,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 750,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            };

    return(
        <Container otherClass='team' content={
            <>
                {/* Componente de texto */}
                <TeamText 
                sectionTitle={TeamContent.sectionTitle}
                headingTitle={TeamContent.headingTitle}
                />

                {/* Componente del slider */}
                <Slider {...settings} className='teamSlider'>
                    {/* se recorre el contenido con un map y devuelve el numero de artículos existentes en el json */}
                    {TeamContent.sliderItems.map( el => {
                        return(
                            <TeamSliderItem 
                            key={el.id}
                            img={el.img} 
                            facebook={el.facebook} 
                            twitter={el.twitter} 
                            linkedin={el.linkedin} 
                            name={el.name} 
                            occupation={el.occupation}
                            />
                        )
                    })}
                </Slider>

            </>
        } />
    )
}

export default Team