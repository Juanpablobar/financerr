import Container from '../../common/container'
import HeadingTitle from '../../common/headingTitle'
import './styles.scss'

// Componente que incluye el aviso de privacidad
const PrivacyBlock = () => {
    return(
        // Contenedor
        <Container otherClass='privacyBlock' content={
            <>
                {/* Título */}
                <HeadingTitle content='Notice Of Privacy' />
                {/* Texto, podrías meterloen un archivo json para que se vea más limpia, pero puedes dejarlo así para tener mejor manejo de el y separarlo por párrafo */}
                <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
            </>
        } />
    )
}
export default PrivacyBlock