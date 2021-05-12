import './styles.scss';

// Componente de los botones de la página

const Button = ({ children, onClick }) => (
  // Evento al presionar el botón
  <button onClick={onClick}>
    {/* Contenido del botón */}
    {children}
  </button>
);

export default Button;