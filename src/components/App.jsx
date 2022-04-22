 import React, { useState , useEffect} from "react";
 import { nanoid } from "nanoid";
 import ContactForm from './ContactForm';
 import ContactList from "./ContactList";
 import Filter from './Filter';
 import Notification from './Notification';
 import {Wrapper} from './App.styles';
 import { useSelector } from "react-redux";
 
function App() {
const contacts = useSelector(state => state.contacts);



  return (
    <Wrapper>
       <h1>Phonebook</h1>
       <ContactForm  />
       {contacts.length < 1 ? (
        <Notification text="Contact list is empty" />
      ) : (
        <div>
       <h2>Contacts</h2>
       <Filter />
       <ContactList/>
       </div>
      )}
    </Wrapper>
  ); 
}
export default App;