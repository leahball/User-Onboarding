import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import FormResults from "./Components/FormResults";
import axios from "axios";
import schema from "../src/Validation/formSchema";
import * as yup from "yup";

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  tos: false,
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
};

const initialUser = [];
// const initialDisabled = true;

function App() {
  // const [user, setUser] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  // const [disabled, setDisabled] = useState(initialDisabled);

  //Helpers
  // const getUsers = () => {
  //   //get users
  // };
  // const postUsers = () => {
  //   //post users to state
  // };

  // const handleSubmit = () => {
  //   //wip
  // };
  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  return (
    <div className="App">
      <Form values={formValues} />
    </div>
  );
}

export default App;
