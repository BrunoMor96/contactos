import React from 'react';
import PropTypes from 'prop-types';

const Contactos = ({ contacto, elimarContacto }) => (
    <div className="contacto">
        <p>Nombre: <span>{contacto.nombre}</span></p>
        <p>Numero: <span>{contacto.numero}</span></p>
        <p>Fecha: <span>{contacto.fecha}</span></p>
        <p>Hora: <span>{contacto.hora}</span></p>
        <p>Descripcion del contacto: <span>{contacto.descripcion}</span></p>

        <button className="button eliminar u-full-width"
            onClick={() => elimarContacto(contacto.id)}>
            Eliminar &times;
            </button>
    </div>
);

Contactos.propTypes = {
    contacto: PropTypes.object.isRequired,
    elimarContacto: PropTypes.func.isRequired
}
export default Contactos;