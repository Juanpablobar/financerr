import TestimonialText from './testimonialText'
import TestimonialSliderItem from './testimonialSliderItem'
import Container from '../../common/container';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './styles/styles.scss'

import TestimonialContent from '../../content/testimonialContent.json'

// Component de la sección 'Testimoniales' contiene el componente del texto y el slider con las opiniones,toda la información se toma del archivo ../../content/testimonialContent.json
const Testimonial = () => {

        //Configuración del slider, puedes checar más en 'https://react-slick.neostack.com/docs/api'
        const settings = {
            autoplay: true,
            infinite: true,
            autoplaySpeed: 3000,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: false,
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
        <section className='testimonial'>
            {/* Componente de titulo, texto */}
            <TestimonialText
            sectionTitle={TestimonialContent.sectionTitle}
            headingTitle={TestimonialContent.headingTitle}
            paragraph={TestimonialContent.paragraph}
            />

            {/* Componente con el slider de las opiniones */}
            <Container otherClass='testimonialSlider' content={
                <Slider {...settings}>
                    {/* se recoree el contenido con un map y se devuelve el número de artículos existentes */}
                    {TestimonialContent.itemsSlider.map( el => {
                        return(
                            <TestimonialSliderItem
                            key={el.id}
                            sliderParagraph={el.text} 
                            sliderImg={el.img} 
                            sliderName={el.name} 
                            sliderOccupation={el.occupation}
                            />
                        )
                    })}
                </Slider>
            } />

        </section>
    )
}

export default Testimonial