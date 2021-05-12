import './styles.scss'

// Contenedor con input

const Input = ({ name, placeholder, onChange, otherClass, value }) => (
    <div className='inputContainer'>
        <input
        className={otherClass}
        // Clase adicional por si es necesario algún diseño en especial
        spellCheck="false"
        placeholder={(placeholder)}
        name={name}
        onChange={onChange}
        // Evento al cambiar el contenido
        value={value}
        />
    </div>
);

export default Input