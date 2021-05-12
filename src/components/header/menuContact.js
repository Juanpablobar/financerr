// Componente de contacto del menú, se oculta a partir de los 750px

const menuContact = ({ content, number }) => {
    return(
        <div className='header-contact'>
            <div className='menu-contact'>
                <div>
                    <span><i className="fas fa-phone-alt"></i></span>
                </div>
                <div>
                    <h3 className='info-title'><span>{content}</span></h3>
                    <p>{number}</p>
                </div>
            </div>
        </div>
    )
}

export default menuContact