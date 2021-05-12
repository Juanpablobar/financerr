import Slider from "react-slick";
import Button from '../../common/button'
import HeadingTitle from '../../common/headingTitle'
import "./styles.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import InitialContent from '../../content/initialContent.json'


//Componente del bloque inicial, todo el texto de este componente se encuentra en 'content/initialContent.json'

const InitialBlock = ({ title, text, button, click }) => {

    //Configuración del slider, puedes checar más en 'https://react-slick.neostack.com/docs/api'
    const settings = {
        autoplay: true,
        infinite: true,
        autoplaySpeed: 6000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        accesibility: false,
        adaptiveHeight: false,
        dots: false,
        arrows: false,
        draggable: false,
        fade: true,
        pauseOnHover: false
    };

    // función que se activa al presionar el botón, desliza suavemente hacia la sección escogida
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: "smooth",
        });
    };

    return(
        <section className='initialBLock' id='inicio'>
            {/* slider */}
            <Slider {...settings} className='slider'>
                <div>
                    <div style={{backgroundImage: 'url("./img/initial 1.png")'}}>
                    </div>
                </div>
                <div>
                    <div style={{backgroundImage: 'url("./img/initial 2.png")'}}>
                    </div>
                </div>
            </Slider>

            {/* texto */}
            <article>
                <div className='articleRow'>
                    <div>
                        <HeadingTitle content={InitialContent.title} />
                        <h3>{InitialContent.text}</h3>
                        <Button children={InitialContent.button[0].content} onClick={() => scrollTo(InitialContent.button[0].scrollTo)} />
                    </div>
                </div>
            </article>
        </section>
    )
}

export default InitialBlock