import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CURRENT,
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
        type: "Personal",
      },
      {
        id: 2,
        name: "Bisrat",
        email: "bis@gmail.com",
        phone: "303-111-1111",
        type: "professional",
      },
      {
        id: 3,
        name: "Tedo",
        email: "tedo@gmail.com",
        phone: "303-111-1111",
        type: "professional",
      },
      {
        id: 4,
        name: "Fiker",
        email: "fiker@gmail.com",
        phone: "303-111-1111",
        type: "professional",
      },
    ],
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

  //clear curent contact

  //Update contact

  //filiter contact

  //Clear filiter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact
      }}
    >
      {props.children};
    </ContactContext.Provider>
  );
};

export default ContactState;
