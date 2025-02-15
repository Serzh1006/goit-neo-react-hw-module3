import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import data from "./baseContacts.json";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (idContact) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((obj) => obj.id !== idContact);
    });
  };

  const visibleContacts = contacts.filter((obj) =>
    obj.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm add={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
