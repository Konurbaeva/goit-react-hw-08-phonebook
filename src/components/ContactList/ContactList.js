import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { selectAllContacts } from 'redux/contacts/selectors';
import css from './ContactList.module.css';

import { Filter } from '../Filter/Filter';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    Array.isArray(contacts) && (
      <ul className={css.list}>
        {contacts.map(({ id, name, phone }) => (
          <li key={id}>
            <Contact id={id} name={name} phone={phone}/>
          </li>
        ))}
        <Filter/>
      </ul>
    )
  );
};