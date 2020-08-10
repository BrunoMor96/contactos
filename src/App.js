import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Contactos from './components/Contactos'


function App() {


  let contactosIniciales = JSON.parse(localStorage.getItem('contactos'));
  if (!contactosIniciales) {
    contactosIniciales = [];
  }


  //ARREGLO DE CITAS
  const [contactos, guardarContactos] = useState(contactosIniciales);

  //USE-EFFECT PARA REALIZAR OPERACIONES CUANDO EL STATE CAMBIA
  useEffect(
    () => {
      if (contactosIniciales) {
        localStorage.setItem('contactos', JSON.stringify(contactos))
      }
      else {
        localStorage.setItem('contactos', JSON.stringify([]))
      }
    }, [contactos, contactosIniciales]
  );

  //FUNCION PARA LEER LAS CITAS ACTUALES Y LAS AGREGUE
  const crearContacto = contacto => {
    guardarContactos([
      ...contactos,
      contacto
    ]);
  }

  //FUNCION QUE ELIMINA CITAS POR ID
  const elimarContacto = id => {
    const nuevasContactos = contactos.filter(contacto => contacto.id !== id);
    guardarContactos(nuevasContactos)
  }

  //MENSAJE CONDICIONAL
  const titulo = contactos.length === 0 ? 'No hay Contactos' : 'Administra tus contactos';


  return (
    <Fragment>
      <h1>Nuevo contacto</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearContacto={crearContacto}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {contactos.map(contacto => (
              <Contactos
                key={contacto.id}
                contacto={contacto}
                elimarContacto={elimarContacto}
              />
            ))}
          </div>
        </div>
      </div>

    </Fragment>

  );
}

export default App;
