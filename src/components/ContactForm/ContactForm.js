import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/contactsAction";
import { getContact } from "../../redux/contactSelectors";
import { Form, Text, Button, Input } from "./ContactForm.styles";
function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const contacts = useSelector(getContact);
  const dispatch = useDispatch();
  const addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    if (contacts.find((item) => item.name === contact.name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(actions.addContact(name, number));
  };
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, number });
    reset();
  };
  const reset = () => {
    setName("");
    setNumber("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>
        <Text>Name</Text>
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          id={nameInputId}
        />
      </label>
      <label htmlFor={numberInputId}>
        <Text>Number</Text>
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          id={numberInputId}
        />
      </label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
export default ContactForm;
