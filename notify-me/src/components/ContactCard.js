import React from 'react';
import user from '../assets/user.png'
import { Link } from 'react-router-dom'

const ContactCard = (props) => {
    const { id, name, email, message } = props.contact;
    return (
        <div className="item">
            <div className="image">
                <img src={user} alt="user"></img>
            </div>
            <div className="content">
                <Link to={{ pathname: `/contactDetails/${id}`, state: { contact: props.contact } }} >
                    <div className="header">{name}</div>
                    <div>{email}</div>
                    <div>{message}</div>
                </Link>
            </div>
            <i className="trash alternate outline icon" style={{ color: 'red', marignTop: '7px', cursor: 'pointer' }} onClick={() => props.clickHandler(id)}></i>
        </div >);
}

export default ContactCard;