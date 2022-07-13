import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>
                Nomebre: {contact.name}
            </h2>
            <h3>
                Apellido: {contact.lastname}
            </h3>
            <h4>
                E-mail: {contact.email}
            </h4>
            <h5>
                Conectado: {contact.conecting ? 'Contacto En Linea' : 'Contacto No disponible'}
            </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
