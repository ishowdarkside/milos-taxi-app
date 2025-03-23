import { User } from "@supabase/supabase-js";

export interface AuthType {
  user: User | null;
}
