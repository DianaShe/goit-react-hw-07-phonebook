import { useSelector } from 'react-redux';
import ContactDetails from '../ContactDetails/ContactDetails'
import { useGetContactsQuery } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';

export default function ContactList() {
  const {data, isFetching: isLoading, error} = useGetContactsQuery()
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    if (filter === '') {
      return data;
    } else {
      return data?.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    }
  };

  const visibleContacts = getVisibleContacts()

  return (
    <ul>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error.message}</p>}
      {visibleContacts &&
        visibleContacts.map((contact) => (
          <ContactDetails key={contact.id} contact={contact} />
        ))}
    </ul>
  );
}