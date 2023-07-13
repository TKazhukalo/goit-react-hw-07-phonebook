import React from "react";
import { Button, ContactItem, ListItem } from "./ContactsList.styled";
import {  useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/selectors";

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
 // const dispatch = useDispatch();
  return (
    <ListItem>
      {contacts.map(({ name, phone, id }) => {
        return (
          <ContactItem key={id}>
            <span>
              {name}:{phone}
            </span>
            <Button type="button">
              Delete
            </Button>
          </ContactItem>
        );
      })}
    </ListItem>
  );
};