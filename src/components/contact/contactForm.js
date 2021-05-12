import Input from '../../common/input'
import Button from '../../common/button'

import useForm from "../../hooks/useForm";
import validate from "../../helpers/validationRules";

// Componente del formulario de contacto
const ContactForm = () => {

    const { values, errors, handleChange, handleSubmit } = useForm(validate);

    // se valida el contenid o de los input y si está vacío mando un mensaje de erro
    const ValidationType = ({ type }) => {
        const ErrorMessage = errors[type];
        return errors[type] ? (
        <div className='error'>
            <span>{ErrorMessage}</span>
        </div>
        ) : (
        <span></span>
        );
    };  
    
    return(
        <div className='contactForm'>
            {/* Formulario */}
            <form onSubmit={handleSubmit} id='contactForm'>
                {/* validación */}
                <ValidationType type="name" />
                {/* input */}
                <Input
                    placeholder='Tu Nombre'
                    name='name'
                    value={values.name || ""}
                    onChange={handleChange}
                />

                <ValidationType type="email" />
                <Input
                    placeholder='Tu Email'
                    name='email'
                    value={values.email || ""}
                    onChange={handleChange}
                />

                <ValidationType type="phone" />
                <Input
                    placeholder='Tu Teléfono'
                    name='phone'
                    value={values.phone || ""}
                    onChange={handleChange}
                />

                <ValidationType type="message" />
                <Input
                    otherClass='inputMessage'
                    placeholder='Tu Mensaje'
                    name='message'
                    value={values.message || ""}
                    onChange={handleChange}
                />

                {/* botón para enviar formulario */}
                <Button
                children='ENVIAR MENSAJE'
                />
            </form>
        </div>
    )
}

export default ContactForm