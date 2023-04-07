import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {selectContacts, selectFilter, selectVisibleContacts } from 'components/Redux/selectors';
import { ContactListItem } from './ContactListItem/ContactListItem';
import { fetchContacts } from 'components/Redux/operations';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.wraperContactList}>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(contact => (
          <ContactListItem key={contact.id} {...contact} />
        ))
      ) : filterValue && contacts ? (
        <div>Couldn't find any matches.</div>
      ) : (
        <div>You don't have any contacts yet.</div>
      )}
    </ul>
  );
};
