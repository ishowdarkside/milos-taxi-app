export type RegistrationInterface = {
  name: string;
  email: string;
  password: string;
  role: "driver" | "client";
  car_make: string;
  car_model: string;
  car_plate: string;
};
