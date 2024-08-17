import * as yup from "yup";

const loginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(32).required(),
  })
  .required();

export default loginSchema;
