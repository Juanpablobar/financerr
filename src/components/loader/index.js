import './styles.scss'

// Componente de carga mientras el contenido de la página está lista
const Loader = () => {

    return(
        <div className='loader'>
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Loader