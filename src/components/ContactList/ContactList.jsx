import { Contact, Info } from './ContactList.styled';
import { Button } from 'utils/Utils.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getVisibleContacts, getContacts } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';

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
        visibleContacts.map(({ name, id, number }) => (
          <Contact key={id}>
            <Info>
              {name}: {number}
            </Info>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </Contact>
        ))}
    </ul>
  );
}