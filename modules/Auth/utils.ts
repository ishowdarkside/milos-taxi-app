import * as yup from "yup";

export const registrationSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    role: yup.string().oneOf(["drivers", "clients"]).required(),
    car_model: yup.string().required(),
    car_make: yup.string().required(),
    car_plate: yup.string().required(),
    car_seats: yup.number().required(),
  })
  .required();
