import { SignUpType } from "@/types/authTypes";
import { supabase } from "@/lib/supabase";
import { SignInWithPasswordCredentials } from "@supabase/supabase-js";

export const signup = async (payload: SignUpType) => {
  const { data, error } = await supabase.auth.signUp(payload);

  if (error) throw error;
  return data;
};

export const login = async (payload: SignInWithPasswordCredentials) => {
  const { data, error } = await supabase.auth.signInWithPassword(payload);

  if (error) throw error;
  return data;
};
