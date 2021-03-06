import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const addContact = createAction("contact/addContact", (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
});

const deleteContact = createAction("contact/delete");

const filterChange = createAction("contact/filter");

const actions = { addContact, deleteContact, filterChange };
export default actions;
