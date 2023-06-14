import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getVisibleContacts, getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import ContactDetails from '../ContactDetails/ContactDetails'

export default function ContactList() {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(getVisibleContacts);
  const { isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error}</p>}
      {visibleContacts.length > 0 &&
        visibleContacts.map((contact) => (
          <ContactDetails key={contact.id} contact={contact} />
        ))}
    </ul>
  );
}