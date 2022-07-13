import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactStateComponent = () => {
    const defaultContactState = new Contact('Mario','Aguirre','mario.aguirre@gmail.com',false);

    return (
        <div>
            <div>
                <h1>
                    Tu contacto:
                </h1>
            </div>
            <ContactComponent contact={defaultContactState}></ContactComponent>
        </div>
    );
};


export default ContactStateComponent;
