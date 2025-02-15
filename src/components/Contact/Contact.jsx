import css from "./contact.module.css";

const Contact = ({ data: { name, number, id }, deleteF }) => {
  return (
    <li>
      <div className={css.wrapContact}>
        <div className={css.nameWrap}>
          <p>{name}</p>
          <p>{number}</p>
        </div>
        <button
          className={css.btnDelete}
          onClick={() => deleteF(id)}
          type="button"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
