import { Session, User } from "@supabase/supabase-js";

export interface AuthType {
  session: Session | null;
  user: User | null;
}

export type SignUpType = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
};
