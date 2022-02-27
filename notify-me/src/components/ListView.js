import React from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';


const ListView = (props) => {
    const setRemoveContactId = (e) => {
        props.getRemoveContact(e);
    }
    const renderContactList = props.contacts.map((contact, index) => {
        contact['id'] = index + 1;
        return (
            <ContactCard id={contact.id} key={contact.id} contact={contact} clickHandler={setRemoveContactId} />
        );
    });
    return (<div className="main" style={{ paddingTop: '55px' }} >
        <div>
            <h2>Contact List</h2>
            <Link to="/add">
                <button className="ui button blue right">Add Contact</button>
            </Link>
        </div>
        <div className="ui celled list">{renderContactList}</div>
    </div>);
};

export default ListView;