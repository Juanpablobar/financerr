import Paragraph from '../../common/paragraph'

//Componente del slider de la sección 'Testimoniales'

const TestimonialSliderItem = ({ sliderParagraph, sliderImg, sliderName, sliderOccupation }) => {
    return(
        // contenedor
        <div className='testimonialSliderItem'>
            {/* párrafo */}
            <Paragraph content={sliderParagraph}/>
            <div className='testimonialSliderItem-info'>
                <div>
                    <div>
                        {/* imagen */}
                        <img src={`img/${sliderImg}`} alt='' />
                    </div>
                    <div>
                        {/* nombre de la persona */}
                        <strong>{sliderName}</strong>
                        {/* ocupación */}
                        <span>{sliderOccupation}</span>
                    </div>
                </div>
                <div>
                    {/* ícono de comillas */}
                    <span><i className="fas fa-quote-left"></i></span>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSliderItem