import Contact from "../Contact/Contact";
import css from "./contactlist.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.listContacts}>
      {contacts.map((contact) => {
        return (
          <Contact key={contact.id} data={contact} deleteF={deleteContact} />
        );
      })}
    </ul>
  );
};

export default ContactList;
