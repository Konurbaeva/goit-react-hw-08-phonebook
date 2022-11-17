
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

import { getFilteredContacts } from 'redux/contacts/selectors'
import css from './ContactForm.module.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ContactForm() {
  const getContacts = useSelector(getFilteredContacts)
   const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const contactExists = getContacts.find(item => item.name === form.elements.name.value)

    if(contactExists) { 
      toast.warn('🦄 Contact exists!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

      return
    }
    else if(!form.elements.name.value){
      toast.warn('🦄 Provide name!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

      return
    }


    const action = addContact({name:form.elements.name.value, number:form.elements.number.value})
    dispatch(action)
    form.reset();
  };

 
   return (
     <form onSubmit={handleSubmit}>
       Name
       <input
         placeholder="Enter name"
         type="text"
         name="name"
         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
         required
         className={css.input}
       />
            <br/>
       Number
       <input
         type="tel"
         name="number"
         placeholder="Enter phone number"
         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
         required
         className={css.input}
       />
       <ToastContainer />
       <button type="submit" className={css.button}>Add contact</button>
     </form>
   );
 }