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
  termsOfService: yup.boolean(),
});

export default formSchema;
