import { Session, User } from "@supabase/supabase-js";

export interface AuthType {
  session: Session | null;
  user: User | null;
}
