import { useSelector, useDispatch } from 'react-redux';
import { Container } from './App.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { Section } from 'components/Section/Section';
import { selectContacts, selectStatusFilters } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const value = useSelector(selectStatusFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <Filter value={value}/>
        ) : (
          <p>Введіть дані</p>
        )}
         {contacts.length > 0 && (<b>Request in progress...</b>)}
        <ContactsList />
      </Section>
    </Container>
  );
};
