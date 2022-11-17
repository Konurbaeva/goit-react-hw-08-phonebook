

import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from "../../redux/filter/selectors.js"
import { filterContacts } from '../../redux/filter/slice'

import  { selectFilter } from '../../redux/contacts/selectors'

import css from './Filter.module.css';

export function Filter() {
// const filter = useSelector(getFilter);
 const filter = useSelector(selectFilter);
 
const dispatch = useDispatch();

const handleChange = (e) => {
  const { value } = e.target;
 const action = filterContacts(value)
 dispatch(action);
}

  return (
    <div>
      <div>Find contacts by name</div>
      <input
        onChange={handleChange}
        placeholder="Search ..."
        type="text"
        name="filter" 
        value={filter} 
        className={css.input}
      />
    </div>
  );
}