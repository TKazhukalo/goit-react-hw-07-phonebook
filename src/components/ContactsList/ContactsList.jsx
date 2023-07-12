import React from "react";
import { Button, ContactItem, ListItem } from "./ContactsList.styled";
import { useDispatch, useSelector } from "react-redux";
import { visibleContacts } from "redux/selectors";
import { deleteContact } from "redux/contactsSlice";

export const ContactsList = () => {
  const contacts = useSelector(visibleContacts);
  const dispatch = useDispatch();
  return (
    <ListItem>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem key={id}>
            <span>
              {name}: {number}
            </span>
            <Button type="button" onClick={()=>dispatch(deleteContact(id))}>
              Delete
            </Button>
          </ContactItem>
        );
      })}
    </ListItem>
  );
};