import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const received = await supabase.auth.getUser();
      const profile = await supabase.from("profiles").select().eq("id", received?.data?.user?.id);
      setUser(profile.data?.at(0));
    };

    fetchUser();
  }, []);

  return { user };
};
