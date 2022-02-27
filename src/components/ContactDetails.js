import React from 'react';
import user from '../assets/user.png'
import { Link } from 'react-router-dom'

const ContactDetails = (props) => {
    console.log(props);
    const {name, email, message } = props.location.state.contact;
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"></img>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                    <div>{message}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">Back to contact list</button>
                </Link>
            </div>
        </div>);
}

export default ContactDetails;