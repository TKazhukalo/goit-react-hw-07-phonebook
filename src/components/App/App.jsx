
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './App.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { Section } from 'components/Section/Section';
import { addContact, deleteContact} from 'redux/contactsSlice';
import { changeFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleCreateContacts = (currentValue) => {
    const alreadyContacts = contacts.some(obj => obj.name === currentValue.name);
    if (alreadyContacts) {
      alert(`${currentValue.name} is already in contacts`);
    } else {
      dispatch(addContact({
        name: currentValue.name,
        id: nanoid(),
        number: currentValue.number,
      }));
    }
  };

  const changeFilters = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <Container>
      <Section title="Phonebook">
        <Form onSubmit={handleCreateContacts} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilters} />
        <ContactsList contacts={filteredContacts} onDelete={()=>dispatch(deleteContact())} />
      </Section>
    </Container>
  );
};
