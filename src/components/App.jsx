import React from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import Notification from "./Notification";
import { Wrapper } from "./App.styles";
import { useSelector } from "react-redux";
import { getContact } from "../redux/contactSelectors";
function App() {
  const contacts = useSelector(getContact);
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length < 1 ? (
        <Notification text="Contact list is empty" />
      ) : (
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      )}
    </Wrapper>
  );
}
export default App;
