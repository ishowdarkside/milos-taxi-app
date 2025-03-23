import { supabase } from "@/lib/supabase";
import { SignInWithPasswordCredentials, SignUpWithPasswordCredentials } from "@supabase/supabase-js";
import { RegistrationInterface } from "@/modules/Auth/types";

export const createUserDocument = async (type: "drivers" | "clients", payload: RegistrationInterface) => {
  const authPayload = { email: payload.email, password: payload.password };
  const { data, error: authError } = await signup(authPayload);

  if (authError) return { error: authError };

  const { car_make, car_model, car_plate, car_seats } = payload;

  const publicUserPayload = {
    id: data.user?.id,
    ...(type === "drivers" ? { car_make, car_model, car_seats, car_plate } : {}),
  };

  const { error } = await supabase.from(type).insert(publicUserPayload);

  return { error };
};

export const signup = async (payload: SignUpWithPasswordCredentials) => {
  const { data, error } = await supabase.auth.signUp(payload);

  return { data, error };
};

export const login = async (payload: SignInWithPasswordCredentials) => {
  const { data, error } = await supabase.auth.signInWithPassword(payload);

  if (error) throw error;
  return data;
};
