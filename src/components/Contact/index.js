import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  //the Hook that'll manage the form data
  //A feature of this Hook is the ability to initialize the values of the state. In this case,
  // we want to clear the input fields on the component loading. Thus, we'll set the initial state to empty strings, to get the following expression:
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    }
    //we're using the setFormState function to update the formState value for the name property.
    //We assign the value taken from the input field in the UI with e.target.value and assign this value to the
    //property formState.name. We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. Without the spread operator,
    //the formState object would be overwritten to only contain the name: value key pair.
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    console.log("errorMessage", errorMessage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  // JSX
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            name="email"
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
          {/* only want this message to appear if the errorMessage contains an error message. We can condition this render in JSX with the following conditional statement:  */}
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
