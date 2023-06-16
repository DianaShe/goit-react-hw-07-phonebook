import { Contact, Info } from './ContactDetails.styled';
import { Button } from 'utils/Utils.styled';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export default function ContactDetails({contact}) {
  const [deleteContact] = useDeleteContactMutation()

    return (
        <Contact >
            <Info>
              {contact.name}: {contact.number}
            </Info>
            <Button type="button" onClick={() => deleteContact(contact.id)}>
              Delete
            </Button>
          </Contact>
    )
}