import React, { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';


const Formulario = ({ crearContacto }) => {

    //CREANDO EL STATE DE LAS ContactoS
    const [contacto, actualizarContacto] = useState({
        nombre: '',
        numero: '',
        fecha: '',
        hora: '',
        descripcion: '',
    })

    //CREANDO STATE PARA ERROR
    const [error, actualizarError] = useState(false);

    //FUNCION QUE SE EJECUTA CADA VEZ QUE EL USUARIO ESCRIBE EN UN INPUT

    const actualizarState = e => {
        actualizarContacto({
            ...contacto,
            [e.target.name]: e.target.value
        })
    }


    //EXTRAYENDO LOS VALORES

    const { nombre, numero, fecha, hora, descripcion } = contacto;

    //CUANDO EL USUARIO PRESIONE EL BOTON

    const submitContacto = e => {
        e.preventDefault();

        //VALIDANDO DATOS INGRESADOS
        if (nombre.trim() === '' ||
            numero.trim() === '' ||
            fecha.trim() === '' ||
            hora.trim() === '' ||
            descripcion.trim() === '') {
            actualizarError(true);
            return;
        }

        //ELIMINANDO EL MENSAJE DE ERROR PREVIO
        actualizarError(false);

        //ASIGNANDO UN ID
        contacto.id = uuid();
        console.log(contacto);


        //CREANDO LA Contacto 
        crearContacto(contacto);

        //REINICIANDO EL FORM
        actualizarContacto({
            nombre: '',
            numero: '',
            fecha: '',
            hora: '',
            descripcion: '',
        })
    }

    return (
        <Fragment>
            <h2>Crear Contacto</h2>

            <form
                onSubmit={submitContacto}
            >
                <label>Nombre</label>
                <input type="text" name="nombre" className="u-full-width"
                    placeholder="Nombre Contacto" onChange={actualizarState} value={nombre} />

                <label>Numero</label>
                <input type="number" name="numero" className="u-full-width"
                    placeholder="Numero" onChange={actualizarState} value={numero} />

                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width"
                    onChange={actualizarState} value={fecha} />

                <label>Hora</label>
                <input type="time" name="hora" className="u-full-width"
                    onChange={actualizarState} value={hora} />

                <label>Descripcion</label>
                <textarea
                    className="u-full-width"
                    name="descripcion"
                    onChange={actualizarState}
                    value={descripcion}>
                </textarea>

                <button type="submit" className="u-full-width button-primary">Agregando Contacto</button>
                {error
                    ? <p className="alerta-error">Es necesario llenar todos los campos</p>
                    : null
                }
            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearContacto: PropTypes.func.isRequired
}
export default Formulario;