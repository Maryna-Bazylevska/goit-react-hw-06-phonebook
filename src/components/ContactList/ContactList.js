import { List, Text, Button } from "./ContactList.styles";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/contactsAction";
import { getAllContacts } from "../../redux/contactSelectors";

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);
  return (
    <List>
      {contacts.map((contact) => (
        <li key={contact.id} className="listStyle">
          <Text className="TodoList__text">
            {contact.name}:{contact.number}
          </Text>
          <Button
            type="button"
            className="TodoList__btn"
            onClick={() => dispatch(actions.deleteContact(contact.id))}
          >
            Delete
          </Button>
        </li>
      ))}
    </List>
  );
}

export default ContactList;
