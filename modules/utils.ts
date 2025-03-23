import * as yup from "yup";

export const registrationSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    role: yup.string().oneOf(["driver", "client"]).required(),
  })
  .required();
