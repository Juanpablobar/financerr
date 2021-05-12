import './styles.scss'

// Componente del botón de whatsapp
const WhatsAppButton = () => {
    return(
        <div className='whatsAppButton'>
            <div>
                <a href='./' title='Enviar Mensaje Por WhatsApp'><i className='fab fa-whatsapp'></i></a>
            </div>
        </div>
    )
}

export default WhatsAppButton