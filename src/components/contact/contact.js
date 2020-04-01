import React, { useState, useEffect } from "react";
import axios from "axios";

function Contact() {
  /* NEW: validation for inputs vvvv */
  const [fieldErrors, setFieldErrors] = useState({});
  const validationRules = {
    email: val => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: val => !!val
  };
  const validate = () => {
    let errors = {};
    let hasErrors = false;
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key]);
      hasErrors |= errors[key];
    }
    setFieldErrors(prev => ({ ...prev, ...errors }));
    return !hasErrors;
  };
  const renderFieldError = field => {
    if (fieldErrors[field]) {
      return <p className="errorMsg">Please enter a valid {field}.</p>;
    }
  };
  useEffect(() => {
    // Only perform interactive validation after submit
    if (Object.keys(fieldErrors).length > 0) {
      validate();
    }
  }, 
  );
  /* End new validation ^^^^ */

  // Input Change Handling
  const [inputs, setInputs] = useState({
    email: "",
    message: ""
  });
  const handleOnChange = event => {
    event.persist();
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  };

  // Server State Handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      setFieldErrors({});
      setInputs({
        email: "",
        message: ""
      });
    }
  };
  const handleOnSubmit = event => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: "https://formspree.io/YOUR_FORM_ID",
      data: inputs
    })
      .then(r => {
        handleServerResponse(true, "Thanks!");
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error);
      });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleOnSubmit} noValidate>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleOnChange}
          value={inputs.email}
          className={fieldErrors.email ? "error" : ""}
        />
        {renderFieldError("email")}
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          value={inputs.message}
          className={fieldErrors.message ? "error" : ""}
        ></textarea>
        {renderFieldError("message")}
        <button type="submit" disabled={serverState.submitting}>
          Submit
        </button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;