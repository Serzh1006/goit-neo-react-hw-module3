import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as yup from "yup";
import css from "./contactform.module.css";

const initialValues = {
  username: "",
  number: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: yup.string().required("Required"),
});

const ContactForm = ({ add }) => {
  const nameID = useId();
  const numberID = useId();

  const handleSubmit = (values, actions) => {
    add({
      id: nanoid(),
      name: values.username.trim(),
      number: values.number.trim(),
    });
    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameID}>
          Name
          <Field
            className={css.inputForm}
            type="text"
            name="username"
            id={nameID}
            autoComplete="off"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="username"
            component="div"
          />
        </label>
        <label htmlFor={numberID}>
          Number
          <Field
            className={css.inputForm}
            type="text"
            name="number"
            id={numberID}
            autoComplete="off"
          />
          <ErrorMessage
            className={css.errorMessage2}
            name="number"
            component="span"
          />
        </label>
        <button className={css.addBtn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
