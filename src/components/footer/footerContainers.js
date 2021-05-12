
// Componente con los contenedores para la parte de los links del footer
const FooterContainer = ({ otherClass, content }) => {
    return(
        <div className={`footerContainer ${otherClass}`}>
            {content}
        </div>
    )
}

export default FooterContainer