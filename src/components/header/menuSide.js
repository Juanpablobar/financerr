import React from 'react'
import Logo from '../../common/logo'
import Button from './buttonToggle'
import MenuLinks from './menuLinks'

// Componente del menú lateral
const MenuSide = React.forwardRef (( props, ref ) => {

    return(
        // Se le pasa un ref al menú lateral para identificarlo y poder mostrarlo y ocultarlo
        <div className='menuSide' ref={ref}>
            <div className='menuSide-content'>
                {/* logo */}
                <Logo src='logo.png' link='./' alt='Logo' />
                {/* botón para ocultarlo */}
                <Button click={props.click} content={<i className='fas fa-times'></i>} />
            </div>
            <div className='menuSide-links'>
                {/* links */}
                <MenuLinks />
            </div>
        </div>
    )
})

export default MenuSide