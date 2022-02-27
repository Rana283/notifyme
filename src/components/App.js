import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import api from '../Api/ContactApi';
import './App.css';
import Contact from './Contact';
import ContactDetails from './ContactDetails';
import Header from './Header';
import ListView from './ListView';
import { v4 as uuid } from 'uuid';
function App() {
  const [contacts, setContacts] = useState([]);

  const retriveContactsList = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }
  const addContactHandler = async (contact) => {
    delete contact.id;
    const request = {
      id: uuid(),
      ...contact
    };
    const responseData = await api.post("/contacts", request);
    setContacts([...contacts, responseData.data]);
  }
  useEffect(() => {
    const getAllContacts = async () => {
      const getAllcontacts = await retriveContactsList();
      // const retriveContacts = JSON.parse(localStorage.getItem('CONTACT_KEY'));
      if (getAllcontacts) {
        setContacts(getAllcontacts);
      }
    }
    getAllContacts();
  }, []);

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const updatedList = contacts.filter((contact) => {
      return (contact.id !== id)
    });
    setContacts(updatedList);
  }

  useEffect(() => {
    // localStorage.setItem('CONTACT_KEY', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact render={(props) =>
          (
            <ListView
              {...props}
              contacts={contacts}
              getRemoveContact={removeContactHandler}
            />
          )}
          />
          <Route
            path="/add"
            render={(props) =>
            (
              <Contact
                {...props}
                addContactHandler={addContactHandler}
              />
            )}
          />
          <Route
            path="/contactDetails/:id"
            render={(props) =>
            (
              <ContactDetails
                {...props}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
