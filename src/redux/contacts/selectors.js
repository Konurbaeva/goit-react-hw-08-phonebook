export const selectLoading = state => state.contacts.loading;

 export const selectFilter = state => state.contacts.filter;

export const getFilteredContacts = ({ contacts, filter }) => {
    if (filter.length === 0) {
      return contacts.items;
    }

    const normalisedFilter = filter.toLowerCase();
    const filteredContacts = contacts.items.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      const result = normalizedName.includes(normalisedFilter);
      return result;
    });
    return filteredContacts;
 };