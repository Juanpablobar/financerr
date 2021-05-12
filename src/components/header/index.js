import React, { useRef } from 'react'
import MenuLinks from './menuLinks'
import MenuContact from './menuContact'
import ButtonToggle from './buttonToggle'
import MenuSide from './menuSide'
import Logo from '../../common/logo'
import './styles/styles.scss'

//Componente que contine el header y el menú lateral

const Header = () =>{

    // Referrencias para el menú lateral y la sombra que aprece milisegundos antes
    let refToggleMenu = useRef(),
    refToggleMenuBlack = useRef()

    // Se activa al presionar el bóton hamburguesa y muestra u oculta el menù lateral
    const handleToggleMenu = () => {

        let classExists = refToggleMenuBlack.current.classList.contains('menuSideBlack-show')

        if(classExists){
            // si el menú está visible, se le retira la clase y se oculta
            refToggleMenu.current.classList.remove('menuSide-show')
            setTimeout(() => {
                refToggleMenuBlack.current.classList.remove('menuSideBlack-show')
            },500)
        } else {
            // si el menú está oculto, se le agrega la clase y se muestra
            refToggleMenuBlack.current.classList.add('menuSideBlack-show')
            setTimeout(() => {
                refToggleMenu.current.classList.add('menuSide-show')
            },100)
        }
    };

    return(
        <header>
            <nav>

                <div className='header-logo'>
                    <Logo src='logo.png' link='./' alt='Logo' />
                </div>
                <div className='header-toggle'>
                    <ButtonToggle click={handleToggleMenu} content={
                    <>
                        <span></span>
                        <span></span>
                        <span></span>
                    </>
                    } />
                </div>

                <div className='header-links'>
                    <MenuLinks />
                </div>

                <MenuContact content='Free Consultation' number='(021) 231 - 2870' />

                <div className='menuSideBlack' ref={refToggleMenuBlack}>

                    <MenuSide ref={refToggleMenu} click={handleToggleMenu} />
                    
                </div>

            </nav>
        </header>
        )
}

export default Header