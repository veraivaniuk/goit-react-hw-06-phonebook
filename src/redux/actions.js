import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";
import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from "./types";

const addContact = createAction(ADD_CONTACT, (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction(DELETE_CONTACT);

const changeFilter = createAction(FILTER_CONTACT);

const contactsActions = { addContact, deleteContact, changeFilter };
export default contactsActions;
