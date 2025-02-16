import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import css from "./app.module.css";

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) || []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

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
      <h1 className={css.primaryTitle}>Phonebook</h1>
      <ContactForm add={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      {contacts.length !== 0 ? (
        <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
      ) : (
        <p className={css.messageList}>No records found yet!</p>
      )}
    </div>
  );
};

export default App;
