import { deleteContact } from "components/Redux/operations";
import { useDispatch } from "react-redux";
import css from './ContactListItem.module.css'




export const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDeleteButton = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <li className={css.contactListItem}>
      <p>
        {name}: {phone}
      </p>
      <button type="button" className={css.contactListItemBtn} onClick={() => handleDeleteButton(id)}>
              Delete
      </button>
    </li>
  );
};