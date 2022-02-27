import React from 'react';
import ContactApi from '../Api/ContactApi';

class Contact extends React.Component {
    state = {
        id: '',
        name: '',
        email: '',
        message: ''
    };
    add = async (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.email === '') {
            alert('All fields are requierd.');
            return;
        }
        const respose = await ContactApi.post('/contacts', this.state);
        this.props.addContactHandler(respose.data);
        this.setState({id:'', name: '', email: '', message: '' });
        this.props.history.push('/')
    }
    render() {
        return (<div className="ui main">
            <h2> Add Contact</h2>
            <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>Name:</label>
                    <input type="text" name="name" placeholder="Name"
                        value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}></input>
                </div>
                <div className="field">
                    <label>Email:</label>
                    <input type="text" name="email" placeholder="Email" value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}></input>
                </div>
                <div className="field">
                    <label>Message:</label>
                    <textarea type="text" name="message" placeholder="Message"
                        value={this.state.message}
                        onChange={(e) => this.setState({ message: e.target.value })} />
                </div>
                <button className="ui button blue">SendMessage</button>
            </form >
        </div >);
    }
}

export default Contact;