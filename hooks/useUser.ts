import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const received = await supabase.auth.getUser();
      const userId = received?.data?.user?.id;
      const profile = await supabase.rpc(" find_user_by_id", { user_id: userId });
      setUser(profile.data?.at(0));
    };

    fetchUser();
  }, []);

  return { user };
};
