import { useState } from 'react';
import { FormContainer, AddButton } from './ContactForm.styled';
import { Input } from 'utils/Utils.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const {items} = useSelector(getContacts);
  
  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const isInPhoneBook = (name, contacts) => {
    return contacts.find(contact => contact.name === name)
      ? true
      : false;
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    if (items.length && isInPhoneBook(name, items)) {
      alert(name + ' is already in contacts.');
    } else {
      dispatch(addContact({name, number}))
    }
    setName('');
    setNumber('');
    e.currentTarget.reset();
  };

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
          />
        </label>
        <label>
          <p>Number</p>
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
          />
        </label>
        <AddButton type="submit">Add contact</AddButton>
      </FormContainer>
    </div>
  );
}
