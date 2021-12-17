import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("username is required")
    .min(9, "username must be at least 9 characters"),
  email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
  password: yup
    .string()
    .required("password is required")
    .min(9, "password must be 9 characters"),
  tos: yup.boolean().oneOf([true], "must accept terms of service"),
});

export default formSchema;
