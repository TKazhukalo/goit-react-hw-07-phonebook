import React from "react";
import { Button, ContactItem, ListItem } from "./ContactsList.styled";
import {  useDispatch, useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/selectors";
import { deleteContact } from "redux/operations";

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ListItem>
      {contacts.map(({ name, number, id, phone }) => {
        const contactNumber = number || phone;
        return (
          <ContactItem key={id}>
            <span>
              {name}: {contactNumber}
            </span>
          <Button type="button"
              name="delete"
              onClick={() => dispatch(deleteContact(id))}>
              Delete
          </Button>
          </ContactItem>
        );
      })}
    </ListItem>
  );
};