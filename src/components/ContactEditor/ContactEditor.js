
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import css from './ContactEditor.module.css';

// export const ContactEditor = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const text = form.elements.text.value;
//     // TODO Madina use toastify?
//     // if (text === '') {
//     //   return toast.error('Please enter contact');
//     // }

//     dispatch(addContact(text));
//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <input name="text" className={css.input} />
//       <button type="submit" className={css.button}>
//         Add contact
//       </button>
//     </form>
//   );
// };

// id, name, phone
export const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // TODO Madina use toastify?
    // if (text === '') {
    //   return toast.error('Please enter contact');
    // }

    dispatch(addContact({name: form.elements.name.value, phone: form.elements.phone.value}));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="text" className={css.input} />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};