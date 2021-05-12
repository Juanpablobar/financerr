import { Link } from "react-router-dom";

// Componente de los links del menú, se oculta al llegar a los 1000px 

const MenuLinks = () => {
    
    // Funcíon que desliza suavemente hacia el link presionado
    const scrollTo = (id) => {
        
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: "smooth",
        });
    };    

    return (
        <>
            <div className='link-item' onClick={() => scrollTo("inicio")}>
                <Link to='./#inicio'>Inicio</Link>
            </div>
            <div className='link-item' onClick={() => scrollTo("cursos")}>
                <Link to='./#cursos'>Cursos</Link>
            </div>
            <div className='link-item' onClick={() => scrollTo("acerca-de")}>
                <Link to='./#acerca-de'>Acerca de</Link>
            </div>
            <div className='link-item' onClick={() => scrollTo("registro")}>
                <Link to='./#registro'>Registro</Link>
            </div>
        </>
    );
};

export default MenuLinks