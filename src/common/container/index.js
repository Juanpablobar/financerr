import './styles.scss'

// Componente que se usa en la mayoría de las secciones de la pagina
const Container = ({ content, otherClass, id }) => {
    return(
        <section className={`container ${otherClass}`} id={id}>
            {/* Cada contenedor tiene algunas especificaciones, puedes agregarlas poniendo otra clase con 'otherClass' */}
            {content}
        </section>
    )
}

export default Container