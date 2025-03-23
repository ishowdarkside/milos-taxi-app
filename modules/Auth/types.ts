export type RegistrationInterface = {
  name: string;
  email: string;
  password: string;
  role: "drivers" | "clients";
  car_make: string;
  car_model: string;
  car_plate: string;
  car_seats: number;
};
