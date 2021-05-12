import './styles.scss';


// Componente donde se incluye la imagen del logo (header,footer,etc)

const Logo = ({ src, link, alt, width, height }) => (
    <div className='logo-container'>
        <a href={link}>
            {/* imagen */}
            <img src={`/img/${src}`} alt={alt} title={alt} width={width} height={height} />
        </a>
    </div>
)

export default Logo