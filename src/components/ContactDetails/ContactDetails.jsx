import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { Contact, Info } from './ContactDetails.styled';
import { Button } from 'utils/Utils.styled';

export default function ContactDetails({contact}) {
  const dispatch = useDispatch()

    return (
        <Contact >
            <Info>
              {contact.name}: {contact.number}
            </Info>
            <Button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </Button>
          </Contact>
    )
}