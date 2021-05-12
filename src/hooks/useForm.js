import { useState, useEffect } from "react";
import { notification } from "antd";
import 'antd/lib/notification/style/index.css';
import firebaseConfig from '../helpers/firebase'
import { getDatabase, ref, push } from 'firebase/database'

// Creamos un Hook para validar el formulario y enviar la información a la base de datos
const useForm = (validate) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [shouldSubmit, setShouldSubmit] = useState(false);

    // Mensaje de éxito al enviar la información
    const openNotificationWithIcon = (type) => {
        notification[type]({
            message: "Success",
            description: "Tu mensaje ha sido enviado con éxito!",
        });
    };

    // Manejador de evento que se usa al subir el formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(values));

        if (Object.keys(values).length === 4) {
        // Si no hay errores se ejectuta lo siguiente

        // Conexión con la base de datos de firebase
		const database = getDatabase(firebaseConfig)

        // Referencia para indicar donde se guardara la información
		const databaseRef = ref(database, 'form')

        // con PushDataBase se envía la información
		const pushDatabase = push(databaseRef, values)

        // Finalmente se ejecuta
        pushDatabase.then(() => {
            // se cambia el estado setShouldSubmit a verdadero
            setShouldSubmit(true);
		}).catch((e) => {
            console.error(e)
        });
        }
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && shouldSubmit) {
            // Si no hay errores y la información se envía bien, el valor de los input se cambia a vacío y se activa el emnsaje de exito
            setValues("");
            openNotificationWithIcon("success");
        }
    }, [errors, shouldSubmit]);

    // Manejador de eventos para los input cada que cambien su contenido
    const handleChange = (event) => {
        event.persist();
        // el valor de los input se suma al array 'values'
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
        setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
    };

    return {
        handleChange,
        handleSubmit,
		shouldSubmit,
        values,
        errors,
    };
};

export default useForm;
