import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import FormResults from './Components/FormResults';
import axios from 'axios';
import schema from '../src/Validation/formSchema';
import * as yup from 'yup';
import { useEffect } from 'react';

const initialFormValues = {
  username: '';
  email: '';
  password: '';
  termsOfService: false;
}

const initialFormErrors = {
  username: '';
  email: '';
  password: '';
}

const initialUser = [];
const initialDisabled = true;

export default function App() {
const [user, setUser] = useState(initialUser);

}
