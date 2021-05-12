// Validación del formulario

export default function validate(values) {
    // Contamos el número de errores
    let errors = {};
    // Verificamos que ninguno de los campos este vacío
    if (!values.name) {
        errors.name = "El Nombre es Obligatorio";
    }
    if (!values.email) {
        errors.email = "El Correo Electrónico es Obligatorio";
        // Verificamos que el correo este bien escrito
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "El Correo Electrónico es Inválido";
    }
    if (!values.phone) {
        errors.phone = "El Teléfono es Obligatorio";
    }    
    
    if (!values.message) {
        errors.message = "El Mensaje es Obligatorio";
    }
    return errors;
}