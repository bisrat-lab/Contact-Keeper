import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Adugna",
        email: "adugna@gmail.com",
        phone: "303-111-1111",
        type: "work",
      },
      {
        id: 2,
        name: "Bisrat",
        email: "bis@gmail.com",
        phone: "303-111-1111",
        type: "family",
      },
      {
        id: 3,
        name: "Tedo",
        email: "tedo@gmail.com",
        phone: "303-111-1111",
        type: "friend",
      },
      {
        id: 4,
        name: "Fiker",
        email: "fiker@gmail.com",
        phone: "303-111-1111",
        type: "family",
      },
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //add contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //set crent contact
  const setCurrent = contact  => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //clear curent contact
const clearCurrent =() => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Update contact
  const updateContact = contact  => {
    dispatch({ type:  UPDATE_CONTACT, payload: contact });
  };

  //filiter contact
  const filterContacts = text  => {
    dispatch({ type:  FILTER_CONTACTS, payload: text });
  };

  //Clear filiter
  const clearFilter =() => {
    dispatch({ type: CLEAR_FILTER });
  };


  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        filterContacts,
        updateContact,
        clearFilter

      }}
    >
      {props.children};
    </ContactContext.Provider>
  );
};

export default ContactState;
